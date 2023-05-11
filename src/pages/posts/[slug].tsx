import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { Head } from '@/components/shared/Head';
import { WithQuery } from '@/components/shared/WithQuery';
import { dict } from '@/dictionary';
import { getPost } from '@/lib/getPost';

export default function Post() {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : '';

  const { data, isLoading, error } = useQuery({
    queryKey: ['singlePost'],
    queryFn: () => getPost(slug)
  });

  return (
    <>
      <Head title={dict.common.pages.post} />
      <WithQuery error={error} isLoading={isLoading}>
        <SectionWrapper title={data?.title || ''} wrapperClass="lg:grid-cols-1">
          <div className="single-post mx-auto max-w-3xl" dangerouslySetInnerHTML={{ __html: data?.body || '' }}></div>
        </SectionWrapper>
      </WithQuery>
    </>
  );
}

