import React from "react";
import Slider from "react-slick";

function Cards({ category, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10 }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <div className="outer box-border w-11/12 flex flex-col gap-2">
      <div className="headingDiv flex justify-between item-center">
        <h3 className="heading text-slate-50 text-xl font-bold">{category}</h3>
        <button className="text-slate-400 font-bold bg-transparent">
          View More
        </button>
      </div>
      <Slider {...settings}>
        {s1 && (
          <div className="box-border p-0">
            <img src={s1} alt="" className="box-border w-32 h-full" />
          </div>
        )}
        {s2 && (
          <div className="box-border p-0">
            <img src={s2} alt="" className="box-border w-32 h-full" />
          </div>
        )}
        {s3 && (
          <div className="box-border p-0">
            <img src={s3} alt="" className="box-border w-32 h-full" />
          </div>
        )}
        {s4 && (
          <div className="box-border p-0">
            <img src={s4} alt="" className="box-border w-32 h-full" />
          </div>
        )}
        {s5 && (
          <div className="box-border p-0">
            <img src={s5} alt="" className="box-border w-32 h-full" />
          </div>
        )}
        {s6 && (
          <div className="box-border p-0">
            <img src={s6} alt="" className="box-border w-32 h-full" />
          </div>
        )}
        {s7 && (
          <div className="box-border p-0">
            <img src={s7} alt="" className="box-border w-32 h-full" />
          </div>
        )}
        {s8 && (
          <div className="box-border p-0">
            <img src={s8} alt="" className="box-border w-32 h-full" />
          </div>
        )}
        {s9 && (
          <div className="box-border p-0">
            <img src={s9} alt="" className="box-border w-32 h-full" />
          </div>
        )}
        {s10 && (
          <div className="box-border p-0">
            <img src={s10} alt="" className="box-border w-32 h-full" />
          </div>
        )}
      </Slider>
    </div>
  );
}

export default Cards;
