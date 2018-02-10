import React from 'react'
import ArticleList from './articlelist'
import article from '../fixtures'

export default class App extends React.Component {
	constructor() {
		super();
		this.reversClick = this.reversClick.bind(this);
        this.state = {
            revers: true
        }
	}
    
    reversClick() {
       this.setState({
           revers: !this.state.revers
       });
    }
    
	render() {
		return (
		<div>
			<button onClick={this.reversClick}>Revers</button>
			<ArticleList  text = {this.state.revers ? article : article.slice().reverse()}/>
			</div>
		
		)
	}
}