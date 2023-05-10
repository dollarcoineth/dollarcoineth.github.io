// Import the DollarNFT contract ABI
import DollarNFTABI from './DollarNFTABI.json';

// Set the contract address
const contractAddress = '0x95e767af28ddd7712b911bfe70c45005992fc05a'; // Update with the deployed DollarNFT contract address

// Create an instance of the DollarNFT contract
const DollarNFTContract = new web3.eth.Contract(DollarNFTABI, contractAddress);

// Function to approve spender
export async function approveSpender(spender, amount) {
    const accounts = await web3.eth.requestAccounts();
    const sender = accounts[0];

    const result = await DollarNFTContract.methods.approveSpender(spender, amount).send({ from: sender });
    return result;
}

// Function to set the tokenURI for a given token ID
export async function setTokenURI(tokenId, tokenURI) {
    const accounts = await web3.eth.requestAccounts();
    const sender = accounts[0];

    const result = await DollarNFTContract.methods.setTokenURI(tokenId, tokenURI).send({ from: sender });
    return result;
}

// Function to get the tokenURI for a given token ID
export async function getTokenURI(tokenId) {
    const tokenURI = await DollarNFTContract.methods.tokenURI(tokenId).call();
    return tokenURI;
}

// Example function to exchange DOLLAR for NFT
export async function exchangeForNFT() {
    const accounts = await web3.eth.requestAccounts();
    const sender = accounts[0];

    const result = await DollarNFTContract.methods.exchangeForNFT().send({ from: sender });
    return result;
}

// Export other contract interaction functions as needed
// ...
