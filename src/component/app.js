import React from 'react'
import ArticleList from './articlelist'
import article from '../fixtures'

export default class App extends React.Component {
	constructor() {
		super();
		
	}
	render() {
		return (
		<div>
			
			<ArticleList text = {article}/>
			</div>
		
		)
	}
}