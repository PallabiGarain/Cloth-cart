import React from 'react';
import './header.component.style.scss';

import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../Asset/original.svg';
import {auth} from '../../Firebase_utils/firebase_utils';


export const HeaderElement=({currentuserstate})=>(

<div className='header'>
<Link to='/'>
<Logo className='logo'/>


</Link>

<div className='options'>

    <Link className='option' to='/shop'>Shop</Link>
    <Link className='option' to='/comtent'>Content</Link>
    {currentuserstate?
    <div className='option' onClick={()=>auth.signOut()} >Sign Out</div> :
    <Link className='option' to='/signin'>Sign In</Link>   
}


</div>

</div>


)

export default HeaderElement;



