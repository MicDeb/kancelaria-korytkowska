import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Body } from '@/components/layout/Body';
import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { getGeneralSettings } from '@/lib/api/getGeneralSettings';
import type { IChildren } from '@/types/nextGlobals';

export const Layout: FC<IChildren> = ({ children }) => {
  const router = useRouter();
  const { data, isLoading, error } = useQuery({
    queryKey: ['generalSettings'],
    queryFn: getGeneralSettings
  });

  if (error) {
    router.push('/404');
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-full">
      {data && (
        <>
          <Navigation nodes={data.menuItems.nodes} logo={data.logo} />
          <Body>{children}</Body>
          <Footer
            companyName={data?.allSettings?.generalSettingsTitle || ''}
            nodes={data.menuItems.nodes}
            contact={data.contact}
          />
        </>
      )}
    </div>
  );
};
