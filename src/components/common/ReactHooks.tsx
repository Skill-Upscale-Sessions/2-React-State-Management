import React, { useState } from "react";
import { Flex, Button, Badge } from "@radix-ui/themes";
import { HookName, MUST_KNOW_HOOKS } from "../../Types/types";

import UseStateHookComponent from "../HooksComponents/UseStateHookComponent";
import UseEffectHookComponent from "../HooksComponents/UseEffectHookComponent";
import UseContextHookComponent from "../HooksComponents/UseContextHookComponent";
import UseMemoHookComponent from "../HooksComponents/UseMemoHookComponent";
import UseCallbackHookComponent from "../HooksComponents/UseCallbackHookComponent";
import UseRefHookComponent from "../HooksComponents/UseRefHookComponent";

interface HookButton {
  name: string;
  stateKey: HookName;
}

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
      color={activeHook === hook.stateKey ? "purple" : "blue"}
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
      <div className=" bg-gray-50 p-6 flex justify-center items-center">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            Learn React
          </h1>
          <Flex direction="column" gap="4" className="mb-5">
            <Badge color="ruby" className="text-lg mb-2">
              Must Know Hooks
            </Badge>
            <Flex direction="row" gap="2" wrap="wrap">
              {MUST_KNOW_HOOKS.map((hook) => (
                <HookButton key={hook.name} hook={hook} />
              ))}
            </Flex>
          </Flex>

          <div>{renderActiveComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ReactHooks;
