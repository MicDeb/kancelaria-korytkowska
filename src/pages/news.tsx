import { useQuery } from '@tanstack/react-query';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { Head } from '@/components/shared/Head';
import { ReadMoreButton } from '@/components/shared/ReadMoreButton';
import { WithQuery } from '@/components/shared/WithQuery';
import { dict } from '@/dictionary';
import { routeLinks } from '@/dictionary/routeLinks';
import { getPosts } from '@/lib/api/getPosts';
import { postDate } from '@/lib/helpers/postDate';

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
        <SectionWrapper title={dict.common.pages.news} wrapperClass="pb-20 lg:pb-32 lg:grid-cols-1">
          <div className="space-y-16">
            {posts &&
              posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-7xl flex-col items-start justify-between border-b border-background-grayLight pb-5"
                >
                  <div className="flex items-center gap-x-4">
                    <time className="text-xs" dateTime={post.date}>
                      {postDate(post.date)}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 font-header text-lg font-semibold leading-6">
                      <span className="absolute inset-0" />
                      {post.post.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6">{post.post.shortDescription}</p>
                  </div>
                  <div className="relative mt-8 flex w-full items-center justify-end gap-x-4">
                    <ReadMoreButton href={`${routeLinks.posts}/${post.slug}`} />
                  </div>
                </article>
              ))}
          </div>
        </SectionWrapper>
      </WithQuery>
    </>
  );
}
