import React,{Component} from 'react';
import { observer,inject } from 'mobx-react';
import {Link} from 'react-router-dom';
import './greeter.less';
import {Button} from 'antd'

@inject('greeterStore') @observer

class Greeter extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="greet">
                <h1>{this.props.greeterStore.greeter.one}</h1>
                <Button type="primary" onClick={this.props.greeterStore.handleClick}>++</Button>
                <div className="one">1234567</div>
                <div className="imgs"></div>
                <Button onClick={this.props.greeterStore.handleTest}>axios</Button>
                <Link to="/">back</Link>
            </div>
        )
    }
}

export default Greeter;