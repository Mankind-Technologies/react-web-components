import React from 'react';

interface Props {
    url: string;
    name: string;
}

export function Card(props:Props) {
    return <a href={props.url}>{props.name}</a>;
}
