import { PostCreated } from "../Posts/PostCreated";
import { PostList } from "../Posts/PostList";

export function PostPanel() {
  return (
    <>
      <section className="post-page">
        <header>
          <h2>CodeLeap Network</h2>
        </header>
        <div className="content">
          <PostCreated />
          <PostList />
        </div>
      </section>
    </>
  );
}
