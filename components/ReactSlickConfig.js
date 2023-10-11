export function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`slick-carousel__custom-row ${className}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`slick-carousel__custom-row ${className}`}
      style={{ ...style, display: 'block', left: '-35px' }}
      onClick={onClick}
    />
  )
}

export var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  arrows: true,
  className: 'center',
  centerPadding: '60px',
  swipeToSlide: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
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
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
}
