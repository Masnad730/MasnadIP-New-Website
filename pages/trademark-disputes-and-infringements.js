import Layout from '../components/layout/Layout'
import CallToAction from '../components/CallToAction'

export default function TrademarkDisputesAndInfringements() {
  return (
    <>
      <section className='pt-24 md:pt-28 lg:pt-40 pb-0 relative'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%] z-[-1]'>
          <span className='hidden md:inline-block text-[122px] lg:text-[202px] tracking-widest font-monoton normal-case text-accents_0'>
            service
          </span>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='flex flex-wrap'>
                <div className='mb-11'>
                  <div className='mb-3 relative'>
                    <h5 className='pl-6 text-lg tracking-wide addon-title'>Services</h5>
                  </div>
                  <div className='mb-28'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl'>We provide for businesses</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='md:bg-svc-area mb-20 ml-auto'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4 col-md-5'>
              <div className='-mt-12'>
                <div>
                  <img
                    src='/images/services/trademark-infringement.jpg'
                    alt='Trademark Disputes and Infringements'
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-8 col-md-7'>
              <div className='lg:ml-16'>
                <div className='mb-11 mt-[35px] md:mt-[70px]'>
                  <div className='mb-3 relative'>
                    <h2 className='pl-6 text-sm md:text-base lg:text-lg tracking-wide addon-title'>
                      what we do
                    </h2>
                  </div>
                  <div className='w-3/4'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl'>
                      Trademark Disputes and Infringements
                    </h1>
                  </div>
                  <div className='pt-6 pb-5 text-accents_7'>
                    <p className='pb-3 last:pb-0'>
                      It is vital to act quickly when a trademark dispute occurs. Having spent time
                      and money registering your brand or product, the best remedy is to prevent or
                      stop the infringement early. This means staying alert and being proactive in
                      enforcing your legal rights, collecting evidence and going down the injunction
                      route if necessary.
                    </p>
                    <p className='pb-3 last:pb-0'>
                      <b>MASNAD IP</b> has extensive experience and a strong reputation in the area
                      of trademark dispute resolution and protection of trademark against
                      infringement in Afghanistan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

TrademarkDisputesAndInfringements.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Trademark Disputes and Infringements - Masnad IP Law Firm'
      page='trademark-disputes-and-infringements'
      canonical='https://masnadip.af/trademark-disputes-and-infringements/'
      pageDescription='MASNAD IP has extensive experience and a strong reputation in the area of trademark dispute resolution and trademark infringement protection in Afghanistan.'
      jsonLD='{
        "@context":"https://schema.org",
        "@graph":[
        {
        "@type":"WebSite",
        "@id":"https://masnadip.af/#website",
        "url":"https://masnadip.af/",
        "name":"Masnad IP Law Firm",
        "description":"A Full-Service IP Law Firm Based in Kabul, Afghanistan",
        "potentialAction":
        {
          "@type":"SearchAction",
          "target":"https://masnadip.af/?s={search_term_string}",
          "query-input":"required name=search_term_string"
        }
        },
        {
        "@type":"WebPage",
        "@id":"https://masnadip.af/trademark-disputes-and-infringements/#webpage",
        "url":"https://masnadip.af/trademark-disputes-and-infringements/",
        "inLanguage":"en-US",
        "name":"Trademark Disputes and Infringements",
        "isPartOf":{"@id":"https://masnadip.af/#website"},
        "datePublished":"2019-12-14T10:23:03+00:00",
        "dateModified":"2020-01-22T12:47:28+00:00",
        "description":"MASNAD IP has extensive experience and a strong reputation in the area of trademark dispute resolution and trademark infringement protection in Afghanistan."
        }
        ]
      }'
    >
      {page}
    </Layout>
  )
}
