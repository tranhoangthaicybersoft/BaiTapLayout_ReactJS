import React, { Component } from 'react'
import BTCarousel from './BTCarousel'
import BTProduct from './BTProduct'

export default class BTContent extends Component {
    render() {
        return (
            <div>
                <BTCarousel/>
                <BTProduct/>
            </div>
        )
    }
}
