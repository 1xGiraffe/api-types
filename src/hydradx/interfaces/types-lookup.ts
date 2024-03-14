// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U256, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H160, H256, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (8) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (9) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (14) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (16) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (19) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (21) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (22) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (23) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (24) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (25) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
  }

  /** @name SpRuntimeModuleError (26) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (27) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (28) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (29) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletBalancesEvent (30) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (31) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (32) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletTreasuryEvent (33) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
  }

  /** @name PalletUtilityEvent (34) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletPreimageEvent (37) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletIdentityEvent (38) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletDemocracyEvent (39) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PalletDemocracyMetadataOwner;
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
  }

  /** @name PalletDemocracyVoteThreshold (40) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (41) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletDemocracyMetadataOwner (43) */
  interface PalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name PalletElectionsPhragmenEvent (44) */
  interface PalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean;
    readonly asNewTerm: {
      readonly newMembers: Vec<ITuple<[AccountId32, u128]>>;
    } & Struct;
    readonly isEmptyTerm: boolean;
    readonly isElectionError: boolean;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: AccountId32;
    } & Struct;
    readonly isRenounced: boolean;
    readonly asRenounced: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: {
      readonly candidate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSeatHolderSlashed: boolean;
    readonly asSeatHolderSlashed: {
      readonly seatHolder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
  }

  /** @name PalletCollectiveEvent (47) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletTipsEvent (50) */
  interface PalletTipsEvent extends Enum {
    readonly isNewTip: boolean;
    readonly asNewTip: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosing: boolean;
    readonly asTipClosing: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosed: boolean;
    readonly asTipClosed: {
      readonly tipHash: H256;
      readonly who: AccountId32;
      readonly payout: u128;
    } & Struct;
    readonly isTipRetracted: boolean;
    readonly asTipRetracted: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipSlashed: boolean;
    readonly asTipSlashed: {
      readonly tipHash: H256;
      readonly finder: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
  }

  /** @name PalletProxyEvent (51) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name HydradxRuntimeSystemProxyType (52) */
  interface HydradxRuntimeSystemProxyType extends Enum {
    readonly isAny: boolean;
    readonly isCancelProxy: boolean;
    readonly isGovernance: boolean;
    readonly isTransfer: boolean;
    readonly isLiquidity: boolean;
    readonly isLiquidityMining: boolean;
    readonly type: 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining';
  }

  /** @name PalletMultisigEvent (54) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (55) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletUniquesEvent (56) */
  interface PalletUniquesEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly collection: u128;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly collection: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly collection: u128;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly collection: u128;
      readonly item: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly collection: u128;
      readonly item: u128;
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly collection: u128;
      readonly item: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isCollectionFrozen: boolean;
    readonly asCollectionFrozen: {
      readonly collection: u128;
    } & Struct;
    readonly isCollectionThawed: boolean;
    readonly asCollectionThawed: {
      readonly collection: u128;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly collection: u128;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly collection: u128;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly collection: u128;
      readonly item: u128;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly collection: u128;
      readonly item: u128;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isItemStatusChanged: boolean;
    readonly asItemStatusChanged: {
      readonly collection: u128;
    } & Struct;
    readonly isCollectionMetadataSet: boolean;
    readonly asCollectionMetadataSet: {
      readonly collection: u128;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isCollectionMetadataCleared: boolean;
    readonly asCollectionMetadataCleared: {
      readonly collection: u128;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly collection: u128;
      readonly item: u128;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isRedeposited: boolean;
    readonly asRedeposited: {
      readonly collection: u128;
      readonly successfulItems: Vec<u128>;
    } & Struct;
    readonly isAttributeSet: boolean;
    readonly asAttributeSet: {
      readonly collection: u128;
      readonly maybeItem: Option<u128>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isAttributeCleared: boolean;
    readonly asAttributeCleared: {
      readonly collection: u128;
      readonly maybeItem: Option<u128>;
      readonly key: Bytes;
    } & Struct;
    readonly isOwnershipAcceptanceChanged: boolean;
    readonly asOwnershipAcceptanceChanged: {
      readonly who: AccountId32;
      readonly maybeCollection: Option<u128>;
    } & Struct;
    readonly isCollectionMaxSupplySet: boolean;
    readonly asCollectionMaxSupplySet: {
      readonly collection: u128;
      readonly maxSupply: u32;
    } & Struct;
    readonly isItemPriceSet: boolean;
    readonly asItemPriceSet: {
      readonly collection: u128;
      readonly item: u128;
      readonly price: u128;
      readonly whitelistedBuyer: Option<AccountId32>;
    } & Struct;
    readonly isItemPriceRemoved: boolean;
    readonly asItemPriceRemoved: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isItemBought: boolean;
    readonly asItemBought: {
      readonly collection: u128;
      readonly item: u128;
      readonly price: u128;
      readonly seller: AccountId32;
      readonly buyer: AccountId32;
    } & Struct;
    readonly type: 'Created' | 'ForceCreated' | 'Destroyed' | 'Issued' | 'Transferred' | 'Burned' | 'Frozen' | 'Thawed' | 'CollectionFrozen' | 'CollectionThawed' | 'OwnerChanged' | 'TeamChanged' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'ItemStatusChanged' | 'CollectionMetadataSet' | 'CollectionMetadataCleared' | 'MetadataSet' | 'MetadataCleared' | 'Redeposited' | 'AttributeSet' | 'AttributeCleared' | 'OwnershipAcceptanceChanged' | 'CollectionMaxSupplySet' | 'ItemPriceSet' | 'ItemPriceRemoved' | 'ItemBought';
  }

  /** @name PalletAssetRegistryEvent (63) */
  interface PalletAssetRegistryEvent extends Enum {
    readonly isExistentialDepositPaid: boolean;
    readonly asExistentialDepositPaid: {
      readonly who: AccountId32;
      readonly feeAsset: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRegistered: boolean;
    readonly asRegistered: {
      readonly assetId: u32;
      readonly assetName: Option<Bytes>;
      readonly assetType: PalletAssetRegistryAssetType;
      readonly existentialDeposit: u128;
      readonly xcmRateLimit: Option<u128>;
      readonly symbol: Option<Bytes>;
      readonly decimals: Option<u8>;
      readonly isSufficient: bool;
    } & Struct;
    readonly isUpdated: boolean;
    readonly asUpdated: {
      readonly assetId: u32;
      readonly assetName: Option<Bytes>;
      readonly assetType: PalletAssetRegistryAssetType;
      readonly existentialDeposit: u128;
      readonly xcmRateLimit: Option<u128>;
      readonly symbol: Option<Bytes>;
      readonly decimals: Option<u8>;
      readonly isSufficient: bool;
    } & Struct;
    readonly isLocationSet: boolean;
    readonly asLocationSet: {
      readonly assetId: u32;
      readonly location: HydradxRuntimeXcmAssetLocation;
    } & Struct;
    readonly isAssetBanned: boolean;
    readonly asAssetBanned: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetUnbanned: boolean;
    readonly asAssetUnbanned: {
      readonly assetId: u32;
    } & Struct;
    readonly type: 'ExistentialDepositPaid' | 'Registered' | 'Updated' | 'LocationSet' | 'AssetBanned' | 'AssetUnbanned';
  }

  /** @name PalletAssetRegistryAssetType (66) */
  interface PalletAssetRegistryAssetType extends Enum {
    readonly isToken: boolean;
    readonly isXyk: boolean;
    readonly isStableSwap: boolean;
    readonly isBond: boolean;
    readonly isExternal: boolean;
    readonly type: 'Token' | 'Xyk' | 'StableSwap' | 'Bond' | 'External';
  }

  /** @name HydradxRuntimeXcmAssetLocation (68) */
  interface HydradxRuntimeXcmAssetLocation extends StagingXcmV3MultiLocation {}

  /** @name StagingXcmV3MultiLocation (69) */
  interface StagingXcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV3Junctions;
  }

  /** @name StagingXcmV3Junctions (70) */
  interface StagingXcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: StagingXcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name StagingXcmV3Junction (71) */
  interface StagingXcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<StagingXcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<StagingXcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<StagingXcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: StagingXcmV3JunctionBodyId;
      readonly part: StagingXcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: StagingXcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name StagingXcmV3JunctionNetworkId (74) */
  interface StagingXcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
  }

  /** @name StagingXcmV3JunctionBodyId (77) */
  interface StagingXcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name StagingXcmV3JunctionBodyPart (78) */
  interface StagingXcmV3JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name PalletClaimsEvent (79) */
  interface PalletClaimsEvent extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: ITuple<[AccountId32, PalletClaimsEthereumAddress, u128]>;
    readonly type: 'Claim';
  }

  /** @name PalletClaimsEthereumAddress (80) */
  interface PalletClaimsEthereumAddress extends U8aFixed {}

  /** @name PalletCollatorRewardsEvent (81) */
  interface PalletCollatorRewardsEvent extends Enum {
    readonly isCollatorRewarded: boolean;
    readonly asCollatorRewarded: {
      readonly who: AccountId32;
      readonly amount: u128;
      readonly currency: u32;
    } & Struct;
    readonly type: 'CollatorRewarded';
  }

  /** @name PalletOmnipoolEvent (82) */
  interface PalletOmnipoolEvent extends Enum {
    readonly isTokenAdded: boolean;
    readonly asTokenAdded: {
      readonly assetId: u32;
      readonly initialAmount: u128;
      readonly initialPrice: u128;
    } & Struct;
    readonly isTokenRemoved: boolean;
    readonly asTokenRemoved: {
      readonly assetId: u32;
      readonly amount: u128;
      readonly hubWithdrawn: u128;
    } & Struct;
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly who: AccountId32;
      readonly assetId: u32;
      readonly amount: u128;
      readonly positionId: u128;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly who: AccountId32;
      readonly positionId: u128;
      readonly assetId: u32;
      readonly sharesRemoved: u128;
      readonly fee: u128;
    } & Struct;
    readonly isProtocolLiquidityRemoved: boolean;
    readonly asProtocolLiquidityRemoved: {
      readonly who: AccountId32;
      readonly assetId: u32;
      readonly amount: u128;
      readonly hubAmount: u128;
      readonly sharesRemoved: u128;
    } & Struct;
    readonly isSellExecuted: boolean;
    readonly asSellExecuted: {
      readonly who: AccountId32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly hubAmountIn: u128;
      readonly hubAmountOut: u128;
      readonly assetFeeAmount: u128;
      readonly protocolFeeAmount: u128;
    } & Struct;
    readonly isBuyExecuted: boolean;
    readonly asBuyExecuted: {
      readonly who: AccountId32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly hubAmountIn: u128;
      readonly hubAmountOut: u128;
      readonly assetFeeAmount: u128;
      readonly protocolFeeAmount: u128;
    } & Struct;
    readonly isPositionCreated: boolean;
    readonly asPositionCreated: {
      readonly positionId: u128;
      readonly owner: AccountId32;
      readonly asset: u32;
      readonly amount: u128;
      readonly shares: u128;
      readonly price: u128;
    } & Struct;
    readonly isPositionDestroyed: boolean;
    readonly asPositionDestroyed: {
      readonly positionId: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isPositionUpdated: boolean;
    readonly asPositionUpdated: {
      readonly positionId: u128;
      readonly owner: AccountId32;
      readonly asset: u32;
      readonly amount: u128;
      readonly shares: u128;
      readonly price: u128;
    } & Struct;
    readonly isTradableStateUpdated: boolean;
    readonly asTradableStateUpdated: {
      readonly assetId: u32;
      readonly state: PalletOmnipoolTradability;
    } & Struct;
    readonly isAssetRefunded: boolean;
    readonly asAssetRefunded: {
      readonly assetId: u32;
      readonly amount: u128;
      readonly recipient: AccountId32;
    } & Struct;
    readonly isAssetWeightCapUpdated: boolean;
    readonly asAssetWeightCapUpdated: {
      readonly assetId: u32;
      readonly cap: Permill;
    } & Struct;
    readonly type: 'TokenAdded' | 'TokenRemoved' | 'LiquidityAdded' | 'LiquidityRemoved' | 'ProtocolLiquidityRemoved' | 'SellExecuted' | 'BuyExecuted' | 'PositionCreated' | 'PositionDestroyed' | 'PositionUpdated' | 'TradableStateUpdated' | 'AssetRefunded' | 'AssetWeightCapUpdated';
  }

  /** @name PalletOmnipoolTradability (84) */
  interface PalletOmnipoolTradability extends Struct {
    readonly bits: u8;
  }

  /** @name PalletTransactionPauseEvent (86) */
  interface PalletTransactionPauseEvent extends Enum {
    readonly isTransactionPaused: boolean;
    readonly asTransactionPaused: {
      readonly palletNameBytes: Bytes;
      readonly functionNameBytes: Bytes;
    } & Struct;
    readonly isTransactionUnpaused: boolean;
    readonly asTransactionUnpaused: {
      readonly palletNameBytes: Bytes;
      readonly functionNameBytes: Bytes;
    } & Struct;
    readonly type: 'TransactionPaused' | 'TransactionUnpaused';
  }

  /** @name PalletDusterEvent (87) */
  interface PalletDusterEvent extends Enum {
    readonly isDusted: boolean;
    readonly asDusted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAdded: boolean;
    readonly asAdded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoved: boolean;
    readonly asRemoved: {
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'Dusted' | 'Added' | 'Removed';
  }

  /** @name PalletLiquidityMiningEvent (88) */
  interface PalletLiquidityMiningEvent extends Enum {
    readonly isGlobalFarmAccRPZUpdated: boolean;
    readonly asGlobalFarmAccRPZUpdated: {
      readonly globalFarmId: u32;
      readonly accumulatedRpz: u128;
      readonly totalSharesZ: u128;
    } & Struct;
    readonly isYieldFarmAccRPVSUpdated: boolean;
    readonly asYieldFarmAccRPVSUpdated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly accumulatedRpvs: u128;
      readonly totalValuedShares: u128;
    } & Struct;
    readonly isAllRewardsDistributed: boolean;
    readonly asAllRewardsDistributed: {
      readonly globalFarmId: u32;
    } & Struct;
    readonly type: 'GlobalFarmAccRPZUpdated' | 'YieldFarmAccRPVSUpdated' | 'AllRewardsDistributed';
  }

  /** @name PalletOmnipoolLiquidityMiningEvent (89) */
  interface PalletOmnipoolLiquidityMiningEvent extends Enum {
    readonly isGlobalFarmCreated: boolean;
    readonly asGlobalFarmCreated: {
      readonly id: u32;
      readonly owner: AccountId32;
      readonly totalRewards: u128;
      readonly rewardCurrency: u32;
      readonly yieldPerPeriod: Perquintill;
      readonly plannedYieldingPeriods: u32;
      readonly blocksPerPeriod: u32;
      readonly maxRewardPerPeriod: u128;
      readonly minDeposit: u128;
      readonly lrnaPriceAdjustment: u128;
    } & Struct;
    readonly isGlobalFarmTerminated: boolean;
    readonly asGlobalFarmTerminated: {
      readonly globalFarmId: u32;
      readonly who: AccountId32;
      readonly rewardCurrency: u32;
      readonly undistributedRewards: u128;
    } & Struct;
    readonly isYieldFarmCreated: boolean;
    readonly asYieldFarmCreated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly multiplier: u128;
      readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>;
    } & Struct;
    readonly isYieldFarmUpdated: boolean;
    readonly asYieldFarmUpdated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly multiplier: u128;
    } & Struct;
    readonly isYieldFarmStopped: boolean;
    readonly asYieldFarmStopped: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isYieldFarmResumed: boolean;
    readonly asYieldFarmResumed: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly multiplier: u128;
    } & Struct;
    readonly isYieldFarmTerminated: boolean;
    readonly asYieldFarmTerminated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isSharesDeposited: boolean;
    readonly asSharesDeposited: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly depositId: u128;
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly sharesAmount: u128;
      readonly positionId: u128;
    } & Struct;
    readonly isSharesRedeposited: boolean;
    readonly asSharesRedeposited: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly depositId: u128;
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly sharesAmount: u128;
      readonly positionId: u128;
    } & Struct;
    readonly isRewardClaimed: boolean;
    readonly asRewardClaimed: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly claimed: u128;
      readonly rewardCurrency: u32;
      readonly depositId: u128;
    } & Struct;
    readonly isSharesWithdrawn: boolean;
    readonly asSharesWithdrawn: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
      readonly depositId: u128;
    } & Struct;
    readonly isDepositDestroyed: boolean;
    readonly asDepositDestroyed: {
      readonly who: AccountId32;
      readonly depositId: u128;
    } & Struct;
    readonly type: 'GlobalFarmCreated' | 'GlobalFarmTerminated' | 'YieldFarmCreated' | 'YieldFarmUpdated' | 'YieldFarmStopped' | 'YieldFarmResumed' | 'YieldFarmTerminated' | 'SharesDeposited' | 'SharesRedeposited' | 'RewardClaimed' | 'SharesWithdrawn' | 'DepositDestroyed';
  }

  /** @name PalletLiquidityMiningLoyaltyCurve (92) */
  interface PalletLiquidityMiningLoyaltyCurve extends Struct {
    readonly initialRewardPercentage: u128;
    readonly scaleCoef: u32;
  }

  /** @name PalletOtcEvent (93) */
  interface PalletOtcEvent extends Enum {
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly orderId: u32;
    } & Struct;
    readonly isFilled: boolean;
    readonly asFilled: {
      readonly orderId: u32;
      readonly who: AccountId32;
      readonly amountIn: u128;
      readonly amountOut: u128;
    } & Struct;
    readonly isPartiallyFilled: boolean;
    readonly asPartiallyFilled: {
      readonly orderId: u32;
      readonly who: AccountId32;
      readonly amountIn: u128;
      readonly amountOut: u128;
    } & Struct;
    readonly isPlaced: boolean;
    readonly asPlaced: {
      readonly orderId: u32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly partiallyFillable: bool;
    } & Struct;
    readonly type: 'Cancelled' | 'Filled' | 'PartiallyFilled' | 'Placed';
  }

  /** @name PalletCircuitBreakerEvent (94) */
  interface PalletCircuitBreakerEvent extends Enum {
    readonly isTradeVolumeLimitChanged: boolean;
    readonly asTradeVolumeLimitChanged: {
      readonly assetId: u32;
      readonly tradeVolumeLimit: ITuple<[u32, u32]>;
    } & Struct;
    readonly isAddLiquidityLimitChanged: boolean;
    readonly asAddLiquidityLimitChanged: {
      readonly assetId: u32;
      readonly liquidityLimit: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly isRemoveLiquidityLimitChanged: boolean;
    readonly asRemoveLiquidityLimitChanged: {
      readonly assetId: u32;
      readonly liquidityLimit: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly type: 'TradeVolumeLimitChanged' | 'AddLiquidityLimitChanged' | 'RemoveLiquidityLimitChanged';
  }

  /** @name PalletRouteExecutorEvent (97) */
  interface PalletRouteExecutorEvent extends Enum {
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
    } & Struct;
    readonly isRouteUpdated: boolean;
    readonly asRouteUpdated: {
      readonly assetIds: Vec<u32>;
    } & Struct;
    readonly type: 'Executed' | 'RouteUpdated';
  }

  /** @name PalletDynamicFeesEvent (99) */
  type PalletDynamicFeesEvent = Null;

  /** @name PalletStakingEvent (100) */
  interface PalletStakingEvent extends Enum {
    readonly isPositionCreated: boolean;
    readonly asPositionCreated: {
      readonly who: AccountId32;
      readonly positionId: u128;
      readonly stake: u128;
    } & Struct;
    readonly isStakeAdded: boolean;
    readonly asStakeAdded: {
      readonly who: AccountId32;
      readonly positionId: u128;
      readonly stake: u128;
      readonly totalStake: u128;
      readonly lockedRewards: u128;
      readonly slashedPoints: u128;
      readonly payablePercentage: u128;
    } & Struct;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: {
      readonly who: AccountId32;
      readonly positionId: u128;
      readonly paidRewards: u128;
      readonly unlockedRewards: u128;
      readonly slashedPoints: u128;
      readonly slashedUnpaidRewards: u128;
      readonly payablePercentage: u128;
    } & Struct;
    readonly isUnstaked: boolean;
    readonly asUnstaked: {
      readonly who: AccountId32;
      readonly positionId: u128;
      readonly unlockedStake: u128;
    } & Struct;
    readonly isStakingInitialized: boolean;
    readonly asStakingInitialized: {
      readonly nonDustableBalance: u128;
    } & Struct;
    readonly isAccumulatedRpsUpdated: boolean;
    readonly asAccumulatedRpsUpdated: {
      readonly accumulatedRps: u128;
      readonly totalStake: u128;
    } & Struct;
    readonly type: 'PositionCreated' | 'StakeAdded' | 'RewardsClaimed' | 'Unstaked' | 'StakingInitialized' | 'AccumulatedRpsUpdated';
  }

  /** @name PalletStableswapEvent (101) */
  interface PalletStableswapEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly poolId: u32;
      readonly assets: Vec<u32>;
      readonly amplification: u16;
      readonly fee: Permill;
    } & Struct;
    readonly isFeeUpdated: boolean;
    readonly asFeeUpdated: {
      readonly poolId: u32;
      readonly fee: Permill;
    } & Struct;
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly poolId: u32;
      readonly who: AccountId32;
      readonly shares: u128;
      readonly assets: Vec<PalletStableswapAssetAmount>;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly poolId: u32;
      readonly who: AccountId32;
      readonly shares: u128;
      readonly amounts: Vec<PalletStableswapAssetAmount>;
      readonly fee: u128;
    } & Struct;
    readonly isSellExecuted: boolean;
    readonly asSellExecuted: {
      readonly who: AccountId32;
      readonly poolId: u32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly fee: u128;
    } & Struct;
    readonly isBuyExecuted: boolean;
    readonly asBuyExecuted: {
      readonly who: AccountId32;
      readonly poolId: u32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly fee: u128;
    } & Struct;
    readonly isTradableStateUpdated: boolean;
    readonly asTradableStateUpdated: {
      readonly poolId: u32;
      readonly assetId: u32;
      readonly state: PalletStableswapTradability;
    } & Struct;
    readonly isAmplificationChanging: boolean;
    readonly asAmplificationChanging: {
      readonly poolId: u32;
      readonly currentAmplification: u16;
      readonly finalAmplification: u16;
      readonly startBlock: u32;
      readonly endBlock: u32;
    } & Struct;
    readonly type: 'PoolCreated' | 'FeeUpdated' | 'LiquidityAdded' | 'LiquidityRemoved' | 'SellExecuted' | 'BuyExecuted' | 'TradableStateUpdated' | 'AmplificationChanging';
  }

  /** @name PalletStableswapAssetAmount (104) */
  interface PalletStableswapAssetAmount extends Struct {
    readonly assetId: u32;
    readonly amount: u128;
  }

  /** @name PalletStableswapTradability (105) */
  interface PalletStableswapTradability extends Struct {
    readonly bits: u8;
  }

  /** @name PalletBondsEvent (106) */
  interface PalletBondsEvent extends Enum {
    readonly isTokenCreated: boolean;
    readonly asTokenCreated: {
      readonly issuer: AccountId32;
      readonly assetId: u32;
      readonly bondId: u32;
      readonly maturity: u64;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly issuer: AccountId32;
      readonly bondId: u32;
      readonly amount: u128;
      readonly fee: u128;
    } & Struct;
    readonly isRedeemed: boolean;
    readonly asRedeemed: {
      readonly who: AccountId32;
      readonly bondId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'TokenCreated' | 'Issued' | 'Redeemed';
  }

  /** @name PalletLbpEvent (107) */
  interface PalletLbpEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly pool: AccountId32;
      readonly data: PalletLbpPool;
    } & Struct;
    readonly isPoolUpdated: boolean;
    readonly asPoolUpdated: {
      readonly pool: AccountId32;
      readonly data: PalletLbpPool;
    } & Struct;
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly amountA: u128;
      readonly amountB: u128;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly amountA: u128;
      readonly amountB: u128;
    } & Struct;
    readonly isSellExecuted: boolean;
    readonly asSellExecuted: {
      readonly who: AccountId32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amount: u128;
      readonly salePrice: u128;
      readonly feeAsset: u32;
      readonly feeAmount: u128;
    } & Struct;
    readonly isBuyExecuted: boolean;
    readonly asBuyExecuted: {
      readonly who: AccountId32;
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amount: u128;
      readonly buyPrice: u128;
      readonly feeAsset: u32;
      readonly feeAmount: u128;
    } & Struct;
    readonly type: 'PoolCreated' | 'PoolUpdated' | 'LiquidityAdded' | 'LiquidityRemoved' | 'SellExecuted' | 'BuyExecuted';
  }

  /** @name PalletLbpPool (108) */
  interface PalletLbpPool extends Struct {
    readonly owner: AccountId32;
    readonly start: Option<u32>;
    readonly end: Option<u32>;
    readonly assets: ITuple<[u32, u32]>;
    readonly initialWeight: u32;
    readonly finalWeight: u32;
    readonly weightCurve: PalletLbpWeightCurveType;
    readonly fee: ITuple<[u32, u32]>;
    readonly feeCollector: AccountId32;
    readonly repayTarget: u128;
  }

  /** @name PalletLbpWeightCurveType (110) */
  interface PalletLbpWeightCurveType extends Enum {
    readonly isLinear: boolean;
    readonly type: 'Linear';
  }

  /** @name PalletXykEvent (111) */
  interface PalletXykEvent extends Enum {
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly amountA: u128;
      readonly amountB: u128;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly shares: u128;
    } & Struct;
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly initialSharesAmount: u128;
      readonly shareToken: u32;
      readonly pool: AccountId32;
    } & Struct;
    readonly isPoolDestroyed: boolean;
    readonly asPoolDestroyed: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly shareToken: u32;
      readonly pool: AccountId32;
    } & Struct;
    readonly isSellExecuted: boolean;
    readonly asSellExecuted: {
      readonly who: AccountId32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amount: u128;
      readonly salePrice: u128;
      readonly feeAsset: u32;
      readonly feeAmount: u128;
      readonly pool: AccountId32;
    } & Struct;
    readonly isBuyExecuted: boolean;
    readonly asBuyExecuted: {
      readonly who: AccountId32;
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amount: u128;
      readonly buyPrice: u128;
      readonly feeAsset: u32;
      readonly feeAmount: u128;
      readonly pool: AccountId32;
    } & Struct;
    readonly type: 'LiquidityAdded' | 'LiquidityRemoved' | 'PoolCreated' | 'PoolDestroyed' | 'SellExecuted' | 'BuyExecuted';
  }

  /** @name PalletReferralsEvent (112) */
  interface PalletReferralsEvent extends Enum {
    readonly isCodeRegistered: boolean;
    readonly asCodeRegistered: {
      readonly code: Bytes;
      readonly account: AccountId32;
    } & Struct;
    readonly isCodeLinked: boolean;
    readonly asCodeLinked: {
      readonly account: AccountId32;
      readonly code: Bytes;
      readonly referralAccount: AccountId32;
    } & Struct;
    readonly isConverted: boolean;
    readonly asConverted: {
      readonly from: PalletReferralsAssetAmount;
      readonly to: PalletReferralsAssetAmount;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly referrerRewards: u128;
      readonly tradeRewards: u128;
    } & Struct;
    readonly isAssetRewardsUpdated: boolean;
    readonly asAssetRewardsUpdated: {
      readonly assetId: u32;
      readonly level: PalletReferralsLevel;
      readonly rewards: PalletReferralsFeeDistribution;
    } & Struct;
    readonly isLevelUp: boolean;
    readonly asLevelUp: {
      readonly who: AccountId32;
      readonly level: PalletReferralsLevel;
    } & Struct;
    readonly type: 'CodeRegistered' | 'CodeLinked' | 'Converted' | 'Claimed' | 'AssetRewardsUpdated' | 'LevelUp';
  }

  /** @name PalletReferralsAssetAmount (114) */
  interface PalletReferralsAssetAmount extends Struct {
    readonly assetId: u32;
    readonly amount: u128;
  }

  /** @name PalletReferralsLevel (115) */
  interface PalletReferralsLevel extends Enum {
    readonly isNone: boolean;
    readonly isTier0: boolean;
    readonly isTier1: boolean;
    readonly isTier2: boolean;
    readonly isTier3: boolean;
    readonly isTier4: boolean;
    readonly type: 'None' | 'Tier0' | 'Tier1' | 'Tier2' | 'Tier3' | 'Tier4';
  }

  /** @name PalletReferralsFeeDistribution (116) */
  interface PalletReferralsFeeDistribution extends Struct {
    readonly referrer: Permill;
    readonly trader: Permill;
    readonly external: Permill;
  }

  /** @name PalletXcmRateLimiterEvent (117) */
  type PalletXcmRateLimiterEvent = Null;

  /** @name OrmlTokensModuleEvent (118) */
  interface OrmlTokensModuleEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly currencyId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly status: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isTotalIssuanceSet: boolean;
    readonly asTotalIssuanceSet: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly freeAmount: u128;
      readonly reservedAmount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockSet: boolean;
    readonly asLockSet: {
      readonly lockId: U8aFixed;
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockRemoved: boolean;
    readonly asLockRemoved: {
      readonly lockId: U8aFixed;
      readonly currencyId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Locked' | 'Unlocked' | 'Issued' | 'Rescinded';
  }

  /** @name PalletCurrenciesModuleEvent (120) */
  interface PalletCurrenciesModuleEvent extends Enum {
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly currencyId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceUpdated: boolean;
    readonly asBalanceUpdated: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: i128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transferred' | 'BalanceUpdated' | 'Deposited' | 'Withdrawn';
  }

  /** @name OrmlVestingModuleEvent (122) */
  interface OrmlVestingModuleEvent extends Enum {
    readonly isVestingScheduleAdded: boolean;
    readonly asVestingScheduleAdded: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly vestingSchedule: OrmlVestingVestingSchedule;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isVestingSchedulesUpdated: boolean;
    readonly asVestingSchedulesUpdated: {
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'VestingScheduleAdded' | 'Claimed' | 'VestingSchedulesUpdated';
  }

  /** @name OrmlVestingVestingSchedule (123) */
  interface OrmlVestingVestingSchedule extends Struct {
    readonly start: u32;
    readonly period: u32;
    readonly periodCount: u32;
    readonly perPeriod: Compact<u128>;
  }

  /** @name PalletEvmEvent (124) */
  interface PalletEvmEvent extends Enum {
    readonly isLog: boolean;
    readonly asLog: {
      readonly log: EthereumLog;
    } & Struct;
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly address: H160;
    } & Struct;
    readonly isCreatedFailed: boolean;
    readonly asCreatedFailed: {
      readonly address: H160;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly address: H160;
    } & Struct;
    readonly isExecutedFailed: boolean;
    readonly asExecutedFailed: {
      readonly address: H160;
    } & Struct;
    readonly type: 'Log' | 'Created' | 'CreatedFailed' | 'Executed' | 'ExecutedFailed';
  }

  /** @name EthereumLog (125) */
  interface EthereumLog extends Struct {
    readonly address: H160;
    readonly topics: Vec<H256>;
    readonly data: Bytes;
  }

  /** @name PalletEthereumEvent (128) */
  interface PalletEthereumEvent extends Enum {
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly from: H160;
      readonly to: H160;
      readonly transactionHash: H256;
      readonly exitReason: EvmCoreErrorExitReason;
      readonly extraData: Bytes;
    } & Struct;
    readonly type: 'Executed';
  }

  /** @name EvmCoreErrorExitReason (129) */
  interface EvmCoreErrorExitReason extends Enum {
    readonly isSucceed: boolean;
    readonly asSucceed: EvmCoreErrorExitSucceed;
    readonly isError: boolean;
    readonly asError: EvmCoreErrorExitError;
    readonly isRevert: boolean;
    readonly asRevert: EvmCoreErrorExitRevert;
    readonly isFatal: boolean;
    readonly asFatal: EvmCoreErrorExitFatal;
    readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
  }

  /** @name EvmCoreErrorExitSucceed (130) */
  interface EvmCoreErrorExitSucceed extends Enum {
    readonly isStopped: boolean;
    readonly isReturned: boolean;
    readonly isSuicided: boolean;
    readonly type: 'Stopped' | 'Returned' | 'Suicided';
  }

  /** @name EvmCoreErrorExitError (131) */
  interface EvmCoreErrorExitError extends Enum {
    readonly isStackUnderflow: boolean;
    readonly isStackOverflow: boolean;
    readonly isInvalidJump: boolean;
    readonly isInvalidRange: boolean;
    readonly isDesignatedInvalid: boolean;
    readonly isCallTooDeep: boolean;
    readonly isCreateCollision: boolean;
    readonly isCreateContractLimit: boolean;
    readonly isOutOfOffset: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutOfFund: boolean;
    readonly isPcUnderflow: boolean;
    readonly isCreateEmpty: boolean;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly isMaxNonce: boolean;
    readonly isInvalidCode: boolean;
    readonly asInvalidCode: u8;
    readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other' | 'MaxNonce' | 'InvalidCode';
  }

  /** @name EvmCoreErrorExitRevert (135) */
  interface EvmCoreErrorExitRevert extends Enum {
    readonly isReverted: boolean;
    readonly type: 'Reverted';
  }

  /** @name EvmCoreErrorExitFatal (136) */
  interface EvmCoreErrorExitFatal extends Enum {
    readonly isNotSupported: boolean;
    readonly isUnhandledInterrupt: boolean;
    readonly isCallErrorAsFatal: boolean;
    readonly asCallErrorAsFatal: EvmCoreErrorExitError;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
  }

  /** @name PalletEvmAccountsEvent (137) */
  interface PalletEvmAccountsEvent extends Enum {
    readonly isBound: boolean;
    readonly asBound: {
      readonly account: AccountId32;
      readonly address: H160;
    } & Struct;
    readonly isDeployerAdded: boolean;
    readonly asDeployerAdded: {
      readonly who: H160;
    } & Struct;
    readonly isDeployerRemoved: boolean;
    readonly asDeployerRemoved: {
      readonly who: H160;
    } & Struct;
    readonly type: 'Bound' | 'DeployerAdded' | 'DeployerRemoved';
  }

  /** @name CumulusPalletParachainSystemEvent (138) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
    } & Struct;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
  }

  /** @name PalletSchedulerEvent (140) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
  }

  /** @name PalletDcaEvent (141) */
  interface PalletDcaEvent extends Enum {
    readonly isExecutionStarted: boolean;
    readonly asExecutionStarted: {
      readonly id: u32;
      readonly block: u32;
    } & Struct;
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly id: u32;
      readonly who: AccountId32;
      readonly period: u32;
      readonly totalAmount: u128;
      readonly order: PalletDcaOrder;
    } & Struct;
    readonly isExecutionPlanned: boolean;
    readonly asExecutionPlanned: {
      readonly id: u32;
      readonly who: AccountId32;
      readonly block: u32;
    } & Struct;
    readonly isTradeExecuted: boolean;
    readonly asTradeExecuted: {
      readonly id: u32;
      readonly who: AccountId32;
      readonly amountIn: u128;
      readonly amountOut: u128;
    } & Struct;
    readonly isTradeFailed: boolean;
    readonly asTradeFailed: {
      readonly id: u32;
      readonly who: AccountId32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isTerminated: boolean;
    readonly asTerminated: {
      readonly id: u32;
      readonly who: AccountId32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isCompleted: boolean;
    readonly asCompleted: {
      readonly id: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isRandomnessGenerationFailed: boolean;
    readonly asRandomnessGenerationFailed: {
      readonly block: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly type: 'ExecutionStarted' | 'Scheduled' | 'ExecutionPlanned' | 'TradeExecuted' | 'TradeFailed' | 'Terminated' | 'Completed' | 'RandomnessGenerationFailed';
  }

  /** @name PalletDcaOrder (142) */
  interface PalletDcaOrder extends Enum {
    readonly isSell: boolean;
    readonly asSell: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly minAmountOut: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountOut: u128;
      readonly maxAmountIn: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly type: 'Sell' | 'Buy';
  }

  /** @name HydradxTraitsRouterTrade (144) */
  interface HydradxTraitsRouterTrade extends Struct {
    readonly pool: HydradxTraitsRouterPoolType;
    readonly assetIn: u32;
    readonly assetOut: u32;
  }

  /** @name HydradxTraitsRouterPoolType (145) */
  interface HydradxTraitsRouterPoolType extends Enum {
    readonly isXyk: boolean;
    readonly isLbp: boolean;
    readonly isStableswap: boolean;
    readonly asStableswap: u32;
    readonly isOmnipool: boolean;
    readonly type: 'Xyk' | 'Lbp' | 'Stableswap' | 'Omnipool';
  }

  /** @name PalletXcmEvent (147) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly outcome: StagingXcmV3TraitsOutcome;
    } & Struct;
    readonly isSent: boolean;
    readonly asSent: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly destination: StagingXcmV3MultiLocation;
      readonly message: StagingXcmV3Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseReady: boolean;
    readonly asResponseReady: {
      readonly queryId: u64;
      readonly response: StagingXcmV3Response;
    } & Struct;
    readonly isNotified: boolean;
    readonly asNotified: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
      readonly actualWeight: SpWeightsWeightV2Weight;
      readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly expectedLocation: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: {
      readonly queryId: u64;
    } & Struct;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: {
      readonly hash_: H256;
      readonly origin: StagingXcmV3MultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
    } & Struct;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly result: u32;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: {
      readonly location: StagingXcmV3MultiLocation;
      readonly version: u32;
    } & Struct;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: {
      readonly location: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly error: StagingXcmV3TraitsError;
    } & Struct;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: {
      readonly location: StagingXcmVersionedMultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly expectedQuerier: StagingXcmV3MultiLocation;
      readonly maybeActualQuerier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: {
      readonly paying: StagingXcmV3MultiLocation;
      readonly fees: StagingXcmV3MultiassetMultiAssets;
    } & Struct;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: {
      readonly hash_: H256;
      readonly origin: StagingXcmV3MultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
    } & Struct;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
  }

  /** @name StagingXcmV3TraitsOutcome (148) */
  interface StagingXcmV3TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: SpWeightsWeightV2Weight;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, StagingXcmV3TraitsError]>;
    readonly isError: boolean;
    readonly asError: StagingXcmV3TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name StagingXcmV3TraitsError (149) */
  interface StagingXcmV3TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name StagingXcmV3Xcm (150) */
  interface StagingXcmV3Xcm extends Vec<StagingXcmV3Instruction> {}

  /** @name StagingXcmV3Instruction (152) */
  interface StagingXcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: StagingXcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: StagingXcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: StagingXcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: StagingXcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: StagingXcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: StagingXcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: StagingXcmV3MultiassetMultiAssetFilter;
      readonly want: StagingXcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly reserve: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: StagingXcmV3QueryResponseInfo;
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: StagingXcmV3MultiAsset;
      readonly weightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: StagingXcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: StagingXcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly ticket: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, StagingXcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: StagingXcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: StagingXcmV3QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: StagingXcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: StagingXcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: StagingXcmV3JunctionNetworkId;
      readonly destination: StagingXcmV3Junctions;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly unlocker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly target: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly owner: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly locker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: StagingXcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name StagingXcmV3MultiassetMultiAssets (153) */
  interface StagingXcmV3MultiassetMultiAssets extends Vec<StagingXcmV3MultiAsset> {}

  /** @name StagingXcmV3MultiAsset (155) */
  interface StagingXcmV3MultiAsset extends Struct {
    readonly id: StagingXcmV3MultiassetAssetId;
    readonly fun: StagingXcmV3MultiassetFungibility;
  }

  /** @name StagingXcmV3MultiassetAssetId (156) */
  interface StagingXcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name StagingXcmV3MultiassetFungibility (157) */
  interface StagingXcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV3MultiassetAssetInstance (158) */
  interface StagingXcmV3MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name StagingXcmV3Response (160) */
  interface StagingXcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: StagingXcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, StagingXcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<StagingXcmV3PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: StagingXcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name StagingXcmV3PalletInfo (164) */
  interface StagingXcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name StagingXcmV3MaybeErrorCode (167) */
  interface StagingXcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name StagingXcmV2OriginKind (170) */
  interface StagingXcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name StagingXcmDoubleEncoded (171) */
  interface StagingXcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name StagingXcmV3QueryResponseInfo (172) */
  interface StagingXcmV3QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name StagingXcmV3MultiassetMultiAssetFilter (173) */
  interface StagingXcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV3MultiassetWildMultiAsset (174) */
  interface StagingXcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: StagingXcmV3MultiassetAssetId;
      readonly fun: StagingXcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: StagingXcmV3MultiassetAssetId;
      readonly fun: StagingXcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name StagingXcmV3MultiassetWildFungibility (175) */
  interface StagingXcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV3WeightLimit (176) */
  interface StagingXcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name StagingXcmVersionedMultiAssets (177) */
  interface StagingXcmVersionedMultiAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiassetMultiAssets;
    readonly type: 'V2' | 'V3';
  }

  /** @name StagingXcmV2MultiassetMultiAssets (178) */
  interface StagingXcmV2MultiassetMultiAssets extends Vec<StagingXcmV2MultiAsset> {}

  /** @name StagingXcmV2MultiAsset (180) */
  interface StagingXcmV2MultiAsset extends Struct {
    readonly id: StagingXcmV2MultiassetAssetId;
    readonly fun: StagingXcmV2MultiassetFungibility;
  }

  /** @name StagingXcmV2MultiassetAssetId (181) */
  interface StagingXcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name StagingXcmV2MultiLocation (182) */
  interface StagingXcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV2MultilocationJunctions;
  }

  /** @name StagingXcmV2MultilocationJunctions (183) */
  interface StagingXcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: StagingXcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name StagingXcmV2Junction (184) */
  interface StagingXcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: StagingXcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: StagingXcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: StagingXcmV2NetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: StagingXcmV2BodyId;
      readonly part: StagingXcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name StagingXcmV2NetworkId (185) */
  interface StagingXcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name StagingXcmV2BodyId (187) */
  interface StagingXcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name StagingXcmV2BodyPart (188) */
  interface StagingXcmV2BodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name StagingXcmV2MultiassetFungibility (189) */
  interface StagingXcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV2MultiassetAssetInstance (190) */
  interface StagingXcmV2MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name StagingXcmVersionedMultiLocation (191) */
  interface StagingXcmVersionedMultiLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiLocation;
    readonly type: 'V2' | 'V3';
  }

  /** @name CumulusPalletXcmEvent (192) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV3TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name CumulusPalletXcmpQueueEvent (193) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isFail: boolean;
    readonly asFail: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly error: StagingXcmV3TraitsError;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isBadVersion: boolean;
    readonly asBadVersion: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isBadFormat: boolean;
    readonly asBadFormat: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly index: u64;
      readonly required: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly index: u64;
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isXcmDeferred: boolean;
    readonly asXcmDeferred: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly deferredTo: u32;
      readonly index: ITuple<[u32, u16]>;
      readonly position: u32;
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isXcmDeferredQueueFull: boolean;
    readonly asXcmDeferredQueueFull: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isDeferredXcmDiscarded: boolean;
    readonly asDeferredXcmDiscarded: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly deferredTo: u32;
      readonly index: ITuple<[u32, u16]>;
      readonly position: u32;
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isDeferredBucketDiscarded: boolean;
    readonly asDeferredBucketDiscarded: {
      readonly sender: u32;
      readonly index: ITuple<[u32, u16]>;
    } & Struct;
    readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced' | 'XcmDeferred' | 'XcmDeferredQueueFull' | 'DeferredXcmDiscarded' | 'DeferredBucketDiscarded';
  }

  /** @name CumulusPalletDmpQueueEvent (196) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly outcome: StagingXcmV3TraitsOutcome;
    } & Struct;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly remainingWeight: SpWeightsWeightV2Weight;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly overweightIndex: u64;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly overweightIndex: u64;
      readonly weightUsed: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isMaxMessagesExhausted: boolean;
    readonly asMaxMessagesExhausted: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
  }

  /** @name OrmlXcmModuleEvent (197) */
  interface OrmlXcmModuleEvent extends Enum {
    readonly isSent: boolean;
    readonly asSent: {
      readonly to: StagingXcmV3MultiLocation;
      readonly message: StagingXcmV3Xcm;
    } & Struct;
    readonly type: 'Sent';
  }

  /** @name OrmlXtokensModuleEvent (198) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredMultiAssets: boolean;
    readonly asTransferredMultiAssets: {
      readonly sender: AccountId32;
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly fee: StagingXcmV3MultiAsset;
      readonly dest: StagingXcmV3MultiLocation;
    } & Struct;
    readonly type: 'TransferredMultiAssets';
  }

  /** @name OrmlUnknownTokensModuleEvent (199) */
  interface OrmlUnknownTokensModuleEvent extends Enum {
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly who: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly who: StagingXcmV3MultiLocation;
    } & Struct;
    readonly type: 'Deposited' | 'Withdrawn';
  }

  /** @name PalletCollatorSelectionEvent (200) */
  interface PalletCollatorSelectionEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isInvulnerableAdded: boolean;
    readonly asInvulnerableAdded: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isInvulnerableRemoved: boolean;
    readonly asInvulnerableRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isNewDesiredCandidates: boolean;
    readonly asNewDesiredCandidates: {
      readonly desiredCandidates: u32;
    } & Struct;
    readonly isNewCandidacyBond: boolean;
    readonly asNewCandidacyBond: {
      readonly bondAmount: u128;
    } & Struct;
    readonly isCandidateAdded: boolean;
    readonly asCandidateAdded: {
      readonly accountId: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isInvalidInvulnerableSkipped: boolean;
    readonly asInvalidInvulnerableSkipped: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'NewInvulnerables' | 'InvulnerableAdded' | 'InvulnerableRemoved' | 'NewDesiredCandidates' | 'NewCandidacyBond' | 'CandidateAdded' | 'CandidateRemoved' | 'InvalidInvulnerableSkipped';
  }

  /** @name PalletSessionEvent (202) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletRelaychainInfoEvent (203) */
  interface PalletRelaychainInfoEvent extends Enum {
    readonly isCurrentBlockNumbers: boolean;
    readonly asCurrentBlockNumbers: {
      readonly parachainBlockNumber: u32;
      readonly relaychainBlockNumber: u32;
    } & Struct;
    readonly type: 'CurrentBlockNumbers';
  }

  /** @name PalletEmaOracleEvent (204) */
  type PalletEmaOracleEvent = Null;

  /** @name PalletTransactionMultiPaymentEvent (205) */
  interface PalletTransactionMultiPaymentEvent extends Enum {
    readonly isCurrencySet: boolean;
    readonly asCurrencySet: {
      readonly accountId: AccountId32;
      readonly assetId: u32;
    } & Struct;
    readonly isCurrencyAdded: boolean;
    readonly asCurrencyAdded: {
      readonly assetId: u32;
    } & Struct;
    readonly isCurrencyRemoved: boolean;
    readonly asCurrencyRemoved: {
      readonly assetId: u32;
    } & Struct;
    readonly isFeeWithdrawn: boolean;
    readonly asFeeWithdrawn: {
      readonly accountId: AccountId32;
      readonly assetId: u32;
      readonly nativeFeeAmount: u128;
      readonly nonNativeFeeAmount: u128;
      readonly destinationAccountId: AccountId32;
    } & Struct;
    readonly type: 'CurrencySet' | 'CurrencyAdded' | 'CurrencyRemoved' | 'FeeWithdrawn';
  }

  /** @name FrameSystemPhase (206) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (208) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (209) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (213) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (214) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (215) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (217) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (218) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (219) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (220) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (224) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (225) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletBalancesBalanceLock (227) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (228) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (231) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesIdAmount (234) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletBalancesCall (237) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: AccountId32;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalanceDeprecated: boolean;
    readonly asSetBalanceDeprecated: {
      readonly who: AccountId32;
      readonly newFree: Compact<u128>;
      readonly oldReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: AccountId32;
      readonly dest: AccountId32;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: AccountId32;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: AccountId32;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: AccountId32;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: AccountId32;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'SetBalanceDeprecated' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'Transfer' | 'ForceSetBalance';
  }

  /** @name PalletBalancesError (238) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes';
  }

  /** @name PalletTransactionPaymentReleases (239) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletTreasuryProposal (240) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name PalletTreasuryCall (242) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly amount: Compact<u128>;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
  }

  /** @name FrameSupportPalletId (243) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (244) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletUtilityCall (245) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: HydradxRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name PalletPreimageCall (248) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
  }

  /** @name PalletIdentityCall (249) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: AccountId32;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: AccountId32;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: AccountId32;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: AccountId32;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: AccountId32;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: AccountId32;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: AccountId32;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (250) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (286) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (287) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (288) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletDemocracyCall (289) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: AccountId32;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata';
  }

  /** @name FrameSupportPreimagesBounded (290) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name PalletDemocracyConviction (292) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletElectionsPhragmenCall (294) */
  interface PalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly votes: Vec<AccountId32>;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isRemoveVoter: boolean;
    readonly isSubmitCandidacy: boolean;
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>;
    } & Struct;
    readonly isRenounceCandidacy: boolean;
    readonly asRenounceCandidacy: {
      readonly renouncing: PalletElectionsPhragmenRenouncing;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: AccountId32;
      readonly slashBond: bool;
      readonly rerunElection: bool;
    } & Struct;
    readonly isCleanDefunctVoters: boolean;
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32;
      readonly numDefunct: u32;
    } & Struct;
    readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
  }

  /** @name PalletElectionsPhragmenRenouncing (295) */
  interface PalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean;
    readonly isRunnerUp: boolean;
    readonly isCandidate: boolean;
    readonly asCandidate: Compact<u32>;
    readonly type: 'Member' | 'RunnerUp' | 'Candidate';
  }

  /** @name PalletCollectiveCall (296) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletTipsCall (298) */
  interface PalletTipsCall extends Enum {
    readonly isReportAwesome: boolean;
    readonly asReportAwesome: {
      readonly reason: Bytes;
      readonly who: AccountId32;
    } & Struct;
    readonly isRetractTip: boolean;
    readonly asRetractTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isTipNew: boolean;
    readonly asTipNew: {
      readonly reason: Bytes;
      readonly who: AccountId32;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isTip: boolean;
    readonly asTip: {
      readonly hash_: H256;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isCloseTip: boolean;
    readonly asCloseTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isSlashTip: boolean;
    readonly asSlashTip: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
  }

  /** @name PalletProxyCall (299) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: AccountId32;
      readonly forceProxyType: Option<HydradxRuntimeSystemProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: AccountId32;
      readonly real: AccountId32;
      readonly forceProxyType: Option<HydradxRuntimeSystemProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletMultisigCall (301) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletUniquesCall (303) */
  interface PalletUniquesCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly collection: u128;
      readonly admin: AccountId32;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly collection: u128;
      readonly owner: AccountId32;
      readonly freeHolding: bool;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly collection: u128;
      readonly witness: PalletUniquesDestroyWitness;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly collection: u128;
      readonly item: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly collection: u128;
      readonly item: u128;
      readonly checkOwner: Option<AccountId32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly collection: u128;
      readonly item: u128;
      readonly dest: AccountId32;
    } & Struct;
    readonly isRedeposit: boolean;
    readonly asRedeposit: {
      readonly collection: u128;
      readonly items: Vec<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isFreezeCollection: boolean;
    readonly asFreezeCollection: {
      readonly collection: u128;
    } & Struct;
    readonly isThawCollection: boolean;
    readonly asThawCollection: {
      readonly collection: u128;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly collection: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly collection: u128;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly collection: u128;
      readonly item: u128;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly collection: u128;
      readonly item: u128;
      readonly maybeCheckDelegate: Option<AccountId32>;
    } & Struct;
    readonly isForceItemStatus: boolean;
    readonly asForceItemStatus: {
      readonly collection: u128;
      readonly owner: AccountId32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
      readonly freeHolding: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isSetAttribute: boolean;
    readonly asSetAttribute: {
      readonly collection: u128;
      readonly maybeItem: Option<u128>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isClearAttribute: boolean;
    readonly asClearAttribute: {
      readonly collection: u128;
      readonly maybeItem: Option<u128>;
      readonly key: Bytes;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly collection: u128;
      readonly item: u128;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isSetCollectionMetadata: boolean;
    readonly asSetCollectionMetadata: {
      readonly collection: u128;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearCollectionMetadata: boolean;
    readonly asClearCollectionMetadata: {
      readonly collection: u128;
    } & Struct;
    readonly isSetAcceptOwnership: boolean;
    readonly asSetAcceptOwnership: {
      readonly maybeCollection: Option<u128>;
    } & Struct;
    readonly isSetCollectionMaxSupply: boolean;
    readonly asSetCollectionMaxSupply: {
      readonly collection: u128;
      readonly maxSupply: u32;
    } & Struct;
    readonly isSetPrice: boolean;
    readonly asSetPrice: {
      readonly collection: u128;
      readonly item: u128;
      readonly price: Option<u128>;
      readonly whitelistedBuyer: Option<AccountId32>;
    } & Struct;
    readonly isBuyItem: boolean;
    readonly asBuyItem: {
      readonly collection: u128;
      readonly item: u128;
      readonly bidPrice: u128;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'Burn' | 'Transfer' | 'Redeposit' | 'Freeze' | 'Thaw' | 'FreezeCollection' | 'ThawCollection' | 'TransferOwnership' | 'SetTeam' | 'ApproveTransfer' | 'CancelApproval' | 'ForceItemStatus' | 'SetAttribute' | 'ClearAttribute' | 'SetMetadata' | 'ClearMetadata' | 'SetCollectionMetadata' | 'ClearCollectionMetadata' | 'SetAcceptOwnership' | 'SetCollectionMaxSupply' | 'SetPrice' | 'BuyItem';
  }

  /** @name PalletUniquesDestroyWitness (304) */
  interface PalletUniquesDestroyWitness extends Struct {
    readonly items: Compact<u32>;
    readonly itemMetadatas: Compact<u32>;
    readonly attributes: Compact<u32>;
  }

  /** @name PalletAssetRegistryCall (305) */
  interface PalletAssetRegistryCall extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly assetId: Option<u32>;
      readonly name: Option<Bytes>;
      readonly assetType: PalletAssetRegistryAssetType;
      readonly existentialDeposit: Option<u128>;
      readonly symbol: Option<Bytes>;
      readonly decimals: Option<u8>;
      readonly location: Option<HydradxRuntimeXcmAssetLocation>;
      readonly xcmRateLimit: Option<u128>;
      readonly isSufficient: bool;
    } & Struct;
    readonly isUpdate: boolean;
    readonly asUpdate: {
      readonly assetId: u32;
      readonly name: Option<Bytes>;
      readonly assetType: Option<PalletAssetRegistryAssetType>;
      readonly existentialDeposit: Option<u128>;
      readonly xcmRateLimit: Option<u128>;
      readonly isSufficient: Option<bool>;
      readonly symbol: Option<Bytes>;
      readonly decimals: Option<u8>;
      readonly location: Option<HydradxRuntimeXcmAssetLocation>;
    } & Struct;
    readonly isRegisterExternal: boolean;
    readonly asRegisterExternal: {
      readonly location: HydradxRuntimeXcmAssetLocation;
    } & Struct;
    readonly isBanAsset: boolean;
    readonly asBanAsset: {
      readonly assetId: u32;
    } & Struct;
    readonly isUnbanAsset: boolean;
    readonly asUnbanAsset: {
      readonly assetId: u32;
    } & Struct;
    readonly type: 'Register' | 'Update' | 'RegisterExternal' | 'BanAsset' | 'UnbanAsset';
  }

  /** @name PalletClaimsCall (309) */
  interface PalletClaimsCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly ethereumSignature: PalletClaimsEcdsaSignature;
    } & Struct;
    readonly type: 'Claim';
  }

  /** @name PalletClaimsEcdsaSignature (310) */
  interface PalletClaimsEcdsaSignature extends U8aFixed {}

  /** @name PalletGenesisHistoryCall (312) */
  type PalletGenesisHistoryCall = Null;

  /** @name PalletOmnipoolCall (313) */
  interface PalletOmnipoolCall extends Enum {
    readonly isAddToken: boolean;
    readonly asAddToken: {
      readonly asset: u32;
      readonly initialPrice: u128;
      readonly weightCap: Permill;
      readonly positionOwner: AccountId32;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly asset: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly positionId: u128;
      readonly amount: u128;
    } & Struct;
    readonly isSacrificePosition: boolean;
    readonly asSacrificePosition: {
      readonly positionId: u128;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amount: u128;
      readonly minBuyAmount: u128;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amount: u128;
      readonly maxSellAmount: u128;
    } & Struct;
    readonly isSetAssetTradableState: boolean;
    readonly asSetAssetTradableState: {
      readonly assetId: u32;
      readonly state: PalletOmnipoolTradability;
    } & Struct;
    readonly isRefundRefusedAsset: boolean;
    readonly asRefundRefusedAsset: {
      readonly assetId: u32;
      readonly amount: u128;
      readonly recipient: AccountId32;
    } & Struct;
    readonly isSetAssetWeightCap: boolean;
    readonly asSetAssetWeightCap: {
      readonly assetId: u32;
      readonly cap: Permill;
    } & Struct;
    readonly isWithdrawProtocolLiquidity: boolean;
    readonly asWithdrawProtocolLiquidity: {
      readonly assetId: u32;
      readonly amount: u128;
      readonly price: ITuple<[u128, u128]>;
      readonly dest: AccountId32;
    } & Struct;
    readonly isRemoveToken: boolean;
    readonly asRemoveToken: {
      readonly assetId: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly type: 'AddToken' | 'AddLiquidity' | 'RemoveLiquidity' | 'SacrificePosition' | 'Sell' | 'Buy' | 'SetAssetTradableState' | 'RefundRefusedAsset' | 'SetAssetWeightCap' | 'WithdrawProtocolLiquidity' | 'RemoveToken';
  }

  /** @name PalletTransactionPauseCall (315) */
  interface PalletTransactionPauseCall extends Enum {
    readonly isPauseTransaction: boolean;
    readonly asPauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly isUnpauseTransaction: boolean;
    readonly asUnpauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly type: 'PauseTransaction' | 'UnpauseTransaction';
  }

  /** @name PalletDusterCall (316) */
  interface PalletDusterCall extends Enum {
    readonly isDustAccount: boolean;
    readonly asDustAccount: {
      readonly account: AccountId32;
      readonly currencyId: u32;
    } & Struct;
    readonly isAddNondustableAccount: boolean;
    readonly asAddNondustableAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemoveNondustableAccount: boolean;
    readonly asRemoveNondustableAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'DustAccount' | 'AddNondustableAccount' | 'RemoveNondustableAccount';
  }

  /** @name PalletLiquidityMiningCall (317) */
  type PalletLiquidityMiningCall = Null;

  /** @name PalletOmnipoolLiquidityMiningCall (318) */
  interface PalletOmnipoolLiquidityMiningCall extends Enum {
    readonly isCreateGlobalFarm: boolean;
    readonly asCreateGlobalFarm: {
      readonly totalRewards: u128;
      readonly plannedYieldingPeriods: u32;
      readonly blocksPerPeriod: u32;
      readonly rewardCurrency: u32;
      readonly owner: AccountId32;
      readonly yieldPerPeriod: Perquintill;
      readonly minDeposit: u128;
      readonly lrnaPriceAdjustment: u128;
    } & Struct;
    readonly isTerminateGlobalFarm: boolean;
    readonly asTerminateGlobalFarm: {
      readonly globalFarmId: u32;
    } & Struct;
    readonly isCreateYieldFarm: boolean;
    readonly asCreateYieldFarm: {
      readonly globalFarmId: u32;
      readonly assetId: u32;
      readonly multiplier: u128;
      readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>;
    } & Struct;
    readonly isUpdateYieldFarm: boolean;
    readonly asUpdateYieldFarm: {
      readonly globalFarmId: u32;
      readonly assetId: u32;
      readonly multiplier: u128;
    } & Struct;
    readonly isStopYieldFarm: boolean;
    readonly asStopYieldFarm: {
      readonly globalFarmId: u32;
      readonly assetId: u32;
    } & Struct;
    readonly isResumeYieldFarm: boolean;
    readonly asResumeYieldFarm: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly multiplier: u128;
    } & Struct;
    readonly isTerminateYieldFarm: boolean;
    readonly asTerminateYieldFarm: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
    } & Struct;
    readonly isDepositShares: boolean;
    readonly asDepositShares: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly positionId: u128;
    } & Struct;
    readonly isRedepositShares: boolean;
    readonly asRedepositShares: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly depositId: u128;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly asClaimRewards: {
      readonly depositId: u128;
      readonly yieldFarmId: u32;
    } & Struct;
    readonly isWithdrawShares: boolean;
    readonly asWithdrawShares: {
      readonly depositId: u128;
      readonly yieldFarmId: u32;
    } & Struct;
    readonly type: 'CreateGlobalFarm' | 'TerminateGlobalFarm' | 'CreateYieldFarm' | 'UpdateYieldFarm' | 'StopYieldFarm' | 'ResumeYieldFarm' | 'TerminateYieldFarm' | 'DepositShares' | 'RedepositShares' | 'ClaimRewards' | 'WithdrawShares';
  }

  /** @name PalletOtcCall (319) */
  interface PalletOtcCall extends Enum {
    readonly isPlaceOrder: boolean;
    readonly asPlaceOrder: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly partiallyFillable: bool;
    } & Struct;
    readonly isPartialFillOrder: boolean;
    readonly asPartialFillOrder: {
      readonly orderId: u32;
      readonly amountIn: u128;
    } & Struct;
    readonly isFillOrder: boolean;
    readonly asFillOrder: {
      readonly orderId: u32;
    } & Struct;
    readonly isCancelOrder: boolean;
    readonly asCancelOrder: {
      readonly orderId: u32;
    } & Struct;
    readonly type: 'PlaceOrder' | 'PartialFillOrder' | 'FillOrder' | 'CancelOrder';
  }

  /** @name PalletCircuitBreakerCall (320) */
  interface PalletCircuitBreakerCall extends Enum {
    readonly isSetTradeVolumeLimit: boolean;
    readonly asSetTradeVolumeLimit: {
      readonly assetId: u32;
      readonly tradeVolumeLimit: ITuple<[u32, u32]>;
    } & Struct;
    readonly isSetAddLiquidityLimit: boolean;
    readonly asSetAddLiquidityLimit: {
      readonly assetId: u32;
      readonly liquidityLimit: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly isSetRemoveLiquidityLimit: boolean;
    readonly asSetRemoveLiquidityLimit: {
      readonly assetId: u32;
      readonly liquidityLimit: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly type: 'SetTradeVolumeLimit' | 'SetAddLiquidityLimit' | 'SetRemoveLiquidityLimit';
  }

  /** @name PalletRouteExecutorCall (321) */
  interface PalletRouteExecutorCall extends Enum {
    readonly isSell: boolean;
    readonly asSell: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly minAmountOut: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountOut: u128;
      readonly maxAmountIn: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly isSetRoute: boolean;
    readonly asSetRoute: {
      readonly assetPair: HydradxTraitsRouterAssetPair;
      readonly newRoute: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly type: 'Sell' | 'Buy' | 'SetRoute';
  }

  /** @name HydradxTraitsRouterAssetPair (322) */
  interface HydradxTraitsRouterAssetPair extends Struct {
    readonly assetIn: u32;
    readonly assetOut: u32;
  }

  /** @name PalletDynamicFeesCall (323) */
  type PalletDynamicFeesCall = Null;

  /** @name PalletStakingCall (324) */
  interface PalletStakingCall extends Enum {
    readonly isInitializeStaking: boolean;
    readonly isStake: boolean;
    readonly asStake: {
      readonly amount: u128;
    } & Struct;
    readonly isIncreaseStake: boolean;
    readonly asIncreaseStake: {
      readonly positionId: u128;
      readonly amount: u128;
    } & Struct;
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly positionId: u128;
    } & Struct;
    readonly isUnstake: boolean;
    readonly asUnstake: {
      readonly positionId: u128;
    } & Struct;
    readonly type: 'InitializeStaking' | 'Stake' | 'IncreaseStake' | 'Claim' | 'Unstake';
  }

  /** @name PalletStableswapCall (325) */
  interface PalletStableswapCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly shareAsset: u32;
      readonly assets: Vec<u32>;
      readonly amplification: u16;
      readonly fee: Permill;
    } & Struct;
    readonly isUpdatePoolFee: boolean;
    readonly asUpdatePoolFee: {
      readonly poolId: u32;
      readonly fee: Permill;
    } & Struct;
    readonly isUpdateAmplification: boolean;
    readonly asUpdateAmplification: {
      readonly poolId: u32;
      readonly finalAmplification: u16;
      readonly startBlock: u32;
      readonly endBlock: u32;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly poolId: u32;
      readonly assets: Vec<PalletStableswapAssetAmount>;
    } & Struct;
    readonly isAddLiquidityShares: boolean;
    readonly asAddLiquidityShares: {
      readonly poolId: u32;
      readonly shares: u128;
      readonly assetId: u32;
      readonly maxAssetAmount: u128;
    } & Struct;
    readonly isRemoveLiquidityOneAsset: boolean;
    readonly asRemoveLiquidityOneAsset: {
      readonly poolId: u32;
      readonly assetId: u32;
      readonly shareAmount: u128;
      readonly minAmountOut: u128;
    } & Struct;
    readonly isWithdrawAssetAmount: boolean;
    readonly asWithdrawAssetAmount: {
      readonly poolId: u32;
      readonly assetId: u32;
      readonly amount: u128;
      readonly maxShareAmount: u128;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly poolId: u32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly minBuyAmount: u128;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly poolId: u32;
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amountOut: u128;
      readonly maxSellAmount: u128;
    } & Struct;
    readonly isSetAssetTradableState: boolean;
    readonly asSetAssetTradableState: {
      readonly poolId: u32;
      readonly assetId: u32;
      readonly state: PalletStableswapTradability;
    } & Struct;
    readonly type: 'CreatePool' | 'UpdatePoolFee' | 'UpdateAmplification' | 'AddLiquidity' | 'AddLiquidityShares' | 'RemoveLiquidityOneAsset' | 'WithdrawAssetAmount' | 'Sell' | 'Buy' | 'SetAssetTradableState';
  }

  /** @name PalletBondsCall (326) */
  interface PalletBondsCall extends Enum {
    readonly isIssue: boolean;
    readonly asIssue: {
      readonly assetId: u32;
      readonly amount: u128;
      readonly maturity: u64;
    } & Struct;
    readonly isRedeem: boolean;
    readonly asRedeem: {
      readonly bondId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Issue' | 'Redeem';
  }

  /** @name PalletLbpCall (327) */
  interface PalletLbpCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly poolOwner: AccountId32;
      readonly assetA: u32;
      readonly assetAAmount: u128;
      readonly assetB: u32;
      readonly assetBAmount: u128;
      readonly initialWeight: u32;
      readonly finalWeight: u32;
      readonly weightCurve: PalletLbpWeightCurveType;
      readonly fee: ITuple<[u32, u32]>;
      readonly feeCollector: AccountId32;
      readonly repayTarget: u128;
    } & Struct;
    readonly isUpdatePoolData: boolean;
    readonly asUpdatePoolData: {
      readonly poolId: AccountId32;
      readonly poolOwner: Option<AccountId32>;
      readonly start: Option<u32>;
      readonly end: Option<u32>;
      readonly initialWeight: Option<u32>;
      readonly finalWeight: Option<u32>;
      readonly fee: Option<ITuple<[u32, u32]>>;
      readonly feeCollector: Option<AccountId32>;
      readonly repayTarget: Option<u128>;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly amountA: ITuple<[u32, u128]>;
      readonly amountB: ITuple<[u32, u128]>;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly poolId: AccountId32;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amount: u128;
      readonly maxLimit: u128;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amount: u128;
      readonly maxLimit: u128;
    } & Struct;
    readonly type: 'CreatePool' | 'UpdatePoolData' | 'AddLiquidity' | 'RemoveLiquidity' | 'Sell' | 'Buy';
  }

  /** @name PalletXykCall (329) */
  interface PalletXykCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly assetA: u32;
      readonly amountA: u128;
      readonly assetB: u32;
      readonly amountB: u128;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly assetA: u32;
      readonly assetB: u32;
      readonly amountA: u128;
      readonly amountBMaxLimit: u128;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly assetA: u32;
      readonly assetB: u32;
      readonly liquidityAmount: u128;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amount: u128;
      readonly maxLimit: u128;
      readonly discount: bool;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amount: u128;
      readonly maxLimit: u128;
      readonly discount: bool;
    } & Struct;
    readonly type: 'CreatePool' | 'AddLiquidity' | 'RemoveLiquidity' | 'Sell' | 'Buy';
  }

  /** @name PalletReferralsCall (330) */
  interface PalletReferralsCall extends Enum {
    readonly isRegisterCode: boolean;
    readonly asRegisterCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isLinkCode: boolean;
    readonly asLinkCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isConvert: boolean;
    readonly asConvert: {
      readonly assetId: u32;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly isSetRewardPercentage: boolean;
    readonly asSetRewardPercentage: {
      readonly assetId: u32;
      readonly level: PalletReferralsLevel;
      readonly rewards: PalletReferralsFeeDistribution;
    } & Struct;
    readonly type: 'RegisterCode' | 'LinkCode' | 'Convert' | 'ClaimRewards' | 'SetRewardPercentage';
  }

  /** @name PalletXcmRateLimiterCall (331) */
  type PalletXcmRateLimiterCall = Null;

  /** @name OrmlTokensModuleCall (332) */
  interface OrmlTokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: AccountId32;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: AccountId32;
      readonly currencyId: u32;
      readonly keepAlive: bool;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: AccountId32;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: AccountId32;
      readonly dest: AccountId32;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: AccountId32;
      readonly currencyId: u32;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly type: 'Transfer' | 'TransferAll' | 'TransferKeepAlive' | 'ForceTransfer' | 'SetBalance';
  }

  /** @name PalletCurrenciesModuleCall (333) */
  interface PalletCurrenciesModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: AccountId32;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferNativeCurrency: boolean;
    readonly asTransferNativeCurrency: {
      readonly dest: AccountId32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUpdateBalance: boolean;
    readonly asUpdateBalance: {
      readonly who: AccountId32;
      readonly currencyId: u32;
      readonly amount: i128;
    } & Struct;
    readonly type: 'Transfer' | 'TransferNativeCurrency' | 'UpdateBalance';
  }

  /** @name OrmlVestingModuleCall (334) */
  interface OrmlVestingModuleCall extends Enum {
    readonly isClaim: boolean;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly dest: AccountId32;
      readonly schedule: OrmlVestingVestingSchedule;
    } & Struct;
    readonly isUpdateVestingSchedules: boolean;
    readonly asUpdateVestingSchedules: {
      readonly who: AccountId32;
      readonly vestingSchedules: Vec<OrmlVestingVestingSchedule>;
    } & Struct;
    readonly isClaimFor: boolean;
    readonly asClaimFor: {
      readonly dest: AccountId32;
    } & Struct;
    readonly type: 'Claim' | 'VestedTransfer' | 'UpdateVestingSchedules' | 'ClaimFor';
  }

  /** @name PalletEvmCall (336) */
  interface PalletEvmCall extends Enum {
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly address: H160;
      readonly value: u128;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly source: H160;
      readonly target: H160;
      readonly input: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly source: H160;
      readonly init: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate2: boolean;
    readonly asCreate2: {
      readonly source: H160;
      readonly init: Bytes;
      readonly salt: H256;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly type: 'Withdraw' | 'Call' | 'Create' | 'Create2';
  }

  /** @name PalletEthereumCall (342) */
  interface PalletEthereumCall extends Enum {
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly transaction: EthereumTransactionTransactionV2;
    } & Struct;
    readonly type: 'Transact';
  }

  /** @name EthereumTransactionTransactionV2 (343) */
  interface EthereumTransactionTransactionV2 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumTransactionLegacyTransaction;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumTransactionEip2930Transaction;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumTransactionEip1559Transaction;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumTransactionLegacyTransaction (344) */
  interface EthereumTransactionLegacyTransaction extends Struct {
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly signature: EthereumTransactionTransactionSignature;
  }

  /** @name EthereumTransactionTransactionAction (345) */
  interface EthereumTransactionTransactionAction extends Enum {
    readonly isCall: boolean;
    readonly asCall: H160;
    readonly isCreate: boolean;
    readonly type: 'Call' | 'Create';
  }

  /** @name EthereumTransactionTransactionSignature (346) */
  interface EthereumTransactionTransactionSignature extends Struct {
    readonly v: u64;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionEip2930Transaction (348) */
  interface EthereumTransactionEip2930Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionAccessListItem (350) */
  interface EthereumTransactionAccessListItem extends Struct {
    readonly address: H160;
    readonly storageKeys: Vec<H256>;
  }

  /** @name EthereumTransactionEip1559Transaction (351) */
  interface EthereumTransactionEip1559Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly maxPriorityFeePerGas: U256;
    readonly maxFeePerGas: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name PalletEvmAccountsCall (352) */
  interface PalletEvmAccountsCall extends Enum {
    readonly isBindEvmAddress: boolean;
    readonly isAddContractDeployer: boolean;
    readonly asAddContractDeployer: {
      readonly address: H160;
    } & Struct;
    readonly isRemoveContractDeployer: boolean;
    readonly asRemoveContractDeployer: {
      readonly address: H160;
    } & Struct;
    readonly isRenounceContractDeployer: boolean;
    readonly type: 'BindEvmAddress' | 'AddContractDeployer' | 'RemoveContractDeployer' | 'RenounceContractDeployer';
  }

  /** @name CumulusPalletParachainSystemCall (353) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (354) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV5PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotPrimitivesV5PersistedValidationData (355) */
  interface PolkadotPrimitivesV5PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name SpTrieStorageProof (357) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (360) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (363) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name ParachainInfoCall (366) */
  type ParachainInfoCall = Null;

  /** @name PalletSchedulerCall (367) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletDcaCall (368) */
  interface PalletDcaCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly schedule: PalletDcaSchedule;
      readonly startExecutionBlock: Option<u32>;
    } & Struct;
    readonly isTerminate: boolean;
    readonly asTerminate: {
      readonly scheduleId: u32;
      readonly nextExecutionBlock: Option<u32>;
    } & Struct;
    readonly type: 'Schedule' | 'Terminate';
  }

  /** @name PalletDcaSchedule (369) */
  interface PalletDcaSchedule extends Struct {
    readonly owner: AccountId32;
    readonly period: u32;
    readonly totalAmount: u128;
    readonly maxRetries: Option<u8>;
    readonly stabilityThreshold: Option<Permill>;
    readonly slippage: Option<Permill>;
    readonly order: PalletDcaOrder;
  }

  /** @name PalletXcmCall (371) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly message: StagingXcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: StagingXcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: StagingXcmV3MultiLocation;
      readonly version: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: StagingXcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: StagingXcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension';
  }

  /** @name StagingXcmVersionedXcm (372) */
  interface StagingXcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3Xcm;
    readonly type: 'V2' | 'V3';
  }

  /** @name StagingXcmV2Xcm (373) */
  interface StagingXcmV2Xcm extends Vec<StagingXcmV2Instruction> {}

  /** @name StagingXcmV2Instruction (375) */
  interface StagingXcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: StagingXcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: StagingXcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: StagingXcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: StagingXcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssets;
      readonly beneficiary: StagingXcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssets;
      readonly dest: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: StagingXcmV2OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: StagingXcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: StagingXcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: StagingXcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: StagingXcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: StagingXcmV2MultiassetMultiAssetFilter;
      readonly receive: StagingXcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly reserve: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: StagingXcmV2MultiLocation;
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: StagingXcmV2MultiAsset;
      readonly weightLimit: StagingXcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: StagingXcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: StagingXcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssets;
      readonly ticket: StagingXcmV2MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name StagingXcmV2Response (376) */
  interface StagingXcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: StagingXcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, StagingXcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name StagingXcmV2TraitsError (379) */
  interface StagingXcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name StagingXcmV2MultiassetMultiAssetFilter (380) */
  interface StagingXcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV2MultiassetWildMultiAsset (381) */
  interface StagingXcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: StagingXcmV2MultiassetAssetId;
      readonly fun: StagingXcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name StagingXcmV2MultiassetWildFungibility (382) */
  interface StagingXcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV2WeightLimit (383) */
  interface StagingXcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name CumulusPalletXcmCall (392) */
  type CumulusPalletXcmCall = Null;

  /** @name CumulusPalletDmpQueueCall (393) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name OrmlXcmModuleCall (394) */
  interface OrmlXcmModuleCall extends Enum {
    readonly isSendAsSovereign: boolean;
    readonly asSendAsSovereign: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly message: StagingXcmVersionedXcm;
    } & Struct;
    readonly type: 'SendAsSovereign';
  }

  /** @name OrmlXtokensModuleCall (395) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: u32;
      readonly amount: u128;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: StagingXcmVersionedMultiAsset;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: u32;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: StagingXcmVersionedMultiAsset;
      readonly fee: StagingXcmVersionedMultiAsset;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[u32, u128]>>;
      readonly feeItem: u32;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeItem: u32;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name StagingXcmVersionedMultiAsset (396) */
  interface StagingXcmVersionedMultiAsset extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2MultiAsset;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiAsset;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletCollatorSelectionCall (398) */
  interface PalletCollatorSelectionCall extends Enum {
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly new_: Vec<AccountId32>;
    } & Struct;
    readonly isSetDesiredCandidates: boolean;
    readonly asSetDesiredCandidates: {
      readonly max: u32;
    } & Struct;
    readonly isSetCandidacyBond: boolean;
    readonly asSetCandidacyBond: {
      readonly bond: u128;
    } & Struct;
    readonly isRegisterAsCandidate: boolean;
    readonly isLeaveIntent: boolean;
    readonly isAddInvulnerable: boolean;
    readonly asAddInvulnerable: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoveInvulnerable: boolean;
    readonly asRemoveInvulnerable: {
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'SetInvulnerables' | 'SetDesiredCandidates' | 'SetCandidacyBond' | 'RegisterAsCandidate' | 'LeaveIntent' | 'AddInvulnerable' | 'RemoveInvulnerable';
  }

  /** @name PalletSessionCall (399) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: HydradxRuntimeOpaqueSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name HydradxRuntimeOpaqueSessionKeys (400) */
  interface HydradxRuntimeOpaqueSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (401) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (402) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletRelaychainInfoCall (403) */
  type PalletRelaychainInfoCall = Null;

  /** @name PalletEmaOracleCall (404) */
  type PalletEmaOracleCall = Null;

  /** @name PalletTransactionMultiPaymentCall (405) */
  interface PalletTransactionMultiPaymentCall extends Enum {
    readonly isSetCurrency: boolean;
    readonly asSetCurrency: {
      readonly currency: u32;
    } & Struct;
    readonly isAddCurrency: boolean;
    readonly asAddCurrency: {
      readonly currency: u32;
      readonly price: u128;
    } & Struct;
    readonly isRemoveCurrency: boolean;
    readonly asRemoveCurrency: {
      readonly currency: u32;
    } & Struct;
    readonly type: 'SetCurrency' | 'AddCurrency' | 'RemoveCurrency';
  }

  /** @name HydradxRuntimeOriginCaller (406) */
  interface HydradxRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly isEthereum: boolean;
    readonly asEthereum: PalletEthereumRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'Council' | 'TechnicalCommittee' | 'Ethereum' | 'PolkadotXcm' | 'CumulusXcm';
  }

  /** @name FrameSupportDispatchRawOrigin (407) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (408) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PalletEthereumRawOrigin (410) */
  interface PalletEthereumRawOrigin extends Enum {
    readonly isEthereumTransaction: boolean;
    readonly asEthereumTransaction: H160;
    readonly type: 'EthereumTransaction';
  }

  /** @name PalletXcmOrigin (411) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: StagingXcmV3MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: StagingXcmV3MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name CumulusPalletXcmOrigin (412) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name SpCoreVoid (413) */
  type SpCoreVoid = Null;

  /** @name PalletUtilityError (414) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletPreimageRequestStatus (415) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (419) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name PalletIdentityRegistration (420) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (428) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (430) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
  }

  /** @name PalletDemocracyReferendumInfo (436) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (437) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (438) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (439) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (443) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (444) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyError (447) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name PalletElectionsPhragmenSeatHolder (449) */
  interface PalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: AccountId32;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenVoter (450) */
  interface PalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<AccountId32>;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenError (451) */
  interface PalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean;
    readonly isNoVotes: boolean;
    readonly isTooManyVotes: boolean;
    readonly isMaximumVotesExceeded: boolean;
    readonly isLowBalance: boolean;
    readonly isUnableToPayBond: boolean;
    readonly isMustBeVoter: boolean;
    readonly isDuplicatedCandidate: boolean;
    readonly isTooManyCandidates: boolean;
    readonly isMemberSubmit: boolean;
    readonly isRunnerUpSubmit: boolean;
    readonly isInsufficientCandidateFunds: boolean;
    readonly isNotMember: boolean;
    readonly isInvalidWitnessData: boolean;
    readonly isInvalidVoteCount: boolean;
    readonly isInvalidRenouncing: boolean;
    readonly isInvalidReplacement: boolean;
    readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'DuplicatedCandidate' | 'TooManyCandidates' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
  }

  /** @name PalletCollectiveVotes (453) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (454) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly isPrimeAccountNotMember: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'PrimeAccountNotMember';
  }

  /** @name PalletTipsOpenTip (457) */
  interface PalletTipsOpenTip extends Struct {
    readonly reason: H256;
    readonly who: AccountId32;
    readonly finder: AccountId32;
    readonly deposit: u128;
    readonly closes: Option<u32>;
    readonly tips: Vec<ITuple<[AccountId32, u128]>>;
    readonly findersFee: bool;
  }

  /** @name PalletTipsError (459) */
  interface PalletTipsError extends Enum {
    readonly isReasonTooBig: boolean;
    readonly isAlreadyKnown: boolean;
    readonly isUnknownTip: boolean;
    readonly isNotFinder: boolean;
    readonly isStillOpen: boolean;
    readonly isPremature: boolean;
    readonly type: 'ReasonTooBig' | 'AlreadyKnown' | 'UnknownTip' | 'NotFinder' | 'StillOpen' | 'Premature';
  }

  /** @name PalletProxyProxyDefinition (462) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: HydradxRuntimeSystemProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (466) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (468) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletMultisigMultisig (470) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (472) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletUniquesCollectionDetails (473) */
  interface PalletUniquesCollectionDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly totalDeposit: u128;
    readonly freeHolding: bool;
    readonly items: u32;
    readonly itemMetadatas: u32;
    readonly attributes: u32;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesItemDetails (475) */
  interface PalletUniquesItemDetails extends Struct {
    readonly owner: AccountId32;
    readonly approved: Option<AccountId32>;
    readonly isFrozen: bool;
    readonly deposit: u128;
  }

  /** @name PalletUniquesCollectionMetadata (476) */
  interface PalletUniquesCollectionMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesItemMetadata (477) */
  interface PalletUniquesItemMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesError (481) */
  interface PalletUniquesError extends Enum {
    readonly isNoPermission: boolean;
    readonly isUnknownCollection: boolean;
    readonly isAlreadyExists: boolean;
    readonly isWrongOwner: boolean;
    readonly isBadWitness: boolean;
    readonly isInUse: boolean;
    readonly isFrozen: boolean;
    readonly isWrongDelegate: boolean;
    readonly isNoDelegate: boolean;
    readonly isUnapproved: boolean;
    readonly isUnaccepted: boolean;
    readonly isLocked: boolean;
    readonly isMaxSupplyReached: boolean;
    readonly isMaxSupplyAlreadySet: boolean;
    readonly isMaxSupplyTooSmall: boolean;
    readonly isUnknownItem: boolean;
    readonly isNotForSale: boolean;
    readonly isBidTooLow: boolean;
    readonly type: 'NoPermission' | 'UnknownCollection' | 'AlreadyExists' | 'WrongOwner' | 'BadWitness' | 'InUse' | 'Frozen' | 'WrongDelegate' | 'NoDelegate' | 'Unapproved' | 'Unaccepted' | 'Locked' | 'MaxSupplyReached' | 'MaxSupplyAlreadySet' | 'MaxSupplyTooSmall' | 'UnknownItem' | 'NotForSale' | 'BidTooLow';
  }

  /** @name PalletAssetRegistryAssetDetails (482) */
  interface PalletAssetRegistryAssetDetails extends Struct {
    readonly name: Option<Bytes>;
    readonly assetType: PalletAssetRegistryAssetType;
    readonly existentialDeposit: u128;
    readonly symbol: Option<Bytes>;
    readonly decimals: Option<u8>;
    readonly xcmRateLimit: Option<u128>;
    readonly isSufficient: bool;
  }

  /** @name PalletAssetRegistryError (483) */
  interface PalletAssetRegistryError extends Enum {
    readonly isNoIdAvailable: boolean;
    readonly isAssetNotFound: boolean;
    readonly isTooShort: boolean;
    readonly isInvalidSymbol: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isAssetAlreadyRegistered: boolean;
    readonly isInvalidSharedAssetLen: boolean;
    readonly isCannotUpdateLocation: boolean;
    readonly isNotInReservedRange: boolean;
    readonly isLocationAlreadyRegistered: boolean;
    readonly isForbidden: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isForbiddenSufficiencyChange: boolean;
    readonly isAssetAlreadyBanned: boolean;
    readonly isAssetNotBanned: boolean;
    readonly type: 'NoIdAvailable' | 'AssetNotFound' | 'TooShort' | 'InvalidSymbol' | 'AssetNotRegistered' | 'AssetAlreadyRegistered' | 'InvalidSharedAssetLen' | 'CannotUpdateLocation' | 'NotInReservedRange' | 'LocationAlreadyRegistered' | 'Forbidden' | 'InsufficientBalance' | 'ForbiddenSufficiencyChange' | 'AssetAlreadyBanned' | 'AssetNotBanned';
  }

  /** @name PalletClaimsError (484) */
  interface PalletClaimsError extends Enum {
    readonly isInvalidEthereumSignature: boolean;
    readonly isNoClaimOrAlreadyClaimed: boolean;
    readonly isBalanceOverflow: boolean;
    readonly type: 'InvalidEthereumSignature' | 'NoClaimOrAlreadyClaimed' | 'BalanceOverflow';
  }

  /** @name PalletGenesisHistoryChain (485) */
  interface PalletGenesisHistoryChain extends Struct {
    readonly genesisHash: H256;
    readonly lastBlockHash: H256;
  }

  /** @name PalletCollatorRewardsError (487) */
  type PalletCollatorRewardsError = Null;

  /** @name PalletOmnipoolAssetState (488) */
  interface PalletOmnipoolAssetState extends Struct {
    readonly hubReserve: u128;
    readonly shares: u128;
    readonly protocolShares: u128;
    readonly cap: u128;
    readonly tradable: PalletOmnipoolTradability;
  }

  /** @name PalletOmnipoolSimpleImbalance (489) */
  interface PalletOmnipoolSimpleImbalance extends Struct {
    readonly value: u128;
    readonly negative: bool;
  }

  /** @name PalletOmnipoolPosition (490) */
  interface PalletOmnipoolPosition extends Struct {
    readonly assetId: u32;
    readonly amount: u128;
    readonly shares: u128;
    readonly price: ITuple<[u128, u128]>;
  }

  /** @name PalletOmnipoolError (491) */
  interface PalletOmnipoolError extends Enum {
    readonly isInsufficientBalance: boolean;
    readonly isAssetAlreadyAdded: boolean;
    readonly isAssetNotFound: boolean;
    readonly isMissingBalance: boolean;
    readonly isInvalidInitialAssetPrice: boolean;
    readonly isBuyLimitNotReached: boolean;
    readonly isSellLimitExceeded: boolean;
    readonly isPositionNotFound: boolean;
    readonly isInsufficientShares: boolean;
    readonly isNotAllowed: boolean;
    readonly isForbidden: boolean;
    readonly isAssetWeightCapExceeded: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientTradingAmount: boolean;
    readonly isSameAssetTradeNotAllowed: boolean;
    readonly isHubAssetUpdateError: boolean;
    readonly isPositiveImbalance: boolean;
    readonly isInvalidSharesAmount: boolean;
    readonly isInvalidHubAssetTradableState: boolean;
    readonly isAssetRefundNotAllowed: boolean;
    readonly isMaxOutRatioExceeded: boolean;
    readonly isMaxInRatioExceeded: boolean;
    readonly isPriceDifferenceTooHigh: boolean;
    readonly isInvalidOraclePrice: boolean;
    readonly isInvalidWithdrawalFee: boolean;
    readonly isFeeOverdraft: boolean;
    readonly isSharesRemaining: boolean;
    readonly isAssetNotFrozen: boolean;
    readonly isZeroAmountOut: boolean;
    readonly type: 'InsufficientBalance' | 'AssetAlreadyAdded' | 'AssetNotFound' | 'MissingBalance' | 'InvalidInitialAssetPrice' | 'BuyLimitNotReached' | 'SellLimitExceeded' | 'PositionNotFound' | 'InsufficientShares' | 'NotAllowed' | 'Forbidden' | 'AssetWeightCapExceeded' | 'AssetNotRegistered' | 'InsufficientLiquidity' | 'InsufficientTradingAmount' | 'SameAssetTradeNotAllowed' | 'HubAssetUpdateError' | 'PositiveImbalance' | 'InvalidSharesAmount' | 'InvalidHubAssetTradableState' | 'AssetRefundNotAllowed' | 'MaxOutRatioExceeded' | 'MaxInRatioExceeded' | 'PriceDifferenceTooHigh' | 'InvalidOraclePrice' | 'InvalidWithdrawalFee' | 'FeeOverdraft' | 'SharesRemaining' | 'AssetNotFrozen' | 'ZeroAmountOut';
  }

  /** @name PalletTransactionPauseError (494) */
  interface PalletTransactionPauseError extends Enum {
    readonly isCannotPause: boolean;
    readonly isInvalidCharacter: boolean;
    readonly isNameTooLong: boolean;
    readonly type: 'CannotPause' | 'InvalidCharacter' | 'NameTooLong';
  }

  /** @name PalletDusterError (495) */
  interface PalletDusterError extends Enum {
    readonly isAccountBlacklisted: boolean;
    readonly isAccountNotBlacklisted: boolean;
    readonly isZeroBalance: boolean;
    readonly isBalanceSufficient: boolean;
    readonly isDustAccountNotSet: boolean;
    readonly isReserveAccountNotSet: boolean;
    readonly type: 'AccountBlacklisted' | 'AccountNotBlacklisted' | 'ZeroBalance' | 'BalanceSufficient' | 'DustAccountNotSet' | 'ReserveAccountNotSet';
  }

  /** @name PalletLiquidityMiningGlobalFarmData (496) */
  interface PalletLiquidityMiningGlobalFarmData extends Struct {
    readonly id: u32;
    readonly owner: AccountId32;
    readonly updatedAt: u32;
    readonly totalSharesZ: u128;
    readonly accumulatedRpz: u128;
    readonly rewardCurrency: u32;
    readonly pendingRewards: u128;
    readonly accumulatedPaidRewards: u128;
    readonly yieldPerPeriod: Perquintill;
    readonly plannedYieldingPeriods: u32;
    readonly blocksPerPeriod: u32;
    readonly incentivizedAsset: u32;
    readonly maxRewardPerPeriod: u128;
    readonly minDeposit: u128;
    readonly liveYieldFarmsCount: u32;
    readonly totalYieldFarmsCount: u32;
    readonly priceAdjustment: u128;
    readonly state: PalletLiquidityMiningFarmState;
  }

  /** @name PalletLiquidityMiningFarmState (497) */
  interface PalletLiquidityMiningFarmState extends Enum {
    readonly isActive: boolean;
    readonly isStopped: boolean;
    readonly isTerminated: boolean;
    readonly type: 'Active' | 'Stopped' | 'Terminated';
  }

  /** @name PalletLiquidityMiningYieldFarmData (499) */
  interface PalletLiquidityMiningYieldFarmData extends Struct {
    readonly id: u32;
    readonly updatedAt: u32;
    readonly totalShares: u128;
    readonly totalValuedShares: u128;
    readonly accumulatedRpvs: u128;
    readonly accumulatedRpz: u128;
    readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>;
    readonly multiplier: u128;
    readonly state: PalletLiquidityMiningFarmState;
    readonly entriesCount: u64;
    readonly leftToDistribute: u128;
    readonly totalStopped: u32;
  }

  /** @name PalletLiquidityMiningDepositData (500) */
  interface PalletLiquidityMiningDepositData extends Struct {
    readonly shares: u128;
    readonly ammPoolId: u32;
    readonly yieldFarmEntries: Vec<PalletLiquidityMiningYieldFarmEntry>;
  }

  /** @name PalletLiquidityMiningYieldFarmEntry (502) */
  interface PalletLiquidityMiningYieldFarmEntry extends Struct {
    readonly globalFarmId: u32;
    readonly yieldFarmId: u32;
    readonly valuedShares: u128;
    readonly accumulatedRpvs: u128;
    readonly accumulatedClaimedRewards: u128;
    readonly enteredAt: u32;
    readonly updatedAt: u32;
    readonly stoppedAtCreation: u32;
  }

  /** @name PalletLiquidityMiningError (504) */
  interface PalletLiquidityMiningError extends Enum {
    readonly isGlobalFarmNotFound: boolean;
    readonly isYieldFarmNotFound: boolean;
    readonly isDoubleClaimInPeriod: boolean;
    readonly isLiquidityMiningCanceled: boolean;
    readonly isLiquidityMiningIsActive: boolean;
    readonly isLiquidityMiningIsNotStopped: boolean;
    readonly isInvalidDepositAmount: boolean;
    readonly isForbidden: boolean;
    readonly isInvalidMultiplier: boolean;
    readonly isYieldFarmAlreadyExists: boolean;
    readonly isInvalidInitialRewardPercentage: boolean;
    readonly isGlobalFarmIsNotEmpty: boolean;
    readonly isMissingIncentivizedAsset: boolean;
    readonly isInsufficientRewardCurrencyBalance: boolean;
    readonly isInvalidBlocksPerPeriod: boolean;
    readonly isInvalidYieldPerPeriod: boolean;
    readonly isInvalidTotalRewards: boolean;
    readonly isInvalidPlannedYieldingPeriods: boolean;
    readonly isMaxEntriesPerDeposit: boolean;
    readonly isDoubleLock: boolean;
    readonly isYieldFarmEntryNotFound: boolean;
    readonly isGlobalFarmIsFull: boolean;
    readonly isInvalidMinDeposit: boolean;
    readonly isInvalidPriceAdjustment: boolean;
    readonly isErrorGetAccountId: boolean;
    readonly isIncorrectValuedShares: boolean;
    readonly isRewardCurrencyNotRegistered: boolean;
    readonly isIncentivizedAssetNotRegistered: boolean;
    readonly isInconsistentState: boolean;
    readonly asInconsistentState: PalletLiquidityMiningInconsistentStateError;
    readonly type: 'GlobalFarmNotFound' | 'YieldFarmNotFound' | 'DoubleClaimInPeriod' | 'LiquidityMiningCanceled' | 'LiquidityMiningIsActive' | 'LiquidityMiningIsNotStopped' | 'InvalidDepositAmount' | 'Forbidden' | 'InvalidMultiplier' | 'YieldFarmAlreadyExists' | 'InvalidInitialRewardPercentage' | 'GlobalFarmIsNotEmpty' | 'MissingIncentivizedAsset' | 'InsufficientRewardCurrencyBalance' | 'InvalidBlocksPerPeriod' | 'InvalidYieldPerPeriod' | 'InvalidTotalRewards' | 'InvalidPlannedYieldingPeriods' | 'MaxEntriesPerDeposit' | 'DoubleLock' | 'YieldFarmEntryNotFound' | 'GlobalFarmIsFull' | 'InvalidMinDeposit' | 'InvalidPriceAdjustment' | 'ErrorGetAccountId' | 'IncorrectValuedShares' | 'RewardCurrencyNotRegistered' | 'IncentivizedAssetNotRegistered' | 'InconsistentState';
  }

  /** @name PalletLiquidityMiningInconsistentStateError (505) */
  interface PalletLiquidityMiningInconsistentStateError extends Enum {
    readonly isYieldFarmNotFound: boolean;
    readonly isGlobalFarmNotFound: boolean;
    readonly isLiquidityIsNotActive: boolean;
    readonly isGlobalFarmIsNotActive: boolean;
    readonly isDepositNotFound: boolean;
    readonly isInvalidPeriod: boolean;
    readonly isNotEnoughRewardsInYieldFarm: boolean;
    readonly isInvalidLiveYielFarmsCount: boolean;
    readonly isInvalidTotalYieldFarmsCount: boolean;
    readonly isInvalidYieldFarmEntriesCount: boolean;
    readonly isInvalidTotalShares: boolean;
    readonly isInvalidValuedShares: boolean;
    readonly isInvalidTotalSharesZ: boolean;
    readonly isInvalidPaidAccumulatedRewards: boolean;
    readonly isInvalidFarmId: boolean;
    readonly isInvalidLoyaltyMultiplier: boolean;
    readonly type: 'YieldFarmNotFound' | 'GlobalFarmNotFound' | 'LiquidityIsNotActive' | 'GlobalFarmIsNotActive' | 'DepositNotFound' | 'InvalidPeriod' | 'NotEnoughRewardsInYieldFarm' | 'InvalidLiveYielFarmsCount' | 'InvalidTotalYieldFarmsCount' | 'InvalidYieldFarmEntriesCount' | 'InvalidTotalShares' | 'InvalidValuedShares' | 'InvalidTotalSharesZ' | 'InvalidPaidAccumulatedRewards' | 'InvalidFarmId' | 'InvalidLoyaltyMultiplier';
  }

  /** @name HydradxTraitsOracleOraclePeriod (506) */
  interface HydradxTraitsOracleOraclePeriod extends Enum {
    readonly isLastBlock: boolean;
    readonly isShort: boolean;
    readonly isTenMinutes: boolean;
    readonly isHour: boolean;
    readonly isDay: boolean;
    readonly isWeek: boolean;
    readonly type: 'LastBlock' | 'Short' | 'TenMinutes' | 'Hour' | 'Day' | 'Week';
  }

  /** @name PalletOmnipoolLiquidityMiningError (507) */
  interface PalletOmnipoolLiquidityMiningError extends Enum {
    readonly isAssetNotFound: boolean;
    readonly isForbidden: boolean;
    readonly isZeroClaimedRewards: boolean;
    readonly isInconsistentState: boolean;
    readonly asInconsistentState: PalletOmnipoolLiquidityMiningInconsistentStateError;
    readonly isOracleNotAvailable: boolean;
    readonly isPriceAdjustmentNotAvailable: boolean;
    readonly type: 'AssetNotFound' | 'Forbidden' | 'ZeroClaimedRewards' | 'InconsistentState' | 'OracleNotAvailable' | 'PriceAdjustmentNotAvailable';
  }

  /** @name PalletOmnipoolLiquidityMiningInconsistentStateError (508) */
  interface PalletOmnipoolLiquidityMiningInconsistentStateError extends Enum {
    readonly isMissingLpPosition: boolean;
    readonly isDepositDataNotFound: boolean;
    readonly type: 'MissingLpPosition' | 'DepositDataNotFound';
  }

  /** @name PalletOtcOrder (509) */
  interface PalletOtcOrder extends Struct {
    readonly owner: AccountId32;
    readonly assetIn: u32;
    readonly assetOut: u32;
    readonly amountIn: u128;
    readonly amountOut: u128;
    readonly partiallyFillable: bool;
  }

  /** @name PalletOtcError (510) */
  interface PalletOtcError extends Enum {
    readonly isAssetNotRegistered: boolean;
    readonly isOrderNotFound: boolean;
    readonly isOrderIdOutOfBound: boolean;
    readonly isOrderNotPartiallyFillable: boolean;
    readonly isOrderAmountTooSmall: boolean;
    readonly isMathError: boolean;
    readonly isForbidden: boolean;
    readonly isInsufficientReservedAmount: boolean;
    readonly type: 'AssetNotRegistered' | 'OrderNotFound' | 'OrderIdOutOfBound' | 'OrderNotPartiallyFillable' | 'OrderAmountTooSmall' | 'MathError' | 'Forbidden' | 'InsufficientReservedAmount';
  }

  /** @name PalletCircuitBreakerTradeVolumeLimit (511) */
  interface PalletCircuitBreakerTradeVolumeLimit extends Struct {
    readonly volumeIn: u128;
    readonly volumeOut: u128;
    readonly limit: u128;
  }

  /** @name PalletCircuitBreakerLiquidityLimit (512) */
  interface PalletCircuitBreakerLiquidityLimit extends Struct {
    readonly liquidity: u128;
    readonly limit: u128;
  }

  /** @name PalletCircuitBreakerError (513) */
  interface PalletCircuitBreakerError extends Enum {
    readonly isInvalidLimitValue: boolean;
    readonly isLiquidityLimitNotStoredForAsset: boolean;
    readonly isTokenOutflowLimitReached: boolean;
    readonly isTokenInfluxLimitReached: boolean;
    readonly isMaxLiquidityLimitPerBlockReached: boolean;
    readonly isNotAllowed: boolean;
    readonly type: 'InvalidLimitValue' | 'LiquidityLimitNotStoredForAsset' | 'TokenOutflowLimitReached' | 'TokenInfluxLimitReached' | 'MaxLiquidityLimitPerBlockReached' | 'NotAllowed';
  }

  /** @name PalletRouteExecutorError (514) */
  interface PalletRouteExecutorError extends Enum {
    readonly isTradingLimitReached: boolean;
    readonly isMaxTradesExceeded: boolean;
    readonly isPoolNotSupported: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isRouteCalculationFailed: boolean;
    readonly isInvalidRoute: boolean;
    readonly isRouteUpdateIsNotSuccessful: boolean;
    readonly isInsufficientAssetNotSupported: boolean;
    readonly isInvalidRouteExecution: boolean;
    readonly isNotAllowed: boolean;
    readonly type: 'TradingLimitReached' | 'MaxTradesExceeded' | 'PoolNotSupported' | 'InsufficientBalance' | 'RouteCalculationFailed' | 'InvalidRoute' | 'RouteUpdateIsNotSuccessful' | 'InsufficientAssetNotSupported' | 'InvalidRouteExecution' | 'NotAllowed';
  }

  /** @name PalletDynamicFeesFeeEntry (515) */
  interface PalletDynamicFeesFeeEntry extends Struct {
    readonly assetFee: Permill;
    readonly protocolFee: Permill;
    readonly timestamp: u32;
  }

  /** @name PalletDynamicFeesFeeParams (516) */
  interface PalletDynamicFeesFeeParams extends Struct {
    readonly minFee: Permill;
    readonly maxFee: Permill;
    readonly decay: u128;
    readonly amplification: u128;
  }

  /** @name PalletDynamicFeesError (517) */
  type PalletDynamicFeesError = Null;

  /** @name PalletStakingStakingData (518) */
  interface PalletStakingStakingData extends Struct {
    readonly totalStake: u128;
    readonly accumulatedRewardPerStake: u128;
    readonly potReservedBalance: u128;
  }

  /** @name PalletStakingPosition (519) */
  interface PalletStakingPosition extends Struct {
    readonly stake: u128;
    readonly actionPoints: u128;
    readonly rewardPerStake: u128;
    readonly createdAt: u32;
    readonly accumulatedSlashPoints: u128;
    readonly accumulatedUnpaidRewards: u128;
    readonly accumulatedLockedRewards: u128;
  }

  /** @name PalletStakingVoting (520) */
  interface PalletStakingVoting extends Struct {
    readonly votes: Vec<ITuple<[u32, PalletStakingVote]>>;
  }

  /** @name PalletStakingVote (523) */
  interface PalletStakingVote extends Struct {
    readonly amount: u128;
    readonly conviction: PalletStakingConviction;
  }

  /** @name PalletStakingConviction (524) */
  interface PalletStakingConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletStakingError (527) */
  interface PalletStakingError extends Enum {
    readonly isInsufficientBalance: boolean;
    readonly isInsufficientStake: boolean;
    readonly isPositionNotFound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isNotInitialized: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isArithmetic: boolean;
    readonly isMissingPotBalance: boolean;
    readonly isPositionAlreadyExists: boolean;
    readonly isForbidden: boolean;
    readonly isRemoveVoteNotAllowed: boolean;
    readonly isInconsistentState: boolean;
    readonly asInconsistentState: PalletStakingInconsistentStateError;
    readonly type: 'InsufficientBalance' | 'InsufficientStake' | 'PositionNotFound' | 'MaxVotesReached' | 'NotInitialized' | 'AlreadyInitialized' | 'Arithmetic' | 'MissingPotBalance' | 'PositionAlreadyExists' | 'Forbidden' | 'RemoveVoteNotAllowed' | 'InconsistentState';
  }

  /** @name PalletStakingInconsistentStateError (528) */
  interface PalletStakingInconsistentStateError extends Enum {
    readonly isPositionNotFound: boolean;
    readonly isNegativePendingRewards: boolean;
    readonly isNegativeUnpaidRewards: boolean;
    readonly isTooManyPositions: boolean;
    readonly isArithmetic: boolean;
    readonly type: 'PositionNotFound' | 'NegativePendingRewards' | 'NegativeUnpaidRewards' | 'TooManyPositions' | 'Arithmetic';
  }

  /** @name PalletStableswapPoolInfo (529) */
  interface PalletStableswapPoolInfo extends Struct {
    readonly assets: Vec<u32>;
    readonly initialAmplification: u16;
    readonly finalAmplification: u16;
    readonly initialBlock: u32;
    readonly finalBlock: u32;
    readonly fee: Permill;
  }

  /** @name PalletStableswapError (532) */
  interface PalletStableswapError extends Enum {
    readonly isIncorrectAssets: boolean;
    readonly isMaxAssetsExceeded: boolean;
    readonly isPoolNotFound: boolean;
    readonly isPoolExists: boolean;
    readonly isAssetNotInPool: boolean;
    readonly isShareAssetNotRegistered: boolean;
    readonly isShareAssetInPoolAssets: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isInvalidAssetAmount: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isInsufficientShares: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientLiquidityRemaining: boolean;
    readonly isInsufficientTradingAmount: boolean;
    readonly isBuyLimitNotReached: boolean;
    readonly isSellLimitExceeded: boolean;
    readonly isInvalidInitialLiquidity: boolean;
    readonly isInvalidAmplification: boolean;
    readonly isInsufficientShareBalance: boolean;
    readonly isNotAllowed: boolean;
    readonly isPastBlock: boolean;
    readonly isSameAmplification: boolean;
    readonly isSlippageLimit: boolean;
    readonly isUnknownDecimals: boolean;
    readonly type: 'IncorrectAssets' | 'MaxAssetsExceeded' | 'PoolNotFound' | 'PoolExists' | 'AssetNotInPool' | 'ShareAssetNotRegistered' | 'ShareAssetInPoolAssets' | 'AssetNotRegistered' | 'InvalidAssetAmount' | 'InsufficientBalance' | 'InsufficientShares' | 'InsufficientLiquidity' | 'InsufficientLiquidityRemaining' | 'InsufficientTradingAmount' | 'BuyLimitNotReached' | 'SellLimitExceeded' | 'InvalidInitialLiquidity' | 'InvalidAmplification' | 'InsufficientShareBalance' | 'NotAllowed' | 'PastBlock' | 'SameAmplification' | 'SlippageLimit' | 'UnknownDecimals';
  }

  /** @name PalletBondsError (534) */
  interface PalletBondsError extends Enum {
    readonly isNotRegistered: boolean;
    readonly isNotMature: boolean;
    readonly isInvalidMaturity: boolean;
    readonly isDisallowedAsset: boolean;
    readonly isAssetNotFound: boolean;
    readonly isInvalidBondName: boolean;
    readonly isFailToParseName: boolean;
    readonly type: 'NotRegistered' | 'NotMature' | 'InvalidMaturity' | 'DisallowedAsset' | 'AssetNotFound' | 'InvalidBondName' | 'FailToParseName';
  }

  /** @name PalletLbpError (536) */
  interface PalletLbpError extends Enum {
    readonly isCannotCreatePoolWithSameAssets: boolean;
    readonly isNotOwner: boolean;
    readonly isSaleStarted: boolean;
    readonly isSaleNotEnded: boolean;
    readonly isSaleIsNotRunning: boolean;
    readonly isMaxSaleDurationExceeded: boolean;
    readonly isCannotAddZeroLiquidity: boolean;
    readonly isInsufficientAssetBalance: boolean;
    readonly isPoolNotFound: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly isInvalidBlockRange: boolean;
    readonly isWeightCalculationError: boolean;
    readonly isInvalidWeight: boolean;
    readonly isZeroAmount: boolean;
    readonly isMaxInRatioExceeded: boolean;
    readonly isMaxOutRatioExceeded: boolean;
    readonly isFeeAmountInvalid: boolean;
    readonly isTradingLimitReached: boolean;
    readonly isOverflow: boolean;
    readonly isNothingToUpdate: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientTradingAmount: boolean;
    readonly isFeeCollectorWithAssetAlreadyUsed: boolean;
    readonly type: 'CannotCreatePoolWithSameAssets' | 'NotOwner' | 'SaleStarted' | 'SaleNotEnded' | 'SaleIsNotRunning' | 'MaxSaleDurationExceeded' | 'CannotAddZeroLiquidity' | 'InsufficientAssetBalance' | 'PoolNotFound' | 'PoolAlreadyExists' | 'InvalidBlockRange' | 'WeightCalculationError' | 'InvalidWeight' | 'ZeroAmount' | 'MaxInRatioExceeded' | 'MaxOutRatioExceeded' | 'FeeAmountInvalid' | 'TradingLimitReached' | 'Overflow' | 'NothingToUpdate' | 'InsufficientLiquidity' | 'InsufficientTradingAmount' | 'FeeCollectorWithAssetAlreadyUsed';
  }

  /** @name PalletXykError (537) */
  interface PalletXykError extends Enum {
    readonly isCannotCreatePoolWithSameAssets: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientTradingAmount: boolean;
    readonly isZeroLiquidity: boolean;
    readonly isZeroInitialPrice: boolean;
    readonly isCreatePoolAssetAmountInvalid: boolean;
    readonly isInvalidMintedLiquidity: boolean;
    readonly isInvalidLiquidityAmount: boolean;
    readonly isAssetAmountExceededLimit: boolean;
    readonly isAssetAmountNotReachedLimit: boolean;
    readonly isInsufficientAssetBalance: boolean;
    readonly isInsufficientPoolAssetBalance: boolean;
    readonly isInsufficientNativeCurrencyBalance: boolean;
    readonly isTokenPoolNotFound: boolean;
    readonly isTokenPoolAlreadyExists: boolean;
    readonly isAddAssetAmountInvalid: boolean;
    readonly isRemoveAssetAmountInvalid: boolean;
    readonly isSellAssetAmountInvalid: boolean;
    readonly isBuyAssetAmountInvalid: boolean;
    readonly isFeeAmountInvalid: boolean;
    readonly isCannotApplyDiscount: boolean;
    readonly isMaxOutRatioExceeded: boolean;
    readonly isMaxInRatioExceeded: boolean;
    readonly isOverflow: boolean;
    readonly isCannotCreatePool: boolean;
    readonly type: 'CannotCreatePoolWithSameAssets' | 'InsufficientLiquidity' | 'InsufficientTradingAmount' | 'ZeroLiquidity' | 'ZeroInitialPrice' | 'CreatePoolAssetAmountInvalid' | 'InvalidMintedLiquidity' | 'InvalidLiquidityAmount' | 'AssetAmountExceededLimit' | 'AssetAmountNotReachedLimit' | 'InsufficientAssetBalance' | 'InsufficientPoolAssetBalance' | 'InsufficientNativeCurrencyBalance' | 'TokenPoolNotFound' | 'TokenPoolAlreadyExists' | 'AddAssetAmountInvalid' | 'RemoveAssetAmountInvalid' | 'SellAssetAmountInvalid' | 'BuyAssetAmountInvalid' | 'FeeAmountInvalid' | 'CannotApplyDiscount' | 'MaxOutRatioExceeded' | 'MaxInRatioExceeded' | 'Overflow' | 'CannotCreatePool';
  }

  /** @name PalletReferralsError (541) */
  interface PalletReferralsError extends Enum {
    readonly isTooLong: boolean;
    readonly isTooShort: boolean;
    readonly isInvalidCharacter: boolean;
    readonly isAlreadyExists: boolean;
    readonly isInvalidCode: boolean;
    readonly isAlreadyLinked: boolean;
    readonly isZeroAmount: boolean;
    readonly isLinkNotAllowed: boolean;
    readonly isIncorrectRewardCalculation: boolean;
    readonly isIncorrectRewardPercentage: boolean;
    readonly isAlreadyRegistered: boolean;
    readonly isPriceNotFound: boolean;
    readonly isConversionMinTradingAmountNotReached: boolean;
    readonly isConversionZeroAmountReceived: boolean;
    readonly type: 'TooLong' | 'TooShort' | 'InvalidCharacter' | 'AlreadyExists' | 'InvalidCode' | 'AlreadyLinked' | 'ZeroAmount' | 'LinkNotAllowed' | 'IncorrectRewardCalculation' | 'IncorrectRewardPercentage' | 'AlreadyRegistered' | 'PriceNotFound' | 'ConversionMinTradingAmountNotReached' | 'ConversionZeroAmountReceived';
  }

  /** @name PalletXcmRateLimiterAccumulatedAmount (542) */
  interface PalletXcmRateLimiterAccumulatedAmount extends Struct {
    readonly amount: u128;
    readonly lastUpdated: u32;
  }

  /** @name PalletXcmRateLimiterError (543) */
  type PalletXcmRateLimiterError = Null;

  /** @name OrmlTokensBalanceLock (545) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (547) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (549) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (551) */
  interface OrmlTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isMaxLocksExceeded: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name PalletCurrenciesModuleError (552) */
  interface PalletCurrenciesModuleError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isBalanceTooLow: boolean;
    readonly isDepositFailed: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed';
  }

  /** @name OrmlVestingModuleError (554) */
  interface OrmlVestingModuleError extends Enum {
    readonly isZeroVestingPeriod: boolean;
    readonly isZeroVestingPeriodCount: boolean;
    readonly isInsufficientBalanceToLock: boolean;
    readonly isTooManyVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isMaxVestingSchedulesExceeded: boolean;
    readonly type: 'ZeroVestingPeriod' | 'ZeroVestingPeriodCount' | 'InsufficientBalanceToLock' | 'TooManyVestingSchedules' | 'AmountLow' | 'MaxVestingSchedulesExceeded';
  }

  /** @name PalletEvmCodeMetadata (555) */
  interface PalletEvmCodeMetadata extends Struct {
    readonly size_: u64;
    readonly hash_: H256;
  }

  /** @name PalletEvmError (557) */
  interface PalletEvmError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isFeeOverflow: boolean;
    readonly isPaymentOverflow: boolean;
    readonly isWithdrawFailed: boolean;
    readonly isGasPriceTooLow: boolean;
    readonly isInvalidNonce: boolean;
    readonly isGasLimitTooLow: boolean;
    readonly isGasLimitTooHigh: boolean;
    readonly isUndefined: boolean;
    readonly isReentrancy: boolean;
    readonly isTransactionMustComeFromEOA: boolean;
    readonly type: 'BalanceLow' | 'FeeOverflow' | 'PaymentOverflow' | 'WithdrawFailed' | 'GasPriceTooLow' | 'InvalidNonce' | 'GasLimitTooLow' | 'GasLimitTooHigh' | 'Undefined' | 'Reentrancy' | 'TransactionMustComeFromEOA';
  }

  /** @name FpRpcTransactionStatus (560) */
  interface FpRpcTransactionStatus extends Struct {
    readonly transactionHash: H256;
    readonly transactionIndex: u32;
    readonly from: H160;
    readonly to: Option<H160>;
    readonly contractAddress: Option<H160>;
    readonly logs: Vec<EthereumLog>;
    readonly logsBloom: EthbloomBloom;
  }

  /** @name EthbloomBloom (563) */
  interface EthbloomBloom extends U8aFixed {}

  /** @name EthereumReceiptReceiptV3 (565) */
  interface EthereumReceiptReceiptV3 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumReceiptEip658ReceiptData;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumReceiptEip658ReceiptData;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumReceiptEip658ReceiptData;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumReceiptEip658ReceiptData (566) */
  interface EthereumReceiptEip658ReceiptData extends Struct {
    readonly statusCode: u8;
    readonly usedGas: U256;
    readonly logsBloom: EthbloomBloom;
    readonly logs: Vec<EthereumLog>;
  }

  /** @name EthereumBlock (567) */
  interface EthereumBlock extends Struct {
    readonly header: EthereumHeader;
    readonly transactions: Vec<EthereumTransactionTransactionV2>;
    readonly ommers: Vec<EthereumHeader>;
  }

  /** @name EthereumHeader (568) */
  interface EthereumHeader extends Struct {
    readonly parentHash: H256;
    readonly ommersHash: H256;
    readonly beneficiary: H160;
    readonly stateRoot: H256;
    readonly transactionsRoot: H256;
    readonly receiptsRoot: H256;
    readonly logsBloom: EthbloomBloom;
    readonly difficulty: U256;
    readonly number: U256;
    readonly gasLimit: U256;
    readonly gasUsed: U256;
    readonly timestamp: u64;
    readonly extraData: Bytes;
    readonly mixHash: H256;
    readonly nonce: EthereumTypesHashH64;
  }

  /** @name EthereumTypesHashH64 (569) */
  interface EthereumTypesHashH64 extends U8aFixed {}

  /** @name PalletEthereumError (574) */
  interface PalletEthereumError extends Enum {
    readonly isInvalidSignature: boolean;
    readonly isPreLogExists: boolean;
    readonly type: 'InvalidSignature' | 'PreLogExists';
  }

  /** @name PalletEvmAccountsError (575) */
  interface PalletEvmAccountsError extends Enum {
    readonly isTruncatedAccountAlreadyUsed: boolean;
    readonly isAddressAlreadyBound: boolean;
    readonly isBoundAddressCannotBeUsed: boolean;
    readonly isAddressNotWhitelisted: boolean;
    readonly type: 'TruncatedAccountAlreadyUsed' | 'AddressAlreadyBound' | 'BoundAddressCannotBeUsed' | 'AddressNotWhitelisted';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (577) */
  interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly paraHeadHash: Option<H256>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV5UpgradeGoAhead>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (578) */
  interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
    readonly umpMsgCount: u32;
    readonly umpTotalBytes: u32;
    readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (580) */
  interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
    readonly msgCount: u32;
    readonly totalBytes: u32;
  }

  /** @name PolkadotPrimitivesV5UpgradeGoAhead (584) */
  interface PolkadotPrimitivesV5UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (585) */
  interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly hrmpWatermark: Option<u32>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV5UpgradeGoAhead>;
  }

  /** @name PolkadotPrimitivesV5UpgradeRestriction (587) */
  interface PolkadotPrimitivesV5UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (588) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV5AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV5AbridgedHrmpChannel]>>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (589) */
  interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
    readonly remainingCount: u32;
    readonly remainingSize: u32;
  }

  /** @name PolkadotPrimitivesV5AbridgedHrmpChannel (592) */
  interface PolkadotPrimitivesV5AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV5AbridgedHostConfiguration (593) */
  interface PolkadotPrimitivesV5AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
    readonly asyncBackingParams: PolkadotPrimitivesVstagingAsyncBackingParams;
  }

  /** @name PolkadotPrimitivesVstagingAsyncBackingParams (594) */
  interface PolkadotPrimitivesVstagingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (600) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemCodeUpgradeAuthorization (601) */
  interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name CumulusPalletParachainSystemError (602) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PalletSchedulerScheduled (605) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: HydradxRuntimeOriginCaller;
  }

  /** @name PalletSchedulerError (607) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletDcaError (609) */
  interface PalletDcaError extends Enum {
    readonly isScheduleNotFound: boolean;
    readonly isMinTradeAmountNotReached: boolean;
    readonly isForbidden: boolean;
    readonly isBlockNumberIsNotInFuture: boolean;
    readonly isPriceUnstable: boolean;
    readonly isCalculatingPriceError: boolean;
    readonly isTotalAmountIsSmallerThanMinBudget: boolean;
    readonly isBudgetTooLow: boolean;
    readonly isNoFreeBlockFound: boolean;
    readonly isManuallyTerminated: boolean;
    readonly isMaxRetryReached: boolean;
    readonly isTradeLimitReached: boolean;
    readonly isSlippageLimitReached: boolean;
    readonly isNoParentHashFound: boolean;
    readonly isInvalidState: boolean;
    readonly type: 'ScheduleNotFound' | 'MinTradeAmountNotReached' | 'Forbidden' | 'BlockNumberIsNotInFuture' | 'PriceUnstable' | 'CalculatingPriceError' | 'TotalAmountIsSmallerThanMinBudget' | 'BudgetTooLow' | 'NoFreeBlockFound' | 'ManuallyTerminated' | 'MaxRetryReached' | 'TradeLimitReached' | 'SlippageLimitReached' | 'NoParentHashFound' | 'InvalidState';
  }

  /** @name PalletXcmQueryStatus (610) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: StagingXcmVersionedMultiLocation;
      readonly maybeMatchQuerier: Option<StagingXcmVersionedMultiLocation>;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: StagingXcmVersionedMultiLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: StagingXcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name StagingXcmVersionedResponse (614) */
  interface StagingXcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2Response;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3Response;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletXcmVersionMigrationStage (620) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name StagingXcmVersionedAssetId (623) */
  interface StagingXcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiassetAssetId;
    readonly type: 'V3';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (624) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: StagingXcmVersionedMultiLocation;
    readonly locker: StagingXcmVersionedMultiLocation;
    readonly consumers: Vec<ITuple<[Null, u128]>>;
  }

  /** @name PalletXcmError (631) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly isInvalidAsset: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
  }

  /** @name CumulusPalletXcmError (632) */
  type CumulusPalletXcmError = Null;

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (634) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (635) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat (638) */
  interface PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (641) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (642) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (644) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: SpWeightsWeightV2Weight;
    readonly weightRestrictDecay: SpWeightsWeightV2Weight;
    readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletXcmpQueueDeferredMessage (652) */
  interface CumulusPalletXcmpQueueDeferredMessage extends Struct {
    readonly sentAt: u32;
    readonly deferredTo: u32;
    readonly sender: u32;
    readonly xcm: StagingXcmVersionedXcm;
  }

  /** @name CumulusPalletXcmpQueueError (654) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly isMessageNotFound: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit' | 'MessageNotFound';
  }

  /** @name CumulusPalletDmpQueueConfigData (655) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (656) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (659) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly type: 'Unknown' | 'OverLimit';
  }

  /** @name OrmlXcmModuleError (660) */
  interface OrmlXcmModuleError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isBadVersion: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'BadVersion';
  }

  /** @name OrmlXtokensModuleError (661) */
  interface OrmlXtokensModuleError extends Enum {
    readonly isAssetHasNoReserve: boolean;
    readonly isNotCrossChainTransfer: boolean;
    readonly isInvalidDest: boolean;
    readonly isNotCrossChainTransferableCurrency: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isXcmExecutionFailed: boolean;
    readonly isCannotReanchor: boolean;
    readonly isInvalidAncestry: boolean;
    readonly isInvalidAsset: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isBadVersion: boolean;
    readonly isDistinctReserveForAssetAndFee: boolean;
    readonly isZeroFee: boolean;
    readonly isZeroAmount: boolean;
    readonly isTooManyAssetsBeingSent: boolean;
    readonly isAssetIndexNonExistent: boolean;
    readonly isFeeNotEnough: boolean;
    readonly isNotSupportedMultiLocation: boolean;
    readonly isMinXcmFeeNotDefined: boolean;
    readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedMultiLocation' | 'MinXcmFeeNotDefined';
  }

  /** @name OrmlUnknownTokensModuleError (664) */
  interface OrmlUnknownTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isUnhandledAsset: boolean;
    readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
  }

  /** @name PalletCollatorSelectionCandidateInfo (666) */
  interface PalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletCollatorSelectionError (668) */
  interface PalletCollatorSelectionError extends Enum {
    readonly isTooManyCandidates: boolean;
    readonly isTooFewEligibleCollators: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isTooManyInvulnerables: boolean;
    readonly isAlreadyInvulnerable: boolean;
    readonly isNotInvulnerable: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isValidatorNotRegistered: boolean;
    readonly type: 'TooManyCandidates' | 'TooFewEligibleCollators' | 'AlreadyCandidate' | 'NotCandidate' | 'TooManyInvulnerables' | 'AlreadyInvulnerable' | 'NotInvulnerable' | 'NoAssociatedValidatorId' | 'ValidatorNotRegistered';
  }

  /** @name SpCoreCryptoKeyTypeId (672) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (673) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletRelaychainInfoError (678) */
  type PalletRelaychainInfoError = Null;

  /** @name PalletEmaOracleOracleEntry (681) */
  interface PalletEmaOracleOracleEntry extends Struct {
    readonly price: HydraDxMathRatio;
    readonly volume: HydradxTraitsOracleVolume;
    readonly liquidity: HydradxTraitsOracleLiquidity;
    readonly updatedAt: u32;
  }

  /** @name HydraDxMathRatio (682) */
  interface HydraDxMathRatio extends Struct {
    readonly n: u128;
    readonly d: u128;
  }

  /** @name HydradxTraitsOracleVolume (683) */
  interface HydradxTraitsOracleVolume extends Struct {
    readonly aIn: u128;
    readonly bOut: u128;
    readonly aOut: u128;
    readonly bIn: u128;
  }

  /** @name HydradxTraitsOracleLiquidity (684) */
  interface HydradxTraitsOracleLiquidity extends Struct {
    readonly a: u128;
    readonly b: u128;
  }

  /** @name PalletEmaOracleError (690) */
  interface PalletEmaOracleError extends Enum {
    readonly isTooManyUniqueEntries: boolean;
    readonly isOnTradeValueZero: boolean;
    readonly type: 'TooManyUniqueEntries' | 'OnTradeValueZero';
  }

  /** @name PalletTransactionMultiPaymentError (691) */
  interface PalletTransactionMultiPaymentError extends Enum {
    readonly isUnsupportedCurrency: boolean;
    readonly isZeroBalance: boolean;
    readonly isAlreadyAccepted: boolean;
    readonly isCoreAssetNotAllowed: boolean;
    readonly isZeroPrice: boolean;
    readonly isFallbackPriceNotFound: boolean;
    readonly isOverflow: boolean;
    readonly type: 'UnsupportedCurrency' | 'ZeroBalance' | 'AlreadyAccepted' | 'CoreAssetNotAllowed' | 'ZeroPrice' | 'FallbackPriceNotFound' | 'Overflow';
  }

  /** @name SpRuntimeMultiSignature (693) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (694) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (696) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (697) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckSpecVersion (699) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (700) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (701) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (704) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (705) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (706) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name PalletClaimsValidateClaim (707) */
  type PalletClaimsValidateClaim = Null;

  /** @name HydradxRuntimeRuntime (709) */
  type HydradxRuntimeRuntime = Null;

} // declare module
