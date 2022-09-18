import "assets/css/app.css";
import HomePage from "pages/HomePage";
import Details from "pages/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/categories/:idc" element={<Details />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
