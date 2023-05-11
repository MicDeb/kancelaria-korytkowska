import { fetchAPI } from '@/lib/api';
import type { IContactPage } from '@/types/contact';

export const query = `
    query getContact {
      page(id: "/index.php/contact/", idType: URI) {
        contact {
          name
          address
          phone
          email
          webAddress
          krs
          nip
          regon
          court
        }
      }
    }
`;

export async function getContact() {
  const data = await fetchAPI<IContactPage>(query);
  return data?.page.contact;
}
