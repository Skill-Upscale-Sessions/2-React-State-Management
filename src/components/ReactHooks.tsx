import React from "react";
import { Flex, Button, Badge } from "@radix-ui/themes";

const ReactHooks = () => {
  return (
    <div className="space-y-6">
      <Flex direction="column" gap="4">
        <Badge color="ruby" className="text-lg mb-2">
          Must Know Hooks
        </Badge>
        <div className="space-x-3">
          <Button variant="surface">useState</Button>
          <Button variant="surface">useEffect</Button>
          <Button variant="surface">useContext</Button>
        </div>
      </Flex>
      <Flex direction="column" gap="4">
        <Badge color="violet" className="text-lg mb-2">
          Lesser Used Hooks
        </Badge>
        <div className="space-x-3">
          <Button variant="surface">useReducer</Button>
          <Button variant="surface">useMemo</Button>
          <Button variant="surface">useCallback</Button>
          <Button variant="surface">useRef</Button>
        </div>
      </Flex>
    </div>
  );
};

export default ReactHooks;
