import { fetchAPI } from '@/lib/api/api';
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
        date
      }
    }
`;

export async function getPost(slug: string) {
  const data = await fetchAPI<ISinglePostPageRequest>(query(slug));
  console.log('data', data?.post);
  return {
    ...data?.post.post,
    date: data?.post.date
  };
}
