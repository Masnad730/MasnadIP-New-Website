import Slider from 'react-slick'

import Layout from '../components/layout/Layout'
import { settings } from '../components/ReactSlickConfig'
import CTA from '../components/CallToAction'

export default function About() {
  return (
    <>
      <section className='lg:bg-[url(/images/ss-about-banner-left.png),_url(/images/ss-about-banner-right.png)] bg-no-repeat bg-contain bg-[position:bottom_left,_bottom_right]'>
        <div className='pt-40 pb-24'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5'>
                <div>
                  <div className='mb-4'>
                    <span className='uppercase text-xl font-light tracking-widest text-accents_6'>
                      who we are
                    </span>
                  </div>

                  <h2 className='text-2xl lg:text-3xl tracking-wide font-normal font-playfair'>
                    A specialist, forward-thinking, and dynamic IP law firm in Afghanistan
                  </h2>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='md:pl-[60px] pt-11 pr-1'>
                  <p className='text-accents_7 pb-6 last:pb-0'>
                    <b>MASNAD IP</b> is a specialist intellectual property law firm in Afghanistan,
                    that is considered by its peers and clients as being at the forefront of its
                    practice area. It strives to help individuals and businesses protect, manage and
                    enforce their intellectual property rights, especially trademarks in
                    Afghanistan. The firm continues to be internationally recognised as one of the
                    leading Afghan firms of trademarks attorneys in Afghanistan.
                  </p>
                  <p className='text-accents_7 pb-6 last:pb-0'>
                    The firm is known internationally for its quality of communication, proactivity,
                    creativity and high standards in providing services to its clients. The
                    attorneys have broad-based technical knowledge of Afghanistan laws with
                    specialization of trademarks law and well-developed commercial acumen, and are
                    creative in their approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <section className='pt-16'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='mb-11'>
                <div className='mb-3 relative'>
                  <h4 className='pl-6 text-lg tracking-wide addon-title'>Areas of Work</h4>
                </div>
                <h2 className='text-xl md:text-3xl lg:text-4xl font-normal'>
                  Services we provide for businesses
                </h2>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='bg-white flex flex-col justify-between py-10 pr-10 pl-11 h-[14.5rem] shadow-card mb-9'>
                <div>
                  <span className='block text-xl text-accents_6 font-roboto mb-3'>01</span>
                  <h3 className='text-xl font-normal'>Trademarks (Brands)</h3>
                </div>
                <div className='text-2xl'>
                  <i className='fas fa-long-arrow-alt-right'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='bg-white flex flex-col justify-between py-10 pr-10 pl-11 h-[14.5rem] shadow-card mb-9'>
                <div>
                  <span className='block text-xl text-accents_6 font-roboto mb-3'>02</span>
                  <h3 className='text-xl font-normal'>Patents</h3>
                </div>
                <div className='text-2xl'>
                  <i className='fas fa-long-arrow-alt-right'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='bg-white flex flex-col justify-between py-10 pr-10 pl-11 h-[14.5rem] shadow-card mb-9'>
                <div>
                  <span className='block text-xl text-accents_6 font-roboto mb-3'>03</span>
                  <h3 className='text-xl font-normal'>Copyright</h3>
                </div>
                <div className='text-2xl'>
                  <i className='fas fa-long-arrow-alt-right'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='bg-white flex flex-col justify-between py-10 pr-10 pl-11 h-[14.5rem] shadow-card mb-9'>
                <div>
                  <span className='block text-xl text-accents_6 font-roboto mb-3'>04</span>
                  <h3 className='text-xl font-normal'>Industrial or Layout Designs</h3>
                </div>
                <div className='text-2xl'>
                  <i className='fas fa-long-arrow-alt-right'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='bg-white flex flex-col justify-between py-10 pr-10 pl-11 h-[14.5rem] shadow-card mb-9'>
                <div>
                  <span className='block text-xl text-accents_6 font-roboto mb-3'>05</span>
                  <h3 className='text-xl font-normal'>Geographical Indications</h3>
                </div>
                <div className='text-2xl'>
                  <i className='fas fa-long-arrow-alt-right'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='bg-white flex flex-col justify-between py-10 pr-10 pl-11 h-[14.5rem] shadow-card mb-9'>
                <div>
                  <span className='block text-xl text-accents_6 font-roboto mb-3'>06</span>
                  <h3 className='text-xl font-normal'>Trade Secrets and Publicity Rights</h3>
                </div>
                <div className='text-2xl'>
                  <i className='fas fa-long-arrow-alt-right'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='bg-white flex flex-col justify-between py-10 pr-10 pl-11 h-[14.5rem] shadow-card mb-9'>
                <div>
                  <span className='block text-xl text-accents_6 font-roboto mb-3'>07</span>
                  <h3 className='text-xl font-normal'>Creative Ideas</h3>
                </div>
                <div className='text-2xl'>
                  <i className='fas fa-long-arrow-alt-right'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-24'>
        <div className='container'>
          <div className='row border-b border-accents_4 pb-24 mb-6'>
            <div className='col-md-4'>
              <div>
                <h2 className='text-xl md:text-2xl lg:text-4xl mb-10'>Expertise</h2>
                <h1 className='text-xl lg:text-3xl font-normal mb-8'>
                  Afghanistan&apos;s leading & top-ranked IP firm
                </h1>
              </div>
            </div>
            <div className='col-md-8'>
              <div>
                <div className='mb-8'>
                  <img src='/images/expertise.jpg' alt='' />
                </div>
                <div>
                  <p>
                    The highly regarded trademark attorneys assist in the selection, protection,
                    management and enforcement of trademarks, and advise on copyright and other IP
                    issues for high-profile brands, most notably in the retail, food and drinks,
                    events, finance, travel, telecommunication, sports merchandising, media,
                    heritage and theatre industries in Afghanistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-24 pb-20'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-7 col-md-9'>
              <div className='text-center'>
                <h2 className='text-xl md:text-2xl lg:text-main-heading mb-6 mt-1'>
                  Awards & Recognition
                </h2>
                <p className=''>
                  We&apos;re pleased to have received widespread industry recognition for
                  excellence, through the following awards and accreditations.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='md:px-32 pt-20'>
                <Slider {...settings}>
                  <div className='!flex items-center justify-center'>
                    <img src='/images/masnadip-awards/5.png' alt='' />
                  </div>
                  <div className='px-[18px] !flex items-center justify-center lg:px-[26px]'>
                    <img src='/images/masnadip-awards/4.jpg' alt='' />
                  </div>
                  <div className='px-[18px] !flex items-center justify-center lg:px-[26px]'>
                    <img src='/images/masnadip-awards/3.png' alt='' />
                  </div>
                  <div className='px-[18px] !flex items-center justify-center lg:px-[26px]'>
                    <img src='/images/masnadip-awards/2.jpeg' alt='' />
                  </div>
                  <div className='px-[18px] !flex items-center justify-center lg:px-[33px]'>
                    <img src='/images/masnadip-awards/1.jpeg' alt='' />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout
      title='About Us - Masnad IP Law Firm'
      page='about'
      canonical='https://masnadip.af/about/'
      pageDescription='MASNAD IP is a specialist trademarks law firm in Afghanistan, that continues to be internationally recognised as one of the leading Afghan firms of trademarks attorneys in Afghanistan. Areas of work; patents, trademarks (Brands), copyright, industrial or Layout Designs.'
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
          "@id":"https://masnadip.af/about/#webpage",
          "url":"https://masnadip.af/about/",
          "inLanguage":"en-US",
          "name":"About Us",
          "isPartOf":{"@id":"https://masnadip.af/#website"},
          "datePublished":"2019-12-14T10:23:03+00:00",
          "dateModified":"2020-01-22T12:47:28+00:00",
          "description":"MASNAD IP is a specialist trademarks law firm in Afghanistan, that continues to be internationally recognised as one of the leading Afghan firms of trademarks attorneys in Afghanistan. Areas of work; patents, trademarks (Brands), copyright, industrial or Layout Designs."
        }
      ]
		}'
    >
      {page}
    </Layout>
  )
}
