export interface IPosts {
  posts: {
    nodes: ISingleNodePost[];
  };
}

export interface ISinglePostBody {
  body: string;
  fieldGroupName: string;
  shortDescription: string;
  title: string;
}

export interface ISinglePost {
  post: ISinglePostBody;
  date: string;
}

export interface ISinglePostPageRequest {
  post: ISinglePost;
}

export interface ISingleNodePost extends ISinglePost {
  uri: string;
  title: string;
  slug: string;
  status: string;
  id: string;
  date: string;
}
