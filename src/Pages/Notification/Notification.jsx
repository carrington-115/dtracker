import React from "react";
import Fab from "../../components/FAB/Fab";
import NotificationCard from "../../components/RecordCard/NotificationCard";
import {
  NotificationContainer,
  NotificationListWrapper,
} from "./notifications.styles";

function Notification() {
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
        <NotificationCard
          key={idx}
          recordType="Tracking Record"
          recordBody="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed quis vel vitae potenti"
        />
      ))}
    </NotificationListWrapper>
  );
};

export default Notification;
