import * as React from "react";
export interface DialogProps{
open?:boolean;title?:React.ReactNode;description?:React.ReactNode;
children?:React.ReactNode;footer?:React.ReactNode;onClose?:()=>void;
}
export declare function Dialog(props:DialogProps):JSX.Element|null;
