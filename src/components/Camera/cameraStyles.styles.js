import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  background-color: white;
  .camera,
  .picture-shot {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 7;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    .vid-div,
    .canvas-div {
      width: 100%;
      height: 85vh;
      video,
      canvas {
        width: 100%;
        height: 100%;
        /* background-color: red; */
      }
    }
    .camera-navigation-pane,
    .canvas-navigation-pane {
      width: 100%;
      height: 15vh;
      background: #233524;
      display: flex;
      justify-content: center;
      align-items: center;
      nav {
        display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;

        .icon {
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          svg,
          img {
            width: 100%;
            height: 100%;
            fill: white;
            outline: white;
            color: white;
          }
        }
        .outer-circle {
          width: 79px;
          height: 79px;
          border: 3px solid white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          .inner-circle {
            width: 60px;
            height: 60px;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            &:hover {
              background-color: grey;
            }
            .icon-small {
              width: 30px;
              height: 30px;
              svg {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  .picture-shot {
    position: fixed;
    /* display: flex; */
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: ${(props) => {
      props.show ? "20" : "5";
    }};
    /* background-color: white; */
    .canvas-div {
      z-index: 30;
      background-color: red;
    }
    .canvas-navigation-pane {
      nav {
        .outer-circle {
          .inner-circle {
            background-color: transparent;
            .small-canvas {
              width: 100%;
              height: 100%;
              background-color: white;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
`;
