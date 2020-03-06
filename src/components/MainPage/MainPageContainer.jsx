import React from 'react'
import MainPageCommonList from './MainPageCommonList'
import MainPageNotoriousList from './MainPageNotoriousList'
import MainPageChart from './MainPageChart'

export default function MainPageContainer() {
  return (
    <div>
      <MainPageCommonList/>
      <MainPageNotoriousList/>
      <MainPageChart/>
    </div>
  )
}
