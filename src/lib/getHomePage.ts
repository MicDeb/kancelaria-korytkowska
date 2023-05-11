import { fetchAPI } from '@/lib/api';
import { postsQuery } from '@/lib/getPosts';
import type { IHomePage } from '@/types/homePage';
import type { IPosts } from '@/types/posts';

const query = `
  query getHomePage {
    page(id: "/index.php/home/", idType: URI) {
      id
      hero {
        heroDescription
        heroText
        heroImage {
          altText
          link
          sourceUrl
        }
      }
      trustUs {
        images {
          ... on MediaItem {
            id
            altText
            slug
            sourceUrl
            srcSet
            title
            uri
          }
        }
      }
    }
    ${postsQuery}
  }
`;

export async function getHomePage() {
  const data = await fetchAPI<IHomePage & IPosts>(query);
  return {
    page: data?.page,
    posts: data?.posts
  };
}
