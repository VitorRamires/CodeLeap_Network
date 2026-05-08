import { useRef } from "react";

export function usePostModals() {
  const dialogDeleteRef = useRef();
  const dialogEditRef = useRef();
  const dialogCommentRef = useRef();
  const dialogCommentListRef = useRef();

  return {
    dialogDeleteRef,
    dialogEditRef,
    dialogCommentRef,
    dialogCommentListRef,
    openDeleteModal: () => dialogDeleteRef.current.showModal(),
    openEditModal: () => dialogEditRef.current.showModal(),
    openCommentModal: () => dialogCommentRef.current.showModal(),
    openCommentListModal: () => dialogCommentListRef.current.showModal(),
  };
}
