import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const SidePanalImg = styled.img`
  width: 324px;
  height: 151px;
  margin: 0px 10px 5px;
`;

export const ShortDescription = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  text-align: start;
  line-height: 18px;
  letter-spacing: normal;
  color: #c6d4df;
  margin: 0px 10px 8px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  margin: 0px 10px;
  white-space: nowrap;
`;

export const TagsWrapper = styled.div`
  display: flex;
  margin: 20px 10px 0px;
  white-space: nowrap;
`;

export const ReviewInfo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  line-height: 16px;
  text-align: start;
  letter-spacing: normal;
  color: ${({ theme: { panalColors: { grey } } }) => grey};
  min-width: 85px;
  padding-right: 10px;
`;

export const OverallReview = styled.div`
  align-self: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  font-size: 13px;
  line-height: 16px;
  text-align: start;
  letter-spacing: normal;
  color: ${({ theme: { panalColors: { blue } } }) => blue};
  min-width: 30px;
  padding-right: 5px;
`;

export const ReleaseDateWrapper = styled.div`
  display: flex;
  margin: 15px 10px;
  white-space: nowrap;
`;

export const ReleaseInfo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  line-height: 16px;
  text-align: start;
  letter-spacing: normal;
  color: ${({ theme: { panalColors: { grey } } }) => grey};
  min-width: 85px;
  padding-right: 10px;
`;

export const ReleaseDate = styled.div`
  align-self: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  font-size: 13px;
  line-height: 16px;
  text-align: start;
  letter-spacing: normal;
  color: #8f98a0;
`;
