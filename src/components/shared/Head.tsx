import NextHead from 'next/head';

export const Head = ({ title }: { title: string }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content="Joanna Korytkowska Kancelaria Prawna sp.k." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://api.jkkp-kancelaria.pl/wp-content/uploads/2023/05/cropped-Logo.png" />
  </NextHead>
);
