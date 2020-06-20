import React from 'react'

class Control extends React.Component {
    state ={
        checked: false,
        rightBtnDown: false,
        velocity: 100
    }
    
    componentDidMount() {
        document.addEventListener('mouseup', this.mouseUp)
    }


    mouseDown = (evt) => {
        const e = evt.nativeEvent
        console.log(e)
        console.log('clientX - clientY: ', e.clientX, ' - ', e.clientY, ' | x - y: ', e.x, ' - ', e.y)
        let checkedState = this.state.checked

        if (e.button === 0) {
            this.setState({
                checked: !checkedState
            })
        }
        if (e.button === 2) {
            this.setState({
                rightBtnDown: true,
                initialPos: e.y
            }, ()=>console.log(this.state.rightBtnDown))
        }
    }

    velocity = (evt) => {
        const e = evt.nativeEvent
        let start = this.state.velocity
        let movement = (e.movementY)/1.5
        let velChange = () => {
            if (start - movement < 0) {return 0}
            else if (start - movement > 100) {return 100}
            else {return Math.floor(start - movement)}
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
        console.log(this.state.checked)
        return (
            
            <div 
                className = {this.state.checked ? 'controller checked' : 'controller'}
                onMouseDown = {this.mouseDown}
                onMouseMove = {this.state.rightBtnDown ? this.velocity : (e)=>null}
                onContextMenu = {e => e.preventDefault()}
            >
                <div className = 'velocity-container'>
                    <input 
                    className="velocity"
                    type="range" 
                    id="slider"           
                    min="0" 
                    max="127" 
                    value="100">
                    </input>
                </div>
                {this.state.velocity}
            </div>
        )
    }
}

export default Control