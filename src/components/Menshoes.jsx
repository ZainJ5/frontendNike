import React from 'react';
import { useContext,useState } from 'react';
import { globalData } from '../App';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Grow';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Menshoes(props) {
    const { cart, setCart,setProductPage} = useContext(globalData);
    const { shoeName, shoeCategory, shoeColor, shoePrice, shoeImage } = props.shoe;

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
  
    const showSnackbar = (a) => {
      setOpen(false);
      setTimeout(() => {
        setMessage(a);
        setOpen(true);
      }, 300);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    function updateCart(obj) {
        const check = cart.some(check=>obj.shoeName===check.shoeName)
        if (check) {
            showSnackbar("Item Already in Cart");
          } else {
            showSnackbar("Item Added to Cart");
            setCart([...cart,obj]);
        }
    }
    const checkOut=(obj)=>{
        setProductPage(obj)
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
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message={message}
          TransitionComponent={Grow}
          key={message}
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
        <div className="mainContent w-1/2 lg:w-1/3 max-h-[410px] p-2">
            <div className="shoeCard bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
                <div className='relative overflow-hidden group flex-shrink-0'>
                    <img 
                        src={`${process.env.REACT_APP_API_URL}/public/images/${shoeImage}`} 
                        alt={shoeName} 
                        className='w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <button onClick={()=>checkOut(props.shoe)}  className='bg-white text-black font-bold py-2 px-3 text-xs sm:text-sm rounded-full hover:bg-gray-200 transition-colors duration-300'>
                            <Link to={`/Product/${props.shoe._id}`}>View Details
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='font-poppins sm:p-3 p-2 flex flex-col justify-between flex-grow'>
                    <div>
                        <h2 className='font-bold text-sm sm:text-base md:text-xl text-gray-800 mb-1'>{shoeName}</h2>
                        <p className='text-xs sm:text-sm text-gray-600 mb-1'>{shoeCategory}</p>
                        <p className='text-xs sm:text-sm text-gray-600 mb-1'>{shoeColor}</p>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <span className='font-bold text-sm sm:text-base md:text-lg text-gray-800 mb-1'>${shoePrice}</span>
                        <button 
                            onClick={() => updateCart(props.shoe)} 
                            className='bg-blue-600 text-white font-bold py-1 px-2 text-xs sm:text-sm rounded-full hover:bg-blue-700 transition-colors duration-300 w-full'
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}