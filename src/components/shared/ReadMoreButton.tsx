import { clsx } from 'clsx';
import Link from 'next/link';
import { dict } from '@/dictionary';

interface IReadMoreButton {
  href: string;
  text?: string;
  variant?: 'LIGHT' | 'DARK';
  size?: 'lg' | 'sm';
}

export const ReadMoreButton = ({ href, text = dict.read_more_btn, variant = 'DARK' }: IReadMoreButton) => {
  const className = clsx(
    'rounded-md px-12 py-2.5 text-sm max-w-[10rem] text-center font-semibold shadow-sm',
    {
      'text-label bg-white': variant === 'LIGHT'
    },
    {
      'text-white bg-primary': variant === 'DARK'
    }
  );
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
};
