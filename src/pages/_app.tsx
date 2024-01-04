import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Baloo_2 } from 'next/font/google';
const font = Baloo_2({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="_app" className={`${font.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
