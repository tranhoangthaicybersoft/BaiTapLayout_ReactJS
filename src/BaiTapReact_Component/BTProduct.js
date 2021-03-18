import React, { Component } from 'react'
import BTProductList from './BTProductList'

export default class BTProduct extends Component {
    render() {
        return (
            <div className="row text-center">
                <BTProductList/>
                <BTProductList/>
                <BTProductList/>
                <BTProductList/>    
            </div>
        )
    }
}
