import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

export const metadata = {
  title: 'MightyMinds',
  description: 'Innovación que une ideas y creatividad para transformar el futuro.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}