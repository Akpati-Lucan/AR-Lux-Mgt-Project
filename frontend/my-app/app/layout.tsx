import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='min-h-screen flex flex-col'>
        <Header />
            <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
