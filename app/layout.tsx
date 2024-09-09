// import '@/app/ui/global.css';

import { montserrat } from "./ui/fonts";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Lograras Grandes Cosas no te rindas porfavor </h1>
        <div style={{border: '1px solid #000'}}> 
        {children}
        </div>
        </body>
    </html>
  );
}
