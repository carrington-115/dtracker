import React from "react";
import { CardContainer } from "./Card.styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton() {
  return (
    <CardContainer style={{ background: "rgba(217, 217, 217, 0.3)" }}>
      <div className="img-container">
        <Skeleton color="#D9D9D9" height={84} width={85} borderRadius={10} />
      </div>
      <div className="text-content">
        <h2 className="title">
          <Skeleton color="#D9D9D9" height={26} width={174} borderRadius={50} />
        </h2>
        <h3 className="body">
          <Skeleton
            color="#D9D9D9"
            height={9}
            width={198}
            borderRadius={50}
            count={2}
          />
        </h3>
        <div className="alt-components">
          <Skeleton color="#D9D9D9" height={28} width={88} borderRadius={50} />
          <Skeleton color="#D9D9D9" height={8} width={103} borderRadius={50} />
        </div>
      </div>
    </CardContainer>
  );
}

export default CardSkeleton;
