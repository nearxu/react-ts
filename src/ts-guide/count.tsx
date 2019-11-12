/** @format */

import * as React from 'react'

interface IProps {
    label: string
    count: number
    onIncrease: () => void
}

const FcCount: React.FC<IProps> = props => {
    const {label, count, onIncrease} = props
    const handleIncrease = () => {
        onIncrease()
    }
    return (
        <div>
            <span>
                {label}:{count}
            </span>
            <button onClick={handleIncrease}>add count</button>
        </div>
    )
}

export default FcCount
