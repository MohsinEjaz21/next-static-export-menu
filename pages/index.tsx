import Head from 'next/head'
import React from 'react'
import Home from '../components/Home'
import Layout from '../components/Layout'

function index() {
  return (
    <>
    <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Home/>
    </Layout>
    </>
  )
}

export default index