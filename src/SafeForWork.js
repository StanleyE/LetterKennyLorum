import React, { Component } from 'react';
import Display from './Display';


class SafeForWork extends Component {
    render() {
        return (
            <div>
                <h2>To Be Fair</h2>
                <div>
                    <Display quotes={this.props.quotes} />
                </div>
            </div>
        );
    }
}

export default SafeForWork;