import React from 'react'
import Button from './button'
import article from '../fixtures'
export default class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
		<div>
			<h1>Hello</h1>
			<p>world!</p>
			<Button text={article[0]}/>
			</div>
		
		)
	}
}