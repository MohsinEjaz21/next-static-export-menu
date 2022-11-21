import Head from 'next/head'
import Home from '../components/Home'
import Layout from '../components/Layout'

function HomePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Home />
      </Layout>

    </>
  )
}

export default HomePage