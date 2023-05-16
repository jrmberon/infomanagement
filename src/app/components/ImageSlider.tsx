import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function ImageSlider () {

    
       const slides = [
            {
              url: 'https://bordertherapy.com/wp-content/uploads/2018/05/announcements-border-therapy.jpg',
            },
            {
              url: 'https://th.bing.com/th/id/OIP.bxLwhujpbU7gGr7gGYLIxAAAAA?pid=ImgDet&rs=1',
            },
            {
              url: 'https://www.tactix5.com/wp-content/uploads/2018/01/Consumer-Promotions-small-1225x350.jpg',
            },
        
            {
              url: 'https://www.buddlefindlay.com/media/4251/announce.png',
            },
            {
              url: 'https://t3.ftcdn.net/jpg/00/81/12/08/240_F_81120813_JtUt0HKnWtuNu7L5jsSqMHl9JF5LIr2R.jpg',
            },
          ];
        
          const [currentIndex, setCurrentIndex] = useState(0);
        
          const prevSlide = () => {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
          };
        
          const nextSlide = () => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
          };
        
          const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex);
          };
        
          return (
            <div className='max-w-[2500px] h-[700px] m-auto w-screen -mt-16py-16 px-4 relative group'>
              <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='-w-screen h-full bg-center bg-cover duration-500'
              ></div>
              {/* Left Arrow */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          );
        }

export default ImageSlider;