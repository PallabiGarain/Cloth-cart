import React from 'react';
import Homepg from './Pages/Homepage/homepage.component.new';
import Hatspage from './Pages/hatspage.component';
import ShopPage from './Pages/ShopPage/shoppage.component';
import SigninSignoutPage from './Pages/Sign-in-Sign-out/sign_in_sign_out.component';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { HeaderElement} from './Component/Header/header.component';
import {auth, stoteuser} from './Firebase_utils/firebase_utils';

class App extends React.Component {

  constructor(){

    super();
    this.state={

      currentUser:null

    };


  }
unsubscribeFromAuth=null;
componentDidMount(){

    this.unsubscribeFromAuth=auth.onAuthStateChanged(async user=>{
      if(user){
      const userref=await stoteuser(user);
      userref.onSnapshot(snapshot=>{
        this.setState({
          id:snapshot.id,
          ...snapshot.data()

        },()=>{console.log(this.state)});

      });
    }
    else
    this.setState({currentUser:user});
      // this.setState({currentUser:user});
      // console.log(user);

    });
  }
    
componentWillUnmount(){
  this.unsubscribeFromAuth();


}


  


  render(){

    return (
      <BrowserRouter>
      <div >
        <HeaderElement currentuserstate={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepg} />
      {/* <Route exact path='/shop/hats' component={Hatspage} /> */}
  
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={SigninSignoutPage} />
       {/* <Homepg/> */}
       </Switch> 
      </div>
      </BrowserRouter>
    );
  }
 
}

export default App;
