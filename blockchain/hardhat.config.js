require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'YOUR_ALCHEMY_API_URL',
      accounts: [PRIVATE_KEY],
    },
  },
};