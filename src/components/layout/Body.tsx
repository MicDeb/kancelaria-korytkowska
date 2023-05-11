import type { FC } from 'react';
import type { IChildren } from '@/types/nextGlobals';

export const Body: FC<IChildren> = ({ children }) => {
  return <main className="min-h-screen">{children}</main>;
};
