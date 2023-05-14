import { fetchAPI } from '@/lib/api/api';
import type { IContactPage } from '@/types/contact';

export const queryContactPage = `
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
`;

export const query = `
  query getContact {
    ${queryContactPage}
  }
`;

export async function getContact() {
  const data = await fetchAPI<IContactPage>(query);
  return data?.page.contact;
}
