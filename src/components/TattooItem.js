import React from "react";
import './Tattoo-item.css'
export default function TattooItem(props) {

  const {tattoo} = props;
  return (
    <div>
      <div className="tattoo-item">
        <img src={tattoo.thumbnailUrl} />
        <h4>{tattoo.title}</h4>
      </div>
    </div>
  );
}
