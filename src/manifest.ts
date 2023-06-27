export const manifest: chrome.runtime.ManifestV3 = {
  author: "Achille Lacoin",
  description: "Workflowy in Chrome Side Panel",
  name: "Workflowy",
  version: "0.0.0",
  manifest_version: 3,
  action: {
    default_title: "Click to open Workflowy in Side Panel",
    default_icon: {
      16: "icons/16.png",
      19: "icons/19.png",
      32: "icons/32.png",
      38: "icons/38.png",
    },
  },
  background: {
    service_worker: "src/background.ts",
  },
  // @ts-ignore
  permissions: ["sidePanel", "declarativeNetRequestWithHostAccess"],
  side_panel: {
    default_path: "src/sidepanel.html",
  },
  declarative_net_request: {
    rule_resources: [
      {
        id: "ruleset_1",
        enabled: true,
        path: "rules.json",
      },
    ],
  },
  host_permissions: ["*://*.workflowy.com/*"],
  icons: {
    16: "icons/16.png",
    19: "icons/19.png",
    32: "icons/32.png",
    38: "icons/38.png",
    48: "icons/48.png",
    64: "icons/64.png",
    96: "icons/96.png",
    128: "icons/128.png",
    256: "icons/256.png",
    512: "icons/512.png",
  },
};
