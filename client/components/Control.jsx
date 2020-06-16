import React from 'react'

class Control extends React.Component {
    state ={
        checked: true,
        range: 0
    }

    render() {
        return (
            <div className = {this.state.checked ? 'controller checked' : 'controller'}

            >

            </div>
        )
    }
}

export default Control