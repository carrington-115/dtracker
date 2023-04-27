import React from "react";
import Fab from "../../components/FAB/Fab";
import {
  NotificationContainer,
  NotificationListWrapper,
} from "./notifications.styles";
import NotificationCardSkeleton from "../../components/RecordCard/NotificationCardSkeleton";

function NotificationSkeleton() {
  return (
    <NotificationContainer>
      <NotificationList />
      <Fab />
    </NotificationContainer>
  );
}

const NotificationList = () => {
  return (
    <NotificationListWrapper>
      {new Array(10).fill("").map((_, idx) => (
        <NotificationCardSkeleton
          key={idx}
          recordType="Tracking Record"
          recordBody="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed quis vel vitae potenti"
        />
      ))}
    </NotificationListWrapper>
  );
};

export default NotificationSkeleton;
