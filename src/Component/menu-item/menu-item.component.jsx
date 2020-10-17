import React from 'react';
import './menu-item.component.style.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title,image,id,history,linkUrl,match})=>(


    <div style={{backgroundImage:`url(${image})`}} className='menu-item'>
{/* 
    <div style={{backgroundImage:`url(${image})`}} className='background-image'></div> */}
    <div className='content' onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='description'>Buy Now</span>

    </div>
</div>
)

export default withRouter(MenuItem);