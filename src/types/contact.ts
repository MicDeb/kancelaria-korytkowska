export interface IContactFields {
  address: string;
  court: string;
  email: string;
  krs: string;
  name: string;
  nip: string;
  phone: string;
  regon: string;
  webAddress: string;
}

export type IContactFieldsKeys = Array<keyof IContactFields>;
export interface IContactPage {
  page: {
    contact: IContactFields;
  };
}
