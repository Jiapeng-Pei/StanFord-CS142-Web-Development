import React from 'react';
import ReactDOM from 'react-dom';

import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';

class P4 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            display: 'Example'
        }
    }

    changeDisplay = (event) => {
        this.setState({
            display: this.state.display === 'Example' ? 'States' : 'Example'
        })
    }

    render() {
        return (
        <div>
            <Header />
            <button onClick={this.changeDisplay}>Switch to {this.state.display === 'Example' ? 'States' : 'Examples'}</button>
            {this.state.display === 'Example' ? <Example /> : <States />}
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
