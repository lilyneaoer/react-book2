import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Header extends Component{
    constructor(){
        super();
        console.log('constructor');
    }
    componentWillMount() {
        console.log('component will mount');
    }
    componentDidMount() {
        console.log('component did mount');
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }
    render(){
        console.log('render')
        return(
            <div className="title">React小书</div>
        )
    }
}

class Index extends Component{
    constructor(){
        super();
        this.state={isShowHeader:true}
    }
    handleShowOrHide(){
        this.setState({
            isShowHeader:!this.state.isShowHeader
        })
    }

    render(){
        return(
            <div>
                {this.state.isShowHeader ?<Header/> :null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或隐藏标题
                </button>
            </div>
        )
    }
}
ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)

