const Token = artifacts.require("./Token.sol");
module.exports = async function (deployer) {
    const deployment = deployer.deploy(Token, "HelloToken", "HELL0", 10000n *
        BigInt(1e18));
    const instance = await deployment.await
    const newOwner = '0x18566A6F572A34133eaFC021212Dd710E4F44c1b'
    await instance.transferOwnership(newOwner)
};