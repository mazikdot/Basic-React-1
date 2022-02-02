import React from 'react'
import "./TattooPost.css";
export default function TattooPost(props) {
    const{tattoo,onBgClick} = props;
    return (
        <div className='tattoo-post' onClickCapture={onBgClick}>
            <div className='tattoo-post-bg'/>
            <div className='tattoo-post-content'>
                <img src={tattoo.fullUrl}/>
                <h4>{tattoo.title}</h4>
            </div>
        </div>
    )
}
