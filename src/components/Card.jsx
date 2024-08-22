import React, { useState, useContext } from 'react';
import heart from '../images/heart.svg';
import { globalData } from '../App';
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Grow';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Card(props) {
  const { setData, cart, setCart } = useContext(globalData);
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

  const handelUpdate = () => {
    if (props.shoe.name === 'AIR MAX PEGASUS') {
      setData('pink');
    } else {
      setData('black');
    }
  };

  const img = require(`../images/${props.shoe.image}`);

  const handelCart = () => {
    let check = cart.some(variable => variable.name === props.shoe.name);
    if (check) {
      showSnackbar("Item Already in Cart");
    } else {
      showSnackbar("Item Added to Cart");
      setCart([...cart, props.shoe]);
    }
  };


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
      <div className="flex flex-wrap justify-center gap-4">
        <div className='w-[300px] h-[100px] rounded-xl flex overflow-visible bg-white font-poppins'>
          <div onClick={handelUpdate} className='w-[35%] cursor-pointer relative rounded-l-xl' style={{ backgroundColor: props.shoe.color }}>
            <img className="absolute left-[-30px] top-[4px] w-[130px] h-auto max-w-none overflow-hidden" src={img} alt={props.shoe.name} />
          </div>
          <div className='w-[65%] p-2'>
            <h1 className='font-semibold text-sm'>{props.shoe.name}</h1>
            <div className='flex w-full items-end'>
              <h1 className='font-semibold text-lg'>${props.shoe.price}</h1>
              <img className='ml-auto w-[16px] h-[16px]' src={heart} alt="Like" />
            </div>
            <p className='text-xs'>{props.shoe.des}</p>
            <h2 onClick={handelCart} className='text-[#FB4B29] font-bold cursor-pointer text-center p-1 text-xs'>Add to Cart</h2>
          </div>
        </div>
      </div>
    </>
  );
}