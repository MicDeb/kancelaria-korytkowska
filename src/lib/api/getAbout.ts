import { fetchAPI } from '@/lib/api/api';
import type { IAboutPage } from '@/types/about';

export const query = `
  query getAbout {
    page(id: "/index.php/about/", idType: URI) {
      about {
        description
      }
    }
  }
`;

export async function getAbout() {
  const data = await fetchAPI<IAboutPage>(query);
  return data?.page.about.description;
}
