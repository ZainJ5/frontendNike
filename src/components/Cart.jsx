import React from 'react';
import deleteIcon from '../images/delete.png';
import { useContext } from 'react';
import { globalData } from '../App';

export default function Cart(props) {
    const { cart, setCart } = useContext(globalData);
    
    function handleUpdate(removeItem) {
        const newCart = cart.filter(item => 
            item.shoeName !== removeItem.shoeName || item.shoeSize !== removeItem.shoeSize
        );
        setCart([...newCart]); 
    }
    
    return (
        <div className='w-full bg-[#374151] rounded-md text-white font-poppins p-4 mb-4'>
            <div className="flex flex-col sm:flex-row">
                <div className="img w-full sm:w-[30%] flex items-center justify-center mb-4 sm:mb-0">
                    <img className='w-[60%] sm:w-[70%] max-w-[150px]' src={props.shoe.shoeImage} alt="Shoe" />
                </div>
                <div className="side w-full sm:w-[70%] flex flex-col justify-between sm:px-5">
                    <div className='flex flex-col sm:flex-row justify-between mb-2 sm:mb-0'>
                        <h1 className="text-lg font-semibold mb-1 sm:mb-0">{props.shoe.shoeName}</h1>
                        <p className="font-medium">Price: ${props.shoe.shoePrice}</p>
                    </div>
                    <p className="mb-2">Color: {props.shoe.shoeColor}</p>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center mb-2 sm:mb-0'>
                            <p className='pr-3 mb-2 sm:mb-0'>Size: {props.shoe.size}</p>
                           <div className="flex items-center">
                                <label className='pr-2'>Quantity:</label>
                                <select className='bg-[#1A252F] p-1 rounded-lg outline-none text-white' name="quantity" id="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <img 
                            onClick={() => handleUpdate(props.shoe)} 
                            className='w-6 h-6 cursor-pointer mt-2 sm:mt-0' 
                            src={deleteIcon} 
                            alt="Delete" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}