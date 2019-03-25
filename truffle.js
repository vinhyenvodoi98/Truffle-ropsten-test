require('dotenv').config();
const HDWalletPriver = require('truffle-hdwallet-provider');

module.exports = {

    networks: {
        ropsten: {
            provider: function(){
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `https://ropsten.infura.io/${process.env.INFURA_API_KEY}`
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