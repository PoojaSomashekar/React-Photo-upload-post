import React from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import CatImages from '../../cat-images';
import './Posts.css';

const Posts = (props) => {
  console.log(CatImages);
  const navigate = useNavigate()
  const createNewPostHandler = () => {
    navigate('/newPost');
  }
  return <ul>
    {CatImages.map(_item => {
      return <li key={_item.id}>
        <img src={_item.image} className="images_div" />
        <div className="content_bar">
          <p className="title">{_item.title}</p>
          <p className="ratings">
            {/* <Typography component="legend">Ratings</Typography> */}
            <Rating name="read-only" className="css-ryrseu-MuiRating-root" value={_item.ratings} readOnly />
          </p>

        </div>

      </li>
    })}
    <AddCircleOutlineOutlinedIcon className="createIcon" onClick={createNewPostHandler} />
  </ul>

}

export default Posts;