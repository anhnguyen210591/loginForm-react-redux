import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'



class Navbar extends React.Component {
    constructor(props){
    super(props);
    }
  

    render() {
        return (
            (
                <nav className='nav-wrapper grey darken-3'>
                    <div className='container'>
                        <Link to='/' className='brand-logo'>Practise </Link>
                        {
                            this.props.isLoginSuccess ?  <SignInLinks/> :  <SignOutLinks/>
                        }
                    </div>
                </nav>
            )
        )
    }
}


const mapStateToProps = (state) =>{
    console.log("state after login",state.login.isLoginSuccess)
    return{
        isLoginPending : state.login.isLoginPending,
        isLoginSuccess : state.login.isLoginSuccess,
        isLoginError : state.login.isLoginError
    };
}





export default connect(mapStateToProps)(Navbar)
