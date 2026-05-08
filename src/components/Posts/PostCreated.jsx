import { useState } from "react";
import { useCreatePost } from "./features/createPost";

export function PostCreated() {
  const { handlePostCreation, setPostContent, postContent } = useCreatePost();
  const [isDisabled, setIsDisabled] = useState(true);

  function handleChangeForm(event) {
    const { id, value } = event.target;
    const updatedContent = { ...postContent, [id]: value };

    setPostContent(updatedContent);
    setIsDisabled(!updatedContent.title || !updatedContent.content);
  }

  return (
    <>
      <h2 className="apresentation-title">What’s on your mind?</h2>
      <section className="postCreated">
        <form onSubmit={handlePostCreation}>
          <div className="postCreated-item title-post">
            <label htmlFor="title">Post title</label>
            <input
              value={postContent.title}
              id="title"
              type="text"
              onChange={handleChangeForm}
            />
          </div>

          <div className="postCreated-item content-post">
            <label htmlFor="content">Post content</label>
            <textarea
              value={postContent.content}
              id="content"
              onChange={handleChangeForm}
            />
          </div>

          <button
            disabled={isDisabled}
            className={!isDisabled ? "" : "disabled"}
            type="submit"
          >
            Reply
          </button>
        </form>
      </section>
    </>
  );
}
