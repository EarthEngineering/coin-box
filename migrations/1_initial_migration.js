var Migrations = artifacts.require("./Migrations.sol")

module.exports = function(deployer) {
  console.log(Migrations)
  deployer.deploy(Migrations)
}
