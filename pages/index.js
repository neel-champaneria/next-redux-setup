import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import {
  firstIncrementCounter,
  firstDecrementCounter,
} from "./../redux/actions/firstCountActions";
import {
  secondIncrementCounter,
  secondDecrementCounter,
} from "./../redux/actions/secondCountActions";

export default function Home() {
  const firstCounter = useSelector((state) => state.firstCountReducer.count);
  const secondCounter = useSelector((state) => state.secondCountReducer);
  const dispatch = useDispatch();

  console.log(secondCounter);
  return (
    <div className={styles.container}>
      Counter One: {firstCounter}
      <div>
        <button onClick={() => dispatch(firstIncrementCounter(firstCounter))}>
          Increment Counter One
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(firstDecrementCounter(firstCounter))}>
          Decrement Counter One
        </button>
      </div>
      <hr />
      Counter Two: {secondCounter.count}
      <div>
        <button onClick={() => dispatch(secondIncrementCounter(secondCounter))}>
          Increment Counter Two
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(secondDecrementCounter(secondCounter))}>
          Decrement Counter Two
        </button>
      </div>
      <div>
        Clicked on "Increment Counter Two" in this session:{" "}
        {secondCounter.inc_click}
        <br />
        Clicked on "Decrement Counter Two" in this session:{" "}
        {secondCounter.dec_click}
      </div>
    </div>
  );
}
