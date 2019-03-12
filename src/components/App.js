import React from 'react'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Bar from '../containers/EstylesExampleBar'
import AppContainer from '../containers/AppContainer'

const App = () => (
  <div>
    <Bar>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Bar>
  </div>
)

export default App