import { Suspense } from "react";

import { SearchForm } from "../form";
import { Avatar, AvatarLoading } from "../ui";
import { HeaderLogo } from "./header-logo.component";
import { HeaderStyle, LeftStyle, RightStyle } from "./styles";

export const Header = () => {
  return (
    <HeaderStyle>
      <LeftStyle>
        <HeaderLogo />

        <SearchForm />
      </LeftStyle>

      <RightStyle>
        <Suspense fallback={<AvatarLoading />}>
          <Avatar userId={1} />
        </Suspense>
      </RightStyle>
    </HeaderStyle>
  );
};
