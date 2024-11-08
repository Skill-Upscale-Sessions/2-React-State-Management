export type HookName = keyof ShowReactProps;

export interface ShowReactProps {
  isUseStateShow: boolean;
  isUseEffectShow: boolean;
  isUseContextShow: boolean;
  isUseReducerShow: boolean;
  isUseMemoShow: boolean;
  isUseCallbackShow: boolean;
  isUseRefShow: boolean;
}

interface HookButton {
  name: string;
  stateKey: HookName;
}

export const MUST_KNOW_HOOKS: HookButton[] = [
  { name: "useState", stateKey: "isUseStateShow" },
  { name: "useEffect", stateKey: "isUseEffectShow" },
  { name: "useContext", stateKey: "isUseContextShow" },
];

export const LESSER_USED_HOOKS: HookButton[] = [
  { name: "useReducer", stateKey: "isUseReducerShow" },
  { name: "useMemo", stateKey: "isUseMemoShow" },
  { name: "useCallback", stateKey: "isUseCallbackShow" },
  { name: "useRef", stateKey: "isUseRefShow" },
];
