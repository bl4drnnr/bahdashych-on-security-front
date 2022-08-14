import { ApiClient } from "../api.api-client";
import { IPosts } from "../../interfaces/posts.interface";

export const useGetPostsService = () => {
  try {
    // const [loading, setLoading] = React.useState(false);
    // const [error, setError] = React.useState<IError>({ message: [], statusCode: 0 });

    const getPosts = async (
      { offset, limit, from, to } :
      { offset: string, limit: string, from: string, to: string }
    ) => {
      try {
        const { data } = await ApiClient.get<IPosts>(`/post/list/${offset}/${limit}/${from}/${to}`)
        return data;
      } catch (error: any) {
        // setError(error?.response?.message || error?.response?.data)
      } finally {
        // setLoading(false);
      }
    }

    return { getPosts };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
