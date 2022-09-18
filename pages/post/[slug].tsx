import React from 'react';
import MainLayout from "@layouts/main.layout";
import BasicInput from "@components/ui/BasicInput.component";
import BasicButton from "@components/ui/BasicButton.component";
import { useGetPostService as UseGetPostService } from "@services/post/one/getPost.service";
import { useCommentPostService } from "@services/post/comment/commentPost.service";
import { GetServerSideProps } from "next";
import { parseJwt } from "@utils/verify-token.util";
import { IFullPost } from "@interfaces/full-post.interface";
import { useRouter } from "next/router";

const Slug = ({ post, postComments }: IFullPost) => {
  const [isValidToken, setIsValidToken] = React.useState(false)
  const [comment, setComment] = React.useState('')

  const router = useRouter()

  const handleRedirect = (path: string) => {
    return router.push(path)
  }

  const { commentPost } = useCommentPostService()

  const leaveComment = async () => {
    await commentPost({
      comment: {
        postId: post.id,
        comment
      }, accessToken: sessionStorage.getItem('_at')
    });
    router.reload()
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
      <div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <div>
            {postComments.length ? (
              <>
                {postComments.map(post => (
                  <div
                    key={post.comment}
                  >
                    <p>By <span>{post["user.email"]}</span></p>
                    <p>{post.comment}</p>
                  </div>
                ))}
              </>
            ) :
            <h1
            >No comments yet. Wanna tell something? Go on, then!
            </h1>}
            {!isValidToken ? (
              <h1>But&nbsp;
                <span
                  onClick={() => handleRedirect('/sign-in')}
                >sign in</span> or&nbsp;
                <span
                  onClick={() => handleRedirect('/sign-up')}
                >sign up</span> first!</h1>
            ) : null}
          </div>
          {isValidToken ? (
            <>
              <BasicInput
                type={'text'}
                placeholder={'Comment...'}
                value={comment}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
              />
              <div>
                <BasicButton
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
  const { post, postComments } = await getPost({ slug });

  return { props: { post, postComments } }
}

export default Slug;
