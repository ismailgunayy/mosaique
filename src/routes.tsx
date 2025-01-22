import Home from "./components/Home";
import { PatternWrapper } from "./components/PatternWrapper";
import { patterns } from "./patterns/patterns";
import { generatePath } from "./utils/generatePath";

type TRoute = {
  path: string;
  name: string;
  element: React.ReactNode;
};

export const routes: TRoute[] = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  ...patterns.map((pattern) => ({
    path: generatePath(pattern.name),
    name: pattern.name,
    element: <PatternWrapper {...pattern} />,
  })),
];
