import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import { getTrademarkClassification } from '../lib/api'
import Layout from '../components/layout/Layout'
import CallToAction from '../components/CallToAction'

export default function TrademarkClassificationInAfghanistan({ trademarksClassification }) {
  return (
    <>
      <section className='pt-20 pb-16 block w-full overflow-x-auto'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-12'>
              <div className='text-center mb-16'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-playfair leading-snug mb-2'>
                  Trademarks Classification in Afghanistan
                </h1>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-playfair leading-snug mb-2'>
                  طبقه بندی علائم تجارتی در افغانستان
                </h1>
                <div className='relative line-sep-center'></div>
                <p className='text-base md:text-lg mb-4'>
                  The Afghanistan Trademarks Office accepts applications which are made according to
                  the Nice Classification, established by the Nice Agreement concerning the
                  international classification of goods and services for the purposes of the
                  registration of marks. The applicant is required to determine the class and define
                  the goods and services which it uses the subject trademark for it. The applicant
                  is required to write the related trademark application in one of the two official
                  languages of Pashto and Dari, and it can use the following classification which is
                  made based on the Nice Classification and local terminology and practices of the
                  Afghanistan Trademarks Office.
                </p>

                <p className='text-base md:text-lg mb-4'>
                  اداره ثبت علائم تجارتی افغانستان درخواست هایی که بر اساس رده بندی نیس که توسط
                  موافقت نامه نیس در مورد طبقه بندی بین المللی کالاها و خدمات به منظور ثبت علائم
                  تجارتی ایجاد شده است را می پذیرد. متقاضی موظف است طبقه را تعیین کرده و کالاها و
                  خدماتی را که تحت علامت تجاری خود می خواهد عرضه نماید را مشخص نماید. متقاضی باید
                  درخواستی ثبت علامت تجارتی خویش را به یکی از دو زبان های رسمی کشور پشتو و یا دری
                  ارائه نماید و می تواند از طبقه بندی زیر که بر اساس طبقه بندی نیس و اصطلاحات محلی
                  اداره ثبت علائم تجارتی افغانستان ساخته شده است استفاده کند
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div>
                {/*<Accordion allowZeroExpanded preExpanded={['0']}>
                  {trademarksClassification.map((eachClass) => (
                    <AccordionItem key={eachClass.id}>
                      <AccordionItemHeading>
                        <AccordionItemButton className='border-b border-accents_3 p-4 pr-0 text-xl flex items-center justify-between focus:outline-none acc_btn_right'>
                          {eachClass.acf.class}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className='pl-10 py-4 whitespace-pre-wrap'>
                          <div
                            className='font-normal'
                            dangerouslySetInnerHTML={{ __html: eachClass.acf.description }}
                          ></div>
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                  </Accordion>*/}
                <div className='text-2xl text-right font-bold text-tertiary focus:outline-none'>
                  :الف) کالاها و محصولات
                </div>
                {trademarksClassification.map((eachClass, index) => {
                  if (index < 34) {
                    return (
                      <div key={eachClass.id}>
                        <div className='px-4 pt-4 pr-0 text-xl text-right text-tertiary focus:outline-none'>
                          {eachClass.acf.class}
                        </div>
                        <div className='pl-10 pb-4 pt-2 whitespace-pre-wrap text-accents_7'>
                          <div
                            className='font-normal'
                            dangerouslySetInnerHTML={{ __html: eachClass.acf.description }}
                          ></div>
                        </div>
                      </div>
                    )
                  }
                })}
                <div className='text-2xl text-right font-bold text-tertiary focus:outline-none'>
                  :ب) خدمات
                </div>
                {trademarksClassification.map((eachClass, index) => {
                  if (index >= 34) {
                    return (
                      <div>
                        <div key={eachClass.id}>
                          <div className='px-4 pt-4 pr-0 text-xl text-right text-tertiary focus:outline-none'>
                            {eachClass.acf.class}
                          </div>
                          <div className='pl-10 pb-4 pt-2 whitespace-pre-wrap text-accents_7'>
                            <div
                              className='font-normal'
                              dangerouslySetInnerHTML={{ __html: eachClass.acf.description }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

TrademarkClassificationInAfghanistan.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Trademarks Classification in Afghanistan - Masnad IP Law Firm'
      page='trademarks-classification-in-afghanistan'
      canonical='https://masnadip.af/trademarks-classification-in-afghanistan/'
      pageDescription='Nice Trademarks Classification, the Afghanistan Trademarks Office accepts applications that are made according to the Nice Classification, established by the Nice Agreement concerning the international classification of goods and services for the purposes of the registration of marks.'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const trademarksClassification = await getTrademarkClassification()
  return {
    props: {
      trademarksClassification,
    },
  }
}
