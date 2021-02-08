import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ showModal }) => { return showModal ? 'flex' : 'none'; }};
  flex-direction: column;
  max-width: 1881px;
  min-width: 500px;
  top: -50px;
  position: fixed;
  background: radial-gradient(circle at top left, rgba(74, 81, 92, 0.4) 0%, rgba(75, 81, 92, 0) 60%), #25282e;
  border-radius: 2px;
  transform: translateY(100%);
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px 3px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  z-index: 1;

  .modal_top_bar {
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, #00ccff, #3366ff);
  }

  .newmodal_header {
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

    .title_text {
      padding: 32px 32px 0px 32px;
      display: block;
    }
  }
  .newmodal_content_border {
    padding: 0 1px 1px 1px;
    display: flex;
  }
  .newmodal_content {

    width: 100%;
    overflow: auto;
    word-wrap: break-word;
    padding: 15px;
    font-size: 14px;
    color: #acb2b8;
    position: relative;
    .app_tag_modal {
      width: 546px;
      .app_tag_modal_content {
        position: relative;
        margin-bottom: 64px;
      }
      .app_tag_modal_seperator {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 272px;
        width: 1px;
        background-color: #3c3d3e;
      }
      .app_tag_modal_left {
          padding-right: 16px;
          float: left;
          .tag_title {
            font-family: "Motiva Sans", sans-serif;
            font-size: 14px;
            line-height: 20px;
            text-align: start;
            letter-spacing: normal;
            color: #969696;
          }
          .app_tag_modal_tooltip {
            font-size: 11px;
            color: #626366;
            cursor: default;
            margin-left: 8px;
          }
      }
      .app_tag_modal_left, .app_tag_modal_right {
        width: 256px;
      }
      .app_tag_modal_right {
        float: right;
        width: 256px;
        padding-left: 16px;
        .btnv6_blue_hoverfade {
          border-radius: 2px;
          border: none;
          padding: 1px;
          display: inline-block;
          cursor: pointer;
          text-decoration: none !important;
          color: #67c1f5 !important;
          background: rgba( 103, 193, 245, 0.2 );
        }
      }
    }
  }

`;

export const TagsWrapper = styled.div`
  .app_tag_control {
    height: 19px;
    line-height: 19px;
    color: #626366;
    padding: 2px;
    background-color: #222225;
    margin-bottom: 2px;
    .app_tag_modal.nologin .app_tag_checkbox {
      display: none;
    }
    .app_tag_checkbox {
      /* background: url(/public/images/v6/tag_check.png) bottom center no-repeat; */
      margin-left: 4px;
    }
    .app_tag_checkbox, .app_tag_adjust, .app_tag_report, .app_tag_ban {
      float: right;
      width: 13px;
      height: 19px;
      cursor: pointer;
    }
    .app_tag {
    display: inline-block;
    line-height: 19px;
    padding: 0 7px;
    color: #67c1f5;
    background-color: rgba( 103, 193, 245, 0.2 );
    box-shadow: none;
    margin-right: 2px;
    border-radius: 2px;
    cursor: pointer;
    margin-bottom: 3px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
  }
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
`;
