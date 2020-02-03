import React, {createContext} from 'react' 

type ParentSize = {
  width: number
  height: number
}
export const ParentSizeContext = createContext({width: 0, height: 0})