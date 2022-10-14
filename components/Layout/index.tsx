import React from 'react'
import Header from '../Header'
import Head from 'next/head';
import Script from 'next/script';

function Layout({ children }) {
  return (
    <>
      <Script src="/assets/scripts/typetura.min.js"/>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout