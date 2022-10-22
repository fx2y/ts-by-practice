import { API_URL } from "@/config/constants";
import { AUTH_COOKIE, authenticate, requireAuth } from "@/testing/mocks/utils";
import { rest } from "msw";

const loginHandler = rest.post(
  `${API_URL}/auth/login`, async (req, res, ctx) => {
    const credentials = await req.json();
    const { user, jwt } = authenticate(credentials);

    return res(
      ctx.delay(300),
      ctx.cookie(AUTH_COOKIE, jwt, {
        path: "/",
        httpOnly: true
      }),
      ctx.json({ user })
    );
  }
);

const logoutHandler = rest.post(`${API_URL}/auth/logout`, async (req, res, ctx) => {
    return res(
      ctx.delay(300),
      ctx.cookie(AUTH_COOKIE, "", {
        path: "/",
        httpOnly: true
      }),
      ctx.json({ success: true })
    );
  }
);

const meHandler = rest.get(
  `${API_URL}/auth/me`, async (req, res, ctx) => {
    const user = requireAuth({ req, shouldThrow: false });
    return res(ctx.delay(300), ctx.json(user));
  }
);

export const authHandlers = [loginHandler, logoutHandler, meHandler];