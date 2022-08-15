import React from 'react';
import MainLayout from "../../layouts/main.layout";
import BasicInput from "../../components/BasicInput.component";
import { IPost } from "../../interfaces/post.interface";
import { useGetPostService as UseGetPostService } from "../../services/post/useGetPost.service";
import { useCommentPostService } from "../../services/post/useCommentPost.service";
import { GetServerSideProps } from "next";
import { parseJwt } from "../../utils/verify-token.util";
import BasicButton from "../../components/BasicButton.component";

const Slug = ({ post }: { post: IPost }) => {
  const [isValidToken, setIsValidToken] = React.useState(false)
  const [comment, setComment] = React.useState('')

  const { commentPost } = useCommentPostService()

  const leaveComment = async () => {
    const response = await commentPost({ comment, postId: post.id });
  }

  const checkForPermissions = () => {
    const token = sessionStorage.getItem('_at')
    if (!token) return

    const parsedToken = parseJwt(token)
    if (!parsedToken.userId) return;

    setIsValidToken(true);
  }

  React.useEffect(() => {
    checkForPermissions()
  },[])

  return (
    <MainLayout>
      <div className={'w-full'}>
        <div className={'w-1/2 m-auto mt-12'}>
          <h1 className={'text-5xl font-extrabold'}>{post.title}</h1>
          <p className={'mt-12'}>{post.content}</p>
          {isValidToken ? (
            <>
              <BasicInput
                className={'w-full rounded mt-10 mb-3'}
                type={'text'}
                placeholder={'Comment...'}
                value={comment}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
              />
              <div className={'w-full flex'}>
                <BasicButton
                  className={'w-1/3 m-auto'}
                  onClick={() => leaveComment()}
                >Leave comment</BasicButton>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug: string = context.query.slug as string;
  const { getPost } = UseGetPostService();
  const post = await getPost(slug);

  return { props: { post } }
}

export default Slug;
