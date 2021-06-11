import DigitGroup from "./components/DigitGroup";
import "./App.css";
import { useState } from "react";

function App() {
	const [inputVal, setInputVal] = useState("");
	function onButtonClickHandler(event) {
		event.preventDefault();
		console.log(event);
		if (event.target.innerHTML === "AC") {
			setInputVal("");
		} else if (event.target.innerHTML === "=") {
			console.log(eval(inputVal));
			let res = eval(inputVal);
			setInputVal(inputVal + event.target.innerHTML + res);
		} else setInputVal(inputVal + event.target.innerHTML);
	}
	return (
		<div className="App">
			<input value={inputVal}></input>
			<DigitGroup
				onButtonClickHandler={onButtonClickHandler}
			></DigitGroup>
		</div>
	);
}

export default App;
