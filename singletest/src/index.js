import React, { Component } from "react";
import ReactDOM from "react-dom";
import{NavLink,Route,Router,HashRouter}from "react-router-dom";
        var idget = document.querySelector("#container"); 
        class Home extends React.Component{
            render(){
                return (
                    <div id="upload">
                        <br/>
                        <h3>哈工有思登录系统</h3>
                        <img src={require('/home/xwc/reactProjects/singletest/src/icon.jpg')}/>
                        <form action="" >
                            <input class="ed" type="text" name="username" placeholder="用户名" required="required"/>
                            <input class="ed" type="password" name="password" placeholder="密码" required="required"/>
                            <input class="bt" type="submit" name="upload" value="登录"/>
                        </form>
                    </div>
                );
            }
        }
        class Dufu extends React.Component{
            render(){
                return (
                    <div>
                        <h2>登高</h2>
                        <p>........</p>    
                    </div>
                );
            }
        }
        class Lsy extends React.Component{
            render(){
                return (
                    <div>
                        <h2>锦瑟</h2>
                        <p>........</p>    
                    </div>
                );
            }
        }

        ReactDOM.render(
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink activeClassName="active" to="/">登录</NavLink></li>
                        <li><NavLink activeClassName="active" to="/df">杜甫</NavLink></li>
                        <li><NavLink activeClassName="active" to="/lsy">李商隐</NavLink></li>
                    </ul>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/df" component={Dufu}/>
                        <Route path="/lsy" component={Lsy}/>
                    </div>
                </div>
            </HashRouter>
            ,idget
        )
        