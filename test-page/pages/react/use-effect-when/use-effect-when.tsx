import { useState } from "react";
import useEffectOnChange from "../../../../src/react/use-effect-when/use-effect-when";

function UseEffectWhenPage() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  const [sum, setSum] = useState(0);

  useEffectOnChange(() => {
    setSum(countA + countB + countC);
  }, [countC]);

  return (
    <>
      <button onClick={() => setCountA(countA + 1)}>
        increment A {countA}
      </button>
      <button onClick={() => setCountB(countB + 1)}>
        increment B {countB}
      </button>
      <button onClick={() => setCountC(countC + 1)}>
        increment C {countC}
      </button>
      <div>sum: {sum}</div>
    </>
  );
}

export default UseEffectWhenPage;
