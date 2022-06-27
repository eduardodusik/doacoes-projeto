import '../styles/globals.css'
import type {AppProps} from 'next/app'
import AppThemeProvider from "../components/themeProvider";
import Header from "../components/header";
import {Box} from "@mui/material";
import {SnackbarProvider} from "notistack";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppThemeProvider>
      <SnackbarProvider maxSnack={3}>
        <Header/>
        <Box pt={4} pb={4}>
          <Component {...pageProps} />
        </Box>
      </SnackbarProvider>
    </AppThemeProvider>
  )
}

export default MyApp
