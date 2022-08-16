import { NextPage } from 'next';
import React  from "react";
import Link from "next/link";
import BasicInput from "../components/BasicInput.component";
import BasicButton from "../components/BasicButton.component";
import Loader from "../components/Loader.component";
import ErrorBox from "../components/ErrorBox.component";
import { useSignUpService } from "../services/user/useSignUp.service";
import { useRouter } from 'next/router'

const SignUp: NextPage = () => {
  const [signUpPayload, setSignUpPayload] = React.useState({
    email: '', username: '', password: '', passwordRepeat: '', firstName: '', lastName: ''
  });
  const [successSignUp, setSuccessSignUp] = React.useState(false);
  const router = useRouter()
  const { signUp, loading, error, setError } = useSignUpService();

  const handleSignUp = async () => {
    if (signUpPayload.password !== signUpPayload.passwordRepeat)
      setError({ ...error, message: ['Password mismatch'] })

    const data = await signUp(signUpPayload);
    if (data) setSuccessSignUp(true)
  };

  return (
    <>
      {loading ? <Loader/> : null}
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <Link href={'/'}>
              <img
                className='mx-auto h-12 w-auto hover:cursor-pointer'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt='Workflow'
              />
            </Link>
            {!successSignUp ? (
              <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>New one? Welcome!</h2>
            ): (
              <>
                <h3 className="mt-6 mb-6 text-center text-2xl font-extrabold text-gray-900">Welcome, @username, here you go!</h3>
                <BasicButton onClick={() => {return router.push("/sign-in")}}>Sign in</BasicButton>
              </>
            )}
          </div>
        {!successSignUp ? (
          <>
            <div className="rounded-md shadow-sm -space-y-px">
              <BasicInput
                type="email"
                placeholder="Email address"
                value={signUpPayload.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                  ...signUpPayload,
                  email: e.target.value
                })}
                className={"w-full rounded-t-md"} />
              <BasicInput
                type="text"
                placeholder="Username"
                value={signUpPayload.username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                  ...signUpPayload,
                  username: e.target.value
                })}
                className={"w-full"} />
              <BasicInput
                type="password"
                placeholder="Password"
                value={signUpPayload.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                  ...signUpPayload,
                  password: e.target.value
                })}
                className={"w-full"} />
              <BasicInput
                type="password"
                placeholder="Password repeat"
                value={signUpPayload.passwordRepeat}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                  ...signUpPayload,
                  passwordRepeat: e.target.value
                })}
                className={"w-full rounded-b-md"} />
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <BasicInput
                type="text"
                placeholder="First name (optional)"
                value={signUpPayload.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                  ...signUpPayload,
                  firstName: e.target.value
                })}
                className={"w-full rounded-t-md"} />
              <BasicInput
                type="text"
                placeholder="Last name (optional)"
                value={signUpPayload.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                  ...signUpPayload,
                  lastName: e.target.value
                })}
                className={"w-full rounded-b-md"} />
            </div>
          </>
        ) : null}


        {error.message && error.message.length ? (
          <ErrorBox
            close={() => setError({ ...error, message: [] })}
            error={error.message}
          />
        ) : null}

        {!successSignUp ? (
          <BasicButton
            onClick={() => handleSignUp()}
          >
            Sign up
          </BasicButton>
        ) : null}
        </div>
      </div>
    </>
  );
};

export default SignUp;
