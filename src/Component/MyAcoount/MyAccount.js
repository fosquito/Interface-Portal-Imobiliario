import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyAccountNav from './MyAccountNav'
import Footer1 from '../Footer/Footer1'

class MyAccount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {
        return (
            <div className="position-absolute w-100">
                <BrowserRouter>
                    <div className="card card-login mx-auto text-center my-5">
                        <div className="card-header py-0 px-5 bg-primary border-bottom-0 border-danger">
                            <MyAccountNav isLoggedIn={this.state.isLoggedIn}/>
                        </div>
                        <div className="card-body">
                            <Switch>
                                <Route exact path="/login"></Route>
                                <Route exact path="/register"></Route>
                            </Switch>
                        </div>
                    </div>
                    <Footer1 />
                </BrowserRouter>
            </div>
        )
    }
}

export default MyAccount

