import { fetchAPI } from '@/lib/api/api';
import type { ITeamPage } from '@/types/team';

const personQuery = `
  fieldGroupName
  description
  image {
    id
    uri
    title
    sourceUrl
  }
  shortDescription
  title
`;

export const query = `
    query getTeam {
      page(id: "/index.php/team/", idType: URI) {
        team {
          joanna {${personQuery}}
          aleksandra {${personQuery}}
        }
      }
    }
`;

export async function getTeam() {
  const data = await fetchAPI<ITeamPage>(query);
  return data?.page.team;
}
