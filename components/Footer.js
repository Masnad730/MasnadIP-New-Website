import Link from 'next/link'
import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { useSnackbar } from 'notistack'

import { submitSubscriptionEmail } from '../lib/api'

const Footer = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    submitSubscriptionEmail(email, setEmail, setIsLoading, enqueueSnackbar)
  }
  return (
    <footer className='bg-accents_2'>
      <div className='pt-24 pb-14 px-4 md:px-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 col-lg-5'>
              <div>
                <Link href='/' passHref>
                  <a>
                    <img
                      src='/images/masnadip-logo.png'
                      alt='Masnad IP Law Firm'
                      className='w-44'
                    />
                  </a>
                </Link>
                <div className='mt-8'>
                  <div className='max-w-[280px] relative'>
                    <form onSubmit={handleSubmit}>
                      <h4 className='text-base font-normal' htmlFor=''>
                        Stay up to date with our latest insights.
                      </h4>
                      <input
                        className='w-full !bg-transparent rounded-none border-b border-solid border-accents_9 placeholder-accents_6 placeholder:font-medium focus:bg-none pl-0 mt-1.5 mb-0'
                        name='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Your Email'
                      />
                      <div className='absolute top-1/2 right-0 transform -translate-y-[18%]'>
                        <button type='submit' className='p-0 m-0'>
                          {!isLoading ? (
                            <i className='fa fa-arrow-right'></i>
                          ) : (
                            <ClipLoader color={'#B72530'} loading={isLoading} size={30} />
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-5 col-lg-4'>
              <div className='mt-16'>
                <ul className='w-full flex flex-wrap'>
                  <li className='grow shrink-0 basis-1/2 max-w-[50%] mb-8 capitalize'>
                    <Link href='/' passHref>
                      <a className='hover:text-primary'>home</a>
                    </Link>
                  </li>
                  <li className='grow shrink-0 basis-1/2 max-w-[50%] mb-8 capitalize'>
                    <Link href='/contact' passHref>
                      <a className='hover:text-primary'>contact us</a>
                    </Link>
                  </li>
                  <li className='grow shrink-0 basis-1/2 max-w-[50%] mb-8 capitalize'>
                    <Link href='/about' passHref>
                      <a className='hover:text-primary'>about us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='flex flex-col justify-end w-full h-full pt-6 lg:pt-0'>
                <div className='mb-8'>
                  <ul className='flex items-baseline justify-start lg:justify-end'>
                    <li className='mr-[30px] last:mr-0'>
                      <a
                        href='https://www.facebook.com/MasnadIPServices/'
                        target='_blank'
                        rel='noreferrer'
                        className='text-sm'
                      >
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li className='mr-[30px] last:mr-0'>
                      <a
                        href='https://twitter.com/masnadlc'
                        target='_blank'
                        rel='noreferrer'
                        className='text-sm'
                      >
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li className='mr-[30px] last:mr-0'>
                      <a
                        href='https://www.linkedin.com/company/masnad?trk=biz-companies-cym'
                        target='_blank'
                        rel='noreferrer'
                        className='text-sm'
                      >
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='flex items-center justify-start lg:justify-end mb-8'>
                  <span className='text-sm text-accents_6 text-right'>
                    Copyright © {new Date().getFullYear()}
                    <strong className='text-accents_8 font-normal'> Masnad IP Law Firm </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
