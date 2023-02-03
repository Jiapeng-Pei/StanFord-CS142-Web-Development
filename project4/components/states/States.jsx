import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.allStates = window.cs142models.statesModel();
    this.state = {
      filterString: '',
      retStates : this.allStates
    };
  }

  handleInputChange = (event) => {
    let input = event.target.value
    this.setState({filterString : input})
    let ret = this.allStates.filter(str => str.toLowerCase().includes(input.toLowerCase()))
    if (ret.length !== 0) {
      this.setState({retStates : ret.sort()})
    }
    else {
      this.setState({retStates : ['Cannot find a match.']})
    }
  }

  render() {
    return (
      <div className="Problem2">
        <div className='filter-update'>
          Fill in the filter here:   
          <input id="filter-input" type="text" value={this.state.filterString} onChange={this.handleInputChange} />
        </div>
        <br></br>
        <div className='display-states'>
          <h3>
            Results:
          </h3>
          <ul>
            {this.state.retStates.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default States;

// 为了实现这个类，我都需要什么东西呢？
/*
0. A list that is able to display al the states.
1. an input field that accepts a substring
2. a function which is triggered when the input field changes
  2.1 the function should find states whose name contains the input substring
  2.2 the function should sort the states and return them in alphabetical order
  
*/