import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppThemeProvider from "../components/themeProvider";
import Header from "../components/header";
import {Box} from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Header />
      <Box pt={4} pb={4}>
        <Component {...pageProps} />
      </Box>
    </AppThemeProvider>
  )
}

export default MyApp
