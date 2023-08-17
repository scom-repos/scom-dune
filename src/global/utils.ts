import { IFetchProjectBlockWidgetsResult } from "./interfaces";

const API_URL = "/api/embed/v0";
export async function fetchProjectBlockWidgets() {
    let result: IFetchProjectBlockWidgetsResult;
    try {
      let response = await fetch(`${API_URL}/projectBlockWidgets`);
      result = await response.json();
    } catch (err) {
      console.error("[fetchProjectBlockWidgets] error: ", err);
    }
    return result;
}