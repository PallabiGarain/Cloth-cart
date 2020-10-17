import React from 'react';

import './custom_button.style.scss';

export const CustomButton=({children,...otherprop})=>(



    <button className='custbutton' {...otherprop}>{children}</button>
)

export default CustomButton;