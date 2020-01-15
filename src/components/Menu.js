import React, {Component} from 'react'
import NumDropdown from './Dropdown'

export default class Menu extends Component {
    onSubmit = event => {
        console.log(event)
    }

    render() {
        return (
            <div>
                <NumDropdown onSubmit={this.onSubmit}/>
            </div>
        )
        
    }
}