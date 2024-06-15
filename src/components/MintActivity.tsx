import { TabPanel } from "@headlessui/react";

import { Graph } from "@/lib/api/models/graph.model";
import TimeLineChart from "./widgets/TimeLineChart";

type MintActivityProps = {
  graph: Graph[];
};

export default function MintActivity({ graph }: MintActivityProps) {
  return (
    <TabPanel className="flex flex-1 flex-col">
      <TimeLineChart data={graph} />
    </TabPanel>
  );
}
