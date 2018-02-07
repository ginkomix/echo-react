import React from 'react';
import Button from '../button'
import './index.css'


export default class ArticleList extends React.Component{
	constructor(props) {
		super();
		this.article = props.text;
		this.arr = [];
		this.toArticle(this.arr,this.article)
	}

	toArticle(arr,article) {
		this.arr = article.map((articles)=>
							   <div className="article">
			<Button key ={articles.id}text={articles}/>
							   </div>
		);


	}

	render() {

		return(
			<div>
			{this.arr};
			</div>
		)
	}



}