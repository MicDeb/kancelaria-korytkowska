import type { IMediaItemSingle } from '@/types/mediaItem';

export interface IHomePage {
  page: {
    id: string;
    hero: IHero;
    trustUs: {
      images: IMediaItemSingle[];
    };
  };
}

export interface IHero {
  heroDescription: string;
  heroText: string;
  heroImage: {
    altText: string;
    link: string;
    sourceUrl: string;
  };
}
