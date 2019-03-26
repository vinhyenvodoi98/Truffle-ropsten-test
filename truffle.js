require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = "apple banana coffie apple banana coffie apple banana coffie"
// var provider = new HDWalletProvider (mnemonic,"https://ropsten.infura.io/v3/c9a0f45995234454849d7a2d3c9124ed")

// TODO HD Wallet
// ==================
// Mnemonic:      apple banana coffie
// Base HD Path:  m/44'/60'/0'/0/{account_index}


module.exports = {

    networks: {
        ropsten: {
            provider: function(){
                return new HDWalletProvider(
                    mnemonic,
                    `https://ropsten.infura.io/v3/c9a0f45995234454849d7a2d3c9124ed`
                )
            },
            gasPrice: 25000000000,
            network_id: 3
        },
        development:{
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
    },
        
    compilers:{
        solc:{
            optimizer: {
                enabled: true,
                runs: 200
            },
            version : "0.4.24"
        }
    }
};