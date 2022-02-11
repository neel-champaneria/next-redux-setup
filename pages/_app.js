import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import { wrapper } from "./../redux/store";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    /* process.browser ? */ <PersistGate
      persistor={store.__persistor}
      loading={<div>loading</div>}
    >
      <Component {...pageProps} />
    </PersistGate>
  ); /* : (
    <PersistGate persistor={store}>
      <Component {...pageProps} />
    </PersistGate>
  ); */
}

export default wrapper.withRedux(MyApp);
