import React from 'react'
import Header from '../Header'
import Head from 'next/head';
import Script from 'next/script';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout