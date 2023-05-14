import { fetchAPI } from '@/lib/api/api';
import type { ISpecializationsPage } from '@/types/specializations';

const specializationField = `
  description
  title
  image {
    altText
    uri
    title
    sourceUrl
  }
  fieldGroupName
`;

export const specializationPageQuery = `
  page(id: "/index.php/specializations/", idType: URI) {
    Specializations {
      administrativeLaw {${specializationField}}
      agriculturalLaw {${specializationField}}
      companyLaw {${specializationField}}
      constructionLaw {${specializationField}}
      environmentalLaw {${specializationField}}
      individualClients {${specializationField}}
      legalServicesForEnterprises {${specializationField}}
      publicProcurement {${specializationField}}
      realEstateLaw {${specializationField}}
      taxes {${specializationField}}
    }
  }
`;

export const query = `
    query getSpecializations {
      ${specializationPageQuery}
    }
`;

export async function getSpecializations() {
  const data = await fetchAPI<ISpecializationsPage>(query);
  return data?.page.Specializations;
}
