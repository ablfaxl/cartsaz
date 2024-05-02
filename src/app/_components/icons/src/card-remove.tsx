"use client"
import BaseIcon from "@/app/_components/icons/base-icon";
import {SvgIcon as SvgIconProps} from "@/app/_components/icons/icon-types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7.40283 36.8406H79.5325" stroke-miterlimit="10"/><path d="M41.8808 74.7079H23.4515C10.6485 74.7079 7.40283 71.5342 7.40283 58.8754V29.2301C7.40283 17.7615 10.0715 14.0829 20.1336 13.5059C21.1434 13.4698 22.2614 13.4337 23.4515 13.4337H63.5197C76.3227 13.4337 79.5683 16.6074 79.5683 29.2662V45.1708"/><path d="M65.1066 80.1184C73.0738 80.1184 79.5325 73.6597 79.5325 65.6925C79.5325 57.7252 73.0738 51.2665 65.1066 51.2665C57.1394 51.2665 50.6807 57.7252 50.6807 65.6925C50.6807 73.6597 57.1394 80.1184 65.1066 80.1184Z" stroke-miterlimit="10"/><path d="M68.967 69.7317L61.3574 62.086" stroke-miterlimit="10"/><path d="M68.8918 62.1932L61.2461 69.8029" stroke-miterlimit="10"/><path d="M21.8281 58.4796H36.2541" stroke-miterlimit="10"/>
    </BaseIcon>
  );
}