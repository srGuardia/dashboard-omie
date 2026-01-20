import { Suspense } from "react";

import { Avatar, AvatarLoading } from "../ui";
import { HeaderStyle, LeftStyle, LogoStyle, RightStyle } from "./styles";

export const Header = () => {
  return (
    <HeaderStyle>
      <LeftStyle>
        <LogoStyle>Omie</LogoStyle>

        {/* <form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Faça uma busca, ex: macbook"
            name="search"
            control={control}
          />
        </form> */}
      </LeftStyle>

      <RightStyle>
        <Suspense fallback={<AvatarLoading />}>
          <Avatar userId={1} />
        </Suspense>
      </RightStyle>
    </HeaderStyle>
  );
};
