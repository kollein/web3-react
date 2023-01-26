require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/-wqGF43twpQqjUAeU_RThL7UvyJogqQm',
      accounts: ['ffec1aa9f380953f79ce330cc5da09eb270d42d2bad8195ae163281af788d9f6'],
    },
  },
};