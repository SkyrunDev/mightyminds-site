import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",

        margin: 0,
        padding: 32,
      }}
    >
      {children}
    </div>
  );
}
