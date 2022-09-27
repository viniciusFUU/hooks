import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useReducer } from "react";

const initialState = {
  other: "...",
  user: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "mult7":
      return { ...state, number: state.number * 7 };
    case "div25":
      return { ...state, number: state.number / 25 };
    case "int":
      return { ...state, number: parseInt(state.number) };
    case "random":
      return { ...state, number: state.number + action.payload};
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAdd2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Bianca" })}
          >
            User
          </button>
          <button className="btn" onClick={() => dispatch({ type: "mult7" })}>
            *7
          </button>
          <button className="btn" onClick={() => dispatch({ type: "div25" })}>
            /25
          </button>
          <button className="btn" onClick={() => dispatch({ type: "int" })}>
            inteiro
          </button>
          <button className="btn" onClick={() => dispatch({ type: "random", payload: -9})}>
            -9
          </button>
          <button className="btn" onClick={() => dispatch({ type: "random", payload: +11})}>
            +11
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
