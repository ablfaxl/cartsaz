"use client"
import BaseIcon from "@/app/_components/icons/base-icon";
import {SvgIcon as SvgIconProps} from "@/app/_components/icons/icon-types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M24.933 71.6033C27.8903 68.4296 32.3985 68.682 34.9951 72.1443L38.6377 77.013C41.5589 80.8719 46.2834 80.8719 49.2047 77.013L52.8472 72.1443C55.4439 68.682 59.9519 68.4296 62.9093 71.6033C69.3288 78.4556 74.5582 76.1835 74.5582 66.5903V25.9452C74.5582 11.4111 71.1681 7.76857 57.5356 7.76857H30.2706C16.6381 7.76857 13.248 11.4111 13.248 25.9452V66.5542C13.2841 76.1835 18.5495 78.4195 24.933 71.6033Z"/><path d="M34.0269 36.6204H53.8625"/>
    </BaseIcon>
  );
}