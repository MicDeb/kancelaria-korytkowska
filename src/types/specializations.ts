import type { IMediaItemSingle } from '@/types/mediaItem';

export interface ISpecializationField {
  description: string;
  title: string;
  image: IMediaItemSingle;
  fieldGroupName: string;
}

export interface ISpecializations {
  [key: string]: ISpecializationField;
  administrativeLaw: ISpecializationField;
  agriculturalLaw: ISpecializationField;
  companyLaw: ISpecializationField;
  constructionLaw: ISpecializationField;
  environmentalLaw: ISpecializationField;
  individualClients: ISpecializationField;
  legalServicesForEnterprises: ISpecializationField;
  publicProcurement: ISpecializationField;
  realEstateLaw: ISpecializationField;
  taxes: ISpecializationField;
}

export interface ISpecializationsPage {
  page: {
    Specializations: ISpecializations;
  };
}
