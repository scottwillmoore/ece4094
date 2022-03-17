import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setCount((count) => count + 1), 1000);
		return () => clearInterval(id);
	}, []);

	return <p>{count}</p>;
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
