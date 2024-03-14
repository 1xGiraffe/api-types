// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Option, U256, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { CumulusPrimitivesParachainInherentParachainInherentData, EthereumTransactionTransactionV2, FrameSupportPreimagesBounded, HydradxRuntimeOpaqueSessionKeys, HydradxRuntimeOriginCaller, HydradxRuntimeSystemProxyType, HydradxRuntimeXcmAssetLocation, HydradxTraitsRouterAssetPair, HydradxTraitsRouterTrade, OrmlVestingVestingSchedule, PalletAssetRegistryAssetType, PalletClaimsEcdsaSignature, PalletDcaSchedule, PalletDemocracyConviction, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletElectionsPhragmenRenouncing, PalletIdentityBitFlags, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletLbpWeightCurveType, PalletLiquidityMiningLoyaltyCurve, PalletMultisigTimepoint, PalletOmnipoolTradability, PalletReferralsFeeDistribution, PalletReferralsLevel, PalletStableswapAssetAmount, PalletStableswapTradability, PalletUniquesDestroyWitness, SpWeightsWeightV2Weight, StagingXcmV3MultiLocation, StagingXcmV3WeightLimit, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAssets, StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * See [`Pallet::ban_asset`].
       **/
      banAsset: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::register`].
       **/
      register: AugmentedSubmittable<(assetId: Option<u32> | null | Uint8Array | u32 | AnyNumber, name: Option<Bytes> | null | Uint8Array | Bytes | string, assetType: PalletAssetRegistryAssetType | 'Token' | 'XYK' | 'StableSwap' | 'Bond' | 'External' | number | Uint8Array, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, decimals: Option<u8> | null | Uint8Array | u8 | AnyNumber, location: Option<HydradxRuntimeXcmAssetLocation> | null | Uint8Array | HydradxRuntimeXcmAssetLocation | { parents?: any; interior?: any } | string, xcmRateLimit: Option<u128> | null | Uint8Array | u128 | AnyNumber, isSufficient: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u32>, Option<Bytes>, PalletAssetRegistryAssetType, Option<u128>, Option<Bytes>, Option<u8>, Option<HydradxRuntimeXcmAssetLocation>, Option<u128>, bool]>;
      /**
       * See [`Pallet::register_external`].
       **/
      registerExternal: AugmentedSubmittable<(location: HydradxRuntimeXcmAssetLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [HydradxRuntimeXcmAssetLocation]>;
      /**
       * See [`Pallet::unban_asset`].
       **/
      unbanAsset: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update`].
       **/
      update: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, name: Option<Bytes> | null | Uint8Array | Bytes | string, assetType: Option<PalletAssetRegistryAssetType> | null | Uint8Array | PalletAssetRegistryAssetType | 'Token' | 'XYK' | 'StableSwap' | 'Bond' | 'External' | number, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, xcmRateLimit: Option<u128> | null | Uint8Array | u128 | AnyNumber, isSufficient: Option<bool> | null | Uint8Array | bool | boolean, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, decimals: Option<u8> | null | Uint8Array | u8 | AnyNumber, location: Option<HydradxRuntimeXcmAssetLocation> | null | Uint8Array | HydradxRuntimeXcmAssetLocation | { parents?: any; interior?: any } | string) => SubmittableExtrinsic<ApiType>, [u32, Option<Bytes>, Option<PalletAssetRegistryAssetType>, Option<u128>, Option<u128>, Option<bool>, Option<Bytes>, Option<u8>, Option<HydradxRuntimeXcmAssetLocation>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * See [`Pallet::force_set_balance`].
       **/
      forceSetBalance: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>]>;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(source: AccountId32 | string | Uint8Array, dest: AccountId32 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, Compact<u128>]>;
      /**
       * See [`Pallet::force_unreserve`].
       **/
      forceUnreserve: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
      /**
       * See [`Pallet::set_balance_deprecated`].
       **/
      setBalanceDeprecated: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, oldReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, bool]>;
      /**
       * See [`Pallet::transfer_allow_death`].
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>]>;
      /**
       * See [`Pallet::upgrade_accounts`].
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bonds: {
      /**
       * See [`Pallet::issue`].
       **/
      issue: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maturity: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u64]>;
      /**
       * See [`Pallet::redeem`].
       **/
      redeem: AugmentedSubmittable<(bondId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    circuitBreaker: {
      /**
       * See [`Pallet::set_add_liquidity_limit`].
       **/
      setAddLiquidityLimit: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, liquidityLimit: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>]>;
      /**
       * See [`Pallet::set_remove_liquidity_limit`].
       **/
      setRemoveLiquidityLimit: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, liquidityLimit: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>]>;
      /**
       * See [`Pallet::set_trade_volume_limit`].
       **/
      setTradeVolumeLimit: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, tradeVolumeLimit: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, ITuple<[u32, u32]>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    claims: {
      /**
       * See [`Pallet::claim`].
       **/
      claim: AugmentedSubmittable<(ethereumSignature: PalletClaimsEcdsaSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletClaimsEcdsaSignature]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    collatorSelection: {
      /**
       * See [`Pallet::add_invulnerable`].
       **/
      addInvulnerable: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::leave_intent`].
       **/
      leaveIntent: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::register_as_candidate`].
       **/
      registerAsCandidate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_invulnerable`].
       **/
      removeInvulnerable: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::set_candidacy_bond`].
       **/
      setCandidacyBond: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_desired_candidates`].
       **/
      setDesiredCandidates: AugmentedSubmittable<(max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_invulnerables`].
       **/
      setInvulnerables: AugmentedSubmittable<(updated: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    council: {
      /**
       * See [`Pallet::close`].
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * See [`Pallet::disapprove_proposal`].
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * See [`Pallet::set_members`].
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    cumulusXcm: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    currencies: {
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_native_currency`].
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>]>;
      /**
       * See [`Pallet::update_balance`].
       **/
      updateBalance: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: i128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, i128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dca: {
      /**
       * See [`Pallet::schedule`].
       **/
      schedule: AugmentedSubmittable<(schedule: PalletDcaSchedule | { owner?: any; period?: any; totalAmount?: any; maxRetries?: any; stabilityThreshold?: any; slippage?: any; order?: any } | string | Uint8Array, startExecutionBlock: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [PalletDcaSchedule, Option<u32>]>;
      /**
       * See [`Pallet::terminate`].
       **/
      terminate: AugmentedSubmittable<(scheduleId: u32 | AnyNumber | Uint8Array, nextExecutionBlock: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    democracy: {
      /**
       * See [`Pallet::blacklist`].
       **/
      blacklist: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, maybeRefIndex: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [H256, Option<u32>]>;
      /**
       * See [`Pallet::cancel_proposal`].
       **/
      cancelProposal: AugmentedSubmittable<(propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::cancel_referendum`].
       **/
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::clear_public_proposals`].
       **/
      clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::delegate`].
       **/
      delegate: AugmentedSubmittable<(to: AccountId32 | string | Uint8Array, conviction: PalletDemocracyConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PalletDemocracyConviction, u128]>;
      /**
       * See [`Pallet::emergency_cancel`].
       **/
      emergencyCancel: AugmentedSubmittable<(refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::external_propose`].
       **/
      externalPropose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * See [`Pallet::external_propose_default`].
       **/
      externalProposeDefault: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * See [`Pallet::external_propose_majority`].
       **/
      externalProposeMajority: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * See [`Pallet::fast_track`].
       **/
      fastTrack: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, votingPeriod: u32 | AnyNumber | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, u32]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded, Compact<u128>]>;
      /**
       * See [`Pallet::remove_other_vote`].
       **/
      removeOtherVote: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * See [`Pallet::remove_vote`].
       **/
      removeVote: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::second`].
       **/
      second: AugmentedSubmittable<(proposal: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::set_metadata`].
       **/
      setMetadata: AugmentedSubmittable<(owner: PalletDemocracyMetadataOwner | { External: any } | { Proposal: any } | { Referendum: any } | string | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [PalletDemocracyMetadataOwner, Option<H256>]>;
      /**
       * See [`Pallet::undelegate`].
       **/
      undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::unlock`].
       **/
      unlock: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::veto_external`].
       **/
      vetoExternal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletDemocracyVoteAccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletDemocracyVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dmpQueue: {
      /**
       * See [`Pallet::service_overweight`].
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    duster: {
      /**
       * See [`Pallet::add_nondustable_account`].
       **/
      addNondustableAccount: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::dust_account`].
       **/
      dustAccount: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * See [`Pallet::remove_nondustable_account`].
       **/
      removeNondustableAccount: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dynamicFees: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    elections: {
      /**
       * See [`Pallet::clean_defunct_voters`].
       **/
      cleanDefunctVoters: AugmentedSubmittable<(numVoters: u32 | AnyNumber | Uint8Array, numDefunct: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::remove_member`].
       **/
      removeMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, slashBond: bool | boolean | Uint8Array, rerunElection: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, bool, bool]>;
      /**
       * See [`Pallet::remove_voter`].
       **/
      removeVoter: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::renounce_candidacy`].
       **/
      renounceCandidacy: AugmentedSubmittable<(renouncing: PalletElectionsPhragmenRenouncing | { Member: any } | { RunnerUp: any } | { Candidate: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionsPhragmenRenouncing]>;
      /**
       * See [`Pallet::submit_candidacy`].
       **/
      submitCandidacy: AugmentedSubmittable<(candidateCount: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(votes: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    emaOracle: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ethereum: {
      /**
       * See [`Pallet::transact`].
       **/
      transact: AugmentedSubmittable<(transaction: EthereumTransactionTransactionV2 | { Legacy: any } | { EIP2930: any } | { EIP1559: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [EthereumTransactionTransactionV2]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    evm: {
      /**
       * See [`Pallet::call`].
       **/
      call: AugmentedSubmittable<(source: H160 | string | Uint8Array, target: H160 | string | Uint8Array, input: Bytes | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber, nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber, accessList: Vec<ITuple<[H160, Vec<H256>]>> | ([H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]])[]) => SubmittableExtrinsic<ApiType>, [H160, H160, Bytes, U256, u64, U256, Option<U256>, Option<U256>, Vec<ITuple<[H160, Vec<H256>]>>]>;
      /**
       * See [`Pallet::create`].
       **/
      create: AugmentedSubmittable<(source: H160 | string | Uint8Array, init: Bytes | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber, nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber, accessList: Vec<ITuple<[H160, Vec<H256>]>> | ([H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]])[]) => SubmittableExtrinsic<ApiType>, [H160, Bytes, U256, u64, U256, Option<U256>, Option<U256>, Vec<ITuple<[H160, Vec<H256>]>>]>;
      /**
       * See [`Pallet::create2`].
       **/
      create2: AugmentedSubmittable<(source: H160 | string | Uint8Array, init: Bytes | string | Uint8Array, salt: H256 | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber, nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber, accessList: Vec<ITuple<[H160, Vec<H256>]>> | ([H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]])[]) => SubmittableExtrinsic<ApiType>, [H160, Bytes, H256, U256, u64, U256, Option<U256>, Option<U256>, Vec<ITuple<[H160, Vec<H256>]>>]>;
      /**
       * See [`Pallet::withdraw`].
       **/
      withdraw: AugmentedSubmittable<(address: H160 | string | Uint8Array, value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    evmAccounts: {
      /**
       * See [`Pallet::add_contract_deployer`].
       **/
      addContractDeployer: AugmentedSubmittable<(address: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160]>;
      /**
       * See [`Pallet::bind_evm_address`].
       **/
      bindEvmAddress: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_contract_deployer`].
       **/
      removeContractDeployer: AugmentedSubmittable<(address: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160]>;
      /**
       * See [`Pallet::renounce_contract_deployer`].
       **/
      renounceContractDeployer: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    genesisHistory: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      /**
       * See [`Pallet::add_registrar`].
       **/
      addRegistrar: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::add_sub`].
       **/
      addSub: AugmentedSubmittable<(sub: AccountId32 | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Data]>;
      /**
       * See [`Pallet::cancel_request`].
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::clear_identity`].
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::kill_identity`].
       **/
      killIdentity: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::provide_judgement`].
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: AccountId32 | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, AccountId32, PalletIdentityJudgement, H256]>;
      /**
       * See [`Pallet::quit_sub`].
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_sub`].
       **/
      removeSub: AugmentedSubmittable<(sub: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::rename_sub`].
       **/
      renameSub: AugmentedSubmittable<(sub: AccountId32 | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Data]>;
      /**
       * See [`Pallet::request_judgement`].
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_account_id`].
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, AccountId32]>;
      /**
       * See [`Pallet::set_fee`].
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_fields`].
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletIdentityBitFlags]>;
      /**
       * See [`Pallet::set_identity`].
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
      /**
       * See [`Pallet::set_subs`].
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    lbp: {
      /**
       * See [`Pallet::add_liquidity`].
       **/
      addLiquidity: AugmentedSubmittable<(amountA: ITuple<[u32, u128]> | [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array], amountB: ITuple<[u32, u128]> | [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [ITuple<[u32, u128]>, ITuple<[u32, u128]>]>;
      /**
       * See [`Pallet::buy`].
       **/
      buy: AugmentedSubmittable<(assetOut: u32 | AnyNumber | Uint8Array, assetIn: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxLimit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * See [`Pallet::create_pool`].
       **/
      createPool: AugmentedSubmittable<(poolOwner: AccountId32 | string | Uint8Array, assetA: u32 | AnyNumber | Uint8Array, assetAAmount: u128 | AnyNumber | Uint8Array, assetB: u32 | AnyNumber | Uint8Array, assetBAmount: u128 | AnyNumber | Uint8Array, initialWeight: u32 | AnyNumber | Uint8Array, finalWeight: u32 | AnyNumber | Uint8Array, weightCurve: PalletLbpWeightCurveType | 'Linear' | number | Uint8Array, fee: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], feeCollector: AccountId32 | string | Uint8Array, repayTarget: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, u128, u32, u128, u32, u32, PalletLbpWeightCurveType, ITuple<[u32, u32]>, AccountId32, u128]>;
      /**
       * See [`Pallet::remove_liquidity`].
       **/
      removeLiquidity: AugmentedSubmittable<(poolId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::sell`].
       **/
      sell: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxLimit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * See [`Pallet::update_pool_data`].
       **/
      updatePoolData: AugmentedSubmittable<(poolId: AccountId32 | string | Uint8Array, poolOwner: Option<AccountId32> | null | Uint8Array | AccountId32 | string, start: Option<u32> | null | Uint8Array | u32 | AnyNumber, end: Option<u32> | null | Uint8Array | u32 | AnyNumber, initialWeight: Option<u32> | null | Uint8Array | u32 | AnyNumber, finalWeight: Option<u32> | null | Uint8Array | u32 | AnyNumber, fee: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], feeCollector: Option<AccountId32> | null | Uint8Array | AccountId32 | string, repayTarget: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<AccountId32>, Option<u32>, Option<u32>, Option<u32>, Option<u32>, Option<ITuple<[u32, u32]>>, Option<AccountId32>, Option<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multisig: {
      /**
       * See [`Pallet::approve_as_multi`].
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::as_multi`].
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::as_multi_threshold_1`].
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
      /**
       * See [`Pallet::cancel_as_multi`].
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multiTransactionPayment: {
      /**
       * See [`Pallet::add_currency`].
       **/
      addCurrency: AugmentedSubmittable<(currency: u32 | AnyNumber | Uint8Array, price: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * See [`Pallet::remove_currency`].
       **/
      removeCurrency: AugmentedSubmittable<(currency: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_currency`].
       **/
      setCurrency: AugmentedSubmittable<(currency: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    omnipool: {
      /**
       * See [`Pallet::add_liquidity`].
       **/
      addLiquidity: AugmentedSubmittable<(asset: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * See [`Pallet::add_token`].
       **/
      addToken: AugmentedSubmittable<(asset: u32 | AnyNumber | Uint8Array, initialPrice: u128 | AnyNumber | Uint8Array, weightCap: Permill | AnyNumber | Uint8Array, positionOwner: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, Permill, AccountId32]>;
      /**
       * See [`Pallet::buy`].
       **/
      buy: AugmentedSubmittable<(assetOut: u32 | AnyNumber | Uint8Array, assetIn: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxSellAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * See [`Pallet::refund_refused_asset`].
       **/
      refundRefusedAsset: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, recipient: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, AccountId32]>;
      /**
       * See [`Pallet::remove_liquidity`].
       **/
      removeLiquidity: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * See [`Pallet::remove_token`].
       **/
      removeToken: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, beneficiary: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, AccountId32]>;
      /**
       * See [`Pallet::sacrifice_position`].
       **/
      sacrificePosition: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::sell`].
       **/
      sell: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, minBuyAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * See [`Pallet::set_asset_tradable_state`].
       **/
      setAssetTradableState: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, state: PalletOmnipoolTradability | { bits?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletOmnipoolTradability]>;
      /**
       * See [`Pallet::set_asset_weight_cap`].
       **/
      setAssetWeightCap: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, cap: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Permill]>;
      /**
       * See [`Pallet::withdraw_protocol_liquidity`].
       **/
      withdrawProtocolLiquidity: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, price: ITuple<[u128, u128]> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array], dest: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, ITuple<[u128, u128]>, AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    omnipoolLiquidityMining: {
      /**
       * See [`Pallet::claim_rewards`].
       **/
      claimRewards: AugmentedSubmittable<(depositId: u128 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * See [`Pallet::create_global_farm`].
       **/
      createGlobalFarm: AugmentedSubmittable<(totalRewards: u128 | AnyNumber | Uint8Array, plannedYieldingPeriods: u32 | AnyNumber | Uint8Array, blocksPerPeriod: u32 | AnyNumber | Uint8Array, rewardCurrency: u32 | AnyNumber | Uint8Array, owner: AccountId32 | string | Uint8Array, yieldPerPeriod: Perquintill | AnyNumber | Uint8Array, minDeposit: u128 | AnyNumber | Uint8Array, lrnaPriceAdjustment: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, u32, u32, AccountId32, Perquintill, u128, u128]>;
      /**
       * See [`Pallet::create_yield_farm`].
       **/
      createYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, multiplier: u128 | AnyNumber | Uint8Array, loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve> | null | Uint8Array | PalletLiquidityMiningLoyaltyCurve | { initialRewardPercentage?: any; scaleCoef?: any } | string) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, Option<PalletLiquidityMiningLoyaltyCurve>]>;
      /**
       * See [`Pallet::deposit_shares`].
       **/
      depositShares: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, positionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * See [`Pallet::redeposit_shares`].
       **/
      redepositShares: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, depositId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * See [`Pallet::resume_yield_farm`].
       **/
      resumeYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, multiplier: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u128]>;
      /**
       * See [`Pallet::stop_yield_farm`].
       **/
      stopYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::terminate_global_farm`].
       **/
      terminateGlobalFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::terminate_yield_farm`].
       **/
      terminateYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
      /**
       * See [`Pallet::update_yield_farm`].
       **/
      updateYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, multiplier: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * See [`Pallet::withdraw_shares`].
       **/
      withdrawShares: AugmentedSubmittable<(depositId: u128 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    omnipoolWarehouseLM: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ormlXcm: {
      /**
       * See [`Pallet::send_as_sovereign`].
       **/
      sendAsSovereign: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    otc: {
      /**
       * See [`Pallet::cancel_order`].
       **/
      cancelOrder: AugmentedSubmittable<(orderId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::fill_order`].
       **/
      fillOrder: AugmentedSubmittable<(orderId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::partial_fill_order`].
       **/
      partialFillOrder: AugmentedSubmittable<(orderId: u32 | AnyNumber | Uint8Array, amountIn: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * See [`Pallet::place_order`].
       **/
      placeOrder: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amountIn: u128 | AnyNumber | Uint8Array, amountOut: u128 | AnyNumber | Uint8Array, partiallyFillable: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainInfo: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainSystem: {
      /**
       * See [`Pallet::authorize_upgrade`].
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array, checkVersion: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
      /**
       * See [`Pallet::enact_authorized_upgrade`].
       **/
      enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_validation_data`].
       **/
      setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
      /**
       * See [`Pallet::sudo_send_upward_message`].
       **/
      sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    polkadotXcm: {
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::force_default_xcm_version`].
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * See [`Pallet::force_subscribe_version_notify`].
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
      /**
       * See [`Pallet::force_suspension`].
       **/
      forceSuspension: AugmentedSubmittable<(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::force_unsubscribe_version_notify`].
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
      /**
       * See [`Pallet::force_xcm_version`].
       **/
      forceXcmVersion: AugmentedSubmittable<(location: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, version: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV3MultiLocation, u32]>;
      /**
       * See [`Pallet::limited_reserve_transfer_assets`].
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::limited_teleport_assets`].
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::reserve_transfer_assets`].
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
      /**
       * See [`Pallet::send`].
       **/
      send: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm]>;
      /**
       * See [`Pallet::teleport_assets`].
       **/
      teleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    preimage: {
      /**
       * See [`Pallet::note_preimage`].
       **/
      notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::request_preimage`].
       **/
      requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::unnote_preimage`].
       **/
      unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::unrequest_preimage`].
       **/
      unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      /**
       * See [`Pallet::add_proxy`].
       **/
      addProxy: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, proxyType: HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, HydradxRuntimeSystemProxyType, u32]>;
      /**
       * See [`Pallet::announce`].
       **/
      announce: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, H256]>;
      /**
       * See [`Pallet::create_pure`].
       **/
      createPure: AugmentedSubmittable<(proxyType: HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [HydradxRuntimeSystemProxyType, u32, u16]>;
      /**
       * See [`Pallet::kill_pure`].
       **/
      killPure: AugmentedSubmittable<(spawner: AccountId32 | string | Uint8Array, proxyType: HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, HydradxRuntimeSystemProxyType, u16, Compact<u32>, Compact<u32>]>;
      /**
       * See [`Pallet::proxy`].
       **/
      proxy: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, forceProxyType: Option<HydradxRuntimeSystemProxyType> | null | Uint8Array | HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<HydradxRuntimeSystemProxyType>, Call]>;
      /**
       * See [`Pallet::proxy_announced`].
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, real: AccountId32 | string | Uint8Array, forceProxyType: Option<HydradxRuntimeSystemProxyType> | null | Uint8Array | HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, Option<HydradxRuntimeSystemProxyType>, Call]>;
      /**
       * See [`Pallet::reject_announcement`].
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, H256]>;
      /**
       * See [`Pallet::remove_announcement`].
       **/
      removeAnnouncement: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, H256]>;
      /**
       * See [`Pallet::remove_proxies`].
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_proxy`].
       **/
      removeProxy: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, proxyType: HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, HydradxRuntimeSystemProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    referrals: {
      /**
       * See [`Pallet::claim_rewards`].
       **/
      claimRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::convert`].
       **/
      convert: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::link_code`].
       **/
      linkCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::register_code`].
       **/
      registerCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_reward_percentage`].
       **/
      setRewardPercentage: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, level: PalletReferralsLevel | 'None' | 'Tier0' | 'Tier1' | 'Tier2' | 'Tier3' | 'Tier4' | number | Uint8Array, rewards: PalletReferralsFeeDistribution | { referrer?: any; trader?: any; external?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletReferralsLevel, PalletReferralsFeeDistribution]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    relayChainInfo: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    router: {
      /**
       * See [`Pallet::buy`].
       **/
      buy: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amountOut: u128 | AnyNumber | Uint8Array, maxAmountIn: u128 | AnyNumber | Uint8Array, route: Vec<HydradxTraitsRouterTrade> | (HydradxTraitsRouterTrade | { pool?: any; assetIn?: any; assetOut?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, Vec<HydradxTraitsRouterTrade>]>;
      /**
       * See [`Pallet::sell`].
       **/
      sell: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amountIn: u128 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array, route: Vec<HydradxTraitsRouterTrade> | (HydradxTraitsRouterTrade | { pool?: any; assetIn?: any; assetOut?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, Vec<HydradxTraitsRouterTrade>]>;
      /**
       * See [`Pallet::set_route`].
       **/
      setRoute: AugmentedSubmittable<(assetPair: HydradxTraitsRouterAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array, newRoute: Vec<HydradxTraitsRouterTrade> | (HydradxTraitsRouterTrade | { pool?: any; assetIn?: any; assetOut?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [HydradxTraitsRouterAssetPair, Vec<HydradxTraitsRouterTrade>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      /**
       * See [`Pallet::cancel`].
       **/
      cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::cancel_named`].
       **/
      cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * See [`Pallet::schedule`].
       **/
      schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_after`].
       **/
      scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_named`].
       **/
      scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_named_after`].
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * See [`Pallet::purge_keys`].
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_keys`].
       **/
      setKeys: AugmentedSubmittable<(keys: HydradxRuntimeOpaqueSessionKeys | { aura?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [HydradxRuntimeOpaqueSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    stableswap: {
      /**
       * See [`Pallet::add_liquidity`].
       **/
      addLiquidity: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assets: Vec<PalletStableswapAssetAmount> | (PalletStableswapAssetAmount | { assetId?: any; amount?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<PalletStableswapAssetAmount>]>;
      /**
       * See [`Pallet::add_liquidity_shares`].
       **/
      addLiquidityShares: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, shares: u128 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, maxAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u32, u128]>;
      /**
       * See [`Pallet::buy`].
       **/
      buy: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, assetIn: u32 | AnyNumber | Uint8Array, amountOut: u128 | AnyNumber | Uint8Array, maxSellAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u128, u128]>;
      /**
       * See [`Pallet::create_pool`].
       **/
      createPool: AugmentedSubmittable<(shareAsset: u32 | AnyNumber | Uint8Array, assets: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], amplification: u16 | AnyNumber | Uint8Array, fee: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Vec<u32>, u16, Permill]>;
      /**
       * See [`Pallet::remove_liquidity_one_asset`].
       **/
      removeLiquidityOneAsset: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, shareAmount: u128 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * See [`Pallet::sell`].
       **/
      sell: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amountIn: u128 | AnyNumber | Uint8Array, minBuyAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u128, u128]>;
      /**
       * See [`Pallet::set_asset_tradable_state`].
       **/
      setAssetTradableState: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, state: PalletStableswapTradability | { bits?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, PalletStableswapTradability]>;
      /**
       * See [`Pallet::update_amplification`].
       **/
      updateAmplification: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, finalAmplification: u16 | AnyNumber | Uint8Array, startBlock: u32 | AnyNumber | Uint8Array, endBlock: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u16, u32, u32]>;
      /**
       * See [`Pallet::update_pool_fee`].
       **/
      updatePoolFee: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, fee: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Permill]>;
      /**
       * See [`Pallet::withdraw_asset_amount`].
       **/
      withdrawAssetAmount: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxShareAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    staking: {
      /**
       * See [`Pallet::claim`].
       **/
      claim: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::increase_stake`].
       **/
      increaseStake: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * See [`Pallet::initialize_staking`].
       **/
      initializeStaking: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::stake`].
       **/
      stake: AugmentedSubmittable<(amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::unstake`].
       **/
      unstake: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * See [`Pallet::kill_prefix`].
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * See [`Pallet::kill_storage`].
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * See [`Pallet::remark`].
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::remark_with_event`].
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code`].
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code_without_checks`].
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_heap_pages`].
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * See [`Pallet::set_storage`].
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    technicalCommittee: {
      /**
       * See [`Pallet::close`].
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * See [`Pallet::disapprove_proposal`].
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * See [`Pallet::set_members`].
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * See [`Pallet::set`].
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tips: {
      /**
       * See [`Pallet::close_tip`].
       **/
      closeTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::report_awesome`].
       **/
      reportAwesome: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, AccountId32]>;
      /**
       * See [`Pallet::retract_tip`].
       **/
      retractTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::slash_tip`].
       **/
      slashTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::tip`].
       **/
      tip: AugmentedSubmittable<(hash: H256 | string | Uint8Array, tipValue: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u128>]>;
      /**
       * See [`Pallet::tip_new`].
       **/
      tipNew: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: AccountId32 | string | Uint8Array, tipValue: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, AccountId32, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokens: {
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(source: AccountId32 | string | Uint8Array, dest: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, u32, Compact<u128>]>;
      /**
       * See [`Pallet::set_balance`].
       **/
      setBalance: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, bool]>;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    transactionPause: {
      /**
       * See [`Pallet::pause_transaction`].
       **/
      pauseTransaction: AugmentedSubmittable<(palletName: Bytes | string | Uint8Array, functionName: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      /**
       * See [`Pallet::unpause_transaction`].
       **/
      unpauseTransaction: AugmentedSubmittable<(palletName: Bytes | string | Uint8Array, functionName: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * See [`Pallet::approve_proposal`].
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::propose_spend`].
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, AccountId32]>;
      /**
       * See [`Pallet::reject_proposal`].
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::remove_approval`].
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::spend`].
       **/
      spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    uniques: {
      /**
       * See [`Pallet::approve_transfer`].
       **/
      approveTransfer: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, delegate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, AccountId32]>;
      /**
       * See [`Pallet::burn`].
       **/
      burn: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, checkOwner: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [u128, u128, Option<AccountId32>]>;
      /**
       * See [`Pallet::buy_item`].
       **/
      buyItem: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, bidPrice: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, u128]>;
      /**
       * See [`Pallet::cancel_approval`].
       **/
      cancelApproval: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, maybeCheckDelegate: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [u128, u128, Option<AccountId32>]>;
      /**
       * See [`Pallet::clear_attribute`].
       **/
      clearAttribute: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, maybeItem: Option<u128> | null | Uint8Array | u128 | AnyNumber, key: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, Option<u128>, Bytes]>;
      /**
       * See [`Pallet::clear_collection_metadata`].
       **/
      clearCollectionMetadata: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::clear_metadata`].
       **/
      clearMetadata: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * See [`Pallet::create`].
       **/
      create: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, admin: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32]>;
      /**
       * See [`Pallet::destroy`].
       **/
      destroy: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, witness: PalletUniquesDestroyWitness | { items?: any; itemMetadatas?: any; attributes?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, PalletUniquesDestroyWitness]>;
      /**
       * See [`Pallet::force_create`].
       **/
      forceCreate: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, owner: AccountId32 | string | Uint8Array, freeHolding: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32, bool]>;
      /**
       * See [`Pallet::force_item_status`].
       **/
      forceItemStatus: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, owner: AccountId32 | string | Uint8Array, issuer: AccountId32 | string | Uint8Array, admin: AccountId32 | string | Uint8Array, freezer: AccountId32 | string | Uint8Array, freeHolding: bool | boolean | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32, AccountId32, AccountId32, AccountId32, bool, bool]>;
      /**
       * See [`Pallet::freeze`].
       **/
      freeze: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * See [`Pallet::freeze_collection`].
       **/
      freezeCollection: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::mint`].
       **/
      mint: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, owner: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, AccountId32]>;
      /**
       * See [`Pallet::redeposit`].
       **/
      redeposit: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, items: Vec<u128> | (u128 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u128, Vec<u128>]>;
      /**
       * See [`Pallet::set_accept_ownership`].
       **/
      setAcceptOwnership: AugmentedSubmittable<(maybeCollection: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u128>]>;
      /**
       * See [`Pallet::set_attribute`].
       **/
      setAttribute: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, maybeItem: Option<u128> | null | Uint8Array | u128 | AnyNumber, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, Option<u128>, Bytes, Bytes]>;
      /**
       * See [`Pallet::set_collection_max_supply`].
       **/
      setCollectionMaxSupply: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, maxSupply: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * See [`Pallet::set_collection_metadata`].
       **/
      setCollectionMetadata: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, Bytes, bool]>;
      /**
       * See [`Pallet::set_metadata`].
       **/
      setMetadata: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, Bytes, bool]>;
      /**
       * See [`Pallet::set_price`].
       **/
      setPrice: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, price: Option<u128> | null | Uint8Array | u128 | AnyNumber, whitelistedBuyer: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [u128, u128, Option<u128>, Option<AccountId32>]>;
      /**
       * See [`Pallet::set_team`].
       **/
      setTeam: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, issuer: AccountId32 | string | Uint8Array, admin: AccountId32 | string | Uint8Array, freezer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32, AccountId32, AccountId32]>;
      /**
       * See [`Pallet::thaw`].
       **/
      thaw: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * See [`Pallet::thaw_collection`].
       **/
      thawCollection: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, dest: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, AccountId32]>;
      /**
       * See [`Pallet::transfer_ownership`].
       **/
      transferOwnership: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, owner: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * See [`Pallet::as_derivative`].
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * See [`Pallet::batch`].
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::batch_all`].
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::dispatch_as`].
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: HydradxRuntimeOriginCaller | { system: any } | { Void: any } | { Council: any } | { TechnicalCommittee: any } | { Ethereum: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [HydradxRuntimeOriginCaller, Call]>;
      /**
       * See [`Pallet::force_batch`].
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::with_weight`].
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      /**
       * See [`Pallet::claim`].
       **/
      claim: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::claim_for`].
       **/
      claimFor: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::update_vesting_schedules`].
       **/
      updateVestingSchedules: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, vestingSchedules: Vec<OrmlVestingVestingSchedule> | (OrmlVestingVestingSchedule | { start?: any; period?: any; periodCount?: any; perPeriod?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [AccountId32, Vec<OrmlVestingVestingSchedule>]>;
      /**
       * See [`Pallet::vested_transfer`].
       **/
      vestedTransfer: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, schedule: OrmlVestingVestingSchedule | { start?: any; period?: any; periodCount?: any; perPeriod?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, OrmlVestingVestingSchedule]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xcmRateLimiter: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xTokens: {
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiasset`].
       **/
      transferMultiasset: AugmentedSubmittable<(asset: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiassets`].
       **/
      transferMultiassets: AugmentedSubmittable<(assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAssets, u32, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiasset_with_fee`].
       **/
      transferMultiassetWithFee: AugmentedSubmittable<(asset: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, fee: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multicurrencies`].
       **/
      transferMulticurrencies: AugmentedSubmittable<(currencies: Vec<ITuple<[u32, u128]>> | ([u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array])[], feeItem: u32 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, u128]>>, u32, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_with_fee`].
       **/
      transferWithFee: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u128, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xyk: {
      /**
       * See [`Pallet::add_liquidity`].
       **/
      addLiquidity: AugmentedSubmittable<(assetA: u32 | AnyNumber | Uint8Array, assetB: u32 | AnyNumber | Uint8Array, amountA: u128 | AnyNumber | Uint8Array, amountBMaxLimit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * See [`Pallet::buy`].
       **/
      buy: AugmentedSubmittable<(assetOut: u32 | AnyNumber | Uint8Array, assetIn: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxLimit: u128 | AnyNumber | Uint8Array, discount: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, bool]>;
      /**
       * See [`Pallet::create_pool`].
       **/
      createPool: AugmentedSubmittable<(assetA: u32 | AnyNumber | Uint8Array, amountA: u128 | AnyNumber | Uint8Array, assetB: u32 | AnyNumber | Uint8Array, amountB: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u32, u128]>;
      /**
       * See [`Pallet::remove_liquidity`].
       **/
      removeLiquidity: AugmentedSubmittable<(assetA: u32 | AnyNumber | Uint8Array, assetB: u32 | AnyNumber | Uint8Array, liquidityAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * See [`Pallet::sell`].
       **/
      sell: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxLimit: u128 | AnyNumber | Uint8Array, discount: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
