const CryptoJoe = artifacts.require("CryptoJoeContract");

module.exports = async function(deployer) {
  await deployer.deploy(CryptoJoe);
};
