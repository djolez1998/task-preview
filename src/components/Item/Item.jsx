import React from "react";
import "./Item.scss";

const Item = ({ task }) => <div className='item'>{task.title}</div>;

export default Item;
