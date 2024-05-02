"use client"
import BaseIcon from "@/app/_components/icons/base-icon";
import {SvgIcon as SvgIconProps} from "@/app/_components/icons/icon-types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M79.5656 21.6388V30.3665C79.5656 36.0648 75.9592 39.6713 70.2609 39.6713H57.9268V14.4619C57.9268 10.4587 61.2087 7.21292 65.2119 7.21292C69.1429 7.24899 72.7494 8.83583 75.3461 11.4325C77.9427 14.0652 79.5656 17.6717 79.5656 21.6388Z" stroke-miterlimit="10"/><path d="M7.43652 25.2453V75.7361C7.43652 78.7295 10.8266 80.4245 13.2069 78.6213L19.374 74.0049C20.8166 72.923 22.8362 73.0673 24.1345 74.3656L30.1213 80.3884C31.5278 81.795 33.836 81.795 35.2425 80.3884L41.3014 74.3295C42.5637 73.0673 44.5833 72.923 45.9898 74.0049L52.1569 78.6213C54.5372 80.3884 57.9273 78.6934 57.9273 75.7361V14.4259C57.9273 10.4588 61.1731 7.21292 65.1402 7.21292H25.4689H21.8624C11.043 7.21292 7.43652 13.6685 7.43652 21.6388V25.2453Z" stroke-miterlimit="10"/><path d="M22.8335 49.517L42.5249 29.8256"/><path d="M43.2278 48.6874H43.2602"/><path d="M22.5642 30.655H22.5966"/>
    </BaseIcon>
  );
}