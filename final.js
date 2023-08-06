const { ethers } = require("ethers");
var abi = [
    "function registerUser(string _username) returns (bool)",
    "function checkRegistration(string _username) view returns (bool)",
    "function markAttendance(string _username, string _courseName) returns (bool)",
    "function getAttendance(string _username, string _courseName) view returns (uint256)",
];

var privateKey = "20532186e8f8a5b5e7c0cc05f3bfc2a440d672c6d49d02c2b47c76248834fdcf";

var signer = new ethers.Wallet(privateKey, provider);

var provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/zGJdOpgypgcR9vle_gJXaAvQT1mzmJGa")

var address = "0x3BE5b393B88072a6b87A901db12A6b28A9F71C67";

var read_contract = new ethers.Contract(address , abi ,provider);
// var write_contract = new ethers.Contract(address , abi , signer);

const main = async () => {

    // To read
    
    // const data = await provider.getCode(address);
    // const isRegistered = await write_contract.registerUser("god");
    // const gasLimit = 100000;
    // const wallet = new ethers.Wallet(privateKey, provider);
    // var write_contract = new ethers.Contract(address , abi , wallet);
    // const tx = await write_contract.connect(wallet).registerUser("god");
    // await tx.wait();
    const isRegistered = await read_contract.checkRegistration("god");
    console.log(isRegistered);
    
}

main();