import React from 'react';
import ReactDOM from 'react-dom';

import './styles/p5.css'
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';
import { HashRouter, Route, Link } from "react-router-dom";

class P4 extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>
            <Header />
            adf<h2>Welcome! Plase click States or Example to see the page.</h2>
            <div>
                <HashRouter>
                    <div>
                    <div className="toolbar">
                        <Link to="/states">States</Link>
                        <Link to="/example">Example</Link>
                    </div>
                    <Route path="/states" component={States} />
                    <Route path="/example" component={Example} />
                    </div>
                </HashRouter>        
            </div>
        </div>
        )
    }
}

ReactDOM.render(
  <P4 />,
  document.getElementById('reactapp'),
);


/*
既然render需要一个JSX对象，我可以给他创建一个JSX对象。或者新建一个也可以把；
*/
