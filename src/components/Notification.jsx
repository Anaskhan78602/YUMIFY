import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const Notification = () => {
  const { notification } = useContext(NotificationContext); // Access notification from context

  return (
    notification && (
      <div className="notification-banner">
        {notification}
      </div>
    )
  );
};

export default Notification;
