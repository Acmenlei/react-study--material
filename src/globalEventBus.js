import React, { PureComponent } from 'react'
import { EventEmitter } from "events"

const eventBus = new EventEmitter()

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: '暂无',
            age: 0,
            height: 0
        }
    }
    sayHomeEventCallBack(...args) {
        this.setState({
            name: args[0],
            age: args[1],
            height: args[2]
        })
    }
    render() {
        console.log("render 重新执行")
        const { name, age, height } = this.state
        return (
            <>
                <p>{name}</p>
                <p>{age}</p>
                <p>{height}</p>
            </>)
    }
    componentDidMount() {
        eventBus.addListener('sayHome', this.sayHomeEventCallBack.bind(this))
    }
}
class About extends PureComponent {
    sayHome() {
        eventBus.emit('sayHome', 'coderlei', 18, 1.88)
    }
    render() {
        return (<button onClick={() => this.sayHome()}>事件发射</button>)
    }
}
export default class globalEventBus extends PureComponent {
    render() {
        return (
            <>
                <About />
                <Home />
            </>
        )
    }
}
