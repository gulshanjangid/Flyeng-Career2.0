import { CompanyData } from './types';
import { faangCompanies } from './faang';
import { unicornCompanies } from './unicorns';
import { serviceCompanies } from './service';
import { financeCompanies } from './finance';
import { globalCompanies } from './global';
import { startupCompanies } from './startups';
import { semiconductorCompanies } from './semiconductors';
import { consultingCompanies } from './consulting';
import { ecommerceCompanies } from './ecommerce';
import { gamingCompanies } from './gaming';
import { midtierCompanies } from './midtier';

export const allCompanies: CompanyData[] = [
    ...faangCompanies,
    ...unicornCompanies,
    ...financeCompanies,
    ...startupCompanies,
    ...globalCompanies,
    ...ecommerceCompanies,
    ...semiconductorCompanies,
    ...gamingCompanies,
    ...consultingCompanies,
    ...serviceCompanies,
    ...midtierCompanies
];

// Sort alphabetically by name for default listing
export const companies = allCompanies.sort((a, b) => a.name.localeCompare(b.name));
