import { DeletePostModal } from "./modals/deleteModal";
import { EditPostModal } from "./modals/editModal";

import { usePostModals } from "./modals/usePostModals";
import { formateDate } from "../../utilities/formatDate";
import { LikeButton } from "./features/likes";
import { CommentsModal } from "./modals/commentsModal.jsx";
import { CommentaryList } from "./CommentaryList.jsx";

import { useCreateComment } from "./features/createComment.jsx";
import { Actions } from "./actions.jsx";

export function PostCard({ author, datetime, title, content, id }) {
  const { createCommentHandler, commentList } = useCreateComment(id);

  const {
    dialogDeleteRef,
    dialogEditRef,
    dialogCommentRef,
    dialogCommentListRef,
    openDeleteModal,
    openEditModal,
    openCommentModal,
    openCommentListModal,
  } = usePostModals();

  const dateFormated = formateDate(datetime);

  return (
    <>
      <div className="postcard">
        <header>
          <p className="author">{`@${author}`}</p>
          <Actions
            author={author}
            deleteOpenModal={openDeleteModal}
            editOpenModal={openEditModal}
            commentOpenModal={openCommentModal}
          />
        </header>
        <div className="postcard-content">
          <div className="postcard-infos">
            <h3>{title}</h3>
            <p className="datetime">{dateFormated}</p>
          </div>
          <p className="text-postcard">{content}</p>
          <div className="extra-actions">
            <LikeButton id={id} />
            <p className="see-comments" onClick={openCommentListModal}>
              See comments: {commentList.length}
            </p>
          </div>
        </div>
        <DeletePostModal id={id} dialogRef={dialogDeleteRef} />
        <EditPostModal
          id={id}
          dialogRef={dialogEditRef}
          title={title}
          content={content}
        />
        <CommentsModal
          dialogRef={dialogCommentRef}
          createCommentHandler={createCommentHandler}
          contentPost={content}
        />
        <CommentaryList
          commentList={commentList}
          dialogRef={dialogCommentListRef}
          title={title}
          author={author}
        />
      </div>
    </>
  );
}
