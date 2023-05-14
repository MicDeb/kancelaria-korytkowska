import { fetchAPI } from '@/lib/api/api';
import type { IPosts } from '@/types/posts';

export const postsQuery = `
  posts {
    nodes {
      uri
      title
      slug
      status
      post {
        body
        fieldGroupName
        shortDescription
        title
      }
      id
      date
    }
  }
`;

export const query = `
    query getPosts {
      ${postsQuery}
    }
`;

export async function getPosts() {
  const data = await fetchAPI<IPosts>(query);
  return data?.posts?.nodes;
}
