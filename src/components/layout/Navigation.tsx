import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { IMediaItemSingle } from '@/types/mediaItem';
import type { INode } from '@/types/menuItems';

interface INavigationProps {
  nodes: INode[];
  logo?: IMediaItemSingle;
}
export const Navigation = ({ nodes, logo }: INavigationProps) => {
  console.log('nodes', nodes)
  const pathname = usePathname();
  const isSelected = (uri: string) => pathname.includes(uri);
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between lg:h-28">
              <div className="flex w-full justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    {logo && (
                      <Image
                        className="block h-8 w-auto"
                        src={logo.sourceUrl}
                        alt={logo.title}
                        width={300}
                        height={44}
                      />
                    )}
                  </Link>
                </div>
                <div className="hidden lg:-my-px lg:ml-6 lg:flex lg:space-x-8">
                  {nodes.map((item) => (
                    <Link
                      key={item.id}
                      href={`/${item.uri}`}
                      className={clsx(
                        isSelected(item.uri)
                          ? 'text-gray-900'
                          : 'hover:border-gray-300 hover:text-gray-700 border-transparent',
                        'inline-flex items-center px-1 pt-1 text-sm font-medium uppercase'
                      )}
                      aria-current={isSelected(item.uri) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {nodes.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as={Link}
                  href={`/${item.uri}`}
                  className={clsx(
                    isSelected(item.uri)
                      ? 'text-gray-900'
                      : 'hover:border-gray-300 hover:text-gray-700 border-transparent',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium uppercase'
                  )}
                  aria-current={isSelected(item.uri) ? 'page' : undefined}
                >
                  {item.label}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
