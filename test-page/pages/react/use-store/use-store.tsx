import useStore from "../../../../src/react/use-store/use-store";
import Colour from "./colour";

function UseStorePage() {
  const [count, setCount] = useStore("count", 0);

  return (
    <>
      <div className="main">
        <div>count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Add main count</button>
        <div className="colours">
          <div className="left">
            <Colour colour="red">
              <>
                <Colour colour="yellow" />
                <Colour colour="green">
                  <Colour colour="orange" />
                </Colour>
              </>
            </Colour>
          </div>
          <div className="right">
            <Colour colour="yellow" />
            <Colour colour="red" />
            <Colour colour="orange" />
            <Colour colour="green" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UseStorePage;
