# ERC

# ERC 4337
# What is ERC-4337?
ERC-4337 is an Ethereum Improvement Proposal for "account abstraction" - allowing a single account to have combined features of an Externally Owned Account (EOA) and a smart contract account.

This enables innovative new crypto wallet designs not previously possible on Ethereum.

# Why is ERC-4337 Needed?
Existing Ethereum account types have limitations:

EOAs rely solely on private keys, lack recovery options, and have complex setup.
Smart contract wallets require managing ether across two accounts.
ERC-4337 addresses these issues by combining account types into one.

# How Does ERC-4337 Work?
ERC-4337 works by:

Introducing a "UserOperation" object that bundles transactions off-chain.
"Bundlers" package UserOperations into transactions and get paid fees.
New methods enable a single wallet contract to transact and implement custom logic.

# Key goals and benefits of ERC-4337 include:
Simplified Setup: No more saving seed phrases. Create your wallet with just a few clicks.
Enhanced Recovery: Lost or forgot your password? Recover access through social recovery or other backup options.
Added Security: Optional multi-factor authentication and other security features keep your assets more secure.
Better UX: Send tokens and ETH with ease, set spending limits, schedule payments, and more!
Time and gas savings from transaction bundling
Support for token and fiat transaction fees
Overall, ERC-4337 spells a smoother and more user-friendly crypto wallet experience.

# Resources
 https://eips.ethereum.org/EIPS/eip-4337 

