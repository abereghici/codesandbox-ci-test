import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Counter from 'codesandbox-ci-test'

export const Index = () => {
  return <Counter />
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.querySelector('#root'),
)
