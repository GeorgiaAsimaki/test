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
    const [titleAdded,setTitleAdded]=React.useState(false);
    const [picked,setPicked]=React.useState(false);
    const [category,setCategory]=React.useState('');
    const [body,setBody]=React.useState('');

    const [images,setImages] = React.useState([]);
    const [imageURLs,setImageURLs] = React.useState([]);

    React.useEffect(()=>{
        if(images.length<1) return;
        const newImageUrls = [];
        images.forEach(image=>newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);

    },[images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }


    const navigate = useNavigate();

    const handlePick = () => {

        setPicked(!picked);
        //navigate('/passenger2');
    }

   const handlePostTitle = (e) => {
    setPostTitle(e.target.value);
   }

   const addTitle = () => {
    setTitleAdded(true);
   }

   const handleCategory = (e) => {
    setCategory(e.target.value);
   }

    const handleBody = (e) => {
        setBody(e.target.value);
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
                    <Box sx={{ borderTop:2, borderBottom: 2, borderColor: 'divider', bgcolor:'#FAF0F2' }}>
                        <FormControl sx={{m: 3, top:5,  minWidth: 120 }} >
                             <TextField id="title" label="Title" variant="outlined" onChange={handlePostTitle}/>
                             <FormHelperText>Please define the title of the post.</FormHelperText>
                        </FormControl>
                        <FormControl sx={{m: 3, top:13,  minWidth: 120 }} >
                            <Button id="addTitle" variant="contained" onClick={addTitle} >
                                Create POST.
                            </Button>
                        </FormControl>
                    </Box>
                    <>
                        {titleAdded && (
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderTop:2, borderBottom: 2, borderColor: 'divider', bgcolor:'#f5f5f5' }}>
                                    <FormControl sx={{m: 2, top:5,  minWidth: 120 }} >
                                       <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                       <Select
                                         labelId="demo-simple-select-helper-label"
                                         id="category"
                                         value={1}
                                         label="Category"
                                         onChange={handleCategory}
                                       >
                                         <MenuItem id="doubt" value={1}>{title} question </MenuItem>
                                         <MenuItem id="suggestion" value={2}>{title} suggestion </MenuItem>
                                         <MenuItem id="clarification" value={3}>{title} clarification </MenuItem>
                                       </Select>
                                    </FormControl>

                                    <FormControl sx={{m: 2, top:5,  minWidth: 120 }} >
                                      <TextField id="body" label="Body" variant="outlined" onChange={handleBody}/>
                                      <FormHelperText>Enter the body of the post.</FormHelperText>
                                    </FormControl>

                                    <FormControl sx={{m: 3, top:10,  minWidth: 120 }} >
                                        <input type="file" multiple accept ="image/*" onChange={onImageChange} />
                                        {imageURLs.map(imageSrc => <img src={imageSrc} />)}

                                    </FormControl>


                                </Box>
                            </Box>
                        )}
                    </>

                </Box>



           )}
       </>

    </>

  );
}

export default Thread;