import { authHandlers } from "@/testing/mocks/handlers/auth";
import { jobHandlers } from "@/testing/mocks/handlers/jobs";
import { organizationHandlers } from "@/testing/mocks/handlers/organizations";
import { rest } from "msw";
import { API_URL } from "@/config/constants";

export const handlers = [
  ...authHandlers,
  ...jobHandlers,
  ...organizationHandlers,
  rest.get(`${API_URL}/healthcheck`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ healthy: true }));
  })
];