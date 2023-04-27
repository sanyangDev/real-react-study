import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then(response => response.json())
			.then(json => {
				setCoins(json);
				setLoading(false);
			});
	}, []);
	const onSubmit = event => {
		event.preventDefault();
	};
	return (
		<div>
			<h1>The Coins! ({coins.length})</h1>
			{loading ? <strong>Now Loading...</strong> : null}
			<select>
				{coins.map(coin => (
					<option>
						{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
					</option>
				))}
			</select>
			<form onSubmit={onSubmit}>
				<input type="text" placeholder="How many exchange." />
				<button>Exchange</button>
			</form>
		</div>
	);
}

export default App;
