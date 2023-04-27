import React from "react";
import { NotificationCardSkeletonContainer } from "./Card.styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function NotificationCardSkeleton(props) {
  return (
    <NotificationCardSkeletonContainer>
      <div className="img-container">
        <Skeleton color="#D9D9D9" height={100} width={100} borderRadius={50} />
      </div>
      <div className="text-content">
        <Skeleton color="#D9D9D9" height={28} width={200} borderRadius={50} />
        <div className="alt-components">
          <div className="first">
            <Skeleton
              color="#D9D9D9"
              height={9}
              width={185}
              borderRadius={50}
              count={2}
            />
          </div>
          <div className="second">
            <Skeleton
              color="#D9D9D9"
              height={25}
              width={50}
              borderRadius={50}
            />
            <Skeleton
              color="#D9D9D9"
              height={12}
              width={80}
              borderRadius={50}
            />
          </div>
        </div>
      </div>
    </NotificationCardSkeletonContainer>
  );
}

export default NotificationCardSkeleton;
