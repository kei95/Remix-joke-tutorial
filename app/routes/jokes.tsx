import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function JakeRoute() {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
