import { IUser } from "@type/user";
import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

type State = {
  authUser: IUser | null;
  accessToken: string | null;
};
type Action<T> = {
  type: "SET_USER" | "RESET" | "SET_TOKEN";
  payload: T;
};

type Dispatch = (action: Action<any>) => void;
type SignIn = (token : string) => void;
type SignOut = () => void;

type StateContextProviderProps = { children: React.ReactNode };



const initialState: State = {
  authUser: null,
  accessToken : null
};

const StateContext = React.createContext<
  | { state: State; dispatch: Dispatch; signIn: SignIn; signOut: SignOut }
  | undefined
>(undefined);

const stateReducer = (state: State, action: Action<any>) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        authUser: action.payload,
      };
    }
    case "RESET": {
      return {
        ...state,
        authUser: null,
        accessToken: null,
      };
    }
    case "SET_TOKEN": {
      return {
        ...state,
        accessToken: action.payload,
      };
    }

    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const AuthProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
  const [storedValue, setValue] = useLocalStorage("access_token", state?.accessToken);

  useEffect(() => {
    dispatch({
      type: "SET_TOKEN",
      payload: storedValue,
    });
  }, [storedValue]);

  const signIn = (token: string) => {
    setValue(token);
    dispatch({
      type: "SET_TOKEN",
      payload: token,
    });
  };
  const signOut = () => {
    setValue(null);
    dispatch({
      type: "RESET",
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
