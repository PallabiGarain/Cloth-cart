import React from 'react';
import './collection_item.component.style.scss';
export const CollectionItem= ({name,imageUrl,price})=>{
    console.log({price});

    return(
    <div  className='collection_item'>

        <div className='image'
        
        style={{
            
            backgroundImage:`url(${imageUrl})`
        }}
            />
        <div className='collectio-footer'>

        <span className='name'>{name}</span>
        <span className='price'>{price}$</span>
        </div>

    </div>
      
    );

    };
export default CollectionItem;