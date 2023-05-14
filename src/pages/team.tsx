import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { Head } from '@/components/shared/Head';
import { WithQuery } from '@/components/shared/WithQuery';
import { dict } from '@/dictionary';
import { getTeam } from '@/lib/api/getTeam';
import type { IPerson } from '@/types/team';

export default function Team() {
  const searchParams = useSearchParams();

  const member = searchParams.get('member');
  const { data, isLoading, error } = useQuery({
    queryKey: ['team'],
    queryFn: getTeam
  });

  const teamPersons = data ? Object.values<IPerson>(data) : [];
  const initialSelectedPerson = teamPersons.findIndex((person) => person.fieldGroupName === member);
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(
    initialSelectedPerson === -1 ? 0 : initialSelectedPerson
  );

  useEffect(() => {
    setSelectedPersonIndex(initialSelectedPerson === -1 ? 0 : initialSelectedPerson);
  }, [initialSelectedPerson]);
  const personItemClass = (index: number) =>
    clsx('cursor-pointer overflow-hidden', index !== selectedPersonIndex && 'opacity-50');

  return (
    <>
      <Head title={dict.common.pages.team} />
      <WithQuery error={error} isLoading={isLoading}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionWrapper title={dict.common.pages.team} wrapperClass="col-lg-1">
            <ul role="list" className="flex items-start justify-center gap-2 sm:gap-20">
              {teamPersons.map((person, index) => (
                <li key={person.title} className={personItemClass(index)} onClick={() => setSelectedPersonIndex(index)}>
                  <div className="flex flex-col items-center sm:p-6">
                    <Image src={person.image.sourceUrl} alt={person.image.title} width={400} height={547} />

                    <div className="mt-4 font-header font-bold leading-6 text-primary sm:text-3xl">{person.title}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              {teamPersons.length && (
                <div
                  className="team-page"
                  dangerouslySetInnerHTML={{ __html: teamPersons[selectedPersonIndex]?.description || '' }}
                ></div>
              )}
            </div>
          </SectionWrapper>
        </div>
      </WithQuery>
    </>
  );
}
