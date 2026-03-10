import { useState } from "react";
import { createPost, getPosts } from "../../../DATA.JS";
import { useUser } from "../../../context/username";

export function useCreatePost() {
  const { username } = useUser();

  const [postContent, setPostContent] = useState({
    username: username,
    title: "",
    content: "",
  });

  async function handlePostCreation(event) {
    event.preventDefault();
    const { title, content } = postContent;
    await createPost(username, title, content);

    const posts = await getPosts();
    console.log(posts);
  }

  return { handlePostCreation, setPostContent };
}
