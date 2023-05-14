import format from 'date-fns/format';
import Link from 'next/link';
import { dict } from '@/dictionary';
import { routeLinks } from '@/dictionary/routeLinks';
import type { IContactFields } from '@/types/contact';
import type { IMenuItems } from '@/types/menuItems';

interface IFooter extends IMenuItems {
  companyName?: string;
  contact?: IContactFields;
}

export const Footer = ({ nodes, companyName, contact }: IFooter) => {
  return (
    <footer className="mt-40 bg-primary">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:flex-wrap sm:justify-center sm:space-x-12" aria-label="Footer">
          {nodes.map((item) => (
            <div key={item.id} className="pb-6">
              <Link href={item.uri} className="text-sm uppercase leading-6 text-white hover:text-white">
                {item.label}
              </Link>
            </div>
          ))}
          <div key={routeLinks.policyPrivacy} className="pb-6">
            <Link href={routeLinks.policyPrivacy} className="text-sm uppercase leading-6 text-white hover:text-white">
              {dict.common.pages.policyPrivacy}
            </Link>
          </div>
        </nav>

        <p className="mt-10 text-center text-xs leading-5 text-white">
          &copy; {format(new Date(), 'yyyy')} {companyName}
        </p>
        <p className="mt-2 text-center text-xs leading-5 text-white">
          {contact?.address}
          <br />
          {contact?.phone}
          <br />
          {contact?.email}
        </p>
      </div>
    </footer>
  );
};
