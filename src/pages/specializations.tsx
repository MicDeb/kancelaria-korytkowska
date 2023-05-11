import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { Head } from '@/components/shared/Head';
import { WithQuery } from '@/components/shared/WithQuery';
import { dict } from '@/dictionary';
import { getSpecializations } from '@/lib/getSpecializations';
import type { ISpecializationField } from '@/types/specializations';

export default function Team() {
  const searchParams = useSearchParams();
  const specialization = searchParams.get('specialization');

  const { data, isLoading, error } = useQuery({
    queryKey: ['specializations'],
    queryFn: getSpecializations
  });

  const specializationsArray = data ? Object.values<ISpecializationField>(data) : [];
  const initialSelectedSpecialization = specializationsArray.findIndex(
    (spec) => spec.fieldGroupName === specialization
  );

  const [selectedSpecialization, setSelectedSpecialization] = useState(
    initialSelectedSpecialization === -1 ? 0 : initialSelectedSpecialization
  );

  useEffect(() => {
    setSelectedSpecialization(initialSelectedSpecialization === -1 ? 0 : initialSelectedSpecialization);
  }, [initialSelectedSpecialization]);

  const specializationItemClass = (index: number) =>
    clsx(
      'overflow-hidden rounded-xl bg-background-gray cursor-pointer',
      index !== selectedSpecialization && 'opacity-50'
    );

  return (
    <>
      <Head title={dict.common.pages.specializations} />
      <WithQuery error={error} isLoading={isLoading}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionWrapper title={dict.common.pages.specializations} wrapperClass="lg:grid-cols-5">
            {specializationsArray.map((specialization, index) => (
              <div
                key={specialization.title}
                className={specializationItemClass(index)}
                onClick={() => setSelectedSpecialization(index)}
              >
                <div className="flex flex-col gap-x-4 p-4">
                  <Image src={specialization.image.sourceUrl} alt={specialization.image.title} width={40} height={40} />
                  <div className="mt-3 font-header text-xl font-bold">{specialization.title}</div>
                </div>
              </div>
            ))}
          </SectionWrapper>
          <div className="mt-10">
            {specializationsArray.length && (
              <div
                className="specializations-page mx-auto max-w-3xl"
                dangerouslySetInnerHTML={{ __html: specializationsArray[selectedSpecialization]?.description || '' }}
              ></div>
            )}
          </div>
        </div>
      </WithQuery>
    </>
  );
}
