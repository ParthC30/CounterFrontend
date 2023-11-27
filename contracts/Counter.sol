// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract counter {

    uint public count;

    function totalNFT() public view returns(uint){
        return count;
    }

    function NFTadd() public {
        count += 1;
    }

    function NFTsub() public {
        count -= 1;
    }
}