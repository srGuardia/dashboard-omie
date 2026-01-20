import { HeaderStyle, LogoStyle } from "./styles";

export const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle>Omie</LogoStyle>

      <input type="text" />
      <input type="text" />
      <div>User</div>
    </HeaderStyle>
  );
};
