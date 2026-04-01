import { useUser } from "../../../context/username";
import { useState } from "react";

export function CommentsModal({
  dialogRef,
  createCommentHandler,
  contentPost,
}) {
  const { username } = useUser();
  const [commentary, setCommentary] = useState("");
  const closeModal = () => {
    dialogRef.current.close();
  };

  function createNewCommentary({ target }) {
    setCommentary(target.value);
  }

  function sendCommentary() {
    createCommentHandler(commentary, username);
    closeModal();
  }

  return (
    <dialog ref={dialogRef}>
      <p className="content-commentPost">{contentPost}</p>
      <div className="comments">
        <textarea
          onChange={createNewCommentary}
          type="text"
          placeholder="Reply Here!"
          value={commentary}
        />

        <div className="dialog-btns">
          <button onClick={closeModal}>Cancel</button>
          <button className="positive-btn" onClick={sendCommentary}>
            Reply
          </button>
        </div>
      </div>
    </dialog>
  );
}
