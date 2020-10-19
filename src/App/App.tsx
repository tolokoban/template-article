import React from "react"
import PageIntro from '../page/intro'

import "./App.css"

interface IAppProps {
    className?: string
}
interface IAppState {

}

export default class App extends React.Component<IAppProps, IAppState> {
    state = {}

    render() {
        const classes = ['App']
        if (typeof this.props.className === 'string') classes.push(this.props.className)

        return (<div className={classes.join(' ')}>
            <PageIntro />
        </div>)
    }
}
