import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { ColorMode, Network, NetworkType, TezosOperationType } from '@airgap/beacon-sdk';
import { swap, batchify } from "@quipuswap/sdk";
import { findDex, estimateTezInToken } from "@quipuswap/sdk";


const Tezos = new TezosToolkit('https://mainnet.smartpy.io');
const network: Network = { type: NetworkType.MAINNET };
const wallet = new BeaconWallet({
  name: 'Sentry',
  preferredNetwork: network.type,
});
Tezos.setWalletProvider(wallet);

const factories = {
  fa1_2Factory: "KT1HrQWkSFe7ugihjoMWwQ7p8ja9e18LdUFn",
  fa2Factory: "KT1Dx3SZ6r4h2BZNQM8xri1CtsdNcAoXLGZB",
};

const tokenPriceOne = async (tokenObject:any) => {
	const tokenData = {
	  contract: tokenObject.contract,
	  id: 0,
	}
  try {

    const dex = await findDex(Tezos, factories, tokenData);
    const dexStorage = await dex.contract.storage();

    const tokenValue = 4000;
    const inTezValue = estimateTezInToken(dexStorage, tokenValue);

    console.info(`4_000 tokens in tez: ${inTezValue}`);
 
    } catch (err) {
      console.log(`failed to update token ${tokenObject.symbol} with error ${err}`)
      return 0
    }
}

const theme = localStorage.getItem("theme");
  wallet.client.setColorMode(ColorMode.LIGHT);

const getActiveAccount = async () => {
  const activeAccount = await wallet.client.getActiveAccount();
  return activeAccount;
};

const connectWallet = async () => {
  let account = await wallet.client.getActiveAccount();

  if (!account) {
    await wallet.requestPermissions({
      network: network,
    });
    account = await wallet.client.getActiveAccount();
    const myAddress = await wallet.getPKH();
    return myAddress;
  }
  return { signedIn: false };
};

const disconnectWallet = async () => {
  await wallet.clearActiveAccount();
  return { disconnect: true };
};

const checkIfWalletConnected = async () => {
  try {
    const activeAccount = await wallet.client.getActiveAccount();
    if (!activeAccount) {
      await wallet.client.requestPermissions({
        network: network,
      });
    }
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

const getAddress = async () => {
  let myAddress: string | undefined;
  myAddress = await wallet.getPKH();
  return myAddress;
};

// Send operations
// eslint-disable-next-line no-unused-vars
// @ts-ignore

export {
  connectWallet,
  disconnectWallet,
  getActiveAccount,
  checkIfWalletConnected,
  getAddress,
  tokenPriceOne
};
