#This project setup enviroment to deploy smartcontract to Ropsten

**Install**
Xoa file package-lock.js

    npm install


Thay đổi file muôn deploy bằng cách thay trong file SimpleStorage.sol 
Thay đổi compiler version trong truffle.js 
    solc:{
            optimizer: {
                enabled: true,
                runs: 200
            },
            version : "0.4.24"   // this is compiler version 
        }

**Setup network**

    var mnemonic = "apple banana coffie apple banana coffie apple banana coffie"

    provider: function(){
                return new HDWalletProvider(
                    mnemonic,
                    `https://ropsten.infura.io/v3/c9a0f45995234454849d7a2d3c9124ed`
                )
            },
    

**setup migrations**

    const SimpleStorage = artifacts.require("SimpleStorage")
        module.exports = function(deployer){
            deployer.deploy(SimpleStorage);
        };

Ví duj thay tên contract vào giá trị const, require, deploy