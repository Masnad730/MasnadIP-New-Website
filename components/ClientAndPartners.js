import Slider from 'react-slick'
import { SampleNextArrow, SamplePrevArrow } from '../components/ReactSlickConfig'

const ClientAndPartners = () => {
  var settings = {
    dots: false,
    autoplay: true,
    speed: 2000,
    infinite: true,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className='px-6 lg:px-52 pt-20 pb-28'>
      <div className='contianer'>
        <div className='row'>
          <div className='col-12'>
            <div className='mb-24 text-center'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl pb-5'>Clients & Partners</h2>
              <p className='text-lg text-accents_6'>
                Trusted by brands across the globe to build better experiences.
              </p>
            </div>
          </div>
          <div className='col-12'>
            <div className=''>
              <Slider {...settings}>
                <div className='flex items-center justify-center'>
                  <a href='https://www.debitura.com/partners/masnad-law-firm'>
                    <img
                      src='/images/clients/debitura.webp'
                      alt='Debitura Logo'
                      className='grayscale hover:grayscale-0 cursor-pointer'
                      title='Debitura'
                    />
                  </a>
                </div>
                <div className='flex items-center justify-center'>
                  <a href='https://www.ip-coster.com/'>
                    <img
                      src='/images/clients/ipcoster.png'
                      alt='IP-Coster Logo'
                      className='grayscale hover:grayscale-0 cursor-pointer'
                      title='IP-Coster'
                    />
                  </a>
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/1.png'
                    alt='UltraTech Cement Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='UltraTech Cement'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/2.png'
                    alt='VFS Global Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='VFS Global'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/3.svg'
                    alt='Kixx Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer w-[113px]'
                    title='Kixx'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/4.png'
                    alt='Nestlé Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Nestlé'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/5.png'
                    alt='Pfizer Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Pfizer'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/6.png'
                    alt='CRCC Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='China Railway Construction Corporation Limited (CRCC)'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/7.png'
                    alt='Motorola Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Motorola'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/8.png'
                    alt='Starbucks Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Starbucks'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/9.png'
                    alt='Cuisine Solutions Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Cuisine Solutions'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/10.png'
                    alt='Foton Motor Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Foton Motor'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/11.png'
                    alt='Sinopec Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Sinopec'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/12.jpg'
                    alt='Scope Lubricant Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Scope Lubricant'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/13.png'
                    alt='Gree Electric Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Gree Electric'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/14.png'
                    alt='Sinochem'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Sinochem'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/15.png'
                    alt='Thunderer Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Thunderer'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/16.png'
                    alt='Midea Group Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Midea Group'
                  />
                </div>

                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/18.svg'
                    alt='Olimp Sport Nutrition Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer w-[122px]'
                    title='Olimp Sport Nutrition'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/19.png'
                    alt='Borgward Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Borgward'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/20.png'
                    alt='Britannia Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Britannia'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/21.png'
                    alt='Deestone Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='Deestone'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='/images/clients/22.png'
                    alt='China Ocean Shipping (Group) Company Logo'
                    className='grayscale hover:grayscale-0 cursor-pointer'
                    title='China Ocean Shipping (Group) Company'
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className='col-12'>
            <div className='flex flex-wrap justify-end items-center'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientAndPartners
