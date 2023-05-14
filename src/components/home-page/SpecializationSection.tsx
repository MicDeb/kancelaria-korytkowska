import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { dict } from '@/dictionary';
import { routeLinks } from '@/dictionary/routeLinks';
import type { ISpecializations, ISpecializationField } from '@/types/specializations';

interface ISpecializationSection {
  specializations: ISpecializations;
}

export default function SpecializationSection({ specializations }: ISpecializationSection) {
  const specializationsArray = Object.values<ISpecializationField>(specializations);
  return (
    <div className="bg-background-gray pb-20 lg:pb-32">
      <div className="mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <SectionWrapper title={dict.common.pages.specializations} wrapperClass="grid-cols-2 lg:grid-cols-5">
          {specializationsArray.map((specialization) => (
            <Link
              key={specialization.title}
              href={`${routeLinks.specializations}?specialization=${specialization.fieldGroupName}`}
              className="w-full overflow-hidden rounded-xl bg-white"
            >
              <div className="flex flex-col gap-x-4 p-6">
                <Image src={specialization.image.sourceUrl} alt={specialization.image.title} width={40} height={40} />
                <div className="mt-3 font-header font-bold sm:text-xl">{specialization.title}</div>
              </div>
            </Link>
          ))}
        </SectionWrapper>
      </div>
    </div>
  );
}
