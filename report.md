# **DAOsis Audit Competition on Hats.finance** 


## Introduction to Hats.finance


Hats.finance builds autonomous security infrastructure for integration with major DeFi protocols to secure users' assets. 
It aims to be the decentralized choice for Web3 security, offering proactive security mechanisms like decentralized audit competitions and bug bounties. 
The protocol facilitates audit competitions to quickly secure smart contracts by having auditors compete, thereby reducing auditing costs and accelerating submissions. 
This aligns with their mission of fostering a robust, secure, and scalable Web3 ecosystem through decentralized security solutions​.

## About Hats Audit Competition


Hats Audit Competitions offer a unique and decentralized approach to enhancing the security of web3 projects. Leveraging the large collective expertise of hundreds of skilled auditors, these competitions foster a proactive bug hunting environment to fortify projects before their launch. Unlike traditional security assessments, Hats Audit Competitions operate on a time-based and results-driven model, ensuring that only successful auditors are rewarded for their contributions. This pay-for-results ethos not only allocates budgets more efficiently by paying exclusively for identified vulnerabilities but also retains funds if no issues are discovered. With a streamlined evaluation process, Hats prioritizes quality over quantity by rewarding the first submitter of a vulnerability, thus eliminating duplicate efforts and attracting top talent in web3 auditing. The process embodies Hats Finance's commitment to reducing fees, maintaining project control, and promoting high-quality security assessments, setting a new standard for decentralized security in the web3 space​​.

## DAOsis Overview

The first Launchpad _ Token Minter on the Oasis Sapphire EVM.

## Competition Details


- Type: A public audit competition hosted by DAOsis
- Duration: 2 weeks
- Maximum Reward: $11,657.86
- Submissions: 134
- Total Payout: $11,657.86 distributed among 40 participants.

## Scope of Audit

Scope of the Audit

The audit will focus on ensuring the security, functionality, and efficiency of the following components of the Daosis platform:
 1. DAO (Decentralized Autonomous Organization):
 • Smart contracts governing the decision-making and voting mechanisms within the DAO.
 • Governance token functionality, including staking, voting, and rewards distribution.
 • Protection against vulnerabilities such as unauthorized access, voting manipulation, or denial-of-service attacks.

***MOST IMPORTANT (points 2 & 3)***
 2. IDOs (Initial DEX Offerings):
 • Smart contracts enabling users to create and manage their IDOs.
 • Validation and security of the process that allows users to launch and participants to fill IDOs.
 • Handling of raised funds to ensure correct allocation (45% of the token goes to DEX LP, 55% sold in the IDO & 100% of raised funds are used for LP) and prevention of exploits such as rug pulls or fund mismanagement.

 3. Token Listing Mechanism on Neby (DEX):
 • Automatic listing of tokens once the IDO is successfully filled.
 • Security of the fund transfer process to Neby (DEX).
 • Verification of proper liquidity pool creation, with raised funds securely locked in the DEX.

 4. Launchpad:
 • User-facing interfaces and their interaction with backend smart contracts.
 • Validation of workflows from token minting to IDO creation and final listing.
 • Handling of edge cases, such as failed IDOs or unexpected user actions.

The audit will focus on identifying vulnerabilities, ensuring adherence to best practices in blockchain development, and verifying proper integration between all components to provide a secure and efficient platform.

## High severity issues


- **ERC20Token contract's burnFrom lacks authorization checks, allows token destruction**

  The ERC20Token contract currently overrides the `burnFrom` function in a manner that lacks allowance or access control checks. Typically, in OpenZeppelin's standard ERC20Burnable implementation, the `burnFrom` method ensures that the caller has an allowance before proceeding with burning the tokens on the holder’s behalf. The current implementation of this contract allows any user to call `burnFrom` and reduce another user’s token balance without any authorization, posing a significant security risk. As a result, malicious users can arbitrarily destroy tokens from any address without the legitimate token holder’s consent or any explicit allowance.

A scenario that demonstrates this vulnerability involves a malicious or unauthorized user invoking `burnFrom` on another user's tokens, like Alice's, causing her balance to decrease without her approval. To mitigate this issue, the recommended solution includes removing the custom `burnFrom` override and relying on OpenZeppelin’s built-in burnFrom, which includes allowance verification. Alternatively, if a custom `burnFrom` function is required, it should replicate this allowance logic to prevent unauthorized token burning. This approach ensures the integrity and security of token balances against unauthorized access and manipulation.


  **Link**: [Issue #5](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/5)

## Medium severity issues


- **Refund function vulnerable to malicious contract attacks causing transaction failure**

  The refund function in a token contract is vulnerable to both Gas Exhaustion and Revert Attacks. If a malicious contract is part of the participant list, it could include a fallback function that either performs costly computations to consume excessive gas or always reverts transactions. The current implementation processes refunds sequentially and halts on any transfer failure, which allows a single malicious participant to stall refunds for everyone. To address this, handling failed transfers gracefully and removing the strict success check on Ether transfer can prevent the refund process from being blocked by malicious actors. Adjustments might be needed to ensure robustness, even though the function is primarily used by an admin.


  **Link**: [Issue #25](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/25)

## Low severity issues


- **FastTrackIDO.sol constructor lacks validation for creator's contribution limits**

  In the FastTrackIDO.sol smart contract, there's a vulnerability where the creator's initial contribution is not checked against the specified `minBuyCreator` and `maxBuyCreator` limits, nor against the `maxCap`. This oversight allows the creator to bypass purchase limits, possibly leading to financial inconsistencies. A suggested fix involves adding requirement checks to enforce these boundaries.


  **Link**: [Issue #152](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/152)


- **Invest function lacks endTime check allowing post-sale investments**

  The `invest()` function in a smart contract lacks a check to ensure investments occur before the sale's `endTime`. This allows for investments after the sale has ended, potentially causing inconsistencies. Introducing an `endTime` check in the function can address this vulnerability, preventing late investments and ensuring the sale's integrity.


  **Link**: [Issue #142](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/142)


- **Invest function lacks check for exceeding token sale limit**

  The `invest()` function allows the owner to process investments and allocate tokens to investors but does not verify that the total tokens sold remains within the `tokensForSale` limit. This oversight can lead to overselling tokens beyond the intended supply, as the function only checks the USD cap, not the token cap. A revised code version incorporates a validation check against `tokensForSale` to prevent this issue.


  **Link**: [Issue #141](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/141)


- **Function Allows Token Update During Active Sale Without EndTime Check**

  The current function allows the contract owner to change the DSS token address at any time, including during an active sale, without checking for an `endTime`. A proposed solution adds a requirement that the token address can only be updated before the sale begins, preventing changes once the sale is active.


  **Link**: [Issue #140](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/140)


- **UpdateEndTime function lacks critical validation and event emission checks**

  The `updateEndTime` function in a token sale contract lets the owner modify the sale's end time without proper validation. Missing checks include ensuring the new end time is after the start time and not in the past or after the sale has ended. A revised function with validation and event emission is suggested for improvement.


  **Link**: [Issue #139](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/139)


- **Missing Validation Allows Past Timestamp for Sale EndTime in Smart Contract**

  The `startSale` function in the `exchange.sol` smart contract allows setting the `endTime` for a token sale without verifying it is a future timestamp. This flaw could let the sale end immediately upon starting if `endTime` is set to a past time. A fix involves adding validation to ensure `endTime` is in the future.


  **Link**: [Issue #138](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/138)


- **Event Not Emitted in finalizeIDO Function for IDO Contracts**

  The `NormalIDO` and `FastTrackIDO` contracts contain `finalizeIDO()` functions that are missing the emission of a `Finalize` event, despite its declaration at the beginning of the contracts. The recommended solution is to include `emit Finalize(soldToken, unsoldTokens);` in the `finalizeIDO()` function to improve contract tracking and monitoring.


  **Link**: [Issue #136](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/136)


- **FastTrackIDO contract incorrectly records token burner in event logging**

  The `burnToken()` function in the `FastTrackIDO` contract is designed to burn unsold tokens, emitting a `TokensBurned` event with `msg.sender` as the burner. However, it's actually the contract itself, not the message sender, that executes the burn. The recommendation is to modify the emitted event to correctly reflect the contract as the burner.


  **Link**: [Issue #135](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/135)


- **Pause mechanism ineffective due to owner control in exchange.sol contract**

  In the `exchange.sol` contract, all functions are restricted to the owner via the `onlyOwner` modifier, including the pause mechanism. This redundancy renders the pause mechanism ineffective since the owner already controls function calls. It is advised to either separate control of the pause functions or remove the mechanism altogether.


  **Link**: [Issue #134](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/134)


- **Lack of IDO Supply Checks May Cause Incorrect Max Buy Limits**

  A discrepancy exists in a contract's fee configuration for Initial DEX Offerings (IDOs), specifically around percentage rules for buyer and creator purchases. Differences arise in `idoAmount` calculations based on fee type (Token or ROSE), affecting the maximum buy limits. To resolve this, new variables and validations need to be added to ensure compliance with specified percentage limits.


  **Link**: [Issue #121](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/121)


- **Protocol Fee Not Applied on Creator's First Transaction in IDO Contracts**

  When deploying `FastTrackIDO` and `NormalIDO` contracts, the protocol fee is not applied to the creator's first buy. This inconsistency can lead to a loss of fees for the protocol and differs from how the `buy()` function handles transactions. It's recommended to apply a fee on the creator's initial purchase to maintain consistency.


  **Link**: [Issue #95](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/95)


- **BurnToken Function in FastTrackIDO Contract Failing to Update maxCap**

  The FastTrackIDO contract's burnToken function burns unsold tokens from a failed IDO but doesn't update the maxCap state variable. This leads to inconsistencies, allowing the function to perform multiple burns by wrongly indicating tokens are still available. Such errors in calculations could arise by maintaining the original maxCap value.


  **Link**: [Issue #91](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/91)


- **Fee Miscalculation in FastTrackIDO Contract Can Lead to Overspending**

  The buy() function in the FastTrackIDO contract wrongly adds the fee on top of the purchase amount rather than deducting it from the total sent amount. This miscalculation can cause users to unexpectedly exceed their available ETH balance, spend more than intended, and experience transaction reverts, resulting in a poor user experience.


  **Link**: [Issue #80](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/80)


- **Potential Exploit in IDO Contracts Due to Missing Fee Validation**

  The `MasterFastIDO` and `MasterNormalIDO` contracts contain a flaw where the `firstBuyFee` variable is not validated in the constructor, allowing creators to bypass intended minimum and maximum purchase restrictions. This can lead to market manipulation and unfair advantages. The suggested fix involves adding validation to ensure compliance with purchase limits.


  **Link**: [Issue #64](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/64)


- **Incorrect Token Allocation in IDO Contracts Needs Fixing**

  According to DAOSIS documentation, 55% of the token supply should be allocated to the IDO, but the current implementation allocates only 45%. This discrepancy affects the protocol's objectives and may impact community trust. A proposed fix involves adjusting the `MasterFastIDO` and `MasterNormalIDO` contracts to correct the distribution percentage.


  **Link**: [Issue #58](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/58)


- **FinalizeIDO function lacks validation for sold and unsold token distribution**

  The FastTrackIDO contract's `finalizeIDO` function allows the owner to distribute and burn tokens without ensuring the total amount matches expected distribution, potentially leading to discrepancies. This vulnerability can be exploited as the function processes sold and unsold tokens independently. A proposed code revision ensures validation of token distribution.


  **Link**: [Issue #49](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/49)


- **Remove or Utilize Unused Pause Mechanism in MasterFastIDO Contract**

  The MasterFastIDO contract includes a pause mechanism that is implemented but never utilized, raising concerns about its necessity. It's recommended to either remove or properly integrate this mechanism within the contract. Comments suggest a misunderstanding of its functionality, as it appears ineffective, having no impact when used. Suggests to mark it as low priority and review the proposed fix.


  **Link**: [Issue #39](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/39)


- **CrowdFunding Contract Allows Duplicate Investor Entries Leading to Token Drain**

  The `CrowdFunding` contract has two key issues: firstly, duplicate addresses can be added to its investors' array, allowing investors to receive multiple token distributions unfairly. Secondly, as the array grows, distributing tokens via the `transferDSS()` function increases gas costs, which could exceed block limits, disrupting token distribution. This can potentially cripple the contract's core functionality. A proposed fix prevents duplicate addresses, enhancing efficiency and security.


  **Link**: [Issue #35](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/35)


- **Invest function lacks time-based restrictions for sales period enforcement**

  The contract has start and end times for a sale, but the invest() function does not enforce these limits, allowing owners to update balances outside the designated period. To restrict investments to the intended timeframe, it's recommended to add a require statement checking the current time against startTime and endTime within the invest() function.


  **Link**: [Issue #34](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/34)


- **Inaccurate Remaining Amount in isBuyed Function Allows Purchase Bypass**

  The `isBuyed` function incorrectly calculates the remaining purchase amount due to hardcoded conditions not aligned with the `buy` function logic, potentially allowing users to bypass buying limits. An attacker could exploit this by calling the function post-purchase to gain infinite remaining buy amounts. A dynamic adjustment reflecting the `buy` function's conditions is proposed.


  **Link**: [Issue #31](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/31)


- **Incorrect Error Message in depositDSS Function of Exchange.sol Contract**

  The `depositDSS()` function in the `exchange.sol` contract has an incorrect error message. It currently uses "Token withdrawal failed," which might cause confusion, as it should state "Token deposit failed." Correcting this message would improve clarity in understanding function-related errors.


  **Link**: [Issue #28](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/28)


- **Incomplete Token Listing Mechanism on Neby DEX After IDO**

  The Neby DEX currently lacks an automatic token listing feature after a successful Initial DEX Offering (IDO), preventing immediate trading. This absence could lead to token manipulation and liquidity pool issues. Suggestions involve integrating Uniswap's framework for automated pool creation after IDOs, although concerns remain about centralization since the admin manages liquidity through a Web2 interface.


  **Link**: [Issue #17](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/17)


- **Contract Lacks Mechanism to Return Excess Ether During Token Purchase**

  The current design of a token purchase function only checks if the Ether sent is at least the required amount, but it does not handle cases where more Ether than necessary is sent. Consequently, any extra Ether stays with the contract with no refund mechanism, potentially leading to user losses. Recommended solutions include requiring the exact Ether amount or automatically refunding the excess.


  **Link**: [Issue #8](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/8)


- **Duplicate Entries in Participants Array of NormalIDO Contract**

  The NormalIDO contract's participants array can store duplicate addresses because the `buy` function allows users to buy multiple times, adding them to the array each time. This inflates the participant count and complicates operations like refunds. A solution is to implement a mapping to ensure each address is added only once.


  **Link**: [Issue #3](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/3)


- **Unbounded Loop in Refund Function May Cause Out-of-Gas Errors**

  The `refund` function in the contract is at risk of failing due to out-of-gas errors caused by an unbounded loop over the `participants` array. This issue arises if the participant count grows significantly, potentially preventing the refund process and locking funds. Suggested mitigation involves processing participants in smaller batches or using a pull-based mechanism for individual refund claims.


  **Link**: [Issue #2](https://github.com/hats-finance/DAOsis-0x8ef21ecb2af12ce9cc0e475eec25f90a9622b4f4/issues/2)



## Conclusion

The DAOsis audit competition hosted on Hats Finance exemplifies a dynamic approach to enhancing security for Web3 projects by leveraging decentralized audit competitions. Spanning over two weeks, the competition incentivized skilled auditors to identify vulnerabilities in the Daosis platform, focusing on components such as DAOs, IDOs, and token listing mechanisms. This audit detected a variety of security issues ranging from high to low severity. For instance, critical concerns include the ERC20Token contract's burnFrom function, which lacked necessary authorization checks, and a refund function susceptible to Revert Attacks. Medium-severity problems involved refund processes being vulnerable to malicious attacks, while numerous low-severity issues highlighted operational inefficiencies, such as excess Ether handling and unbounded loops causing potential out-of-gas errors. Overall, the audit findings emphasize the need for improved contract validation, authorization measures, and stricter adherence to security protocols, reinforcing Hats Finance's commitment to cost-effective, thorough security assessments to uphold Web3 standards.

## Disclaimer


This report does not assert that the audited contracts are completely secure. Continuous review and comprehensive testing are advised before deploying critical smart contracts.


The DAOsis audit competition illustrates the collaborative effort in identifying and rectifying potential vulnerabilities, enhancing the overall security and functionality of the platform.


Hats.finance does not provide any guarantee or warranty regarding the security of this project. Smart contract software should be used at the sole risk and responsibility of users.

