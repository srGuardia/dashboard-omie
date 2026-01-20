import { PropsWithChildren } from "react";
import { ContentStyle } from "./styles";

export const Content = ({ children }: PropsWithChildren) => {
  return <ContentStyle>{children}</ContentStyle>;
};
