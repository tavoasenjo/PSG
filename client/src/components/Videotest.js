import React from "react";
import Styled from "styled-components";

const Container = Styled.section`
  margin-top: 400px;
  h1{
    color: tomato;
  }
  video{
    width: 100%;
  }
`;

const Filter = Styled.div`
z-index: 100;
position: absolute;
background: rgba(0, 0, 0, 0.7);
width: 100%;
height: 100%;
`;

export default class VideoTest extends React.Component {
  render() {
    return (
      <Container>
        <Filter />
        <video id="background-video" loop autoPlay>
          <source src="/Sugar/MP4/Sugar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          <source src="/Sugar/WEBM/Sugar.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Container>
    );
  }
}
