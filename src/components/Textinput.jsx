import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Textinput(props) {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '100%' , color: 'white' },
        '& .MuiInputBase-input': { 
            color: 'white',
          },
        '& .MuiInputLabel-root': { color: 'white' },
        '& .Mui-disabled': {
          color: 'gray !important',
          '-webkit-text-fill-color': 'gray !important',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white', color: 'white' },
            '&:hover fieldset':{ borderColor : '#1976d2'},
            '&.Mui-disabled fieldset': { borderColor: 'gray' },
        },
        '& .MuiInputBase-input::placeholder': { 
          color: 'white !important',
          opacity: 1,
        },
        '& .MuiInputBase-input::-webkit-input-placeholder': { 
          color: 'white !important',
          opacity: 1,
        },
        '& .MuiInputBase-input::-moz-placeholder': { 
          color: 'white !important',
          opacity: 1,
        },
        '& .MuiInputBase-input:-ms-input-placeholder': { 
          color: 'white !important',
          opacity: 1,
        },
        '& .MuiInputBase-input:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 1000px transparent inset', 
            '-webkit-text-fill-color': 'white',
            'transition': 'background-color 5000s ease-in-out 0s'
          },
      }}
      autoComplete="off"
    >
      <TextField
        label={props.label}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
      />
    </Box>
  );
}