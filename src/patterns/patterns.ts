import { IPatternWrapper } from "../components/PatternWrapper";
import SierpinskiTriangle from "./SierpinskiTriangle";

export const patterns: IPatternWrapper[] = [
	{
		name: "Sierpinski Triangle",
		quote: [
			"Each unpredictable step, though seemingly chaotic, carries the potential  to shape something greater.",
			"The strength lies in repetition—through relentless cycles, order and beauty emerge from chaos."
		],
		component: SierpinskiTriangle
	}
];
