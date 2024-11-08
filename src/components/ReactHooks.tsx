import React, { useState } from "react";
import { Flex, Button, Badge } from "@radix-ui/themes";
import UseStateHookComponent from "./UseStateHookComponent";
import UseEffectHookComponent from "./UseEffectHookComponent";
import UseContextHookComponent from "./UseContextHookComponent";
import UseReducerHookComponent from "./UseReducerHookComponent";
import UseMemoHookComponent from "./UseMemoHookComponent";
import UseCallbackHookComponent from "./UseCallbackHookComponent";
import UseRefHookComponent from "./UseRefHookComponent";

type HookName = keyof ShowReactProps;

interface ShowReactProps {
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

const MUST_KNOW_HOOKS: HookButton[] = [
  { name: "useState", stateKey: "isUseStateShow" },
  { name: "useEffect", stateKey: "isUseEffectShow" },
  { name: "useContext", stateKey: "isUseContextShow" },
];

const LESSER_USED_HOOKS: HookButton[] = [
  { name: "useReducer", stateKey: "isUseReducerShow" },
  { name: "useMemo", stateKey: "isUseMemoShow" },
  { name: "useCallback", stateKey: "isUseCallbackShow" },
  { name: "useRef", stateKey: "isUseRefShow" },
];

const ReactHooks: React.FC = () => {
  const [activeHook, setActiveHook] = useState<HookName | null>(null);

  const toggleHook = (stateKey: HookName): void => {
    setActiveHook((currentHook) =>
      currentHook === stateKey ? null : stateKey
    );
  };

  const HookButton: React.FC<{ hook: HookButton }> = ({ hook }) => (
    <Button
      variant="surface"
      onClick={() => toggleHook(hook.stateKey)}
      className={activeHook === hook.stateKey ? "active" : ""}
    >
      {hook.name}
    </Button>
  );

  const renderActiveComponent = () => {
    switch (activeHook) {
      case "isUseStateShow":
        return <UseStateHookComponent isUseStateShow={true} />;
      case "isUseEffectShow":
        return <UseEffectHookComponent isUseEffectShow={true} />;
      case "isUseContextShow":
        return <UseContextHookComponent isUseContextShow={true} />;
      case "isUseReducerShow":
        return <UseReducerHookComponent isUseReducerShow={true} />;
      case "isUseMemoShow":
        return <UseMemoHookComponent isUseMemoShow={true} />;
      case "isUseCallbackShow":
        return <UseCallbackHookComponent isUseCallbackShow={true} />;
      case "isUseRefShow":
        return <UseRefHookComponent isUseRefShow={true} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <Flex direction="column" gap="4">
        <Badge color="ruby" className="text-lg mb-2">
          Must Know Hooks
        </Badge>
        <div className="space-x-3">
          {MUST_KNOW_HOOKS.map((hook) => (
            <HookButton key={hook.name} hook={hook} />
          ))}
        </div>
      </Flex>

      <Flex direction="column" gap="4">
        <Badge color="violet" className="text-lg mb-2">
          Lesser Used Hooks
        </Badge>
        <div className="space-x-3">
          {LESSER_USED_HOOKS.map((hook) => (
            <HookButton key={hook.name} hook={hook} />
          ))}
        </div>
      </Flex>

      <div>{renderActiveComponent()}</div>
    </div>
  );
};

export default ReactHooks;
