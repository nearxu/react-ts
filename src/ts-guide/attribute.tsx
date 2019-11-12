/** @format */

import * as React from 'react'

interface IProps {
    className?: string
    style?: React.CSSProperties
}

export const FCAttribute: React.FC<IProps> = props => {
    const {children, ...restProps} = props
    return <div {...restProps}>{children}</div>
}
