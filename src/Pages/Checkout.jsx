import React, { useContext, useState } from 'react';
import NavBar from '../components/NavBar';
import Textinput from '../components/Textinput';
import Checkboxes from '../components/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Grow';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { globalData } from '../App';


export default function Checkout() {
    const [snackBar, setSnackbar] = useState(false)
    const [message, setMessage] = useState('')
    const [formValues, setFormValues] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apartmentSuite: '',
        city: '',
        postalCode: '',
        phoneNumber: ''
    });
    const { cart } = useContext(globalData)
    const handleChange = (name, value) => {
        setFormValues(prevValues => (
            { ...prevValues, [name]: value }
        ));
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

    const handleChangePhone = (name, value) => {
        if (value) {
            let val = value.toString();
            const isOnlyNumbers = (val) => /^\d+$/.test(val);
    
            if (isOnlyNumbers(val)) {
                handleChange(name, val);
            } else {
                setMessage('Please enter a valid phone number in the format XXX-XX-XXX.');
                setSnackbar(true);
            }
        }
        else{
        handleChange(name, value);
        }
    };

    const handleClose = () => {
        setSnackbar(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            setMessage('Your cart is empty.');
            setSnackbar(true);
            return;
          }
        const allData = {...formValues,ordered:cart}
        console.log(allData);
    
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/order`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(allData),
            });
    
            if (!response.ok) {
                alert('Error placing order');
            } else {
                setMessage('Order placed successfully');
                setSnackbar(true);
                setFormValues( { 
                    email: '',
                    firstName: '',
                    lastName: '',
                    address: '',
                    apartmentSuite: '',
                    city: '',
                    postalCode: '',
                    phoneNumber: ''});
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error placing order');
        }
    };    

    return (
        <>
            <ThemeProvider theme={snackbarTheme}>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={snackBar}
                    onClose={handleClose}
                    autoHideDuration={3000}
                    message={message}
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
            <div className='min-h-screen flex gap-6 flex-col'>
                <div className='w-full'>
                    <NavBar />
                </div>
    
                <div className='flex-grow p-4 text-white md:p-6 lg:p-8'>
                    <div className='max-w-7xl mx-auto'>
                        <form onSubmit={handleSubmit} className='grid lg:grid-cols-3 gap-8'>
                            <div className='lg:col-span-2 space-y-6'>
                                <div className='p-6 rounded-lg shadow-md bg-[#2D333D]'>
                                    <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
                                    <Textinput
                                        name="email"
                                        placeholder={'Enter Email'}
                                        required={true}
                                        value={formValues.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                    />
                                    <Checkboxes />
                                </div>
    
                                <div className='p-6 rounded-lg shadow-md bg-[#2D333D]'>
                                    <h2 className='text-2xl font-bold mb-6'>Delivery Details</h2>
                                    <Textinput
                                        name="country"
                                        label={'Country'}
                                        disabled={true}
                                        value={'Pakistan'}
                                    />
                                    <div className='grid grid-cols-2 gap-4 mb-4'>
                                        <Textinput
                                            name="firstName"
                                            label={'First Name'}
                                            required={true}
                                            value={formValues.firstName}
                                            onChange={(e) => handleChange('firstName', e.target.value)}
                                        />
                                        <Textinput
                                            name="lastName"
                                            label={'Last Name'}
                                            required={true}
                                            value={formValues.lastName}
                                            onChange={(e) => handleChange('lastName', e.target.value)}
                                        />
                                    </div>
                                    <Textinput
                                        name="address"
                                        label={'Address'}
                                        required={true}
                                        value={formValues.address}
                                        onChange={(e) => handleChange('address', e.target.value)}
                                    />
                                    <Textinput
                                        name="apartmentSuite"
                                        label={'Apartment, suite, etc. (Optional)'}
                                        value={formValues.apartmentSuite}
                                        onChange={(e) => handleChange('apartmentSuite', e.target.value)}
                                    />
                                    <div className='grid grid-cols-2 gap-4 mb-4'>
                                        <Textinput
                                            name="city"
                                            label={'City'}
                                            required={true}
                                            value={formValues.city}
                                            onChange={(e) => handleChange('city', e.target.value)}
                                        />
                                        <Textinput
                                            name="postalCode"
                                            label={'Postal Code (Optional)'}
                                            value={formValues.postalCode}
                                            onChange={(e) => handleChange('postalCode', e.target.value)}
                                        />
                                    </div>
                                    <Textinput
                                        name="phoneNumber"
                                        label={'Phone Number'}
                                        required={true}
                                        value={formValues.phoneNumber}
                                        onChange={(e) => handleChangePhone('phoneNumber', e.target.value)}
                                    />
                                </div>
    
                                <div className='bg-[#2D333D] p-6 rounded-lg shadow-md'>
                                    <h2 className='text-2xl font-bold mb-6 '>Shipping</h2>
                                    <Textinput
                                        name="shippingMethod"
                                        label={'Shipping Method'}
                                        disabled={true}
                                        value={'Standard'}
                                    />
                                </div>
    
                                <div className='bg-[#2D333D] p-6 rounded-lg shadow-md'>
                                    <h2 className='text-2xl font-bold mb-6 '>Payment</h2>
                                    <Textinput
                                        name="paymentMethod"
                                        label={'Payment Method'}
                                        disabled={true}
                                        value={'Cash On Delivery'}
                                    />
                                </div>
                            </div>
    
                            <div className='lg:col-span-1'>
                                <div className='bg-[#2d3748] p-6 rounded-lg shadow-md sticky top-4'>
                                    <h2 className='text-2xl font-bold mb-6 '>Order Summary</h2>
                                    {cart.length > 0 ? (
                                        <>
                                            {cart.map((item, index) => {
                                                return (
                                                    <div key={index} className='flex items-center mb-4 pb-4 border-b'>
                                                        <img src={item.shoeImage} alt={item.shoeName} className='w-20 h-20 object-cover mr-4 rounded-md' />
                                                        <div className='flex-grow'>
                                                            <h3 className='font-semibold '>{item.shoeName}</h3>
                                                            <p className='text-[#f0f0f0] text-sm'>Category: {item.shoeCategory}</p>
                                                        </div>
                                                        <div className='text-right'>
                                                            <p className='font-medium '>${item.shoePrice}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            <div className='mt-4 pt-4 border-t'>
                                                <div className='flex justify-between mb-2 '>
                                                    <p>Subtotal</p>
                                                    <p>${cart.reduce((total, item) => total + item.shoePrice, 0)}</p>
                                                </div>
                                                <div className='flex justify-between mb-2 '>
                                                    <p>Tax</p>
                                                    <p>$4.88</p>
                                                </div>
                                                <div className='flex justify-between mb-2'>
                                                    <p>Shipping</p>
                                                    <p>$25</p>
                                                </div>
                                                <div className='flex justify-between font-bold text-lg mt-2 pt-2 border-t text-[#fafafa]'>
                                                    <p>Total</p>
                                                    <p>${(cart.reduce((total, item) => total + item.shoePrice, 0) + 4.88 + 25)}</p>
                                                </div>
                                            </div>
                                        </>
                                    ) : ''
                                    }
                                </div>
                            </div>
    
                            <div className='lg:col-span-3'>
                                <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300'>
                                    Confirm Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )}