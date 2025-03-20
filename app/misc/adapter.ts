import { NightlyConnectIotaAdapter } from "@nightlylabs/wallet-selector-iota";

let _adapter: NightlyConnectIotaAdapter | undefined;
export const getAdapter = async (persisted = true) => {
  if (_adapter) return _adapter;
  _adapter = await NightlyConnectIotaAdapter.build({
    appMetadata: {
      name: "IOTA Template",
      description: "IOTA Template",
      icon: "https://docs.nightly.app/img/logo.png",
    },
    persistent: persisted,
  });
  return _adapter;
};
