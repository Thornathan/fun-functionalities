import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavHomeBtns.css';

export default function NavHomeD() {
	return (
		<Link to='/' className='NavLink'>
			<div className='bottomHomeTriangle'></div>
		</Link>
	);
}
