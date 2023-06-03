import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// Arrow function: const MyComponent = () => {}
// () holds all the inputs that MyComponent takes - Function parameters
// {} is the output when MyComponent is run - Function body

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	// constructor() {
	// 	super();
	// 	/* State: an object that holds the data that can change over time and influences the behavior
	//       and rendering of a component. It represents the current state of a component and enables React
	//       to manage and update the user interface based on changes to that state.*/
	//
	// 	this.state = {
	// 		id: 'id',
	// 		login: 'mojombo',
	// 		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
	// 		html_url: 'https://api.github.com/users/mojombo',
	// 	};
	// }
	// /* You don't need a constructor to define your state. Instead you can do:*/
	// state = {
	// 	id: 'id',
	// 	login: 'mojombo',
	// 	avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
	// 	html_url: 'https://api.github.com/users/mojombo',
	// };

	// Arrow functions don't need to call render()

	// Notice that we are using this.state a lot. To avoid this, we can destructure the attributes here
	//    {} signifies pulling stuffs out of the state - which is an object
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				alt=''
				className='round-img'
				style={{ width: '60px' }}
			/>
			<h3>{login}</h3>
			<div>
				<Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
					More
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
