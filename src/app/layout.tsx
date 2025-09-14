import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Reach",  // Aqui é onde você define o novo título
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


        
<Script strategy='afterInteractive' id='facebook-pixel' dangerouslySetInnerHTML={{
  __html:`

  !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '814729300897081');
fbq('track', 'PageView');
  
  `
}}>

</Script>








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

        <noscript><Image height={1} width={1} style={{display: 'none'}} alt='facebook-pixel'
src="https://www.facebook.com/tr?id=814729300897081&ev=PageView&noscript=1"
/></noscript>
        
        {children}
      </body>
    </html>
  );
}
