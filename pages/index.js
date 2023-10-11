import Layout from '../components/layout/Layout'
import ClientAndPartners from '../components/ClientAndPartners'
import CTA from '../components/CallToAction'

export default function Home() {
  return (
    <>
      <section>
        <div className='h-full pt-20 md:pt-24 lg:pt-[22rem] pb-20 bg-hero'>
          <div className='h-full bg-'>
            <div className='h-full my-auto container'>
              <div className='row justify-center items-center'>
                <div className='col-lg-10 bg-transparent'>
                  <div className='pt-20 lg:pt-0 px-5 lg:pl-0'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl md:text-center leading-snug font-normal font-playfair pb-12'>
                      We advance and protect the world&apos;s most valuable brands and innovations
                    </h1>
                    <div className='row pb-8 md:justify-center'>
                      <div className='col-lg-4 col-md-5 flex lg:mr-5 last:mr-0 mb-3 last:mb-0'>
                        <div className='mr-2.5 mt-1'>
                          <i className='flaticon-phone-call'></i>
                        </div>
                        <div className='flex flex-col'>
                          <h5 className='capitalize font-normal text-accents_7'>
                            call us for free consultation
                          </h5>
                          <div className='text-base md:text-lg'>+93 781 221 122</div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-4 flex lg:mr-5 last:mr-0 mb-3 last:mb-0'>
                        <div className='mr-2.5 mt-1'>
                          <i className='flaticon-mail'></i>
                        </div>
                        <div className='flex flex-col'>
                          <h5 className='capitalize font-normal text-accents_7'>email us</h5>
                          <div className='text-base md:text-lg'>info@masnadip.af</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-about pt-28 pb-24'>
          <div className='container'>
            <div className='row border-b border-accents_3 pb-12'>
              <div className='col-md-7 col-sm-6 col-xs-6'>
                <div className='mb-8 md:mb-0'>
                  <p className='text-xl md:text-2xl'>
                    Your trademark is a crafted personality profile of your business. It is much
                    more than just a design or a slogan; it is your most valuable asset, and it is
                    our mandate to protect it from violation.
                  </p>
                </div>
              </div>
              <div className='col-md-5 col-sm-6 col-xs-6'>
                <div>
                  <p>
                    Intellectual property rights enhance innovation and creativity, which in turn
                    generate jobs, businesses, quality goods and services; and promote
                    competitiveness. Our holistic brand clearance, protection, commercialisation and
                    enforcement strategies will help you to protect your intellectual property
                    rights and your brand maintain real competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-20 md:pt-28 lg:pt-32 pb-32'>
        <div className='container'>
          <div className='row pb-8'>
            <div className='col-md-12'>
              <div className='mb-11'>
                {/*
                <div className='mb-3 relative'>
                  <h4 className='pl-6 text-lg tracking-wide addon-title'>Areas of Work</h4>
                </div>
                */}
                <h2 className='text-xl md:text-3xl lg:text-4xl text-center font-normal'>
                  Services we provide for businesses
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 border-r border-accents_3 last:border-0 relative border-center-sp'>
              <div className='flex flex-col'>
                <div className='border-b border-accents_3 last:border-b-0 group'>
                  <div className='px-4 pt-12 pb-14 text-center'>
                    <div className='flex items-center justify-center'>
                      <img
                        className='w-[55px] group-hover:scale-125 transition-custom'
                        src='/icons/services-icons/trademark.png'
                        alt=''
                      />
                    </div>
                    <h3 className='text-lg lg:text-xl min-h-[56px] mt-6 mb-4 font-playfair'>
                      Trademark
                    </h3>
                    <p className='text-accents_6 pb-5'>
                      A trademark gives you the exclusive right to use your brand in relation to
                      what you do
                    </p>
                    <div className='w-8 h-0.5 bg-primary mt-4 mb-0 mx-auto'></div>
                  </div>
                </div>
                <div className='border-b border-accents_3 last:border-b-0 group'>
                  <div className='px-4 pt-12 pb-14 text-center'>
                    <div className='flex items-center justify-center'>
                      <img
                        className='w-[55px] group-hover:scale-125 transition-custom'
                        src='/icons/services-icons/trademark-registration.png'
                        alt=''
                      />
                    </div>
                    <h3 className='text-lg lg:text-xl min-h-[56px] mt-6 mb-4 font-playfair'>
                      Trademark Registration
                    </h3>
                    <p className='text-accents_6 pb-5'>
                      To register a Trademark, you’ll first need to check that nobody else using it
                    </p>
                    <div className='w-8 h-0.5 bg-primary mt-4 mb-0 mx-auto'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 border-r border-accents_3 last:border-0 relative border-center-sp'>
              <div className='flex flex-col'>
                <div className='border-b border-accents_3 last:border-b-0 group'>
                  <div className='px-4 pt-12 pb-14 text-center'>
                    <div className='flex items-center justify-center'>
                      <img
                        className='w-[55px] group-hover:scale-125 transition-custom'
                        src='/icons/services-icons/trademark-disputes.png'
                        alt=''
                      />
                    </div>
                    <h3 className='text-lg lg:text-xl min-h-[56px] mt-6 mb-4 font-playfair'>
                      Trademark Disputes and Infringements
                    </h3>
                    <p className='text-accents_6 pb-5'>
                      It is vital to act quickly when a trademark dispute occurs or stop the
                      infringement early
                    </p>
                    <div className='w-8 h-0.5 bg-primary mt-4 mb-0 mx-auto'></div>
                  </div>
                </div>
                <div className='border-b border-accents_3 last:border-b-0 group'>
                  <div className='px-4 pt-12 pb-14 text-center'>
                    <div className='flex items-center justify-center'>
                      <img
                        className='w-[55px] group-hover:scale-125 transition-custom'
                        src='/icons/services-icons/investigation-and-watch-services.png'
                        alt=''
                      />
                    </div>
                    <h3 className='text-lg lg:text-xl min-h-[56px] mt-6 mb-4 font-playfair'>
                      Investigation and Watch Services
                    </h3>
                    <p className='text-accents_6 pb-5'>
                      The Trademark Watch Service Comprises a thorough screening of the Official
                      Gazettes in Afghanistan
                    </p>
                    <div className='w-8 h-0.5 bg-primary mt-4 mb-0 mx-auto'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 border-r border-accents_3 last:border-0'>
              <div className='flex flex-col'>
                <div className='border-b border-accents_3 last:border-b-0 group'>
                  <div className='px-4 pt-12 pb-14 text-center'>
                    <div className='flex items-center justify-center'>
                      <img
                        className='w-[55px] group-hover:scale-125 transition-custom'
                        src='/icons/services-icons/domain-names.png'
                        alt=''
                      />
                    </div>
                    <h3 className='text-lg lg:text-xl min-h-[56px] mt-6 mb-4 font-playfair'>
                      Domain Names
                    </h3>
                    <p className='text-accents_6 pb-5'>
                      At MASNAD IP, we are the first IP firm which provide our clients with a full
                      range of domain name services
                    </p>
                    <div className='w-8 h-0.5 bg-primary mt-4 mb-0 mx-auto'></div>
                  </div>
                </div>
                <div className='border-b border-accents_3 last:border-b-0 group'>
                  <div className='px-4 pt-12 pb-14 text-center'>
                    <div className='flex items-center justify-center'>
                      <img
                        className='w-[55px] group-hover:scale-125 transition-custom'
                        src='/icons/services-icons/trademark-searching-and-clearance.png'
                        alt=''
                      />
                    </div>
                    <h3 className='text-lg lg:text-xl min-h-[56px] mt-6 mb-4 font-playfair'>
                      Trademark Searching and Clearance
                    </h3>
                    <p className='text-accents_6 pb-5'>
                      Our experienced attorneys will ensure the rights you want to exploit are free
                      for use
                    </p>
                    <div className='w-8 h-0.5 bg-primary mt-4 mb-0 mx-auto'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <ClientAndPartners />
      <section className='pt-10 pb-32'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='mb-11'>
                <div className='mb-3 relative'>
                  <h4 className='pl-6 text-lg tracking-wide addon-title'>Insights</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='row bg-[#F8F5F3] md:bg-svc-area'>
            <div className='col-md-6 col-lg-4'>
              <div className='h-full'>
                <img
                  src='/images/Ficpi-International-Banner.png'
                  alt=''
                  className='h-full object-contain'
                />
              </div>
            </div>
            <div className='col-md-6 col-lg-8'>
              <div className='md:pl-8 py-10'>
                <span className='inline-block text-sm text-accents_7 mt-2 mb-6'>
                  January 23, 2023
                </span>
                <a
                  href='https://ficpi.org/user/11129'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-primary'
                >
                  <h2>
                    Masnad IP has been admitted to the membership of International Federation of
                    Intellectual Property Attorneys, as a member in Afghanistan.
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Masnad IP Law Firm'
      page='home'
      canonical='https://masnadip.af/'
      pageDescription='MASNAD IP is a specialist trademarks law firm in Afghanistan. It strives to help individuals and businesses protect, manage and enforce their intellectual property rights, especially trademarks in Afghanistan.'
      jsonLD='{
        "@context": "https://schema.org",
        "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://masnadip.af/#website",
          "url": "https://masnadip.af/",
          "name": "Masnad IP Law Firm",
          "description": "A Full-Service IP Law Firm Based in Kabul, Afghanistan",
          "publisher": { "@id": "https://masnadip.af/#organization" }
        },
        {
          "@type": "Organization",
          "@id": "https://masnadip.af/#organization",
          "name": "Masnad IP Law Firm",
          "url": "https://masnadip.af/",
          "logo": "https://masnadip.af/images/masnadip-logo.png"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://masnadip.af/#breadcrumblist",
          "itemListElement": [
          {
            "@type": "ListItem",
            "@id": "https://masnadip.af/about/#listItem",
            "position": 1,
            "item": {
            "@type": "WebPage",
            "@id": "https://masnadip.af/about/#item",
            "name": "About Us",
            "description": "MASNAD IP is a specialist trademarks law firm in Afghanistan, that continues to be internationally recognised as one of the leading Afghan firms of trademarks attorneys in Afghanistan. Areas of work; patents, trademarks (Brands), copyright, industrial or Layout Designs.",
            "url": "https://masnadip.af/about/"
            }
          },
          {
            "@type": "ListItem",
            "@id": "https://masnad.af/contact/#listItem",
            "position": 2,
            "item": {
            "@type": "WebPage",
            "@id": "https://masnad.af/contact/#item",
            "name": "Contact Us",
            "description": "Contact us. Ansori Street, Shahri Now, District 10, Kabul, Afghanistan | +93 730 830 830. info@masnadip.af",
            "url": "https://masnadip.af/contact/"
            }
          }
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://masnadip.af/#webpage",
          "url": "https://masnadip.af/",
          "name": "Masnad IP Law Firm",
          "description": "MASNAD IP is a specialist trademarks law firm in Afghanistan. It strives to help individuals and businesses protect, manage and enforce their intellectual property rights, especially trademarks in Afghanistan.",
          "inLanguage": "en-US",
          "isPartOf": { "@id": "https://masnadip.af/#website" },
          "breadcrumb": { "@id": "https://masnadip.af/#breadcrumblist" }
        }
        ]
      }'
    >
      {page}
    </Layout>
  )
}
