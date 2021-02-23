import styled from 'styled-components';

export const SidePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const SidePanelImg = styled.img`
  width: 324px;
  height: 151px;
  margin: 0px 10px 5px;
`;

export const ShortDescription = styled.p`
  font-family: ${({ theme: { fontStyle: { sidePanel } } }) => sidePanel};
  font-size: 13px;
  text-align: start;
  line-height: 18px;
  width: 324px;
  height: 75px;
  letter-spacing: normal;
  color: #c6d4df;
  margin: 0px 10px 8px;
  overflow-y: hidden;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  margin: 0px 10px;
  white-space: nowrap;
`;

export const ReviewInfo = styled.div`
  font-family: ${({ theme: { fontStyle: { sidePanel } } }) => sidePanel};
  font-size: 11px;
  line-height: 16px;
  text-align: start;
  letter-spacing: normal;
  color: ${({ theme: { panelColors: { grey } } }) => grey};
  min-width: 85px;
  padding-right: 10px;
`;

export const OverallReview = styled.div`
  align-self: center;
  font-family: ${({ theme: { fontStyle: { sidePanel } } }) => sidePanel};
  text-align: justify;
  font-size: 13px;
  line-height: 16px;
  text-align: start;
  letter-spacing: normal;
  color: ${({ theme: { panelColors: { blue } } }) => blue};
  min-width: 30px;
  padding-right: 5px;

  &:hover .tooltip {
    cursor: pointer;
    visibility: visible;
  }
`;

export const PubAndDev = styled.div`
  align-self: center;
  font-family: ${({ theme: { fontStyle: { sidePanel } } }) => sidePanel};
  text-align: justify;
  font-size: 13px;
  line-height: 16px;
  text-align: start;
  letter-spacing: normal;
  color: ${({ theme: { panelColors: { blue } } }) => blue};
  min-width: 30px;
  padding-right: 5px;

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ReleaseDateWrapper = styled.div`
  display: flex;
  margin: 15px 10px;
  white-space: nowrap;
`;

export const ReleaseInfo = styled.div`
  font-family: ${({ theme: { fontStyle: { sidePanel } } }) => sidePanel};
  font-size: 11px;
  line-height: 16px;
  text-align: start;
  letter-spacing: normal;
  color: ${({ theme: { panelColors: { grey } } }) => grey};
  min-width: 85px;
  padding-right: 10px;
`;

export const ReleaseDate = styled.div`
  align-self: center;
  font-family: ${({ theme: { fontStyle: { sidePanel } } }) => sidePanel};
  text-align: justify;
  font-size: 13px;
  line-height: 16px;
  text-align: start;
  letter-spacing: normal;
  color: #8f98a0;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px 0px;
  white-space: nowrap;
`;

export const TagList = styled.div`
  font-family: ${({ theme: { fontStyle: { sidePanel } } }) => sidePanel};
  display: flex;
  width: 324px;
  font-size: 11px;
`;

export const Tag = styled.div`
  display: inline-block;
  line-height: 19px;
  padding: 0px 7px;
  color: ${({ theme: { panelColors: { blue } } }) => blue};
  background-color: rgba( 103, 193, 245, 0.2 );
  box-shadow: none;
  margin-right: 2px;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%);
    color: white;
    cursor: pointer;
  }
`;

export const ToolTip = styled.span`
  width: max-content;
  max-width: 275px;
  padding: 5px;
  background-color:#c2c2c2;
  color: #3d3d3f;
  position: absolute;
  box-shadow: 0 0 5px #000;
  visibility: hidden;
  font-size: 11px;
  text-shadow: none;
  font-weight: normal;
  border-radius: 3px;
  white-space: normal;
  transition: opacity .5s;
  margin-bottom: 150px;

`;
