import * as React from "react";
/** @startingPoint section="Components" subtitle="Pill status labels — type tag, sold out, spots remaining" viewport="700x140" */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>{
variant?:"default"|"secondary"|"destructive"|"warning"|"outline"|"accentSoft";
}
export declare function Badge(props:BadgeProps):JSX.Element;
