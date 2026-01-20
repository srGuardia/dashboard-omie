import {
  AvatarImageSkeletonStyle,
  AvatarSkeletonContainerStyle,
  AvatarTextSkeletonStyle,
} from "./styles";

export const AvatarLoading = () => {
  return (
    <AvatarSkeletonContainerStyle>
      <AvatarTextSkeletonStyle />
      <AvatarImageSkeletonStyle />
    </AvatarSkeletonContainerStyle>
  );
};
