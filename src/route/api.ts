import { Hono } from "hono";
import chats from "../api/chats";

const api = new Hono();

api.route("/v1/chats", chats);

export default api;
