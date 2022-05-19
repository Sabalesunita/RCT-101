import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Todo } from './components/Todo';

function App() {
	const data = 'hiee';
	const [message, setmessage] = React.useState('');
	return (
		<div className="App">
			<Todo></Todo>
		</div>
	);
}

export default App;