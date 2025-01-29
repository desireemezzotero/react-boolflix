import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useGlobalContext } from "../context/GlobalContext";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { use } from 'react';


function Carousel() {
  const {filtredFilm} = useGlobalContext()

  return (
    <>
    <section className='bg-dark'>
      <div className='container text-center text-white pt-3'>
        <h4>PIÚ POPOLARI</h4>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mt-3"
      >

      {filtredFilm.length > 0 ? (filtredFilm.map(film => film.poster_path &&
        <SwiperSlide key={film.id}>
         <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}/>
        </SwiperSlide>)) : 
         filtredFilm.length === 0 && (<h5> nessun risultato per la tua ricerca</h5>) 
      }
        
      </Swiper>
      </div>
    </section>{/* div del container */}
    </>
  )
}

export default Carousel

