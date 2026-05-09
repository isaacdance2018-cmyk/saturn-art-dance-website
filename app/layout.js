import "./globals.css";

export const metadata = {
  title: "Saturn Art Dance Studio",
  description: "Professional Dance Education in Melbourne"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}