import * as React from "react";
export interface ToastProps{
title:React.ReactNode;description?:React.ReactNode;
tone?:"default"|"success"|"error";onClose?:()=>void;
}
export declare function Toast(props:ToastProps):JSX.Element;
