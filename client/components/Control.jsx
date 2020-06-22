import React from 'react'

class Control extends React.Component {
    state ={
        checked: false,
        rightBtnDown: false,
        startPosY: 0,
        startVel: 100,
        velocity: 100
    }
    
    componentDidMount() {
        document.addEventListener('mouseup', this.mouseUp)
    }


    mouseDown = (evt) => {
        const e = evt.nativeEvent
        let checkedState = this.state.checked

        if (e.button === 0) {
            this.setState({
                checked: !checkedState
            })
        }
        if (e.button === 2) {
            this.setState({
                rightBtnDown: true,
                startPosY: e.y,
                startVel: this.state.velocity
            })
        }
    }

    velocity = (evt) => {
        const e = evt.nativeEvent
        console.log(this.state.startVel)
        let initialPos = this.state.startPosY
        let velChange = initialPos - e.y
        let startVel = this.state.startVel
        let finalVel = () => {
            if (startVel + velChange < 0) {return 0}
            else if (startVel + velChange > 100) {return 100}
            else {return Math.floor(startVel + velChange)}
        }
        let vel = finalVel()
        console.log('| initial : ', initialPos, ' | Change: ', velChange, ' | final', vel)
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
    }

    render() {
        return (
            
            <div 
                className = {this.state.checked ? 'controller checked' : 'controller'}
                onMouseDown = {this.mouseDown}
                onMouseMove = {this.state.rightBtnDown ? this.velocity : (e)=>null}
                onContextMenu = {e => e.preventDefault()}
            >
                {this.state.velocity}
            </div>
        )
    }
}

export default Control