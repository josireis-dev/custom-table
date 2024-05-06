import React from "react"

export type ColDef<T> = Column<T>[]

export interface Column<T> {
    id: number | string
    name: string
    accessor:  keyof T
    renderer?: string | React.FunctionComponent | React.ComponentClass
    rendererParams?: any
}