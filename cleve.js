import React from 'react'
import Cleave from 'cleave.js/react';

class Third extends React.Component {
    state={
        value:""
    }
    onChange(event) {
        // formatted pretty value
        console.log(event.target.value);
        let val=event.target.value;
        
        this.setState({value:val})
        // raw value
        console.log(event.target.rawValue);
    }

    render() {
        return (
            <React.Fragment>
                <br/>
                {JSON.stringify(this.state)}
                <Cleave placeholder="Enter your credit card number"
                    options={{   prefix: 'PREFIX',
                    delimiter: '-',
                    blocks: [6, 4, 4, 4],
                    uppercase: true}}
                    onChange={this.onChange.bind(this)} />
            </React.Fragment>
        );
    }
}

export default Third;
