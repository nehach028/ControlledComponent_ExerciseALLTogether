import React from 'react';
import PropTypes from 'prop-types';
const User=(props)=>{
return (
		
  		<li className="user">
  			<p>UserName:{props.user.userName}</p> 
  			<p>played {props.showGamePlayed?props.user.noGamePalyed:'*'} games.</p>
  		</li>
);
}
User.propTypes = {
  showGamePlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};
export default User;