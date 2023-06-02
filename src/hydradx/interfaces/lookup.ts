// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /** Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>> */
  FrameSystemAccountInfo: {
    nonce: "u32",
    consumers: "u32",
    providers: "u32",
    sufficients: "u32",
    data: "PalletBalancesAccountData",
  },
  /** Lookup5: pallet_balances::AccountData<Balance> */
  PalletBalancesAccountData: {
    free: "u128",
    reserved: "u128",
    miscFrozen: "u128",
    feeFrozen: "u128",
  },
  /** Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight> */
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: "SpWeightsWeightV2Weight",
    operational: "SpWeightsWeightV2Weight",
    mandatory: "SpWeightsWeightV2Weight",
  },
  /** Lookup8: sp_weights::weight_v2::Weight */
  SpWeightsWeightV2Weight: {
    refTime: "Compact<u64>",
    proofSize: "Compact<u64>",
  },
  /** Lookup13: sp_runtime::generic::digest::Digest */
  SpRuntimeDigest: {
    logs: "Vec<SpRuntimeDigestDigestItem>",
  },
  /** Lookup15: sp_runtime::generic::digest::DigestItem */
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: "Bytes",
      __Unused1: "Null",
      __Unused2: "Null",
      __Unused3: "Null",
      Consensus: "([u8;4],Bytes)",
      Seal: "([u8;4],Bytes)",
      PreRuntime: "([u8;4],Bytes)",
      __Unused7: "Null",
      RuntimeEnvironmentUpdated: "Null",
    },
  },
  /**
   * Lookup18: frame_system::EventRecord<hydradx_runtime::RuntimeEvent,
   * primitive_types::H256>
   */
  FrameSystemEventRecord: {
    phase: "FrameSystemPhase",
    event: "Event",
    topics: "Vec<H256>",
  },
  /** Lookup20: frame_system::pallet::Event<T> */
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: "FrameSupportDispatchDispatchInfo",
      },
      ExtrinsicFailed: {
        dispatchError: "SpRuntimeDispatchError",
        dispatchInfo: "FrameSupportDispatchDispatchInfo",
      },
      CodeUpdated: "Null",
      NewAccount: {
        account: "AccountId32",
      },
      KilledAccount: {
        account: "AccountId32",
      },
      Remarked: {
        _alias: {
          hash_: "hash",
        },
        sender: "AccountId32",
        hash_: "H256",
      },
    },
  },
  /** Lookup21: frame_support::dispatch::DispatchInfo */
  FrameSupportDispatchDispatchInfo: {
    weight: "SpWeightsWeightV2Weight",
    class: "FrameSupportDispatchDispatchClass",
    paysFee: "FrameSupportDispatchPays",
  },
  /** Lookup22: frame_support::dispatch::DispatchClass */
  FrameSupportDispatchDispatchClass: {
    _enum: ["Normal", "Operational", "Mandatory"],
  },
  /** Lookup23: frame_support::dispatch::Pays */
  FrameSupportDispatchPays: {
    _enum: ["Yes", "No"],
  },
  /** Lookup24: sp_runtime::DispatchError */
  SpRuntimeDispatchError: {
    _enum: {
      Other: "Null",
      CannotLookup: "Null",
      BadOrigin: "Null",
      Module: "SpRuntimeModuleError",
      ConsumerRemaining: "Null",
      NoProviders: "Null",
      TooManyConsumers: "Null",
      Token: "SpRuntimeTokenError",
      Arithmetic: "SpArithmeticArithmeticError",
      Transactional: "SpRuntimeTransactionalError",
      Exhausted: "Null",
      Corruption: "Null",
      Unavailable: "Null",
    },
  },
  /** Lookup25: sp_runtime::ModuleError */
  SpRuntimeModuleError: {
    index: "u8",
    error: "[u8;4]",
  },
  /** Lookup26: sp_runtime::TokenError */
  SpRuntimeTokenError: {
    _enum: [
      "NoFunds",
      "WouldDie",
      "BelowMinimum",
      "CannotCreate",
      "UnknownAsset",
      "Frozen",
      "Unsupported",
    ],
  },
  /** Lookup27: sp_arithmetic::ArithmeticError */
  SpArithmeticArithmeticError: {
    _enum: ["Underflow", "Overflow", "DivisionByZero"],
  },
  /** Lookup28: sp_runtime::TransactionalError */
  SpRuntimeTransactionalError: {
    _enum: ["LimitReached", "NoLayer"],
  },
  /** Lookup29: pallet_balances::pallet::Event<T, I> */
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: "AccountId32",
        freeBalance: "u128",
      },
      DustLost: {
        account: "AccountId32",
        amount: "u128",
      },
      Transfer: {
        from: "AccountId32",
        to: "AccountId32",
        amount: "u128",
      },
      BalanceSet: {
        who: "AccountId32",
        free: "u128",
        reserved: "u128",
      },
      Reserved: {
        who: "AccountId32",
        amount: "u128",
      },
      Unreserved: {
        who: "AccountId32",
        amount: "u128",
      },
      ReserveRepatriated: {
        from: "AccountId32",
        to: "AccountId32",
        amount: "u128",
        destinationStatus: "FrameSupportTokensMiscBalanceStatus",
      },
      Deposit: {
        who: "AccountId32",
        amount: "u128",
      },
      Withdraw: {
        who: "AccountId32",
        amount: "u128",
      },
      Slashed: {
        who: "AccountId32",
        amount: "u128",
      },
    },
  },
  /** Lookup30: frame_support::traits::tokens::misc::BalanceStatus */
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ["Free", "Reserved"],
  },
  /** Lookup31: pallet_transaction_payment::pallet::Event<T> */
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: "AccountId32",
        actualFee: "u128",
        tip: "u128",
      },
    },
  },
  /** Lookup32: pallet_treasury::pallet::Event<T, I> */
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: "u32",
      },
      Spending: {
        budgetRemaining: "u128",
      },
      Awarded: {
        proposalIndex: "u32",
        award: "u128",
        account: "AccountId32",
      },
      Rejected: {
        proposalIndex: "u32",
        slashed: "u128",
      },
      Burnt: {
        burntFunds: "u128",
      },
      Rollover: {
        rolloverBalance: "u128",
      },
      Deposit: {
        value: "u128",
      },
      SpendApproved: {
        proposalIndex: "u32",
        amount: "u128",
        beneficiary: "AccountId32",
      },
      UpdatedInactive: {
        reactivated: "u128",
        deactivated: "u128",
      },
    },
  },
  /** Lookup33: pallet_utility::pallet::Event */
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: "u32",
        error: "SpRuntimeDispatchError",
      },
      BatchCompleted: "Null",
      BatchCompletedWithErrors: "Null",
      ItemCompleted: "Null",
      ItemFailed: {
        error: "SpRuntimeDispatchError",
      },
      DispatchedAs: {
        result: "Result<Null, SpRuntimeDispatchError>",
      },
    },
  },
  /** Lookup36: pallet_preimage::pallet::Event<T> */
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
      },
      Requested: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
      },
      Cleared: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
      },
    },
  },
  /** Lookup37: pallet_identity::pallet::Event<T> */
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: "AccountId32",
      },
      IdentityCleared: {
        who: "AccountId32",
        deposit: "u128",
      },
      IdentityKilled: {
        who: "AccountId32",
        deposit: "u128",
      },
      JudgementRequested: {
        who: "AccountId32",
        registrarIndex: "u32",
      },
      JudgementUnrequested: {
        who: "AccountId32",
        registrarIndex: "u32",
      },
      JudgementGiven: {
        target: "AccountId32",
        registrarIndex: "u32",
      },
      RegistrarAdded: {
        registrarIndex: "u32",
      },
      SubIdentityAdded: {
        sub: "AccountId32",
        main: "AccountId32",
        deposit: "u128",
      },
      SubIdentityRemoved: {
        sub: "AccountId32",
        main: "AccountId32",
        deposit: "u128",
      },
      SubIdentityRevoked: {
        sub: "AccountId32",
        main: "AccountId32",
        deposit: "u128",
      },
    },
  },
  /** Lookup38: pallet_democracy::pallet::Event<T> */
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: "u32",
        deposit: "u128",
      },
      Tabled: {
        proposalIndex: "u32",
        deposit: "u128",
      },
      ExternalTabled: "Null",
      Started: {
        refIndex: "u32",
        threshold: "PalletDemocracyVoteThreshold",
      },
      Passed: {
        refIndex: "u32",
      },
      NotPassed: {
        refIndex: "u32",
      },
      Cancelled: {
        refIndex: "u32",
      },
      Delegated: {
        who: "AccountId32",
        target: "AccountId32",
      },
      Undelegated: {
        account: "AccountId32",
      },
      Vetoed: {
        who: "AccountId32",
        proposalHash: "H256",
        until: "u32",
      },
      Blacklisted: {
        proposalHash: "H256",
      },
      Voted: {
        voter: "AccountId32",
        refIndex: "u32",
        vote: "PalletDemocracyVoteAccountVote",
      },
      Seconded: {
        seconder: "AccountId32",
        propIndex: "u32",
      },
      ProposalCanceled: {
        propIndex: "u32",
      },
    },
  },
  /** Lookup39: pallet_democracy::vote_threshold::VoteThreshold */
  PalletDemocracyVoteThreshold: {
    _enum: ["SuperMajorityApprove", "SuperMajorityAgainst", "SimpleMajority"],
  },
  /** Lookup40: pallet_democracy::vote::AccountVote<Balance> */
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: "Vote",
        balance: "u128",
      },
      Split: {
        aye: "u128",
        nay: "u128",
      },
    },
  },
  /** Lookup42: pallet_elections_phragmen::pallet::Event<T> */
  PalletElectionsPhragmenEvent: {
    _enum: {
      NewTerm: {
        newMembers: "Vec<(AccountId32,u128)>",
      },
      EmptyTerm: "Null",
      ElectionError: "Null",
      MemberKicked: {
        member: "AccountId32",
      },
      Renounced: {
        candidate: "AccountId32",
      },
      CandidateSlashed: {
        candidate: "AccountId32",
        amount: "u128",
      },
      SeatHolderSlashed: {
        seatHolder: "AccountId32",
        amount: "u128",
      },
    },
  },
  /** Lookup45: pallet_collective::pallet::Event<T, I> */
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: "AccountId32",
        proposalIndex: "u32",
        proposalHash: "H256",
        threshold: "u32",
      },
      Voted: {
        account: "AccountId32",
        proposalHash: "H256",
        voted: "bool",
        yes: "u32",
        no: "u32",
      },
      Approved: {
        proposalHash: "H256",
      },
      Disapproved: {
        proposalHash: "H256",
      },
      Executed: {
        proposalHash: "H256",
        result: "Result<Null, SpRuntimeDispatchError>",
      },
      MemberExecuted: {
        proposalHash: "H256",
        result: "Result<Null, SpRuntimeDispatchError>",
      },
      Closed: {
        proposalHash: "H256",
        yes: "u32",
        no: "u32",
      },
    },
  },
  /** Lookup48: pallet_tips::pallet::Event<T, I> */
  PalletTipsEvent: {
    _enum: {
      NewTip: {
        tipHash: "H256",
      },
      TipClosing: {
        tipHash: "H256",
      },
      TipClosed: {
        tipHash: "H256",
        who: "AccountId32",
        payout: "u128",
      },
      TipRetracted: {
        tipHash: "H256",
      },
      TipSlashed: {
        tipHash: "H256",
        finder: "AccountId32",
        deposit: "u128",
      },
    },
  },
  /** Lookup49: pallet_proxy::pallet::Event<T> */
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: "Result<Null, SpRuntimeDispatchError>",
      },
      PureCreated: {
        pure: "AccountId32",
        who: "AccountId32",
        proxyType: "CommonRuntimeProxyType",
        disambiguationIndex: "u16",
      },
      Announced: {
        real: "AccountId32",
        proxy: "AccountId32",
        callHash: "H256",
      },
      ProxyAdded: {
        delegator: "AccountId32",
        delegatee: "AccountId32",
        proxyType: "CommonRuntimeProxyType",
        delay: "u32",
      },
      ProxyRemoved: {
        delegator: "AccountId32",
        delegatee: "AccountId32",
        proxyType: "CommonRuntimeProxyType",
        delay: "u32",
      },
    },
  },
  /** Lookup50: common_runtime::ProxyType */
  CommonRuntimeProxyType: {
    _enum: ["Any", "CancelProxy", "Governance", "Transfer"],
  },
  /** Lookup52: pallet_multisig::pallet::Event<T> */
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: "AccountId32",
        multisig: "AccountId32",
        callHash: "[u8;32]",
      },
      MultisigApproval: {
        approving: "AccountId32",
        timepoint: "PalletMultisigTimepoint",
        multisig: "AccountId32",
        callHash: "[u8;32]",
      },
      MultisigExecuted: {
        approving: "AccountId32",
        timepoint: "PalletMultisigTimepoint",
        multisig: "AccountId32",
        callHash: "[u8;32]",
        result: "Result<Null, SpRuntimeDispatchError>",
      },
      MultisigCancelled: {
        cancelling: "AccountId32",
        timepoint: "PalletMultisigTimepoint",
        multisig: "AccountId32",
        callHash: "[u8;32]",
      },
    },
  },
  /** Lookup53: pallet_multisig::Timepoint<BlockNumber> */
  PalletMultisigTimepoint: {
    height: "u32",
    index: "u32",
  },
  /** Lookup54: pallet_uniques::pallet::Event<T, I> */
  PalletUniquesEvent: {
    _enum: {
      Created: {
        collection: "u128",
        creator: "AccountId32",
        owner: "AccountId32",
      },
      ForceCreated: {
        collection: "u128",
        owner: "AccountId32",
      },
      Destroyed: {
        collection: "u128",
      },
      Issued: {
        collection: "u128",
        item: "u128",
        owner: "AccountId32",
      },
      Transferred: {
        collection: "u128",
        item: "u128",
        from: "AccountId32",
        to: "AccountId32",
      },
      Burned: {
        collection: "u128",
        item: "u128",
        owner: "AccountId32",
      },
      Frozen: {
        collection: "u128",
        item: "u128",
      },
      Thawed: {
        collection: "u128",
        item: "u128",
      },
      CollectionFrozen: {
        collection: "u128",
      },
      CollectionThawed: {
        collection: "u128",
      },
      OwnerChanged: {
        collection: "u128",
        newOwner: "AccountId32",
      },
      TeamChanged: {
        collection: "u128",
        issuer: "AccountId32",
        admin: "AccountId32",
        freezer: "AccountId32",
      },
      ApprovedTransfer: {
        collection: "u128",
        item: "u128",
        owner: "AccountId32",
        delegate: "AccountId32",
      },
      ApprovalCancelled: {
        collection: "u128",
        item: "u128",
        owner: "AccountId32",
        delegate: "AccountId32",
      },
      ItemStatusChanged: {
        collection: "u128",
      },
      CollectionMetadataSet: {
        collection: "u128",
        data: "Bytes",
        isFrozen: "bool",
      },
      CollectionMetadataCleared: {
        collection: "u128",
      },
      MetadataSet: {
        collection: "u128",
        item: "u128",
        data: "Bytes",
        isFrozen: "bool",
      },
      MetadataCleared: {
        collection: "u128",
        item: "u128",
      },
      Redeposited: {
        collection: "u128",
        successfulItems: "Vec<u128>",
      },
      AttributeSet: {
        collection: "u128",
        maybeItem: "Option<u128>",
        key: "Bytes",
        value: "Bytes",
      },
      AttributeCleared: {
        collection: "u128",
        maybeItem: "Option<u128>",
        key: "Bytes",
      },
      OwnershipAcceptanceChanged: {
        who: "AccountId32",
        maybeCollection: "Option<u128>",
      },
      CollectionMaxSupplySet: {
        collection: "u128",
        maxSupply: "u32",
      },
      ItemPriceSet: {
        collection: "u128",
        item: "u128",
        price: "u128",
        whitelistedBuyer: "Option<AccountId32>",
      },
      ItemPriceRemoved: {
        collection: "u128",
        item: "u128",
      },
      ItemBought: {
        collection: "u128",
        item: "u128",
        price: "u128",
        seller: "AccountId32",
        buyer: "AccountId32",
      },
    },
  },
  /** Lookup61: pallet_asset_registry::pallet::Event<T> */
  PalletAssetRegistryEvent: {
    _enum: {
      Registered: {
        assetId: "u32",
        assetName: "Bytes",
        assetType: "PalletAssetRegistryAssetType",
      },
      Updated: {
        assetId: "u32",
        assetName: "Bytes",
        assetType: "PalletAssetRegistryAssetType",
        existentialDeposit: "u128",
        xcmRateLimit: "Option<u128>",
      },
      MetadataSet: {
        assetId: "u32",
        symbol: "Bytes",
        decimals: "u8",
      },
      LocationSet: {
        assetId: "u32",
        location: "HydradxRuntimeAssetLocation",
      },
    },
  },
  /** Lookup63: pallet_asset_registry::types::AssetType<AssetId> */
  PalletAssetRegistryAssetType: {
    _enum: {
      Token: "Null",
      PoolShare: "(u32,u32)",
    },
  },
  /** Lookup64: hydradx_runtime::AssetLocation */
  HydradxRuntimeAssetLocation: "XcmV3MultiLocation",
  /** Lookup65: xcm::v3::multilocation::MultiLocation */
  XcmV3MultiLocation: {
    parents: "u8",
    interior: "XcmV3Junctions",
  },
  /** Lookup66: xcm::v3::junctions::Junctions */
  XcmV3Junctions: {
    _enum: {
      Here: "Null",
      X1: "XcmV3Junction",
      X2: "(XcmV3Junction,XcmV3Junction)",
      X3: "(XcmV3Junction,XcmV3Junction,XcmV3Junction)",
      X4: "(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)",
      X5: "(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)",
      X6: "(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)",
      X7: "(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)",
      X8: "(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)",
    },
  },
  /** Lookup67: xcm::v3::junction::Junction */
  XcmV3Junction: {
    _enum: {
      Parachain: "Compact<u32>",
      AccountId32: {
        network: "Option<XcmV3JunctionNetworkId>",
        id: "[u8;32]",
      },
      AccountIndex64: {
        network: "Option<XcmV3JunctionNetworkId>",
        index: "Compact<u64>",
      },
      AccountKey20: {
        network: "Option<XcmV3JunctionNetworkId>",
        key: "[u8;20]",
      },
      PalletInstance: "u8",
      GeneralIndex: "Compact<u128>",
      GeneralKey: {
        length: "u8",
        data: "[u8;32]",
      },
      OnlyChild: "Null",
      Plurality: {
        id: "XcmV3JunctionBodyId",
        part: "XcmV3JunctionBodyPart",
      },
      GlobalConsensus: "XcmV3JunctionNetworkId",
    },
  },
  /** Lookup70: xcm::v3::junction::NetworkId */
  XcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: "[u8;32]",
      ByFork: {
        blockNumber: "u64",
        blockHash: "[u8;32]",
      },
      Polkadot: "Null",
      Kusama: "Null",
      Westend: "Null",
      Rococo: "Null",
      Wococo: "Null",
      Ethereum: {
        chainId: "Compact<u64>",
      },
      BitcoinCore: "Null",
      BitcoinCash: "Null",
    },
  },
  /** Lookup73: xcm::v3::junction::BodyId */
  XcmV3JunctionBodyId: {
    _enum: {
      Unit: "Null",
      Moniker: "[u8;4]",
      Index: "Compact<u32>",
      Executive: "Null",
      Technical: "Null",
      Legislative: "Null",
      Judicial: "Null",
      Defense: "Null",
      Administration: "Null",
      Treasury: "Null",
    },
  },
  /** Lookup74: xcm::v3::junction::BodyPart */
  XcmV3JunctionBodyPart: {
    _enum: {
      Voice: "Null",
      Members: {
        count: "Compact<u32>",
      },
      Fraction: {
        nom: "Compact<u32>",
        denom: "Compact<u32>",
      },
      AtLeastProportion: {
        nom: "Compact<u32>",
        denom: "Compact<u32>",
      },
      MoreThanProportion: {
        nom: "Compact<u32>",
        denom: "Compact<u32>",
      },
    },
  },
  /** Lookup75: pallet_claims::pallet::Event<T> */
  PalletClaimsEvent: {
    _enum: {
      Claim: "(AccountId32,PalletClaimsEthereumAddress,u128)",
    },
  },
  /** Lookup76: pallet_claims::traits::EthereumAddress */
  PalletClaimsEthereumAddress: "[u8;20]",
  /** Lookup77: pallet_collator_rewards::pallet::Event<T> */
  PalletCollatorRewardsEvent: {
    _enum: {
      CollatorRewarded: {
        who: "AccountId32",
        amount: "u128",
        currency: "u32",
      },
    },
  },
  /** Lookup78: pallet_omnipool::pallet::Event<T> */
  PalletOmnipoolEvent: {
    _enum: {
      TokenAdded: {
        assetId: "u32",
        initialAmount: "u128",
        initialPrice: "u128",
      },
      LiquidityAdded: {
        who: "AccountId32",
        assetId: "u32",
        amount: "u128",
        positionId: "u128",
      },
      LiquidityRemoved: {
        who: "AccountId32",
        positionId: "u128",
        assetId: "u32",
        sharesRemoved: "u128",
        fee: "u128",
      },
      SellExecuted: {
        who: "AccountId32",
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        amountOut: "u128",
      },
      BuyExecuted: {
        who: "AccountId32",
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        amountOut: "u128",
      },
      PositionCreated: {
        positionId: "u128",
        owner: "AccountId32",
        asset: "u32",
        amount: "u128",
        shares: "u128",
        price: "u128",
      },
      PositionDestroyed: {
        positionId: "u128",
        owner: "AccountId32",
      },
      PositionUpdated: {
        positionId: "u128",
        owner: "AccountId32",
        asset: "u32",
        amount: "u128",
        shares: "u128",
        price: "u128",
      },
      TradableStateUpdated: {
        assetId: "u32",
        state: "PalletOmnipoolTradability",
      },
      AssetRefunded: {
        assetId: "u32",
        amount: "u128",
        recipient: "AccountId32",
      },
      AssetWeightCapUpdated: {
        assetId: "u32",
        cap: "Permill",
      },
      TVLCapUpdated: {
        cap: "u128",
      },
    },
  },
  /** Lookup80: pallet_omnipool::types::Tradability */
  PalletOmnipoolTradability: {
    bits: "u8",
  },
  /** Lookup82: pallet_transaction_pause::pallet::Event<T> */
  PalletTransactionPauseEvent: {
    _enum: {
      TransactionPaused: {
        palletNameBytes: "Bytes",
        functionNameBytes: "Bytes",
      },
      TransactionUnpaused: {
        palletNameBytes: "Bytes",
        functionNameBytes: "Bytes",
      },
    },
  },
  /** Lookup83: pallet_duster::pallet::Event<T> */
  PalletDusterEvent: {
    _enum: {
      Dusted: {
        who: "AccountId32",
        amount: "u128",
      },
      Added: {
        who: "AccountId32",
      },
      Removed: {
        who: "AccountId32",
      },
    },
  },
  /** Lookup84: pallet_liquidity_mining::pallet::Event<T, I> */
  PalletLiquidityMiningEvent: {
    _enum: {
      GlobalFarmAccRPZUpdated: {
        globalFarmId: "u32",
        accumulatedRpz: "u128",
        totalSharesZ: "u128",
      },
      YieldFarmAccRPVSUpdated: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        accumulatedRpvs: "u128",
        totalValuedShares: "u128",
      },
      AllRewardsDistributed: {
        globalFarmId: "u32",
      },
    },
  },
  /** Lookup85: pallet_omnipool_liquidity_mining::pallet::Event<T> */
  PalletOmnipoolLiquidityMiningEvent: {
    _enum: {
      GlobalFarmCreated: {
        id: "u32",
        owner: "AccountId32",
        totalRewards: "u128",
        rewardCurrency: "u32",
        yieldPerPeriod: "Perquintill",
        plannedYieldingPeriods: "u32",
        blocksPerPeriod: "u32",
        maxRewardPerPeriod: "u128",
        minDeposit: "u128",
        lrnaPriceAdjustment: "u128",
      },
      GlobalFarmTerminated: {
        globalFarmId: "u32",
        who: "AccountId32",
        rewardCurrency: "u32",
        undistributedRewards: "u128",
      },
      YieldFarmCreated: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetId: "u32",
        multiplier: "u128",
        loyaltyCurve: "Option<PalletLiquidityMiningLoyaltyCurve>",
      },
      YieldFarmUpdated: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetId: "u32",
        who: "AccountId32",
        multiplier: "u128",
      },
      YieldFarmStopped: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetId: "u32",
        who: "AccountId32",
      },
      YieldFarmResumed: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetId: "u32",
        who: "AccountId32",
        multiplier: "u128",
      },
      YieldFarmTerminated: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetId: "u32",
        who: "AccountId32",
      },
      SharesDeposited: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        depositId: "u128",
        assetId: "u32",
        who: "AccountId32",
        sharesAmount: "u128",
        positionId: "u128",
      },
      SharesRedeposited: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        depositId: "u128",
        assetId: "u32",
        who: "AccountId32",
        sharesAmount: "u128",
        positionId: "u128",
      },
      RewardClaimed: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        who: "AccountId32",
        claimed: "u128",
        rewardCurrency: "u32",
        depositId: "u128",
      },
      SharesWithdrawn: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        who: "AccountId32",
        amount: "u128",
        depositId: "u128",
      },
      DepositDestroyed: {
        who: "AccountId32",
        depositId: "u128",
      },
    },
  },
  /** Lookup88: pallet_liquidity_mining::types::LoyaltyCurve */
  PalletLiquidityMiningLoyaltyCurve: {
    initialRewardPercentage: "u128",
    scaleCoef: "u32",
  },
  /** Lookup89: pallet_otc::pallet::Event<T> */
  PalletOtcEvent: {
    _enum: {
      Cancelled: {
        orderId: "u32",
      },
      Filled: {
        orderId: "u32",
        who: "AccountId32",
        amountIn: "u128",
        amountOut: "u128",
      },
      PartiallyFilled: {
        orderId: "u32",
        who: "AccountId32",
        amountIn: "u128",
        amountOut: "u128",
      },
      Placed: {
        orderId: "u32",
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        amountOut: "u128",
        partiallyFillable: "bool",
      },
    },
  },
  /** Lookup90: pallet_circuit_breaker::pallet::Event<T> */
  PalletCircuitBreakerEvent: {
    _enum: {
      TradeVolumeLimitChanged: {
        assetId: "u32",
        tradeVolumeLimit: "(u32,u32)",
      },
      AddLiquidityLimitChanged: {
        assetId: "u32",
        liquidityLimit: "Option<(u32,u32)>",
      },
      RemoveLiquidityLimitChanged: {
        assetId: "u32",
        liquidityLimit: "Option<(u32,u32)>",
      },
    },
  },
  /** Lookup93: pallet_route_executor::pallet::Event<T> */
  PalletRouteExecutorEvent: {
    _enum: {
      RouteExecuted: {
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        amountOut: "u128",
      },
    },
  },
  /** Lookup94: orml_tokens::module::Event<T> */
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
      DustLost: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
      Transfer: {
        currencyId: "u32",
        from: "AccountId32",
        to: "AccountId32",
        amount: "u128",
      },
      Reserved: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
      Unreserved: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
      ReserveRepatriated: {
        currencyId: "u32",
        from: "AccountId32",
        to: "AccountId32",
        amount: "u128",
        status: "FrameSupportTokensMiscBalanceStatus",
      },
      BalanceSet: {
        currencyId: "u32",
        who: "AccountId32",
        free: "u128",
        reserved: "u128",
      },
      TotalIssuanceSet: {
        currencyId: "u32",
        amount: "u128",
      },
      Withdrawn: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
      Slashed: {
        currencyId: "u32",
        who: "AccountId32",
        freeAmount: "u128",
        reservedAmount: "u128",
      },
      Deposited: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
      LockSet: {
        lockId: "[u8;8]",
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
      LockRemoved: {
        lockId: "[u8;8]",
        currencyId: "u32",
        who: "AccountId32",
      },
      Locked: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
      Unlocked: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
    },
  },
  /** Lookup96: pallet_currencies::module::Event<T> */
  PalletCurrenciesModuleEvent: {
    _enum: {
      Transferred: {
        currencyId: "u32",
        from: "AccountId32",
        to: "AccountId32",
        amount: "u128",
      },
      BalanceUpdated: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "i128",
      },
      Deposited: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
      Withdrawn: {
        currencyId: "u32",
        who: "AccountId32",
        amount: "u128",
      },
    },
  },
  /** Lookup98: orml_vesting::module::Event<T> */
  OrmlVestingModuleEvent: {
    _enum: {
      VestingScheduleAdded: {
        from: "AccountId32",
        to: "AccountId32",
        vestingSchedule: "OrmlVestingVestingSchedule",
      },
      Claimed: {
        who: "AccountId32",
        amount: "u128",
      },
      VestingSchedulesUpdated: {
        who: "AccountId32",
      },
    },
  },
  /** Lookup99: orml_vesting::VestingSchedule<BlockNumber, Balance> */
  OrmlVestingVestingSchedule: {
    start: "u32",
    period: "u32",
    periodCount: "u32",
    perPeriod: "Compact<u128>",
  },
  /** Lookup100: cumulus_pallet_parachain_system::pallet::Event<T> */
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: "Null",
      ValidationFunctionApplied: {
        relayChainBlockNum: "u32",
      },
      ValidationFunctionDiscarded: "Null",
      UpgradeAuthorized: {
        codeHash: "H256",
      },
      DownwardMessagesReceived: {
        count: "u32",
      },
      DownwardMessagesProcessed: {
        weightUsed: "SpWeightsWeightV2Weight",
        dmqHead: "H256",
      },
      UpwardMessageSent: {
        messageHash: "Option<[u8;32]>",
      },
    },
  },
  /** Lookup102: pallet_scheduler::pallet::Event<T> */
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: "u32",
        index: "u32",
      },
      Canceled: {
        when: "u32",
        index: "u32",
      },
      Dispatched: {
        task: "(u32,u32)",
        id: "Option<[u8;32]>",
        result: "Result<Null, SpRuntimeDispatchError>",
      },
      CallUnavailable: {
        task: "(u32,u32)",
        id: "Option<[u8;32]>",
      },
      PeriodicFailed: {
        task: "(u32,u32)",
        id: "Option<[u8;32]>",
      },
      PermanentlyOverweight: {
        task: "(u32,u32)",
        id: "Option<[u8;32]>",
      },
    },
  },
  /** Lookup103: pallet_dca::pallet::Event<T> */
  PalletDcaEvent: {
    _enum: {
      ExecutionStarted: {
        id: "u32",
        block: "u32",
      },
      Scheduled: {
        id: "u32",
        who: "AccountId32",
      },
      ExecutionPlanned: {
        id: "u32",
        who: "AccountId32",
        block: "u32",
      },
      TradeExecuted: {
        id: "u32",
        who: "AccountId32",
        amountIn: "u128",
        amountOut: "u128",
      },
      TradeFailed: {
        id: "u32",
        who: "AccountId32",
        error: "SpRuntimeDispatchError",
      },
      Terminated: {
        id: "u32",
        who: "AccountId32",
        error: "SpRuntimeDispatchError",
      },
      Completed: {
        id: "u32",
        who: "AccountId32",
      },
      RandomnessGenerationFailed: {
        block: "u32",
        error: "SpRuntimeDispatchError",
      },
    },
  },
  /** Lookup104: pallet_xcm::pallet::Event<T> */
  PalletXcmEvent: {
    _enum: {
      Attempted: "XcmV3TraitsOutcome",
      Sent: "(XcmV3MultiLocation,XcmV3MultiLocation,XcmV3Xcm)",
      UnexpectedResponse: "(XcmV3MultiLocation,u64)",
      ResponseReady: "(u64,XcmV3Response)",
      Notified: "(u64,u8,u8)",
      NotifyOverweight:
        "(u64,u8,u8,SpWeightsWeightV2Weight,SpWeightsWeightV2Weight)",
      NotifyDispatchError: "(u64,u8,u8)",
      NotifyDecodeFailed: "(u64,u8,u8)",
      InvalidResponder: "(XcmV3MultiLocation,u64,Option<XcmV3MultiLocation>)",
      InvalidResponderVersion: "(XcmV3MultiLocation,u64)",
      ResponseTaken: "u64",
      AssetsTrapped: "(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)",
      VersionChangeNotified:
        "(XcmV3MultiLocation,u32,XcmV3MultiassetMultiAssets)",
      SupportedVersionChanged: "(XcmV3MultiLocation,u32)",
      NotifyTargetSendFail: "(XcmV3MultiLocation,u64,XcmV3TraitsError)",
      NotifyTargetMigrationFail: "(XcmVersionedMultiLocation,u64)",
      InvalidQuerierVersion: "(XcmV3MultiLocation,u64)",
      InvalidQuerier:
        "(XcmV3MultiLocation,u64,XcmV3MultiLocation,Option<XcmV3MultiLocation>)",
      VersionNotifyStarted: "(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)",
      VersionNotifyRequested: "(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)",
      VersionNotifyUnrequested:
        "(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)",
      FeesPaid: "(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)",
      AssetsClaimed: "(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)",
    },
  },
  /** Lookup105: xcm::v3::traits::Outcome */
  XcmV3TraitsOutcome: {
    _enum: {
      Complete: "SpWeightsWeightV2Weight",
      Incomplete: "(SpWeightsWeightV2Weight,XcmV3TraitsError)",
      Error: "XcmV3TraitsError",
    },
  },
  /** Lookup106: xcm::v3::traits::Error */
  XcmV3TraitsError: {
    _enum: {
      Overflow: "Null",
      Unimplemented: "Null",
      UntrustedReserveLocation: "Null",
      UntrustedTeleportLocation: "Null",
      LocationFull: "Null",
      LocationNotInvertible: "Null",
      BadOrigin: "Null",
      InvalidLocation: "Null",
      AssetNotFound: "Null",
      FailedToTransactAsset: "Null",
      NotWithdrawable: "Null",
      LocationCannotHold: "Null",
      ExceedsMaxMessageSize: "Null",
      DestinationUnsupported: "Null",
      Transport: "Null",
      Unroutable: "Null",
      UnknownClaim: "Null",
      FailedToDecode: "Null",
      MaxWeightInvalid: "Null",
      NotHoldingFees: "Null",
      TooExpensive: "Null",
      Trap: "u64",
      ExpectationFalse: "Null",
      PalletNotFound: "Null",
      NameMismatch: "Null",
      VersionIncompatible: "Null",
      HoldingWouldOverflow: "Null",
      ExportError: "Null",
      ReanchorFailed: "Null",
      NoDeal: "Null",
      FeesNotMet: "Null",
      LockError: "Null",
      NoPermission: "Null",
      Unanchored: "Null",
      NotDepositable: "Null",
      UnhandledXcmVersion: "Null",
      WeightLimitReached: "SpWeightsWeightV2Weight",
      Barrier: "Null",
      WeightNotComputable: "Null",
      ExceedsStackLimit: "Null",
    },
  },
  /** Lookup107: xcm::v3::Xcm<Call> */
  XcmV3Xcm: "Vec<XcmV3Instruction>",
  /** Lookup109: xcm::v3::Instruction<Call> */
  XcmV3Instruction: {
    _enum: {
      WithdrawAsset: "XcmV3MultiassetMultiAssets",
      ReserveAssetDeposited: "XcmV3MultiassetMultiAssets",
      ReceiveTeleportedAsset: "XcmV3MultiassetMultiAssets",
      QueryResponse: {
        queryId: "Compact<u64>",
        response: "XcmV3Response",
        maxWeight: "SpWeightsWeightV2Weight",
        querier: "Option<XcmV3MultiLocation>",
      },
      TransferAsset: {
        assets: "XcmV3MultiassetMultiAssets",
        beneficiary: "XcmV3MultiLocation",
      },
      TransferReserveAsset: {
        assets: "XcmV3MultiassetMultiAssets",
        dest: "XcmV3MultiLocation",
        xcm: "XcmV3Xcm",
      },
      Transact: {
        originKind: "XcmV2OriginKind",
        requireWeightAtMost: "SpWeightsWeightV2Weight",
        call: "XcmDoubleEncoded",
      },
      HrmpNewChannelOpenRequest: {
        sender: "Compact<u32>",
        maxMessageSize: "Compact<u32>",
        maxCapacity: "Compact<u32>",
      },
      HrmpChannelAccepted: {
        recipient: "Compact<u32>",
      },
      HrmpChannelClosing: {
        initiator: "Compact<u32>",
        sender: "Compact<u32>",
        recipient: "Compact<u32>",
      },
      ClearOrigin: "Null",
      DescendOrigin: "XcmV3Junctions",
      ReportError: "XcmV3QueryResponseInfo",
      DepositAsset: {
        assets: "XcmV3MultiassetMultiAssetFilter",
        beneficiary: "XcmV3MultiLocation",
      },
      DepositReserveAsset: {
        assets: "XcmV3MultiassetMultiAssetFilter",
        dest: "XcmV3MultiLocation",
        xcm: "XcmV3Xcm",
      },
      ExchangeAsset: {
        give: "XcmV3MultiassetMultiAssetFilter",
        want: "XcmV3MultiassetMultiAssets",
        maximal: "bool",
      },
      InitiateReserveWithdraw: {
        assets: "XcmV3MultiassetMultiAssetFilter",
        reserve: "XcmV3MultiLocation",
        xcm: "XcmV3Xcm",
      },
      InitiateTeleport: {
        assets: "XcmV3MultiassetMultiAssetFilter",
        dest: "XcmV3MultiLocation",
        xcm: "XcmV3Xcm",
      },
      ReportHolding: {
        responseInfo: "XcmV3QueryResponseInfo",
        assets: "XcmV3MultiassetMultiAssetFilter",
      },
      BuyExecution: {
        fees: "XcmV3MultiAsset",
        weightLimit: "XcmV3WeightLimit",
      },
      RefundSurplus: "Null",
      SetErrorHandler: "XcmV3Xcm",
      SetAppendix: "XcmV3Xcm",
      ClearError: "Null",
      ClaimAsset: {
        assets: "XcmV3MultiassetMultiAssets",
        ticket: "XcmV3MultiLocation",
      },
      Trap: "Compact<u64>",
      SubscribeVersion: {
        queryId: "Compact<u64>",
        maxResponseWeight: "SpWeightsWeightV2Weight",
      },
      UnsubscribeVersion: "Null",
      BurnAsset: "XcmV3MultiassetMultiAssets",
      ExpectAsset: "XcmV3MultiassetMultiAssets",
      ExpectOrigin: "Option<XcmV3MultiLocation>",
      ExpectError: "Option<(u32,XcmV3TraitsError)>",
      ExpectTransactStatus: "XcmV3MaybeErrorCode",
      QueryPallet: {
        moduleName: "Bytes",
        responseInfo: "XcmV3QueryResponseInfo",
      },
      ExpectPallet: {
        index: "Compact<u32>",
        name: "Bytes",
        moduleName: "Bytes",
        crateMajor: "Compact<u32>",
        minCrateMinor: "Compact<u32>",
      },
      ReportTransactStatus: "XcmV3QueryResponseInfo",
      ClearTransactStatus: "Null",
      UniversalOrigin: "XcmV3Junction",
      ExportMessage: {
        network: "XcmV3JunctionNetworkId",
        destination: "XcmV3Junctions",
        xcm: "XcmV3Xcm",
      },
      LockAsset: {
        asset: "XcmV3MultiAsset",
        unlocker: "XcmV3MultiLocation",
      },
      UnlockAsset: {
        asset: "XcmV3MultiAsset",
        target: "XcmV3MultiLocation",
      },
      NoteUnlockable: {
        asset: "XcmV3MultiAsset",
        owner: "XcmV3MultiLocation",
      },
      RequestUnlock: {
        asset: "XcmV3MultiAsset",
        locker: "XcmV3MultiLocation",
      },
      SetFeesMode: {
        jitWithdraw: "bool",
      },
      SetTopic: "[u8;32]",
      ClearTopic: "Null",
      AliasOrigin: "XcmV3MultiLocation",
      UnpaidExecution: {
        weightLimit: "XcmV3WeightLimit",
        checkOrigin: "Option<XcmV3MultiLocation>",
      },
    },
  },
  /** Lookup110: xcm::v3::multiasset::MultiAssets */
  XcmV3MultiassetMultiAssets: "Vec<XcmV3MultiAsset>",
  /** Lookup112: xcm::v3::multiasset::MultiAsset */
  XcmV3MultiAsset: {
    id: "XcmV3MultiassetAssetId",
    fun: "XcmV3MultiassetFungibility",
  },
  /** Lookup113: xcm::v3::multiasset::AssetId */
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: "XcmV3MultiLocation",
      Abstract: "[u8;32]",
    },
  },
  /** Lookup114: xcm::v3::multiasset::Fungibility */
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: "Compact<u128>",
      NonFungible: "XcmV3MultiassetAssetInstance",
    },
  },
  /** Lookup115: xcm::v3::multiasset::AssetInstance */
  XcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: "Null",
      Index: "Compact<u128>",
      Array4: "[u8;4]",
      Array8: "[u8;8]",
      Array16: "[u8;16]",
      Array32: "[u8;32]",
    },
  },
  /** Lookup117: xcm::v3::Response */
  XcmV3Response: {
    _enum: {
      Null: "Null",
      Assets: "XcmV3MultiassetMultiAssets",
      ExecutionResult: "Option<(u32,XcmV3TraitsError)>",
      Version: "u32",
      PalletsInfo: "XcmV3VecPalletInfo",
      DispatchResult: "XcmV3MaybeErrorCode",
    },
  },
  /** Lookup120: xcm::v3::VecPalletInfo */
  XcmV3VecPalletInfo: "Vec<XcmV3PalletInfo>",
  /** Lookup122: xcm::v3::PalletInfo */
  XcmV3PalletInfo: {
    index: "Compact<u32>",
    name: "Bytes",
    moduleName: "Bytes",
    major: "Compact<u32>",
    minor: "Compact<u32>",
    patch: "Compact<u32>",
  },
  /** Lookup123: xcm::v3::MaybeErrorCode */
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: "Null",
      Error: "Bytes",
      TruncatedError: "Bytes",
    },
  },
  /** Lookup125: xcm::v2::OriginKind */
  XcmV2OriginKind: {
    _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"],
  },
  /** Lookup126: xcm::double_encoded::DoubleEncoded<T> */
  XcmDoubleEncoded: {
    encoded: "Bytes",
  },
  /** Lookup127: xcm::v3::QueryResponseInfo */
  XcmV3QueryResponseInfo: {
    destination: "XcmV3MultiLocation",
    queryId: "Compact<u64>",
    maxWeight: "SpWeightsWeightV2Weight",
  },
  /** Lookup128: xcm::v3::multiasset::MultiAssetFilter */
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: "XcmV3MultiassetMultiAssets",
      Wild: "XcmV3MultiassetWildMultiAsset",
    },
  },
  /** Lookup129: xcm::v3::multiasset::WildMultiAsset */
  XcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: "Null",
      AllOf: {
        id: "XcmV3MultiassetAssetId",
        fun: "XcmV3MultiassetWildFungibility",
      },
      AllCounted: "Compact<u32>",
      AllOfCounted: {
        id: "XcmV3MultiassetAssetId",
        fun: "XcmV3MultiassetWildFungibility",
        count: "Compact<u32>",
      },
    },
  },
  /** Lookup130: xcm::v3::multiasset::WildFungibility */
  XcmV3MultiassetWildFungibility: {
    _enum: ["Fungible", "NonFungible"],
  },
  /** Lookup131: xcm::v3::WeightLimit */
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: "Null",
      Limited: "SpWeightsWeightV2Weight",
    },
  },
  /** Lookup132: xcm::VersionedMultiAssets */
  XcmVersionedMultiAssets: {
    _enum: {
      __Unused0: "Null",
      V2: "XcmV2MultiassetMultiAssets",
      __Unused2: "Null",
      V3: "XcmV3MultiassetMultiAssets",
    },
  },
  /** Lookup133: xcm::v2::multiasset::MultiAssets */
  XcmV2MultiassetMultiAssets: "Vec<XcmV2MultiAsset>",
  /** Lookup135: xcm::v2::multiasset::MultiAsset */
  XcmV2MultiAsset: {
    id: "XcmV2MultiassetAssetId",
    fun: "XcmV2MultiassetFungibility",
  },
  /** Lookup136: xcm::v2::multiasset::AssetId */
  XcmV2MultiassetAssetId: {
    _enum: {
      Concrete: "XcmV2MultiLocation",
      Abstract: "Bytes",
    },
  },
  /** Lookup137: xcm::v2::multilocation::MultiLocation */
  XcmV2MultiLocation: {
    parents: "u8",
    interior: "XcmV2MultilocationJunctions",
  },
  /** Lookup138: xcm::v2::multilocation::Junctions */
  XcmV2MultilocationJunctions: {
    _enum: {
      Here: "Null",
      X1: "XcmV2Junction",
      X2: "(XcmV2Junction,XcmV2Junction)",
      X3: "(XcmV2Junction,XcmV2Junction,XcmV2Junction)",
      X4: "(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)",
      X5: "(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)",
      X6: "(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)",
      X7: "(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)",
      X8: "(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)",
    },
  },
  /** Lookup139: xcm::v2::junction::Junction */
  XcmV2Junction: {
    _enum: {
      Parachain: "Compact<u32>",
      AccountId32: {
        network: "XcmV2NetworkId",
        id: "[u8;32]",
      },
      AccountIndex64: {
        network: "XcmV2NetworkId",
        index: "Compact<u64>",
      },
      AccountKey20: {
        network: "XcmV2NetworkId",
        key: "[u8;20]",
      },
      PalletInstance: "u8",
      GeneralIndex: "Compact<u128>",
      GeneralKey: "Bytes",
      OnlyChild: "Null",
      Plurality: {
        id: "XcmV2BodyId",
        part: "XcmV2BodyPart",
      },
    },
  },
  /** Lookup140: xcm::v2::NetworkId */
  XcmV2NetworkId: {
    _enum: {
      Any: "Null",
      Named: "Bytes",
      Polkadot: "Null",
      Kusama: "Null",
    },
  },
  /** Lookup142: xcm::v2::BodyId */
  XcmV2BodyId: {
    _enum: {
      Unit: "Null",
      Named: "Bytes",
      Index: "Compact<u32>",
      Executive: "Null",
      Technical: "Null",
      Legislative: "Null",
      Judicial: "Null",
      Defense: "Null",
      Administration: "Null",
      Treasury: "Null",
    },
  },
  /** Lookup143: xcm::v2::BodyPart */
  XcmV2BodyPart: {
    _enum: {
      Voice: "Null",
      Members: {
        count: "Compact<u32>",
      },
      Fraction: {
        nom: "Compact<u32>",
        denom: "Compact<u32>",
      },
      AtLeastProportion: {
        nom: "Compact<u32>",
        denom: "Compact<u32>",
      },
      MoreThanProportion: {
        nom: "Compact<u32>",
        denom: "Compact<u32>",
      },
    },
  },
  /** Lookup144: xcm::v2::multiasset::Fungibility */
  XcmV2MultiassetFungibility: {
    _enum: {
      Fungible: "Compact<u128>",
      NonFungible: "XcmV2MultiassetAssetInstance",
    },
  },
  /** Lookup145: xcm::v2::multiasset::AssetInstance */
  XcmV2MultiassetAssetInstance: {
    _enum: {
      Undefined: "Null",
      Index: "Compact<u128>",
      Array4: "[u8;4]",
      Array8: "[u8;8]",
      Array16: "[u8;16]",
      Array32: "[u8;32]",
      Blob: "Bytes",
    },
  },
  /** Lookup146: xcm::VersionedMultiLocation */
  XcmVersionedMultiLocation: {
    _enum: {
      __Unused0: "Null",
      V2: "XcmV2MultiLocation",
      __Unused2: "Null",
      V3: "XcmV3MultiLocation",
    },
  },
  /** Lookup147: cumulus_pallet_xcm::pallet::Event<T> */
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: "[u8;32]",
      UnsupportedVersion: "[u8;32]",
      ExecutedDownward: "([u8;32],XcmV3TraitsOutcome)",
    },
  },
  /** Lookup148: cumulus_pallet_xcmp_queue::pallet::Event<T> */
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: "Option<[u8;32]>",
        weight: "SpWeightsWeightV2Weight",
      },
      Fail: {
        messageHash: "Option<[u8;32]>",
        error: "XcmV3TraitsError",
        weight: "SpWeightsWeightV2Weight",
      },
      BadVersion: {
        messageHash: "Option<[u8;32]>",
      },
      BadFormat: {
        messageHash: "Option<[u8;32]>",
      },
      XcmpMessageSent: {
        messageHash: "Option<[u8;32]>",
      },
      OverweightEnqueued: {
        sender: "u32",
        sentAt: "u32",
        index: "u64",
        required: "SpWeightsWeightV2Weight",
      },
      OverweightServiced: {
        index: "u64",
        used: "SpWeightsWeightV2Weight",
      },
    },
  },
  /** Lookup150: cumulus_pallet_dmp_queue::pallet::Event<T> */
  CumulusPalletDmpQueueEvent: {
    _enum: {
      InvalidFormat: {
        messageId: "[u8;32]",
      },
      UnsupportedVersion: {
        messageId: "[u8;32]",
      },
      ExecutedDownward: {
        messageId: "[u8;32]",
        outcome: "XcmV3TraitsOutcome",
      },
      WeightExhausted: {
        messageId: "[u8;32]",
        remainingWeight: "SpWeightsWeightV2Weight",
        requiredWeight: "SpWeightsWeightV2Weight",
      },
      OverweightEnqueued: {
        messageId: "[u8;32]",
        overweightIndex: "u64",
        requiredWeight: "SpWeightsWeightV2Weight",
      },
      OverweightServiced: {
        overweightIndex: "u64",
        weightUsed: "SpWeightsWeightV2Weight",
      },
      MaxMessagesExhausted: {
        messageId: "[u8;32]",
      },
    },
  },
  /** Lookup151: orml_xcm::module::Event<T> */
  OrmlXcmModuleEvent: {
    _enum: {
      Sent: {
        to: "XcmV3MultiLocation",
        message: "XcmV3Xcm",
      },
    },
  },
  /** Lookup152: orml_xtokens::module::Event<T> */
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: "AccountId32",
        assets: "XcmV3MultiassetMultiAssets",
        fee: "XcmV3MultiAsset",
        dest: "XcmV3MultiLocation",
      },
    },
  },
  /** Lookup153: orml_unknown_tokens::module::Event */
  OrmlUnknownTokensModuleEvent: {
    _enum: {
      Deposited: {
        asset: "XcmV3MultiAsset",
        who: "XcmV3MultiLocation",
      },
      Withdrawn: {
        asset: "XcmV3MultiAsset",
        who: "XcmV3MultiLocation",
      },
    },
  },
  /** Lookup154: pallet_collator_selection::pallet::Event<T> */
  PalletCollatorSelectionEvent: {
    _enum: {
      NewInvulnerables: {
        invulnerables: "Vec<AccountId32>",
      },
      NewDesiredCandidates: {
        desiredCandidates: "u32",
      },
      NewCandidacyBond: {
        bondAmount: "u128",
      },
      CandidateAdded: {
        accountId: "AccountId32",
        deposit: "u128",
      },
      CandidateRemoved: {
        accountId: "AccountId32",
      },
    },
  },
  /** Lookup156: pallet_session::pallet::Event */
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: "u32",
      },
    },
  },
  /** Lookup157: pallet_relaychain_info::pallet::Event<T> */
  PalletRelaychainInfoEvent: {
    _enum: {
      CurrentBlockNumbers: {
        parachainBlockNumber: "u32",
        relaychainBlockNumber: "u32",
      },
    },
  },
  /** Lookup158: pallet_ema_oracle::pallet::Event<T> */
  PalletEmaOracleEvent: "Null",
  /** Lookup159: pallet_transaction_multi_payment::pallet::Event<T> */
  PalletTransactionMultiPaymentEvent: {
    _enum: {
      CurrencySet: {
        accountId: "AccountId32",
        assetId: "u32",
      },
      CurrencyAdded: {
        assetId: "u32",
      },
      CurrencyRemoved: {
        assetId: "u32",
      },
      FeeWithdrawn: {
        accountId: "AccountId32",
        assetId: "u32",
        nativeFeeAmount: "u128",
        nonNativeFeeAmount: "u128",
        destinationAccountId: "AccountId32",
      },
    },
  },
  /** Lookup160: frame_system::Phase */
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: "u32",
      Finalization: "Null",
      Initialization: "Null",
    },
  },
  /** Lookup163: frame_system::LastRuntimeUpgradeInfo */
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: "Compact<u32>",
    specName: "Text",
  },
  /** Lookup165: frame_system::pallet::Call<T> */
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: "Bytes",
      },
      set_heap_pages: {
        pages: "u64",
      },
      set_code: {
        code: "Bytes",
      },
      set_code_without_checks: {
        code: "Bytes",
      },
      set_storage: {
        items: "Vec<(Bytes,Bytes)>",
      },
      kill_storage: {
        _alias: {
          keys_: "keys",
        },
        keys_: "Vec<Bytes>",
      },
      kill_prefix: {
        prefix: "Bytes",
        subkeys: "u32",
      },
      remark_with_event: {
        remark: "Bytes",
      },
    },
  },
  /** Lookup169: frame_system::limits::BlockWeights */
  FrameSystemLimitsBlockWeights: {
    baseBlock: "SpWeightsWeightV2Weight",
    maxBlock: "SpWeightsWeightV2Weight",
    perClass: "FrameSupportDispatchPerDispatchClassWeightsPerClass",
  },
  /**
   * Lookup170:
   * frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   */
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: "FrameSystemLimitsWeightsPerClass",
    operational: "FrameSystemLimitsWeightsPerClass",
    mandatory: "FrameSystemLimitsWeightsPerClass",
  },
  /** Lookup171: frame_system::limits::WeightsPerClass */
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: "SpWeightsWeightV2Weight",
    maxExtrinsic: "Option<SpWeightsWeightV2Weight>",
    maxTotal: "Option<SpWeightsWeightV2Weight>",
    reserved: "Option<SpWeightsWeightV2Weight>",
  },
  /** Lookup173: frame_system::limits::BlockLength */
  FrameSystemLimitsBlockLength: {
    max: "FrameSupportDispatchPerDispatchClassU32",
  },
  /** Lookup174: frame_support::dispatch::PerDispatchClass<T> */
  FrameSupportDispatchPerDispatchClassU32: {
    normal: "u32",
    operational: "u32",
    mandatory: "u32",
  },
  /** Lookup175: sp_weights::RuntimeDbWeight */
  SpWeightsRuntimeDbWeight: {
    read: "u64",
    write: "u64",
  },
  /** Lookup176: sp_version::RuntimeVersion */
  SpVersionRuntimeVersion: {
    specName: "Text",
    implName: "Text",
    authoringVersion: "u32",
    specVersion: "u32",
    implVersion: "u32",
    apis: "Vec<([u8;8],u32)>",
    transactionVersion: "u32",
    stateVersion: "u8",
  },
  /** Lookup180: frame_system::pallet::Error<T> */
  FrameSystemError: {
    _enum: [
      "InvalidSpecName",
      "SpecVersionNeedsToIncrease",
      "FailedToExtractRuntimeVersion",
      "NonDefaultComposite",
      "NonZeroRefCount",
      "CallFiltered",
    ],
  },
  /** Lookup181: pallet_timestamp::pallet::Call<T> */
  PalletTimestampCall: {
    _enum: {
      set: {
        now: "Compact<u64>",
      },
    },
  },
  /** Lookup183: pallet_balances::BalanceLock<Balance> */
  PalletBalancesBalanceLock: {
    id: "[u8;8]",
    amount: "u128",
    reasons: "PalletBalancesReasons",
  },
  /** Lookup184: pallet_balances::Reasons */
  PalletBalancesReasons: {
    _enum: ["Fee", "Misc", "All"],
  },
  /** Lookup187: pallet_balances::ReserveData<ReserveIdentifier, Balance> */
  PalletBalancesReserveData: {
    id: "[u8;8]",
    amount: "u128",
  },
  /** Lookup189: pallet_balances::pallet::Call<T, I> */
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: "AccountId32",
        value: "Compact<u128>",
      },
      set_balance: {
        who: "AccountId32",
        newFree: "Compact<u128>",
        newReserved: "Compact<u128>",
      },
      force_transfer: {
        source: "AccountId32",
        dest: "AccountId32",
        value: "Compact<u128>",
      },
      transfer_keep_alive: {
        dest: "AccountId32",
        value: "Compact<u128>",
      },
      transfer_all: {
        dest: "AccountId32",
        keepAlive: "bool",
      },
      force_unreserve: {
        who: "AccountId32",
        amount: "u128",
      },
    },
  },
  /** Lookup190: pallet_balances::pallet::Error<T, I> */
  PalletBalancesError: {
    _enum: [
      "VestingBalance",
      "LiquidityRestrictions",
      "InsufficientBalance",
      "ExistentialDeposit",
      "KeepAlive",
      "ExistingVestingSchedule",
      "DeadAccount",
      "TooManyReserves",
    ],
  },
  /** Lookup191: pallet_transaction_payment::Releases */
  PalletTransactionPaymentReleases: {
    _enum: ["V1Ancient", "V2"],
  },
  /** Lookup192: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance> */
  PalletTreasuryProposal: {
    proposer: "AccountId32",
    value: "u128",
    beneficiary: "AccountId32",
    bond: "u128",
  },
  /** Lookup195: pallet_treasury::pallet::Call<T, I> */
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: "Compact<u128>",
        beneficiary: "AccountId32",
      },
      reject_proposal: {
        proposalId: "Compact<u32>",
      },
      approve_proposal: {
        proposalId: "Compact<u32>",
      },
      spend: {
        amount: "Compact<u128>",
        beneficiary: "AccountId32",
      },
      remove_approval: {
        proposalId: "Compact<u32>",
      },
    },
  },
  /** Lookup196: frame_support::PalletId */
  FrameSupportPalletId: "[u8;8]",
  /** Lookup197: pallet_treasury::pallet::Error<T, I> */
  PalletTreasuryError: {
    _enum: [
      "InsufficientProposersBalance",
      "InvalidIndex",
      "TooManyApprovals",
      "InsufficientPermission",
      "ProposalNotApproved",
    ],
  },
  /** Lookup198: pallet_utility::pallet::Call<T> */
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: "Vec<Call>",
      },
      as_derivative: {
        index: "u16",
        call: "Call",
      },
      batch_all: {
        calls: "Vec<Call>",
      },
      dispatch_as: {
        asOrigin: "HydradxRuntimeOriginCaller",
        call: "Call",
      },
      force_batch: {
        calls: "Vec<Call>",
      },
      with_weight: {
        call: "Call",
        weight: "SpWeightsWeightV2Weight",
      },
    },
  },
  /** Lookup201: pallet_preimage::pallet::Call<T> */
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: "Bytes",
      },
      unnote_preimage: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
      },
      request_preimage: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
      },
      unrequest_preimage: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
      },
    },
  },
  /** Lookup202: pallet_identity::pallet::Call<T> */
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: "AccountId32",
      },
      set_identity: {
        info: "PalletIdentityIdentityInfo",
      },
      set_subs: {
        subs: "Vec<(AccountId32,Data)>",
      },
      clear_identity: "Null",
      request_judgement: {
        regIndex: "Compact<u32>",
        maxFee: "Compact<u128>",
      },
      cancel_request: {
        regIndex: "u32",
      },
      set_fee: {
        index: "Compact<u32>",
        fee: "Compact<u128>",
      },
      set_account_id: {
        _alias: {
          new_: "new",
        },
        index: "Compact<u32>",
        new_: "AccountId32",
      },
      set_fields: {
        index: "Compact<u32>",
        fields: "PalletIdentityBitFlags",
      },
      provide_judgement: {
        regIndex: "Compact<u32>",
        target: "AccountId32",
        judgement: "PalletIdentityJudgement",
        identity: "H256",
      },
      kill_identity: {
        target: "AccountId32",
      },
      add_sub: {
        sub: "AccountId32",
        data: "Data",
      },
      rename_sub: {
        sub: "AccountId32",
        data: "Data",
      },
      remove_sub: {
        sub: "AccountId32",
      },
      quit_sub: "Null",
    },
  },
  /** Lookup203: pallet_identity::types::IdentityInfo<FieldLimit> */
  PalletIdentityIdentityInfo: {
    additional: "Vec<(Data,Data)>",
    display: "Data",
    legal: "Data",
    web: "Data",
    riot: "Data",
    email: "Data",
    pgpFingerprint: "Option<[u8;20]>",
    image: "Data",
    twitter: "Data",
  },
  /** Lookup239: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField> */
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128,
  },
  /** Lookup240: pallet_identity::types::IdentityField */
  PalletIdentityIdentityField: {
    _enum: [
      "__Unused0",
      "Display",
      "Legal",
      "__Unused3",
      "Web",
      "__Unused5",
      "__Unused6",
      "__Unused7",
      "Riot",
      "__Unused9",
      "__Unused10",
      "__Unused11",
      "__Unused12",
      "__Unused13",
      "__Unused14",
      "__Unused15",
      "Email",
      "__Unused17",
      "__Unused18",
      "__Unused19",
      "__Unused20",
      "__Unused21",
      "__Unused22",
      "__Unused23",
      "__Unused24",
      "__Unused25",
      "__Unused26",
      "__Unused27",
      "__Unused28",
      "__Unused29",
      "__Unused30",
      "__Unused31",
      "PgpFingerprint",
      "__Unused33",
      "__Unused34",
      "__Unused35",
      "__Unused36",
      "__Unused37",
      "__Unused38",
      "__Unused39",
      "__Unused40",
      "__Unused41",
      "__Unused42",
      "__Unused43",
      "__Unused44",
      "__Unused45",
      "__Unused46",
      "__Unused47",
      "__Unused48",
      "__Unused49",
      "__Unused50",
      "__Unused51",
      "__Unused52",
      "__Unused53",
      "__Unused54",
      "__Unused55",
      "__Unused56",
      "__Unused57",
      "__Unused58",
      "__Unused59",
      "__Unused60",
      "__Unused61",
      "__Unused62",
      "__Unused63",
      "Image",
      "__Unused65",
      "__Unused66",
      "__Unused67",
      "__Unused68",
      "__Unused69",
      "__Unused70",
      "__Unused71",
      "__Unused72",
      "__Unused73",
      "__Unused74",
      "__Unused75",
      "__Unused76",
      "__Unused77",
      "__Unused78",
      "__Unused79",
      "__Unused80",
      "__Unused81",
      "__Unused82",
      "__Unused83",
      "__Unused84",
      "__Unused85",
      "__Unused86",
      "__Unused87",
      "__Unused88",
      "__Unused89",
      "__Unused90",
      "__Unused91",
      "__Unused92",
      "__Unused93",
      "__Unused94",
      "__Unused95",
      "__Unused96",
      "__Unused97",
      "__Unused98",
      "__Unused99",
      "__Unused100",
      "__Unused101",
      "__Unused102",
      "__Unused103",
      "__Unused104",
      "__Unused105",
      "__Unused106",
      "__Unused107",
      "__Unused108",
      "__Unused109",
      "__Unused110",
      "__Unused111",
      "__Unused112",
      "__Unused113",
      "__Unused114",
      "__Unused115",
      "__Unused116",
      "__Unused117",
      "__Unused118",
      "__Unused119",
      "__Unused120",
      "__Unused121",
      "__Unused122",
      "__Unused123",
      "__Unused124",
      "__Unused125",
      "__Unused126",
      "__Unused127",
      "Twitter",
    ],
  },
  /** Lookup241: pallet_identity::types::Judgement<Balance> */
  PalletIdentityJudgement: {
    _enum: {
      Unknown: "Null",
      FeePaid: "u128",
      Reasonable: "Null",
      KnownGood: "Null",
      OutOfDate: "Null",
      LowQuality: "Null",
      Erroneous: "Null",
    },
  },
  /** Lookup242: pallet_democracy::pallet::Call<T> */
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: "FrameSupportPreimagesBounded",
        value: "Compact<u128>",
      },
      second: {
        proposal: "Compact<u32>",
      },
      vote: {
        refIndex: "Compact<u32>",
        vote: "PalletDemocracyVoteAccountVote",
      },
      emergency_cancel: {
        refIndex: "u32",
      },
      external_propose: {
        proposal: "FrameSupportPreimagesBounded",
      },
      external_propose_majority: {
        proposal: "FrameSupportPreimagesBounded",
      },
      external_propose_default: {
        proposal: "FrameSupportPreimagesBounded",
      },
      fast_track: {
        proposalHash: "H256",
        votingPeriod: "u32",
        delay: "u32",
      },
      veto_external: {
        proposalHash: "H256",
      },
      cancel_referendum: {
        refIndex: "Compact<u32>",
      },
      delegate: {
        to: "AccountId32",
        conviction: "PalletDemocracyConviction",
        balance: "u128",
      },
      undelegate: "Null",
      clear_public_proposals: "Null",
      unlock: {
        target: "AccountId32",
      },
      remove_vote: {
        index: "u32",
      },
      remove_other_vote: {
        target: "AccountId32",
        index: "u32",
      },
      blacklist: {
        proposalHash: "H256",
        maybeRefIndex: "Option<u32>",
      },
      cancel_proposal: {
        propIndex: "Compact<u32>",
      },
    },
  },
  /** Lookup243: frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall> */
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
      },
      Inline: "Bytes",
      Lookup: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
        len: "u32",
      },
    },
  },
  /** Lookup245: pallet_democracy::conviction::Conviction */
  PalletDemocracyConviction: {
    _enum: [
      "None",
      "Locked1x",
      "Locked2x",
      "Locked3x",
      "Locked4x",
      "Locked5x",
      "Locked6x",
    ],
  },
  /** Lookup247: pallet_elections_phragmen::pallet::Call<T> */
  PalletElectionsPhragmenCall: {
    _enum: {
      vote: {
        votes: "Vec<AccountId32>",
        value: "Compact<u128>",
      },
      remove_voter: "Null",
      submit_candidacy: {
        candidateCount: "Compact<u32>",
      },
      renounce_candidacy: {
        renouncing: "PalletElectionsPhragmenRenouncing",
      },
      remove_member: {
        who: "AccountId32",
        slashBond: "bool",
        rerunElection: "bool",
      },
      clean_defunct_voters: {
        numVoters: "u32",
        numDefunct: "u32",
      },
    },
  },
  /** Lookup248: pallet_elections_phragmen::Renouncing */
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: "Null",
      RunnerUp: "Null",
      Candidate: "Compact<u32>",
    },
  },
  /** Lookup249: pallet_collective::pallet::Call<T, I> */
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: "Vec<AccountId32>",
        prime: "Option<AccountId32>",
        oldCount: "u32",
      },
      execute: {
        proposal: "Call",
        lengthBound: "Compact<u32>",
      },
      propose: {
        threshold: "Compact<u32>",
        proposal: "Call",
        lengthBound: "Compact<u32>",
      },
      vote: {
        proposal: "H256",
        index: "Compact<u32>",
        approve: "bool",
      },
      close_old_weight: {
        proposalHash: "H256",
        index: "Compact<u32>",
        proposalWeightBound: "Compact<u64>",
        lengthBound: "Compact<u32>",
      },
      disapprove_proposal: {
        proposalHash: "H256",
      },
      close: {
        proposalHash: "H256",
        index: "Compact<u32>",
        proposalWeightBound: "SpWeightsWeightV2Weight",
        lengthBound: "Compact<u32>",
      },
    },
  },
  /** Lookup253: pallet_tips::pallet::Call<T, I> */
  PalletTipsCall: {
    _enum: {
      report_awesome: {
        reason: "Bytes",
        who: "AccountId32",
      },
      retract_tip: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
      },
      tip_new: {
        reason: "Bytes",
        who: "AccountId32",
        tipValue: "Compact<u128>",
      },
      tip: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
        tipValue: "Compact<u128>",
      },
      close_tip: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
      },
      slash_tip: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
      },
    },
  },
  /** Lookup254: pallet_proxy::pallet::Call<T> */
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: "AccountId32",
        forceProxyType: "Option<CommonRuntimeProxyType>",
        call: "Call",
      },
      add_proxy: {
        delegate: "AccountId32",
        proxyType: "CommonRuntimeProxyType",
        delay: "u32",
      },
      remove_proxy: {
        delegate: "AccountId32",
        proxyType: "CommonRuntimeProxyType",
        delay: "u32",
      },
      remove_proxies: "Null",
      create_pure: {
        proxyType: "CommonRuntimeProxyType",
        delay: "u32",
        index: "u16",
      },
      kill_pure: {
        spawner: "AccountId32",
        proxyType: "CommonRuntimeProxyType",
        index: "u16",
        height: "Compact<u32>",
        extIndex: "Compact<u32>",
      },
      announce: {
        real: "AccountId32",
        callHash: "H256",
      },
      remove_announcement: {
        real: "AccountId32",
        callHash: "H256",
      },
      reject_announcement: {
        delegate: "AccountId32",
        callHash: "H256",
      },
      proxy_announced: {
        delegate: "AccountId32",
        real: "AccountId32",
        forceProxyType: "Option<CommonRuntimeProxyType>",
        call: "Call",
      },
    },
  },
  /** Lookup256: pallet_multisig::pallet::Call<T> */
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: "Vec<AccountId32>",
        call: "Call",
      },
      as_multi: {
        threshold: "u16",
        otherSignatories: "Vec<AccountId32>",
        maybeTimepoint: "Option<PalletMultisigTimepoint>",
        call: "Call",
        maxWeight: "SpWeightsWeightV2Weight",
      },
      approve_as_multi: {
        threshold: "u16",
        otherSignatories: "Vec<AccountId32>",
        maybeTimepoint: "Option<PalletMultisigTimepoint>",
        callHash: "[u8;32]",
        maxWeight: "SpWeightsWeightV2Weight",
      },
      cancel_as_multi: {
        threshold: "u16",
        otherSignatories: "Vec<AccountId32>",
        timepoint: "PalletMultisigTimepoint",
        callHash: "[u8;32]",
      },
    },
  },
  /** Lookup258: pallet_uniques::pallet::Call<T, I> */
  PalletUniquesCall: {
    _enum: {
      create: {
        collection: "u128",
        admin: "AccountId32",
      },
      force_create: {
        collection: "u128",
        owner: "AccountId32",
        freeHolding: "bool",
      },
      destroy: {
        collection: "u128",
        witness: "PalletUniquesDestroyWitness",
      },
      mint: {
        collection: "u128",
        item: "u128",
        owner: "AccountId32",
      },
      burn: {
        collection: "u128",
        item: "u128",
        checkOwner: "Option<AccountId32>",
      },
      transfer: {
        collection: "u128",
        item: "u128",
        dest: "AccountId32",
      },
      redeposit: {
        collection: "u128",
        items: "Vec<u128>",
      },
      freeze: {
        collection: "u128",
        item: "u128",
      },
      thaw: {
        collection: "u128",
        item: "u128",
      },
      freeze_collection: {
        collection: "u128",
      },
      thaw_collection: {
        collection: "u128",
      },
      transfer_ownership: {
        collection: "u128",
        owner: "AccountId32",
      },
      set_team: {
        collection: "u128",
        issuer: "AccountId32",
        admin: "AccountId32",
        freezer: "AccountId32",
      },
      approve_transfer: {
        collection: "u128",
        item: "u128",
        delegate: "AccountId32",
      },
      cancel_approval: {
        collection: "u128",
        item: "u128",
        maybeCheckDelegate: "Option<AccountId32>",
      },
      force_item_status: {
        collection: "u128",
        owner: "AccountId32",
        issuer: "AccountId32",
        admin: "AccountId32",
        freezer: "AccountId32",
        freeHolding: "bool",
        isFrozen: "bool",
      },
      set_attribute: {
        collection: "u128",
        maybeItem: "Option<u128>",
        key: "Bytes",
        value: "Bytes",
      },
      clear_attribute: {
        collection: "u128",
        maybeItem: "Option<u128>",
        key: "Bytes",
      },
      set_metadata: {
        collection: "u128",
        item: "u128",
        data: "Bytes",
        isFrozen: "bool",
      },
      clear_metadata: {
        collection: "u128",
        item: "u128",
      },
      set_collection_metadata: {
        collection: "u128",
        data: "Bytes",
        isFrozen: "bool",
      },
      clear_collection_metadata: {
        collection: "u128",
      },
      set_accept_ownership: {
        maybeCollection: "Option<u128>",
      },
      set_collection_max_supply: {
        collection: "u128",
        maxSupply: "u32",
      },
      set_price: {
        collection: "u128",
        item: "u128",
        price: "Option<u128>",
        whitelistedBuyer: "Option<AccountId32>",
      },
      buy_item: {
        collection: "u128",
        item: "u128",
        bidPrice: "u128",
      },
    },
  },
  /** Lookup259: pallet_uniques::types::DestroyWitness */
  PalletUniquesDestroyWitness: {
    items: "Compact<u32>",
    itemMetadatas: "Compact<u32>",
    attributes: "Compact<u32>",
  },
  /** Lookup260: pallet_asset_registry::pallet::Call<T> */
  PalletAssetRegistryCall: {
    _enum: {
      register: {
        name: "Bytes",
        assetType: "PalletAssetRegistryAssetType",
        existentialDeposit: "u128",
        assetId: "Option<u32>",
        metadata: "Option<PalletAssetRegistryMetadata>",
        location: "Option<HydradxRuntimeAssetLocation>",
        xcmRateLimit: "Option<u128>",
      },
      update: {
        assetId: "u32",
        name: "Bytes",
        assetType: "PalletAssetRegistryAssetType",
        existentialDeposit: "Option<u128>",
        xcmRateLimit: "Option<u128>",
      },
      set_metadata: {
        assetId: "u32",
        symbol: "Bytes",
        decimals: "u8",
      },
      set_location: {
        assetId: "u32",
        location: "HydradxRuntimeAssetLocation",
      },
    },
  },
  /** Lookup262: pallet_asset_registry::types::Metadata */
  PalletAssetRegistryMetadata: {
    symbol: "Bytes",
    decimals: "u8",
  },
  /** Lookup264: pallet_claims::pallet::Call<T> */
  PalletClaimsCall: {
    _enum: {
      claim: {
        ethereumSignature: "PalletClaimsEcdsaSignature",
      },
    },
  },
  /** Lookup265: pallet_claims::traits::EcdsaSignature */
  PalletClaimsEcdsaSignature: "[u8;65]",
  /** Lookup267: pallet_genesis_history::pallet::Call<T> */
  PalletGenesisHistoryCall: "Null",
  /** Lookup268: pallet_omnipool::pallet::Call<T> */
  PalletOmnipoolCall: {
    _enum: {
      initialize_pool: {
        stableAssetPrice: "u128",
        nativeAssetPrice: "u128",
        stableWeightCap: "Permill",
        nativeWeightCap: "Permill",
      },
      add_token: {
        asset: "u32",
        initialPrice: "u128",
        weightCap: "Permill",
        positionOwner: "AccountId32",
      },
      add_liquidity: {
        asset: "u32",
        amount: "u128",
      },
      remove_liquidity: {
        positionId: "u128",
        amount: "u128",
      },
      sacrifice_position: {
        positionId: "u128",
      },
      sell: {
        assetIn: "u32",
        assetOut: "u32",
        amount: "u128",
        minBuyAmount: "u128",
      },
      buy: {
        assetOut: "u32",
        assetIn: "u32",
        amount: "u128",
        maxSellAmount: "u128",
      },
      set_asset_tradable_state: {
        assetId: "u32",
        state: "PalletOmnipoolTradability",
      },
      refund_refused_asset: {
        assetId: "u32",
        amount: "u128",
        recipient: "AccountId32",
      },
      set_asset_weight_cap: {
        assetId: "u32",
        cap: "Permill",
      },
      set_tvl_cap: {
        cap: "u128",
      },
    },
  },
  /** Lookup269: pallet_transaction_pause::pallet::Call<T> */
  PalletTransactionPauseCall: {
    _enum: {
      pause_transaction: {
        palletName: "Bytes",
        functionName: "Bytes",
      },
      unpause_transaction: {
        palletName: "Bytes",
        functionName: "Bytes",
      },
    },
  },
  /** Lookup270: pallet_duster::pallet::Call<T> */
  PalletDusterCall: {
    _enum: {
      dust_account: {
        account: "AccountId32",
        currencyId: "u32",
      },
      add_nondustable_account: {
        account: "AccountId32",
      },
      remove_nondustable_account: {
        account: "AccountId32",
      },
    },
  },
  /** Lookup271: pallet_liquidity_mining::pallet::Call<T, I> */
  PalletLiquidityMiningCall: "Null",
  /** Lookup272: pallet_omnipool_liquidity_mining::pallet::Call<T> */
  PalletOmnipoolLiquidityMiningCall: {
    _enum: {
      create_global_farm: {
        totalRewards: "u128",
        plannedYieldingPeriods: "u32",
        blocksPerPeriod: "u32",
        rewardCurrency: "u32",
        owner: "AccountId32",
        yieldPerPeriod: "Perquintill",
        minDeposit: "u128",
        lrnaPriceAdjustment: "u128",
      },
      __Unused1: "Null",
      terminate_global_farm: {
        globalFarmId: "u32",
      },
      create_yield_farm: {
        globalFarmId: "u32",
        assetId: "u32",
        multiplier: "u128",
        loyaltyCurve: "Option<PalletLiquidityMiningLoyaltyCurve>",
      },
      update_yield_farm: {
        globalFarmId: "u32",
        assetId: "u32",
        multiplier: "u128",
      },
      stop_yield_farm: {
        globalFarmId: "u32",
        assetId: "u32",
      },
      resume_yield_farm: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetId: "u32",
        multiplier: "u128",
      },
      terminate_yield_farm: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetId: "u32",
      },
      deposit_shares: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        positionId: "u128",
      },
      redeposit_shares: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        depositId: "u128",
      },
      claim_rewards: {
        depositId: "u128",
        yieldFarmId: "u32",
      },
      withdraw_shares: {
        depositId: "u128",
        yieldFarmId: "u32",
      },
    },
  },
  /** Lookup273: pallet_otc::pallet::Call<T> */
  PalletOtcCall: {
    _enum: {
      place_order: {
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        amountOut: "u128",
        partiallyFillable: "bool",
      },
      partial_fill_order: {
        orderId: "u32",
        amountIn: "u128",
      },
      fill_order: {
        orderId: "u32",
      },
      cancel_order: {
        orderId: "u32",
      },
    },
  },
  /** Lookup274: pallet_circuit_breaker::pallet::Call<T> */
  PalletCircuitBreakerCall: {
    _enum: {
      set_trade_volume_limit: {
        assetId: "u32",
        tradeVolumeLimit: "(u32,u32)",
      },
      set_add_liquidity_limit: {
        assetId: "u32",
        liquidityLimit: "Option<(u32,u32)>",
      },
      set_remove_liquidity_limit: {
        assetId: "u32",
        liquidityLimit: "Option<(u32,u32)>",
      },
    },
  },
  /** Lookup275: pallet_route_executor::pallet::Call<T> */
  PalletRouteExecutorCall: {
    _enum: {
      sell: {
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        minAmountOut: "u128",
        route: "Vec<PalletRouteExecutorTrade>",
      },
      buy: {
        assetIn: "u32",
        assetOut: "u32",
        amountOut: "u128",
        maxAmountIn: "u128",
        route: "Vec<PalletRouteExecutorTrade>",
      },
    },
  },
  /** Lookup277: pallet_route_executor::Trade<AssetId> */
  PalletRouteExecutorTrade: {
    pool: "HydradxTraitsRouterPoolType",
    assetIn: "u32",
    assetOut: "u32",
  },
  /** Lookup278: hydradx_traits::router::PoolType<AssetId> */
  HydradxTraitsRouterPoolType: {
    _enum: {
      XYK: "Null",
      LBP: "Null",
      Stableswap: "u32",
      Omnipool: "Null",
    },
  },
  /** Lookup279: orml_tokens::module::Call<T> */
  OrmlTokensModuleCall: {
    _enum: {
      transfer: {
        dest: "AccountId32",
        currencyId: "u32",
        amount: "Compact<u128>",
      },
      transfer_all: {
        dest: "AccountId32",
        currencyId: "u32",
        keepAlive: "bool",
      },
      transfer_keep_alive: {
        dest: "AccountId32",
        currencyId: "u32",
        amount: "Compact<u128>",
      },
      force_transfer: {
        source: "AccountId32",
        dest: "AccountId32",
        currencyId: "u32",
        amount: "Compact<u128>",
      },
      set_balance: {
        who: "AccountId32",
        currencyId: "u32",
        newFree: "Compact<u128>",
        newReserved: "Compact<u128>",
      },
    },
  },
  /** Lookup280: pallet_currencies::module::Call<T> */
  PalletCurrenciesModuleCall: {
    _enum: {
      transfer: {
        dest: "AccountId32",
        currencyId: "u32",
        amount: "Compact<u128>",
      },
      transfer_native_currency: {
        dest: "AccountId32",
        amount: "Compact<u128>",
      },
      update_balance: {
        who: "AccountId32",
        currencyId: "u32",
        amount: "i128",
      },
    },
  },
  /** Lookup281: orml_vesting::module::Call<T> */
  OrmlVestingModuleCall: {
    _enum: {
      claim: "Null",
      vested_transfer: {
        dest: "AccountId32",
        schedule: "OrmlVestingVestingSchedule",
      },
      update_vesting_schedules: {
        who: "AccountId32",
        vestingSchedules: "Vec<OrmlVestingVestingSchedule>",
      },
      claim_for: {
        dest: "AccountId32",
      },
    },
  },
  /** Lookup283: cumulus_pallet_parachain_system::pallet::Call<T> */
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: "CumulusPrimitivesParachainInherentParachainInherentData",
      },
      sudo_send_upward_message: {
        message: "Bytes",
      },
      authorize_upgrade: {
        codeHash: "H256",
      },
      enact_authorized_upgrade: {
        code: "Bytes",
      },
    },
  },
  /** Lookup284: cumulus_primitives_parachain_inherent::ParachainInherentData */
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: "PolkadotPrimitivesV2PersistedValidationData",
    relayChainState: "SpTrieStorageProof",
    downwardMessages: "Vec<PolkadotCorePrimitivesInboundDownwardMessage>",
    horizontalMessages:
      "BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>",
  },
  /** Lookup285: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N> */
  PolkadotPrimitivesV2PersistedValidationData: {
    parentHead: "Bytes",
    relayParentNumber: "u32",
    relayParentStorageRoot: "H256",
    maxPovSize: "u32",
  },
  /** Lookup287: sp_trie::storage_proof::StorageProof */
  SpTrieStorageProof: {
    trieNodes: "BTreeSet<Bytes>",
  },
  /** Lookup290: polkadot_core_primitives::InboundDownwardMessage<BlockNumber> */
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: "u32",
    msg: "Bytes",
  },
  /** Lookup293: polkadot_core_primitives::InboundHrmpMessage<BlockNumber> */
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: "u32",
    data: "Bytes",
  },
  /** Lookup296: parachain_info::pallet::Call<T> */
  ParachainInfoCall: "Null",
  /** Lookup297: pallet_scheduler::pallet::Call<T> */
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: "u32",
        maybePeriodic: "Option<(u32,u32)>",
        priority: "u8",
        call: "Call",
      },
      cancel: {
        when: "u32",
        index: "u32",
      },
      schedule_named: {
        id: "[u8;32]",
        when: "u32",
        maybePeriodic: "Option<(u32,u32)>",
        priority: "u8",
        call: "Call",
      },
      cancel_named: {
        id: "[u8;32]",
      },
      schedule_after: {
        after: "u32",
        maybePeriodic: "Option<(u32,u32)>",
        priority: "u8",
        call: "Call",
      },
      schedule_named_after: {
        id: "[u8;32]",
        after: "u32",
        maybePeriodic: "Option<(u32,u32)>",
        priority: "u8",
        call: "Call",
      },
    },
  },
  /** Lookup298: pallet_dca::pallet::Call<T> */
  PalletDcaCall: {
    _enum: {
      schedule: {
        schedule: "PalletDcaSchedule",
        startExecutionBlock: "Option<u32>",
      },
      terminate: {
        scheduleId: "u32",
        nextExecutionBlock: "Option<u32>",
      },
    },
  },
  /**
   * Lookup299: pallet_dca::types::Schedule<sp_core::crypto::AccountId32,
   * AssetId, BlockNumber>
   */
  PalletDcaSchedule: {
    owner: "AccountId32",
    period: "u32",
    totalAmount: "u128",
    order: "PalletDcaOrder",
  },
  /** Lookup300: pallet_dca::types::Order<AssetId> */
  PalletDcaOrder: {
    _enum: {
      Sell: {
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        minLimit: "u128",
        slippage: "Option<Permill>",
        route: "Vec<PalletRouteExecutorTrade>",
      },
      Buy: {
        assetIn: "u32",
        assetOut: "u32",
        amountOut: "u128",
        maxLimit: "u128",
        slippage: "Option<Permill>",
        route: "Vec<PalletRouteExecutorTrade>",
      },
    },
  },
  /** Lookup303: pallet_xcm::pallet::Call<T> */
  PalletXcmCall: {
    _enum: {
      send: {
        dest: "XcmVersionedMultiLocation",
        message: "XcmVersionedXcm",
      },
      teleport_assets: {
        dest: "XcmVersionedMultiLocation",
        beneficiary: "XcmVersionedMultiLocation",
        assets: "XcmVersionedMultiAssets",
        feeAssetItem: "u32",
      },
      reserve_transfer_assets: {
        dest: "XcmVersionedMultiLocation",
        beneficiary: "XcmVersionedMultiLocation",
        assets: "XcmVersionedMultiAssets",
        feeAssetItem: "u32",
      },
      execute: {
        message: "XcmVersionedXcm",
        maxWeight: "SpWeightsWeightV2Weight",
      },
      force_xcm_version: {
        location: "XcmV3MultiLocation",
        xcmVersion: "u32",
      },
      force_default_xcm_version: {
        maybeXcmVersion: "Option<u32>",
      },
      force_subscribe_version_notify: {
        location: "XcmVersionedMultiLocation",
      },
      force_unsubscribe_version_notify: {
        location: "XcmVersionedMultiLocation",
      },
      limited_reserve_transfer_assets: {
        dest: "XcmVersionedMultiLocation",
        beneficiary: "XcmVersionedMultiLocation",
        assets: "XcmVersionedMultiAssets",
        feeAssetItem: "u32",
        weightLimit: "XcmV3WeightLimit",
      },
      limited_teleport_assets: {
        dest: "XcmVersionedMultiLocation",
        beneficiary: "XcmVersionedMultiLocation",
        assets: "XcmVersionedMultiAssets",
        feeAssetItem: "u32",
        weightLimit: "XcmV3WeightLimit",
      },
    },
  },
  /** Lookup304: xcm::VersionedXcm<RuntimeCall> */
  XcmVersionedXcm: {
    _enum: {
      __Unused0: "Null",
      __Unused1: "Null",
      V2: "XcmV2Xcm",
      V3: "XcmV3Xcm",
    },
  },
  /** Lookup305: xcm::v2::Xcm<RuntimeCall> */
  XcmV2Xcm: "Vec<XcmV2Instruction>",
  /** Lookup307: xcm::v2::Instruction<RuntimeCall> */
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: "XcmV2MultiassetMultiAssets",
      ReserveAssetDeposited: "XcmV2MultiassetMultiAssets",
      ReceiveTeleportedAsset: "XcmV2MultiassetMultiAssets",
      QueryResponse: {
        queryId: "Compact<u64>",
        response: "XcmV2Response",
        maxWeight: "Compact<u64>",
      },
      TransferAsset: {
        assets: "XcmV2MultiassetMultiAssets",
        beneficiary: "XcmV2MultiLocation",
      },
      TransferReserveAsset: {
        assets: "XcmV2MultiassetMultiAssets",
        dest: "XcmV2MultiLocation",
        xcm: "XcmV2Xcm",
      },
      Transact: {
        originType: "XcmV2OriginKind",
        requireWeightAtMost: "Compact<u64>",
        call: "XcmDoubleEncoded",
      },
      HrmpNewChannelOpenRequest: {
        sender: "Compact<u32>",
        maxMessageSize: "Compact<u32>",
        maxCapacity: "Compact<u32>",
      },
      HrmpChannelAccepted: {
        recipient: "Compact<u32>",
      },
      HrmpChannelClosing: {
        initiator: "Compact<u32>",
        sender: "Compact<u32>",
        recipient: "Compact<u32>",
      },
      ClearOrigin: "Null",
      DescendOrigin: "XcmV2MultilocationJunctions",
      ReportError: {
        queryId: "Compact<u64>",
        dest: "XcmV2MultiLocation",
        maxResponseWeight: "Compact<u64>",
      },
      DepositAsset: {
        assets: "XcmV2MultiassetMultiAssetFilter",
        maxAssets: "Compact<u32>",
        beneficiary: "XcmV2MultiLocation",
      },
      DepositReserveAsset: {
        assets: "XcmV2MultiassetMultiAssetFilter",
        maxAssets: "Compact<u32>",
        dest: "XcmV2MultiLocation",
        xcm: "XcmV2Xcm",
      },
      ExchangeAsset: {
        give: "XcmV2MultiassetMultiAssetFilter",
        receive: "XcmV2MultiassetMultiAssets",
      },
      InitiateReserveWithdraw: {
        assets: "XcmV2MultiassetMultiAssetFilter",
        reserve: "XcmV2MultiLocation",
        xcm: "XcmV2Xcm",
      },
      InitiateTeleport: {
        assets: "XcmV2MultiassetMultiAssetFilter",
        dest: "XcmV2MultiLocation",
        xcm: "XcmV2Xcm",
      },
      QueryHolding: {
        queryId: "Compact<u64>",
        dest: "XcmV2MultiLocation",
        assets: "XcmV2MultiassetMultiAssetFilter",
        maxResponseWeight: "Compact<u64>",
      },
      BuyExecution: {
        fees: "XcmV2MultiAsset",
        weightLimit: "XcmV2WeightLimit",
      },
      RefundSurplus: "Null",
      SetErrorHandler: "XcmV2Xcm",
      SetAppendix: "XcmV2Xcm",
      ClearError: "Null",
      ClaimAsset: {
        assets: "XcmV2MultiassetMultiAssets",
        ticket: "XcmV2MultiLocation",
      },
      Trap: "Compact<u64>",
      SubscribeVersion: {
        queryId: "Compact<u64>",
        maxResponseWeight: "Compact<u64>",
      },
      UnsubscribeVersion: "Null",
    },
  },
  /** Lookup308: xcm::v2::Response */
  XcmV2Response: {
    _enum: {
      Null: "Null",
      Assets: "XcmV2MultiassetMultiAssets",
      ExecutionResult: "Option<(u32,XcmV2TraitsError)>",
      Version: "u32",
    },
  },
  /** Lookup311: xcm::v2::traits::Error */
  XcmV2TraitsError: {
    _enum: {
      Overflow: "Null",
      Unimplemented: "Null",
      UntrustedReserveLocation: "Null",
      UntrustedTeleportLocation: "Null",
      MultiLocationFull: "Null",
      MultiLocationNotInvertible: "Null",
      BadOrigin: "Null",
      InvalidLocation: "Null",
      AssetNotFound: "Null",
      FailedToTransactAsset: "Null",
      NotWithdrawable: "Null",
      LocationCannotHold: "Null",
      ExceedsMaxMessageSize: "Null",
      DestinationUnsupported: "Null",
      Transport: "Null",
      Unroutable: "Null",
      UnknownClaim: "Null",
      FailedToDecode: "Null",
      MaxWeightInvalid: "Null",
      NotHoldingFees: "Null",
      TooExpensive: "Null",
      Trap: "u64",
      UnhandledXcmVersion: "Null",
      WeightLimitReached: "u64",
      Barrier: "Null",
      WeightNotComputable: "Null",
    },
  },
  /** Lookup312: xcm::v2::multiasset::MultiAssetFilter */
  XcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: "XcmV2MultiassetMultiAssets",
      Wild: "XcmV2MultiassetWildMultiAsset",
    },
  },
  /** Lookup313: xcm::v2::multiasset::WildMultiAsset */
  XcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: "Null",
      AllOf: {
        id: "XcmV2MultiassetAssetId",
        fun: "XcmV2MultiassetWildFungibility",
      },
    },
  },
  /** Lookup314: xcm::v2::multiasset::WildFungibility */
  XcmV2MultiassetWildFungibility: {
    _enum: ["Fungible", "NonFungible"],
  },
  /** Lookup315: xcm::v2::WeightLimit */
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: "Null",
      Limited: "Compact<u64>",
    },
  },
  /** Lookup324: cumulus_pallet_xcm::pallet::Call<T> */
  CumulusPalletXcmCall: "Null",
  /** Lookup325: cumulus_pallet_dmp_queue::pallet::Call<T> */
  CumulusPalletDmpQueueCall: {
    _enum: {
      service_overweight: {
        index: "u64",
        weightLimit: "SpWeightsWeightV2Weight",
      },
    },
  },
  /** Lookup326: orml_xcm::module::Call<T> */
  OrmlXcmModuleCall: {
    _enum: {
      send_as_sovereign: {
        dest: "XcmVersionedMultiLocation",
        message: "XcmVersionedXcm",
      },
    },
  },
  /** Lookup327: orml_xtokens::module::Call<T> */
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: "u32",
        amount: "u128",
        dest: "XcmVersionedMultiLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
      transfer_multiasset: {
        asset: "XcmVersionedMultiAsset",
        dest: "XcmVersionedMultiLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
      transfer_with_fee: {
        currencyId: "u32",
        amount: "u128",
        fee: "u128",
        dest: "XcmVersionedMultiLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
      transfer_multiasset_with_fee: {
        asset: "XcmVersionedMultiAsset",
        fee: "XcmVersionedMultiAsset",
        dest: "XcmVersionedMultiLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
      transfer_multicurrencies: {
        currencies: "Vec<(u32,u128)>",
        feeItem: "u32",
        dest: "XcmVersionedMultiLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
      transfer_multiassets: {
        assets: "XcmVersionedMultiAssets",
        feeItem: "u32",
        dest: "XcmVersionedMultiLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
    },
  },
  /** Lookup328: xcm::VersionedMultiAsset */
  XcmVersionedMultiAsset: {
    _enum: {
      __Unused0: "Null",
      V2: "XcmV2MultiAsset",
      __Unused2: "Null",
      V3: "XcmV3MultiAsset",
    },
  },
  /** Lookup331: orml_unknown_tokens::module::Call<T> */
  OrmlUnknownTokensModuleCall: "Null",
  /** Lookup332: pallet_collator_selection::pallet::Call<T> */
  PalletCollatorSelectionCall: {
    _enum: {
      set_invulnerables: {
        _alias: {
          new_: "new",
        },
        new_: "Vec<AccountId32>",
      },
      set_desired_candidates: {
        max: "u32",
      },
      set_candidacy_bond: {
        bond: "u128",
      },
      register_as_candidate: "Null",
      leave_intent: "Null",
    },
  },
  /** Lookup333: pallet_session::pallet::Call<T> */
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: "keys",
        },
        keys_: "HydradxRuntimeOpaqueSessionKeys",
        proof: "Bytes",
      },
      purge_keys: "Null",
    },
  },
  /** Lookup334: hydradx_runtime::opaque::SessionKeys */
  HydradxRuntimeOpaqueSessionKeys: {
    aura: "SpConsensusAuraSr25519AppSr25519Public",
  },
  /** Lookup335: sp_consensus_aura::sr25519::app_sr25519::Public */
  SpConsensusAuraSr25519AppSr25519Public: "SpCoreSr25519Public",
  /** Lookup336: sp_core::sr25519::Public */
  SpCoreSr25519Public: "[u8;32]",
  /** Lookup337: pallet_relaychain_info::pallet::Call<T> */
  PalletRelaychainInfoCall: "Null",
  /** Lookup338: pallet_ema_oracle::pallet::Call<T> */
  PalletEmaOracleCall: "Null",
  /** Lookup339: pallet_transaction_multi_payment::pallet::Call<T> */
  PalletTransactionMultiPaymentCall: {
    _enum: {
      set_currency: {
        currency: "u32",
      },
      add_currency: {
        currency: "u32",
        price: "u128",
      },
      remove_currency: {
        currency: "u32",
      },
    },
  },
  /** Lookup340: hydradx_runtime::OriginCaller */
  HydradxRuntimeOriginCaller: {
    _enum: {
      __Unused0: "Null",
      system: "FrameSupportDispatchRawOrigin",
      __Unused2: "Null",
      __Unused3: "Null",
      __Unused4: "Null",
      Void: "SpCoreVoid",
      __Unused6: "Null",
      __Unused7: "Null",
      __Unused8: "Null",
      __Unused9: "Null",
      __Unused10: "Null",
      __Unused11: "Null",
      __Unused12: "Null",
      __Unused13: "Null",
      __Unused14: "Null",
      __Unused15: "Null",
      __Unused16: "Null",
      __Unused17: "Null",
      __Unused18: "Null",
      __Unused19: "Null",
      __Unused20: "Null",
      __Unused21: "Null",
      __Unused22: "Null",
      Council: "PalletCollectiveRawOrigin",
      __Unused24: "Null",
      TechnicalCommittee: "PalletCollectiveRawOrigin",
      __Unused26: "Null",
      __Unused27: "Null",
      __Unused28: "Null",
      __Unused29: "Null",
      __Unused30: "Null",
      __Unused31: "Null",
      __Unused32: "Null",
      __Unused33: "Null",
      __Unused34: "Null",
      __Unused35: "Null",
      __Unused36: "Null",
      __Unused37: "Null",
      __Unused38: "Null",
      __Unused39: "Null",
      __Unused40: "Null",
      __Unused41: "Null",
      __Unused42: "Null",
      __Unused43: "Null",
      __Unused44: "Null",
      __Unused45: "Null",
      __Unused46: "Null",
      __Unused47: "Null",
      __Unused48: "Null",
      __Unused49: "Null",
      __Unused50: "Null",
      __Unused51: "Null",
      __Unused52: "Null",
      __Unused53: "Null",
      __Unused54: "Null",
      __Unused55: "Null",
      __Unused56: "Null",
      __Unused57: "Null",
      __Unused58: "Null",
      __Unused59: "Null",
      __Unused60: "Null",
      __Unused61: "Null",
      __Unused62: "Null",
      __Unused63: "Null",
      __Unused64: "Null",
      __Unused65: "Null",
      __Unused66: "Null",
      __Unused67: "Null",
      __Unused68: "Null",
      __Unused69: "Null",
      __Unused70: "Null",
      __Unused71: "Null",
      __Unused72: "Null",
      __Unused73: "Null",
      __Unused74: "Null",
      __Unused75: "Null",
      __Unused76: "Null",
      __Unused77: "Null",
      __Unused78: "Null",
      __Unused79: "Null",
      __Unused80: "Null",
      __Unused81: "Null",
      __Unused82: "Null",
      __Unused83: "Null",
      __Unused84: "Null",
      __Unused85: "Null",
      __Unused86: "Null",
      __Unused87: "Null",
      __Unused88: "Null",
      __Unused89: "Null",
      __Unused90: "Null",
      __Unused91: "Null",
      __Unused92: "Null",
      __Unused93: "Null",
      __Unused94: "Null",
      __Unused95: "Null",
      __Unused96: "Null",
      __Unused97: "Null",
      __Unused98: "Null",
      __Unused99: "Null",
      __Unused100: "Null",
      __Unused101: "Null",
      __Unused102: "Null",
      __Unused103: "Null",
      __Unused104: "Null",
      __Unused105: "Null",
      __Unused106: "Null",
      PolkadotXcm: "PalletXcmOrigin",
      __Unused108: "Null",
      CumulusXcm: "CumulusPalletXcmOrigin",
    },
  },
  /** Lookup341: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32> */
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: "Null",
      Signed: "AccountId32",
      None: "Null",
    },
  },
  /** Lookup342: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I> */
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: "(u32,u32)",
      Member: "AccountId32",
      _Phantom: "Null",
    },
  },
  /** Lookup344: pallet_xcm::pallet::Origin */
  PalletXcmOrigin: {
    _enum: {
      Xcm: "XcmV3MultiLocation",
      Response: "XcmV3MultiLocation",
    },
  },
  /** Lookup345: cumulus_pallet_xcm::pallet::Origin */
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: "Null",
      SiblingParachain: "u32",
    },
  },
  /** Lookup346: sp_core::Void */
  SpCoreVoid: "Null",
  /** Lookup347: pallet_utility::pallet::Error<T> */
  PalletUtilityError: {
    _enum: ["TooManyCalls"],
  },
  /** Lookup348: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance> */
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: "(AccountId32,u128)",
        len: "u32",
      },
      Requested: {
        deposit: "Option<(AccountId32,u128)>",
        count: "u32",
        len: "Option<u32>",
      },
    },
  },
  /** Lookup352: pallet_preimage::pallet::Error<T> */
  PalletPreimageError: {
    _enum: [
      "TooBig",
      "AlreadyNoted",
      "NotAuthorized",
      "NotNoted",
      "Requested",
      "NotRequested",
    ],
  },
  /**
   * Lookup353: pallet_identity::types::Registration<Balance, MaxJudgements,
   * MaxAdditionalFields>
   */
  PalletIdentityRegistration: {
    judgements: "Vec<(u32,PalletIdentityJudgement)>",
    deposit: "u128",
    info: "PalletIdentityIdentityInfo",
  },
  /**
   * Lookup361: pallet_identity::types::RegistrarInfo<Balance,
   * sp_core::crypto::AccountId32>
   */
  PalletIdentityRegistrarInfo: {
    account: "AccountId32",
    fee: "u128",
    fields: "PalletIdentityBitFlags",
  },
  /** Lookup363: pallet_identity::pallet::Error<T> */
  PalletIdentityError: {
    _enum: [
      "TooManySubAccounts",
      "NotFound",
      "NotNamed",
      "EmptyIndex",
      "FeeChanged",
      "NoIdentity",
      "StickyJudgement",
      "JudgementGiven",
      "InvalidJudgement",
      "InvalidIndex",
      "InvalidTarget",
      "TooManyFields",
      "TooManyRegistrars",
      "AlreadyClaimed",
      "NotSub",
      "NotOwned",
      "JudgementForDifferentIdentity",
      "JudgementPaymentFailed",
    ],
  },
  /**
   * Lookup369: pallet_democracy::types::ReferendumInfo<BlockNumber,
   * frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall>, Balance>
   */
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: "PalletDemocracyReferendumStatus",
      Finished: {
        approved: "bool",
        end: "u32",
      },
    },
  },
  /**
   * Lookup370: pallet_democracy::types::ReferendumStatus<BlockNumber,
   * frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall>, Balance>
   */
  PalletDemocracyReferendumStatus: {
    end: "u32",
    proposal: "FrameSupportPreimagesBounded",
    threshold: "PalletDemocracyVoteThreshold",
    delay: "u32",
    tally: "PalletDemocracyTally",
  },
  /** Lookup371: pallet_democracy::types::Tally<Balance> */
  PalletDemocracyTally: {
    ayes: "u128",
    nays: "u128",
    turnout: "u128",
  },
  /**
   * Lookup372: pallet_democracy::vote::Voting<Balance,
   * sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
   */
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: "Vec<(u32,PalletDemocracyVoteAccountVote)>",
        delegations: "PalletDemocracyDelegations",
        prior: "PalletDemocracyVotePriorLock",
      },
      Delegating: {
        balance: "u128",
        target: "AccountId32",
        conviction: "PalletDemocracyConviction",
        delegations: "PalletDemocracyDelegations",
        prior: "PalletDemocracyVotePriorLock",
      },
    },
  },
  /** Lookup376: pallet_democracy::types::Delegations<Balance> */
  PalletDemocracyDelegations: {
    votes: "u128",
    capital: "u128",
  },
  /** Lookup377: pallet_democracy::vote::PriorLock<BlockNumber, Balance> */
  PalletDemocracyVotePriorLock: "(u32,u128)",
  /** Lookup380: pallet_democracy::pallet::Error<T> */
  PalletDemocracyError: {
    _enum: [
      "ValueLow",
      "ProposalMissing",
      "AlreadyCanceled",
      "DuplicateProposal",
      "ProposalBlacklisted",
      "NotSimpleMajority",
      "InvalidHash",
      "NoProposal",
      "AlreadyVetoed",
      "ReferendumInvalid",
      "NoneWaiting",
      "NotVoter",
      "NoPermission",
      "AlreadyDelegating",
      "InsufficientFunds",
      "NotDelegating",
      "VotesExist",
      "InstantNotAllowed",
      "Nonsense",
      "WrongUpperBound",
      "MaxVotesReached",
      "TooMany",
      "VotingPeriodLow",
    ],
  },
  /**
   * Lookup382:
   * pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   */
  PalletElectionsPhragmenSeatHolder: {
    who: "AccountId32",
    stake: "u128",
    deposit: "u128",
  },
  /** Lookup383: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance> */
  PalletElectionsPhragmenVoter: {
    votes: "Vec<AccountId32>",
    stake: "u128",
    deposit: "u128",
  },
  /** Lookup384: pallet_elections_phragmen::pallet::Error<T> */
  PalletElectionsPhragmenError: {
    _enum: [
      "UnableToVote",
      "NoVotes",
      "TooManyVotes",
      "MaximumVotesExceeded",
      "LowBalance",
      "UnableToPayBond",
      "MustBeVoter",
      "DuplicatedCandidate",
      "TooManyCandidates",
      "MemberSubmit",
      "RunnerUpSubmit",
      "InsufficientCandidateFunds",
      "NotMember",
      "InvalidWitnessData",
      "InvalidVoteCount",
      "InvalidRenouncing",
      "InvalidReplacement",
    ],
  },
  /** Lookup386: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber> */
  PalletCollectiveVotes: {
    index: "u32",
    threshold: "u32",
    ayes: "Vec<AccountId32>",
    nays: "Vec<AccountId32>",
    end: "u32",
  },
  /** Lookup387: pallet_collective::pallet::Error<T, I> */
  PalletCollectiveError: {
    _enum: [
      "NotMember",
      "DuplicateProposal",
      "ProposalMissing",
      "WrongIndex",
      "DuplicateVote",
      "AlreadyInitialized",
      "TooEarly",
      "TooManyProposals",
      "WrongProposalWeight",
      "WrongProposalLength",
    ],
  },
  /**
   * Lookup390: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance,
   * BlockNumber, primitive_types::H256>
   */
  PalletTipsOpenTip: {
    reason: "H256",
    who: "AccountId32",
    finder: "AccountId32",
    deposit: "u128",
    closes: "Option<u32>",
    tips: "Vec<(AccountId32,u128)>",
    findersFee: "bool",
  },
  /** Lookup392: pallet_tips::pallet::Error<T, I> */
  PalletTipsError: {
    _enum: [
      "ReasonTooBig",
      "AlreadyKnown",
      "UnknownTip",
      "NotFinder",
      "StillOpen",
      "Premature",
    ],
  },
  /**
   * Lookup395: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32,
   * common_runtime::ProxyType, BlockNumber>
   */
  PalletProxyProxyDefinition: {
    delegate: "AccountId32",
    proxyType: "CommonRuntimeProxyType",
    delay: "u32",
  },
  /**
   * Lookup399: pallet_proxy::Announcement<sp_core::crypto::AccountId32,
   * primitive_types::H256, BlockNumber>
   */
  PalletProxyAnnouncement: {
    real: "AccountId32",
    callHash: "H256",
    height: "u32",
  },
  /** Lookup401: pallet_proxy::pallet::Error<T> */
  PalletProxyError: {
    _enum: [
      "TooMany",
      "NotFound",
      "NotProxy",
      "Unproxyable",
      "Duplicate",
      "NoPermission",
      "Unannounced",
      "NoSelfProxy",
    ],
  },
  /**
   * Lookup403: pallet_multisig::Multisig<BlockNumber, Balance,
   * sp_core::crypto::AccountId32, MaxApprovals>
   */
  PalletMultisigMultisig: {
    when: "PalletMultisigTimepoint",
    deposit: "u128",
    depositor: "AccountId32",
    approvals: "Vec<AccountId32>",
  },
  /** Lookup405: pallet_multisig::pallet::Error<T> */
  PalletMultisigError: {
    _enum: [
      "MinimumThreshold",
      "AlreadyApproved",
      "NoApprovalsNeeded",
      "TooFewSignatories",
      "TooManySignatories",
      "SignatoriesOutOfOrder",
      "SenderInSignatories",
      "NotFound",
      "NotOwner",
      "NoTimepoint",
      "WrongTimepoint",
      "UnexpectedTimepoint",
      "MaxWeightTooLow",
      "AlreadyStored",
    ],
  },
  /**
   * Lookup406:
   * pallet_uniques::types::CollectionDetails<sp_core::crypto::AccountId32,
   * DepositBalance>
   */
  PalletUniquesCollectionDetails: {
    owner: "AccountId32",
    issuer: "AccountId32",
    admin: "AccountId32",
    freezer: "AccountId32",
    totalDeposit: "u128",
    freeHolding: "bool",
    items: "u32",
    itemMetadatas: "u32",
    attributes: "u32",
    isFrozen: "bool",
  },
  /**
   * Lookup409: pallet_uniques::types::ItemDetails<sp_core::crypto::AccountId32,
   * DepositBalance>
   */
  PalletUniquesItemDetails: {
    owner: "AccountId32",
    approved: "Option<AccountId32>",
    isFrozen: "bool",
    deposit: "u128",
  },
  /** Lookup410: pallet_uniques::types::CollectionMetadata<DepositBalance, StringLimit> */
  PalletUniquesCollectionMetadata: {
    deposit: "u128",
    data: "Bytes",
    isFrozen: "bool",
  },
  /** Lookup411: pallet_uniques::types::ItemMetadata<DepositBalance, StringLimit> */
  PalletUniquesItemMetadata: {
    deposit: "u128",
    data: "Bytes",
    isFrozen: "bool",
  },
  /** Lookup415: pallet_uniques::pallet::Error<T, I> */
  PalletUniquesError: {
    _enum: [
      "NoPermission",
      "UnknownCollection",
      "AlreadyExists",
      "WrongOwner",
      "BadWitness",
      "InUse",
      "Frozen",
      "WrongDelegate",
      "NoDelegate",
      "Unapproved",
      "Unaccepted",
      "Locked",
      "MaxSupplyReached",
      "MaxSupplyAlreadySet",
      "MaxSupplyTooSmall",
      "UnknownItem",
      "NotForSale",
      "BidTooLow",
    ],
  },
  /**
   * Lookup416: pallet_asset_registry::types::AssetDetails<AssetId, Balance,
   * sp_core::bounded::bounded_vec::BoundedVec<T, S>>
   */
  PalletAssetRegistryAssetDetails: {
    name: "Bytes",
    assetType: "PalletAssetRegistryAssetType",
    existentialDeposit: "u128",
    xcmRateLimit: "Option<u128>",
  },
  /**
   * Lookup417:
   * pallet_asset_registry::types::AssetMetadata<sp_core::bounded::bounded_vec::BoundedVec<T,
   * S>>
   */
  PalletAssetRegistryAssetMetadata: {
    symbol: "Bytes",
    decimals: "u8",
  },
  /** Lookup418: pallet_asset_registry::pallet::Error<T> */
  PalletAssetRegistryError: {
    _enum: [
      "NoIdAvailable",
      "AssetNotFound",
      "TooLong",
      "AssetNotRegistered",
      "AssetAlreadyRegistered",
      "InvalidSharedAssetLen",
      "CannotUpdateLocation",
      "NotInReservedRange",
      "LocationAlreadyRegistered",
    ],
  },
  /** Lookup419: pallet_claims::pallet::Error<T> */
  PalletClaimsError: {
    _enum: [
      "InvalidEthereumSignature",
      "NoClaimOrAlreadyClaimed",
      "BalanceOverflow",
    ],
  },
  /** Lookup420: pallet_genesis_history::Chain */
  PalletGenesisHistoryChain: {
    genesisHash: "Bytes",
    lastBlockHash: "Bytes",
  },
  /** Lookup422: pallet_collator_rewards::pallet::Error<T> */
  PalletCollatorRewardsError: "Null",
  /** Lookup423: pallet_omnipool::types::AssetState<Balance> */
  PalletOmnipoolAssetState: {
    hubReserve: "u128",
    shares: "u128",
    protocolShares: "u128",
    cap: "u128",
    tradable: "PalletOmnipoolTradability",
  },
  /** Lookup424: pallet_omnipool::types::SimpleImbalance<Balance> */
  PalletOmnipoolSimpleImbalance: {
    value: "u128",
    negative: "bool",
  },
  /** Lookup425: pallet_omnipool::types::Position<Balance, AssetId> */
  PalletOmnipoolPosition: {
    assetId: "u32",
    amount: "u128",
    shares: "u128",
    price: "(u128,u128)",
  },
  /** Lookup426: pallet_omnipool::pallet::Error<T> */
  PalletOmnipoolError: {
    _enum: [
      "InsufficientBalance",
      "AssetAlreadyAdded",
      "AssetNotFound",
      "NoStableAssetInPool",
      "NoNativeAssetInPool",
      "MissingBalance",
      "InvalidInitialAssetPrice",
      "BuyLimitNotReached",
      "SellLimitExceeded",
      "PositionNotFound",
      "InsufficientShares",
      "NotAllowed",
      "Forbidden",
      "AssetWeightCapExceeded",
      "TVLCapExceeded",
      "AssetNotRegistered",
      "InsufficientLiquidity",
      "InsufficientTradingAmount",
      "SameAssetTradeNotAllowed",
      "HubAssetUpdateError",
      "PositiveImbalance",
      "InvalidSharesAmount",
      "InvalidHubAssetTradableState",
      "AssetRefundNotAllowed",
      "MaxOutRatioExceeded",
      "MaxInRatioExceeded",
      "PriceDifferenceTooHigh",
      "InvalidOraclePrice",
      "InvalidWithdrawalFee",
    ],
  },
  /** Lookup427: pallet_transaction_pause::pallet::Error<T> */
  PalletTransactionPauseError: {
    _enum: ["CannotPause", "InvalidCharacter"],
  },
  /** Lookup428: pallet_duster::pallet::Error<T> */
  PalletDusterError: {
    _enum: [
      "AccountBlacklisted",
      "AccountNotBlacklisted",
      "ZeroBalance",
      "BalanceSufficient",
      "DustAccountNotSet",
      "ReserveAccountNotSet",
    ],
  },
  /** Lookup429: pallet_liquidity_mining::types::GlobalFarmData<T, I> */
  PalletLiquidityMiningGlobalFarmData: {
    id: "u32",
    owner: "AccountId32",
    updatedAt: "u32",
    totalSharesZ: "u128",
    accumulatedRpz: "u128",
    rewardCurrency: "u32",
    pendingRewards: "u128",
    accumulatedPaidRewards: "u128",
    yieldPerPeriod: "Perquintill",
    plannedYieldingPeriods: "u32",
    blocksPerPeriod: "u32",
    incentivizedAsset: "u32",
    maxRewardPerPeriod: "u128",
    minDeposit: "u128",
    liveYieldFarmsCount: "u32",
    totalYieldFarmsCount: "u32",
    priceAdjustment: "u128",
    state: "PalletLiquidityMiningFarmState",
  },
  /** Lookup430: pallet_liquidity_mining::types::FarmState */
  PalletLiquidityMiningFarmState: {
    _enum: ["Active", "Stopped", "Terminated"],
  },
  /** Lookup432: pallet_liquidity_mining::types::YieldFarmData<T, I> */
  PalletLiquidityMiningYieldFarmData: {
    id: "u32",
    updatedAt: "u32",
    totalShares: "u128",
    totalValuedShares: "u128",
    accumulatedRpvs: "u128",
    accumulatedRpz: "u128",
    loyaltyCurve: "Option<PalletLiquidityMiningLoyaltyCurve>",
    multiplier: "u128",
    state: "PalletLiquidityMiningFarmState",
    entriesCount: "u64",
    leftToDistribute: "u128",
    totalStopped: "u32",
  },
  /** Lookup433: pallet_liquidity_mining::types::DepositData<T, I> */
  PalletLiquidityMiningDepositData: {
    shares: "u128",
    ammPoolId: "u32",
    yieldFarmEntries: "Vec<PalletLiquidityMiningYieldFarmEntry>",
  },
  /** Lookup435: pallet_liquidity_mining::types::YieldFarmEntry<T, I> */
  PalletLiquidityMiningYieldFarmEntry: {
    globalFarmId: "u32",
    yieldFarmId: "u32",
    valuedShares: "u128",
    accumulatedRpvs: "u128",
    accumulatedClaimedRewards: "u128",
    enteredAt: "u32",
    updatedAt: "u32",
    stoppedAtCreation: "u32",
  },
  /** Lookup437: pallet_liquidity_mining::pallet::Error<T, I> */
  PalletLiquidityMiningError: {
    _enum: {
      GlobalFarmNotFound: "Null",
      YieldFarmNotFound: "Null",
      DoubleClaimInPeriod: "Null",
      LiquidityMiningCanceled: "Null",
      LiquidityMiningIsActive: "Null",
      LiquidityMiningIsNotStopped: "Null",
      InvalidDepositAmount: "Null",
      Forbidden: "Null",
      InvalidMultiplier: "Null",
      YieldFarmAlreadyExists: "Null",
      InvalidInitialRewardPercentage: "Null",
      GlobalFarmIsNotEmpty: "Null",
      MissingIncentivizedAsset: "Null",
      InsufficientRewardCurrencyBalance: "Null",
      InvalidBlocksPerPeriod: "Null",
      InvalidYieldPerPeriod: "Null",
      InvalidTotalRewards: "Null",
      InvalidPlannedYieldingPeriods: "Null",
      MaxEntriesPerDeposit: "Null",
      DoubleLock: "Null",
      YieldFarmEntryNotFound: "Null",
      GlobalFarmIsFull: "Null",
      InvalidMinDeposit: "Null",
      InvalidPriceAdjustment: "Null",
      ErrorGetAccountId: "Null",
      IncorrectValuedShares: "Null",
      RewardCurrencyNotRegistered: "Null",
      IncentivizedAssetNotRegistered: "Null",
      InconsistentState: "PalletLiquidityMiningInconsistentStateError",
    },
  },
  /** Lookup438: pallet_liquidity_mining::pallet::InconsistentStateError */
  PalletLiquidityMiningInconsistentStateError: {
    _enum: [
      "YieldFarmNotFound",
      "GlobalFarmNotFound",
      "LiquidityIsNotActive",
      "GlobalFarmIsNotActive",
      "DepositNotFound",
      "InvalidPeriod",
      "NotEnoughRewardsInYieldFarm",
      "InvalidLiveYielFarmsCount",
      "InvalidTotalYieldFarmsCount",
      "InvalidYieldFarmEntriesCount",
      "InvalidTotalShares",
      "InvalidValuedShares",
      "InvalidTotalSharesZ",
      "InvalidPaidAccumulatedRewards",
      "InvalidFarmId",
      "InvalidLoyaltyMultiplier",
    ],
  },
  /** Lookup439: hydradx_traits::oracle::OraclePeriod */
  HydradxTraitsOracleOraclePeriod: {
    _enum: ["LastBlock", "Short", "TenMinutes", "Hour", "Day", "Week"],
  },
  /** Lookup440: pallet_omnipool_liquidity_mining::pallet::Error<T> */
  PalletOmnipoolLiquidityMiningError: {
    _enum: {
      AssetNotFound: "Null",
      Forbidden: "Null",
      ZeroClaimedRewards: "Null",
      InconsistentState: "PalletOmnipoolLiquidityMiningInconsistentStateError",
      OracleNotAvailable: "Null",
      PriceAdjustmentNotAvailable: "Null",
    },
  },
  /** Lookup441: pallet_omnipool_liquidity_mining::pallet::InconsistentStateError */
  PalletOmnipoolLiquidityMiningInconsistentStateError: {
    _enum: ["MissingLpPosition", "DepositDataNotFound"],
  },
  /** Lookup442: pallet_otc::Order<sp_core::crypto::AccountId32, AssetId> */
  PalletOtcOrder: {
    owner: "AccountId32",
    assetIn: "u32",
    assetOut: "u32",
    amountIn: "u128",
    amountOut: "u128",
    partiallyFillable: "bool",
  },
  /** Lookup443: pallet_otc::pallet::Error<T> */
  PalletOtcError: {
    _enum: [
      "AssetNotRegistered",
      "OrderNotFound",
      "OrderIdOutOfBound",
      "OrderNotPartiallyFillable",
      "OrderAmountTooSmall",
      "MathError",
      "Forbidden",
      "InsufficientReservedAmount",
    ],
  },
  /** Lookup444: pallet_circuit_breaker::TradeVolumeLimit<T> */
  PalletCircuitBreakerTradeVolumeLimit: {
    volumeIn: "u128",
    volumeOut: "u128",
    limit: "u128",
  },
  /** Lookup445: pallet_circuit_breaker::LiquidityLimit<T> */
  PalletCircuitBreakerLiquidityLimit: {
    liquidity: "u128",
    limit: "u128",
  },
  /** Lookup446: pallet_circuit_breaker::pallet::Error<T> */
  PalletCircuitBreakerError: {
    _enum: [
      "InvalidLimitValue",
      "LiquidityLimitNotStoredForAsset",
      "TokenOutflowLimitReached",
      "TokenInfluxLimitReached",
      "MaxLiquidityLimitPerBlockReached",
      "NotAllowed",
    ],
  },
  /** Lookup447: pallet_route_executor::pallet::Error<T> */
  PalletRouteExecutorError: {
    _enum: [
      "TradingLimitReached",
      "MaxTradesExceeded",
      "PoolNotSupported",
      "RouteHasNoTrades",
      "InsufficientBalance",
      "UnexpectedError",
    ],
  },
  /** Lookup450: orml_tokens::BalanceLock<Balance> */
  OrmlTokensBalanceLock: {
    id: "[u8;8]",
    amount: "u128",
  },
  /** Lookup452: orml_tokens::AccountData<Balance> */
  OrmlTokensAccountData: {
    free: "u128",
    reserved: "u128",
    frozen: "u128",
  },
  /** Lookup454: orml_tokens::ReserveData<ReserveIdentifier, Balance> */
  OrmlTokensReserveData: {
    id: "[u8;8]",
    amount: "u128",
  },
  /** Lookup456: orml_tokens::module::Error<T> */
  OrmlTokensModuleError: {
    _enum: [
      "BalanceTooLow",
      "AmountIntoBalanceFailed",
      "LiquidityRestrictions",
      "MaxLocksExceeded",
      "KeepAlive",
      "ExistentialDeposit",
      "DeadAccount",
      "TooManyReserves",
    ],
  },
  /** Lookup457: pallet_currencies::module::Error<T> */
  PalletCurrenciesModuleError: {
    _enum: ["AmountIntoBalanceFailed", "BalanceTooLow", "DepositFailed"],
  },
  /** Lookup459: orml_vesting::module::Error<T> */
  OrmlVestingModuleError: {
    _enum: [
      "ZeroVestingPeriod",
      "ZeroVestingPeriodCount",
      "InsufficientBalanceToLock",
      "TooManyVestingSchedules",
      "AmountLow",
      "MaxVestingSchedulesExceeded",
    ],
  },
  /** Lookup461: polkadot_primitives::v2::UpgradeRestriction */
  PolkadotPrimitivesV2UpgradeRestriction: {
    _enum: ["Present"],
  },
  /**
   * Lookup462:
   * cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   */
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: "H256",
    relayDispatchQueueSize: "(u32,u32)",
    ingressChannels: "Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>",
    egressChannels: "Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>",
  },
  /** Lookup465: polkadot_primitives::v2::AbridgedHrmpChannel */
  PolkadotPrimitivesV2AbridgedHrmpChannel: {
    maxCapacity: "u32",
    maxTotalSize: "u32",
    maxMessageSize: "u32",
    msgCount: "u32",
    totalSize: "u32",
    mqcHead: "Option<H256>",
  },
  /** Lookup467: polkadot_primitives::v2::AbridgedHostConfiguration */
  PolkadotPrimitivesV2AbridgedHostConfiguration: {
    maxCodeSize: "u32",
    maxHeadDataSize: "u32",
    maxUpwardQueueCount: "u32",
    maxUpwardQueueSize: "u32",
    maxUpwardMessageSize: "u32",
    maxUpwardMessageNumPerCandidate: "u32",
    hrmpMaxMessageNumPerCandidate: "u32",
    validationUpgradeCooldown: "u32",
    validationUpgradeDelay: "u32",
  },
  /**
   * Lookup473:
   * polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   */
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: "u32",
    data: "Bytes",
  },
  /** Lookup474: cumulus_pallet_parachain_system::pallet::Error<T> */
  CumulusPalletParachainSystemError: {
    _enum: [
      "OverlappingUpgrades",
      "ProhibitedByPolkadot",
      "TooBig",
      "ValidationDataNotAvailable",
      "HostConfigurationNotAvailable",
      "NotScheduled",
      "NothingAuthorized",
      "Unauthorized",
    ],
  },
  /**
   * Lookup477: pallet_scheduler::Scheduled<Name,
   * frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall>,
   * BlockNumber, hydradx_runtime::OriginCaller, sp_core::crypto::AccountId32>
   */
  PalletSchedulerScheduled: {
    maybeId: "Option<[u8;32]>",
    priority: "u8",
    call: "FrameSupportPreimagesBounded",
    maybePeriodic: "Option<(u32,u32)>",
    origin: "HydradxRuntimeOriginCaller",
  },
  /** Lookup479: pallet_scheduler::pallet::Error<T> */
  PalletSchedulerError: {
    _enum: [
      "FailedToSchedule",
      "NotFound",
      "TargetBlockNumberInPast",
      "RescheduleNoChange",
      "Named",
    ],
  },
  /** Lookup481: pallet_dca::pallet::Error<T> */
  PalletDcaError: {
    _enum: [
      "ScheduleNotFound",
      "TradeAmountIsLessThanFee",
      "Forbidden",
      "BlockNumberIsNotInFuture",
      "PriceUnstable",
      "CalculatingPriceError",
      "TotalAmountIsSmallerThanMinBudget",
      "BudgetTooLow",
      "NoFreeBlockFound",
      "ManuallyTerminated",
      "MaxRetryReached",
      "TradeLimitReached",
      "SlippageLimitReached",
      "RouteNotSpecified",
      "NoParentHashFound",
      "InvalidState",
    ],
  },
  /** Lookup482: pallet_xcm::pallet::QueryStatus<BlockNumber> */
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: "XcmVersionedMultiLocation",
        maybeMatchQuerier: "Option<XcmVersionedMultiLocation>",
        maybeNotify: "Option<(u8,u8)>",
        timeout: "u32",
      },
      VersionNotifier: {
        origin: "XcmVersionedMultiLocation",
        isActive: "bool",
      },
      Ready: {
        response: "XcmVersionedResponse",
        at: "u32",
      },
    },
  },
  /** Lookup486: xcm::VersionedResponse */
  XcmVersionedResponse: {
    _enum: {
      __Unused0: "Null",
      __Unused1: "Null",
      V2: "XcmV2Response",
      V3: "XcmV3Response",
    },
  },
  /** Lookup492: pallet_xcm::pallet::VersionMigrationStage */
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: "Null",
      MigrateVersionNotifiers: "Null",
      NotifyCurrentTargets: "Option<Bytes>",
      MigrateAndNotifyOldTargets: "Null",
    },
  },
  /** Lookup495: xcm::VersionedAssetId */
  XcmVersionedAssetId: {
    _enum: {
      __Unused0: "Null",
      __Unused1: "Null",
      __Unused2: "Null",
      V3: "XcmV3MultiassetAssetId",
    },
  },
  /** Lookup496: pallet_xcm::pallet::RemoteLockedFungibleRecord */
  PalletXcmRemoteLockedFungibleRecord: {
    amount: "u128",
    owner: "XcmVersionedMultiLocation",
    locker: "XcmVersionedMultiLocation",
    users: "u32",
  },
  /** Lookup500: pallet_xcm::pallet::Error<T> */
  PalletXcmError: {
    _enum: [
      "Unreachable",
      "SendFailure",
      "Filtered",
      "UnweighableMessage",
      "DestinationNotInvertible",
      "Empty",
      "CannotReanchor",
      "TooManyAssets",
      "InvalidOrigin",
      "BadVersion",
      "BadLocation",
      "NoSubscription",
      "AlreadySubscribed",
      "InvalidAsset",
      "LowBalance",
      "TooManyLocks",
      "AccountNotSovereign",
      "FeesNotMet",
      "LockNotFound",
      "InUse",
    ],
  },
  /** Lookup501: cumulus_pallet_xcm::pallet::Error<T> */
  CumulusPalletXcmError: "Null",
  /** Lookup503: cumulus_pallet_xcmp_queue::InboundChannelDetails */
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: "u32",
    state: "CumulusPalletXcmpQueueInboundState",
    messageMetadata: "Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>",
  },
  /** Lookup504: cumulus_pallet_xcmp_queue::InboundState */
  CumulusPalletXcmpQueueInboundState: {
    _enum: ["Ok", "Suspended"],
  },
  /** Lookup507: polkadot_parachain::primitives::XcmpMessageFormat */
  PolkadotParachainPrimitivesXcmpMessageFormat: {
    _enum: ["ConcatenatedVersionedXcm", "ConcatenatedEncodedBlob", "Signals"],
  },
  /** Lookup510: cumulus_pallet_xcmp_queue::OutboundChannelDetails */
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: "u32",
    state: "CumulusPalletXcmpQueueOutboundState",
    signalsExist: "bool",
    firstIndex: "u16",
    lastIndex: "u16",
  },
  /** Lookup511: cumulus_pallet_xcmp_queue::OutboundState */
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ["Ok", "Suspended"],
  },
  /** Lookup513: cumulus_pallet_xcmp_queue::QueueConfigData */
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: "u32",
    dropThreshold: "u32",
    resumeThreshold: "u32",
    thresholdWeight: "SpWeightsWeightV2Weight",
    weightRestrictDecay: "SpWeightsWeightV2Weight",
    xcmpMaxIndividualWeight: "SpWeightsWeightV2Weight",
  },
  /** Lookup515: cumulus_pallet_xcmp_queue::pallet::Error<T> */
  CumulusPalletXcmpQueueError: {
    _enum: [
      "FailedToSend",
      "BadXcmOrigin",
      "BadXcm",
      "BadOverweightIndex",
      "WeightOverLimit",
    ],
  },
  /** Lookup516: cumulus_pallet_dmp_queue::ConfigData */
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: "SpWeightsWeightV2Weight",
  },
  /** Lookup517: cumulus_pallet_dmp_queue::PageIndexData */
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: "u32",
    endUsed: "u32",
    overweightCount: "u64",
  },
  /** Lookup520: cumulus_pallet_dmp_queue::pallet::Error<T> */
  CumulusPalletDmpQueueError: {
    _enum: ["Unknown", "OverLimit"],
  },
  /** Lookup521: orml_xcm::module::Error<T> */
  OrmlXcmModuleError: {
    _enum: ["Unreachable", "SendFailure", "BadVersion"],
  },
  /** Lookup522: orml_xtokens::module::Error<T> */
  OrmlXtokensModuleError: {
    _enum: [
      "AssetHasNoReserve",
      "NotCrossChainTransfer",
      "InvalidDest",
      "NotCrossChainTransferableCurrency",
      "UnweighableMessage",
      "XcmExecutionFailed",
      "CannotReanchor",
      "InvalidAncestry",
      "InvalidAsset",
      "DestinationNotInvertible",
      "BadVersion",
      "DistinctReserveForAssetAndFee",
      "ZeroFee",
      "ZeroAmount",
      "TooManyAssetsBeingSent",
      "AssetIndexNonExistent",
      "FeeNotEnough",
      "NotSupportedMultiLocation",
      "MinXcmFeeNotDefined",
    ],
  },
  /** Lookup525: orml_unknown_tokens::module::Error<T> */
  OrmlUnknownTokensModuleError: {
    _enum: ["BalanceTooLow", "BalanceOverflow", "UnhandledAsset"],
  },
  /**
   * Lookup528:
   * pallet_collator_selection::pallet::CandidateInfo<sp_core::crypto::AccountId32,
   * Balance>
   */
  PalletCollatorSelectionCandidateInfo: {
    who: "AccountId32",
    deposit: "u128",
  },
  /** Lookup530: pallet_collator_selection::pallet::Error<T> */
  PalletCollatorSelectionError: {
    _enum: [
      "TooManyCandidates",
      "TooFewCandidates",
      "Unknown",
      "Permission",
      "AlreadyCandidate",
      "NotCandidate",
      "TooManyInvulnerables",
      "AlreadyInvulnerable",
      "NoAssociatedValidatorId",
      "ValidatorNotRegistered",
    ],
  },
  /** Lookup534: sp_core::crypto::KeyTypeId */
  SpCoreCryptoKeyTypeId: "[u8;4]",
  /** Lookup535: pallet_session::pallet::Error<T> */
  PalletSessionError: {
    _enum: [
      "InvalidProof",
      "NoAssociatedValidatorId",
      "DuplicatedKey",
      "NoKeys",
      "NoAccount",
    ],
  },
  /** Lookup539: pallet_relaychain_info::pallet::Error<T> */
  PalletRelaychainInfoError: "Null",
  /** Lookup542: pallet_ema_oracle::types::OracleEntry<BlockNumber> */
  PalletEmaOracleOracleEntry: {
    price: "HydraDxMathRatio",
    volume: "HydradxTraitsOracleVolume",
    liquidity: "HydradxTraitsOracleLiquidity",
    timestamp: "u32",
  },
  /** Lookup543: hydra_dx_math::ratio::Ratio */
  HydraDxMathRatio: {
    n: "u128",
    d: "u128",
  },
  /** Lookup544: hydradx_traits::oracle::Volume<Balance> */
  HydradxTraitsOracleVolume: {
    aIn: "u128",
    bOut: "u128",
    aOut: "u128",
    bIn: "u128",
  },
  /** Lookup545: hydradx_traits::oracle::Liquidity<Balance> */
  HydradxTraitsOracleLiquidity: {
    a: "u128",
    b: "u128",
  },
  /** Lookup551: pallet_ema_oracle::pallet::Error<T> */
  PalletEmaOracleError: {
    _enum: ["TooManyUniqueEntries", "OnTradeValueZero"],
  },
  /** Lookup552: pallet_transaction_multi_payment::pallet::Error<T> */
  PalletTransactionMultiPaymentError: {
    _enum: [
      "UnsupportedCurrency",
      "ZeroBalance",
      "AlreadyAccepted",
      "CoreAssetNotAllowed",
      "ZeroPrice",
      "FallbackPriceNotFound",
      "Overflow",
    ],
  },
  /** Lookup554: sp_runtime::MultiSignature */
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: "SpCoreEd25519Signature",
      Sr25519: "SpCoreSr25519Signature",
      Ecdsa: "SpCoreEcdsaSignature",
    },
  },
  /** Lookup555: sp_core::ed25519::Signature */
  SpCoreEd25519Signature: "[u8;64]",
  /** Lookup557: sp_core::sr25519::Signature */
  SpCoreSr25519Signature: "[u8;64]",
  /** Lookup558: sp_core::ecdsa::Signature */
  SpCoreEcdsaSignature: "[u8;65]",
  /** Lookup560: frame_system::extensions::check_spec_version::CheckSpecVersion<T> */
  FrameSystemExtensionsCheckSpecVersion: "Null",
  /** Lookup561: frame_system::extensions::check_tx_version::CheckTxVersion<T> */
  FrameSystemExtensionsCheckTxVersion: "Null",
  /** Lookup562: frame_system::extensions::check_genesis::CheckGenesis<T> */
  FrameSystemExtensionsCheckGenesis: "Null",
  /** Lookup565: frame_system::extensions::check_nonce::CheckNonce<T> */
  FrameSystemExtensionsCheckNonce: "Compact<u32>",
  /** Lookup566: frame_system::extensions::check_weight::CheckWeight<T> */
  FrameSystemExtensionsCheckWeight: "Null",
  /** Lookup567: pallet_transaction_payment::ChargeTransactionPayment<T> */
  PalletTransactionPaymentChargeTransactionPayment: "Compact<u128>",
  /** Lookup568: pallet_claims::ValidateClaim<T> */
  PalletClaimsValidateClaim: "Null",
  /** Lookup569: hydradx_runtime::Runtime */
  HydradxRuntimeRuntime: "Null",
};
