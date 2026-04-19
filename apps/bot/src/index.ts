import { startClient } from "./core/client.ts";
import "./types/discord";

startClient().catch(console.error);
