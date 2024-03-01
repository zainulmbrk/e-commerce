import React from "react";

import { Logo } from "@components";
import Login from "@components/login";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-24 px-12">
      <Logo/>
      <Login />
    </div>
  );
};
