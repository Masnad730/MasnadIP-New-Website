import { getTrademarkRegGuide } from '../lib/api'
import Layout from '../components/layout/Layout'
import CallToAction from '../components/CallToAction'

export default function TrademarkRegistrationAndProtectionInAfghanistan({ trademarkRegGuide }) {
  return (
    <>
      <section className='pt-20 pb-12 block w-full overflow-x-auto'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-12'>
              <div className='text-center mb-16'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2'>
                  Trademark Registration and Protection in Afghanistan
                </h1>
              </div>
            </div>
          </div>
          <div className='row justify-center'>
            <div className='col-lg-11 border-t border-accents_3 pt-6'>
              <div className='px-2 lg:px-0'>
                <p>
                  {trademarkRegGuide.map((regGuide) => (
                    <div key={regGuide.id} className='whitespace-pre-wrap mb-14'>
                      <div
                        className='dashed'
                        dangerouslySetInnerHTML={{ __html: regGuide.acf.description }}
                      ></div>
                    </div>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

TrademarkRegistrationAndProtectionInAfghanistan.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Trademark Registration and Protection in Afghanistan - Masnad IP Law Firm'
      page='trademark-registration-and-protection-in-afghanistan'
      canonical='https://masnadip.af/trademark-registration-and-protection-in-afghanistan/'
      pageDescription='The process for search, registration, renewal, assignment, change and protection of trademarks in Afghanistan is simple and can be completed in few steps, although some steps may take a longer time.'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const trademarkRegGuide = await getTrademarkRegGuide()
  return {
    props: {
      trademarkRegGuide,
    },
  }
}
