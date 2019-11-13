/** @format */

import * as React from 'react'
import FCcount from './count'
import ClassCount from './class'

export default class GuidApp extends React.Component<{}, {count: number}> {
    state = {count: 0}
    handleAdd() {
        this.setState({count: this.state.count + 1})
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <FCcount label={'fc count'} count={count} onIncrease={this.handleAdd.bind(this)} />
                <ClassCount label={'class count'} />
            </div>
        )
    }
}
