import Layout from '../components/layout/Layout'
import CallToAction from '../components/CallToAction'

export default function TrademarkSearchingAndClearance() {
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
                    <h5 className='pl-6 text-sm md:text-base lg:text-lg tracking-wide addon-title'>
                      Services
                    </h5>
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
                    src='/images/services/Trademark-Clearance-Search.png'
                    alt='Trademark Searching and Clearance'
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-8 col-md-7'>
              <div className='lg:ml-16'>
                <div className='mb-11 mt-[35px] md:mt-[70px]'>
                  <div className='mb-3 relative'>
                    <h1 className='pl-6 text-sm md:text-base lg:text-lg tracking-wide addon-title'>
                      what we do
                    </h1>
                  </div>
                  <div className='w-3/4'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl'>
                      Trademark Searching and Clearance
                    </h3>
                  </div>
                  <div className='pt-6 pb-5 text-accents_7'>
                    <p className='pb-3 last:pb-0'>
                      We understand that the work you do to embark on an established brand is
                      time-intensive and costly.
                    </p>
                    <p className='pb-3 last:pb-0'>
                      Our experienced and commercially minded attorneys will ensure the rights you
                      want to exploit are free for use and will not infringe the rights of others.
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
TrademarkSearchingAndClearance.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Trademark Searching and Clearance - Masnad IP Law Firm'
      page='trademark-searching-and-clearance'
      canonical='https://masnadip.af/trademark-searching-and-clearance/'
      pageDescription='We at Masnad IP, understand that the work you do to embark on an established brand is time-intensive and costly. Our experienced and commercially minded attorneys will ensure the rights you want to exploit are free for use and will not infringe the rights of others in Afghanistan.'
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
        "@id":"https://masnadip.af/trademark-searching-and-clearance/#webpage",
        "url":"https://masnadip.af/trademark-searching-and-clearance/",
        "inLanguage":"en-US",
        "name":"Trademark Searching and Clearance",
        "isPartOf":{"@id":"https://masnadip.af/#website"},
        "datePublished":"2019-12-14T10:23:03+00:00",
        "dateModified":"2020-01-22T12:47:28+00:00",
        "description":"We at Masnad IP, understand that the work you do to embark on an established brand is time-intensive and costly. Our experienced and commercially minded attorneys will ensure the rights you want to exploit are free for use and will not infringe the rights of others in Afghanistan."
        }
        ]
      }'
    >
      {page}
    </Layout>
  )
}
