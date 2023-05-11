import { useQuery } from '@tanstack/react-query';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { Head } from '@/components/shared/Head';
import { ReadMoreButton } from '@/components/shared/ReadMoreButton';
import { WithQuery } from '@/components/shared/WithQuery';
import { dict } from '@/dictionary';
import { getPosts } from '@/lib/getPosts';

export default function News() {
  const {
    data: posts,
    isLoading,
    error
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  return (
    <>
      <Head title={dict.common.pages.news} />
      <WithQuery error={error} isLoading={isLoading}>
        <SectionWrapper title={dict.common.pages.news}>
          {posts &&
            posts.map((post) => (
              <article key={post.id} className="py-12">
                <div className="group relative max-w-xl">
                  <time dateTime={post.date} className="text-gray-600 block text-sm leading-6">
                    {post.date}
                  </time>
                  <h2 className="text-gray-900 group-hover:text-gray-600 mt-2 text-lg font-semibold">
                    {post.post.title}
                  </h2>
                  <p className="text-gray-600 mt-4 text-sm leading-6">{post.post.shortDescription}</p>
                </div>
                <div className="mt-5 flex justify-end">
                  <ReadMoreButton href="/" />
                </div>
              </article>
            ))}
        </SectionWrapper>
      </WithQuery>
    </>
  );
}
