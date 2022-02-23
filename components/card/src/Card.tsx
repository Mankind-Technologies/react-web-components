import React from 'react';

export interface CardProps {
    url: string;
    name: string;
}

export function Card(props:CardProps) {
    return <a href={props.url}>{props.name}</a>;
}
