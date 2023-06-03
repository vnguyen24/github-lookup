import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = ({ icon, title }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				{/* Props: Properties you can pass into a component from outside*/}
				<i className={icon} /> {title}
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

// defaultProps would take over if the user didn't specify any input in Navbar's App.js
Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github',
};
// PropTypes: Python's type hinting

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
