export function CommentaryList({ commentList, dialogRef, title }) {
  function closeModal() {
    dialogRef.current.close();
  }

  return (
    <dialog ref={dialogRef}>
      <div className="comment-list-postTitle">
        <h3>{title}</h3>
      </div>
      {commentList.length === 0 && (
        <p className="no-comments">
          Theres no comment yet. Be the first to comment!
        </p>
      )}
      {commentList.map((commentObj, index) => (
        <div className="comments" key={`${commentObj.comment}${index + 1}`}>
          <p>
            <strong>@{commentObj.commentAuthor}</strong>: {commentObj.comment}
          </p>
        </div>
      ))}
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
}
