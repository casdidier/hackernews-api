import React, { useState, useEffect } from 'react';
import { getStory, getStoriesIds } from '../services/hnApi';
import { StoryWrapper, StoryMeta, StoryMetaElement, StoryTitle } from '../styles/StoryStyles';


export const Story = ({ storyId }) => {
  const [story, setStory] = useState({})

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data))
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">

      <StoryTitle>
        <p>{story.title}</p>
      </StoryTitle>

      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
          {story.time}
        </span>
        <a href={story.url}></a>
      </StoryMeta>

    </StoryWrapper >)
    : null;
}