import axios, { AxiosResponse } from "axios";

import { FormData } from "./types";
import { SendDataResponse } from "./types";

export const sendData = async (
  formData: FormData
): Promise<SendDataResponse | unknown> => {
  try {
    const response: AxiosResponse<SendDataResponse> = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL_PROD}api/users`,
      formData
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
