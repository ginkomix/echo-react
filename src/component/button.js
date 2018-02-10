import React from 'react'


export default class Button extends React.PureComponent {
	constructor(props) {
		super(props);
		
		this.state  ={
            count:0
		} ;
        this.countClick = this.countClick.bind(this);
	}	
	
//    componentWillReceiveProps(nextProps) {
//        if(nextProps.isOpen !== this.props.isOpen) {
//            this.setState({
//                isOpen: nextProps.isOpen
//            })
//            
//        }
//    }
  
    componentWillMount() {
        console.log('mount');
    }
    componentWillUpdate() {
         console.log('Update');
    }
    

    
    countClick() {
        this.setState({
        count: this.state.count+1    
        });
    }
    
	render() {
          this.article = this.props;
        const isOpen = this.props.isOpen
		const body =isOpen && <div>{this.article.text.text}</div>
      
		return (
			<div>
			<h1 onClick={this.countClick}>{this.state.count}{this.article.text.title}
			<button onClick={this.article.onButton}>{isOpen ? 'close' : 'open'}</button>
			</h1>
			{body}
			</div>
		)
	}

}