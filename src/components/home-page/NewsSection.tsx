import format from 'date-fns/format';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { ReadMoreButton } from '@/components/shared/ReadMoreButton';
import { dict } from '@/dictionary';
import { routeLinks } from '@/dictionary/routeLinks';
import type { ISingleNodePost } from '@/types/posts';

export default function NewsSection({ posts }: { posts: ISingleNodePost[] }) {
  const postDate = (date: string) => new Date(date);
  return (
    <div className="bg-background-gray pb-32">
      <div className="mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <SectionWrapper title={dict.common.pages.news}>
          {posts.map((singlePost) => (
            <article key={singlePost.id} className="flex max-w-xl flex-col items-start justify-between bg-white p-4">
              <div className="flex items-center gap-x-4 text-xs">
                <span>{format(postDate(singlePost.date), 'MM/dd/yyyy')}</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6">{singlePost.post.title}</h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6">{singlePost.post.shortDescription}</p>
                <div className="mt-5 flex justify-end">
                  <ReadMoreButton href={`${routeLinks.posts}/${singlePost.slug}`} />
                </div>
              </div>
            </article>
          ))}
        </SectionWrapper>
      </div>
    </div>
  );
}
