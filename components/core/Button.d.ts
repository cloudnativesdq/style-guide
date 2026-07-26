import * as React from "react";
/** @startingPoint section="Components" subtitle="Gradient CTA / glass secondary / outline / ghost button" viewport="700x200" */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
variant?:"default"|"secondary"|"outline"|"ghost"|"destructive"|"link";
size?:"sm"|"default"|"lg"|"icon";
}
export declare function Button(props:ButtonProps):JSX.Element;
