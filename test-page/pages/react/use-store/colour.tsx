import type { ReactElement } from "react";
import useStore from "../../../../src/react/use-store/use-store";

export default function Colour({
  colour,
  children,
}: {
  colour: string;
  children?: ReactElement;
}) {
  const [count, setCount] = useStore(colour, 0);

  return (
    <div className={`colour ${colour}`}>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Add {colour} count</button>
      {children}
    </div>
  );
}
