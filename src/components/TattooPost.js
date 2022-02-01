import React from 'react'
import "./TattooPost.css";
export default function TattooPost(props) {
    const{tattoo} = props;
    return (
        <div className='tattoo-post'>
            <div className='tattoo-post-bg'/>
            <div className='tattoo-post-content'>
                <img src={tattoo.thumbnailUrl}/>
                <h4>{tattoo.title}</h4>
            </div>
        </div>
    )
}
