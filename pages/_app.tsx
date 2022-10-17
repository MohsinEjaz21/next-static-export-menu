import React from "react";
import Loader from "../components/Loader";
import 'index.scss'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useLayoutEffect(() => {
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