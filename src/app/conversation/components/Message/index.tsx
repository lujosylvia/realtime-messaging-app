'use client';

import { Card, CardBody } from "@heroui/react";

interface MessageProps {
  content: string;
  author: string;
  sendTime: string;
  direction: 'in' | 'out';
}

export default function Message ({ content, author, direction, sendTime}: MessageProps) {

  return(
    <Card
      className={`dark p-3 ${direction === 'in' ? 'bg-white/20' : 'bg-content1'}`}
    >
      <CardBody>
        <p>{content}</p>
      </CardBody>
    </Card>
  )
}