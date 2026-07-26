import * as React from "react";
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
options?:Array<string|{value:string;label:string}>;
}
export declare function Select(props:SelectProps):JSX.Element;
