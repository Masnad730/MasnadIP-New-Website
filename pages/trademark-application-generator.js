import ReactPDF, { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import Layout from '../components/layout/Layout'
import PDFGenerator from '../components/PDFGenerator'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

export default function TrademarkApplicationGenerator() {
  return (
    <>
      <div>inside trademark application generator</div>
      {/*<React.Suspense fallback='Loading...'>
        <PDFDownloadLink
          document={<PDFGenerator />}
          fileName='recipe.pdf'
          className='button-background w-full text-center text-color py-2 px-4
       rounded mt-10'
        >
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      </React.Suspense>*/}
    </>
  )
}

TrademarkApplicationGenerator.getLayout = function getLayout(page) {
  return (
    <Layout title='' page='' canonical='' pageDescription=''>
      {page}
    </Layout>
  )
}
