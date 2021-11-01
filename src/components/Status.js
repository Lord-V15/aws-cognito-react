import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <div style={{ fontSize: "24px" }}>
      {status ? <button onClick={logout} onClick={refreshPage}>Logout</button> : "Please login"}
    </div>
  );
};
export default Status;
