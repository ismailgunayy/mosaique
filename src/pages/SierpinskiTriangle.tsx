import { createRef, useEffect, useState } from "react";

import { random } from "lodash";
import styles from "./SierpinskiTriangle.module.scss";

const canvasWidth = 750;
const canvasHeight = 750;

const A = [canvasWidth / 2, 75];
const B = [25, canvasHeight - 25];
const C = [canvasWidth - 25, canvasHeight - 25];

// const A = [Math.random() * canvasWidth, Math.random() * canvasHeight];
// const B = [Math.random() * canvasWidth, Math.random() * canvasHeight];
// const C = [Math.random() * canvasWidth, Math.random() * canvasHeight];

const getRandomPointInTriangle = (A: number[], B: number[], C: number[]) => {
  let u = Math.random();
  let v = Math.random();

  if (u + v > 1) {
    u = 1 - u;
    v = 1 - v;
  }

  const x = (1 - u - v) * A[0] + u * B[0] + v * C[0];
  const y = (1 - u - v) * A[1] + u * B[1] + v * C[1];

  return [x, y];
};

const SierpinskiTriangle = () => {
  const canvasRef = createRef<HTMLCanvasElement>();
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();

  useEffect(() => {
    if (canvasRef.current?.getContext("2d")) {
      setCtx(canvasRef.current.getContext("2d"));
    }
  }, [canvasRef]);

  useEffect(() => {
    if (ctx) {
      const randomPoint = getRandomPointInTriangle(A, B, C);

      const vertices = [A, B, C];

      ctx.strokeStyle = "white";
      ctx.fillStyle = "white";

      ctx.beginPath();
      ctx.moveTo(A[0], A[1]);
      ctx.lineTo(B[0], B[1]);
      ctx.lineTo(C[0], C[1]);
      ctx.closePath();

      ctx.lineWidth = 6;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(randomPoint[0], randomPoint[1], 0, 0, Math.PI * 2);
      ctx.fill();

      let lastPoint = randomPoint;

      const drawPoint = () => {
        const vertex = vertices[random(0, 2, false)];
        const middle = [
          (vertex[0] + lastPoint[0]) / 2,
          (vertex[1] + lastPoint[1]) / 2,
        ];

        ctx.beginPath();
        ctx.arc(middle[0], middle[1], 2, 0, Math.PI * 2);
        ctx.fill();

        lastPoint = middle;
      };

      setInterval(drawPoint, 0);
    }
  }, [ctx]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Sierpiński Triangle</h1>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
      ></canvas>
      <div className={styles.info}>
        The Sierpiński triangle is a fractal with the overall shape of an
        equilateral triangle, subdivided recursively into smaller equilateral
        triangles.
      </div>
    </div>
  );
};

export default SierpinskiTriangle;
