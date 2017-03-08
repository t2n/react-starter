import React from 'react'
import { render } from 'react-dom'

import Sample from './containers/Sample/state'
import SampleForm from './containers/SampleForm/state'

render(
  <div>
    <Sample />
    <SampleForm />
  </div>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
