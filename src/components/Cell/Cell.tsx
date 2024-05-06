import React, { HTMLAttributes, createElement } from 'react'
import { Column } from '../../types'

export interface IRendererParams<T> {
    data: T | T[]
}

// export interface ICell<T extends React.ReactNode> {
//     value: T | T[]
//     renderer?: string | React.FunctionComponent | React.ComponentClass
//     rendererParams?: HTMLAttributes<T> | ((params: IRendererParams<T>) => HTMLAttributes<T>)
// }

export interface ICell<T> extends Partial<Column<T>> {
    value: T | T[]
}

const Cell = <T extends React.ReactNode,>({value, renderer, rendererParams}: ICell<T>) => {

    let params = typeof rendererParams === "function" ? rendererParams({data: value}) : rendererParams

    console.log(value, renderer, rendererParams)

    if (renderer) {
        console.log("using renderer!")
        const el = createElement(renderer, params as any)
        return <td>{el}</td>
    }

  return (
    <td>{value}</td>
  )
}

export default Cell