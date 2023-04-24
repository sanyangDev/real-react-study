import { useEffect, useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = event => setToDo(event.target.value);
	const onSubmit = event => {
		event.preventDefault();
		if (toDo === "") {
			return;
		}
		console.log(toDos);
		setToDos(currentArray => [toDo, ...currentArray]);
		setToDo("");
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<h4>{toDos}</h4>
				<input onChange={onChange} value={toDo} type="text" placeholder="What is your todo?" />
				<button>Go</button>
			</form>
		</div>
	);
}

export default App;
