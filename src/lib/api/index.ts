import axios from "axios";

import { SwapApi } from "./swap.api";
import { MintApi } from "./mint.api";
import { ImageKitApi } from "./imagekit.api";
import { BASE_API_URL } from "@/config";

export default class Api {
  readonly mint: MintApi;
  readonly imagekit: ImageKitApi;
  readonly swap: SwapApi;

  constructor() {
    const axiosInstance = axios.create({
      baseURL: BASE_API_URL,
    });

    this.mint = new MintApi(axiosInstance);
    this.swap = new SwapApi(axiosInstance);
    this.imagekit = new ImageKitApi(axiosInstance);
  }

  private static _instance: Api;

  static get instance() {
    if (!Api._instance) Api._instance = new Api();

    return Api._instance;
  }
}
