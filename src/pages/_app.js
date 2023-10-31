import '@/styles/globals.css'
import { AppProvider } from './context'

export default function App({ Component, pageProps }) {
  return (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
  );
}
