const { ethers } = require("ethers");
var abi = [
    "function registerUser(string _username) returns (bool)",
    "function checkRegistration(string _username) view returns (bool)",
    "function markAttendance(string _username, string _courseName) returns (bool)",
    "function getAttendance(string _username, string _courseName) view returns (uint256)",
];

var privateKey = "401db78ea27ea39c278ec601a6bd5c88fdd51cc20c38a3f20b05f827876dc83c";

var signer = new ethers.Wallet(privateKey, provider);

var provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/40589e1408fe41568be1972f63e5d3d1")

var address = "0x3BE5b393B88072a6b87A901db12A6b28A9F71C67";

var read_contract = new ethers.Contract(address , abi ,provider);
var write_contract = new ethers.Contract(address , abi , signer);

const main = async () => {

    // To read
    const isRegistered = await read_contract."methodHere";
    //To write
    let tx = await new_contract."Methodhere";
    await tx.wait();
}

main();