import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Carousel = () => {
  
  return (
    <div className="mt-20 px-6 relative">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={800}
        effect="fade" // Efek transisi menghilang
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        className="rounded-2xl overflow-hidden"
      >
          <SwiperSlide>
            <img src="/suzume.jpeg" alt="suzume" className="w-full h-100 object-cover rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/kaguya1.png" alt="Kaguya1" className="w-full h-100 object-cover rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/itachi.png" alt="itachi" className="w-full h-100 object-cover rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/kimino.png" alt="kimino" className="w-full h-100 object-cover rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/janji.png" alt="janji" className="w-full h-100 object-cover rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/jujutsu.jpeg" alt="jujutsu" className="w-full h-100 object-cover rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/oshinoko.jpg" alt="oshinooko" className="w-full h-100 object-cover rounded-xl" />
          </SwiperSlide>
        </Swiper>

        {/* Tombol Navigasi Kiri dan Kanan */}
        
      </div>
    
  );
};

export default Carousel;
