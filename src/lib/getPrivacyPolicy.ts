import { fetchAPI } from '@/lib/api';
import type { IPolicyPrivacy } from '@/types/policyPrivacy';

export const query = `
  query getPolicyPrivacy {
    page(id: "index.php/privacy-policy/", idType: URI) {
      privacyPolicy {
        description
      }
    }
  }
`;

export async function getPolicyPrivacy() {
  const data = await fetchAPI<IPolicyPrivacy>(query);
  return data?.page.privacyPolicy.description;
}
