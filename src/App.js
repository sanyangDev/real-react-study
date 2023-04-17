import { useEffect, useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	const [search, setSearch] = useState("");
	const onClick = () => setCounter(prev => prev + 1);
	const onChange = event => setSearch(event.target.value);
	console.log("always");
	useEffect(() => {
		console.log("call the api");
	}, []);
	return (
		<div>
			<input value={search} onChange={onChange} type="text" placeholder="Search hear..." />
			<h1>{counter}</h1>
			<button onClick={onClick}>Click!</button>
		</div>
	);
}

export default App;
