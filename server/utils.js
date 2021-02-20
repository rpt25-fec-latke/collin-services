const combineData = (gameInfo, metaData) => {
  const [infoObj] = gameInfo;
  const objPropMutation = JSON.parse(JSON.stringify(infoObj));
  objPropMutation.game_title = metaData[4][0];
  objPropMutation.developer = metaData[4][2];
  objPropMutation.publisher = metaData[4][3];
  objPropMutation.release_date = metaData[4][5];
  return objPropMutation;
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
