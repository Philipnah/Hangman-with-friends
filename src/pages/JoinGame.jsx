import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinGame() {
	const [gameCode, setGameCode] = useState("");
	const [invalidLink, setInvalidLink] = useState(false);
	const navigate = useNavigate();

	function handleOnClick(code){
		console.log("Joining game...");
		if (!code.includes("/game/")) {
			setInvalidLink(true);
			return;
		} else {
			setInvalidLink(false);
		}

		let link = code.split("/game/")[1];
		navigate("/game/" + link);
	}


	return (
		<div className="text-white mx-4 my-16">
			<p>Enter game code:</p>
			<input onChange={(e) => setGameCode(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter') handleOnClick(gameCode) }} type="text" className="bg-slate-700 w-full rounded-md px-3 py-2 my-2" />
			<button onClick={() => handleOnClick(gameCode)} className="font-bold py-2 mx-auto my-4 w-full transition duration-300 rounded-md outline outline-2 outline-gray-500 hover:outline-none hover:bg-gray-700 hover:shadow-md">Join</button>
			{invalidLink && <p className="text-red-500">Invalid link!</p>}
		</div>
	);

}