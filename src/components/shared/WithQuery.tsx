import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/shared/LoadingSpinner';

interface IChildren {
  children?: React.ReactNode;
}

interface WithQuery extends IChildren {
  error: unknown;
  isLoading: boolean;
}

export const WithQuery: ({ children, error, isLoading }: WithQuery) => JSX.Element = ({
  children,
  error,
  isLoading
}) => {
  const router = useRouter();

  if (error) {
    router.push('/404');
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (children) {
    return <>{children}</>;
  }

  return <div>Please add children</div>;
};
