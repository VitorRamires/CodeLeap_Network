import { useContext, useState } from "react";
import { createPost } from "../../../DATA.JS";
import { useUser } from "../../../context/username";
import { ListPostContext } from "../../../context/postslists";

export function useCreatePost() {
  const { username } = useUser();
  const { setPostsList, setOffset } = useContext(ListPostContext);
  const [postContent, setPostContent] = useState({
    username: username,
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState();

  async function handlePostCreation(event) {
    event.preventDefault();

    const { title, content } = postContent;

    if (!title.trim() || !content.trim()) {
      return;
    }

    setIsLoading(true);

    try {
      const newPost = await createPost(username, title, content);

      if (!newPost?.id) {
        throw new Error("Erro ao criar o post.");
      }

      setPostsList((prev) => [newPost, ...prev]);
      setOffset((prev) => prev + 1);
      setPostContent((prev) => ({ ...prev, title: "", content: "" }));
    } catch (error) {
      console.error("Erro em handlePostCreation:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return { handlePostCreation, setPostContent, postContent, isLoading };
}
