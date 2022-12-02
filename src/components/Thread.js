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
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import APIService from '../APIService';


import {Routes, Route, useNavigate} from 'react-router-dom';

import Post from './Post';
import Switch from './Switch';

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
    const [checked,setChecked]=React.useState(false);
    const [catAdded,setCatAdded] = React.useState(false);
    const [imgAdded,setImgAdded] = React.useState(false);
    const [create,setCreate] =  React.useState(false);

    const [submit,setSubmit] =  React.useState(false);
    const [value, setValue] = React.useState(false);

    const [errorMessage,setErrorMessage] = React.useState(false);

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
        setImgAdded(true);
    }
    const handleTitle = async (e) => {
      setPostTitle(e.target.value);
      if(postTitle!=''){
        const checked = await APIService.post.postTitle(postTitle);
        console.log(checked);
      }
      
    }


    const navigate = useNavigate();

    const handlePick = () => {

        setPicked(!picked);
        //navigate('/passenger2');
    }

   const handlePostTitle = (e) => {
    setPostTitle(e.target.value);
    setTitleAdded(true);
   }

   const addTitle = () => {
    setCreate(true);
   }

   const handleCategory = (e) => {
    setCategory(e.target.value);
    setCatAdded(true);
   }


   const bodyCheck = (e) => {

    if (e==='one'){
        setErrorMessage(true);
    }
    else{

        setErrorMessage(false);

    }
    setChecked(true);
   }

    const handleBody = (e) => {
        setBody(e.target.value);
        bodyCheck(e.target.value);
    }

    const handleSubmit = () => {
        setSubmit(true);
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
                             <TextField id="title" label="Title" variant="outlined" onChange={handleTitle}/>
                             <FormHelperText>Please define the title of the post.</FormHelperText>
                        </FormControl>
                        {titleAdded && (
                            <FormControl sx={{m: 3, top:13,  minWidth: 120 }} >
                                <Button id="create" variant="contained" onKeyDown={addTitle} >
                                    Create POST.
                                </Button>
                            </FormControl>
                        )}
                    </Box>
                    <>
                        {create && (
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderTop:0, borderBottom: 1, borderColor: 'divider', bgcolor:'#DCDCDC	' }}>
                                    <FormControl sx={{m: 2, top:5,  minWidth: 120 }} >
                                       <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                       <Select
                                         labelId="demo-simple-select-helper-label"
                                         id="category"
                                         value={category}
                                         label="Category"
                                         onChange={handleCategory}
                                       >
                                         <MenuItem id="doubt" value={'doubt'}>{title} question </MenuItem>
                                         <MenuItem id="suggestion" value={'suggestion'}>{title} suggestion </MenuItem>
                                         <MenuItem id="clarification" value={'clarification'}>{title} clarification </MenuItem>
                                       </Select>
                                    </FormControl>

                                    <FormControl sx={{m: 2, left:50,top:5,  minWidth: 120 }} >
                                      <TextField id="body" label="Body" variant="outlined" onChange={handleBody}/>
                                      <FormHelperText>Enter the body of the post.</FormHelperText>
                                    </FormControl>

                                    <FormControl sx={{m: 3, left:70,top:10,  minWidth: 20 }} >
                                        <input type="file" multiple accept ="image/*" onChange={onImageChange} />
                                    </FormControl>

                                        {checked && catAdded && imgAdded && (
                                            <>
                                            {!errorMessage && (
                                                <>
                                                <FormControl sx={{m: 3,top:10,  minWidth: 120 }} >
                                                    <Button id="submit" variant="contained"  onClick={handleSubmit}>
                                                        Submit POST.
                                                    </Button>
                                                </FormControl>
                                                    {submit && (
                                                        <FormControl sx={{m: 2, left:50,top:10,  minWidth: 220 }}>
                                                            <Switch isOn={value} handleToggle={() => {setValue(!value);}}/>
                                                            {value && (
                                                                <FormHelperText>Only for registered users</FormHelperText>
                                                            )}
                                                            {!value && (
                                                                <FormHelperText>Public</FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    )}
                                                </>
                                            )}
                                            {errorMessage && (
                                                <FormControl sx={{m: 2, top:5,  minWidth: 120 }} >
                                                <Alert severity="error">
                                                        <AlertTitle>Error</AlertTitle>
                                                        Check your post's body, you are not allowed to use the word 'one'.
                                                </Alert>
                                                </FormControl>
                                             )}
                                             </>
                                        )}

                                    <Post title={postTitle} category={category} body={body} img={imageURLs}></Post>


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