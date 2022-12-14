import { ChainId, CHAIN_ID, getChainName } from '@openpalette/contract';

export function isMainnetOrPolygon(
  chainId: any,
): chainId is typeof CHAIN_ID.MAINNET | typeof CHAIN_ID.POLYGON {
  return chainId === CHAIN_ID.MAINNET || chainId === CHAIN_ID.POLYGON || chainId === "0x38";
}

function getHost(chainId: any) {
  switch (chainId) {
    case CHAIN_ID.POLYGON:
    case CHAIN_ID.MUMBAI:
      return `polygonscan.com`;
    case "0x38":
      return `bscscan.com`;
    case "0x61":
      return `bscscan.com`;
    default:
      return `etherscan.io`;
  }
}

export function getBlockExplorerName(chainId: any) {
  switch (chainId) {
    case CHAIN_ID.POLYGON:
    case CHAIN_ID.MUMBAI:
      return `Polygonscan`;
    case "0x38":
      return `Bscscan`;
    case "0x61":
      return `Bscscan`;
    default:
      return `Etherscan`;
  }
}

export function getEtherscanAddressUrl(chainId: any, address: string) {
  const prefix = !isMainnetOrPolygon(chainId)
    ? `${chainId === "0x61" ? 'testnet' : getChainName(chainId)}.`
    : '';

  return `https://${prefix}${getHost(chainId)}/address/${address}`;
}

export function getEtherscanApiUrl(chainId: any) {
  const prefix = !isMainnetOrPolygon(chainId)
    ? `api-${chainId === "0x61" ? 'testnet' : getChainName(chainId)}`
    : 'api';

  return `https://${prefix}.${getHost(chainId)}/api`;
}
