import React from 'react'
import { ColDef } from '../../types'
import Headers from '../Headers/Headers'
import Row from '../Row/Row'

export interface CustomTableParams<T> {
    data: T[]
    colDef: ColDef<T>
}

const CustomTable = <T,>({data, colDef}: CustomTableParams<T>) => {

    const rows = data.map(row => <Row key={`${Math.random()}`} data={row} colDef={colDef} />)

  return (
    <table style={{width: "100%"}}>
        <thead style={{textAlign: "left"}}>
            <Headers colDef={colDef} />
        </thead>
        <tbody style={{textAlign: "left"}}>
            {rows}
        </tbody>
    </table>
  )
}

export default CustomTable