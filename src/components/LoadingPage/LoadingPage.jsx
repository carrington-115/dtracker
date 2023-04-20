import React from "react";
import { Container } from "./LoadingPage.styles";
import { Oval } from "react-loader-spinner";

function LoadingPage() {
  return (
    <Container>
      <Oval
        height={80}
        width={80}
        color="green"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </Container>
  );
}

export default LoadingPage;
