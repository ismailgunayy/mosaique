import { canvasHeight, canvasWidth } from "../../constants";
import {
  clearCanvas,
  drawText,
  getStartingPoints,
  sleep,
  steps,
} from "./utils";
import { createRef, useEffect, useState } from "react";

import { random } from "lodash";
import styles from "./style.module.scss";

const { A, B, C, randomPoint } = getStartingPoints();

export const ChaosTriangle = () => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  const [textCtx, setTextCtx] = useState<CanvasRenderingContext2D | null>();
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const canvasRef = createRef<HTMLCanvasElement>();
  const textCanvasRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    if (
      canvasRef.current?.getContext("2d") &&
      textCanvasRef.current?.getContext("2d")
    ) {
      setCtx(canvasRef.current.getContext("2d"));
      setTextCtx(textCanvasRef.current.getContext("2d"));
    }
  }, [canvasRef, textCanvasRef]);

  useEffect(() => {
    (async () => {
      if (ctx && textCtx && isStarted) {
        // At first, it's D which is the random point
        // Then it's the each middle point
        let lastPoint = randomPoint;

        const vertices = [A, B, C];

        // Drawing Layer
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#757575";
        ctx.fillStyle = "#AAAAAA";

        // Text Layer
        textCtx.textBaseline = "middle";
        textCtx.font = "18px sans-serif";
        textCtx.fillStyle = "white";

        // Draws triangle
        ctx.beginPath();
        ctx.moveTo(A[0], A[1]);
        ctx.lineTo(B[0], B[1]);
        ctx.lineTo(C[0], C[1]);
        ctx.closePath();
        ctx.stroke();
        await sleep(1000);

        // Draws the random point
        ctx.beginPath();
        ctx.arc(randomPoint[0], randomPoint[1], 4, 0, Math.PI * 2);
        ctx.fill();
        await sleep(250);

        drawText(textCtx, steps[0], lastPoint);
        await sleep(3000);
        clearCanvas(textCtx);

        const drawPoint = (times = 23) => {
          for (let i = 0; i < times; i++) {
            const vertex = vertices[random(0, 2, false)];
            const middle = [
              (vertex[0] + lastPoint[0]) / 2,
              (vertex[1] + lastPoint[1]) / 2,
            ];

            ctx.beginPath();
            ctx.arc(middle[0], middle[1], 1, 0, Math.PI * 2);
            ctx.fill();

            lastPoint = middle;
          }
        };

        // Step 1
        drawPoint(1);
        await sleep(250);
        drawText(textCtx, steps[1], lastPoint);
        await sleep(3000);
        clearCanvas(textCtx);

        // Step 2
        drawPoint(1);
        await sleep(250);
        drawText(textCtx, steps[2], lastPoint);
        await sleep(3000);
        clearCanvas(textCtx);

        // Loop for drawing points with decreasing waiting times
        for (let i = 1; i < 750; i++) {
          drawPoint(1);
          await sleep(750 / i);
        }

        drawText(textCtx, "Remove the first point", randomPoint);
        await sleep(1500);
        ctx.clearRect(randomPoint[0] - 5, randomPoint[1] - 5, 10, 10);
        clearCanvas(textCtx);
        await sleep(500);

        // Draw the whole shape
        setInterval(drawPoint, 0);
      }
    })();
  }, [ctx, textCtx, isStarted]);

  const handleClick = () => {
    setIsStarted(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Chaos Triangle</h1>
      {!isStarted && (
        <button className={styles.button} onClick={handleClick}>
          Click to start
        </button>
      )}
      <div className={styles.canvasContainer}>
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className={styles.canvas}
        ></canvas>
        <canvas
          ref={textCanvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className={styles.canvas}
        ></canvas>
      </div>
      <div className={styles.quote}>
        Each unpredictable step, though seemingly chaotic, carries the potential
        to shape something greater.
        <br />
        <br />
        The strength lies in repetition—through relentless cycles, order and
        beauty emerge from chaos.
      </div>
    </div>
  );
};
