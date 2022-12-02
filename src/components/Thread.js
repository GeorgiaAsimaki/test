import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import {Routes, Route, useNavigate} from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Thread = ({title,text}) => {

    const [pick,setPick]=React.useState('');
    const [postTitle,setPostTitle]=React.useState('');
    const [picked,setPicked]=React.useState(false);
    const navigate = useNavigate();

    const handlePick = () => {

        setPicked(!picked);
        //navigate('/passenger2');
    }

   const handlePostTitle = (e) => {
    setPostTitle(e.target.value);
   }


  return (
    <>
        <Card sx={{ minWidth: 175 }} variant="outlined" onClick={handlePick}>
          <CardContent >
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {text}
            </Typography>
          </CardContent>
        </Card>
        <>
           { picked && (
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderTop:2, borderBottom: 2, borderColor: 'divider', bgcolor:'#f5f5f5' }}>
                        <FormControl sx={{m: 3, top:5,  minWidth: 120 }} >
                             <TextField id="title" label="Title" variant="outlined" onChange={handlePostTitle}/>
                             <FormHelperText>Please define the title of the post.</FormHelperText>
                        </FormControl>



                    </Box>
                </Box>

           )}
       </>

    </>

  );
}

export default Thread;