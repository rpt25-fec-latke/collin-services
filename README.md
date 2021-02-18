# Game Information Carousel & Side Panel

> An information section that includes images from the game, a brief description, tags related to the game and other specs.

## Related Projects
reviews section - https://github.com/rpt25-fec-latke/tyler-services

## Table of Contents

1. [Versions](#versions)
2. [Installation](#installation)
3. [Development](#development)
4. [Seed Script](#seedscript)
5. [Testing](#testing)

## Versions
1.) Node - 12.16.1
2.) NPM - 6.14.11
3.) MongoDB shell - 4.4.1
5.) All NPM packages should be the most current version.

## Installation
From within the root directory:

1.) npm install
2.) npm run seed
3.) npm start (run server)
4.) npm run build (build bundle)

## Development

Backend:
  This service is dependent on the Reviews API and the Metadata API so I created 'failed to load' placeholder data just in case there is a probelm connecting to them.
  SIDE NOTE --- Created a dev server (express-dev-server) to run on PORT 3008 and refresh on save but unfortunately does not work with styled components.

Frontend:
  I'm using primarily React Hooks in conjunction with the Context API. If unfamiliar with hooks, the useState hook is used to store state and set state. The useEffect hook is used similarly to componentDidMount and componentDidUpdate in React. The Context API works in a similar way to Redux in that you have a global state in which you no longer have to pass down state or functions to components. Notice how the Context Provider is wrapping around the component tree.
  This project uses styled-components and utilizes global styles and themes which are both part of styled-components.
  There is a setTimeout on the main component (GameInfoCarousel) that switches the main picture automatically in the same way that Steam does. It turns off when an image is clicked but it is currently commented out because it makes a request to S3 each time, which can get expensive if the website is left on.
  I was testing the limits of destructuring on this project after finding out that no matter how deeply nested an object gets, it can always be destructured. Some of it might be hard to read so look at the stucture of the data below to see it in its original form.

## Seed Script
Example:[
  {
    video_photo_carousel: [
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(1).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(2).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(10).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(11).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(7).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(3).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(9).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(12).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(4).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(5).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(6).jpeg',
      'https://gameinfocarousel.s3.us-east-2.amazonaws.com/game_genres/Strategy/image+(8).jpeg'
    ],
    popular_tags: [
      'zero administration',
      'didactic',
      'non-volatile',
      'dedicated',
      'logistical',
      'fault-tolerant',
      'zero tolerance',
      'scalable',
      'value-added',
      'regional',
      '24 hour',
      'secondary'
    ],
    game_id: 1,
    genre: 'Strategy',
    game_title: 'Tasty Steel Bike',
    short_description: 'Repellendus nostrum sint magni eaque officia eius illo.',
    release_date: '2017-02-21T01:57:15.469Z',
    developer: 'Towne - Schamberger',
    publisher: 'Carter LLC',
  }
];

## Testing
I used primiarly the react-testing-library for all of my tests. Using hooks with the Context API was limiting but using the data-testid attribute that comes with the library I was able to target components and elements and test their functionality. I used MSW (Mock Service Worker) to set up a mock server and test my request to the API. This allowed me to test my request without having to make an actual HTTP request.
There is a database connection test, which in hindsight was unecessary to create but was an interesting journey to setup. There are API tests using the supertest library which pass but are currently being ignored due to the TravisCI environment not having access to the MongoDB data.