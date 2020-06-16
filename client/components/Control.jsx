import React from 'react'

class Control extends React.Component {
    state ={
        checked: true,
        range: 0
    }

    check = (evt) => {
        let checkedState = this.state.checked
        this.setState({
            checked: !checkedState
        })
    }

    render() {
        console.log(this.state.checked)
        return (
            <div 
                className = {this.state.checked ? 'controller checked' : 'controller'}
                onClick = {this.check}

            >

            </div>
        )
    }
}

export default Control