import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerClicked: "header-music"
        }
    }

    handleClickHeader = (event) => {
        document.getElementById(this.state.headerClicked).className = ""
        document.getElementById(event.target.id).className = "active"
        this.setState({
            headerClicked: event.target.id
        })
    }

    render() {
        return (
            <div className="header">
                <a className="logo">Jasper Pei 😈</a>
                <div className="header-right">
                    <a id="header-music" href="#music" onClick={this.handleClickHeader}>Music</a>
                    <a id="header-contact" href="#contact" onClick={this.handleClickHeader}>Contact</a>
                    <a id="header-about" href="#about" onClick={this.handleClickHeader}>About</a>
                </div>
            </div>
        ) 
    }
}

export default Header;

/*
如何设计一个方法，使得用户只能选择一个选项，并且再选择这个选项时，选中的对象格式发生改变？

1. 创建一个index，这个index指示了当前用户选中了哪个选项；
2. 创建一个函数，由点击<a>这个类来trigger
3. 函数的目的是根据点击的对象来更改index，并更改对象的类为.active
*/