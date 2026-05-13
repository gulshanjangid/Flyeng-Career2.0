const fs = require('fs');
const path = require('path');

// 1. We will import the array from midtier.ts
const midtierSource = fs.readFileSync(path.join(__dirname, 'companies', 'midtier.ts'), 'utf-8');

// Quick and dirty extraction of the array
const arrayStart = midtierSource.indexOf('[');
const arrayString = midtierSource.substring(arrayStart, midtierSource.lastIndexOf(']') + 1);

// evaluate it safely here since it's just JS objects
let legacyCompanies;
eval('legacyCompanies = ' + arrayString);

const newCompanies = [];

legacyCompanies.forEach(c => {
    // Map to new schema
    const newC = {
        id: c.id,
        name: c.name,
        type: c.type,
        status: c.status,
        logo: c.logo,
        rating: c.rating,
        aiVerdict: c.aiVerdict,
        overview: {
            about: c.overview.about,
            headquarters: c.overview.headquarters,
            website: c.overview.website,
            founded: c.overview.founded,
            size: c.overview.size,
            rating: c.rating,
            updateTag: "MARCH 2026 VERIFIED"
        },
        roles: c.roles.map(r => ({
            name: r.title,
            description: "Entry/Mid level associate",
            ctc: r.ctc,
            inHand: r.inHand,
            breakdown: {
                base: r.base,
                variable: r.variable,
                deductions: r.deductions
            }
        })),
        techStack: c.techStack,
        process: c.process.map(p => ({
            name: p.step,
            duration: p.duration,
            difficulty: p.difficulty,
            desc: p.description,
            topics: p.topics
        })),
        eligibility: {
            cgpa: c.eligibility.cgpa,
            backlogs: c.eligibility.backlogs,
            gaps: c.eligibility.gap,
            notes: c.eligibility.notes
        },
        culture: c.culture,
        reality: {
            pros: c.reality.good,
            cons: c.reality.bad
        }
    };
    newCompanies.push(newC);
});

// Append to company-data.ts
const targetFile = path.join(__dirname, 'company-data.ts');
const targetSource = fs.readFileSync(targetFile, 'utf-8');

// find the last array element before `];`
// Wait, the file ends with:
//         }
//     }
// ];
// So replace the last `];` with a comma, then the new companies JSON, then `];`

const lastBracketIndex = targetSource.lastIndexOf('];');
if (lastBracketIndex === -1) {
    console.error("Could not find array end in company-data.ts");
    process.exit(1);
}

const beforeBracket = targetSource.substring(0, lastBracketIndex).trim();

// Convert newCompanies to perfectly formatted JSON string
const newCompaniesString = JSON.stringify(newCompanies, null, 4);

// Remove the `[` and `]` from the new array string so we can append the contents directly
const innerContent = newCompaniesString.substring(newCompaniesString.indexOf('[') + 1, newCompaniesString.lastIndexOf(']')).trim();

const finalSource = beforeBracket + ',\n    ' + innerContent + '\n];\n';

fs.writeFileSync(targetFile, finalSource, 'utf-8');
console.log(`Successfully appended ${newCompanies.length} companies to company-data.ts!`);
