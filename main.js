import React from 'react'
import { render } from 'react-dom'

import './main.css'

const Home = () => (
	<div>
		<h1> HOLA MUNDO!! </h1>
		<p> Funcionó 7u7 </p>
	</div>
	)
	render(
		<Home />,
		document.getElementById('app')
	)
