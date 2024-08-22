import React, { useState, useEffect, useRef } from 'react'
import Menshoes from '../components/Menshoes'
import NavBar from '../components/NavBar';

export default function Category(props) {
  const [type, setType] = useState('ALL')
  const [check, setCheck] = useState(true)
  const [scrollPos, setscrollPos] = useState(0)
  const mainContainer = useRef(null)
  const [products,setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/shoe/${props.type}`, {
          method: 'GET'
        });
        if (!response.ok) {
          console.error("Error fetching data")
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:");
      }
    };
    fetchData();
    setType("ALL")
  }, [props]);


  useEffect(() => {
    const container = mainContainer.current
    const handleScroll = () => {
      const current = container.scrollY
      if (current > scrollPos) {
        setscrollPos(current)
        setCheck(false)
      }
      else {
        setscrollPos(current)
        setCheck(true)
      }
    }
    const width = window.innerWidth
    if (width < 640) {
      container.addEventListener("scroll", handleScroll)
    }
    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [scrollPos])

  useEffect(() => {
    setType('ALL');
  }, [props.shoeData]);


  const filterShoes = type === 'ALL' ? products : products.filter(previous => previous.shoeType === type)
  const categoryType = products.length>0?['ALL',...new Set(products.map(shoe => shoe.shoeType))]:''


  return (
    <div className='w-full h-screen flex flex-col overflow-y-auto'>
      {check && (
        <div className={`top-0 z-10`}>
          <NavBar />
        </div>
      )}
      <div className="heading">
        <h1 className='font-semibold px-4 sm:py-2 py-3 text-xl sm:text-2xl sm:p-4 sm:pt-6  font-poppins text-white'>{props.type}({products.length})</h1>
      </div>
      <div className="productCards h-full overflow-hidden flex sm:flex-row flex-col">
        <div className='sm:w-[20%] min-w-[200px] w-[100%] ulscroll sm:overflow-scroll sm:h-full p-2 sm:space-y-4' >
          <h2 className='text-2xl hidden sm:visible text-gray-300 font-poppins font-semibold p-3'>Category</h2>
          <ul className='w-full sm:flex-col h-[95%] flex sm:overflow-visible overflow-x-auto rounded-lg shadow-lg'>
            {products.length>0?
            categoryType.map((shoe,index) => (
              <li key={index} className='sm:py-1'>
                <button
                  onClick={() => setType(shoe)}
                  className={`w-full text-left px-4 py-3 rounded-md hover:scale-105 transition-all duration-300 font-medium font-poppins ${type === shoe
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'text-gray-300 hover:bg-[#2c3544] hover:text-white'
                    }`}
                >
                  {shoe}
                </button>
              </li>
            )):""}
          </ul>
        </div>
        <div ref={mainContainer} className='flex overflow-y-auto w-full flex-wrap sm:p-2'>
          {
            products.length>0?
            filterShoes.map((shoe) => (
              <Menshoes key={shoe._id} shoe={shoe} />
            )):""
          }
        </div>
      </div>
    </div>
  )
}
