import React from "react";
import Slider from "react-slick";
import star from "../../Assets/star.png";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div
      className="CarouselContainer d-flex flex-column  justify-content-center align-items-center"
      style={{ background: "#FFE5E6", minHeight: "50vh" }}
    >
      <img className="mt-5" src={star} alt="" />
      <div className="container my-auto">
        <div className="w-75 mx-auto text-center">
          <Slider {...settings}>
            <div>
              <h5>
                This is a great & easy to use platform. Easy to customize to
                suit your requirements. Good number of trading tools are
                available. Perfect speed and prompt execution on the spot.
                Payouts are super easy & fast. Every non-experienced trader can
                also very easily use it and quickly understand all options.
              </h5>
              <p>CRISTIANO XAVIER</p>
            </div>
            <div>
              <h5>
                From deposit to trading, from trading to fund withdrawal
                everything was super smooth. Trading tools are very effective &
                can easily be understood. Smooth UI. Overall the website
                features are good. So far my experience was great.
              </h5>
              <p>ENZO SANTOS</p>
            </div>
            <div>
              <h5>
                The website is user friendly and easy for beginners. I am also a
                beginner and learned forex trading in just a week. Their
                technical analysis is super and the customer service is top
                notch as they help me set up my account over a call. I would
                recommend this to everyone. Must be used for forex trading.
              </h5>
              <p>TIAGO MARTIN</p>
            </div>
            <div>
              <h5>
                Excellent services. Very good customer service and smooth
                interface. Verification process is easy and your deposits and
                withdrawals get processed fast. Very nice performance and no
                network issues while withdrawal process. I am impressed with the
                services.
              </h5>
              <p>DANIEL CARDOSO</p>
            </div>
            <div>
              <h5>
                This is the best forex trading platform I would recommend for
                beginners. Everything is convenient and working nicely. The
                execution and closing of trades are in time, the deposit &
                withdrawal are super easy. My withdrawal request was approved
                within a min and it reached my bank account in 30 minutes. Wow.
                Amazing features.
              </h5>
              <p>JOSÉ COSTA</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
