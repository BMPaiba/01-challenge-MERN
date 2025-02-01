import { MernApi } from "@/lib/api/axios";

export const postLoginApi = async (data: any) => {
  try {
    const response = await MernApi.post("/auth/login", data);
    console.log({response: response.data})
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
