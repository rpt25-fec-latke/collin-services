import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ showModal }) => { return showModal ? 'block' : 'none'; }};
  width: 500px;
  position: absolute;
  margin: 0px auto;
  padding: 20px;
  background-color: #25282e;
  border-radius: 2px;
  transform: translateY(100%);
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px 3px;
  font-family: Helvetica, Arial, sans-serif;
`;

export const Overlay = styled.div`
  display: ${({ showModal }) => { return showModal ? 'block' : 'none'; }};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000003a;
  transition: opacity 0.2s ease;
`;

export const CloseOut = styled.button`
  position: absolute;
  background-color: #25282e;
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 1px 1px 1px #0000003a;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.562);
`;
