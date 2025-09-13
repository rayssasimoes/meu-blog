'use client'

import React, { useState } from 'react'

export default function LikeButton() {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);

  function handleLike() {
    if (isLike) {
        setLike(like - 1);
        setIsLike(false);
    } else {
        setLike(like + 1);
        setIsLike(true);
    }
  }

  return (
    <button onClick={handleLike} className={`bg-gray-300 p-1.5 rounded cursor-pointer
        ${!isLike ? 'hover:animate-pulse hover:bg-red-200' : ''}
    `}>
        <span>{isLike ? "❤️" : "💔"} {like} curtidas</span>
    </button>
  )
}
