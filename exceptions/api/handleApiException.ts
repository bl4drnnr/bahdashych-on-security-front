import axios  from "axios";
import { ApiException } from "@exceptions/ApiException.exception";

export const handleApiException = (error: Error) => {
  if (axios.isAxiosError(error)) {
    throw new ApiException(
      // @ts-ignore
      error.response.data.message.message,
      // @ts-ignore
      error.response.data.message.message,
      // @ts-ignore
      error.response.data.message.error,
    );
  }
};
