export function PostCard() {
  return (
    <>
      <div className="postcard">
        <header>
          <h3>My First PostCard</h3>
          <div className="actions">
            <span>Delete</span>
            <span>Edit</span>
          </div>
        </header>
        <div className="postcard-content">
          <div className="postcard-infos">
            <p className="author">@Author</p>
            <p  className="datetime">25 minutes later</p>
          </div>
          <p className="text-postcard">
            Curabitur suscipit suscipit tellus. Phasellus consectetuer
            vestibulum elit. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Maecenas egestas arcu
            quis ligula mattis placerat. Duis vel nibh at velit scelerisque
            suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor
            sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna
            dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus
            lacinia erat.
          </p>
        </div>
      </div>
    </>
  );
}
