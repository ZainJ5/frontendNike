import React from 'react';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';
import { useContext } from 'react';
import { globalData } from '../App';
import cartImg from '../images/CartImg.svg'
import { Link } from 'react-router-dom';


export default function CartPage() {
    const { cart } = useContext(globalData);
    function orderValue() {
        let total = 0;
        cart.forEach(item => {
            total += item.shoePrice
        });
        return total;
    }
    return (
        <div className="w-full min-h-screen flex flex-col p-4">
            <div className="nav w-full max-w-4xl mx-auto mb-4">
                <NavBar />
            </div>
            <div className="main w-full max-w-4xl mx-auto flex my-auto  flex-col md:flex-row gap-4">
       { 
       cart.length > 0?(
                            <div className="cartitems w-full md:w-2/3 max-h-[60vh] md:max-h-[77vh] flex gap-2 flex-col overflow-y-auto scroll items-center bg-[#2D3748] p-4 rounded-lg">
                            {cart.map((shoe, index) => {
                                return (
                                    <Cart className='p-4 w-full' key={index} shoe={shoe} />
                                )
                            })}
                            </div>
       ):
        (
            <div className="cartitems w-full md:w-2/3 max-h-[60vh] md:max-h-[77vh] flex gap-2 flex-col overflow-y-auto scroll items-center bg-[#2D3748] p-4 rounded-lg">
           <img className='w-[50%]' src={cartImg} alt="" />
           <h1 className='text-white font-poppins self-center sm:pl-[40px] pl-[20px] font-bold text-xl'>
           Your cart is empty
           </h1>
            </div>
        )

}
                <div className="payment w-full md:w-1/3 bg-[#4A5568] p-4 rounded-lg text-white">
                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <p>Items: {cart.length}</p>
                            <p>${orderValue()}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Shipping & handling:</p>
                            <p>$25</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Tax:</p>
                            <p>$4.88</p>
                        </div>
                        <div className="border-t pt-4 mt-4">
                            <div className="flex justify-between font-bold">
                                <p>Order total:</p>
                                <p>${orderValue() + 25 + 4.88}</p>
                            </div>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                            <Link to={'/Checkout'}>Proceed to Checkout</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}