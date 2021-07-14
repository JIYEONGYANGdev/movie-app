import React, { Component } from 'react';
// import PropTypes from "prop-types";

// extends "from"
// react 컴포넌트에서 확장해서 쓰는 거임 
// 모든 기능?을 쓰고싶은 건 아니니까, 확장해서
// func 이 아니니 Return 없고 render
// ! react는 class component 의 render를 자동으로 execute

// state를 위해 class component로,
// state는 object고 동적으로 변할 데이터를 다룸

// render method 말고 더 있음
// life cycle method => create&kill component 
// before render & after render 때마다 각각 호출되는 함수가 있음
/* component가 Update될 때 호출되는 함수가 더 있음
    1. mounting : update / unmounting: kill (change page..)
    constructor() // not from react

    => render => componentDidMount => ComponentDIdUpdate (when? setState => render 후)

*/
class App extends React.Component {
    constructor(props){
    super(props);
    } // javascript
    state = {
        count: 0
    };
    add = () => { // javascript code
        // this.state.count = 1; // ! do not change state directly if you do that => react doesnt re-RENDER 
        this.setState({ count: this.state.count +1 }); // ! setState를 써야 함
        // this.setState(current => ({ count: current.count + 1 })); // ! this would be much better
    };
    // ! if you call setState => react >refresh the state< and >call render function with NEW STATE<
    // ! execute render: react repaint everything but only update the part that changes
    minus = () => {
        this.setState({ count: this.state.count -1 });
    };
    
    componentDidMount() {
        console.log("component rendered")
    }

    componentDidUpdate() {
        console.log("I just updated")
    }

    render() {
        console.log("I'm rendering")
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App
