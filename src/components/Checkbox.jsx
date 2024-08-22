import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Checkboxes() {
    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        defaultChecked
                        sx={{
                            color: 'white',
                        }}
                    />
                }
                label="Email me with news and offers"
                sx={{
                    color: 'white',
                }}
            />
        </div>
    );
}