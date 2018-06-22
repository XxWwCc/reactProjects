import React, { Component } from 'react';
import ReactDOM from "react-dom";
class Blink extends React.Component{
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.name : ' ';
    return (
      {display}
    );
  }
}

ReactDOM.render(
  <div>
    <Blink name='I love to blink' />
    <Blink name='Yes blinking is so great' />
    <Blink name='Why did they ever take this out of HTML' />
    <Blink name='Look at me look at me look at me' />
  </div>,
  document.getElementById("container")
) 

