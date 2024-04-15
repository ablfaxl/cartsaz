import type {Config} from "tailwindcss";
import {colord, extend} from "colord";
import mixPlugin from "colord/plugins/mix";


extend([mixPlugin]);


export function generateDarkenColorFrom(
    input: string,
    percentage = 0.07,
): string {
    return colord(input).darken(percentage).toHex();
}

export function generateForegroundColorFrom(
    input: string,
    percentage = 0.8,
): string {
    return colord(input)
        .mix(colord(input).isDark() ? "white" : "black", percentage)
        .toHex();
}

type ColorObject = {
    [key: string]: string;
};

export const tailwindColors: ColorObject = {
    primary: '#0182FE',
    secondary: "#FE3E01",
    "main-black": '#171F26',
    "main-white": '#fff',
    "secondary-blue": "#0172DE",
    "secondary-blue-light": "#60B1FE",
    "secondary-blue-bright": "#60B1FE",
    "secondary-orange": "#DE3601",
    "secondary-orange-light": "#FE8660",
    "secondary-orange-bright": "#FFE7DF",
    "base-25": "#F2F2F2",
    "base-50": "#EDEDED",
    "base-75": "#20272e",
    "base-100": "#CBCBCB",
    "gray": "#414A51",
    success: "#00966D",
    "success-100": "#00BA88",
    "success-200": "#F3FDFA",
    error: "#C30000",
    "error-100": "#ED2E2E",
    "error-200": "#FFF2F2",
    warning: "#A9791C",
    "warning-100": "#F4B740",
    "warning-200": "#FFF8E1",

}
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: tailwindColors,
        container: {
            center: true,
        },
    },
    plugins: [],
};
export default config;
