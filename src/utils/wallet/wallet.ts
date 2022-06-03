import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { ColorMode, Network, NetworkType, TezosOperationType } from '@airgap/beacon-sdk';

const Tezos = new TezosToolkit('https://mainnet.smartpy.io');
const network: Network = { type: NetworkType.MAINNET };
const wallet = new BeaconWallet({
  name: 'Sentry',
  preferredNetwork: network.type,
});
Tezos.setWalletProvider(wallet);

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
export const sendXTZ = async (SendData) => {
  // eslint-disable-next-line no-unused-vars
  console.log(SendData);
  try {
    const hash = await wallet.sendOperations([
      {
        kind: TezosOperationType.TRANSACTION,
        destination: SendData.userAddress, // Send to ourselves
        amount: SendData.mutezAmount, // Amount in mutez, the smallest unit in Tezos
      },
    ]);
    const explorerLink = await wallet.client.blockExplorer.getTransactionLink(
      hash,
      network,
    );
    const TransactionData = {
      transactionLink: explorerLink,
      Sentstatus: true,
    };
    return TransactionData;
  } catch {
    const TransactionData = {
      transactionLink: null,
      Sentstatus: false,
    };
    return TransactionData;
  }
};
// eslint-disable-next-line no-unused-vars
// @ts-ignore
export const sendUSDtz = async (SendData) => {
  const address = await wallet.getPKH();
  const contract = await Tezos.wallet.at(
    'KT1PWx2mnDueood7fEmfbBDKx1D9BAnnXitn',
  );
  console.log(SendData);
  const result = await contract.methods
    .transfer(
      address,
      address,
      1,
    )
    .send();
  try {
    const TransactionData = {
      transactionLink: result.opHash,
      Sentstatus: true,
    };
    return TransactionData;
  } catch {
    const TransactionData = {
      transactionLink: null,
      Sentstatus: false,
    };
    return TransactionData;
  }
};

export {
  connectWallet,
  disconnectWallet,
  getActiveAccount,
  checkIfWalletConnected,
  getAddress,
};
