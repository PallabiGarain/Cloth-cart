import React from 'react';
import Shopdata from './shop.data';
import CollectionPreview from '../../Component/collection-component/collection.component';

class ShopPage extends React.Component{

    constructor(props){

        super(props);

        this.state={

            collections:Shopdata


        }
    }
     

    render(){

        const {collections}=this.state

        return(

            <div>
              

                {/* {collections.map(({id,title,items})=>

                (<CollectionPreview key={id}  title={title} item={items}></CollectionPreview>) */}

            {collections.map(({id, ...OthercollectionProps})=>

                    (<CollectionPreview key={id}  {...OthercollectionProps}></CollectionPreview>)

                

                )}
            </div>
        )


    }
}

export default ShopPage;