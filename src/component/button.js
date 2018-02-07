import React from 'react'


export default class Button extends React.Component {
	constructor(props) {
		super();
		this.article = props;
		this.state  ={
			isOpen:true
		} ;
		this.buttonClick = this.buttonClick.bind(this);
	}	
	
	buttonClick() {
			this.setState({
			isOpen:!this.state.isOpen
		}) ;
	}
	render() {
		const body = this.state.isOpen && <div>{this.article.text.text}</div>
		return (
			<div>
			<h1>{this.article.text.title}
			<button onClick={this.buttonClick}>{this.state.isOpen ? 'close' : 'open'}</button>
			</h1>
			{body}
			</div>
		)
	}

}