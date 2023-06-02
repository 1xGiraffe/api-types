// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/types/types/registry";

import type {
  BasiliskRuntimeOpaqueSessionKeys,
  BasiliskRuntimeOriginCaller,
  BasiliskRuntimeRuntime,
  CommonRuntimeAssetLocation,
  CommonRuntimeProxyType,
  CumulusPalletDmpQueueCall,
  CumulusPalletDmpQueueConfigData,
  CumulusPalletDmpQueueError,
  CumulusPalletDmpQueueEvent,
  CumulusPalletDmpQueuePageIndexData,
  CumulusPalletParachainSystemCall,
  CumulusPalletParachainSystemError,
  CumulusPalletParachainSystemEvent,
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot,
  CumulusPalletXcmCall,
  CumulusPalletXcmError,
  CumulusPalletXcmEvent,
  CumulusPalletXcmOrigin,
  CumulusPalletXcmpQueueError,
  CumulusPalletXcmpQueueEvent,
  CumulusPalletXcmpQueueInboundChannelDetails,
  CumulusPalletXcmpQueueInboundState,
  CumulusPalletXcmpQueueOutboundChannelDetails,
  CumulusPalletXcmpQueueOutboundState,
  CumulusPalletXcmpQueueQueueConfigData,
  CumulusPrimitivesParachainInherentParachainInherentData,
  FrameSupportDispatchDispatchClass,
  FrameSupportDispatchDispatchInfo,
  FrameSupportDispatchPays,
  FrameSupportDispatchPerDispatchClassU32,
  FrameSupportDispatchPerDispatchClassWeight,
  FrameSupportDispatchPerDispatchClassWeightsPerClass,
  FrameSupportDispatchRawOrigin,
  FrameSupportPalletId,
  FrameSupportPreimagesBounded,
  FrameSupportTokensMiscBalanceStatus,
  FrameSystemAccountInfo,
  FrameSystemCall,
  FrameSystemError,
  FrameSystemEvent,
  FrameSystemEventRecord,
  FrameSystemExtensionsCheckGenesis,
  FrameSystemExtensionsCheckNonce,
  FrameSystemExtensionsCheckSpecVersion,
  FrameSystemExtensionsCheckTxVersion,
  FrameSystemExtensionsCheckWeight,
  FrameSystemLastRuntimeUpgradeInfo,
  FrameSystemLimitsBlockLength,
  FrameSystemLimitsBlockWeights,
  FrameSystemLimitsWeightsPerClass,
  FrameSystemPhase,
  HydraDxMathRatio,
  HydradxTraitsOracleLiquidity,
  HydradxTraitsOracleOraclePeriod,
  HydradxTraitsOracleVolume,
  HydradxTraitsRouterPoolType,
  OrmlTokensAccountData,
  OrmlTokensBalanceLock,
  OrmlTokensModuleCall,
  OrmlTokensModuleError,
  OrmlTokensModuleEvent,
  OrmlTokensReserveData,
  OrmlUnknownTokensModuleCall,
  OrmlUnknownTokensModuleError,
  OrmlUnknownTokensModuleEvent,
  OrmlVestingModuleCall,
  OrmlVestingModuleError,
  OrmlVestingModuleEvent,
  OrmlVestingVestingSchedule,
  OrmlXcmModuleCall,
  OrmlXcmModuleError,
  OrmlXcmModuleEvent,
  OrmlXtokensModuleCall,
  OrmlXtokensModuleError,
  OrmlXtokensModuleEvent,
  PalletAssetRegistryAssetDetails,
  PalletAssetRegistryAssetMetadata,
  PalletAssetRegistryAssetType,
  PalletAssetRegistryCall,
  PalletAssetRegistryError,
  PalletAssetRegistryEvent,
  PalletAssetRegistryMetadata,
  PalletBalancesAccountData,
  PalletBalancesBalanceLock,
  PalletBalancesCall,
  PalletBalancesError,
  PalletBalancesEvent,
  PalletBalancesReasons,
  PalletBalancesReserveData,
  PalletCollatorRewardsError,
  PalletCollatorRewardsEvent,
  PalletCollatorSelectionCall,
  PalletCollatorSelectionCandidateInfo,
  PalletCollatorSelectionError,
  PalletCollatorSelectionEvent,
  PalletCollectiveCall,
  PalletCollectiveError,
  PalletCollectiveEvent,
  PalletCollectiveRawOrigin,
  PalletCollectiveVotes,
  PalletCurrenciesModuleCall,
  PalletCurrenciesModuleError,
  PalletCurrenciesModuleEvent,
  PalletDemocracyCall,
  PalletDemocracyConviction,
  PalletDemocracyDelegations,
  PalletDemocracyError,
  PalletDemocracyEvent,
  PalletDemocracyReferendumInfo,
  PalletDemocracyReferendumStatus,
  PalletDemocracyTally,
  PalletDemocracyVoteAccountVote,
  PalletDemocracyVotePriorLock,
  PalletDemocracyVoteThreshold,
  PalletDemocracyVoteVoting,
  PalletDusterCall,
  PalletDusterError,
  PalletDusterEvent,
  PalletElectionsPhragmenCall,
  PalletElectionsPhragmenError,
  PalletElectionsPhragmenEvent,
  PalletElectionsPhragmenRenouncing,
  PalletElectionsPhragmenSeatHolder,
  PalletElectionsPhragmenVoter,
  PalletEmaOracleCall,
  PalletEmaOracleError,
  PalletEmaOracleEvent,
  PalletEmaOracleOracleEntry,
  PalletIdentityBitFlags,
  PalletIdentityCall,
  PalletIdentityError,
  PalletIdentityEvent,
  PalletIdentityIdentityField,
  PalletIdentityIdentityInfo,
  PalletIdentityJudgement,
  PalletIdentityRegistrarInfo,
  PalletIdentityRegistration,
  PalletLbpCall,
  PalletLbpError,
  PalletLbpEvent,
  PalletLbpPool,
  PalletLbpWeightCurveType,
  PalletLiquidityMiningCall,
  PalletLiquidityMiningDepositData,
  PalletLiquidityMiningError,
  PalletLiquidityMiningEvent,
  PalletLiquidityMiningFarmState,
  PalletLiquidityMiningGlobalFarmData,
  PalletLiquidityMiningInconsistentStateError,
  PalletLiquidityMiningLoyaltyCurve,
  PalletLiquidityMiningYieldFarmData,
  PalletLiquidityMiningYieldFarmEntry,
  PalletMarketplaceCall,
  PalletMarketplaceError,
  PalletMarketplaceEvent,
  PalletMarketplaceOffer,
  PalletMarketplaceRoyalty,
  PalletMultisigCall,
  PalletMultisigError,
  PalletMultisigEvent,
  PalletMultisigMultisig,
  PalletMultisigTimepoint,
  PalletNftCall,
  PalletNftCollectionInfo,
  PalletNftCollectionType,
  PalletNftError,
  PalletNftEvent,
  PalletNftItemInfo,
  PalletPreimageCall,
  PalletPreimageError,
  PalletPreimageEvent,
  PalletPreimageRequestStatus,
  PalletProxyAnnouncement,
  PalletProxyCall,
  PalletProxyError,
  PalletProxyEvent,
  PalletProxyProxyDefinition,
  PalletRelaychainInfoCall,
  PalletRelaychainInfoError,
  PalletRelaychainInfoEvent,
  PalletRouteExecutorCall,
  PalletRouteExecutorError,
  PalletRouteExecutorEvent,
  PalletRouteExecutorTrade,
  PalletSchedulerCall,
  PalletSchedulerError,
  PalletSchedulerEvent,
  PalletSchedulerScheduled,
  PalletSessionCall,
  PalletSessionError,
  PalletSessionEvent,
  PalletTimestampCall,
  PalletTipsCall,
  PalletTipsError,
  PalletTipsEvent,
  PalletTipsOpenTip,
  PalletTransactionMultiPaymentCall,
  PalletTransactionMultiPaymentError,
  PalletTransactionMultiPaymentEvent,
  PalletTransactionPauseCall,
  PalletTransactionPauseError,
  PalletTransactionPauseEvent,
  PalletTransactionPaymentChargeTransactionPayment,
  PalletTransactionPaymentEvent,
  PalletTransactionPaymentReleases,
  PalletTreasuryCall,
  PalletTreasuryError,
  PalletTreasuryEvent,
  PalletTreasuryProposal,
  PalletUniquesCall,
  PalletUniquesCollectionDetails,
  PalletUniquesCollectionMetadata,
  PalletUniquesDestroyWitness,
  PalletUniquesError,
  PalletUniquesEvent,
  PalletUniquesItemDetails,
  PalletUniquesItemMetadata,
  PalletUtilityCall,
  PalletUtilityError,
  PalletUtilityEvent,
  PalletXcmCall,
  PalletXcmError,
  PalletXcmEvent,
  PalletXcmOrigin,
  PalletXcmQueryStatus,
  PalletXcmRemoteLockedFungibleRecord,
  PalletXcmVersionMigrationStage,
  PalletXykCall,
  PalletXykError,
  PalletXykEvent,
  PalletXykLiquidityMiningCall,
  PalletXykLiquidityMiningError,
  PalletXykLiquidityMiningEvent,
  ParachainInfoCall,
  PolkadotCorePrimitivesInboundDownwardMessage,
  PolkadotCorePrimitivesInboundHrmpMessage,
  PolkadotCorePrimitivesOutboundHrmpMessage,
  PolkadotParachainPrimitivesXcmpMessageFormat,
  PolkadotPrimitivesV2AbridgedHostConfiguration,
  PolkadotPrimitivesV2AbridgedHrmpChannel,
  PolkadotPrimitivesV2PersistedValidationData,
  PolkadotPrimitivesV2UpgradeRestriction,
  PrimitivesAssetAssetPair,
  SpArithmeticArithmeticError,
  SpConsensusAuraSr25519AppSr25519Public,
  SpCoreCryptoKeyTypeId,
  SpCoreEcdsaSignature,
  SpCoreEd25519Signature,
  SpCoreSr25519Public,
  SpCoreSr25519Signature,
  SpCoreVoid,
  SpRuntimeDigest,
  SpRuntimeDigestDigestItem,
  SpRuntimeDispatchError,
  SpRuntimeModuleError,
  SpRuntimeMultiSignature,
  SpRuntimeTokenError,
  SpRuntimeTransactionalError,
  SpTrieStorageProof,
  SpVersionRuntimeVersion,
  SpWeightsRuntimeDbWeight,
  SpWeightsWeightV2Weight,
  XcmDoubleEncoded,
  XcmV2BodyId,
  XcmV2BodyPart,
  XcmV2Instruction,
  XcmV2Junction,
  XcmV2MultiAsset,
  XcmV2MultiLocation,
  XcmV2MultiassetAssetId,
  XcmV2MultiassetAssetInstance,
  XcmV2MultiassetFungibility,
  XcmV2MultiassetMultiAssetFilter,
  XcmV2MultiassetMultiAssets,
  XcmV2MultiassetWildFungibility,
  XcmV2MultiassetWildMultiAsset,
  XcmV2MultilocationJunctions,
  XcmV2NetworkId,
  XcmV2OriginKind,
  XcmV2Response,
  XcmV2TraitsError,
  XcmV2WeightLimit,
  XcmV2Xcm,
  XcmV3Instruction,
  XcmV3Junction,
  XcmV3JunctionBodyId,
  XcmV3JunctionBodyPart,
  XcmV3JunctionNetworkId,
  XcmV3Junctions,
  XcmV3MaybeErrorCode,
  XcmV3MultiAsset,
  XcmV3MultiLocation,
  XcmV3MultiassetAssetId,
  XcmV3MultiassetAssetInstance,
  XcmV3MultiassetFungibility,
  XcmV3MultiassetMultiAssetFilter,
  XcmV3MultiassetMultiAssets,
  XcmV3MultiassetWildFungibility,
  XcmV3MultiassetWildMultiAsset,
  XcmV3PalletInfo,
  XcmV3QueryResponseInfo,
  XcmV3Response,
  XcmV3TraitsError,
  XcmV3TraitsOutcome,
  XcmV3VecPalletInfo,
  XcmV3WeightLimit,
  XcmV3Xcm,
  XcmVersionedAssetId,
  XcmVersionedMultiAsset,
  XcmVersionedMultiAssets,
  XcmVersionedMultiLocation,
  XcmVersionedResponse,
  XcmVersionedXcm,
} from "@polkadot/types/lookup";

declare module "@polkadot/types/types/registry" {
  interface InterfaceTypes {
    BasiliskRuntimeOpaqueSessionKeys: BasiliskRuntimeOpaqueSessionKeys;
    BasiliskRuntimeOriginCaller: BasiliskRuntimeOriginCaller;
    BasiliskRuntimeRuntime: BasiliskRuntimeRuntime;
    CommonRuntimeAssetLocation: CommonRuntimeAssetLocation;
    CommonRuntimeProxyType: CommonRuntimeProxyType;
    CumulusPalletDmpQueueCall: CumulusPalletDmpQueueCall;
    CumulusPalletDmpQueueConfigData: CumulusPalletDmpQueueConfigData;
    CumulusPalletDmpQueueError: CumulusPalletDmpQueueError;
    CumulusPalletDmpQueueEvent: CumulusPalletDmpQueueEvent;
    CumulusPalletDmpQueuePageIndexData: CumulusPalletDmpQueuePageIndexData;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletXcmCall: CumulusPalletXcmCall;
    CumulusPalletXcmError: CumulusPalletXcmError;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueInboundChannelDetails: CumulusPalletXcmpQueueInboundChannelDetails;
    CumulusPalletXcmpQueueInboundState: CumulusPalletXcmpQueueInboundState;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    HydraDxMathRatio: HydraDxMathRatio;
    HydradxTraitsOracleLiquidity: HydradxTraitsOracleLiquidity;
    HydradxTraitsOracleOraclePeriod: HydradxTraitsOracleOraclePeriod;
    HydradxTraitsOracleVolume: HydradxTraitsOracleVolume;
    HydradxTraitsRouterPoolType: HydradxTraitsRouterPoolType;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleCall: OrmlTokensModuleCall;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlTokensReserveData: OrmlTokensReserveData;
    OrmlUnknownTokensModuleCall: OrmlUnknownTokensModuleCall;
    OrmlUnknownTokensModuleError: OrmlUnknownTokensModuleError;
    OrmlUnknownTokensModuleEvent: OrmlUnknownTokensModuleEvent;
    OrmlVestingModuleCall: OrmlVestingModuleCall;
    OrmlVestingModuleError: OrmlVestingModuleError;
    OrmlVestingModuleEvent: OrmlVestingModuleEvent;
    OrmlVestingVestingSchedule: OrmlVestingVestingSchedule;
    OrmlXcmModuleCall: OrmlXcmModuleCall;
    OrmlXcmModuleError: OrmlXcmModuleError;
    OrmlXcmModuleEvent: OrmlXcmModuleEvent;
    OrmlXtokensModuleCall: OrmlXtokensModuleCall;
    OrmlXtokensModuleError: OrmlXtokensModuleError;
    OrmlXtokensModuleEvent: OrmlXtokensModuleEvent;
    PalletAssetRegistryAssetDetails: PalletAssetRegistryAssetDetails;
    PalletAssetRegistryAssetMetadata: PalletAssetRegistryAssetMetadata;
    PalletAssetRegistryAssetType: PalletAssetRegistryAssetType;
    PalletAssetRegistryCall: PalletAssetRegistryCall;
    PalletAssetRegistryError: PalletAssetRegistryError;
    PalletAssetRegistryEvent: PalletAssetRegistryEvent;
    PalletAssetRegistryMetadata: PalletAssetRegistryMetadata;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletCollatorRewardsError: PalletCollatorRewardsError;
    PalletCollatorRewardsEvent: PalletCollatorRewardsEvent;
    PalletCollatorSelectionCall: PalletCollatorSelectionCall;
    PalletCollatorSelectionCandidateInfo: PalletCollatorSelectionCandidateInfo;
    PalletCollatorSelectionError: PalletCollatorSelectionError;
    PalletCollatorSelectionEvent: PalletCollatorSelectionEvent;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletCurrenciesModuleCall: PalletCurrenciesModuleCall;
    PalletCurrenciesModuleError: PalletCurrenciesModuleError;
    PalletCurrenciesModuleEvent: PalletCurrenciesModuleEvent;
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
    PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
    PalletDemocracyTally: PalletDemocracyTally;
    PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
    PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
    PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
    PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
    PalletDusterCall: PalletDusterCall;
    PalletDusterError: PalletDusterError;
    PalletDusterEvent: PalletDusterEvent;
    PalletElectionsPhragmenCall: PalletElectionsPhragmenCall;
    PalletElectionsPhragmenError: PalletElectionsPhragmenError;
    PalletElectionsPhragmenEvent: PalletElectionsPhragmenEvent;
    PalletElectionsPhragmenRenouncing: PalletElectionsPhragmenRenouncing;
    PalletElectionsPhragmenSeatHolder: PalletElectionsPhragmenSeatHolder;
    PalletElectionsPhragmenVoter: PalletElectionsPhragmenVoter;
    PalletEmaOracleCall: PalletEmaOracleCall;
    PalletEmaOracleError: PalletEmaOracleError;
    PalletEmaOracleEvent: PalletEmaOracleEvent;
    PalletEmaOracleOracleEntry: PalletEmaOracleOracleEntry;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletLbpCall: PalletLbpCall;
    PalletLbpError: PalletLbpError;
    PalletLbpEvent: PalletLbpEvent;
    PalletLbpPool: PalletLbpPool;
    PalletLbpWeightCurveType: PalletLbpWeightCurveType;
    PalletLiquidityMiningCall: PalletLiquidityMiningCall;
    PalletLiquidityMiningDepositData: PalletLiquidityMiningDepositData;
    PalletLiquidityMiningError: PalletLiquidityMiningError;
    PalletLiquidityMiningEvent: PalletLiquidityMiningEvent;
    PalletLiquidityMiningFarmState: PalletLiquidityMiningFarmState;
    PalletLiquidityMiningGlobalFarmData: PalletLiquidityMiningGlobalFarmData;
    PalletLiquidityMiningInconsistentStateError: PalletLiquidityMiningInconsistentStateError;
    PalletLiquidityMiningLoyaltyCurve: PalletLiquidityMiningLoyaltyCurve;
    PalletLiquidityMiningYieldFarmData: PalletLiquidityMiningYieldFarmData;
    PalletLiquidityMiningYieldFarmEntry: PalletLiquidityMiningYieldFarmEntry;
    PalletMarketplaceCall: PalletMarketplaceCall;
    PalletMarketplaceError: PalletMarketplaceError;
    PalletMarketplaceEvent: PalletMarketplaceEvent;
    PalletMarketplaceOffer: PalletMarketplaceOffer;
    PalletMarketplaceRoyalty: PalletMarketplaceRoyalty;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletNftCall: PalletNftCall;
    PalletNftCollectionInfo: PalletNftCollectionInfo;
    PalletNftCollectionType: PalletNftCollectionType;
    PalletNftError: PalletNftError;
    PalletNftEvent: PalletNftEvent;
    PalletNftItemInfo: PalletNftItemInfo;
    PalletPreimageCall: PalletPreimageCall;
    PalletPreimageError: PalletPreimageError;
    PalletPreimageEvent: PalletPreimageEvent;
    PalletPreimageRequestStatus: PalletPreimageRequestStatus;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletRelaychainInfoCall: PalletRelaychainInfoCall;
    PalletRelaychainInfoError: PalletRelaychainInfoError;
    PalletRelaychainInfoEvent: PalletRelaychainInfoEvent;
    PalletRouteExecutorCall: PalletRouteExecutorCall;
    PalletRouteExecutorError: PalletRouteExecutorError;
    PalletRouteExecutorEvent: PalletRouteExecutorEvent;
    PalletRouteExecutorTrade: PalletRouteExecutorTrade;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerScheduled: PalletSchedulerScheduled;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTipsCall: PalletTipsCall;
    PalletTipsError: PalletTipsError;
    PalletTipsEvent: PalletTipsEvent;
    PalletTipsOpenTip: PalletTipsOpenTip;
    PalletTransactionMultiPaymentCall: PalletTransactionMultiPaymentCall;
    PalletTransactionMultiPaymentError: PalletTransactionMultiPaymentError;
    PalletTransactionMultiPaymentEvent: PalletTransactionMultiPaymentEvent;
    PalletTransactionPauseCall: PalletTransactionPauseCall;
    PalletTransactionPauseError: PalletTransactionPauseError;
    PalletTransactionPauseEvent: PalletTransactionPauseEvent;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUniquesCall: PalletUniquesCall;
    PalletUniquesCollectionDetails: PalletUniquesCollectionDetails;
    PalletUniquesCollectionMetadata: PalletUniquesCollectionMetadata;
    PalletUniquesDestroyWitness: PalletUniquesDestroyWitness;
    PalletUniquesError: PalletUniquesError;
    PalletUniquesEvent: PalletUniquesEvent;
    PalletUniquesItemDetails: PalletUniquesItemDetails;
    PalletUniquesItemMetadata: PalletUniquesItemMetadata;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    PalletXcmQueryStatus: PalletXcmQueryStatus;
    PalletXcmRemoteLockedFungibleRecord: PalletXcmRemoteLockedFungibleRecord;
    PalletXcmVersionMigrationStage: PalletXcmVersionMigrationStage;
    PalletXykCall: PalletXykCall;
    PalletXykError: PalletXykError;
    PalletXykEvent: PalletXykEvent;
    PalletXykLiquidityMiningCall: PalletXykLiquidityMiningCall;
    PalletXykLiquidityMiningError: PalletXykLiquidityMiningError;
    PalletXykLiquidityMiningEvent: PalletXykLiquidityMiningEvent;
    ParachainInfoCall: ParachainInfoCall;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesXcmpMessageFormat: PolkadotParachainPrimitivesXcmpMessageFormat;
    PolkadotPrimitivesV2AbridgedHostConfiguration: PolkadotPrimitivesV2AbridgedHostConfiguration;
    PolkadotPrimitivesV2AbridgedHrmpChannel: PolkadotPrimitivesV2AbridgedHrmpChannel;
    PolkadotPrimitivesV2PersistedValidationData: PolkadotPrimitivesV2PersistedValidationData;
    PolkadotPrimitivesV2UpgradeRestriction: PolkadotPrimitivesV2UpgradeRestriction;
    PrimitivesAssetAssetPair: PrimitivesAssetAssetPair;
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmV3Instruction: XcmV3Instruction;
    XcmV3Junction: XcmV3Junction;
    XcmV3JunctionBodyId: XcmV3JunctionBodyId;
    XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
    XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
    XcmV3Junctions: XcmV3Junctions;
    XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
    XcmV3MultiAsset: XcmV3MultiAsset;
    XcmV3MultiLocation: XcmV3MultiLocation;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3TraitsOutcome: XcmV3TraitsOutcome;
    XcmV3VecPalletInfo: XcmV3VecPalletInfo;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedMultiAsset: XcmVersionedMultiAsset;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
