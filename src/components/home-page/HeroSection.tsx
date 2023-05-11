import Image from 'next/image';
import { ReadMoreButton } from '@/components/shared/ReadMoreButton';
import { routeLinks } from '@/dictionary/routeLinks';
import type { IHero } from '@/types/homePage';
export default function HeroSection({ heroImage, heroText, heroDescription }: IHero) {
  return (
    <div className="relative isolate overflow-hidden bg-primary pb-14 pt-14">
      <Image
        src={heroImage.sourceUrl}
        alt={heroImage.altText}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={1438}
        height={902}
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-primary opacity-50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="font-header text-4xl font-bold text-white sm:text-7xl">{heroText}</h1>
            <p className="mt-6 text-lg leading-8 text-white">{heroDescription}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ReadMoreButton href={routeLinks.about} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
