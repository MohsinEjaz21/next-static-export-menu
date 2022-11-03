import 'index.scss';
import React, { useLayoutEffect } from "react";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  useLayoutEffect(() => {
     setLoading(true)
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp