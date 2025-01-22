import Home from "./components/Home";
import { PatternWrapper } from "./components/PatternWrapper";
import ChaosTriangle from "./patterns/ChaosTriangle";

type TRoute = {
  path: string;
  element: React.ReactNode;
};

export const routes: TRoute[] = [
  { path: "/", element: <Home /> },
  {
    path: "/chaos-triangle",
    element: (
      <PatternWrapper
        name="Chaos Triangle"
        quote={[
          "Each unpredictable step, though seemingly chaotic, carries the potential  to shape something greater.",
          "The strength lies in repetition—through relentless cycles, order and beauty emerge from chaos.",
        ]}
        component={ChaosTriangle}
      />
    ),
  },
];
