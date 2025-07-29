import {
  createRootRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import FooterBar from "../components/FooterBar";
import HeaderBar from "../components/HeaderBar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      {/* Show FooterBar on all routes except `/` */}
      {pathname !== "/" && <HeaderBar />}
      {pathname !== "/" && <FooterBar />}
      <Outlet />
    </>
  );
}
