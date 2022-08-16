import React from "react";
import BasicInput from "../ui/BasicInput.component";
import BasicTextarea from "../ui/BasicTextarea.component";
import BasicButton from "../ui/BasicButton.component";
import { useCreatePostService } from "../../services/post/useCreatePost.service";

const AdminPost = () => {
  const [postTitle, setPostTitle] = React.useState('')
  const [postDescription, setPostDescription] = React.useState('')
  const [postContent, setPostContent] = React.useState('')

  const { createPost } = useCreatePostService()

  const post = async () => {
    await createPost({
      title: postTitle,
      description: postDescription,
      content: postContent
    }, sessionStorage.getItem('_at'))
  }

  return (
    <div className={'w-full mt-10'}>
      <BasicInput
        className={'w-1/3 m-auto rounded'}
        type={'text'}
        placeholder={'Post title'}
        value={postTitle}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPostTitle(e.target.value)}
      />
      <BasicInput
        className={'w-1/3 m-auto rounded mt-3'}
        type={'text'}
        placeholder={'Post description'}
        value={postDescription}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPostDescription(e.target.value)}
      />
      <div className={'w-1/3 m-auto mt-3'}>
        <BasicTextarea
          value={postContent}
          placeholder={'Content'}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setPostContent(e.target.value)}
        />
      </div>
      <BasicButton
        onClick={() => post()}
        className={'w-1/3 m-auto mt-3'}
      >
        Post
      </BasicButton>
    </div>
  );
};

export default AdminPost;
