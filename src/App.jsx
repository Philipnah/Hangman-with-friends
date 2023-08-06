import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import CreateGame from "./pages/CreateGame.jsx";
import JoinGame from "./pages/JoinGame.jsx";
import Game from "./pages/Game.jsx";

function App() {
	return (
		<div className="grid justify-items-center">
			<div className="max-w-6xl">
				<Router>
					<h1 className="text-white text-center text-4xl font-black mt-16 mb-6">Hangman with Friends!</h1>
					<Navbar />
					<Routes>
						<Route exact path="/" Component={CreateGame} />
						<Route path="/joingame" Component={JoinGame} />
						<Route path="/game/:code" Component={Game} />
					</Routes>
					<Footer />
				</Router>
				<Analytics />
			</div>
		</div>
	);
}

export default App;
