import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer1 from '../Footer/Footer1'
import MyAccountNav from './MyAccountNav'

export class MyAccount extends Component {
    render() {
        return (
            <div className="position-absolute w-100">
                <BrowserRouter>
                    <div className="card card-login mx-auto text-center my-5">
                        <div className="card-header">
                            <MyAccountNav />
                        </div>
                        <div className="card-body">
                            <Switch>
                                <Route exact path="/myaccount/login"></Route>
                                <Route exact path="/myaccount/register"></Route>
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
