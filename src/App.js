import React, { Fragment } from 'react'

import ImageSelector from './components/ImageSelector'
import SelectionHistory from './components/SelectionHistory'

const App = () => (
  <Fragment>
    <h1>Image selector</h1>
    <ImageSelector />
    <SelectionHistory />
  </Fragment>
)

export default App
