import { Fragment, useState } from "react";
import styles from "../styles/PatternWrapper.module.scss";

export interface IPatternWrapper {
  name: string;
  quote: string[];
  component: React.ComponentType<{
    isStarted: boolean;
  }>;
}

export const PatternWrapper = ({ name, quote, component }: IPatternWrapper) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const handleClick = () => {
    setIsStarted(true);
  };

  const Pattern = component;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{name}</h1>
      {!isStarted && (
        <button className={styles.button} onClick={handleClick}>
          Click to start
        </button>
      )}
      <>
        <Pattern isStarted={isStarted} />
      </>
      <div className={styles.quote}>
        {quote.map((line) => (
          <Fragment key={line}>
            {line} <br /> <br />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
