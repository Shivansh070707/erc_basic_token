require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    'goerli': {
			url: "https://testnet.emoney.network/",
			chainId: 4544,
			accounts: [process.env.DEPLOYER_PRIVATE_KEY]
		},
    'goerli-arbitrum': {
			url: "https://goerli-rollup.arbitrum.io/rpc",
			chainId: 421613,
			accounts: process.env.DEPLOYER_PRIVATE_KEY ? [process.env.DEPLOYER_PRIVATE_KEY] : undefined,
		},
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};
