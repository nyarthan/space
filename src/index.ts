import * as pulumi from "@pulumi/pulumi";
import * as hcloud from "@pulumi/hcloud";

const node1 = new hcloud.Server("node1", {
  name: "node1",
  image: "debian-12",
  serverType: "cx23",
  publicNets: [
    {
      ipv4Enabled: true,
      ipv6Enabled: true,
    },
  ],
});
