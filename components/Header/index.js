import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();

  const [userFound, setUserFound] = useState(false);
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUserFound(true);
    } else {
      setUserFound(false);
    }
  }, []);

  const onClickLogout = useCallback(() => {
    sessionStorage.removeItem("user");
    router.replace("/");
  }, [router]);

  return (
    <header className="h-20 flex items-center justify-between mx-auto px-4 bg-indigo-100">
      <h1 className="font-bold text-2xl">TodoList App</h1>
      {userFound && (
        <button
          onClick={onClickLogout}
          className="text-red-600 bg-red-200 px-2 py-1 rounded-md"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
