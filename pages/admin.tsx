import React from "react";
import MainLayout from "../layouts/main.layout";
import BasicInput from "../components/BasicInput.component";
import BasicTextarea from "../components/BasicTextarea.component";
import BasicButton from "../components/BasicButton.component";
import { parseJwt } from "../utils/verify-token.util";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useCreatePostService } from "../services/post/useCreatePost.service";

const Admin: NextPage = () => {
  const [postTitle, setPostTitle] = React.useState('')
  const [postDescription, setPostDescription] = React.useState('')
  const [postContent, setPostContent] = React.useState('')

  const router = useRouter()
  const { createPost } = useCreatePostService()

  const handleRedirect = (path: string) => {
    return router.push(path)
  }

  const post = async () => {
    await createPost({
      title: postTitle,
      description: postDescription,
      content: postContent
    }, sessionStorage.getItem('_at'))
  }

  const checkForPermissions = async () => {
    const token = sessionStorage.getItem('_at')
    if (!token) return await handleRedirect('/')

    const parsedToken = parseJwt(token);
    const isAdmin = parsedToken.roles.find((role) => role.value === 'ADMIN')
    if (!isAdmin) return await handleRedirect('/')
  }

  React.useEffect(() => {
    checkForPermissions().then()
  }, [])

  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default Admin;
