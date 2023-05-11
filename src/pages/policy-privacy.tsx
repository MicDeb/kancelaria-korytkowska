import { useQuery } from '@tanstack/react-query';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { Head } from '@/components/shared/Head';
import { WithQuery } from '@/components/shared/WithQuery';
import { dict } from '@/dictionary';
import { getPolicyPrivacy } from '@/lib/getPrivacyPolicy';

export default function PolicyPrivacy() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['policyPrivacy'],
    queryFn: getPolicyPrivacy
  });

  return (
    <>
      <Head title={dict.common.pages.policyPrivacy} />
      <WithQuery error={error} isLoading={isLoading}>
        <SectionWrapper title={dict.common.pages.policyPrivacy} wrapperClass="lg:grid-cols-1">
          <div className="policy-privacy mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {data && <div dangerouslySetInnerHTML={{ __html: data }}></div>}
          </div>
        </SectionWrapper>
      </WithQuery>
    </>
  );
}
