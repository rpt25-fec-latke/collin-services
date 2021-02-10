import React, { useContext } from 'react';
import {
  Container,
  Overlay,
  CloseOut,
  TopBar,
  Header,
  TitleText,
  ModalContentBorder,
  ModalContentWrapper,
  LeftSideContent,
  TagTitle,
  TagWrapper,
  SideSeparator,
  ToolTip,
  QuestionMarkHover,
  TagList,
  TagsSpacer,
  SpanTags,
  RightSideContent,
  SignInButton,
  SignInHeader,
  SignInInfo,
} from './styles';
import GamesContext from '../../context';

function Modal() {
  const { showModal, setModal, sidePanelInfo } = useContext(GamesContext);
  return (
    <>
      <Overlay showModal={showModal} onClick={() => setModal(false)} />
      <Container showModal={showModal}>
        <TopBar />
        <Header>
          <CloseOut onClick={() => setModal(false)}>X</CloseOut>
          <TitleText>View and edit tags for this product</TitleText>
        </Header>
        <ModalContentBorder>
          <ModalContentWrapper>
            <TagWrapper>
              <SideSeparator />
              <LeftSideContent>
                <TagTitle>
                  Popular user-defined tags for this product:
                  <QuestionMarkHover>
                    (?)
                    <ToolTip>
                      These are tags applied to the product by the most users.
                      You can click a tag to find other products with that tag applied.
                    </ToolTip>
                  </QuestionMarkHover>
                </TagTitle>
                {sidePanelInfo.popular_tags.map((tag, i) => (
                  <TagList key={`${i}a`}>
                    <TagsSpacer key={`${i}b`} />
                    <SpanTags key={`${i}c`}>{tag}</SpanTags>
                  </TagList>
                ))}
              </LeftSideContent>
              <RightSideContent>
                <SignInHeader>Sign In</SignInHeader>
                <SignInInfo>Sign in to add your own tags to this product.</SignInInfo>
                <SignInButton>Sign In</SignInButton>
              </RightSideContent>
            </TagWrapper>
          </ModalContentWrapper>
        </ModalContentBorder>
      </Container>
    </>
  );
}

export default Modal;
