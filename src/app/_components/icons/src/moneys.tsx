"use client"
import BaseIcon from "@/app/_components/icons/base-icon";
import {SvgIcon as SvgIconProps} from "@/app/_components/icons/icon-types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M69.605 28.6743V47.2477C69.605 58.3557 63.2576 63.1161 53.7365 63.1161H22.0355C20.4126 63.1161 18.8618 62.9721 17.4192 62.6475C16.5176 62.5032 15.6521 62.2508 14.8586 61.9622C9.4489 59.9426 6.16699 55.2541 6.16699 47.2477V28.6743C6.16699 17.5663 12.5144 12.8059 22.0355 12.8059H53.7365C61.815 12.8059 67.6214 16.232 69.1722 24.0581C69.4247 25.5007 69.605 26.9792 69.605 28.6743Z" stroke-miterlimit="10"/><path d="M80.4291 39.4942V58.0676C80.4291 69.1756 74.0817 73.936 64.5606 73.936H32.8596C30.1908 73.936 27.7745 73.5756 25.6827 72.7821C21.391 71.1953 18.4697 67.9134 17.4238 62.6479C18.8664 62.9725 20.4172 63.1166 22.0401 63.1166H53.7411C63.2622 63.1166 69.6096 58.3561 69.6096 47.2482V28.6747C69.6096 26.9797 69.4654 25.4651 69.1769 24.0585C76.0292 25.5011 80.4291 30.3337 80.4291 39.4942Z" stroke-miterlimit="10"/><path d="M37.862 47.4998C43.1203 47.4998 47.3831 43.237 47.3831 37.9787C47.3831 32.7203 43.1203 28.4575 37.862 28.4575C32.6036 28.4575 28.3408 32.7203 28.3408 37.9787C28.3408 43.237 32.6036 47.4998 37.862 47.4998Z" stroke-miterlimit="10"/><path d="M17.2407 30.0448V45.9134" stroke-miterlimit="10"/><path d="M58.5034 30.0459V45.9145" stroke-miterlimit="10"/>
    </BaseIcon>
  );
}