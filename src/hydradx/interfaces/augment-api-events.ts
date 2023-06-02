// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/events";

import type { ApiTypes, AugmentedEvent } from "@polkadot/api-base/types";
import type {
  Bytes,
  Null,
  Option,
  Result,
  U8aFixed,
  Vec,
  bool,
  i128,
  u128,
  u16,
  u32,
  u64,
  u8,
} from "@polkadot/types-codec";
import type { ITuple } from "@polkadot/types-codec/types";
import type {
  AccountId32,
  H256,
  Permill,
  Perquintill,
} from "@polkadot/types/interfaces/runtime";
import type {
  CommonRuntimeProxyType,
  FrameSupportDispatchDispatchInfo,
  FrameSupportTokensMiscBalanceStatus,
  HydradxRuntimeAssetLocation,
  OrmlVestingVestingSchedule,
  PalletAssetRegistryAssetType,
  PalletClaimsEthereumAddress,
  PalletDemocracyVoteAccountVote,
  PalletDemocracyVoteThreshold,
  PalletLiquidityMiningLoyaltyCurve,
  PalletMultisigTimepoint,
  PalletOmnipoolTradability,
  SpRuntimeDispatchError,
  SpWeightsWeightV2Weight,
  XcmV3MultiAsset,
  XcmV3MultiLocation,
  XcmV3MultiassetMultiAssets,
  XcmV3Response,
  XcmV3TraitsError,
  XcmV3TraitsOutcome,
  XcmV3Xcm,
  XcmVersionedMultiAssets,
  XcmVersionedMultiLocation,
} from "@polkadot/types/lookup";

export type __AugmentedEvent<ApiType extends ApiTypes> =
  AugmentedEvent<ApiType>;

declare module "@polkadot/api-base/types/events" {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    assetRegistry: {
      /** Native location set for an asset. */
      LocationSet: AugmentedEvent<
        ApiType,
        [assetId: u32, location: HydradxRuntimeAssetLocation],
        { assetId: u32; location: HydradxRuntimeAssetLocation }
      >;
      /** Metadata set for an asset. */
      MetadataSet: AugmentedEvent<
        ApiType,
        [assetId: u32, symbol_: Bytes, decimals: u8],
        { assetId: u32; symbol: Bytes; decimals: u8 }
      >;
      /** Asset was registered. */
      Registered: AugmentedEvent<
        ApiType,
        [
          assetId: u32,
          assetName: Bytes,
          assetType: PalletAssetRegistryAssetType
        ],
        {
          assetId: u32;
          assetName: Bytes;
          assetType: PalletAssetRegistryAssetType;
        }
      >;
      /** Asset was updated. */
      Updated: AugmentedEvent<
        ApiType,
        [
          assetId: u32,
          assetName: Bytes,
          assetType: PalletAssetRegistryAssetType,
          existentialDeposit: u128,
          xcmRateLimit: Option<u128>
        ],
        {
          assetId: u32;
          assetName: Bytes;
          assetType: PalletAssetRegistryAssetType;
          existentialDeposit: u128;
          xcmRateLimit: Option<u128>;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /** A balance was set by root. */
      BalanceSet: AugmentedEvent<
        ApiType,
        [who: AccountId32, free: u128, reserved: u128],
        { who: AccountId32; free: u128; reserved: u128 }
      >;
      /** Some amount was deposited (e.g. for transaction fees). */
      Deposit: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss.
       */
      DustLost: AugmentedEvent<
        ApiType,
        [account: AccountId32, amount: u128],
        { account: AccountId32; amount: u128 }
      >;
      /** An account was created with some free balance. */
      Endowed: AugmentedEvent<
        ApiType,
        [account: AccountId32, freeBalance: u128],
        { account: AccountId32; freeBalance: u128 }
      >;
      /** Some balance was reserved (moved from free to reserved). */
      Reserved: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /**
       * Some balance was moved from the reserve of the first account to the
       * second account. Final argument indicates the destination balance type.
       */
      ReserveRepatriated: AugmentedEvent<
        ApiType,
        [
          from: AccountId32,
          to: AccountId32,
          amount: u128,
          destinationStatus: FrameSupportTokensMiscBalanceStatus
        ],
        {
          from: AccountId32;
          to: AccountId32;
          amount: u128;
          destinationStatus: FrameSupportTokensMiscBalanceStatus;
        }
      >;
      /** Some amount was removed from the account (e.g. for misbehavior). */
      Slashed: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /** Transfer succeeded. */
      Transfer: AugmentedEvent<
        ApiType,
        [from: AccountId32, to: AccountId32, amount: u128],
        { from: AccountId32; to: AccountId32; amount: u128 }
      >;
      /** Some balance was unreserved (moved from reserved to free). */
      Unreserved: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /** Some amount was withdrawn from the account (e.g. for transaction fees). */
      Withdraw: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    circuitBreaker: {
      /** Add liquidity limit of an asset was changed. */
      AddLiquidityLimitChanged: AugmentedEvent<
        ApiType,
        [assetId: u32, liquidityLimit: Option<ITuple<[u32, u32]>>],
        { assetId: u32; liquidityLimit: Option<ITuple<[u32, u32]>> }
      >;
      /** Remove liquidity limit of an asset was changed. */
      RemoveLiquidityLimitChanged: AugmentedEvent<
        ApiType,
        [assetId: u32, liquidityLimit: Option<ITuple<[u32, u32]>>],
        { assetId: u32; liquidityLimit: Option<ITuple<[u32, u32]>> }
      >;
      /** Trade volume limit of an asset was changed. */
      TradeVolumeLimitChanged: AugmentedEvent<
        ApiType,
        [assetId: u32, tradeVolumeLimit: ITuple<[u32, u32]>],
        { assetId: u32; tradeVolumeLimit: ITuple<[u32, u32]> }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    claims: {
      Claim: AugmentedEvent<
        ApiType,
        [AccountId32, PalletClaimsEthereumAddress, u128]
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    collatorRewards: {
      /** Collator was rewarded. */
      CollatorRewarded: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128, currency: u32],
        { who: AccountId32; amount: u128; currency: u32 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    collatorSelection: {
      CandidateAdded: AugmentedEvent<
        ApiType,
        [accountId: AccountId32, deposit: u128],
        { accountId: AccountId32; deposit: u128 }
      >;
      CandidateRemoved: AugmentedEvent<
        ApiType,
        [accountId: AccountId32],
        { accountId: AccountId32 }
      >;
      NewCandidacyBond: AugmentedEvent<
        ApiType,
        [bondAmount: u128],
        { bondAmount: u128 }
      >;
      NewDesiredCandidates: AugmentedEvent<
        ApiType,
        [desiredCandidates: u32],
        { desiredCandidates: u32 }
      >;
      NewInvulnerables: AugmentedEvent<
        ApiType,
        [invulnerables: Vec<AccountId32>],
        { invulnerables: Vec<AccountId32> }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /** A motion was approved by the required threshold. */
      Approved: AugmentedEvent<
        ApiType,
        [proposalHash: H256],
        { proposalHash: H256 }
      >;
      /**
       * A proposal was closed because its threshold was reached or after its
       * duration was up.
       */
      Closed: AugmentedEvent<
        ApiType,
        [proposalHash: H256, yes: u32, no: u32],
        { proposalHash: H256; yes: u32; no: u32 }
      >;
      /** A motion was not approved by the required threshold. */
      Disapproved: AugmentedEvent<
        ApiType,
        [proposalHash: H256],
        { proposalHash: H256 }
      >;
      /** A motion was executed; result will be `Ok` if it returned without error. */
      Executed: AugmentedEvent<
        ApiType,
        [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>],
        { proposalHash: H256; result: Result<Null, SpRuntimeDispatchError> }
      >;
      /**
       * A single member did some action; result will be `Ok` if it returned
       * without error.
       */
      MemberExecuted: AugmentedEvent<
        ApiType,
        [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>],
        { proposalHash: H256; result: Result<Null, SpRuntimeDispatchError> }
      >;
      /**
       * A motion (given hash) has been proposed (by given account) with a
       * threshold (given `MemberCount`).
       */
      Proposed: AugmentedEvent<
        ApiType,
        [
          account: AccountId32,
          proposalIndex: u32,
          proposalHash: H256,
          threshold: u32
        ],
        {
          account: AccountId32;
          proposalIndex: u32;
          proposalHash: H256;
          threshold: u32;
        }
      >;
      /**
       * A motion (given hash) has been voted on by given account, leaving a
       * tally (yes votes and no votes given respectively as `MemberCount`).
       */
      Voted: AugmentedEvent<
        ApiType,
        [
          account: AccountId32,
          proposalHash: H256,
          voted: bool,
          yes: u32,
          no: u32
        ],
        {
          account: AccountId32;
          proposalHash: H256;
          voted: bool;
          yes: u32;
          no: u32;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    cumulusXcm: {
      /** Downward message executed with the given outcome. [ id, outcome ] */
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV3TraitsOutcome]>;
      /** Downward message is invalid XCM. [ id ] */
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /** Downward message is unsupported version of XCM. [ id ] */
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    currencies: {
      /** Update balance success. */
      BalanceUpdated: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: i128],
        { currencyId: u32; who: AccountId32; amount: i128 }
      >;
      /** Deposit success. */
      Deposited: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: u128],
        { currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /** Currency transfer success. */
      Transferred: AugmentedEvent<
        ApiType,
        [currencyId: u32, from: AccountId32, to: AccountId32, amount: u128],
        { currencyId: u32; from: AccountId32; to: AccountId32; amount: u128 }
      >;
      /** Withdraw success. */
      Withdrawn: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: u128],
        { currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    dca: {
      /** The DCA is completed and completely removed from the chain */
      Completed: AugmentedEvent<
        ApiType,
        [id: u32, who: AccountId32],
        { id: u32; who: AccountId32 }
      >;
      /** The DCA is planned for blocknumber */
      ExecutionPlanned: AugmentedEvent<
        ApiType,
        [id: u32, who: AccountId32, block: u32],
        { id: u32; who: AccountId32; block: u32 }
      >;
      /** The DCA execution is started */
      ExecutionStarted: AugmentedEvent<
        ApiType,
        [id: u32, block: u32],
        { id: u32; block: u32 }
      >;
      /** Randomness generation failed possibly coming from missing data about relay chain */
      RandomnessGenerationFailed: AugmentedEvent<
        ApiType,
        [block: u32, error: SpRuntimeDispatchError],
        { block: u32; error: SpRuntimeDispatchError }
      >;
      /** The DCA is scheduled for next execution */
      Scheduled: AugmentedEvent<
        ApiType,
        [id: u32, who: AccountId32],
        { id: u32; who: AccountId32 }
      >;
      /** The DCA is terminated and completely removed from the chain */
      Terminated: AugmentedEvent<
        ApiType,
        [id: u32, who: AccountId32, error: SpRuntimeDispatchError],
        { id: u32; who: AccountId32; error: SpRuntimeDispatchError }
      >;
      /** The DCA trade is successfully executed */
      TradeExecuted: AugmentedEvent<
        ApiType,
        [id: u32, who: AccountId32, amountIn: u128, amountOut: u128],
        { id: u32; who: AccountId32; amountIn: u128; amountOut: u128 }
      >;
      /** The DCA trade execution is failed */
      TradeFailed: AugmentedEvent<
        ApiType,
        [id: u32, who: AccountId32, error: SpRuntimeDispatchError],
        { id: u32; who: AccountId32; error: SpRuntimeDispatchError }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      /** A proposal_hash has been blacklisted permanently. */
      Blacklisted: AugmentedEvent<
        ApiType,
        [proposalHash: H256],
        { proposalHash: H256 }
      >;
      /** A referendum has been cancelled. */
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /** An account has delegated their vote to another account. */
      Delegated: AugmentedEvent<
        ApiType,
        [who: AccountId32, target: AccountId32],
        { who: AccountId32; target: AccountId32 }
      >;
      /** An external proposal has been tabled. */
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /** A proposal has been rejected by referendum. */
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /** A proposal has been approved by referendum. */
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /** A proposal got canceled. */
      ProposalCanceled: AugmentedEvent<
        ApiType,
        [propIndex: u32],
        { propIndex: u32 }
      >;
      /** A motion has been proposed by a public account. */
      Proposed: AugmentedEvent<
        ApiType,
        [proposalIndex: u32, deposit: u128],
        { proposalIndex: u32; deposit: u128 }
      >;
      /** An account has secconded a proposal */
      Seconded: AugmentedEvent<
        ApiType,
        [seconder: AccountId32, propIndex: u32],
        { seconder: AccountId32; propIndex: u32 }
      >;
      /** A referendum has begun. */
      Started: AugmentedEvent<
        ApiType,
        [refIndex: u32, threshold: PalletDemocracyVoteThreshold],
        { refIndex: u32; threshold: PalletDemocracyVoteThreshold }
      >;
      /** A public proposal has been tabled for referendum vote. */
      Tabled: AugmentedEvent<
        ApiType,
        [proposalIndex: u32, deposit: u128],
        { proposalIndex: u32; deposit: u128 }
      >;
      /** An account has cancelled a previous delegation operation. */
      Undelegated: AugmentedEvent<
        ApiType,
        [account: AccountId32],
        { account: AccountId32 }
      >;
      /** An external proposal has been vetoed. */
      Vetoed: AugmentedEvent<
        ApiType,
        [who: AccountId32, proposalHash: H256, until: u32],
        { who: AccountId32; proposalHash: H256; until: u32 }
      >;
      /** An account has voted in a referendum */
      Voted: AugmentedEvent<
        ApiType,
        [
          voter: AccountId32,
          refIndex: u32,
          vote: PalletDemocracyVoteAccountVote
        ],
        {
          voter: AccountId32;
          refIndex: u32;
          vote: PalletDemocracyVoteAccountVote;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    dmpQueue: {
      /** Downward message executed with the given outcome. */
      ExecutedDownward: AugmentedEvent<
        ApiType,
        [messageId: U8aFixed, outcome: XcmV3TraitsOutcome],
        { messageId: U8aFixed; outcome: XcmV3TraitsOutcome }
      >;
      /** Downward message is invalid XCM. */
      InvalidFormat: AugmentedEvent<
        ApiType,
        [messageId: U8aFixed],
        { messageId: U8aFixed }
      >;
      /** The maximum number of downward messages was. */
      MaxMessagesExhausted: AugmentedEvent<
        ApiType,
        [messageId: U8aFixed],
        { messageId: U8aFixed }
      >;
      /** Downward message is overweight and was placed in the overweight queue. */
      OverweightEnqueued: AugmentedEvent<
        ApiType,
        [
          messageId: U8aFixed,
          overweightIndex: u64,
          requiredWeight: SpWeightsWeightV2Weight
        ],
        {
          messageId: U8aFixed;
          overweightIndex: u64;
          requiredWeight: SpWeightsWeightV2Weight;
        }
      >;
      /** Downward message from the overweight queue was executed. */
      OverweightServiced: AugmentedEvent<
        ApiType,
        [overweightIndex: u64, weightUsed: SpWeightsWeightV2Weight],
        { overweightIndex: u64; weightUsed: SpWeightsWeightV2Weight }
      >;
      /** Downward message is unsupported version of XCM. */
      UnsupportedVersion: AugmentedEvent<
        ApiType,
        [messageId: U8aFixed],
        { messageId: U8aFixed }
      >;
      /** The weight limit for handling downward messages was reached. */
      WeightExhausted: AugmentedEvent<
        ApiType,
        [
          messageId: U8aFixed,
          remainingWeight: SpWeightsWeightV2Weight,
          requiredWeight: SpWeightsWeightV2Weight
        ],
        {
          messageId: U8aFixed;
          remainingWeight: SpWeightsWeightV2Weight;
          requiredWeight: SpWeightsWeightV2Weight;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    duster: {
      /** Account added to non-dustable list. */
      Added: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /** Account dusted. */
      Dusted: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /** Account removed from non-dustable list. */
      Removed: AugmentedEvent<
        ApiType,
        [who: AccountId32],
        { who: AccountId32 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    elections: {
      /**
       * A candidate was slashed by amount due to failing to obtain a seat as
       * member or runner-up.
       *
       * Note that old members and runners-up are also candidates.
       */
      CandidateSlashed: AugmentedEvent<
        ApiType,
        [candidate: AccountId32, amount: u128],
        { candidate: AccountId32; amount: u128 }
      >;
      /** Internal error happened while trying to perform election. */
      ElectionError: AugmentedEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different
       * from `NewTerm(\[\])`. See the description of `NewTerm`.
       */
      EmptyTerm: AugmentedEvent<ApiType, []>;
      /**
       * A member has been removed. This should always be followed by either
       * `NewTerm` or `EmptyTerm`.
       */
      MemberKicked: AugmentedEvent<
        ApiType,
        [member: AccountId32],
        { member: AccountId32 }
      >;
      /**
       * A new term with new_members. This indicates that enough candidates
       * existed to run the election, not that enough have has been elected. The
       * inner value must be examined for this purpose. A `NewTerm(\[\])`
       * indicates that some candidates got their bond slashed and none were
       * elected, whilst `EmptyTerm` means that no candidates existed to begin with.
       */
      NewTerm: AugmentedEvent<
        ApiType,
        [newMembers: Vec<ITuple<[AccountId32, u128]>>],
        { newMembers: Vec<ITuple<[AccountId32, u128]>> }
      >;
      /** Someone has renounced their candidacy. */
      Renounced: AugmentedEvent<
        ApiType,
        [candidate: AccountId32],
        { candidate: AccountId32 }
      >;
      /** A seat holder was slashed by amount by being forcefully removed from the set. */
      SeatHolderSlashed: AugmentedEvent<
        ApiType,
        [seatHolder: AccountId32, amount: u128],
        { seatHolder: AccountId32; amount: u128 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    emaOracle: {
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /** A name was cleared, and the given balance returned. */
      IdentityCleared: AugmentedEvent<
        ApiType,
        [who: AccountId32, deposit: u128],
        { who: AccountId32; deposit: u128 }
      >;
      /** A name was removed and the given balance slashed. */
      IdentityKilled: AugmentedEvent<
        ApiType,
        [who: AccountId32, deposit: u128],
        { who: AccountId32; deposit: u128 }
      >;
      /** A name was set or reset (which will remove all judgements). */
      IdentitySet: AugmentedEvent<
        ApiType,
        [who: AccountId32],
        { who: AccountId32 }
      >;
      /** A judgement was given by a registrar. */
      JudgementGiven: AugmentedEvent<
        ApiType,
        [target: AccountId32, registrarIndex: u32],
        { target: AccountId32; registrarIndex: u32 }
      >;
      /** A judgement was asked from a registrar. */
      JudgementRequested: AugmentedEvent<
        ApiType,
        [who: AccountId32, registrarIndex: u32],
        { who: AccountId32; registrarIndex: u32 }
      >;
      /** A judgement request was retracted. */
      JudgementUnrequested: AugmentedEvent<
        ApiType,
        [who: AccountId32, registrarIndex: u32],
        { who: AccountId32; registrarIndex: u32 }
      >;
      /** A registrar was added. */
      RegistrarAdded: AugmentedEvent<
        ApiType,
        [registrarIndex: u32],
        { registrarIndex: u32 }
      >;
      /** A sub-identity was added to an identity and the deposit paid. */
      SubIdentityAdded: AugmentedEvent<
        ApiType,
        [sub: AccountId32, main: AccountId32, deposit: u128],
        { sub: AccountId32; main: AccountId32; deposit: u128 }
      >;
      /** A sub-identity was removed from an identity and the deposit freed. */
      SubIdentityRemoved: AugmentedEvent<
        ApiType,
        [sub: AccountId32, main: AccountId32, deposit: u128],
        { sub: AccountId32; main: AccountId32; deposit: u128 }
      >;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       */
      SubIdentityRevoked: AugmentedEvent<
        ApiType,
        [sub: AccountId32, main: AccountId32, deposit: u128],
        { sub: AccountId32; main: AccountId32; deposit: u128 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /** A multisig operation has been approved by someone. */
      MultisigApproval: AugmentedEvent<
        ApiType,
        [
          approving: AccountId32,
          timepoint: PalletMultisigTimepoint,
          multisig: AccountId32,
          callHash: U8aFixed
        ],
        {
          approving: AccountId32;
          timepoint: PalletMultisigTimepoint;
          multisig: AccountId32;
          callHash: U8aFixed;
        }
      >;
      /** A multisig operation has been cancelled. */
      MultisigCancelled: AugmentedEvent<
        ApiType,
        [
          cancelling: AccountId32,
          timepoint: PalletMultisigTimepoint,
          multisig: AccountId32,
          callHash: U8aFixed
        ],
        {
          cancelling: AccountId32;
          timepoint: PalletMultisigTimepoint;
          multisig: AccountId32;
          callHash: U8aFixed;
        }
      >;
      /** A multisig operation has been executed. */
      MultisigExecuted: AugmentedEvent<
        ApiType,
        [
          approving: AccountId32,
          timepoint: PalletMultisigTimepoint,
          multisig: AccountId32,
          callHash: U8aFixed,
          result: Result<Null, SpRuntimeDispatchError>
        ],
        {
          approving: AccountId32;
          timepoint: PalletMultisigTimepoint;
          multisig: AccountId32;
          callHash: U8aFixed;
          result: Result<Null, SpRuntimeDispatchError>;
        }
      >;
      /** A new multisig operation has begun. */
      NewMultisig: AugmentedEvent<
        ApiType,
        [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed],
        { approving: AccountId32; multisig: AccountId32; callHash: U8aFixed }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    multiTransactionPayment: {
      /** New accepted currency added [currency] */
      CurrencyAdded: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /** Accepted currency removed [currency] */
      CurrencyRemoved: AugmentedEvent<
        ApiType,
        [assetId: u32],
        { assetId: u32 }
      >;
      /** CurrencySet [who, currency] */
      CurrencySet: AugmentedEvent<
        ApiType,
        [accountId: AccountId32, assetId: u32],
        { accountId: AccountId32; assetId: u32 }
      >;
      /**
       * Transaction fee paid in non-native currency [Account, Currency, Native
       * fee amount, Non-native fee amount, Destination account]
       */
      FeeWithdrawn: AugmentedEvent<
        ApiType,
        [
          accountId: AccountId32,
          assetId: u32,
          nativeFeeAmount: u128,
          nonNativeFeeAmount: u128,
          destinationAccountId: AccountId32
        ],
        {
          accountId: AccountId32;
          assetId: u32;
          nativeFeeAmount: u128;
          nonNativeFeeAmount: u128;
          destinationAccountId: AccountId32;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    omnipool: {
      /**
       * Amount has been refunded for asset which has not been accepted to add
       * to omnipool.
       */
      AssetRefunded: AugmentedEvent<
        ApiType,
        [assetId: u32, amount: u128, recipient: AccountId32],
        { assetId: u32; amount: u128; recipient: AccountId32 }
      >;
      /** Asset's weight cap has been updated. */
      AssetWeightCapUpdated: AugmentedEvent<
        ApiType,
        [assetId: u32, cap: Permill],
        { assetId: u32; cap: Permill }
      >;
      /** Buy trade executed. */
      BuyExecuted: AugmentedEvent<
        ApiType,
        [
          who: AccountId32,
          assetIn: u32,
          assetOut: u32,
          amountIn: u128,
          amountOut: u128
        ],
        {
          who: AccountId32;
          assetIn: u32;
          assetOut: u32;
          amountIn: u128;
          amountOut: u128;
        }
      >;
      /** Liquidity of an asset was added to Omnipool. */
      LiquidityAdded: AugmentedEvent<
        ApiType,
        [who: AccountId32, assetId: u32, amount: u128, positionId: u128],
        { who: AccountId32; assetId: u32; amount: u128; positionId: u128 }
      >;
      /** Liquidity of an asset was removed to Omnipool. */
      LiquidityRemoved: AugmentedEvent<
        ApiType,
        [
          who: AccountId32,
          positionId: u128,
          assetId: u32,
          sharesRemoved: u128,
          fee: u128
        ],
        {
          who: AccountId32;
          positionId: u128;
          assetId: u32;
          sharesRemoved: u128;
          fee: u128;
        }
      >;
      /** LP Position was created and NFT instance minted. */
      PositionCreated: AugmentedEvent<
        ApiType,
        [
          positionId: u128,
          owner: AccountId32,
          asset: u32,
          amount: u128,
          shares: u128,
          price: u128
        ],
        {
          positionId: u128;
          owner: AccountId32;
          asset: u32;
          amount: u128;
          shares: u128;
          price: u128;
        }
      >;
      /** LP Position was destroyed and NFT instance burned. */
      PositionDestroyed: AugmentedEvent<
        ApiType,
        [positionId: u128, owner: AccountId32],
        { positionId: u128; owner: AccountId32 }
      >;
      /** LP Position was created and NFT instance minted. */
      PositionUpdated: AugmentedEvent<
        ApiType,
        [
          positionId: u128,
          owner: AccountId32,
          asset: u32,
          amount: u128,
          shares: u128,
          price: u128
        ],
        {
          positionId: u128;
          owner: AccountId32;
          asset: u32;
          amount: u128;
          shares: u128;
          price: u128;
        }
      >;
      /** Sell trade executed. */
      SellExecuted: AugmentedEvent<
        ApiType,
        [
          who: AccountId32,
          assetIn: u32,
          assetOut: u32,
          amountIn: u128,
          amountOut: u128
        ],
        {
          who: AccountId32;
          assetIn: u32;
          assetOut: u32;
          amountIn: u128;
          amountOut: u128;
        }
      >;
      /** An asset was added to Omnipool */
      TokenAdded: AugmentedEvent<
        ApiType,
        [assetId: u32, initialAmount: u128, initialPrice: u128],
        { assetId: u32; initialAmount: u128; initialPrice: u128 }
      >;
      /** Aseet's tradable state has been updated. */
      TradableStateUpdated: AugmentedEvent<
        ApiType,
        [assetId: u32, state: PalletOmnipoolTradability],
        { assetId: u32; state: PalletOmnipoolTradability }
      >;
      /** TVL cap has been updated. */
      TVLCapUpdated: AugmentedEvent<ApiType, [cap: u128], { cap: u128 }>;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    omnipoolLiquidityMining: {
      /** All LP shares were unlocked and NFT representing deposit was destroyed. */
      DepositDestroyed: AugmentedEvent<
        ApiType,
        [who: AccountId32, depositId: u128],
        { who: AccountId32; depositId: u128 }
      >;
      /** New global farm was created. */
      GlobalFarmCreated: AugmentedEvent<
        ApiType,
        [
          id: u32,
          owner: AccountId32,
          totalRewards: u128,
          rewardCurrency: u32,
          yieldPerPeriod: Perquintill,
          plannedYieldingPeriods: u32,
          blocksPerPeriod: u32,
          maxRewardPerPeriod: u128,
          minDeposit: u128,
          lrnaPriceAdjustment: u128
        ],
        {
          id: u32;
          owner: AccountId32;
          totalRewards: u128;
          rewardCurrency: u32;
          yieldPerPeriod: Perquintill;
          plannedYieldingPeriods: u32;
          blocksPerPeriod: u32;
          maxRewardPerPeriod: u128;
          minDeposit: u128;
          lrnaPriceAdjustment: u128;
        }
      >;
      /** Global farm was terminated. */
      GlobalFarmTerminated: AugmentedEvent<
        ApiType,
        [
          globalFarmId: u32,
          who: AccountId32,
          rewardCurrency: u32,
          undistributedRewards: u128
        ],
        {
          globalFarmId: u32;
          who: AccountId32;
          rewardCurrency: u32;
          undistributedRewards: u128;
        }
      >;
      /** Rewards were claimed. */
      RewardClaimed: AugmentedEvent<
        ApiType,
        [
          globalFarmId: u32,
          yieldFarmId: u32,
          who: AccountId32,
          claimed: u128,
          rewardCurrency: u32,
          depositId: u128
        ],
        {
          globalFarmId: u32;
          yieldFarmId: u32;
          who: AccountId32;
          claimed: u128;
          rewardCurrency: u32;
          depositId: u128;
        }
      >;
      /** New LP shares(LP position) were deposited. */
      SharesDeposited: AugmentedEvent<
        ApiType,
        [
          globalFarmId: u32,
          yieldFarmId: u32,
          depositId: u128,
          assetId: u32,
          who: AccountId32,
          sharesAmount: u128,
          positionId: u128
        ],
        {
          globalFarmId: u32;
          yieldFarmId: u32;
          depositId: u128;
          assetId: u32;
          who: AccountId32;
          sharesAmount: u128;
          positionId: u128;
        }
      >;
      /** Already locked LP shares were redeposited to another yield farm. */
      SharesRedeposited: AugmentedEvent<
        ApiType,
        [
          globalFarmId: u32,
          yieldFarmId: u32,
          depositId: u128,
          assetId: u32,
          who: AccountId32,
          sharesAmount: u128,
          positionId: u128
        ],
        {
          globalFarmId: u32;
          yieldFarmId: u32;
          depositId: u128;
          assetId: u32;
          who: AccountId32;
          sharesAmount: u128;
          positionId: u128;
        }
      >;
      /** LP shares were withdrawn. */
      SharesWithdrawn: AugmentedEvent<
        ApiType,
        [
          globalFarmId: u32,
          yieldFarmId: u32,
          who: AccountId32,
          amount: u128,
          depositId: u128
        ],
        {
          globalFarmId: u32;
          yieldFarmId: u32;
          who: AccountId32;
          amount: u128;
          depositId: u128;
        }
      >;
      /** New yield farm was added to the farm. */
      YieldFarmCreated: AugmentedEvent<
        ApiType,
        [
          globalFarmId: u32,
          yieldFarmId: u32,
          assetId: u32,
          multiplier: u128,
          loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>
        ],
        {
          globalFarmId: u32;
          yieldFarmId: u32;
          assetId: u32;
          multiplier: u128;
          loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>;
        }
      >;
      /** Yield farm for `asset_id` was resumed. */
      YieldFarmResumed: AugmentedEvent<
        ApiType,
        [
          globalFarmId: u32,
          yieldFarmId: u32,
          assetId: u32,
          who: AccountId32,
          multiplier: u128
        ],
        {
          globalFarmId: u32;
          yieldFarmId: u32;
          assetId: u32;
          who: AccountId32;
          multiplier: u128;
        }
      >;
      /** Yield farm for `asset_id` was stopped. */
      YieldFarmStopped: AugmentedEvent<
        ApiType,
        [globalFarmId: u32, yieldFarmId: u32, assetId: u32, who: AccountId32],
        { globalFarmId: u32; yieldFarmId: u32; assetId: u32; who: AccountId32 }
      >;
      /** Yield farm was terminated from the global farm. */
      YieldFarmTerminated: AugmentedEvent<
        ApiType,
        [globalFarmId: u32, yieldFarmId: u32, assetId: u32, who: AccountId32],
        { globalFarmId: u32; yieldFarmId: u32; assetId: u32; who: AccountId32 }
      >;
      /** Yield farm multiplier was updated. */
      YieldFarmUpdated: AugmentedEvent<
        ApiType,
        [
          globalFarmId: u32,
          yieldFarmId: u32,
          assetId: u32,
          who: AccountId32,
          multiplier: u128
        ],
        {
          globalFarmId: u32;
          yieldFarmId: u32;
          assetId: u32;
          who: AccountId32;
          multiplier: u128;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    omnipoolWarehouseLM: {
      /** Global farm has no more rewards to distribute in the moment. */
      AllRewardsDistributed: AugmentedEvent<
        ApiType,
        [globalFarmId: u32],
        { globalFarmId: u32 }
      >;
      /** Global farm accumulated reward per share was updated. */
      GlobalFarmAccRPZUpdated: AugmentedEvent<
        ApiType,
        [globalFarmId: u32, accumulatedRpz: u128, totalSharesZ: u128],
        { globalFarmId: u32; accumulatedRpz: u128; totalSharesZ: u128 }
      >;
      /** Yield farm accumulated reward per valued share was updated. */
      YieldFarmAccRPVSUpdated: AugmentedEvent<
        ApiType,
        [
          globalFarmId: u32,
          yieldFarmId: u32,
          accumulatedRpvs: u128,
          totalValuedShares: u128
        ],
        {
          globalFarmId: u32;
          yieldFarmId: u32;
          accumulatedRpvs: u128;
          totalValuedShares: u128;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    ormlXcm: {
      /** XCM message sent. [to, message] */
      Sent: AugmentedEvent<
        ApiType,
        [to: XcmV3MultiLocation, message: XcmV3Xcm],
        { to: XcmV3MultiLocation; message: XcmV3Xcm }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    otc: {
      /** An Order has been cancelled */
      Cancelled: AugmentedEvent<ApiType, [orderId: u32], { orderId: u32 }>;
      /** An Order has been completely filled */
      Filled: AugmentedEvent<
        ApiType,
        [orderId: u32, who: AccountId32, amountIn: u128, amountOut: u128],
        { orderId: u32; who: AccountId32; amountIn: u128; amountOut: u128 }
      >;
      /** An Order has been partially filled */
      PartiallyFilled: AugmentedEvent<
        ApiType,
        [orderId: u32, who: AccountId32, amountIn: u128, amountOut: u128],
        { orderId: u32; who: AccountId32; amountIn: u128; amountOut: u128 }
      >;
      /** An Order has been placed */
      Placed: AugmentedEvent<
        ApiType,
        [
          orderId: u32,
          assetIn: u32,
          assetOut: u32,
          amountIn: u128,
          amountOut: u128,
          partiallyFillable: bool
        ],
        {
          orderId: u32;
          assetIn: u32;
          assetOut: u32;
          amountIn: u128;
          amountOut: u128;
          partiallyFillable: bool;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainSystem: {
      /** Downward messages were processed using the given weight. */
      DownwardMessagesProcessed: AugmentedEvent<
        ApiType,
        [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256],
        { weightUsed: SpWeightsWeightV2Weight; dmqHead: H256 }
      >;
      /** Some downward messages have been received and will be processed. */
      DownwardMessagesReceived: AugmentedEvent<
        ApiType,
        [count: u32],
        { count: u32 }
      >;
      /** An upgrade has been authorized. */
      UpgradeAuthorized: AugmentedEvent<
        ApiType,
        [codeHash: H256],
        { codeHash: H256 }
      >;
      /** An upward message was sent to the relay chain. */
      UpwardMessageSent: AugmentedEvent<
        ApiType,
        [messageHash: Option<U8aFixed>],
        { messageHash: Option<U8aFixed> }
      >;
      /** The validation function was applied as of the contained relay chain block number. */
      ValidationFunctionApplied: AugmentedEvent<
        ApiType,
        [relayChainBlockNum: u32],
        { relayChainBlockNum: u32 }
      >;
      /** The relay-chain aborted the upgrade process. */
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      /** The validation function has been scheduled to apply. */
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      /**
       * Some assets have been claimed from an asset trap
       *
       * [ hash, origin, assets ]
       */
      AssetsClaimed: AugmentedEvent<
        ApiType,
        [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]
      >;
      /**
       * Some assets have been placed in an asset trap.
       *
       * [ hash, origin, assets ]
       */
      AssetsTrapped: AugmentedEvent<
        ApiType,
        [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]
      >;
      /**
       * Execution of an XCM message was attempted.
       *
       * [ outcome ]
       */
      Attempted: AugmentedEvent<ApiType, [XcmV3TraitsOutcome]>;
      /**
       * Fees were paid from a location for an operation (often for using `SendXcm`).
       *
       * [ paying location, fees ]
       */
      FeesPaid: AugmentedEvent<
        ApiType,
        [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]
      >;
      /**
       * Expected query response has been received but the querier location of
       * the response does not match the expected. The query remains registered
       * for a later, valid, response to be received and acted upon.
       *
       * [ origin location, id, expected querier, maybe actual querier ]
       */
      InvalidQuerier: AugmentedEvent<
        ApiType,
        [
          XcmV3MultiLocation,
          u64,
          XcmV3MultiLocation,
          Option<XcmV3MultiLocation>
        ]
      >;
      /**
       * Expected query response has been received but the expected querier
       * location placed in storage by this runtime previously cannot be
       * decoded. The query remains registered.
       *
       * This is unexpected (since a location placed in storage in a previously
       * executing runtime should be readable prior to query timeout) and
       * dangerous since the possibly valid response will be dropped. Manual
       * governance intervention is probably going to be needed.
       *
       * [ origin location, id ]
       */
      InvalidQuerierVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * Expected query response has been received but the origin location of
       * the response does not match that expected. The query remains registered
       * for a later, valid, response to be received and acted upon.
       *
       * [ origin location, id, expected location ]
       */
      InvalidResponder: AugmentedEvent<
        ApiType,
        [XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]
      >;
      /**
       * Expected query response has been received but the expected origin
       * location placed in storage by this runtime previously cannot be
       * decoded. The query remains registered.
       *
       * This is unexpected (since a location placed in storage in a previously
       * executing runtime should be readable prior to query timeout) and
       * dangerous since the possibly valid response will be dropped. Manual
       * governance intervention is probably going to be needed.
       *
       * [ origin location, id ]
       */
      InvalidResponderVersion: AugmentedEvent<
        ApiType,
        [XcmV3MultiLocation, u64]
      >;
      /**
       * Query response has been received and query is removed. The registered
       * notification has been dispatched and executed successfully.
       *
       * [ id, pallet index, call index ]
       */
      Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The dispatch was
       * unable to be decoded into a `Call`; this might be due to dispatch
       * function having a signature which is not `(origin, QueryId, Response)`.
       *
       * [ id, pallet index, call index ]
       */
      NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. There was a
       * general error with dispatching the notification call.
       *
       * [ id, pallet index, call index ]
       */
      NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The registered
       * notification could not be dispatched because the dispatch weight is
       * greater than the maximum weight originally budgeted by this runtime for
       * the query result.
       *
       * [ id, pallet index, call index, actual weight, max budgeted weight ]
       */
      NotifyOverweight: AugmentedEvent<
        ApiType,
        [u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]
      >;
      /**
       * A given location which had a version change subscription was dropped
       * owing to an error migrating the location to our new XCM format.
       *
       * [ location, query ID ]
       */
      NotifyTargetMigrationFail: AugmentedEvent<
        ApiType,
        [XcmVersionedMultiLocation, u64]
      >;
      /**
       * A given location which had a version change subscription was dropped
       * owing to an error sending the notification to it.
       *
       * [ location, query ID, error ]
       */
      NotifyTargetSendFail: AugmentedEvent<
        ApiType,
        [XcmV3MultiLocation, u64, XcmV3TraitsError]
      >;
      /**
       * Query response has been received and is ready for taking with
       * `take_response`. There is no registered notification call.
       *
       * [ id, response ]
       */
      ResponseReady: AugmentedEvent<ApiType, [u64, XcmV3Response]>;
      /**
       * Received query response has been read and removed.
       *
       * [ id ]
       */
      ResponseTaken: AugmentedEvent<ApiType, [u64]>;
      /**
       * A XCM message was sent.
       *
       * [ origin, destination, message ]
       */
      Sent: AugmentedEvent<
        ApiType,
        [XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]
      >;
      /**
       * The supported version of a location has been changed. This might be
       * through an automatic notification or a manual intervention.
       *
       * [ location, XCM version ]
       */
      SupportedVersionChanged: AugmentedEvent<
        ApiType,
        [XcmV3MultiLocation, u32]
      >;
      /**
       * Query response received which does not match a registered query. This
       * may be because a matching query was never registered, it may be because
       * it is a duplicate response, or because the query timed out.
       *
       * [ origin location, id ]
       */
      UnexpectedResponse: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       *
       * The cost of sending it (borne by the chain) is included.
       *
       * [ destination, result, cost ]
       */
      VersionChangeNotified: AugmentedEvent<
        ApiType,
        [XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]
      >;
      /**
       * We have requested that a remote chain sends us XCM version change notifications.
       *
       * [ destination location, cost ]
       */
      VersionNotifyRequested: AugmentedEvent<
        ApiType,
        [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]
      >;
      /**
       * A remote has requested XCM version change notification from us and we
       * have honored it. A version information message is sent to them and its
       * cost is included.
       *
       * [ destination location, cost ]
       */
      VersionNotifyStarted: AugmentedEvent<
        ApiType,
        [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]
      >;
      /**
       * We have requested that a remote chain stops sending us XCM version
       * change notifications.
       *
       * [ destination location, cost ]
       */
      VersionNotifyUnrequested: AugmentedEvent<
        ApiType,
        [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      /** A preimage has ben cleared. */
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /** A preimage has been noted. */
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /** A preimage has been requested. */
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /** An announcement was placed to make a call in the future. */
      Announced: AugmentedEvent<
        ApiType,
        [real: AccountId32, proxy: AccountId32, callHash: H256],
        { real: AccountId32; proxy: AccountId32; callHash: H256 }
      >;
      /** A proxy was added. */
      ProxyAdded: AugmentedEvent<
        ApiType,
        [
          delegator: AccountId32,
          delegatee: AccountId32,
          proxyType: CommonRuntimeProxyType,
          delay: u32
        ],
        {
          delegator: AccountId32;
          delegatee: AccountId32;
          proxyType: CommonRuntimeProxyType;
          delay: u32;
        }
      >;
      /** A proxy was executed correctly, with the given. */
      ProxyExecuted: AugmentedEvent<
        ApiType,
        [result: Result<Null, SpRuntimeDispatchError>],
        { result: Result<Null, SpRuntimeDispatchError> }
      >;
      /** A proxy was removed. */
      ProxyRemoved: AugmentedEvent<
        ApiType,
        [
          delegator: AccountId32,
          delegatee: AccountId32,
          proxyType: CommonRuntimeProxyType,
          delay: u32
        ],
        {
          delegator: AccountId32;
          delegatee: AccountId32;
          proxyType: CommonRuntimeProxyType;
          delay: u32;
        }
      >;
      /**
       * A pure account has been created by new proxy with given disambiguation
       * index and proxy type.
       */
      PureCreated: AugmentedEvent<
        ApiType,
        [
          pure: AccountId32,
          who: AccountId32,
          proxyType: CommonRuntimeProxyType,
          disambiguationIndex: u16
        ],
        {
          pure: AccountId32;
          who: AccountId32;
          proxyType: CommonRuntimeProxyType;
          disambiguationIndex: u16;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    relayChainInfo: {
      /** Current block numbers [ Parachain block number, Relaychain Block number ] */
      CurrentBlockNumbers: AugmentedEvent<
        ApiType,
        [parachainBlockNumber: u32, relaychainBlockNumber: u32],
        { parachainBlockNumber: u32; relaychainBlockNumber: u32 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    router: {
      /** The route with trades has been successfully executed */
      RouteExecuted: AugmentedEvent<
        ApiType,
        [assetIn: u32, assetOut: u32, amountIn: u128, amountOut: u128],
        { assetIn: u32; assetOut: u32; amountIn: u128; amountOut: u128 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /** The call for the provided hash was not found so the task has been aborted. */
      CallUnavailable: AugmentedEvent<
        ApiType,
        [task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
        { task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
      >;
      /** Canceled some task. */
      Canceled: AugmentedEvent<
        ApiType,
        [when: u32, index: u32],
        { when: u32; index: u32 }
      >;
      /** Dispatched some task. */
      Dispatched: AugmentedEvent<
        ApiType,
        [
          task: ITuple<[u32, u32]>,
          id: Option<U8aFixed>,
          result: Result<Null, SpRuntimeDispatchError>
        ],
        {
          task: ITuple<[u32, u32]>;
          id: Option<U8aFixed>;
          result: Result<Null, SpRuntimeDispatchError>;
        }
      >;
      /** The given task was unable to be renewed since the agenda is full at that block. */
      PeriodicFailed: AugmentedEvent<
        ApiType,
        [task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
        { task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
      >;
      /** The given task can never be executed since it is overweight. */
      PermanentlyOverweight: AugmentedEvent<
        ApiType,
        [task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
        { task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
      >;
      /** Scheduled some task. */
      Scheduled: AugmentedEvent<
        ApiType,
        [when: u32, index: u32],
        { when: u32; index: u32 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index,
       * not the block number as the type might suggest.
       */
      NewSession: AugmentedEvent<
        ApiType,
        [sessionIndex: u32],
        { sessionIndex: u32 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /** `:code` was updated. */
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /** An extrinsic failed. */
      ExtrinsicFailed: AugmentedEvent<
        ApiType,
        [
          dispatchError: SpRuntimeDispatchError,
          dispatchInfo: FrameSupportDispatchDispatchInfo
        ],
        {
          dispatchError: SpRuntimeDispatchError;
          dispatchInfo: FrameSupportDispatchDispatchInfo;
        }
      >;
      /** An extrinsic completed successfully. */
      ExtrinsicSuccess: AugmentedEvent<
        ApiType,
        [dispatchInfo: FrameSupportDispatchDispatchInfo],
        { dispatchInfo: FrameSupportDispatchDispatchInfo }
      >;
      /** An account was reaped. */
      KilledAccount: AugmentedEvent<
        ApiType,
        [account: AccountId32],
        { account: AccountId32 }
      >;
      /** A new account was created. */
      NewAccount: AugmentedEvent<
        ApiType,
        [account: AccountId32],
        { account: AccountId32 }
      >;
      /** On on-chain remark happened. */
      Remarked: AugmentedEvent<
        ApiType,
        [sender: AccountId32, hash_: H256],
        { sender: AccountId32; hash_: H256 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommittee: {
      /** A motion was approved by the required threshold. */
      Approved: AugmentedEvent<
        ApiType,
        [proposalHash: H256],
        { proposalHash: H256 }
      >;
      /**
       * A proposal was closed because its threshold was reached or after its
       * duration was up.
       */
      Closed: AugmentedEvent<
        ApiType,
        [proposalHash: H256, yes: u32, no: u32],
        { proposalHash: H256; yes: u32; no: u32 }
      >;
      /** A motion was not approved by the required threshold. */
      Disapproved: AugmentedEvent<
        ApiType,
        [proposalHash: H256],
        { proposalHash: H256 }
      >;
      /** A motion was executed; result will be `Ok` if it returned without error. */
      Executed: AugmentedEvent<
        ApiType,
        [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>],
        { proposalHash: H256; result: Result<Null, SpRuntimeDispatchError> }
      >;
      /**
       * A single member did some action; result will be `Ok` if it returned
       * without error.
       */
      MemberExecuted: AugmentedEvent<
        ApiType,
        [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>],
        { proposalHash: H256; result: Result<Null, SpRuntimeDispatchError> }
      >;
      /**
       * A motion (given hash) has been proposed (by given account) with a
       * threshold (given `MemberCount`).
       */
      Proposed: AugmentedEvent<
        ApiType,
        [
          account: AccountId32,
          proposalIndex: u32,
          proposalHash: H256,
          threshold: u32
        ],
        {
          account: AccountId32;
          proposalIndex: u32;
          proposalHash: H256;
          threshold: u32;
        }
      >;
      /**
       * A motion (given hash) has been voted on by given account, leaving a
       * tally (yes votes and no votes given respectively as `MemberCount`).
       */
      Voted: AugmentedEvent<
        ApiType,
        [
          account: AccountId32,
          proposalHash: H256,
          voted: bool,
          yes: u32,
          no: u32
        ],
        {
          account: AccountId32;
          proposalHash: H256;
          voted: bool;
          yes: u32;
          no: u32;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    tips: {
      /** A new tip suggestion has been opened. */
      NewTip: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /** A tip suggestion has been closed. */
      TipClosed: AugmentedEvent<
        ApiType,
        [tipHash: H256, who: AccountId32, payout: u128],
        { tipHash: H256; who: AccountId32; payout: u128 }
      >;
      /** A tip suggestion has reached threshold and is closing. */
      TipClosing: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /** A tip suggestion has been retracted. */
      TipRetracted: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /** A tip suggestion has been slashed. */
      TipSlashed: AugmentedEvent<
        ApiType,
        [tipHash: H256, finder: AccountId32, deposit: u128],
        { tipHash: H256; finder: AccountId32; deposit: u128 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /** A balance was set by root. */
      BalanceSet: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, free: u128, reserved: u128],
        { currencyId: u32; who: AccountId32; free: u128; reserved: u128 }
      >;
      /** Deposited some balance into an account */
      Deposited: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: u128],
        { currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss.
       */
      DustLost: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: u128],
        { currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /** An account was created with some free balance. */
      Endowed: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: u128],
        { currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /** Some free balance was locked. */
      Locked: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: u128],
        { currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /** Some locked funds were unlocked */
      LockRemoved: AugmentedEvent<
        ApiType,
        [lockId: U8aFixed, currencyId: u32, who: AccountId32],
        { lockId: U8aFixed; currencyId: u32; who: AccountId32 }
      >;
      /** Some funds are locked */
      LockSet: AugmentedEvent<
        ApiType,
        [lockId: U8aFixed, currencyId: u32, who: AccountId32, amount: u128],
        { lockId: U8aFixed; currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /** Some balance was reserved (moved from free to reserved). */
      Reserved: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: u128],
        { currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /** Some reserved balance was repatriated (moved from reserved to another account). */
      ReserveRepatriated: AugmentedEvent<
        ApiType,
        [
          currencyId: u32,
          from: AccountId32,
          to: AccountId32,
          amount: u128,
          status: FrameSupportTokensMiscBalanceStatus
        ],
        {
          currencyId: u32;
          from: AccountId32;
          to: AccountId32;
          amount: u128;
          status: FrameSupportTokensMiscBalanceStatus;
        }
      >;
      /** Some balances were slashed (e.g. due to mis-behavior) */
      Slashed: AugmentedEvent<
        ApiType,
        [
          currencyId: u32,
          who: AccountId32,
          freeAmount: u128,
          reservedAmount: u128
        ],
        {
          currencyId: u32;
          who: AccountId32;
          freeAmount: u128;
          reservedAmount: u128;
        }
      >;
      /** The total issuance of an currency has been set */
      TotalIssuanceSet: AugmentedEvent<
        ApiType,
        [currencyId: u32, amount: u128],
        { currencyId: u32; amount: u128 }
      >;
      /** Transfer succeeded. */
      Transfer: AugmentedEvent<
        ApiType,
        [currencyId: u32, from: AccountId32, to: AccountId32, amount: u128],
        { currencyId: u32; from: AccountId32; to: AccountId32; amount: u128 }
      >;
      /** Some locked balance was freed. */
      Unlocked: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: u128],
        { currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /** Some balance was unreserved (moved from reserved to free). */
      Unreserved: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: u128],
        { currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /** Some balances were withdrawn (e.g. pay for transaction fee) */
      Withdrawn: AugmentedEvent<
        ApiType,
        [currencyId: u32, who: AccountId32, amount: u128],
        { currencyId: u32; who: AccountId32; amount: u128 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPause: {
      /** Paused transaction */
      TransactionPaused: AugmentedEvent<
        ApiType,
        [palletNameBytes: Bytes, functionNameBytes: Bytes],
        { palletNameBytes: Bytes; functionNameBytes: Bytes }
      >;
      /** Unpaused transaction */
      TransactionUnpaused: AugmentedEvent<
        ApiType,
        [palletNameBytes: Bytes, functionNameBytes: Bytes],
        { palletNameBytes: Bytes; functionNameBytes: Bytes }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum
       * inclusion fee, has been paid by `who`.
       */
      TransactionFeePaid: AugmentedEvent<
        ApiType,
        [who: AccountId32, actualFee: u128, tip: u128],
        { who: AccountId32; actualFee: u128; tip: u128 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /** Some funds have been allocated. */
      Awarded: AugmentedEvent<
        ApiType,
        [proposalIndex: u32, award: u128, account: AccountId32],
        { proposalIndex: u32; award: u128; account: AccountId32 }
      >;
      /** Some of our funds have been burnt. */
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /** Some funds have been deposited. */
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /** New proposal. */
      Proposed: AugmentedEvent<
        ApiType,
        [proposalIndex: u32],
        { proposalIndex: u32 }
      >;
      /** A proposal was rejected; funds were slashed. */
      Rejected: AugmentedEvent<
        ApiType,
        [proposalIndex: u32, slashed: u128],
        { proposalIndex: u32; slashed: u128 }
      >;
      /** Spending has finished; this is the amount that rolls over until next spend. */
      Rollover: AugmentedEvent<
        ApiType,
        [rolloverBalance: u128],
        { rolloverBalance: u128 }
      >;
      /** A new spend proposal has been approved. */
      SpendApproved: AugmentedEvent<
        ApiType,
        [proposalIndex: u32, amount: u128, beneficiary: AccountId32],
        { proposalIndex: u32; amount: u128; beneficiary: AccountId32 }
      >;
      /** We have ended a spend period and will now allocate funds. */
      Spending: AugmentedEvent<
        ApiType,
        [budgetRemaining: u128],
        { budgetRemaining: u128 }
      >;
      /** The inactive funds of the pallet have been updated. */
      UpdatedInactive: AugmentedEvent<
        ApiType,
        [reactivated: u128, deactivated: u128],
        { reactivated: u128; deactivated: u128 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    uniques: {
      /**
       * An approval for a `delegate` account to transfer the `item` of an item
       * `collection` was cancelled by its `owner`.
       */
      ApprovalCancelled: AugmentedEvent<
        ApiType,
        [
          collection: u128,
          item: u128,
          owner: AccountId32,
          delegate: AccountId32
        ],
        {
          collection: u128;
          item: u128;
          owner: AccountId32;
          delegate: AccountId32;
        }
      >;
      /**
       * An `item` of a `collection` has been approved by the `owner` for
       * transfer by a `delegate`.
       */
      ApprovedTransfer: AugmentedEvent<
        ApiType,
        [
          collection: u128,
          item: u128,
          owner: AccountId32,
          delegate: AccountId32
        ],
        {
          collection: u128;
          item: u128;
          owner: AccountId32;
          delegate: AccountId32;
        }
      >;
      /** Attribute metadata has been cleared for a `collection` or `item`. */
      AttributeCleared: AugmentedEvent<
        ApiType,
        [collection: u128, maybeItem: Option<u128>, key: Bytes],
        { collection: u128; maybeItem: Option<u128>; key: Bytes }
      >;
      /** New attribute metadata has been set for a `collection` or `item`. */
      AttributeSet: AugmentedEvent<
        ApiType,
        [collection: u128, maybeItem: Option<u128>, key: Bytes, value: Bytes],
        { collection: u128; maybeItem: Option<u128>; key: Bytes; value: Bytes }
      >;
      /** An `item` was destroyed. */
      Burned: AugmentedEvent<
        ApiType,
        [collection: u128, item: u128, owner: AccountId32],
        { collection: u128; item: u128; owner: AccountId32 }
      >;
      /** Some `collection` was frozen. */
      CollectionFrozen: AugmentedEvent<
        ApiType,
        [collection: u128],
        { collection: u128 }
      >;
      /** Max supply has been set for a collection. */
      CollectionMaxSupplySet: AugmentedEvent<
        ApiType,
        [collection: u128, maxSupply: u32],
        { collection: u128; maxSupply: u32 }
      >;
      /** Metadata has been cleared for a `collection`. */
      CollectionMetadataCleared: AugmentedEvent<
        ApiType,
        [collection: u128],
        { collection: u128 }
      >;
      /** New metadata has been set for a `collection`. */
      CollectionMetadataSet: AugmentedEvent<
        ApiType,
        [collection: u128, data: Bytes, isFrozen: bool],
        { collection: u128; data: Bytes; isFrozen: bool }
      >;
      /** Some `collection` was thawed. */
      CollectionThawed: AugmentedEvent<
        ApiType,
        [collection: u128],
        { collection: u128 }
      >;
      /** A `collection` was created. */
      Created: AugmentedEvent<
        ApiType,
        [collection: u128, creator: AccountId32, owner: AccountId32],
        { collection: u128; creator: AccountId32; owner: AccountId32 }
      >;
      /** A `collection` was destroyed. */
      Destroyed: AugmentedEvent<
        ApiType,
        [collection: u128],
        { collection: u128 }
      >;
      /** A `collection` was force-created. */
      ForceCreated: AugmentedEvent<
        ApiType,
        [collection: u128, owner: AccountId32],
        { collection: u128; owner: AccountId32 }
      >;
      /** Some `item` was frozen. */
      Frozen: AugmentedEvent<
        ApiType,
        [collection: u128, item: u128],
        { collection: u128; item: u128 }
      >;
      /** An `item` was issued. */
      Issued: AugmentedEvent<
        ApiType,
        [collection: u128, item: u128, owner: AccountId32],
        { collection: u128; item: u128; owner: AccountId32 }
      >;
      /** An item was bought. */
      ItemBought: AugmentedEvent<
        ApiType,
        [
          collection: u128,
          item: u128,
          price: u128,
          seller: AccountId32,
          buyer: AccountId32
        ],
        {
          collection: u128;
          item: u128;
          price: u128;
          seller: AccountId32;
          buyer: AccountId32;
        }
      >;
      /** The price for the instance was removed. */
      ItemPriceRemoved: AugmentedEvent<
        ApiType,
        [collection: u128, item: u128],
        { collection: u128; item: u128 }
      >;
      /** The price was set for the instance. */
      ItemPriceSet: AugmentedEvent<
        ApiType,
        [
          collection: u128,
          item: u128,
          price: u128,
          whitelistedBuyer: Option<AccountId32>
        ],
        {
          collection: u128;
          item: u128;
          price: u128;
          whitelistedBuyer: Option<AccountId32>;
        }
      >;
      /** A `collection` has had its attributes changed by the `Force` origin. */
      ItemStatusChanged: AugmentedEvent<
        ApiType,
        [collection: u128],
        { collection: u128 }
      >;
      /** Metadata has been cleared for an item. */
      MetadataCleared: AugmentedEvent<
        ApiType,
        [collection: u128, item: u128],
        { collection: u128; item: u128 }
      >;
      /** New metadata has been set for an item. */
      MetadataSet: AugmentedEvent<
        ApiType,
        [collection: u128, item: u128, data: Bytes, isFrozen: bool],
        { collection: u128; item: u128; data: Bytes; isFrozen: bool }
      >;
      /** The owner changed. */
      OwnerChanged: AugmentedEvent<
        ApiType,
        [collection: u128, newOwner: AccountId32],
        { collection: u128; newOwner: AccountId32 }
      >;
      /** Ownership acceptance has changed for an account. */
      OwnershipAcceptanceChanged: AugmentedEvent<
        ApiType,
        [who: AccountId32, maybeCollection: Option<u128>],
        { who: AccountId32; maybeCollection: Option<u128> }
      >;
      /** Metadata has been cleared for an item. */
      Redeposited: AugmentedEvent<
        ApiType,
        [collection: u128, successfulItems: Vec<u128>],
        { collection: u128; successfulItems: Vec<u128> }
      >;
      /** The management team changed. */
      TeamChanged: AugmentedEvent<
        ApiType,
        [
          collection: u128,
          issuer: AccountId32,
          admin: AccountId32,
          freezer: AccountId32
        ],
        {
          collection: u128;
          issuer: AccountId32;
          admin: AccountId32;
          freezer: AccountId32;
        }
      >;
      /** Some `item` was thawed. */
      Thawed: AugmentedEvent<
        ApiType,
        [collection: u128, item: u128],
        { collection: u128; item: u128 }
      >;
      /** An `item` was transferred. */
      Transferred: AugmentedEvent<
        ApiType,
        [collection: u128, item: u128, from: AccountId32, to: AccountId32],
        { collection: u128; item: u128; from: AccountId32; to: AccountId32 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    unknownTokens: {
      /** Deposit success. */
      Deposited: AugmentedEvent<
        ApiType,
        [asset: XcmV3MultiAsset, who: XcmV3MultiLocation],
        { asset: XcmV3MultiAsset; who: XcmV3MultiLocation }
      >;
      /** Withdraw success. */
      Withdrawn: AugmentedEvent<
        ApiType,
        [asset: XcmV3MultiAsset, who: XcmV3MultiLocation],
        { asset: XcmV3MultiAsset; who: XcmV3MultiLocation }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /** Batch of dispatches completed fully with no error. */
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /** Batch of dispatches completed but has errors. */
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing
       * dispatch given, as well as the error.
       */
      BatchInterrupted: AugmentedEvent<
        ApiType,
        [index: u32, error: SpRuntimeDispatchError],
        { index: u32; error: SpRuntimeDispatchError }
      >;
      /** A call was dispatched. */
      DispatchedAs: AugmentedEvent<
        ApiType,
        [result: Result<Null, SpRuntimeDispatchError>],
        { result: Result<Null, SpRuntimeDispatchError> }
      >;
      /** A single item within a Batch of dispatches has completed with no error. */
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /** A single item within a Batch of dispatches has completed with error. */
      ItemFailed: AugmentedEvent<
        ApiType,
        [error: SpRuntimeDispatchError],
        { error: SpRuntimeDispatchError }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /** Claimed vesting. */
      Claimed: AugmentedEvent<
        ApiType,
        [who: AccountId32, amount: u128],
        { who: AccountId32; amount: u128 }
      >;
      /** Added new vesting schedule. */
      VestingScheduleAdded: AugmentedEvent<
        ApiType,
        [
          from: AccountId32,
          to: AccountId32,
          vestingSchedule: OrmlVestingVestingSchedule
        ],
        {
          from: AccountId32;
          to: AccountId32;
          vestingSchedule: OrmlVestingVestingSchedule;
        }
      >;
      /** Updated vesting schedules. */
      VestingSchedulesUpdated: AugmentedEvent<
        ApiType,
        [who: AccountId32],
        { who: AccountId32 }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmpQueue: {
      /** Bad XCM format used. */
      BadFormat: AugmentedEvent<
        ApiType,
        [messageHash: Option<U8aFixed>],
        { messageHash: Option<U8aFixed> }
      >;
      /** Bad XCM version used. */
      BadVersion: AugmentedEvent<
        ApiType,
        [messageHash: Option<U8aFixed>],
        { messageHash: Option<U8aFixed> }
      >;
      /** Some XCM failed. */
      Fail: AugmentedEvent<
        ApiType,
        [
          messageHash: Option<U8aFixed>,
          error: XcmV3TraitsError,
          weight: SpWeightsWeightV2Weight
        ],
        {
          messageHash: Option<U8aFixed>;
          error: XcmV3TraitsError;
          weight: SpWeightsWeightV2Weight;
        }
      >;
      /** An XCM exceeded the individual message weight budget. */
      OverweightEnqueued: AugmentedEvent<
        ApiType,
        [
          sender: u32,
          sentAt: u32,
          index: u64,
          required: SpWeightsWeightV2Weight
        ],
        {
          sender: u32;
          sentAt: u32;
          index: u64;
          required: SpWeightsWeightV2Weight;
        }
      >;
      /** An XCM from the overweight queue was executed with the given actual weight used. */
      OverweightServiced: AugmentedEvent<
        ApiType,
        [index: u64, used: SpWeightsWeightV2Weight],
        { index: u64; used: SpWeightsWeightV2Weight }
      >;
      /** Some XCM was executed ok. */
      Success: AugmentedEvent<
        ApiType,
        [messageHash: Option<U8aFixed>, weight: SpWeightsWeightV2Weight],
        { messageHash: Option<U8aFixed>; weight: SpWeightsWeightV2Weight }
      >;
      /** An HRMP message was sent to a sibling parachain. */
      XcmpMessageSent: AugmentedEvent<
        ApiType,
        [messageHash: Option<U8aFixed>],
        { messageHash: Option<U8aFixed> }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
    xTokens: {
      /** Transferred `MultiAsset` with fee. */
      TransferredMultiAssets: AugmentedEvent<
        ApiType,
        [
          sender: AccountId32,
          assets: XcmV3MultiassetMultiAssets,
          fee: XcmV3MultiAsset,
          dest: XcmV3MultiLocation
        ],
        {
          sender: AccountId32;
          assets: XcmV3MultiassetMultiAssets;
          fee: XcmV3MultiAsset;
          dest: XcmV3MultiLocation;
        }
      >;
      /** Generic event */
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
