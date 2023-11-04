import { getNotifications } from "@/toolkit/slices/notifications/notificationsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const NotifyCount = () => {
  const { loading, notifications, error } = useSelector(
    (state) => state.notifications
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getNotifications());
    }
  }, []);
  return (
    <span className="absolute w-[25px] h-[25px] bg-second text-white top-[-12px] left-[-12px] rounded-full text-sm flex justify-center items-center">
      {notifications?.count_un_read}
    </span>
  );
};

export default NotifyCount;
