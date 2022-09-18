import React from "react";
import BasicInput from "../../ui/BasicInput.component";
import BasicTextarea from "../../ui/BasicTextarea.component";
import BasicButton from "../../ui/BasicButton.component";
import { PostDto } from "../../../dto/post.dto";

interface IAdminCreatePost {
  createPost: (post: PostDto) => Promise<any>
}

const CreatePost = ({ createPost }: IAdminCreatePost) => {
  const [post, setPost] = React.useState<PostDto>(
    { content: '', description: '', title: '' }
  )

  const handleCreatePost = async (post: PostDto) => {
    setPost({ content: '', description: '', title: '' })
    await createPost({
      title: post.title,
      content: post.content,
      description: post.description
    })
  }

  return (
    <div>
      <BasicInput
        type={'text'}
        placeholder={'Post title'}
        value={post.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, title: e.target.value })}
      />
      <BasicInput
        type={'text'}
        placeholder={'Post description'}
        value={post.description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, description: e.target.value })}
      />
      <div>
        <BasicTextarea
          value={post.content}
          placeholder={'Content'}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setPost({ ...post, content: e.target.value })}
        />
      </div>
      <BasicButton
        onClick={() => handleCreatePost({
          title: post.title,
          content: post.content,
          description: post.description
        })}
      >
        Post
      </BasicButton>
    </div>
  );
};

export default CreatePost;
