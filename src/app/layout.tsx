import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUTO REACH",  // Aqui é onde você define o novo título
  description: "Sua descrição personalizada para AUTO REACH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Auto Reach</title> {/* Título padrão */}
       <script
        dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWG4NLZ8')`,
}}>
       </script>

      </head>

      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-TWG4NLZ8"
        height="0" 
        width="0" 
        
        ></iframe>
        
        {children}
      </body>
    </html>
  );
}
