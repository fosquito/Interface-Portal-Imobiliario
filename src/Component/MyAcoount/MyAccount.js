import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyAccountNav from './MyAccountNav'
import Footer1 from '../Footer/Footer1'

function MyAccount() {
    return (
        <div className="position-absolute w-100">
            <BrowserRouter>
                <div className="card card-login mx-auto text-center my-5">
                    <div className="card-header py-0 px-5 bg-primary border-bottom-0 border-danger">
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

export default MyAccount

