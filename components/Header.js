import Link from 'next/link'
import ResponsiveHeader from './ResponsiveHeader'

const Header = ({ activePage }) => {
  return (
    <>
      <div className='block lg:hidden'>
        <ResponsiveHeader activePage={activePage} />
      </div>
      <header className='hidden lg:block min-w-full p-0 m-0'>
        <div className='container'>
          <div className='border-b border-accents_4'>
            <div className='row'>
              <div className='col-12 col-lg-2'>
                <div className='h-[80px] inline-flex items-center m-0'>
                  <div className='cursor-pointer'>
                    <Link href='/' passHref>
                      <a>
                        <img
                          src='/images/masnadip-logo.png'
                          alt='Masnad IP Law Firm'
                          className='w-40'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-10'>
                <div>
                  <div>
                    <nav>
                      <ul className='flex items-center justify-end uppercase'>
                        <li className='px-4 first:pl-0 last:pr-0 uppercase leading-[80px]'>
                          <Link href='/' passHref>
                            <a className='hover:text-primary'>home</a>
                          </Link>
                        </li>
                        <li className='px-4 first:pl-0 last:pr-0 uppercase leading-[80px]'>
                          <Link href='/about' passHref>
                            <a className='hover:text-primary'>about us</a>
                          </Link>
                        </li>
                        <li className='px-4 first:pl-0 last:pr-0 uppercase leading-[80px] group'>
                          <Link href='#' passHref>
                            <a className='relative'>
                              <div className='flex items-center justify-center'>
                                <span className='mr-1 hover:text-primary'>services</span>
                                <i className='fas fa-angle-down'></i>
                              </div>
                              <div className='hidden absolute -left-[358px] top-0 z-10 p-8 mt-20 min-w-[44rem] leading-relaxed text-accents_0 shadow-2xl bg-accents_9 group-hover:block group-hover:opacity-100'>
                                <div className=''>
                                  <div className='text-accents_6 mb-3'>Services</div>
                                </div>
                                <div className='row'>
                                  <div className='col-6'>
                                    <div className=''>
                                      <ul className='text-medium normal-case'>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link href='/trademark' passHref>
                                            <a
                                              className={
                                                activePage === 'trademark'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Trademark
                                            </a>
                                          </Link>
                                        </li>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link href='/trademark-registration' passHref>
                                            <a
                                              className={
                                                activePage === 'trademark-registration'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Trademark Registration
                                            </a>
                                          </Link>
                                        </li>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link
                                            href='/trademark-disputes-and-infringements'
                                            passHref
                                          >
                                            <a
                                              className={
                                                activePage ===
                                                'trademark-disputes-and-infringements'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Trademark Disputes and Infringements
                                            </a>
                                          </Link>
                                        </li>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link href='/trademark-searching-and-clearance' passHref>
                                            <a
                                              className={
                                                activePage === 'trademark-searching-and-clearance'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Trademark Searching and Clearance
                                            </a>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className='col-1'></div>
                                  <div className='col-5'>
                                    <div className=''>
                                      <ul className='text-medium normal-case'>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link href='/investigation-and-watch-services' passHref>
                                            <a
                                              className={
                                                activePage === 'investigation-and-watch-services'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Investigation and Watch Services
                                            </a>
                                          </Link>
                                        </li>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link href='/domain-names' passHref>
                                            <a
                                              className={
                                                activePage === 'domain-names'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Domain Names
                                            </a>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </li>
                        <li className='px-4 first:pl-0 last:pr-0 uppercase leading-[80px] group'>
                          <Link href='#' passHref>
                            <a className='relative'>
                              <div className='flex items-center justify-center'>
                                <span className='mr-1 hover:text-primary'>resources</span>
                                <i className='fas fa-angle-down'></i>
                              </div>
                              <div className='hidden absolute -left-[204px] top-0 z-10 p-8 mt-20 w-[27rem] leading-relaxed text-accents_0 shadow-2xl bg-accents_9 group-hover:block group-hover:opacity-100'>
                                <div className=''>
                                  <div className='text-accents_6 mb-3'>Resources</div>
                                </div>
                                <div className='row pt-3'>
                                  <div className='col-12'>
                                    <div className=''>
                                      <ul className='text-medium normal-case'>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link
                                            href='/trademark-registration-and-protection-in-afghanistan'
                                            passHref
                                          >
                                            <a
                                              className={
                                                activePage ===
                                                'trademark-registration-and-protection-in-afghanistan'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Trademark Registration and Protection in Afghanistan
                                            </a>
                                          </Link>
                                        </li>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link
                                            href='/trademarks-classification-in-afghanistan'
                                            passHref
                                          >
                                            <a
                                              className={
                                                activePage ===
                                                'trademarks-classification-in-afghanistan'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Trademarks Classification in Afghanistan
                                            </a>
                                          </Link>
                                        </li>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link href='/trademark-applications' passHref>
                                            <a
                                              className={
                                                activePage === 'trademarks-applications'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Trademark Applications
                                            </a>
                                          </Link>
                                        </li>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link href='/afghanistan-ip-laws' passHref>
                                            <a
                                              className={
                                                activePage === 'afghanistan-ip-laws'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Afghanistan IP Laws
                                            </a>
                                          </Link>
                                        </li>
                                        <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                          <Link href='#' passHref>
                                            <a
                                              className={
                                                activePage === 'trademark-application-generator'
                                                  ? 'text-primary'
                                                  : 'transition-custom hover:text-primary'
                                              }
                                            >
                                              Trademark Application Generator
                                            </a>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </li>
                        <li className='px-4 first:pl-0 last:pr-0 uppercase leading-[80px]'>
                          <Link href='/contact' passHref>
                            <a className='hover:text-primary'>contact us</a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
