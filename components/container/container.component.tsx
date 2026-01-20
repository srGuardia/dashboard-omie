import { PropsWithChildren } from "react";
import { Content } from "../content";
import { Header } from "../header";
import { Sidebar } from "../sidebar";

import { ContainerStyle } from "./styles";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <ContainerStyle>
      <Header />
      <Sidebar />
      <Content>{children}</Content>
    </ContainerStyle>
  );
};
