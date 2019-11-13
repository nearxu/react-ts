/** @format */

import * as React from 'react'

interface IProps {
    label: string
}

interface IState {
    count: number
}

export default class ClassCount extends React.Component<IProps, IState> {
    readonly state: IState = {
        count: 0,
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        const {handleIncrement} = this
        const {label} = this.props
        const {count} = this.state

        return (
            <div>
                <span>
                    {label}: {count}
                </span>
                <button type="button" onClick={handleIncrement}>
                    {`Increment`}
                </button>
            </div>
        )
    }
}
