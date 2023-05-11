import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { Head } from '@/components/shared/Head';
import { WithQuery } from '@/components/shared/WithQuery';
import { dict } from '@/dictionary';
import { getPost } from '@/lib/getPost';
import { getPosts } from '@/lib/getPosts';

export default function Post({ post }) {
  console.log('post', post);
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return;
  }

  return (
    <>
      <Head title={dict.common.pages.post} />
      <WithQuery error={!router.isFallback} isLoading={false}>
        <SectionWrapper title={dict.common.pages.contact} wrapperClass="lg:grid-cols-1">
          <div className="single-post mx-auto max-w-3xl" dangerouslySetInnerHTML={{ __html: post?.body || '' }}></div>
        </SectionWrapper>
      </WithQuery>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('params', params)
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  const data = await getPost(slug);
  console.log('data', data)

  return {
    props: {
      post: data || null
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getPosts();

  console.log('allPosts', allPosts)

  return {
    paths: allPosts ? allPosts.map(({ slug }) => `/posts/${slug}`) : [],
    fallback: true
  };
};
