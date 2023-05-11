import { useQuery } from '@tanstack/react-query';
import { SectionWrapper } from '@/components/home-page/SectionWrapper';
import { Head } from '@/components/shared/Head';
import { WithQuery } from '@/components/shared/WithQuery';
import { dict } from '@/dictionary';
import { getContact } from '@/lib/getContact';
import type { IContactFieldsKeys } from '@/types/contact';

export default function Contact() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['contact'],
    queryFn: getContact
  });
  const dataKeys = data ? (Object.keys(data) as IContactFieldsKeys) : [];
  return (
    <>
      <Head title={dict.common.pages.contact} />
      <WithQuery error={error} isLoading={isLoading}>
        <SectionWrapper title={dict.common.pages.contact} wrapperClass="lg:grid-cols-1">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {dataKeys.map((key) => (
                <div key={key}>
                  <h3 className="border-l-2 border-primary pl-6 text-lg font-semibold">{dict.contact[key]}</h3>
                  <div className="border-l-2 border-background-grayLight pl-6 pt-2">
                    <div className="mt-1">
                      <p>{data && data[key]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </WithQuery>
    </>
  );
}
