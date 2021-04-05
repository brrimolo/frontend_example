import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="row mt-5 pt-5">
                    <div className="col-2">
                        e-mail:
                    </div>
                    <div className="row mt-2">
                        <div className="col-4">
                            <input className="form-control name-pull-image" type="text"></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
