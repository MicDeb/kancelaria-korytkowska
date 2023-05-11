import Image from 'next/image';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { dict } from '@/dictionary';
import type { ISpecializations, ISpecializationField } from '@/types/specializations';

interface ISpecializationSection {
  specializations: ISpecializations;
}

export default function SpecializationSection({ specializations }: ISpecializationSection) {
  const specializationsArray = Object.values<ISpecializationField>(specializations);
  return (
    <SectionWrapper title={dict.common.pages.specializations} wrapperClass="lg:grid-cols-4">
      {specializationsArray.map((specialization) => (
        <div key={specialization.title} className="overflow-hidden rounded-xl">
          <div className="flex flex-col gap-x-4 p-6">
            <div className="h-16 w-16">
              <Image src={specialization.image.sourceUrl} alt={specialization.image.title} width={40} height={40} />
            </div>

            <div className="font-header text-xl font-bold">{specialization.title}</div>
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
