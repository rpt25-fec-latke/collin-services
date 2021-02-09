import React, { useContext } from 'react';
import {
  Container,
  Overlay,
  CloseOut,
  TagsWrapper,
  TopBar,
  Header,
  TitleText,
  ModalContentBorder,
  ModalContentWrapper,
  LeftSideContent,
  TagTitle,
  SideSeparator,
} from './styles';
import GamesContext from '../../context';

function Modal() {
  const { showModal, setModal } = useContext(GamesContext);
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
            <LeftSideContent>
              <TagTitle>
                Popular user-defined tags for this product:
              </TagTitle>
            </LeftSideContent>
          </ModalContentWrapper>
        </ModalContentBorder>
      </Container>
    </>
  );
}

export default Modal;
