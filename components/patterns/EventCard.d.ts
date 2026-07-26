import * as React from "react";
/** @startingPoint section="Components" subtitle="Meetup listing card — image, type tag, sold-out/spots badge" viewport="700x260" */
export interface EventCardProps{
title:string;type:string;date:string;location?:string;image?:string;
soldOut?:boolean;spotsRemaining?:number;compact?:boolean;href?:string;
}
export declare function EventCard(props:EventCardProps):JSX.Element;
