const combineData = (gameInfo, metaData) => {
  const [infoObj] = gameInfo;
  infoObj.game_title = metaData[4][0];
  infoObj.developer = metaData[4][2];
  infoObj.publisher = metaData[4][3];
  infoObj.release_date = metaData[4][5];
  return infoObj;
};

const reviewsFailedToLoad = () => (
  {
    reviewStats: {
      overallRatingGroup: {
        ratingGroup: 'Failed To Load',
      },
      overallReviewsRatingGroupHoverMessage: 'Failed To Load',
      recentRatingGroup: {
        ratingGroup: 'Failed To Load',
      },
      recentReviewsRatingGroupHoverMessage: 'Failed To Load',
      totalRecentReviewCount: 0,
      totalReviewCount: 0,
    },
  }
);

const metaFailedToLoad = () => (
  [null, null, null, null,
    [
      'Failed To Load',
      null,
      'Failed To Load',
      'Failed To Load',
      null,
      null,
    ],
  ]
);

module.exports = {
  combineData,
  reviewsFailedToLoad,
  metaFailedToLoad,
};
