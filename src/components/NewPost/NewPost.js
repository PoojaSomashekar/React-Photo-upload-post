import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

import CatImages from '../../cat-images';
import './NewPost.css';



const NewPost = (props) => {
  let [data, setData] = useState({});
  const [ratingValue, setRatingValue] = useState(0);
  let [imageData, setImageData] = useState(null);
  const navigate = useNavigate()
  let newPost = {
  }
  const onTitleHandler = (e) => {
    let post = {};
    post.id = CatImages[CatImages.length - 1].id + 1;
    post.title = e.target.value;
    setData(post);
  }
  const onImageChange = (e) => {
    // let img = URL.createObjectURL(e.target.files[0]);
    // setImageData(e.target.files[0].name);
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);

      const reader = new FileReader();
      reader.addEventListener("load", () => {


        setImageData(reader.result)

      });
      reader.readAsDataURL(e.target.files[0]);
    }

  }
  const onSubmit = () => {
    newPost.id = data.id;
    newPost.title = data.title;
    newPost.image = imageData;
    newPost.ratings = ratingValue;
    console.log(newPost);
    CatImages.push(newPost);
    console.log(CatImages);
    navigate('/posts');

  }

  const onCancel = () => {
    setData(null);
    setImageData(null);
    navigate('/posts');
  }

  return (
    <Card sx={{ maxWidth: '345px' }} className="css-1ri6ub7-MuiPaper-root-MuiCard-root">

      <CardContent>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <TextField id="standard-basic" label="Title" variant="standard" onChange={onTitleHandler} />
        </Box>
        <div className="ratings">
          <Typography component="legend">Ratings:</Typography>
          <Rating
            name="simple-controlled"
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
        </div>
        <div>
          <input type="file" name="myImage" className="image_div" onChange={onImageChange} />
        </div>
        <div className="previewProfilePic">
          <img className="playerProfilePic_home_tile" src={imageData} />
        </div>
      </CardContent>

      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}

      <CardActions>
        <Button size="small" onClick={onSubmit}>Submit</Button>
        <Button size="small" onClick={onCancel}>Cancel</Button>
      </CardActions>
    </Card>
  )
}

export default NewPost;