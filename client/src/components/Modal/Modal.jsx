import React, { useContext } from 'react';
import { Container, Overlay, CloseOut } from './styles';
import GamesContext from '../../context';

function Modal() {
  const { showModal, setModal } = useContext(GamesContext);
  return (
    <>
      <Overlay showModal={showModal} onClick={() => setModal(false)} />
      <Container showModal={showModal}>
        <CloseOut onClick={() => setModal(false)}>X</CloseOut>
        <h1>Modal heading</h1>
        <p>This is modal content</p>
      </Container>
    </>
  );
}

export default Modal;
