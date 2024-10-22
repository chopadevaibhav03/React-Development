import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // check if online

  useEffect(() => {
    window.addEventListener("ofline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // return boolean value
  return onlineStatus;
};

export default useOnlineStatus;
