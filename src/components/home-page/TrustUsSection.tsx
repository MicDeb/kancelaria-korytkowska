import Image from 'next/image';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { dict } from '@/dictionary';
import type { IMediaItemSingle } from '@/types/mediaItem';

export const TrustUsSection = ({ thumbnails }: { thumbnails: IMediaItemSingle[] }) => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <SectionWrapper title={dict.common.sections.trustUs}>
        {thumbnails.map((thumbnail) => (
          <Image
            key={thumbnail.id}
            className="max-h-12 w-full object-contain"
            src={thumbnail.sourceUrl}
            alt={thumbnail.title}
            width={158}
            height={48}
          />
        ))}
      </SectionWrapper>
    </div>
  );
};
