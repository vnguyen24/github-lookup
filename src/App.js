import './App.css';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
// React is the default export from the 'react' module, and it is imported without curly braces
// Component must be in curly braces because it is a named export from the 'react' module
// {} is used for destructuring assignment
import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/pages/About';
import User from './components/users/User';

const App = async () => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [repos, setRepos] = useState([]);
	const [alert, setAlert] = useState(null);

	// Search Github users
	const searchUsers = async (text) => {
		setLoading(true);
		// The response will be in res.data.items
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// console.log(res.data);
		setUsers(res.data.items);
		setLoading(false);
	};

	// Get single Github user
	const getUser = async (username) => {
		setLoading(true);
		// The response will be in res.data.items
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// console.log(res.data);
		setUser(res.data);
		setLoading(false);
	};

	// Get user repos
	const getUserRepos = async (username) => {
		setLoading(true);
		// The response will be in res.data.items
		// For more information about the query, check Github documentation
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// console.log(res.data);
		setRepos(res.data);
		setLoading(false);
	};

	// Clear users from state
	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	// Alert the user when the input is empty
	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 5000);
	};

	// Method must be called render() - which runs at a certain point when the component is loaded
	// const name='Cuong';
	// const loading = false;
	// const showName = false;

	return (
		<Router>
			{/* // React.Fragment is like a ghost element, in case you don't want a */}
			{/* parent div to wrap elements */}
			<div className='App'>
				{/* Props: Properties you can pass into a component from outside */}
				{/* Here, "Github Finder" is being passed as an input into function Navbar*/}
				<Navbar />
				<div className='container'>
					<Alert alert={alert} />
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<Fragment>
									<Search
										searchUsers={searchUsers}
										clearUsers={clearUsers}
										showClear={users.length > 0 ? true : false}
										setAlert={showAlert}
									/>
									{/* We are free to pass in whatever we want. Whether we use the inputs or not is up to us */}
									<Users loading={loading} users={users} />
								</Fragment>
							)}
						/>
						<Route exact path='/about' component={About}></Route>
						<Route
							exact
							path='/user/:login'
							render={(props) => (
								<User
									{...props}
									getUser={getUser}
									user={user}
									loading={loading}
									getUserRepos={getUserRepos}
									repos={repos}
								></User>
							)}
						/>
					</Switch>
				</div>
				{/* ternary operator: If loading is true, then print "Loading...", else print "Hello"*/}
				{/* {loading ? <h4>Loading...</h4> : <h1>Hello from {showName && name}</h1>} */}
				{/*   |if true|              |else|*/}{' '}
				{/*Only print name is showName is true */}
			</div>
			{/* // JSX expressions must have one parent element. */}
		</Router>
	);
};

export default App;
