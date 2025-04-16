import React from 'react'
import {Provider} from "react-redux"
import store from './store/store'
import { Children } from 'react'
function Main2() {
  return (
    <Provider store={store}>
        <h1>hello</h1>
        <Children />


    </Provider>
  )
}

export default Main2