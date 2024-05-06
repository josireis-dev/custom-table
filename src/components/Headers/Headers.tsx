import React from 'react'
import { ColDef } from '../../types'
import Header from '../Header/Header'

export interface IHeaders<T> {
    colDef: ColDef<T>
}

const Headers = <T,>({colDef}: IHeaders<T>) => {

    const headers = colDef.map(column => <Header key={`${column.id}`} name={column.name} />)

  return (
    <tr>{headers}</tr>
  )
}

export default Headers