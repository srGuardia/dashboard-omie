import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { ComponentProps } from "react";

interface IconProps extends ComponentProps<typeof DynamicIcon> {
  name: IconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
  return <DynamicIcon name={name} size={22} {...props} />;
};
