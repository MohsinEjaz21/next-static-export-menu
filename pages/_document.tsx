import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head />
        <body data-barba="wrapper">
          <Main/>
          <NextScript />
          <script type="module" src="/assets/scripts/dynamic-theme.js"/>
          <script type="text/javascript" src="/assets/scripts/typetura.min.js"/>

          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/@barba/core"></script>
          <script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.6.1/dist/lazyload.min.js"></script>
          {/* <script src="/assets/scripts/locomotive-scroll.min.js"></script> */}
          <script defer src="/assets/scripts/index-new.js"></script>

        </body>
      </Html>
    )
  }
}

export default Document;