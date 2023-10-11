import { getTrademarkApplications } from '../lib/api'
import Layout from '../components/layout/Layout'
import CallToAction from '../components/CallToAction'

export default function TrademarkApplications({ trademarkApplications }) {
  return (
    <>
      <section className='pt-20 pb-12 block w-full overflow-x-auto'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-12'>
              <div className='text-center mb-16'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2'>
                  Trademark Applications
                </h1>
                <div className='relative line-sep-center'></div>
                <p className='text-base md:text-lg mb-4'>
                  The trademark registration, renewal, assignment and recorded process requires
                  draft and filing of the related applications in the Afghanistan Trademark Office
                  along with their supporting documents. Although the applications which are filed
                  by an attorney or the principal itself are generally the same, but they are
                  slightly different; and though it’s within mandate of the Afghanistan Trademark
                  Office to draft and provide the related trademark applications for applicants, but
                  in order to save time and quickly process the application, the applicant can
                  download the following templates, fill it with its information, print and submit
                  it to the Afghanistan Trademark Office for filing. Applicant is also required to
                  submit the copies of supporting documents which are: Legalized power of attorney
                  (if attorney), national ID, signed trademark registration guide, scan of the
                  previous registration certificate (if renewal), business license, and legalized
                  assignment deed (if assignment).
                </p>
              </div>
            </div>
          </div>
          <div className='row pb-12'>
            {trademarkApplications.map((app) => (
              <div key={app.id} className='col-sm-12 col-md-6 col-lg-4 mb-6'>
                <a download href={app.acf.doc_file.url}>
                  <div className='border border-accents_3 rounded-2xl py-3 md:py-6 text-center hover:bg-white hover:shadow-card'>
                    <figure className='cursor-pointer'>
                      <div className='px-5 lg:px-10 flex items-center justify-center'>
                        <img
                          src={`/images/trademark-applications-preview/${app.acf.doc_file.title}.jpg`}
                          className='w-auto shadow-card'
                          alt=''
                        />
                      </div>
                      <figcaption className='px-4 mt-6'>
                        <h3 className='text-sm lg:text-base xl:text-lg font-lato font-bold'>
                          {app.title.rendered}
                        </h3>
                      </figcaption>
                    </figure>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

TrademarkApplications.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Trademark Applications - Masnad IP Law Firm'
      page='trademark-applications'
      canonical='https://masnadip.af/trademark-applications/'
      pageDescription='The trademark registration, renewal, assignment and recorded process requires draft and filing of the related applications in the Afghanistan Trademark Office along with their supporting documents.'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const trademarkApplications = await getTrademarkApplications()
  return {
    props: {
      trademarkApplications,
    },
  }
}
