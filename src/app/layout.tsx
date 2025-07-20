import { Inter } from 'next/font/google'
import "./globals.css";
import SiteHeader from '@/components/layouts/site-header'
import SiteFooter from '@/components/layouts/site-footer'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dhaivick | Full Stack Developer Portfolio',
  description: 'Portfolio of Dhaivick, a Full Stack Developer specializing in SaaS, cloud infrastructure, and e-commerce integrations.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
