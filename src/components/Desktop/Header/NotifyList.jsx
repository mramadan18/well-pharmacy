import { useEffect } from "react";
// Toolkit
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "@/toolkit/slices/notifications/notificationsSlice";
// Components
import NotifyItem from "./NotifyItem";
import Loading from "@/components/Utilities/Loading";
// animate
import { motion } from "framer-motion";
import { readNotifications } from "@/toolkit/slices/notifications/readNotificationsSlice";
import { useTranslation } from "react-i18next";
import { useTrans } from "@/locales/Helper";

const NotifyList = ({ notifyListRef, notifyAllReadRef }) => {
  const t=useTrans()
  // const [isFoundNewNotify, setIsFoundNewNotify] = useState(false);
  const { loading, notifications } = useSelector(
    (state) => state.notifications
  );
  const dispatch = useDispatch();

  const handleReadAllNotifications = () => {
    dispatch(readNotifications());
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getNotifications());
    }
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      ref={notifyListRef}
      className="absolute top-[40px] right-[10px] bg-white shadow-[0_18px_40px_0_rgba(0,0,0,0.16)] rounded-lg p-4 w-[400px] h-[600px] overflow-y-scroll"
    >
      <div
        ref={notifyAllReadRef}
        className="text-right text-[#2C6ECB] font-semibold tracking-[1px] mb-4 cursor-pointer"
        onClick={handleReadAllNotifications}
      >
        {t["Make all as read"]}
      </div>
      <h6 className="mb-3 font-semibold tracking-[1px]">{t["New"]}</h6>
      {loading ? (
        <div className="text-center mx-auto absolute top-10 left-1/2 -translate-x-1/2">
          <Loading />
        </div>
      ) : (
        <>
          {notifications?.results?.length === 0 ? (
            <p className="text-center">{t["Not found notification"]}</p>
          ) : (
            <>
              {notifications?.results.map((notification) => {
                if (!notification.read) {
                  return (
                    <>
                      <NotifyItem
                        key={notification.id}
                        newNotify={true}
                        data={notification}
                      />
                    </>
                  );
                }
              })}
              <hr />
              {notifications?.results.map((notification) => {
                if (notification.read) {
                  return (
                    <NotifyItem key={notification.id} data={notification} />
                  );
                }
              })}
            </>
          )}
        </>
      )}
    </motion.div>
  );
};

export default NotifyList;
