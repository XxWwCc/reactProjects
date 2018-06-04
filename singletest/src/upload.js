import React, { Component } from "react";
 
class Upload extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <h3>哈工有思登录系统</h3>
        <img src="icon.jpg"/>
        <form action="" >
            <input class="ed" type="text" name="username" placeholder="用户名" required="required"/>
            <input class="ed" type="password" name="password" placeholder="密码" required="required"/>
            <input class="bt" type="submit" name="upload" value="登录"/>
        </form>
      </div>
    );
  }
}

export default Upload