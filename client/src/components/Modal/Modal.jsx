import React, { useContext } from 'react';
import { Container, Overlay, CloseOut, TagsWrapper } from './styles';
import GamesContext from '../../context';

function Modal() {
  const { showModal, setModal } = useContext(GamesContext);
  return (
    <>
      <Overlay showModal={showModal} onClick={() => setModal(false)} />
      <Container showModal={showModal}>
        <div className="modal_top_bar" />
        <div className="newmodal_header_border">
          <div className="newmodal_header">
            <CloseOut onClick={() => setModal(false)}>X</CloseOut>
            <div className="title_text">View and edit tags for this product</div>
          </div>
        </div>
        <div className="newmodal_content_border">
          <div className="newmodal_content">
            <div className="app_tag_modal">
              <div className="app_tag_modal_content">
                <div className="app_tag_modal_seperator" />
                <div className="app_tag_modal_left">
                  <h2>
                    <span className="tag_title">Popular user-defined tags for this product:</span>
                    <span className="app_tag_modal_tooltip" data-tooltip-text="These are tags applied to the product by the most users.  You can click a tag to find other products with that tag applied.  Or, you can hit the plus symbol for any existing tags to increase that tag's popularity on this product.">(?)</span>
                  </h2>
                  <div className="app_tags popular_tags">
                    <TagsWrapper>
                      <div className="app_tag_control popular">
                        <div className="app_tag_checkbox" />
                        <span className="app_tag">Early Access</span>
                      </div>
                    </TagsWrapper>
                  </div>
                </div>
                <div className="app_tag_modal_right ">
                  <h2>Sign In</h2>
                  <p>Sign in to add your own tags to this product.</p>
                  <p><span className="btnv6_blue_hoverfade btn_medium">Sign In</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Modal;
