import React, { useContext } from 'react';
import photo from '../images/black.png';
import Card from './Card';
import pink from '../images/pink.png';
import { globalData } from '../App';
import { useNavigate } from 'react-router-dom';

export default function Background() {
  const navigate = useNavigate()
  const { data } = useContext(globalData);
  const mainImage = () => {
    if (data === 'pink') return pink;
    if (data === 'black') return photo;
    return photo;
  };

  const shoes = [
    { name: 'AIR MAX PEGASUS', price: 180, des: "Women's Running Shoes", image: 'pinkshoe.png', color: '#E180A8' },
    { name: 'AIR MAX FLYEASE', price: 250, des: "Men's Sneakers Shoes", image: 'blackshoe.png', color: '#931927' }
    
  ];

  const store = ()=>{
    navigate('/Collection')
  }

  return (
    <div className="bg">
      <div className="flex-grow flex flex-col-reverse lg:flex-row w-full max-w-[95%] mx-auto justify-center items-center sm:py-0 py-4 lg:py-0">
        <div className="w-full lg:w-[40%] self-end flex flex-col justify-center items-center lg:items-start">
          <span className='items-start flex flex-col span'>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins text-[#FFD6AE] text-center lg:text-left">
              Boring
            </h1>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins text-[#FFD6AE] text-center lg:text-left">
              Shoes?
            </h2>
            <p className="text-white font-semibold text-lg sm:text-xl mt-2 text-center lg:text-left">
              Let us HELP you fix it...
            </p>
            <button onClick={store} className="self-center text-white font-bold text-base sm:text-lg bg-[#FB4B29] transition duration-300 hover:bg-[#DA4224] px-4 sm:px-6 py-2 sm:py-3 rounded-md mt-4">
              Explore Our Store
            </button>
          </span>
        </div>
        <div className="w-full lg:w-[60%] flex justify-center items-center overflow-hidden ">
          <img className='max-w-[88%]'
            src={mainImage()}
            alt="Shoe"
          />
        </div>
      </div>
      <div className="w-full max-w-7xl py-[8px] flex flex-wrap justify-end gap-6 sm:mt-0 mt-8 px-4">
        {shoes.map((shoe) => (
          <Card key={shoe.name} shoe={shoe} />
        ))}
      </div>
    </div>
  );
}