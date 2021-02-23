const dataDestructuring = (metaAndGameInfo, reviewsInfo) => {
  const { video_photo_carousel: imageCarousel } = metaAndGameInfo;
  const { genre } = metaAndGameInfo;
  const { game_title: title } = metaAndGameInfo;
  const { background_image: backgroundImg } = metaAndGameInfo;
  const {
    reviewStats:
      { overallReviewsRatingGroupHoverMessage: allHover },
  } = reviewsInfo;
  const {
    reviewStats:
      { recentReviewsRatingGroupHoverMessage: recentHover },
  } = reviewsInfo;
  const {
    reviewStats:
      {
        overallRatingGroup: { ratingGroup: allReview },
      },
  } = reviewsInfo;
  const {
    reviewStats:
      {
        recentRatingGroup: { ratingGroup: recentReview },
      },
  } = reviewsInfo;
  return [
    imageCarousel,
    genre,
    title,
    backgroundImg,
    allHover,
    recentHover,
    allReview,
    recentReview,
  ];
};

export default dataDestructuring;
