import type { AppProps } from "next/app";

import { AppProvider } from "@/providers/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import dynamic from "next/dynamic";
import { MSWWrapperProps } from "@/lib/msw";
import { API_MOCKING } from "@/config/constants";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MSWWrapper = dynamic<MSWWrapperProps>(() => import("@/lib/msw").then(({ MSWWrapper }) => MSWWrapper));

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const pageContent = getLayout(<Component {...pageProps} />);
  return (
    <AppProvider>
      {API_MOCKING ? (<MSWWrapper>{pageContent}</MSWWrapper>) : pageContent}
    </AppProvider>
  );
};

export default App;