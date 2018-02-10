import React from 'react';
import Button from '../button'
import './index.css'


export default class ArticleList extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
         openArticleId:null   
        }
       
        
    }
    
    

    toArticle() {
       return this.props.text.map((articles,index)=>
                               <div key={articles.id} className="article"   >
                               <Button 
                                    text={articles} 
                                    isOpen={this.state.openArticleId === articles.id} 
                                   onButton={this.handClick.bind(this,articles.id)}
                                  />
                                   
                               </div>
                              );


    }

    handClick(id) {
        this.setState({
            openArticleId : id
        });
    }
    
    render() {
        const arr = this.toArticle();
        return(
            <div>
            {arr}
            </div>
        )
    }



}