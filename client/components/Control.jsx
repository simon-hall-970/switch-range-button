import React from 'react'

class Control extends React.Component {
    state ={
        checked: true,
        rightBtnDown: false,
        velocity: 0
    }
    
    componentDidMount() {
        document.addEventListener('mouseup', this.mouseUp)
    }


    mouseDown = (evt) => {
        const e = evt.nativeEvent
        console.log(e)
        let checkedState = this.state.checked

        if (e.button === 0) {
            this.setState({
                checked: !checkedState
            })
        }

        if (e.button === 2) {
            this.setState({
                rightBtnDown: true
            })
        }
    }

    velocity = (evt) => {
        console.log(evt.nativeEvent)
    }

    mouseUp = (evt) => {
        if (evt.button === 2) {
            this.setState({
                rightBtnDown: false
            })
        }
    }

    render() {
        console.log(this.state.checked)
        return (
            <div 
                className = {this.state.checked ? 'controller checked' : 'controller'}
                onMouseDown = {this.mouseDown}
                onMouseMove = {this.state.rightBtnDown ? this.velocity : (e)=>null}
                onContextMenu = {e => e.preventDefault()}

            >

            </div>
        )
    }
}

export default Control