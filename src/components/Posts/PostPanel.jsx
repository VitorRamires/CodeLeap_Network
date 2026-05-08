import { PostCreated } from "../Posts/PostCreated";
import { PostList } from "../Posts/PostList";
import { useUser } from "../../context/username";

export function PostPanel() {
  const { logout, username } = useUser();

  return (
    <>
      <section className="post-page">
        <header>
          <p>User: {username}</p>
          <div className="account">
            <button onClick={logout}>Sign off</button>
          </div>
        </header>
        <div className="content">
          <PostCreated />
          <PostList />
        </div>
      </section>
    </>
  );
}
