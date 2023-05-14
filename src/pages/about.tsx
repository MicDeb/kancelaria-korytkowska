import { useQuery } from '@tanstack/react-query';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { Head } from '@/components/shared/Head';
import { WithQuery } from '@/components/shared/WithQuery';
import { dict } from '@/dictionary';
import { getAbout } from '@/lib/api/getAbout';

export default function About() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['about'],
    queryFn: getAbout
  });

  return (
    <>
      <Head title={dict.common.pages.about} />
      <WithQuery error={error} isLoading={isLoading}>
        <SectionWrapper title={dict.common.pages.about} wrapperClass="lg:grid-cols-1">
          <div className="about-page mx-auto max-w-7xl sm:px-6 lg:px-8">
            {data && <div dangerouslySetInnerHTML={{ __html: data }}></div>}
          </div>
        </SectionWrapper>
      </WithQuery>
    </>
  );
}
