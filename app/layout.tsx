// import '@/app/ui/global.css';

import { montserrat } from "./ui/fonts";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>Este Titulo</h1>
        <div style={{border: '1px solid #000'}}> 
        {children}
        </div>
        </body>
    </html>
  );
}
