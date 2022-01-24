import { Button } from "ui";
import * as Hyperverse from "@decentology/hyperverse";
import { Algorand } from "@decentology/hyperverse-algorand";
import * as Counter from "@decentology/hyperverse-algorand-counter";
import AlgoTest from "../components/AlgoTest";

export default function Web() {
  const hyperverse = Hyperverse.initialize({
    blockchain: Algorand,
    network: Hyperverse.networks.TestNet,
    modules: [{ bundle: Counter, tenantId: "123" }],
  });

  return (
    <Hyperverse.Provider hyperverse={hyperverse}>
      <div>
        <h1>Web</h1>
        <AlgoTest />
        {/* <Inner /> */}
        <Button />
      </div>
    </Hyperverse.Provider>
  );
}
