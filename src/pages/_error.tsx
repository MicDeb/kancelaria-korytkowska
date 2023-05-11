import Head from 'next/head';
interface IProps {
  resetError?: () => void;
}

const ErrorPage: React.FC<IProps> = () => (
  <>
    <Head>
      <title>Error</title>
    </Head>
    <div className="content-wrapper flex grow flex-col justify-center">
      <h1 className="mb-8">Error</h1>
    </div>
  </>
);

export default ErrorPage;
