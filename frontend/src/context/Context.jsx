import {
  createContext,
  useEffect,
  useReducer,
  useState,
  useMemo
} from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false
};

export const Context = createContext(INITIAL_STATE);
export const MyBurger = createContext();

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [menuOpenState, setMenuOpenState] = useState(false);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={useMemo(
        () => ({
          isMenuOpen: menuOpenState,
          toggleMenu: () => setMenuOpenState(!menuOpenState),
          stateChangeHandler: (newState) =>
            setMenuOpenState(newState.isOpen),
          closeMenu: () => setMenuOpenState(false),
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch
        }),
        [menuOpenState, state.error, state.isFetching, state.user]
      )}>
      {children}
    </Context.Provider>
  );
}
