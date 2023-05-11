import Image from 'next/image';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { ReadMoreButton } from '@/components/shared/ReadMoreButton';
import { dict } from '@/dictionary';
import { routeLinks } from '@/dictionary/routeLinks';
import type { IPersons, IPerson } from '@/types/team';

export default function TeamSection({ team }: { team: IPersons }) {
  const teamPersons = Object.values<IPerson>(team);
  return (
    <SectionWrapper title={dict.common.pages.team} wrapperClass="lg:grid-cols-1 pb-32">
      {teamPersons.map((person) => (
        <div key={person.title} className="max-w-9xl mx-auto flex flex-col gap-20 pt-12 sm:flex-row">
          <div className="flex max-w-3xl flex-col justify-between">
            <div>
              <h3 className="font-header text-5xl font-semibold">{person.title}</h3>
              <p className="mt-10 text-xl">{person.shortDescription}</p>
            </div>
            <ReadMoreButton href={`/${routeLinks.team}?member=${person.fieldGroupName}`} />
          </div>
          <Image src={person.image.sourceUrl} alt={person.image.title} width={230} height={250} />
        </div>
      ))}
    </SectionWrapper>
  );
}
