import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';
class UserList extends Component{
  state={
  showGamePlayed:true,
  }
  toggelButtonClick=()=>{
  	this.setState((oldState)=>
         ({showGamePlayed:!oldState.showGamePlayed}),
      );
  }
 render(){
   const {users}=this.props;
   const {showGamePlayed}=this.state;
   const gamePlayed=(
     					<div>
     						<p>
     							<button className="smallButton" onClick={this.toggelButtonClick}>{showGamePlayed?"Hide ":"Show "} 
     							the Number of Games Played</button></p>
     					</div>
   					) ;
  return (
	
    <div>
    	<h1>Users</h1>
    	{users && users.length>0?gamePlayed:''}
    	<ol>
  			{users.map((user) => (
           	<User key={user.userName} user={user} showGamePlayed={showGamePlayed} />
          ))}
  		</ol>
  	</div>

);
 }
 
}
UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
export default UserList;