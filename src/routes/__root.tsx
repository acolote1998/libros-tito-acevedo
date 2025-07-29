import { createRootRoute, Outlet } from "@tanstack/react-router";
import FooterBar from "../components/FooterBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <FooterBar />
      <Outlet />
    </>
  ),
});
