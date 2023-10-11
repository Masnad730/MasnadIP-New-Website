import { getIPLaws } from '../lib/api'
import Layout from '../components/layout/Layout'
import CallToAction from '../components/CallToAction'

export default function AfghanistanIPLaws({ ipLaws }) {
  return (
    <>
      <section className='pt-20 pb-12 block w-full overflow-x-auto'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-12'>
              <div className='text-center mb-16'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2'>
                  Afghanistan IP Laws
                </h1>
                <div className='relative line-sep-center'></div>
                <p className='text-base md:text-lg mb-4'>
                  The Afghanistan government enacted a number of laws in the field of intellectual
                  property law, which the most related laws of Afghanistan in the field of
                  intellectual property law along with their unofficial English translations are
                  gathered and published here. The above laws are amended several times and are
                  subject to amendments from time to time. Also, the laws in Afghanistan are drafted
                  and published in two official languages of Pashto and Dari, Therefore, in order to
                  confirm if a certain provision of above laws is not amended and if the English
                  translation of a certain provision is correct, please write to us for free
                  consultation.
                </p>
              </div>
            </div>
          </div>
          <div className='row pt-10 pb-20'>
            <div className='col-12'>
              <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='items-center bg-transparent w-full table-auto'>
                  <tbody className='bg-gray-50'>
                    <tr>
                      <td colSpan='2' className='font-extrabold text-center py-4'>
                        IP Laws in Dari & Pashto
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    {ipLaws
                      .filter((item) => item.acf.doc_pashto && item.acf.doc_dari)
                      .map((item, index) => (
                        <tr key={index} className='border-b border-accents_2'>
                          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 '>
                            {item.title.rendered}
                          </td>
                          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 text-right'>
                            <a
                              href={item.acf.doc_pashto.url}
                              className='bg-tertiary text-white p-2 cursor-pointer'
                              target='_blank'
                              rel='noreferrer'
                              download
                            >
                              <i className='fa fa-download'></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='row pt-10 pb-20'>
            <div className='col-12'>
              <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='items-center bg-transparent w-full table-auto'>
                  <tbody className='bg-gray-50'>
                    <tr>
                      <td colSpan='2' className='font-extrabold text-center py-4'>
                        IP Laws in English
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    {ipLaws
                      .filter((item) => item.acf.doc_english)
                      .map((item, index) => (
                        <tr key={index} className='border-b border-accents_2'>
                          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 '>
                            {item.title.rendered}
                          </td>
                          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 text-right'>
                            <a
                              href={item.acf.doc_pashto.url}
                              className='bg-tertiary text-white p-2 cursor-pointer'
                              target='_blank'
                              rel='noreferrer'
                              download
                            >
                              <i className='fa fa-download'></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

AfghanistanIPLaws.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Afghanistan IP Laws - Masnad IP Law Firm'
      page='afghanistan-ip-laws'
      canonical='https://masnadip.af/afghanistan-ip-laws/'
      pageDescription='The trademark registration, renewal, assignment and recorded process requires draft and filing of the related applications in the Afghanistan Trademark Office along with their supporting documents.'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const ipLaws = await getIPLaws()
  return {
    props: {
      ipLaws,
    },
  }
}
