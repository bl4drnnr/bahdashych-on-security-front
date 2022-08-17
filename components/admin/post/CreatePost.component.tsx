import React from "react";
import BasicInput from "../../ui/BasicInput.component";
import BasicTextarea from "../../ui/BasicTextarea.component";
import BasicButton from "../../ui/BasicButton.component";
import { IPost } from "../../../models/post.interface";

interface IAdminCreatePost {
  createPost: (post: IPost) => Promise<void>
}

const CreatePost = ({ createPost }: IAdminCreatePost) => {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [content, setContent] = React.useState('')

  return (
    <div className={'w-full mt-10'}>
      <BasicInput
        className={'w-1/3 m-auto rounded'}
        type={'text'}
        placeholder={'Post title'}
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)}
      />
      <BasicInput
        className={'w-1/3 m-auto rounded mt-3'}
        type={'text'}
        placeholder={'Post description'}
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)}
      />
      <div className={'w-1/3 m-auto mt-3'}>
        <BasicTextarea
          value={content}
          placeholder={'Content'}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)}
        />
      </div>
      <BasicButton
        onClick={() => createPost({ title, content, description })}
        className={'w-1/3 m-auto mt-3'}
      >
        Post
      </BasicButton>
    </div>
  );
};

export default CreatePost;
