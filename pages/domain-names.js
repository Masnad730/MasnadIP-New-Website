import Layout from '../components/layout/Layout'
import CallToAction from '../components/CallToAction'

export default function DomainNames() {
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
                    <h2 className='pl-6 text-sm md:text-base lg:text-lg tracking-wide addon-title'>
                      Services
                    </h2>
                  </div>
                  <div className='mb-28'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl'>We provide for businesses</h3>
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
                  <img src='/images/services/domain-names.jpg' alt='' />
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
                    <h3 className='text-2xl md:text-3xl lg:text-4xl'>Domain Names</h3>
                  </div>
                  <div className='pt-6 pb-5 text-accents_7'>
                    <p className='pb-3 last:pb-0'>
                      At <b>MASNAD IP</b>, we are the first IP firm which provide our clients with a
                      full range of domain name services. Our services includes: searching and
                      registration of new names and maintenance of existing names. We also monitor
                      domain names, which are registered by others, and assist in the acquisition of
                      domain names from third parties and dispute resolution related to domain names
                      in Afghanistan.
                    </p>
                    <p className='pb-3 last:pb-0'>
                      <b>MASNAD IP</b> has also introduces the Trademark Infringement Services
                      whereby local markets are surveyed for registered and unregistered marks
                      imitating those of the owner. If the comprehensive searches lead to any such
                      counterfeiting trademarks, a detailed report is provided.
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
DomainNames.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Domain Names - Masnad IP Law Firm'
      page='domain-names'
      canonical='https://masnadip.af/domain-names/'
      pageDescription='At MASNAD IP, we are the first IP firm which provide our clients with a full range of domain name services in Afghanistan. Our services includes: searching and registration of new names and maintenance of existing names.'
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
        "@id":"https://masnadip.af/domain-names/#webpage",
        "url":"https://masnadip.af/domain-names/",
        "inLanguage":"en-US",
        "name":"Domain Names",
        "isPartOf":{"@id":"https://masnadip.af/#website"},
        "datePublished":"2019-12-14T10:23:03+00:00",
        "dateModified":"2020-01-22T12:47:28+00:00",
        "description":"At MASNAD IP, we are the first IP firm which provide our clients with a full range of domain name services in Afghanistan. Our services includes: searching and registration of new names and maintenance of existing names."
        }
        ]
      }'
    >
      {page}
    </Layout>
  )
}
