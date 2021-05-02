import React, { Component } from 'react'
import Carousel from './Carousel';
import Phoneitem from './phone-info';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Phoneitem />
            </div>
        )
    }
}
