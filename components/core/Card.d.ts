import * as React from "react";
/** @startingPoint section="Components" subtitle="Glass card shell — header/content/footer slots" viewport="700x260" */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>{}
export declare function Card(props:CardProps):JSX.Element;
export declare function CardHeader(props:CardProps):JSX.Element;
export declare function CardTitle(props:CardProps):JSX.Element;
export declare function CardDescription(props:CardProps):JSX.Element;
export declare function CardContent(props:CardProps):JSX.Element;
export declare function CardFooter(props:CardProps):JSX.Element;
