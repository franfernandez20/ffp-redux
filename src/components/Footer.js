import React from 'react'
import FilterLink from '../containers/FilterLink'
import Tester from '../components/Tester'
import { VisibilityFilters } from '../redux/actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    <Tester/>
  </div>
)

export default Footer