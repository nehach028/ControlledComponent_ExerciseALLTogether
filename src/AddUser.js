import React, { Component } from 'react';
import PropTypes from 'prop-types';
class AddUser extends Component{
state={
	user:{
      	firstName:'',
  		lastName:'',
  		userName:''
    	},
  userExist:false
}
isInputEmpty=()=>{
	const{firstName,lastName,userName}=this.state.user;
  	return firstName==='' || lastName=== ''|| userName==='';
}
isUserNameExist=(userName)=>{
	const users=this.props.users;
	for(let user of users){
      if(user.userName===userName){
        	return true;
        }
    }
  	return false;
}
handelSubmit=(event)=>{
	event.preventDefault();
  	const userNameExist=this.isUserNameExist(this.state.user.userName);
  	if(!userNameExist){
    	this.props.onAddUser(this.state.user);
    }
  	this.setState(()=>({
    	userExist:userNameExist
    }))
}
handelChange=(event)=>{
const { name, value } = event.target;
  this.setState((currState)=>({
  	...currState,
    user:{
      		...currState.user,
      		[name]:value
    	}
    	})
	)
  
}
  render(){
	const {firstName,lastName,userName}=this.state.user
    return(
    	<div>
      	<h1>NEW USER</h1>
        <form onSubmit={this.handelSubmit}>
        	<input
         		type="text"
         		placeholder="Enter First Name"
      			name="firstName"
         		value={firstName}
      			onChange={this.handelChange}
         	/>
         	<input
         		type="text"
         		placeholder="Enter Last Name"
      			name="lastName"
         		value={lastName}
      			onChange={this.handelChange}
         	/>
         	<input
         		type="text"
         		placeholder="Enter User Name"
      			name="userName"
         		value={userName}
         		onChange={this.handelChange}
         	/>
         	<button disabled={this.isInputEmpty()}>ADD</button>
        </form>
		{this.state.userExist ? (
          <p className="error">You cannot add a user that already exists.</p>
        ) : (
          ''
        )}
      	</div>
    )
}
}
AddUser.propTypes={
	users: PropTypes.array.isRequired,
  	onAddUser:PropTypes.func.isRequired
}
export default AddUser;