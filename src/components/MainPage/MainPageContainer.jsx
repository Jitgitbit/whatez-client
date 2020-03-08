import React from 'react'
import MainPageCommonList from './MainPageCommonList'
import MainPageNotoriousList from './MainPageNotoriousList'
import MainPageChart from './MainPageChart'
import PhotoPageContainer from '../PhotoPage/PhotoPageContainer'

export default function MainPageContainer() {
  return (
    <div>
      <MainPageCommonList/>
      <MainPageNotoriousList/>
      <PhotoPageContainer/>
      <MainPageChart/>
    </div>
  )
}
