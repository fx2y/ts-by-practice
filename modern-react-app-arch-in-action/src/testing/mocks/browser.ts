import { handlers } from "@/testing/mocks/handlers";
import { setupWorker } from "msw";

export const worker = setupWorker(...handlers);