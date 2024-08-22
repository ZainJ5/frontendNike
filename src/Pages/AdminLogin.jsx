import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Grow';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const togglePassword = () => {
    setPassword(!password);
  };
  function handleSubmit(e) {
    e.preventDefault()
    if (email === "zainjamshaid55@gmail.com" && password1 === "Pakistan1") {
      localStorage.setItem('token', "4e7f9c3b2a1d5e8f")
      navigate('/Adminpage')
    }
    else {
      setOpen(true)
      setEmail('')
      setPassword1('')
    }
  }
  function handleClose() {
    setOpen(false);
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
          message="Invalid Credentials"
          TransitionComponent={Grow}
          key={158494651547}
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
      <div className="min-h-screen flex p-4 items-center justify-center">
        <div className="max-w-md w-full space-y-8 sm:p-10 p-5 bg-[#2D3748] rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Admin Login
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
            <div className="rounded-md shadow-sm">
              <div className='p-3'>
                <label htmlFor="email" className='text-white mb-2 block'>
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full px-3 py-2 border font-poppins border-gray-300 focus:border-indigo-500 focus:outline-none rounded sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div className='p-3 pt-0'>
                <label htmlFor="password" className='text-white mb-2 block'>
                  Password:
                </label>
                <div className='relative'>
                  <input
                    id="password"
                    name="password"
                    type={password ? "text" : "password"}
                    required
                    onChange={(e) => setPassword1(e.target.value)}
                    value={password1}
                    className="w-full px-3 font-poppins py-2 border border-gray-300 focus:border-indigo-500 focus:outline-none rounded sm:text-sm"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className='absolute inset-y-0 right-0 pr-3 flex items-center '
                  >
                    {password ?
                      <VisibilityIcon className="h-5 w-5 text-gray-600" /> :
                      <VisibilityOffIcon className="h-5 w-5 text-gray-600" />
                    }
                  </button>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}