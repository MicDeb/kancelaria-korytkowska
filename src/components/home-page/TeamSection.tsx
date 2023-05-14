import Image from 'next/image';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { ReadMoreButton } from '@/components/shared/ReadMoreButton';
import { dict } from '@/dictionary';
import { routeLinks } from '@/dictionary/routeLinks';
import type { IPersons, IPerson } from '@/types/team';

export default function TeamSection({ team }: { team: IPersons }) {
  const teamPersons = Object.values<IPerson>(team);
  return (
    <SectionWrapper title={dict.common.pages.team} wrapperClass="pb-20 lg:pb-32 lg:grid-cols-1">
      {teamPersons.map((person) => (
        <div key={person.title} className="max-w-9xl mx-auto flex flex-col-reverse gap-10 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex max-w-3xl flex-col justify-between">
            <div>
              <h3 className="font-header text-3xl font-bold sm:text-5xl">{person.title}</h3>
              <p className="mt-4 sm:mt-10 sm:text-xl">{person.shortDescription}</p>
            </div>
            <div className="mt-10 flex">
              <ReadMoreButton href={`/${routeLinks.team}?member=${person.fieldGroupName}`} />
            </div>
          </div>
          <Image
            className="w-full object-cover sm:w-auto sm:max-w-[14rem]"
            src={person.image.sourceUrl}
            alt={person.image.title}
            width={230}
            height={250}
          />
        </div>
      ))}
    </SectionWrapper>
  );
}
