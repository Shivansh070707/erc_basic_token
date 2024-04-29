
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(deployer);

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Tribeone = await ethers.getContractFactory("Tribeone");
    const tribeone = await Tribeone.deploy();

    console.log("Tribeone address:", tribeone.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });