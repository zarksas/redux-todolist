import { Provider } from "react-redux";
import { createStore } from "redux";
import Content from "./Content";
import Input from "./Input";
import style from "../App.module.css";

function App() {
  const initialState = {
    add: [
      {
        text: "первое дело",
        confirm: false,
      },
    ],
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "create":
        return {
          ...state,
          add: [
            ...state.add,
            {
              text: action.payload,
              confirm: false,
            },
          ],
        };
      case "delete":
        return {
          ...state,
          add: state.add.filter((item, id) => action.payload !== id),
        };
      case "confirm":
        return {
          ...state,
          add: state.add.map((item, index) =>
            action.payload === index
              ? { ...item, confirm: !item.confirm }
              : item
          ),
        };
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  return (
    <>
      <Provider store={store}>
        <div className={style.blok}>
          <Input />
          <Content />
        </div>
      </Provider>
    </>
  );
}

export default App;
