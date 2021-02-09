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
  TagsTagsTags,
  SpanTags,
  RightSideContent,
  SignIn,
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
                    <TagsTagsTags key={`${i}b`} />
                    <SpanTags key={`${i}c`}>{tag}</SpanTags>
                  </TagList>
                ))}
              </LeftSideContent>
              <RightSideContent>
                <h2>Sign In</h2>
                <p>Sign in to add your own tags to this product.</p>
                <SignIn>Sign In</SignIn>
              </RightSideContent>
            </TagWrapper>
          </ModalContentWrapper>
        </ModalContentBorder>
      </Container>
    </>
  );
}

export default Modal;
