import React, { useContext } from 'react';
import {
  SidePanalImg,
  ShortDescription,
  Container,
  ReviewInfo,
  ReviewWrapper,
  OverallReview,
  ReleaseDateWrapper,
  ReleaseInfo,
  ReleaseDate,
  TagsWrapper,
} from './styles';
import GamesContext from '../../context';

const SideInfoPanal = () => {
  const { sidePanalImg, sidePanalInfo } = useContext(GamesContext);
  console.log(sidePanalInfo);
  return (
    <Container>
      <SidePanalImg src={sidePanalImg} />
      <ShortDescription>{sidePanalInfo.short_description}</ShortDescription>
      <ReviewWrapper>
        <ReviewInfo>
          Recent Reviews:
        </ReviewInfo>
        <OverallReview>
          {sidePanalInfo.recent_reviews}
        </OverallReview>
        <ReviewInfo>
          {`(${sidePanalInfo.recent_reviews_count})`}
        </ReviewInfo>
      </ReviewWrapper>
      <ReviewWrapper>
        <ReviewInfo>
          All Reviews:
        </ReviewInfo>
        <OverallReview>
          {sidePanalInfo.all_reviews}
        </OverallReview>
        <ReviewInfo>
          {`(${sidePanalInfo.all_reviews_count})`}
        </ReviewInfo>
      </ReviewWrapper>
      <ReleaseDateWrapper>
        <ReleaseInfo>Release Date:</ReleaseInfo>
        <ReleaseDate>
          {sidePanalInfo.release_date && sidePanalInfo.release_date.slice(0, 10)}
        </ReleaseDate>
      </ReleaseDateWrapper>
      <ReviewWrapper>
        <ReviewInfo>
          Developer:
        </ReviewInfo>
        <OverallReview>
          {sidePanalInfo.developer}
        </OverallReview>
      </ReviewWrapper>
      <ReviewWrapper>
        <ReviewInfo>
          Publisher:
        </ReviewInfo>
        <OverallReview>
          {sidePanalInfo.publisher}
        </OverallReview>
      </ReviewWrapper>
      <TagsWrapper>
        <ReviewInfo>
          Popular user-defined tags for this product:
        </ReviewInfo>
      </TagsWrapper>
    </Container>
  );
};

export default SideInfoPanal;
