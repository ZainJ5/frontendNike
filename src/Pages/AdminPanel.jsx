import React, { useContext, useState } from 'react';
import Liveproducts from '../components/Liveproducts';
import AddProduct from '../components/AddProduct';
import { globalData } from '../App';
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Grow';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Orders from '../components/Order';
import { useReducer } from 'react';

const AdminPanel = () => {
  const [clicked, setClicked] = useState('allProducts');
  const { showSnack, setShowSnack } = useContext(globalData)
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'addProduct':
        setClicked('addProduct');
        return <AddProduct />;
      case 'Orders':
        setClicked('Orders');
        return <Orders />;
      case 'allProducts':
        setClicked('allProducts');
        return <Liveproducts />;
      default:
        return state;
    }
  };
        const [state,dispatch] = useReducer(reducer, <Liveproducts/>);

    const handleClose = () => {
      setShowSnack(false)
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
            open={showSnack}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Product Published Successfully"
            TransitionComponent={Grow}
            key={12481524}
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
        <div className="h-screen w-screen flex flex-col text-white overflow-hidden bg-gray-900">
          <h1 className="sm:text-3xl text-xl mt-4 p-4 font-bold">Admin Panel - Product Management</h1>
          <div className="flex flex-col sm:flex-row p-2 sm:pl-5 gap-4 sm:gap-0 justify-center flex-grow overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-7xl h-full">
              <nav className="bg-[#2D333D] rounded md:w-80 p-4 flex-shrink-0">
                <ul>
                  <li className="mb-2">
                    <button
                      onClick={() => dispatch({type:'allProducts'})}
                      className={`w-full text-left text-white font-semibold py-2 px-4 rounded transition duration-200 ${clicked === 'allProducts' ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-gray-700'
                        }`}
                    >
                      All Products
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      onClick={() => dispatch({type: 'addProduct'})}
                      className={`w-full text-left text-white font-semibold py-2 px-4 rounded transition duration-200 ${clicked === 'addProduct' ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-gray-700'
                        }`}
                    >
                      Add Product
                    </button>
                    <button
                      onClick={() => dispatch({type:'Orders'})}
                      className={`w-full text-left text-white font-semibold py-2 px-4 rounded transition duration-200 ${clicked === 'Orders' ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-gray-700'
                        }`}
                    >
                      Orders
                    </button>
                  </li>
                </ul>
              </nav>
              <div className="flex-grow flex justify-center overflow-hidden">
                <div className='md:w-[90%] w-full h-full bg-[#2D333D] rounded p-4'>
                  {state}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default AdminPanel;