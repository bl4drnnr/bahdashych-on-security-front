import { NextPage } from 'next';
import React  from "react";
import BasicInput from "@components/ui/BasicInput.component";
import BasicButton from "@components/ui/BasicButton.component";
import Loader from "@components/ui/Loader.component";
import AuthLayout from "@layouts/auth.layout";
import styles from "@styles/pages/sign-up.module.scss";
import { useSignUpService } from "@services/user/sign-up/signUp.service";
import { useRouter } from 'next/router'
import { SignUpDto } from "@dto/sign-up.dto";

const SignUp: NextPage = () => {
  const [signUpPayload, setSignUpPayload] = React.useState<SignUpDto>({
    email: '', username: '', password: '', passwordRepeat: '', firstName: '', lastName: ''
  });
  const [successSignUp, setSuccessSignUp] = React.useState(false);
  const router = useRouter()
  const { signUp, loading } = useSignUpService();

  const handleSignUp = async () => {
    if (signUpPayload.password !== signUpPayload.passwordRepeat)
      return

    const data = await signUp(signUpPayload);
    if (data) setSuccessSignUp(true)
  };

  return (
    <AuthLayout>
      <>
        {loading ? <Loader/> : null}
        <div className={styles.wrapper}>
          {!successSignUp ? (
            <h2 className={styles.text}>New one? Welcome!</h2>
          ): (
            <>
              <h3 className={styles.text}>Welcome, @username, here you go!</h3>
              <BasicButton onClick={() => {return router.push("/sign-in")}}>Sign in</BasicButton>
            </>
          )}
          {!successSignUp ? (
            <div>
              <div>
                <BasicInput
                  type="email"
                  placeholder="Email address"
                  value={signUpPayload.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                    ...signUpPayload,
                    email: e.target.value
                  })}
                />
                <BasicInput
                  type="text"
                  placeholder="Username"
                  value={signUpPayload.username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                    ...signUpPayload,
                    username: e.target.value
                  })}
                />
                <BasicInput
                  type="password"
                  placeholder="Password"
                  value={signUpPayload.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                    ...signUpPayload,
                    password: e.target.value
                  })}
                />
                <BasicInput
                  type="password"
                  placeholder="Password repeat"
                  value={signUpPayload.passwordRepeat}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                    ...signUpPayload,
                    passwordRepeat: e.target.value
                  })}
                />
              </div>
              <div>
                <BasicInput
                  type="text"
                  placeholder="First name (optional)"
                  value={signUpPayload.firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                    ...signUpPayload,
                    firstName: e.target.value
                  })}
                />
                <BasicInput
                  type="text"
                  placeholder="Last name (optional)"
                  value={signUpPayload.lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpPayload({
                    ...signUpPayload,
                    lastName: e.target.value
                  })}
                />
              </div>
            </div>
          ) : null}

          {!successSignUp ? (
            <BasicButton
              onClick={() => handleSignUp()}
            >
              Sign up
            </BasicButton>
          ) : null}
        </div>
      </>
    </AuthLayout>
  );
};

export default SignUp;
