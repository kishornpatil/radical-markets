/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

//var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "cross south range program female bless load alcohol valve auto market scatter";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    /*
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/NLFm9X7AFBbpPHGJOHfj")
      },
      network_id: 3
    } 
    */   
  }
};
