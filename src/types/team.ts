import type { IMediaItemSingle } from '@/types/mediaItem';

export interface IPerson {
  description: string;
  shortDescription: string;
  title: string;
  image: IMediaItemSingle;
  fieldGroupName: string;
}

export interface IPersons {
  [key: string]: IPerson;
  joanna: IPerson;
  aleksandra: IPerson;
}

export interface ITeamPage {
  page: {
    team: IPersons;
  };
}
