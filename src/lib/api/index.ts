import axios from "axios";
import { ImageKitApi } from "./imagekit.api";

export default class Api {
  readonly imagekit: ImageKitApi;

  constructor() {
    const axiosInstance = axios.create({
      baseURL: "",
    });

    this.imagekit = new ImageKitApi(axios);
  }

  private static _instance: Api;

  static get instance() {
    if (!Api._instance) Api._instance = new Api();

    return Api._instance;
  }
}
