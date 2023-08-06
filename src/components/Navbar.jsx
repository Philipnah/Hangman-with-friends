import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
	const location = useLocation();

	return (
		<nav className='text-white bg-gray-800 text-lg m-4 mb-10 rounded-lg shadow-lg'>
			<ul className='flex w-full items-center justify-around'>
				{location.pathname == "/" &&
					<>
						<li className='font-bold border-2 border-gray-600 px-4 m-4 transition duration-300 rounded-md py-2 hover:bg-gray-700 hover:shadow-lg'>
							<Link to='/'>Create Game</Link>
						</li>
						<li className='px-4 m-4 transition duration-300 rounded-md py-2 hover:bg-gray-700 hover:shadow-lg'>
							<Link to='/joingame'>Join Game</Link>
						</li>
					</>
				}
				{location.pathname == "/joingame" &&
					<>
						<li className='px-4 m-4 transition duration-300 rounded-md py-2 hover:bg-gray-700 hover:shadow-lg'>
							<Link to='/'>Create Game</Link>
						</li>
						<li className='font-bold border-2 border-gray-600 px-4 m-4 transition duration-300 rounded-md py-2 hover:bg-gray-700 hover:shadow-lg'>
							<Link to='/joingame'>Join Game</Link>
						</li>
					</>
				}
				{location.pathname != "/" && location.pathname != "/joingame" &&
					<>
						<li className='px-4 m-4 transition duration-300 rounded-md py-2 hover:bg-gray-700 hover:shadow-lg'>
							<Link to='/'>Create Game</Link>
						</li>
						<li className='px-4 m-4 transition duration-300 rounded-md py-2 hover:bg-gray-700 hover:shadow-lg'>
							<Link to='/joingame'>Join Game</Link>
						</li>
					</>
				}
			</ul>
		</nav>
	)
}