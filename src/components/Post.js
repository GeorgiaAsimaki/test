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

import doubt from './img/doubt-modified.png'
import suggestion from './img/suggestion-modified.png'
import clarification from './img/clarification-modified.png'


import {Routes, Route, useNavigate} from 'react-router-dom';


const Post = ({title,category,body,img}) => {

    const navigate = useNavigate();


  return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderTop:2, borderBottom: 2, borderColor: '#F8EAED', bgcolor:'#FDF9FA' }}>
                <FormControl sx={{m: 4, top:10,  minWidth: 10 }} >
                    {category==='doubt' && (

                        <img src={doubt} width="150"/>
                    )}
                    {category==='suggestion' && (
                        <img src={suggestion} width="150"/>
                    )}
                    {category==='clarification' && (
                         <img src={clarification} width="150"/>
                    )}

                 </FormControl>
                <FormControl sx={{m: 3, top:10,  minWidth: 120 }} >
                    <Card sx={{ minWidth: 590 }} variant="outlined" >
                              <CardContent >
                                <Typography variant="h5" component="div">
                                  {title}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                  {body}
                                </Typography>
                              </CardContent>
                            </Card>
                </FormControl>

                <FormControl sx={{m: 3, top:10,  minWidth: 120 }} >
                    {img.map(imageSrc => <img src={imageSrc} width="150"/>)}
                </FormControl>

            </Box>

        </Box>

  );
}

export default Post;