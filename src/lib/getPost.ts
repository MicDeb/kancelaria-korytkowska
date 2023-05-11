import { fetchAPI } from '@/lib/api';
import type { ISinglePost } from '@/types/posts';

export const query = (slug: string) => `
  query getPost {
    post(
      id: ${slug}
      idType: SLUG
    ) {
      post {
        body
        fieldGroupName
        shortDescription
        title
      }
    }
  }
`;

export async function getPost(slug: string) {
  const data = await fetchAPI<ISinglePost>(query(slug));
  return data?.post;
}
