import React, { useEffect, useState } from 'react';
import { getStoriesIds } from './services/hnApi'

export const App = () => {

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {

    getStoriesIds().then(lemons => lemons && setStoryIds(lemons.data))

  }, [])

  return (
    <p>{JSON.stringify(storyIds)}</p>
  )
}
