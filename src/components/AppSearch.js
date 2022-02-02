import React from 'react';
import './AppSearch.css'
export default function AppSearch(props) {
    const {value,onValueChange} = props;
  return (
    <div class="app-search">
    <input class="app-search-input"
        type="text"
        placeholder="ค้นหา"
        value={value}
        onChange={(event)=>{onValueChange(event.target.value)}}
    />
  </div>
  );
}
