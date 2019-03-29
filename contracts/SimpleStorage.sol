// use this file to deploy smartcontract to ropsten 

pragma solidity 0.4.24;

contract SimpleStorage {    
    uint value;

    function set(uint x) public {
        value = x;
    }

    function get() public view returns (uint) {
        return value;
    }
}