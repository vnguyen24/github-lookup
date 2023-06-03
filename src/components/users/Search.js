import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

// Functions are state-less!
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
	const [text, setText] = useState('');

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		// Instead of executing the default behavior, the method tells the browser to not perform its usual action associated with the event. This allows you to customize the behavior of the event based on your specific requirements.
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter something!', 'light');
		} else {
			// console.log(this.state.text);
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{showClear && (
				<button className='btn btn-light btn-block' onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
