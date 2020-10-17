import React from 'react';

import CollectionItem from '../collection-Item/collection_item.component';
import './collection.component.style.scss';

export const CollectionPreview=({title,items})=>(

    <div className='Collection_preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        {/* <div>items  */}
     
      {  //.filter((items,idx)=>idx<4)

        // .map(props=>
        //    ( <div>{props.name}</div>

            
        // .map(({...otherItem})=>(
        //             <CollectionItem  {...otherItem}/> 

        // .map(({id, name,price,imageUrl})=>(
        //     <CollectionItem key={id}  name={name} price={price} imageUrl={imageUrl}/> 

       // .map(({items.id,items.name,items.price}))
    }
       

<div className='preview'>{items.filter((items,idx)=>idx<4).map(props=>
        ( <CollectionItem  id={props.id} name={props.name} price={props.price} imageUrl={props.imageUrl}></CollectionItem>


        ))}</div>
     </div>

)

export default CollectionPreview;