import React from "react";

const Post = (props) => {
  return <ul>
    <li key={props.id} >
      <img src={props.image} key={props.image} />
      <p key={props.title}>{props.title}</p>
    </li>
  </ul>
}

export default Post;