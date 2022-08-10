import {useState} from "react";
import { ApiClient } from "../../api.api-client";
import { ISignUp } from "../../../interface/signUp.interface";
import { IError } from "../../../interface/error.interface";

export const useSignUpService = () => {
  try {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<IError>({ message: '', statusCode: 0 });

    const signUp = async (signUpPayload: ISignUp) => {
      setLoading(true);
      try {
        const { data } = await ApiClient.post('/user/sign-up', signUpPayload);
        return data
      } catch (error: any) {
        setError(error?.response?.data)
      } finally {
        setLoading(false)
      }
    }

    return { signUp, loading, error };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
