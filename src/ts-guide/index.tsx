/** @format */

import * as React from 'react'
import FCcount from './count'
import ClassCount from './class'

export const guidApp = () => {
    // const [counts, setCount] = React.useState(0)
    let counts = 0
    const setCount = () => counts + 1
    return (
        <div>
            <FCcount label="'fc count'" count="counts" onIncrease="setCount" />
            {/* <ClassCount label="'class count'" count="counts" onIncrease="useCount" /> */}
        </div>
    )
}
