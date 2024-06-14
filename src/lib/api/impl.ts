import { AxiosInstance } from "axios";

export abstract class Api {
  abstract path: string;

  constructor(protected axios: AxiosInstance) {}

  protected buildPath(...args: any[]) {
    return this.path + "/" + args.join("/");
  }
}
