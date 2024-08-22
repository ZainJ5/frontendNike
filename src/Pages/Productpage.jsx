import React, { useContext, useState,useEffect } from 'react'
import NavBar from '../components/NavBar'
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Grow';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { globalData } from '../App'
import { Link, useNavigate } from 'react-router-dom';

export default function Productpage() {
    const { cart , setCart,productPage } = useContext(globalData)
    const [snackBar, setSnackbar] = useState(false)
    const first = productPage

    const navigate = useNavigate()

    useEffect(() => {
        if (first.length === 0) {
            navigate(-1);
        }
    }, [first, navigate]);
    
    
        
        const handelCart = () => {
            let check = cart.some(variable => variable.shoeName === first.shoeName);
            if (check) {
            setSnackbar(true);
        } else {
          setCart([...cart, first]);
        }
      };
      const checkOut = ()=>{
        const check = cart.some(val => val.shoeName === first.shoeName)
        if(!check){
        setCart([...cart,first])
        }
      }
      const handleClose = () => {
        setSnackbar(false)
    }
      const snackbarTheme = createTheme({
        components: {
            MuiSnackbar: {
                styleOverrides: {
                    root: {
                        '& .MuiSnackbarContent-root': {
                            backgroundColor: '#2e3a50',
                            color: '#ffffff',
                            fontWeight: 500,
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        },
                    },
                },
            },
        },
    });

    return (
        <>
        <ThemeProvider theme={snackbarTheme}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackBar}
                onClose={handleClose}
                autoHideDuration={3000}
                message="Item Already in Cart"
                TransitionComponent={Grow}
                key={1258555}
                sx={{
                    '& .MuiSnackbarContent-root': {
                        minWidth: '200px',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        padding: '10px 16px',
                    },
                }}
            />
        </ThemeProvider>
        <div className='flex flex-col min-h-screen'>
            <NavBar />
            <div className="flex-grow container mx-auto px-4 py-8">
                <div className="shadow-lg rounded-lg overflow-hidden">
                    <div className="md:flex rounded-md justify-center">
                        <div className='md:w-1/2 flex sm:rounded-l-lg overflow-hidden justify-center items-center bg-white'>
                            <img src={`${process.env.REACT_APP_API_URL}/public/images/${first.shoeImage}`} alt="ProductImage" className="w-full object-cover min-w-full" />
                        </div>
                        <div className='md:w-[40%] bg-[#2d3748] sm:rounded-r-lg text-white p-8'>
                            <h1 className='text-3xl font-bold mb-4'>{first.shoeName}</h1>
                            <p className='text-lg  mb-2'>{first.shoeCategory}</p>
                            <p className='text-2xl font-bold mb-6'>${first.shoePrice}</p>
                            <div className="space-y-4 mb-8">
                                <button onClick={handelCart} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                                    Add to Cart
                                </button>
                                <button onClick={checkOut} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                                    <Link to='/Checkout'>Proceed to Checkout</Link>
                                </button>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold mb-2'>Description</h2>
                                <p className='leading-relaxed'>
                                    {first.shoeDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}