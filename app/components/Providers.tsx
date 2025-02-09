"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
