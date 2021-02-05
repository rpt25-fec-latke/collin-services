import React, { useContext } from 'react';
import {
  SidePanelImg,
  ShortDescription,
  Container,
  ReviewInfo,
  ReviewWrapper,
  OverallReview,
  ReleaseDateWrapper,
  ReleaseInfo,
  ReleaseDate,
  PubAndDev,
  TagsWrapper,
  TagList,
  Tag,
  ToolTip,
} from './styles';
import GamesContext from '../../context';

const SideInfoPanel = () => {
  const { sidePanelImg, sidePanelInfo } = useContext(GamesContext);
  console.log(sidePanelInfo);
  return (
    <Container>
      <SidePanelImg src={sidePanelImg} />
      <ShortDescription>{sidePanelInfo.short_description}</ShortDescription>
      <ReviewWrapper>
        <ReviewInfo>
          Recent Reviews:
        </ReviewInfo>
        <OverallReview>
          <ToolTip className="tooltip">review stats</ToolTip>
          {sidePanelInfo.recent_reviews}
        </OverallReview>
        <ReviewInfo>
          {`(${sidePanelInfo.recent_reviews_count})`}
        </ReviewInfo>
      </ReviewWrapper>
      <ReviewWrapper>
        <ReviewInfo>
          All Reviews:
        </ReviewInfo>
        <OverallReview>
          <ToolTip className="tooltip">review stats</ToolTip>
          {sidePanelInfo.all_reviews}
        </OverallReview>
        <ReviewInfo>
          {`(${sidePanelInfo.all_reviews_count})`}
        </ReviewInfo>
      </ReviewWrapper>
      <ReleaseDateWrapper>
        <ReleaseInfo>Release Date:</ReleaseInfo>
        <ReleaseDate>
          {sidePanelInfo.release_date && sidePanelInfo.release_date.slice(0, 10)}
        </ReleaseDate>
      </ReleaseDateWrapper>
      <ReviewWrapper>
        <ReviewInfo>
          Developer:
        </ReviewInfo>
        <PubAndDev>
          {sidePanelInfo.developer}
        </PubAndDev>
      </ReviewWrapper>
      <ReviewWrapper>
        <ReviewInfo>
          Publisher:
        </ReviewInfo>
        <PubAndDev>
          {sidePanelInfo.publisher}
        </PubAndDev>
      </ReviewWrapper>
      <TagsWrapper>
        <ReviewInfo>
          Popular user-defined tags for this product:
        </ReviewInfo>
        <TagList>
          {sidePanelInfo.popular_tags && sidePanelInfo.popular_tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </TagList>
      </TagsWrapper>
    </Container>
  );
};

export default SideInfoPanel;
