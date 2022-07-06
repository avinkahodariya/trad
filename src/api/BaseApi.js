import axios from "axios";

class BaseApi {
    
  static BASE_URL = "http://localhost:8080/api/v1";
  static instance = axios.create({ baseURL: this.BASE_URL});

  static doGet = async (url, params = null, data = null) => {
    try {
      const response = await this.instance.get(
        url,
        { params: params },
        data
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw Error(response.statusText);
      }
    } catch (error) {
      throw error;
    }
  };

  static doPost = async (url, data, isMultipart = false) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const configOptions = isMultipart ? config : null;
      const response = await this.instance.post(url, data, configOptions);
      if (response.status === 200) {
        return response.data;
      } else {
        throw Error(response.statusText);
      }
    } catch (error) {
      throw error;
    }
  };

  static doDelete = async (url, params) => {
    try {
      const response = await this.instance.delete(url, { params: params });
      if (response.status === 200) {
        return response.data;
      } else {
        throw Error(response.statusText);
      }
    } catch (error) {
      throw error;
    }
  };
}

export default BaseApi;
