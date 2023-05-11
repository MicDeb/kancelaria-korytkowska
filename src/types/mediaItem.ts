export interface IMediaItem {
  mediaItem: IMediaItemSingle;
}

export interface IMediaItemSingle {
  id: string;
  uri: string;
  title: string;
  sourceUrl: string;
}
