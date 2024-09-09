// import '@/app/ui/global.css';

import { montserrat } from "./ui/fonts";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${montserrat.className} antialiased`}>
        <h1>Este Titulo</h1>
=======
      <body>
        <h1>Lograras Grandes Cosas no te rindas porfavor </h1>
>>>>>>> d17cd93f26d6b69be70599b8569f6057a9917452
        <div style={{border: '1px solid #000'}}> 
        {children}
        </div>
        </body>
    </html>
  );
}
