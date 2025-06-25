import { canvasHeight, canvasWidth, maxCanvasHeight } from "../../utils/constants";

export const steps = [
	"Pick a random point inside the triangle",
	"Move halfway toward a random vertex",
	"Repeat the process"
];

// This function ensures the random points stay away from the edges
// by generating a smaller inset triangle from which to pick the random point
const getInsetTriangle = (A: number[], B: number[], C: number[], factor: number) => {
	const centroid = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];

	const scalePoint = (point: number[]) => [
		factor * point[0] + (1 - factor) * centroid[0],
		factor * point[1] + (1 - factor) * centroid[1]
	];

	return [scalePoint(A), scalePoint(B), scalePoint(C)];
};

export const getRandomPointInTriangle = (factor: number) => {
	const [AInset, BInset, CInset] = getInsetTriangle(A, B, C, factor);

	let u = Math.random();
	let v = Math.random();

	if (u + v > 1) {
		u = 1 - u;
		v = 1 - v;
	}

	const x = (1 - u - v) * AInset[0] + u * BInset[0] + v * CInset[0];
	const y = (1 - u - v) * AInset[1] + u * BInset[1] + v * CInset[1];

	return [x, y];
};

// Centered points
const A = [canvasWidth / 2, 75];
const B = [Math.max(canvasWidth / 2 - 350, 25), Math.min(canvasHeight - 25, maxCanvasHeight - 25)];
const C = [Math.min(canvasWidth / 2 + 350, canvasWidth - 25), Math.min(canvasHeight - 25, maxCanvasHeight - 25)];

// Returns the three vertices and a random point
export const getStartingPoints = () => {
	return {
		A,
		B,
		C,
		randomPoint: getRandomPointInTriangle(0.4)
	};
};

export const drawText = (ctx: CanvasRenderingContext2D, text: string, point: number[]) => {
	const textObj = ctx.measureText(text);
	ctx.fillText(text, point[0] - textObj.width / 2, point[1] - 24);
};

export const clearCanvas = (ctx: CanvasRenderingContext2D) => {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
};

export const sleep = async (ms: number) => {
	await new Promise((res) => setTimeout(res, ms));
};
