import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ showModal }) => { return showModal ? 'flex' : 'none'; }};
  flex-direction: column;
  max-width: 1881px;
  min-width: 500px;
  top: -300px;
  position: absolute;
  background: radial-gradient(circle at top left, rgba(74, 81, 92, 0.4) 0%, rgba(75, 81, 92, 0) 60%), #25282e;
  border-radius: 2px;
  transform: translateY(100%);
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px 3px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  z-index: 1;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #00ccff, #3366ff);
`;

export const Header = styled.div`
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: 300;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  flex-shrink: 0;
`;

export const TitleText = styled.div`
  padding: 25px 25px 0px 25px;
  display: block;
  z-index: 2;
`;

export const ModalContentBorder = styled.div`
  padding: 0 1px 1px 1px;
  display: flex;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  word-wrap: break-word;
  padding: 16px 25px 25px;
  color: #acb2b8;
  position: relative;
`;

export const TagWrapper = styled.div`
  display: flex;
  width: 546px;
  position: relative;
`;

export const LeftSideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 20px;
`;

export const SideSeparator = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 272px;
  width: 1px;
  background-color: #3c3d3e;
`;

export const TagTitle = styled.div`
  font-family: "Motiva Sans", sans-serif;
  width: 220px;
  font-size: 14px;
  line-height: 20px;
  text-align: start;
  letter-spacing: normal;
  color: #969696;
`;

export const ToolTip = styled.div`
  width: 250px;
  padding: 5px;
  background-color:#c2c2c2;
  color: #3d3d3f;
  position: absolute;
  box-shadow: 0 0 5px #000;
  visibility: hidden;
  font-size: 9px;
  text-shadow: none;
  font-weight: normal;
  border-radius: 3px;
  white-space: normal;
  transition: opacity .5s;
  bottom: 300px;
  left: 35px;
  z-index: 3;

`;

export const QuestionMarkHover = styled.span`
  font-size: 11px;
  color: #626366;
  cursor: default;
  margin-left: 4px;
  width: 10px;
  height: 10px;

  &:hover ${ToolTip} {
    visibility: visible;
  }
`;

export const RightSideContent = styled.div`
  width: 256px;
  padding-left: 20px;
`;

export const TagList = styled.div`
    height: 19px;
    line-height: 19px;
    color: #626366;
    padding: 2px;
    background-color: #222225;
    margin-bottom: 2px;
`;

export const TagsSpacer = styled.div`
  margin-left: 4px;
`;

export const SpanTags = styled.span`
  display: inline-block;
  line-height: 19px;
  padding: 0 7px;
  color: #67c1f5;
  background-color: rgba( 103, 193, 245, 0.2 );
  box-shadow: none;
  margin-right: 2px;
  border-radius: 2px;
  margin-bottom: 3px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%);
    color: white;
    cursor: default;
  }
`;

export const SignInButton = styled.div`
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  text-decoration: none;
  color: #67c1f5;
  background: rgba( 103, 193, 245, 0.2 );
  padding: 0 15px;
  font-size: 15px;
  line-height: 30px;

  &:hover {
    background: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%);
    color: white;
    cursor: default;
  }
`;

export const SignInHeader = styled.div`
  font-size: 14px;
  text-align: start;
  line-height: 20px;
  letter-spacing: normal;
  color: #969696;
`;

export const SignInInfo = styled.p`
  font-size: 14px;
  text-align: start;
  line-height: 17px;
  letter-spacing: normal;
  color: #acb2b8;
`;

export const Overlay = styled.div`
  display: ${({ showModal }) => { return showModal ? 'block' : 'none'; }};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000001a;
  transition: opacity 0.2s ease;
`;

export const CloseOut = styled.button`
  position: absolute;
  background: #25282e;
  color: #acb2b8;
  align-self: flex-end;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 2px;
  cursor: pointer;
  z-index: 10;
`;
