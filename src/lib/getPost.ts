import { fetchAPI } from '@/lib/api';
import type { ISinglePostPageRequest } from '@/types/posts';

export const query = (slug: string) => `
  query getPost(
    $id: ID = "${slug}"
    ) {
      post(id: $id, idType: SLUG) {
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
  const data = await fetchAPI<ISinglePostPageRequest>(query(slug));
  return data?.post.post;
}
