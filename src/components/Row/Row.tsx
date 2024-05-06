import React, { ReactNode } from 'react'
import { ColDef } from '../../types'
import Cell from '../Cell/Cell'

export interface IRow<T> {
    data: T
    colDef: ColDef<T>
}

const Row = <T,>({data, colDef}: IRow<T>) => {
    
    const cells = colDef.map(cell => <Cell 
        key={`${cell.id}-${data[cell.accessor]}`} 
        value={data[cell.accessor] as ReactNode} 
        renderer={cell.renderer} 
        rendererParams={cell.rendererParams} 
    />)

  return (
    <tr>{cells}</tr>
  )
}

export default Row