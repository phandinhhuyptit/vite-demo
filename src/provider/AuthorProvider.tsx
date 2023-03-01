import { IUser } from "@type/user";
import React, { createContext, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

type State = {
  authUser: IUser | null;
};
type Action = {
  type: "SET_USER" | "RESET_USER";
  payload: IUser | null;
};

type Dispatch = (action: Action) => void;
type SignIn = (user: IUser) => void;
type SignOut = () => void;

type StateContextProviderProps = { children: React.ReactNode };

const initialState: State = {
  authUser: null,
};

const StateContext = React.createContext<
  | { state: State; dispatch: Dispatch; signIn: SignIn; signOut: SignOut }
  | undefined
>(undefined);

const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        authUser: action.payload,
      };
    }
    case "RESET_USER": {
      return {
        ...state,
        authUser: action.payload,
      };
    }

    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const AuthProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
  const [storedValue, setValue] = useLocalStorage("user", state?.authUser);

  useEffect(() => {
    dispatch({
      type: "SET_USER",
      payload: storedValue,
    });
  }, [storedValue]);

  const signIn = (user: IUser) => {
    setValue(user);
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };
  const signOut = () => {
    setValue(null);
    dispatch({
      type: "RESET_USER",
      payload: null,
    });
  };
  const value = { state, dispatch, signIn, signOut };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
const useAuthContext = () => {
  const context = React.useContext(StateContext);

  if (context) {
    return context;
  }

  throw new Error(`useStateContext must be used within a StateContextProvider`);
};

export { AuthProvider, useAuthContext };
