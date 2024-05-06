import React, { createElement } from 'react'

export interface IHeader {
    name: string
    headerRenderer?: string | React.FC
}

const Header = ({name, headerRenderer}: IHeader) => {

    if (headerRenderer) {
        return createElement(headerRenderer, {name} as any)
    }

  return (
    <th>{name}</th>
  )
}

export default Header