const hre = require("hardhat");

async function main() {
  
  const counter = await hre.ethers.getContractFactory("counter");
  const contract = await counter.deploy();
  
  await contract.deployed();

  console.log(
    `counter contract deployed to ${contract.address}`
  );
}

//0x3f8CF3320a5DBfe60267dC0eC40Ba677b16db59c

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
