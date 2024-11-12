import './ui/global.css';

import { montserrat } from "./ui/fonts";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>Lograras Grandes Cosas no te rindas porfavor </h1>
         {children}
        <footer className='py-10 flex justify-center items-center'>
          
        </footer>
        </body>
    </html>
  );
}
