import { NextPage } from 'next';
import React from "react";
import styles from "@styles/pages/sign-in.module.scss"
import BasicButton from '@components/ui/BasicButton.component';
import BasicInput from '@components/ui/BasicInput.component';
import Loader from "@components/ui/Loader.component";
import AuthLayout from "@layouts/auth.layout";
import { useSignInService } from "@services/user/sign-in/signIn.service";
import { useRouter } from "next/router";

const SignIn: NextPage = () => {
  const [signInPayload, setSignInPayload] = React.useState({ email: '', password: '' })

  const { signIn, loading } = useSignInService();
  const router = useRouter()

  const handleSignIn = async () => {
    const { _at } = await signIn(signInPayload);
    if (_at) {
      sessionStorage.setItem("_at", _at);
      return router.push("/");
    }
  };

  return (
    <AuthLayout>
      <>
        {loading ? <Loader/> : null}
        <div className={styles.wrapper}>

          <h2 className={styles.text}>Welcome back!</h2>

          <div className={styles.inputs}>
            <BasicInput
              type='email'
              placeholder='Email address'
              value={signInPayload.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSignInPayload({ ...signInPayload, email: e.target.value })}
            />
            <BasicInput
              type='password'
              placeholder='Password'
              value={signInPayload.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSignInPayload({ ...signInPayload, password: e.target.value })}
            />
          </div>

          <BasicButton
            onClick={() => handleSignIn()}
          >
            Sign in
          </BasicButton>

        </div>
      </>
    </AuthLayout>
  )
}

export default SignIn;
