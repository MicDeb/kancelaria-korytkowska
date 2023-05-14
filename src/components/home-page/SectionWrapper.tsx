import { clsx } from 'clsx';
import { PageHeader } from '@/components/shared/PageHeader';
import type { IChildren } from '@/types/nextGlobals';

interface ISectionWrapper extends IChildren {
  title: string;
  wrapperClass?: string;
}

export const SectionWrapper = ({ children, title, wrapperClass = 'lg:grid-cols-3' }: ISectionWrapper) => {
  const childrenWrapperClass = clsx(
    'mx-auto mt-10 grid justify-items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none',
    wrapperClass
  );
  return (
    <div className="px-4 pt-20 sm:pt-32">
      <div className="mx-auto lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <PageHeader text={title} />
        </div>
      </div>

      <div className={childrenWrapperClass}>{children}</div>
    </div>
  );
};
