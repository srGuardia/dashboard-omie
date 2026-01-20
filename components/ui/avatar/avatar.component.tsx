import { UserDataSchema } from "@/schemas";
import { getUser } from "@/services/user.service";
import {
  AvatarContainerStyle,
  AvatarImageStyle,
  AvatarStyle,
  AvatarTextStyle,
} from "./styles";

interface AvatarProps {
  userId: number;
}

export const Avatar = async ({ userId }: AvatarProps) => {
  const user: UserDataSchema = await getUser({ userId });

  return (
    <AvatarContainerStyle>
      <AvatarTextStyle>{user.firstName}</AvatarTextStyle>
      <AvatarStyle>
        <AvatarImageStyle
          src={user.image}
          alt="Avatar"
          width={0}
          height={0}
          loading="lazy"
        />
      </AvatarStyle>
    </AvatarContainerStyle>
  );
};
