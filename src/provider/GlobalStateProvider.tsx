import { IUser } from "@type/user";
import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

type KeyModal = "editBook" | "detailBook";

type State = {
  modal: Record<KeyModal, boolean>;
  data: unknown;
};

type Action<T> = {
  type: "SET_MODAL";
  payload: T;
};

type Dispatch = (action: Action<any>) => void;
type setModal = (key: KeyModal, isModal: boolean, data?: unknown) => void;
type selectedModal = (key: KeyModal) => boolean;
type StateContextProviderProps = { children: React.ReactNode };

const initialState: State = {
  modal: {
    editBook: false,
    detailBook: false,
  },
  data: null,
};

const StateContext = React.createContext<
  | {
      state: State;
      dispatch: Dispatch;
      selectedModal: selectedModal;
      setModal: setModal;
    }
  | undefined
>(undefined);

const GlobalstateReducer = (state: State, action: Action<any>) => {
  console.log("state", state);
  switch (action.type) {
    case "SET_MODAL": {
      return {
        ...state,
        modal: action.payload.modal,
        data: action.payload.data,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const GlobalStateProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = React.useReducer(GlobalstateReducer, initialState);
  const setModal = (key: KeyModal, isModal: boolean, data?: unknown) => {
    dispatch({
      type: "SET_MODAL",
      payload: {
        modal: {
          ...state.modal,
          [key]: isModal,
        },
        data,
      },
    });
  };

  const selectedModal = (key: KeyModal): boolean => {
    return state.modal[key] ? state.modal[key] : false;
  };

  const value = { state, dispatch, setModal, selectedModal };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
const useGlobalStateContext = () => {
  const context = React.useContext(StateContext);

  if (context) {
    return context;
  }

  throw new Error(`useStateContext must be used within a StateContextProvider`);
};

export { GlobalStateProvider, useGlobalStateContext };
