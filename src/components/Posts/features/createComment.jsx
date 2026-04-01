import { useState } from "react";

export function useCreateComment(id) {
  const actualComment = `comment_${id}`;
  const storageListComments = () => {
    const getStorageList = localStorage.getItem(actualComment);
    return getStorageList ? JSON.parse(getStorageList) : [];
  };

  const [commentList, setCommentList] = useState(storageListComments);

  function createCommentHandler(comment, commentAuthor) {
    if (!comment) return;
    const newComment = {
      comment,
      commentId: Date.now(),
      commentAuthor,
    };

    setCommentList((prev) => {
      const updatedList = [...prev, newComment];
      localStorage.setItem(actualComment, JSON.stringify(updatedList));
      return updatedList;
    });
  }

  return { commentList, createCommentHandler };
}
