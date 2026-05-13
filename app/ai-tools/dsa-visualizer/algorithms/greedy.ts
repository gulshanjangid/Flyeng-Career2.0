import { Algorithm, VisualizationState } from './types';

export const greedyAlgorithms: Algorithm[] = [
    {
        id: "greedy-activity-selection",
        name: "Activity Selection (Greedy)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
The Activity Selection problem is a greedy algorithm problem that involves selecting the maximum number of activities that can be performed by a single person or machine, assuming that a person can only work on a single activity at a time.

### Complexity Analysis
    - Time Complexity: O(n log n)(if sorting is required).
- Space Complexity: O(1).`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `void selectActivities(vector < int > s, vector < int > f) {
    int i = 0;
    cout << i << " ";
    for (int j = 1; j < s.size(); j++) {
        if (s[j] >= f[i]) {
            cout << j << " ";
            i = j;
        }
    }
} `,
            java: `void selectActivities(int s[], int f[], int n) {
    int i = 0;
    System.out.print(i + " ");
    for (int j = 1; j < n; j++) {
        if (s[j] >= f[i]) {
            System.out.print(j + " ");
            i = j;
        }
    }
} `,
            python: `def select_activities(s, f):
n = len(f)
i = 0
print(i, end = ' ')
for j in range(1, n):
    if s[j] >= f[i]:
        print(j, end = ' ')
i = j`,
            javascript: `function selectActivities(s, f) {
    let i = 0;
    console.log(i);
    for (let j = 1; j < s.length; j++) {
        if (s[j] >= f[i]) {
            console.log(j);
            i = j;
        }
    }
} `
        },
        run: function* () {
            // Activities: [Start, End]
            const activities = [
                { id: 0, start: 1, end: 2 },
                { id: 1, start: 3, end: 4 },
                { id: 2, start: 0, end: 6 },
                { id: 3, start: 5, end: 7 },
                { id: 4, start: 8, end: 9 },
                { id: 5, start: 5, end: 9 }
            ];
            // Sort by end time (already sorted here for simplicity, but usually step 1)

            // Visualize as intervals on a timeline
            // Using ArrayVisualization for simplicity, but ideally a Gantt chart style
            // Let's use a custom String/Array hybrid or just text description updates with highlighting

            yield {
                type: 'array',
                array: activities.map(a => a.end), // Visualizing End times
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: "Activities sorted by End Time: " + activities.map(a => `[${a.start},${a.end}]`).join(", ")
            };

            let i = 0;
            let selected = [0];

            yield {
                type: 'array',
                array: activities.map(a => a.end),
                activeIndices: [0],
                swapIndices: [],
                sortedIndices: [0],
                description: `Selected Activity 0[${activities[0].start}, ${activities[0].end}]`
            };

            for (let j = 1; j < activities.length; j++) {
                yield {
                    type: 'array',
                    array: activities.map(a => a.end),
                    activeIndices: [i, j],
                    swapIndices: [],
                    sortedIndices: [...selected],
                    description: `Checking Activity ${j} [${activities[j].start}, ${activities[j].end}] against last selected end time ${activities[i].end} `
                };

                if (activities[j].start >= activities[i].end) {
                    selected.push(j);
                    i = j;
                    yield {
                        type: 'array',
                        array: activities.map(a => a.end),
                        activeIndices: [j],
                        swapIndices: [],
                        sortedIndices: [...selected],
                        description: `Selected Activity ${j} (Start ${activities[j].start} >= End ${activities[i].end})`
                    };
                } else {
                    yield {
                        type: 'array',
                        array: activities.map(a => a.end),
                        activeIndices: [j],
                        swapIndices: [],
                        sortedIndices: [...selected],
                        description: `Skipped Activity ${j} (Overlap)`
                    };
                }
            }
        }
    }
];
