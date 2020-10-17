import React from 'react';
import FormInput from '../FormInput/form_input.component';
import './signinout.style.scss';
import CustomButton from '../Custom_button/custom_button.component';
import {signinwithgoogle} from '../../Firebase_utils/firebase_utils';

class Signin extends React.Component{

    constructor(props){

        super(props);

        this.state={

            email:'',
            password:''

        }
    }



handleSubmit= event=>{
    event.preventDefault();
    this.setState({email:'',password:''})

}

handleChange=event=>{

    const{ name,value}=event.target;
    this.setState({[name]:value})

}


render(){

    return(
    
    <div className='Sign_in'>
        <h2>I already have an account</h2>
        <span>Login with your email id and password</span>
        <form action="" onSubmit={this.handleSubmit}>
        <FormInput type="email"
         name="email"
         handleChange={this.handleChange}
        
          value={this.state.email}

          label='Email'
           required/>

        
        <FormInput 
        type="password" 
        name="password"
         value={this.state.password} 
         handleChange={this.handleChange}
         label='Password'
         required/>

        
        <CustomButton type='submit'>Sign In</CustomButton>
        <CustomButton onClick={signinwithgoogle}>Sign In with Google</CustomButton>

        </form>

    </div>




    )
}


}

export default Signin;