import Head from 'next/head'

import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children, title, canonical, pageDescription, jsonLD, page }) => {
  return (
    <>
      <Head>
        <link rel='canonical' href={canonical} />
        <meta name='description' content={pageDescription} />
        <title>{title}</title>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: jsonLD }} />
      </Head>
      <div className='relative'>
        <div className={page === 'home' ? 'absolute top-0 left-0 w-full z-[9999]' : 'w-full'}>
          <Header activePage={page} />
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
