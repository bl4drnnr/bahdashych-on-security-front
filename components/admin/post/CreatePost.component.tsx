import React from "react";
import BasicInput from "../../ui/BasicInput.component";
import BasicTextarea from "../../ui/BasicTextarea.component";
import BasicButton from "../../ui/BasicButton.component";
import { IPost } from "../../../models/post.interface";

interface IAdminCreatePost {
  createPost: (post: IPost) => Promise<any>
}

const CreatePost = ({ createPost }: IAdminCreatePost) => {
  const [post, setPost] = React.useState<IPost>(
    { content: '', description: '', title: '' }
  )

  const handleCreatePost = async (post: IPost) => {
    setPost({ content: '', description: '', title: '' })
    await createPost({
      title: post.title,
      content: post.content,
      description: post.description
    })
  }

  return (
    <div className={'w-full mt-10'}>
      <BasicInput
        className={'w-1/3 m-auto rounded'}
        type={'text'}
        placeholder={'Post title'}
        value={post.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, title: e.target.value })}
      />
      <BasicInput
        className={'w-1/3 m-auto rounded mt-3'}
        type={'text'}
        placeholder={'Post description'}
        value={post.description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, description: e.target.value })}
      />
      <div className={'w-1/3 m-auto mt-3'}>
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
        className={'w-1/3 m-auto mt-3'}
      >
        Post
      </BasicButton>
    </div>
  );
};

export default CreatePost;
