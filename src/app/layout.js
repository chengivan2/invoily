import "./globals.css";


export const metadata = {
  title: "Invoily",
  description: "Generate beautiful invoices fast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
