import { useQueries } from '@tanstack/react-query';
import HeroSection from '@/components/home-page/HeroSection';
import NewsSection from '@/components/home-page/NewsSection';
import SpecializationSection from '@/components/home-page/SpecializationSection';
import TeamSection from '@/components/home-page/TeamSection';
import { TrustUsSection } from '@/components/home-page/TrustUsSection';
import { Head } from '@/components/shared/Head';
import { WithQuery } from '@/components/shared/WithQuery';
import { dict } from '@/dictionary';
import { getHomePage } from '@/lib/getHomePage';
import { getSpecializations } from '@/lib/getSpecializations';
import { getTeam } from '@/lib/getTeam';

export default function Home() {
  const queries = useQueries({
    queries: [
      { queryKey: ['homePage'], queryFn: getHomePage },
      {
        queryKey: ['specializations'],
        queryFn: getSpecializations
      },
      {
        queryKey: ['team'],
        queryFn: getTeam
      }
    ]
  });

  const [
    { data, isLoading, error },
    { data: specializationData, isLoading: specializationsIsLoading, error: specializationsError },
    { data: teamData, isLoading: teamIsLoading, error: teamError }
  ] = queries;

  return (
    <>
      <Head title={dict.common.pages.home} />
      <WithQuery
        error={error || specializationsError || teamError}
        isLoading={isLoading || specializationsIsLoading || teamIsLoading}
      >
        {data && specializationData && teamData && (
          <div className="bg-white">
            {data.page && <HeroSection {...data.page.hero} />}
            {data.posts && <NewsSection posts={data.posts.nodes} />}
            <TeamSection team={teamData} />
            <SpecializationSection specializations={specializationData} />
            {data.page && <TrustUsSection thumbnails={data.page.trustUs.images} />}
          </div>
        )}
      </WithQuery>
    </>
  );
}
