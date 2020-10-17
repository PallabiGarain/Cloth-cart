import React from 'react';

import './form_input.style.scss';


export const FormInput=({handleChange, label, ...OtherProperty})=>(

    <div className='Group'>
      <input className="form_input"  onChange={handleChange} {...OtherProperty}/>   
    
    {
        label?
    (<label className={`${OtherProperty.value.length?'shrink':''}from-input-label`}>{label}</label>):null

    }
    
   
    </div>



)

export default FormInput;