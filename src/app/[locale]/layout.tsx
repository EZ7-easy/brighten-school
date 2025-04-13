import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import React from 'react'
import {Toaster} from "@/components/ui/sonner";



export const metadata: Metadata = {
  title: 'hello',
};


async function RootLayout({ children, params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster position={'top-center'}/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout
