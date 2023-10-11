import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { useSnackbar } from 'notistack'

import { submitUserEnquiry } from '../lib/api'
import Layout from '../components/layout/Layout'

export default function Contact() {
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInfo({ ...userInfo, [name]: value })
  }
  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    submitUserEnquiry(userInfo, setUserInfo, setIsLoading, enqueueSnackbar)
  }
  return (
    <div className='pt-40'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col relative'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[67%] z-[-1]'>
              <span className='hidden md:inline-block text-[122px] lg:text-[202px] tracking-widest font-monoton normal-case text-accents_0'>
                contact
              </span>
            </div>
            <div className='pb-16 text-center'>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair mb-4'>
                We&apos;re looking forward to hearing from you.
              </h1>
              <p className='text-accents_6'>
                If you have any questions or comments, feel free to contact us by filling out the
                form below.
              </p>
            </div>
          </div>
        </div>
        <div className='row pt-12 lg:pt-24 pb-20'>
          <div className='col-lg-7 col-md-12'>
            <div className='bg-white shadow-2xl px-4 md:px-10 py-6 md:py-10'>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                      <label className='text-sm font-light' htmlFor='first-name'>
                        Name
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        value={userInfo.firstName}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your Full Name'
                      />
                    </div>
                    <div className='col-sm-12 col-lg-6'>
                      <label className='text-sm font-light' htmlFor='phone-number'>
                        Phone Number
                      </label>
                      <input
                        type='text'
                        name='phoneNumber'
                        value={userInfo.phoneNumber}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your Phone Number'
                      />
                    </div>
                    <div className='col-lg-12'>
                      <label className='text-sm font-light' htmlFor='email'>
                        Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={userInfo.email}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your Email'
                      />
                    </div>
                    <div className='col-lg-12'>
                      <label className='text-sm font-light' htmlFor='text'>
                        Company
                      </label>
                      <input
                        type='company'
                        name='company'
                        value={userInfo.company}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your Company Name'
                      />
                    </div>
                    <div className='col-lg-12'>
                      <label className='text-sm font-light' htmlFor='message'>
                        Message
                      </label>
                      <textarea
                        name='message'
                        id='message'
                        cols='30'
                        rows='4'
                        value={userInfo.message}
                        onChange={handleChange}
                        required
                        placeholder='Brief Description of Your Case'
                        className='resize-none'
                      ></textarea>
                    </div>
                    <div className='col-lg-12'>
                      <button className='text-sm uppercase w-full flex items-center justify-center border border-primary'>
                        {!isLoading ? (
                          'send message'
                        ) : (
                          <ClipLoader color={'#000'} loading={isLoading} size={30} />
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-12'>
            <div className='pl-0 lg:pl-24 pt-8 lg:pt-0'>
              <div className='bg-white shadow-2xl px-4 md:px-10 py-6 md:py-10'>
                <div>
                  <ul>
                    <li className='mb-8 last:mb-0'>
                      <span className='inline-block pb-2 text-accents_6 font-playfair'>
                        Office Address
                      </span>
                      <span>
                        <address className='not-italic text-lg'>
                          Ansori Street, Shahri Now, District 10, Kabul, Afghanistan
                        </address>
                      </span>
                    </li>
                    <li className='mb-4 last:mb-0'>
                      <span className='text-accents_6 inline-block w-20 font-playfair'>Phone:</span>
                      <span>
                        <a href='tel:+93 781 221 122'>+93 781 221 122</a>
                      </span>
                    </li>
                    <li className='mb-4 last:mb-0'>
                      <span className='text-accents_6 inline-block w-20 font-playfair'>
                        WhatsApp:
                      </span>
                      <a
                        href='https://wa.me/93730830830'
                        target='_blank'
                        rel='noreferrer'
                        className='hover:text-primary'
                      >
                        <span>&nbsp;+93 730 830 830</span>
                      </a>
                    </li>
                    <li className='mb-4 last:mb-0'>
                      <span className='text-accents_6 inline-block w-20 font-playfair'>Email:</span>
                      <a href='mailto:info@masnadip.af' className='hover:text-primary'>
                        info@masnadip.af
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='pt-6 md:pt-12 pb-20'>
              <h2 className='text-xl md:text-2xl lg:text-3xl font-playfair text-center mb-10'>
                You’ll find us on the Map in…
              </h2>
              <iframe
                className='outline-none focus:outline-none rounded-lg'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.5961273487596!2d69.17065401564747!3d34.53845898047646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16f446ddf9ab1%3A0x92203697e9eb6fb3!2sMasnad%20IP%20Law%20Firm!5e0!3m2!1sen!2s!4v1661411738556!5m2!1sen!2s'
                width='100%'
                height='480'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Contact Us - Masnad IP Law Firm'
      page='contact'
      canonical='https://masnadip.af/contact/'
      pageDescription='Contact us. Ansori Street, Shahri Now, District 10, Kabul, Afghanistan | +93 730 830 830. info@masnadip.af'
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
        "@id":"https://masnadip.af/contact/#webpage",
        "url":"https://masnadip.af/contact/",
        "inLanguage":"en-US",
        "name":"Contact Us",
        "isPartOf":{"@id":"https://masnadip.af/#website"},
        "datePublished":"2019-12-14T10:23:03+00:00",
        "dateModified":"2020-01-22T12:47:28+00:00",
        "description":"Contact us. Ansori Street, Shahri Now, District 10, Kabul, Afghanistan | +93 730 830 830. info@masnadip.af"
        }
      ]
    }'
    >
      {page}
    </Layout>
  )
}
