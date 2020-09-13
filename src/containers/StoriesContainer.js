import React, { useEffect, useState } from 'react';
import { getStoriesIds, getStory } from '../services/hnApi';
import { Story } from '../components/Story';

import {
  GlobalStyle,
  StoriesContainerWrapper
} from '../styles/StoryContainerStyles';

export const StoriesContainer = () => {

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {

    getStoriesIds().then(data => data && setStoryIds(data))

    getStory(24452766).then(data => console.log(data))

  }, [])

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );

}
