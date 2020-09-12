import React, { useEffect, useState } from 'react';
import { getStoriesIds } from '../services/hnApi';

export const StoriesContainer = () => {

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {

    getStoriesIds().then(data => data && setStoryIds(data))

  }, [])

  return (
    <p>{JSON.stringify(storyIds)}</p>
  )
}
