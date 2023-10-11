import Link from 'next/link'

const CTA = () => {
  return (
    <section>
      <div className='bg-[url("/images/bgIMG-cta.jpeg")] bg-no-repeat bg-cover bg-center bg-fixed py-24'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='px-12 py-20 bg-white'>
                <div className='text-center'>
                  <h2 className='text-2xl md:text-3xl lg:text-4xl'>Tell us about your business</h2>
                  <p className='mt-4 mb-6'>
                    Running a business is Hard. Protecting it doesn&apos;t have to be
                  </p>
                  <div>
                    <button className='bg-tertiary text-accents_0 capitalize px-[2.2rem]'>
                      <Link href='/contact' passHref>
                        <a>get started today</a>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 hidden lg:block'>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
