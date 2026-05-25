import type { Metadata, Viewport } from 'next';
import { Cairo, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
// استيراد الـ Provider اللي إحنا لسه عاملينه
import RootProvider from '@/components/RootProvider'; 

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'الفخامة للاستشارات المالية | Al-Fakhama Financial Consulting',
  description: 'شريكك الموثوق في الاستشارات المالية والاستثمارية',
};

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${playfair.variable} font-sans antialiased bg-[#030712]`}>
        {/* التغليف هنا عشان كل السكاشن توصل للـ Context */}
        <RootProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </RootProvider>
      </body>
    </html>
  );
}