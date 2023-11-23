
const  { ethers } =require("ethers"); 
const { Presets, Client } =require("userop");

const rpcUrl ="https://public.stackup.sh/api/v1/node/ethereum-sepolia";
const paymasterUrl = ""; // Optional - you can get one at https://app.stackup.sh/

async function main() {
  const paymasterContext = { type: "payg" };
  const paymasterMiddleware = Presets.Middleware.verifyingPaymaster(
    paymasterUrl,
    paymasterContext
  );
  const opts = paymasterUrl.toString() === "" ? {} : {
    paymasterMiddleware: paymasterMiddleware,
  }

  // Initialize the account
  const signingKey = "0xaaaa433743374337433743374337433743374337433743374337433743374337";
  const signer = new ethers.Wallet(signingKey);
  var builder = await Presets.Builder.SimpleAccount.init(signer, rpcUrl, opts);
  const address = builder.getSender();
  console.log(`Account address: ${address}`);
 

  //send eth
  const target = "0x0F4ECd8e10E99a1318db0867A0a9155f11c02C6E";
  let amountInEther = '0.1';
  const value = ethers.utils.parseEther(amountInEther);

  // Send the User Operation to the ERC-4337 mempool
  const client = await Client.init(rpcUrl);
  const res = await client.sendUserOperation(builder.execute(target, value,"0x"), {
    onBuild: (op) => console.log("Signed UserOperation:", op),
  });

  // Return receipt
  console.log(`UserOpHash: ${res.userOpHash}`);
  console.log("Waiting for transaction...");
  const ev = await res.wait();
  console.log(`Transaction hash: ${ev?.transactionHash ?? null}`);
  console.log(`View here: https://jiffyscan.xyz/userOpHash/${res.userOpHash}`);

}

main().catch((err) => console.error("Error:", err));
