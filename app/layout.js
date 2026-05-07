export const metadata = {
  title: "Saturn Art Dance Studio",
  description: "Melbourne Dance Academy",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}