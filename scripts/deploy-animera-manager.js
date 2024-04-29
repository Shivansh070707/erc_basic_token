
async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Animera = await ethers.getContractFactory("AnimeraManager");

    const tokenAddress = "0x9c702f06fC3FFaB281418A1526Bf83DEBe7fD161";
    const animera = await Animera.deploy(tokenAddress);

    console.log("AnimeraManager address:", animera.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });