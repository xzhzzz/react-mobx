import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import Greeter from './Greeter/greeter';

class Index extends Component{
    render(){
        return(
            <div>
                <h1>index</h1>
                <Link to="/greeter">click</Link>
                <div className="contains">
                    <Route path="/greeter" component={Greeter}/>
                </div>
            </div>
        )
    }
}

export default Index;