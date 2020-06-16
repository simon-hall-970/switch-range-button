import React from 'react'

class Control extends React.Component {
    state ={
        checked: true,
        rightBtnDown: false,
        velocity: 100
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
            }, ()=>console.log(this.state.rightBtnDown))
        }
    }

    velocity = (evt) => {
        const e = evt.nativeEvent
        let start = this.state.velocity
        let movement = e.movementY
        let velChange = () => {
            if (start - movement < 0) {return 0}
            else if (start - movement > 100) {return 100}
            else {return start - movement}
        }
        let vel = velChange()
        console.log('| movement: ', e.movementY, '| velocity: ', vel)
        this.setState({
            velocity: vel           
        })
    }

    mouseUp = (evt) => {
        let velocity = this.state.velocity
        if (evt.button === 2) {
            this.setState({
                rightBtnDown: false,
            })
        }
        console.log(this.state.velocity)
    }

    render() {

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