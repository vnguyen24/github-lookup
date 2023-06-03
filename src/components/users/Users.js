import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ loading, users }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{/* Loop through the users array. Note that whenever you have a list, you need a key for each element to get rid of warnings*/}
				{users.map((user) => (
					<UserItem key={user.id} user={user}></UserItem>
					// <div key={user.id}>{user.login}</div>
					// Each element should have a unique key
				))}
			</div>
		);
	}
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default Users;
