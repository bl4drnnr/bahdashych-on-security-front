import axios, { AxiosError } from "axios";
import { ApiException } from "@exceptions/ApiException.exception";
import { GeneralException } from "@exceptions/GeneralException.exception";

export const handleApiException = (error: Error) => {
  if (axios.isAxiosError(error)) {
    throw new ApiException(
      error.response.data.message.statusCode,
      error.response.data.message.message,
      error.response.data.message.error,
    );
  }
  throw new GeneralException(error.message);
};
