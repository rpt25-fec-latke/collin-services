import React, { useContext } from 'react';
import moment from 'moment';
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
  const {
    sidePanelImg,
    sidePanelInfo,
    setModal,
    recentReviews,
    allReviews,
  } = useContext(GamesContext);

  return (
    <Container>
      <SidePanelImg src={sidePanelImg} />
      <ShortDescription>{sidePanelInfo.short_description}</ShortDescription>
      <ReviewWrapper data-testid="recentReview">
        <ReviewInfo>
          Recent Reviews:
        </ReviewInfo>
        <OverallReview>
          <ToolTip className="tooltip">{recentReviews.hovMessage}</ToolTip>
          {recentReviews.review}
        </OverallReview>
        <ReviewInfo>
          {`(${recentReviews.total})`}
        </ReviewInfo>
      </ReviewWrapper>
      <ReviewWrapper data-testid="allReview">
        <ReviewInfo>
          All Reviews:
        </ReviewInfo>
        <OverallReview>
          <ToolTip className="tooltip">{allReviews.hovMessage}</ToolTip>
          {allReviews.review}
        </OverallReview>
        <ReviewInfo>
          {`(${allReviews.total})`}
        </ReviewInfo>
      </ReviewWrapper>
      <ReleaseDateWrapper>
        <ReleaseInfo>Release Date:</ReleaseInfo>
        <ReleaseDate>
          {
            !sidePanelInfo.release_date
              ? ''
              : moment(new Date(sidePanelInfo.release_date)).format('MMM D, YYYY')
          }
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
          {sidePanelInfo.popular_tags
          && sidePanelInfo.popular_tags.slice(0, 3).map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
          <Tag data-testid="modalTag" onClick={() => setModal(true)}>+</Tag>
        </TagList>
      </TagsWrapper>
    </Container>
  );
};

export default SideInfoPanel;
