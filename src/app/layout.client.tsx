"use client";
import LayoutPage from "@/components/Layout/LayoutPage";
import { ReduxProvider } from "@/Providers/ReduxProviders";
import React from "react";
import { FC } from "react";


interface LayoutClient {
  children: React.ReactNode;
}

const RootLayoutClient: FC<LayoutClient> = ({ children }) => {
  return (
    <ReduxProvider>
      <LayoutPage>{children}</LayoutPage>
    </ReduxProvider>
  );
};

export default RootLayoutClient;
