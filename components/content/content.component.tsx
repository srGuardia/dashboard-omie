import { PropsWithChildren } from "react";
import { ContentStyle } from "./styles";

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <ContentStyle>
      <h1>Content</h1>
      {children}
    </ContentStyle>
  );
};
