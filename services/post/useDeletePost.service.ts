import { ApiClient } from "../api.api-client";

export const useDeletePostService = () => {
  try {
    const deletePost = async (id: string, accessToken: string | null) => {
      const { data } = await ApiClient.get<number>(`/post/delete/${id}`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      });

      return data;
    }

    return { deletePost };
  } catch (error: any) {
    throw Error(error?.message as string)
  }
}
