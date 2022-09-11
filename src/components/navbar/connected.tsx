import React from "react";
import { useAccount } from "wagmi";

export const ConnectedOnly = ({
  children,
}: {
  children: React.ReactNode | JSX.Element | string;
}) => {
  const { isConnected, address } = useAccount();
  if (isConnected && address) {
    return <>{children}</>;
  }
  return null;
};

export const NotConnected = ({
  children,
}: {
  children: React.ReactNode | JSX.Element | string;
}) => {
  const { isConnected, address } = useAccount();
  if (!isConnected && !address) {
    return <>{children}</>;
  }
  return null;
};
