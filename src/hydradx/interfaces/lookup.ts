// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce,
   * pallet_balances::types::AccountData<Balance>>
   */
  FrameSystemAccountInfo: {
    nonce: "u32",
    consumers: "u32",
    providers: "u32",
    sufficients: "u32",
    data: "PalletBalancesAccountData",
  },
  /** Lookup5: pallet_balances::types::AccountData<Balance> */
  PalletBalancesAccountData: {
    free: "u128",
    reserved: "u128",
    frozen: "u128",
    flags: "u128",
  },
  /** Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight> */
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: "SpWeightsWeightV2Weight",
    operational: "SpWeightsWeightV2Weight",
    mandatory: "SpWeightsWeightV2Weight",
  },
  /** Lookup9: sp_weights::weight_v2::Weight */
  SpWeightsWeightV2Weight: {
    refTime: "Compact<u64>",
    proofSize: "Compact<u64>",
  },
  /** Lookup14: sp_runtime::generic::digest::Digest */
  SpRuntimeDigest: {
    logs: "Vec<SpRuntimeDigestDigestItem>",
  },
  /** Lookup16: sp_runtime::generic::digest::DigestItem */
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
   * Lookup19: frame_system::EventRecord<hydradx_runtime::RuntimeEvent,
   * primitive_types::H256>
   */
  FrameSystemEventRecord: {
    phase: "FrameSystemPhase",
    event: "Event",
    topics: "Vec<H256>",
  },
  /** Lookup21: frame_system::pallet::Event<T> */
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
      UpgradeAuthorized: {
        codeHash: "H256",
        checkVersion: "bool",
      },
    },
  },
  /** Lookup22: frame_support::dispatch::DispatchInfo */
  FrameSupportDispatchDispatchInfo: {
    weight: "SpWeightsWeightV2Weight",
    class: "FrameSupportDispatchDispatchClass",
    paysFee: "FrameSupportDispatchPays",
  },
  /** Lookup23: frame_support::dispatch::DispatchClass */
  FrameSupportDispatchDispatchClass: {
    _enum: ["Normal", "Operational", "Mandatory"],
  },
  /** Lookup24: frame_support::dispatch::Pays */
  FrameSupportDispatchPays: {
    _enum: ["Yes", "No"],
  },
  /** Lookup25: sp_runtime::DispatchError */
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
      RootNotAllowed: "Null",
    },
  },
  /** Lookup26: sp_runtime::ModuleError */
  SpRuntimeModuleError: {
    index: "u8",
    error: "[u8;4]",
  },
  /** Lookup27: sp_runtime::TokenError */
  SpRuntimeTokenError: {
    _enum: [
      "FundsUnavailable",
      "OnlyProvider",
      "BelowMinimum",
      "CannotCreate",
      "UnknownAsset",
      "Frozen",
      "Unsupported",
      "CannotCreateHold",
      "NotExpendable",
      "Blocked",
    ],
  },
  /** Lookup28: sp_arithmetic::ArithmeticError */
  SpArithmeticArithmeticError: {
    _enum: ["Underflow", "Overflow", "DivisionByZero"],
  },
  /** Lookup29: sp_runtime::TransactionalError */
  SpRuntimeTransactionalError: {
    _enum: ["LimitReached", "NoLayer"],
  },
  /** Lookup31: pallet_balances::pallet::Event<T, I> */
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
      Minted: {
        who: "AccountId32",
        amount: "u128",
      },
      Burned: {
        who: "AccountId32",
        amount: "u128",
      },
      Suspended: {
        who: "AccountId32",
        amount: "u128",
      },
      Restored: {
        who: "AccountId32",
        amount: "u128",
      },
      Upgraded: {
        who: "AccountId32",
      },
      Issued: {
        amount: "u128",
      },
      Rescinded: {
        amount: "u128",
      },
      Locked: {
        who: "AccountId32",
        amount: "u128",
      },
      Unlocked: {
        who: "AccountId32",
        amount: "u128",
      },
      Frozen: {
        who: "AccountId32",
        amount: "u128",
      },
      Thawed: {
        who: "AccountId32",
        amount: "u128",
      },
      TotalIssuanceForced: {
        _alias: {
          new_: "new",
        },
        old: "u128",
        new_: "u128",
      },
    },
  },
  /** Lookup32: frame_support::traits::tokens::misc::BalanceStatus */
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ["Free", "Reserved"],
  },
  /** Lookup33: pallet_transaction_payment::pallet::Event<T> */
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: "AccountId32",
        actualFee: "u128",
        tip: "u128",
      },
    },
  },
  /** Lookup34: pallet_transaction_multi_payment::pallet::Event<T> */
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
  /** Lookup35: pallet_treasury::pallet::Event<T, I> */
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
      AssetSpendApproved: {
        index: "u32",
        assetKind: "Null",
        amount: "u128",
        beneficiary: "AccountId32",
        validFrom: "u32",
        expireAt: "u32",
      },
      AssetSpendVoided: {
        index: "u32",
      },
      Paid: {
        index: "u32",
        paymentId: "Null",
      },
      PaymentFailed: {
        index: "u32",
        paymentId: "Null",
      },
      SpendProcessed: {
        index: "u32",
      },
    },
  },
  /** Lookup37: pallet_utility::pallet::Event */
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
  /** Lookup39: pallet_preimage::pallet::Event<T> */
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
  /** Lookup40: pallet_identity::pallet::Event<T> */
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
      AuthorityAdded: {
        authority: "AccountId32",
      },
      AuthorityRemoved: {
        authority: "AccountId32",
      },
      UsernameSet: {
        who: "AccountId32",
        username: "Bytes",
      },
      UsernameQueued: {
        who: "AccountId32",
        username: "Bytes",
        expiration: "u32",
      },
      PreapprovalExpired: {
        whose: "AccountId32",
      },
      PrimaryUsernameSet: {
        who: "AccountId32",
        username: "Bytes",
      },
      DanglingUsernameRemoved: {
        who: "AccountId32",
        username: "Bytes",
      },
    },
  },
  /** Lookup42: pallet_democracy::pallet::Event<T> */
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
      MetadataSet: {
        _alias: {
          hash_: "hash",
        },
        owner: "PalletDemocracyMetadataOwner",
        hash_: "H256",
      },
      MetadataCleared: {
        _alias: {
          hash_: "hash",
        },
        owner: "PalletDemocracyMetadataOwner",
        hash_: "H256",
      },
      MetadataTransferred: {
        _alias: {
          hash_: "hash",
        },
        prevOwner: "PalletDemocracyMetadataOwner",
        owner: "PalletDemocracyMetadataOwner",
        hash_: "H256",
      },
    },
  },
  /** Lookup43: pallet_democracy::vote_threshold::VoteThreshold */
  PalletDemocracyVoteThreshold: {
    _enum: ["SuperMajorityApprove", "SuperMajorityAgainst", "SimpleMajority"],
  },
  /** Lookup44: pallet_democracy::vote::AccountVote<Balance> */
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
  /** Lookup46: pallet_democracy::types::MetadataOwner */
  PalletDemocracyMetadataOwner: {
    _enum: {
      External: "Null",
      Proposal: "u32",
      Referendum: "u32",
    },
  },
  /** Lookup47: pallet_elections_phragmen::pallet::Event<T> */
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
  /** Lookup50: pallet_collective::pallet::Event<T, I> */
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
  /** Lookup52: pallet_tips::pallet::Event<T, I> */
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
  /** Lookup53: pallet_proxy::pallet::Event<T> */
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: "Result<Null, SpRuntimeDispatchError>",
      },
      PureCreated: {
        pure: "AccountId32",
        who: "AccountId32",
        proxyType: "HydradxRuntimeSystemProxyType",
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
        proxyType: "HydradxRuntimeSystemProxyType",
        delay: "u32",
      },
      ProxyRemoved: {
        delegator: "AccountId32",
        delegatee: "AccountId32",
        proxyType: "HydradxRuntimeSystemProxyType",
        delay: "u32",
      },
    },
  },
  /** Lookup54: hydradx_runtime::system::ProxyType */
  HydradxRuntimeSystemProxyType: {
    _enum: [
      "Any",
      "CancelProxy",
      "Governance",
      "Transfer",
      "Liquidity",
      "LiquidityMining",
    ],
  },
  /** Lookup56: pallet_multisig::pallet::Event<T> */
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
  /** Lookup57: pallet_multisig::Timepoint<BlockNumber> */
  PalletMultisigTimepoint: {
    height: "u32",
    index: "u32",
  },
  /** Lookup58: pallet_uniques::pallet::Event<T, I> */
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
  /** Lookup65: pallet_state_trie_migration::pallet::Event<T> */
  PalletStateTrieMigrationEvent: {
    _enum: {
      Migrated: {
        top: "u32",
        child: "u32",
        compute: "PalletStateTrieMigrationMigrationCompute",
      },
      Slashed: {
        who: "AccountId32",
        amount: "u128",
      },
      AutoMigrationFinished: "Null",
      Halted: {
        error: "PalletStateTrieMigrationError",
      },
    },
  },
  /** Lookup66: pallet_state_trie_migration::pallet::MigrationCompute */
  PalletStateTrieMigrationMigrationCompute: {
    _enum: ["Signed", "Auto"],
  },
  /** Lookup67: pallet_state_trie_migration::pallet::Error<T> */
  PalletStateTrieMigrationError: {
    _enum: [
      "MaxSignedLimits",
      "KeyTooLong",
      "NotEnoughFunds",
      "BadWitness",
      "SignedMigrationNotAllowed",
      "BadChildRoot",
    ],
  },
  /** Lookup68: pallet_asset_registry::pallet::Event<T> */
  PalletAssetRegistryEvent: {
    _enum: {
      ExistentialDepositPaid: {
        who: "AccountId32",
        feeAsset: "u32",
        amount: "u128",
      },
      Registered: {
        assetId: "u32",
        assetName: "Option<Bytes>",
        assetType: "PalletAssetRegistryAssetType",
        existentialDeposit: "u128",
        xcmRateLimit: "Option<u128>",
        symbol: "Option<Bytes>",
        decimals: "Option<u8>",
        isSufficient: "bool",
      },
      Updated: {
        assetId: "u32",
        assetName: "Option<Bytes>",
        assetType: "PalletAssetRegistryAssetType",
        existentialDeposit: "u128",
        xcmRateLimit: "Option<u128>",
        symbol: "Option<Bytes>",
        decimals: "Option<u8>",
        isSufficient: "bool",
      },
      LocationSet: {
        assetId: "u32",
        location: "HydradxRuntimeXcmAssetLocation",
      },
      AssetBanned: {
        assetId: "u32",
      },
      AssetUnbanned: {
        assetId: "u32",
      },
    },
  },
  /** Lookup71: pallet_asset_registry::types::AssetType */
  PalletAssetRegistryAssetType: {
    _enum: ["Token", "XYK", "StableSwap", "Bond", "External"],
  },
  /** Lookup73: hydradx_runtime::xcm::AssetLocation */
  HydradxRuntimeXcmAssetLocation: "StagingXcmV3MultiLocation",
  /** Lookup74: staging_xcm::v3::multilocation::MultiLocation */
  StagingXcmV3MultiLocation: {
    parents: "u8",
    interior: "XcmV3Junctions",
  },
  /** Lookup75: xcm::v3::junctions::Junctions */
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
  /** Lookup76: xcm::v3::junction::Junction */
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
  /** Lookup79: xcm::v3::junction::NetworkId */
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
      PolkadotBulletin: "Null",
    },
  },
  /** Lookup82: xcm::v3::junction::BodyId */
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
  /** Lookup83: xcm::v3::junction::BodyPart */
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
  /** Lookup84: pallet_claims::pallet::Event<T> */
  PalletClaimsEvent: {
    _enum: {
      Claim: "(AccountId32,PalletClaimsEthereumAddress,u128)",
    },
  },
  /** Lookup85: pallet_claims::traits::EthereumAddress */
  PalletClaimsEthereumAddress: "[u8;20]",
  /** Lookup86: pallet_collator_rewards::pallet::Event<T> */
  PalletCollatorRewardsEvent: {
    _enum: {
      CollatorRewarded: {
        who: "AccountId32",
        amount: "u128",
        currency: "u32",
      },
    },
  },
  /** Lookup87: pallet_omnipool::pallet::Event<T> */
  PalletOmnipoolEvent: {
    _enum: {
      TokenAdded: {
        assetId: "u32",
        initialAmount: "u128",
        initialPrice: "u128",
      },
      TokenRemoved: {
        assetId: "u32",
        amount: "u128",
        hubWithdrawn: "u128",
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
      ProtocolLiquidityRemoved: {
        who: "AccountId32",
        assetId: "u32",
        amount: "u128",
        hubAmount: "u128",
        sharesRemoved: "u128",
      },
      SellExecuted: {
        who: "AccountId32",
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        amountOut: "u128",
        hubAmountIn: "u128",
        hubAmountOut: "u128",
        assetFeeAmount: "u128",
        protocolFeeAmount: "u128",
      },
      BuyExecuted: {
        who: "AccountId32",
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        amountOut: "u128",
        hubAmountIn: "u128",
        hubAmountOut: "u128",
        assetFeeAmount: "u128",
        protocolFeeAmount: "u128",
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
    },
  },
  /** Lookup89: pallet_omnipool::types::Tradability */
  PalletOmnipoolTradability: {
    bits: "u8",
  },
  /** Lookup91: pallet_transaction_pause::pallet::Event<T> */
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
  /** Lookup92: pallet_duster::pallet::Event<T> */
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
  /** Lookup93: pallet_liquidity_mining::pallet::Event<T, I> */
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
  /** Lookup94: pallet_omnipool_liquidity_mining::pallet::Event<T> */
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
  /** Lookup97: pallet_liquidity_mining::types::LoyaltyCurve */
  PalletLiquidityMiningLoyaltyCurve: {
    initialRewardPercentage: "u128",
    scaleCoef: "u32",
  },
  /** Lookup98: pallet_otc::pallet::Event<T> */
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
  /** Lookup99: pallet_circuit_breaker::pallet::Event<T> */
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
  /** Lookup102: pallet_route_executor::pallet::Event<T> */
  PalletRouteExecutorEvent: {
    _enum: {
      Executed: {
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        amountOut: "u128",
      },
      RouteUpdated: {
        assetIds: "Vec<u32>",
      },
    },
  },
  /** Lookup104: pallet_dynamic_fees::pallet::Event<T> */
  PalletDynamicFeesEvent: "Null",
  /** Lookup105: pallet_staking::pallet::Event<T> */
  PalletStakingEvent: {
    _enum: {
      PositionCreated: {
        who: "AccountId32",
        positionId: "u128",
        stake: "u128",
      },
      StakeAdded: {
        who: "AccountId32",
        positionId: "u128",
        stake: "u128",
        totalStake: "u128",
        lockedRewards: "u128",
        slashedPoints: "u128",
        payablePercentage: "u128",
      },
      RewardsClaimed: {
        who: "AccountId32",
        positionId: "u128",
        paidRewards: "u128",
        unlockedRewards: "u128",
        slashedPoints: "u128",
        slashedUnpaidRewards: "u128",
        payablePercentage: "u128",
      },
      Unstaked: {
        who: "AccountId32",
        positionId: "u128",
        unlockedStake: "u128",
      },
      StakingInitialized: {
        nonDustableBalance: "u128",
      },
      AccumulatedRpsUpdated: {
        accumulatedRps: "u128",
        totalStake: "u128",
      },
    },
  },
  /** Lookup106: pallet_stableswap::pallet::Event<T> */
  PalletStableswapEvent: {
    _enum: {
      PoolCreated: {
        poolId: "u32",
        assets: "Vec<u32>",
        amplification: "u16",
        fee: "Permill",
      },
      FeeUpdated: {
        poolId: "u32",
        fee: "Permill",
      },
      LiquidityAdded: {
        poolId: "u32",
        who: "AccountId32",
        shares: "u128",
        assets: "Vec<PalletStableswapAssetAmount>",
      },
      LiquidityRemoved: {
        poolId: "u32",
        who: "AccountId32",
        shares: "u128",
        amounts: "Vec<PalletStableswapAssetAmount>",
        fee: "u128",
      },
      SellExecuted: {
        who: "AccountId32",
        poolId: "u32",
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        amountOut: "u128",
        fee: "u128",
      },
      BuyExecuted: {
        who: "AccountId32",
        poolId: "u32",
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        amountOut: "u128",
        fee: "u128",
      },
      TradableStateUpdated: {
        poolId: "u32",
        assetId: "u32",
        state: "PalletStableswapTradability",
      },
      AmplificationChanging: {
        poolId: "u32",
        currentAmplification: "u16",
        finalAmplification: "u16",
        startBlock: "u32",
        endBlock: "u32",
      },
    },
  },
  /** Lookup109: pallet_stableswap::types::AssetAmount<AssetId> */
  PalletStableswapAssetAmount: {
    assetId: "u32",
    amount: "u128",
  },
  /** Lookup110: pallet_stableswap::types::Tradability */
  PalletStableswapTradability: {
    bits: "u8",
  },
  /** Lookup111: pallet_bonds::pallet::Event<T> */
  PalletBondsEvent: {
    _enum: {
      TokenCreated: {
        issuer: "AccountId32",
        assetId: "u32",
        bondId: "u32",
        maturity: "u64",
      },
      Issued: {
        issuer: "AccountId32",
        bondId: "u32",
        amount: "u128",
        fee: "u128",
      },
      Redeemed: {
        who: "AccountId32",
        bondId: "u32",
        amount: "u128",
      },
    },
  },
  /** Lookup112: pallet_otc_settlements::pallet::Event<T> */
  PalletOtcSettlementsEvent: {
    _enum: {
      Executed: {
        assetId: "u32",
        profit: "u128",
      },
    },
  },
  /** Lookup113: pallet_lbp::pallet::Event<T> */
  PalletLbpEvent: {
    _enum: {
      PoolCreated: {
        pool: "AccountId32",
        data: "PalletLbpPool",
      },
      PoolUpdated: {
        pool: "AccountId32",
        data: "PalletLbpPool",
      },
      LiquidityAdded: {
        who: "AccountId32",
        assetA: "u32",
        assetB: "u32",
        amountA: "u128",
        amountB: "u128",
      },
      LiquidityRemoved: {
        who: "AccountId32",
        assetA: "u32",
        assetB: "u32",
        amountA: "u128",
        amountB: "u128",
      },
      SellExecuted: {
        who: "AccountId32",
        assetIn: "u32",
        assetOut: "u32",
        amount: "u128",
        salePrice: "u128",
        feeAsset: "u32",
        feeAmount: "u128",
      },
      BuyExecuted: {
        who: "AccountId32",
        assetOut: "u32",
        assetIn: "u32",
        amount: "u128",
        buyPrice: "u128",
        feeAsset: "u32",
        feeAmount: "u128",
      },
    },
  },
  /** Lookup114: pallet_lbp::Pool<sp_core::crypto::AccountId32, BlockNumber> */
  PalletLbpPool: {
    owner: "AccountId32",
    start: "Option<u32>",
    end: "Option<u32>",
    assets: "(u32,u32)",
    initialWeight: "u32",
    finalWeight: "u32",
    weightCurve: "PalletLbpWeightCurveType",
    fee: "(u32,u32)",
    feeCollector: "AccountId32",
    repayTarget: "u128",
  },
  /** Lookup116: pallet_lbp::WeightCurveType */
  PalletLbpWeightCurveType: {
    _enum: ["Linear"],
  },
  /** Lookup117: pallet_xyk::pallet::Event<T> */
  PalletXykEvent: {
    _enum: {
      LiquidityAdded: {
        who: "AccountId32",
        assetA: "u32",
        assetB: "u32",
        amountA: "u128",
        amountB: "u128",
      },
      LiquidityRemoved: {
        who: "AccountId32",
        assetA: "u32",
        assetB: "u32",
        shares: "u128",
      },
      PoolCreated: {
        who: "AccountId32",
        assetA: "u32",
        assetB: "u32",
        initialSharesAmount: "u128",
        shareToken: "u32",
        pool: "AccountId32",
      },
      PoolDestroyed: {
        who: "AccountId32",
        assetA: "u32",
        assetB: "u32",
        shareToken: "u32",
        pool: "AccountId32",
      },
      SellExecuted: {
        who: "AccountId32",
        assetIn: "u32",
        assetOut: "u32",
        amount: "u128",
        salePrice: "u128",
        feeAsset: "u32",
        feeAmount: "u128",
        pool: "AccountId32",
      },
      BuyExecuted: {
        who: "AccountId32",
        assetOut: "u32",
        assetIn: "u32",
        amount: "u128",
        buyPrice: "u128",
        feeAsset: "u32",
        feeAmount: "u128",
        pool: "AccountId32",
      },
    },
  },
  /** Lookup118: pallet_referrals::pallet::Event<T> */
  PalletReferralsEvent: {
    _enum: {
      CodeRegistered: {
        code: "Bytes",
        account: "AccountId32",
      },
      CodeLinked: {
        account: "AccountId32",
        code: "Bytes",
        referralAccount: "AccountId32",
      },
      Converted: {
        from: "PalletReferralsAssetAmount",
        to: "PalletReferralsAssetAmount",
      },
      Claimed: {
        who: "AccountId32",
        referrerRewards: "u128",
        tradeRewards: "u128",
      },
      AssetRewardsUpdated: {
        assetId: "u32",
        level: "PalletReferralsLevel",
        rewards: "PalletReferralsFeeDistribution",
      },
      LevelUp: {
        who: "AccountId32",
        level: "PalletReferralsLevel",
      },
    },
  },
  /** Lookup120: pallet_referrals::AssetAmount<AssetId> */
  PalletReferralsAssetAmount: {
    assetId: "u32",
    amount: "u128",
  },
  /** Lookup121: pallet_referrals::Level */
  PalletReferralsLevel: {
    _enum: ["None", "Tier0", "Tier1", "Tier2", "Tier3", "Tier4"],
  },
  /** Lookup122: pallet_referrals::FeeDistribution */
  PalletReferralsFeeDistribution: {
    referrer: "Permill",
    trader: "Permill",
    external: "Permill",
  },
  /** Lookup123: orml_tokens::module::Event<T> */
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
      Issued: {
        currencyId: "u32",
        amount: "u128",
      },
      Rescinded: {
        currencyId: "u32",
        amount: "u128",
      },
    },
  },
  /** Lookup125: pallet_currencies::module::Event<T> */
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
  /** Lookup127: orml_vesting::module::Event<T> */
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
  /** Lookup128: orml_vesting::VestingSchedule<BlockNumber, Balance> */
  OrmlVestingVestingSchedule: {
    start: "u32",
    period: "u32",
    periodCount: "u32",
    perPeriod: "Compact<u128>",
  },
  /** Lookup129: pallet_evm::pallet::Event<T> */
  PalletEvmEvent: {
    _enum: {
      Log: {
        log: "EthereumLog",
      },
      Created: {
        address: "H160",
      },
      CreatedFailed: {
        address: "H160",
      },
      Executed: {
        address: "H160",
      },
      ExecutedFailed: {
        address: "H160",
      },
    },
  },
  /** Lookup130: ethereum::log::Log */
  EthereumLog: {
    address: "H160",
    topics: "Vec<H256>",
    data: "Bytes",
  },
  /** Lookup133: pallet_ethereum::pallet::Event */
  PalletEthereumEvent: {
    _enum: {
      Executed: {
        from: "H160",
        to: "H160",
        transactionHash: "H256",
        exitReason: "EvmCoreErrorExitReason",
        extraData: "Bytes",
      },
    },
  },
  /** Lookup134: evm_core::error::ExitReason */
  EvmCoreErrorExitReason: {
    _enum: {
      Succeed: "EvmCoreErrorExitSucceed",
      Error: "EvmCoreErrorExitError",
      Revert: "EvmCoreErrorExitRevert",
      Fatal: "EvmCoreErrorExitFatal",
    },
  },
  /** Lookup135: evm_core::error::ExitSucceed */
  EvmCoreErrorExitSucceed: {
    _enum: ["Stopped", "Returned", "Suicided"],
  },
  /** Lookup136: evm_core::error::ExitError */
  EvmCoreErrorExitError: {
    _enum: {
      StackUnderflow: "Null",
      StackOverflow: "Null",
      InvalidJump: "Null",
      InvalidRange: "Null",
      DesignatedInvalid: "Null",
      CallTooDeep: "Null",
      CreateCollision: "Null",
      CreateContractLimit: "Null",
      OutOfOffset: "Null",
      OutOfGas: "Null",
      OutOfFund: "Null",
      PCUnderflow: "Null",
      CreateEmpty: "Null",
      Other: "Text",
      MaxNonce: "Null",
      InvalidCode: "u8",
    },
  },
  /** Lookup140: evm_core::error::ExitRevert */
  EvmCoreErrorExitRevert: {
    _enum: ["Reverted"],
  },
  /** Lookup141: evm_core::error::ExitFatal */
  EvmCoreErrorExitFatal: {
    _enum: {
      NotSupported: "Null",
      UnhandledInterrupt: "Null",
      CallErrorAsFatal: "EvmCoreErrorExitError",
      Other: "Text",
    },
  },
  /** Lookup142: pallet_evm_accounts::pallet::Event<T> */
  PalletEvmAccountsEvent: {
    _enum: {
      Bound: {
        account: "AccountId32",
        address: "H160",
      },
      DeployerAdded: {
        who: "H160",
      },
      DeployerRemoved: {
        who: "H160",
      },
    },
  },
  /** Lookup143: pallet_xyk_liquidity_mining::pallet::Event<T> */
  PalletXykLiquidityMiningEvent: {
    _enum: {
      GlobalFarmCreated: {
        id: "u32",
        owner: "AccountId32",
        totalRewards: "u128",
        rewardCurrency: "u32",
        yieldPerPeriod: "Perquintill",
        plannedYieldingPeriods: "u32",
        blocksPerPeriod: "u32",
        incentivizedAsset: "u32",
        maxRewardPerPeriod: "u128",
        minDeposit: "u128",
        priceAdjustment: "u128",
      },
      GlobalFarmUpdated: {
        id: "u32",
        priceAdjustment: "u128",
      },
      YieldFarmCreated: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        multiplier: "u128",
        assetPair: "PalletXykAssetPair",
        loyaltyCurve: "Option<PalletLiquidityMiningLoyaltyCurve>",
      },
      GlobalFarmTerminated: {
        globalFarmId: "u32",
        who: "AccountId32",
        rewardCurrency: "u32",
        undistributedRewards: "u128",
      },
      SharesDeposited: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        who: "AccountId32",
        amount: "u128",
        lpToken: "u32",
        depositId: "u128",
      },
      SharesRedeposited: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        who: "AccountId32",
        amount: "u128",
        lpToken: "u32",
        depositId: "u128",
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
        lpToken: "u32",
        amount: "u128",
        depositId: "u128",
      },
      YieldFarmStopped: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        who: "AccountId32",
        assetPair: "PalletXykAssetPair",
      },
      YieldFarmResumed: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        who: "AccountId32",
        assetPair: "PalletXykAssetPair",
        multiplier: "u128",
      },
      YieldFarmTerminated: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        who: "AccountId32",
        assetPair: "PalletXykAssetPair",
      },
      YieldFarmUpdated: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        who: "AccountId32",
        assetPair: "PalletXykAssetPair",
        multiplier: "u128",
      },
      DepositDestroyed: {
        who: "AccountId32",
        depositId: "u128",
      },
    },
  },
  /** Lookup144: pallet_xyk::types::AssetPair */
  PalletXykAssetPair: {
    assetIn: "u32",
    assetOut: "u32",
  },
  /** Lookup146: pallet_relaychain_info::pallet::Event<T> */
  PalletRelaychainInfoEvent: {
    _enum: {
      CurrentBlockNumbers: {
        parachainBlockNumber: "u32",
        relaychainBlockNumber: "u32",
      },
    },
  },
  /** Lookup147: pallet_dca::pallet::Event<T> */
  PalletDcaEvent: {
    _enum: {
      ExecutionStarted: {
        id: "u32",
        block: "u32",
      },
      Scheduled: {
        id: "u32",
        who: "AccountId32",
        period: "u32",
        totalAmount: "u128",
        order: "PalletDcaOrder",
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
  /** Lookup148: pallet_dca::types::Order<AssetId> */
  PalletDcaOrder: {
    _enum: {
      Sell: {
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        minAmountOut: "u128",
        route: "Vec<HydradxTraitsRouterTrade>",
      },
      Buy: {
        assetIn: "u32",
        assetOut: "u32",
        amountOut: "u128",
        maxAmountIn: "u128",
        route: "Vec<HydradxTraitsRouterTrade>",
      },
    },
  },
  /** Lookup150: hydradx_traits::router::Trade<AssetId> */
  HydradxTraitsRouterTrade: {
    pool: "HydradxTraitsRouterPoolType",
    assetIn: "u32",
    assetOut: "u32",
  },
  /** Lookup151: hydradx_traits::router::PoolType<AssetId> */
  HydradxTraitsRouterPoolType: {
    _enum: {
      XYK: "Null",
      LBP: "Null",
      Stableswap: "u32",
      Omnipool: "Null",
    },
  },
  /** Lookup153: pallet_scheduler::pallet::Event<T> */
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
  /** Lookup155: cumulus_pallet_parachain_system::pallet::Event<T> */
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: "Null",
      ValidationFunctionApplied: {
        relayChainBlockNum: "u32",
      },
      ValidationFunctionDiscarded: "Null",
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
  /** Lookup156: pallet_xcm::pallet::Event<T> */
  PalletXcmEvent: {
    _enum: {
      Attempted: {
        outcome: "StagingXcmV4TraitsOutcome",
      },
      Sent: {
        origin: "StagingXcmV4Location",
        destination: "StagingXcmV4Location",
        message: "StagingXcmV4Xcm",
        messageId: "[u8;32]",
      },
      UnexpectedResponse: {
        origin: "StagingXcmV4Location",
        queryId: "u64",
      },
      ResponseReady: {
        queryId: "u64",
        response: "StagingXcmV4Response",
      },
      Notified: {
        queryId: "u64",
        palletIndex: "u8",
        callIndex: "u8",
      },
      NotifyOverweight: {
        queryId: "u64",
        palletIndex: "u8",
        callIndex: "u8",
        actualWeight: "SpWeightsWeightV2Weight",
        maxBudgetedWeight: "SpWeightsWeightV2Weight",
      },
      NotifyDispatchError: {
        queryId: "u64",
        palletIndex: "u8",
        callIndex: "u8",
      },
      NotifyDecodeFailed: {
        queryId: "u64",
        palletIndex: "u8",
        callIndex: "u8",
      },
      InvalidResponder: {
        origin: "StagingXcmV4Location",
        queryId: "u64",
        expectedLocation: "Option<StagingXcmV4Location>",
      },
      InvalidResponderVersion: {
        origin: "StagingXcmV4Location",
        queryId: "u64",
      },
      ResponseTaken: {
        queryId: "u64",
      },
      AssetsTrapped: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
        origin: "StagingXcmV4Location",
        assets: "XcmVersionedAssets",
      },
      VersionChangeNotified: {
        destination: "StagingXcmV4Location",
        result: "u32",
        cost: "StagingXcmV4AssetAssets",
        messageId: "[u8;32]",
      },
      SupportedVersionChanged: {
        location: "StagingXcmV4Location",
        version: "u32",
      },
      NotifyTargetSendFail: {
        location: "StagingXcmV4Location",
        queryId: "u64",
        error: "XcmV3TraitsError",
      },
      NotifyTargetMigrationFail: {
        location: "XcmVersionedLocation",
        queryId: "u64",
      },
      InvalidQuerierVersion: {
        origin: "StagingXcmV4Location",
        queryId: "u64",
      },
      InvalidQuerier: {
        origin: "StagingXcmV4Location",
        queryId: "u64",
        expectedQuerier: "StagingXcmV4Location",
        maybeActualQuerier: "Option<StagingXcmV4Location>",
      },
      VersionNotifyStarted: {
        destination: "StagingXcmV4Location",
        cost: "StagingXcmV4AssetAssets",
        messageId: "[u8;32]",
      },
      VersionNotifyRequested: {
        destination: "StagingXcmV4Location",
        cost: "StagingXcmV4AssetAssets",
        messageId: "[u8;32]",
      },
      VersionNotifyUnrequested: {
        destination: "StagingXcmV4Location",
        cost: "StagingXcmV4AssetAssets",
        messageId: "[u8;32]",
      },
      FeesPaid: {
        paying: "StagingXcmV4Location",
        fees: "StagingXcmV4AssetAssets",
      },
      AssetsClaimed: {
        _alias: {
          hash_: "hash",
        },
        hash_: "H256",
        origin: "StagingXcmV4Location",
        assets: "XcmVersionedAssets",
      },
      VersionMigrationFinished: {
        version: "u32",
      },
    },
  },
  /** Lookup157: staging_xcm::v4::traits::Outcome */
  StagingXcmV4TraitsOutcome: {
    _enum: {
      Complete: {
        used: "SpWeightsWeightV2Weight",
      },
      Incomplete: {
        used: "SpWeightsWeightV2Weight",
        error: "XcmV3TraitsError",
      },
      Error: {
        error: "XcmV3TraitsError",
      },
    },
  },
  /** Lookup158: xcm::v3::traits::Error */
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
  /** Lookup159: staging_xcm::v4::location::Location */
  StagingXcmV4Location: {
    parents: "u8",
    interior: "StagingXcmV4Junctions",
  },
  /** Lookup160: staging_xcm::v4::junctions::Junctions */
  StagingXcmV4Junctions: {
    _enum: {
      Here: "Null",
      X1: "[Lookup162;1]",
      X2: "[Lookup162;2]",
      X3: "[Lookup162;3]",
      X4: "[Lookup162;4]",
      X5: "[Lookup162;5]",
      X6: "[Lookup162;6]",
      X7: "[Lookup162;7]",
      X8: "[Lookup162;8]",
    },
  },
  /** Lookup162: staging_xcm::v4::junction::Junction */
  StagingXcmV4Junction: {
    _enum: {
      Parachain: "Compact<u32>",
      AccountId32: {
        network: "Option<StagingXcmV4JunctionNetworkId>",
        id: "[u8;32]",
      },
      AccountIndex64: {
        network: "Option<StagingXcmV4JunctionNetworkId>",
        index: "Compact<u64>",
      },
      AccountKey20: {
        network: "Option<StagingXcmV4JunctionNetworkId>",
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
      GlobalConsensus: "StagingXcmV4JunctionNetworkId",
    },
  },
  /** Lookup164: staging_xcm::v4::junction::NetworkId */
  StagingXcmV4JunctionNetworkId: {
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
      PolkadotBulletin: "Null",
    },
  },
  /** Lookup172: staging_xcm::v4::Xcm<Call> */
  StagingXcmV4Xcm: "Vec<StagingXcmV4Instruction>",
  /** Lookup174: staging_xcm::v4::Instruction<Call> */
  StagingXcmV4Instruction: {
    _enum: {
      WithdrawAsset: "StagingXcmV4AssetAssets",
      ReserveAssetDeposited: "StagingXcmV4AssetAssets",
      ReceiveTeleportedAsset: "StagingXcmV4AssetAssets",
      QueryResponse: {
        queryId: "Compact<u64>",
        response: "StagingXcmV4Response",
        maxWeight: "SpWeightsWeightV2Weight",
        querier: "Option<StagingXcmV4Location>",
      },
      TransferAsset: {
        assets: "StagingXcmV4AssetAssets",
        beneficiary: "StagingXcmV4Location",
      },
      TransferReserveAsset: {
        assets: "StagingXcmV4AssetAssets",
        dest: "StagingXcmV4Location",
        xcm: "StagingXcmV4Xcm",
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
      DescendOrigin: "StagingXcmV4Junctions",
      ReportError: "StagingXcmV4QueryResponseInfo",
      DepositAsset: {
        assets: "StagingXcmV4AssetAssetFilter",
        beneficiary: "StagingXcmV4Location",
      },
      DepositReserveAsset: {
        assets: "StagingXcmV4AssetAssetFilter",
        dest: "StagingXcmV4Location",
        xcm: "StagingXcmV4Xcm",
      },
      ExchangeAsset: {
        give: "StagingXcmV4AssetAssetFilter",
        want: "StagingXcmV4AssetAssets",
        maximal: "bool",
      },
      InitiateReserveWithdraw: {
        assets: "StagingXcmV4AssetAssetFilter",
        reserve: "StagingXcmV4Location",
        xcm: "StagingXcmV4Xcm",
      },
      InitiateTeleport: {
        assets: "StagingXcmV4AssetAssetFilter",
        dest: "StagingXcmV4Location",
        xcm: "StagingXcmV4Xcm",
      },
      ReportHolding: {
        responseInfo: "StagingXcmV4QueryResponseInfo",
        assets: "StagingXcmV4AssetAssetFilter",
      },
      BuyExecution: {
        fees: "StagingXcmV4Asset",
        weightLimit: "XcmV3WeightLimit",
      },
      RefundSurplus: "Null",
      SetErrorHandler: "StagingXcmV4Xcm",
      SetAppendix: "StagingXcmV4Xcm",
      ClearError: "Null",
      ClaimAsset: {
        assets: "StagingXcmV4AssetAssets",
        ticket: "StagingXcmV4Location",
      },
      Trap: "Compact<u64>",
      SubscribeVersion: {
        queryId: "Compact<u64>",
        maxResponseWeight: "SpWeightsWeightV2Weight",
      },
      UnsubscribeVersion: "Null",
      BurnAsset: "StagingXcmV4AssetAssets",
      ExpectAsset: "StagingXcmV4AssetAssets",
      ExpectOrigin: "Option<StagingXcmV4Location>",
      ExpectError: "Option<(u32,XcmV3TraitsError)>",
      ExpectTransactStatus: "XcmV3MaybeErrorCode",
      QueryPallet: {
        moduleName: "Bytes",
        responseInfo: "StagingXcmV4QueryResponseInfo",
      },
      ExpectPallet: {
        index: "Compact<u32>",
        name: "Bytes",
        moduleName: "Bytes",
        crateMajor: "Compact<u32>",
        minCrateMinor: "Compact<u32>",
      },
      ReportTransactStatus: "StagingXcmV4QueryResponseInfo",
      ClearTransactStatus: "Null",
      UniversalOrigin: "StagingXcmV4Junction",
      ExportMessage: {
        network: "StagingXcmV4JunctionNetworkId",
        destination: "StagingXcmV4Junctions",
        xcm: "StagingXcmV4Xcm",
      },
      LockAsset: {
        asset: "StagingXcmV4Asset",
        unlocker: "StagingXcmV4Location",
      },
      UnlockAsset: {
        asset: "StagingXcmV4Asset",
        target: "StagingXcmV4Location",
      },
      NoteUnlockable: {
        asset: "StagingXcmV4Asset",
        owner: "StagingXcmV4Location",
      },
      RequestUnlock: {
        asset: "StagingXcmV4Asset",
        locker: "StagingXcmV4Location",
      },
      SetFeesMode: {
        jitWithdraw: "bool",
      },
      SetTopic: "[u8;32]",
      ClearTopic: "Null",
      AliasOrigin: "StagingXcmV4Location",
      UnpaidExecution: {
        weightLimit: "XcmV3WeightLimit",
        checkOrigin: "Option<StagingXcmV4Location>",
      },
    },
  },
  /** Lookup175: staging_xcm::v4::asset::Assets */
  StagingXcmV4AssetAssets: "Vec<StagingXcmV4Asset>",
  /** Lookup177: staging_xcm::v4::asset::Asset */
  StagingXcmV4Asset: {
    id: "StagingXcmV4AssetAssetId",
    fun: "StagingXcmV4AssetFungibility",
  },
  /** Lookup178: staging_xcm::v4::asset::AssetId */
  StagingXcmV4AssetAssetId: "StagingXcmV4Location",
  /** Lookup179: staging_xcm::v4::asset::Fungibility */
  StagingXcmV4AssetFungibility: {
    _enum: {
      Fungible: "Compact<u128>",
      NonFungible: "StagingXcmV4AssetAssetInstance",
    },
  },
  /** Lookup180: staging_xcm::v4::asset::AssetInstance */
  StagingXcmV4AssetAssetInstance: {
    _enum: {
      Undefined: "Null",
      Index: "Compact<u128>",
      Array4: "[u8;4]",
      Array8: "[u8;8]",
      Array16: "[u8;16]",
      Array32: "[u8;32]",
    },
  },
  /** Lookup182: staging_xcm::v4::Response */
  StagingXcmV4Response: {
    _enum: {
      Null: "Null",
      Assets: "StagingXcmV4AssetAssets",
      ExecutionResult: "Option<(u32,XcmV3TraitsError)>",
      Version: "u32",
      PalletsInfo: "Vec<StagingXcmV4PalletInfo>",
      DispatchResult: "XcmV3MaybeErrorCode",
    },
  },
  /** Lookup186: staging_xcm::v4::PalletInfo */
  StagingXcmV4PalletInfo: {
    index: "Compact<u32>",
    name: "Bytes",
    moduleName: "Bytes",
    major: "Compact<u32>",
    minor: "Compact<u32>",
    patch: "Compact<u32>",
  },
  /** Lookup189: xcm::v3::MaybeErrorCode */
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: "Null",
      Error: "Bytes",
      TruncatedError: "Bytes",
    },
  },
  /** Lookup192: xcm::v2::OriginKind */
  XcmV2OriginKind: {
    _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"],
  },
  /** Lookup193: xcm::double_encoded::DoubleEncoded<T> */
  XcmDoubleEncoded: {
    encoded: "Bytes",
  },
  /** Lookup194: staging_xcm::v4::QueryResponseInfo */
  StagingXcmV4QueryResponseInfo: {
    destination: "StagingXcmV4Location",
    queryId: "Compact<u64>",
    maxWeight: "SpWeightsWeightV2Weight",
  },
  /** Lookup195: staging_xcm::v4::asset::AssetFilter */
  StagingXcmV4AssetAssetFilter: {
    _enum: {
      Definite: "StagingXcmV4AssetAssets",
      Wild: "StagingXcmV4AssetWildAsset",
    },
  },
  /** Lookup196: staging_xcm::v4::asset::WildAsset */
  StagingXcmV4AssetWildAsset: {
    _enum: {
      All: "Null",
      AllOf: {
        id: "StagingXcmV4AssetAssetId",
        fun: "StagingXcmV4AssetWildFungibility",
      },
      AllCounted: "Compact<u32>",
      AllOfCounted: {
        id: "StagingXcmV4AssetAssetId",
        fun: "StagingXcmV4AssetWildFungibility",
        count: "Compact<u32>",
      },
    },
  },
  /** Lookup197: staging_xcm::v4::asset::WildFungibility */
  StagingXcmV4AssetWildFungibility: {
    _enum: ["Fungible", "NonFungible"],
  },
  /** Lookup198: xcm::v3::WeightLimit */
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: "Null",
      Limited: "SpWeightsWeightV2Weight",
    },
  },
  /** Lookup199: xcm::VersionedAssets */
  XcmVersionedAssets: {
    _enum: {
      __Unused0: "Null",
      V2: "XcmV2MultiassetMultiAssets",
      __Unused2: "Null",
      V3: "XcmV3MultiassetMultiAssets",
      V4: "StagingXcmV4AssetAssets",
    },
  },
  /** Lookup200: xcm::v2::multiasset::MultiAssets */
  XcmV2MultiassetMultiAssets: "Vec<XcmV2MultiAsset>",
  /** Lookup202: xcm::v2::multiasset::MultiAsset */
  XcmV2MultiAsset: {
    id: "XcmV2MultiassetAssetId",
    fun: "XcmV2MultiassetFungibility",
  },
  /** Lookup203: xcm::v2::multiasset::AssetId */
  XcmV2MultiassetAssetId: {
    _enum: {
      Concrete: "XcmV2MultiLocation",
      Abstract: "Bytes",
    },
  },
  /** Lookup204: xcm::v2::multilocation::MultiLocation */
  XcmV2MultiLocation: {
    parents: "u8",
    interior: "XcmV2MultilocationJunctions",
  },
  /** Lookup205: xcm::v2::multilocation::Junctions */
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
  /** Lookup206: xcm::v2::junction::Junction */
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
  /** Lookup207: xcm::v2::NetworkId */
  XcmV2NetworkId: {
    _enum: {
      Any: "Null",
      Named: "Bytes",
      Polkadot: "Null",
      Kusama: "Null",
    },
  },
  /** Lookup209: xcm::v2::BodyId */
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
  /** Lookup210: xcm::v2::BodyPart */
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
  /** Lookup211: xcm::v2::multiasset::Fungibility */
  XcmV2MultiassetFungibility: {
    _enum: {
      Fungible: "Compact<u128>",
      NonFungible: "XcmV2MultiassetAssetInstance",
    },
  },
  /** Lookup212: xcm::v2::multiasset::AssetInstance */
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
  /** Lookup213: xcm::v3::multiasset::MultiAssets */
  XcmV3MultiassetMultiAssets: "Vec<XcmV3MultiAsset>",
  /** Lookup215: xcm::v3::multiasset::MultiAsset */
  XcmV3MultiAsset: {
    id: "XcmV3MultiassetAssetId",
    fun: "XcmV3MultiassetFungibility",
  },
  /** Lookup216: xcm::v3::multiasset::AssetId */
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: "StagingXcmV3MultiLocation",
      Abstract: "[u8;32]",
    },
  },
  /** Lookup217: xcm::v3::multiasset::Fungibility */
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: "Compact<u128>",
      NonFungible: "XcmV3MultiassetAssetInstance",
    },
  },
  /** Lookup218: xcm::v3::multiasset::AssetInstance */
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
  /** Lookup219: xcm::VersionedLocation */
  XcmVersionedLocation: {
    _enum: {
      __Unused0: "Null",
      V2: "XcmV2MultiLocation",
      __Unused2: "Null",
      V3: "StagingXcmV3MultiLocation",
      V4: "StagingXcmV4Location",
    },
  },
  /** Lookup220: cumulus_pallet_xcm::pallet::Event<T> */
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: "[u8;32]",
      UnsupportedVersion: "[u8;32]",
      ExecutedDownward: "([u8;32],StagingXcmV4TraitsOutcome)",
    },
  },
  /** Lookup221: cumulus_pallet_xcmp_queue::pallet::Event<T> */
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      XcmpMessageSent: {
        messageHash: "[u8;32]",
      },
    },
  },
  /** Lookup222: pallet_message_queue::pallet::Event<T> */
  PalletMessageQueueEvent: {
    _enum: {
      ProcessingFailed: {
        id: "H256",
        origin: "CumulusPrimitivesCoreAggregateMessageOrigin",
        error: "FrameSupportMessagesProcessMessageError",
      },
      Processed: {
        id: "H256",
        origin: "CumulusPrimitivesCoreAggregateMessageOrigin",
        weightUsed: "SpWeightsWeightV2Weight",
        success: "bool",
      },
      OverweightEnqueued: {
        id: "[u8;32]",
        origin: "CumulusPrimitivesCoreAggregateMessageOrigin",
        pageIndex: "u32",
        messageIndex: "u32",
      },
      PageReaped: {
        origin: "CumulusPrimitivesCoreAggregateMessageOrigin",
        index: "u32",
      },
    },
  },
  /** Lookup223: cumulus_primitives_core::AggregateMessageOrigin */
  CumulusPrimitivesCoreAggregateMessageOrigin: {
    _enum: {
      Here: "Null",
      Parent: "Null",
      Sibling: "u32",
    },
  },
  /** Lookup225: frame_support::traits::messages::ProcessMessageError */
  FrameSupportMessagesProcessMessageError: {
    _enum: {
      BadFormat: "Null",
      Corrupt: "Null",
      Unsupported: "Null",
      Overweight: "SpWeightsWeightV2Weight",
      Yield: "Null",
    },
  },
  /** Lookup226: orml_xcm::module::Event<T> */
  OrmlXcmModuleEvent: {
    _enum: {
      Sent: {
        to: "StagingXcmV4Location",
        message: "StagingXcmV4Xcm",
      },
    },
  },
  /** Lookup227: orml_xtokens::module::Event<T> */
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredAssets: {
        sender: "AccountId32",
        assets: "StagingXcmV4AssetAssets",
        fee: "StagingXcmV4Asset",
        dest: "StagingXcmV4Location",
      },
    },
  },
  /** Lookup228: orml_unknown_tokens::module::Event */
  OrmlUnknownTokensModuleEvent: {
    _enum: {
      Deposited: {
        asset: "StagingXcmV4Asset",
        who: "StagingXcmV4Location",
      },
      Withdrawn: {
        asset: "StagingXcmV4Asset",
        who: "StagingXcmV4Location",
      },
    },
  },
  /** Lookup229: pallet_collator_selection::pallet::Event<T> */
  PalletCollatorSelectionEvent: {
    _enum: {
      NewInvulnerables: {
        invulnerables: "Vec<AccountId32>",
      },
      InvulnerableAdded: {
        accountId: "AccountId32",
      },
      InvulnerableRemoved: {
        accountId: "AccountId32",
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
      CandidateBondUpdated: {
        accountId: "AccountId32",
        deposit: "u128",
      },
      CandidateRemoved: {
        accountId: "AccountId32",
      },
      CandidateReplaced: {
        _alias: {
          new_: "new",
        },
        old: "AccountId32",
        new_: "AccountId32",
        deposit: "u128",
      },
      InvalidInvulnerableSkipped: {
        accountId: "AccountId32",
      },
    },
  },
  /** Lookup231: pallet_session::pallet::Event */
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: "u32",
      },
    },
  },
  /** Lookup232: pallet_ema_oracle::pallet::Event<T> */
  PalletEmaOracleEvent: {
    _enum: {
      AddedToWhitelist: {
        source: "[u8;8]",
        assets: "(u32,u32)",
      },
      RemovedFromWhitelist: {
        source: "[u8;8]",
        assets: "(u32,u32)",
      },
    },
  },
  /** Lookup233: frame_system::Phase */
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: "u32",
      Finalization: "Null",
      Initialization: "Null",
    },
  },
  /** Lookup235: frame_system::LastRuntimeUpgradeInfo */
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: "Compact<u32>",
    specName: "Text",
  },
  /** Lookup236: frame_system::CodeUpgradeAuthorization<T> */
  FrameSystemCodeUpgradeAuthorization: {
    codeHash: "H256",
    checkVersion: "bool",
  },
  /** Lookup237: frame_system::pallet::Call<T> */
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
      __Unused8: "Null",
      authorize_upgrade: {
        codeHash: "H256",
      },
      authorize_upgrade_without_checks: {
        codeHash: "H256",
      },
      apply_authorized_upgrade: {
        code: "Bytes",
      },
    },
  },
  /** Lookup241: frame_system::limits::BlockWeights */
  FrameSystemLimitsBlockWeights: {
    baseBlock: "SpWeightsWeightV2Weight",
    maxBlock: "SpWeightsWeightV2Weight",
    perClass: "FrameSupportDispatchPerDispatchClassWeightsPerClass",
  },
  /**
   * Lookup242:
   * frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   */
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: "FrameSystemLimitsWeightsPerClass",
    operational: "FrameSystemLimitsWeightsPerClass",
    mandatory: "FrameSystemLimitsWeightsPerClass",
  },
  /** Lookup243: frame_system::limits::WeightsPerClass */
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: "SpWeightsWeightV2Weight",
    maxExtrinsic: "Option<SpWeightsWeightV2Weight>",
    maxTotal: "Option<SpWeightsWeightV2Weight>",
    reserved: "Option<SpWeightsWeightV2Weight>",
  },
  /** Lookup245: frame_system::limits::BlockLength */
  FrameSystemLimitsBlockLength: {
    max: "FrameSupportDispatchPerDispatchClassU32",
  },
  /** Lookup246: frame_support::dispatch::PerDispatchClass<T> */
  FrameSupportDispatchPerDispatchClassU32: {
    normal: "u32",
    operational: "u32",
    mandatory: "u32",
  },
  /** Lookup247: sp_weights::RuntimeDbWeight */
  SpWeightsRuntimeDbWeight: {
    read: "u64",
    write: "u64",
  },
  /** Lookup248: sp_version::RuntimeVersion */
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
  /** Lookup252: frame_system::pallet::Error<T> */
  FrameSystemError: {
    _enum: [
      "InvalidSpecName",
      "SpecVersionNeedsToIncrease",
      "FailedToExtractRuntimeVersion",
      "NonDefaultComposite",
      "NonZeroRefCount",
      "CallFiltered",
      "NothingAuthorized",
      "Unauthorized",
    ],
  },
  /** Lookup253: pallet_timestamp::pallet::Call<T> */
  PalletTimestampCall: {
    _enum: {
      set: {
        now: "Compact<u64>",
      },
    },
  },
  /** Lookup255: pallet_balances::types::BalanceLock<Balance> */
  PalletBalancesBalanceLock: {
    id: "[u8;8]",
    amount: "u128",
    reasons: "PalletBalancesReasons",
  },
  /** Lookup256: pallet_balances::types::Reasons */
  PalletBalancesReasons: {
    _enum: ["Fee", "Misc", "All"],
  },
  /** Lookup259: pallet_balances::types::ReserveData<ReserveIdentifier, Balance> */
  PalletBalancesReserveData: {
    id: "[u8;8]",
    amount: "u128",
  },
  /** Lookup263: hydradx_runtime::RuntimeHoldReason */
  HydradxRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: "Null",
      __Unused1: "Null",
      __Unused2: "Null",
      __Unused3: "Null",
      __Unused4: "Null",
      __Unused5: "Null",
      __Unused6: "Null",
      __Unused7: "Null",
      __Unused8: "Null",
      __Unused9: "Null",
      __Unused10: "Null",
      __Unused11: "Null",
      __Unused12: "Null",
      __Unused13: "Null",
      __Unused14: "Null",
      Preimage: "PalletPreimageHoldReason",
      __Unused16: "Null",
      __Unused17: "Null",
      __Unused18: "Null",
      __Unused19: "Null",
      __Unused20: "Null",
      __Unused21: "Null",
      __Unused22: "Null",
      __Unused23: "Null",
      __Unused24: "Null",
      __Unused25: "Null",
      __Unused26: "Null",
      __Unused27: "Null",
      __Unused28: "Null",
      __Unused29: "Null",
      __Unused30: "Null",
      __Unused31: "Null",
      __Unused32: "Null",
      __Unused33: "Null",
      __Unused34: "Null",
      StateTrieMigration: "PalletStateTrieMigrationHoldReason",
    },
  },
  /** Lookup264: pallet_preimage::pallet::HoldReason */
  PalletPreimageHoldReason: {
    _enum: ["Preimage"],
  },
  /** Lookup265: pallet_state_trie_migration::pallet::HoldReason */
  PalletStateTrieMigrationHoldReason: {
    _enum: ["SlashForMigrate"],
  },
  /** Lookup268: pallet_balances::types::IdAmount<Id, Balance> */
  PalletBalancesIdAmount: {
    id: "Null",
    amount: "u128",
  },
  /** Lookup270: pallet_balances::pallet::Call<T, I> */
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: "AccountId32",
        value: "Compact<u128>",
      },
      __Unused1: "Null",
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
      upgrade_accounts: {
        who: "Vec<AccountId32>",
      },
      __Unused7: "Null",
      force_set_balance: {
        who: "AccountId32",
        newFree: "Compact<u128>",
      },
      force_adjust_total_issuance: {
        direction: "PalletBalancesAdjustmentDirection",
        delta: "Compact<u128>",
      },
    },
  },
  /** Lookup271: pallet_balances::types::AdjustmentDirection */
  PalletBalancesAdjustmentDirection: {
    _enum: ["Increase", "Decrease"],
  },
  /** Lookup272: pallet_balances::pallet::Error<T, I> */
  PalletBalancesError: {
    _enum: [
      "VestingBalance",
      "LiquidityRestrictions",
      "InsufficientBalance",
      "ExistentialDeposit",
      "Expendability",
      "ExistingVestingSchedule",
      "DeadAccount",
      "TooManyReserves",
      "TooManyHolds",
      "TooManyFreezes",
      "IssuanceDeactivated",
      "DeltaZero",
    ],
  },
  /** Lookup273: pallet_transaction_payment::Releases */
  PalletTransactionPaymentReleases: {
    _enum: ["V1Ancient", "V2"],
  },
  /** Lookup274: pallet_transaction_multi_payment::pallet::Call<T> */
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
      reset_payment_currency: {
        accountId: "AccountId32",
      },
      dispatch_permit: {
        from: "H160",
        to: "H160",
        value: "U256",
        data: "Bytes",
        gasLimit: "u64",
        deadline: "U256",
        v: "u8",
        r: "H256",
        s: "H256",
      },
    },
  },
  /** Lookup277: pallet_transaction_multi_payment::pallet::Error<T> */
  PalletTransactionMultiPaymentError: {
    _enum: [
      "UnsupportedCurrency",
      "ZeroBalance",
      "AlreadyAccepted",
      "CoreAssetNotAllowed",
      "ZeroPrice",
      "FallbackPriceNotFound",
      "Overflow",
      "EvmAccountNotAllowed",
      "EvmPermitExpired",
      "EvmPermitInvalid",
      "EvmPermitCallExecutionError",
      "EvmPermitRunnerError",
    ],
  },
  /** Lookup278: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance> */
  PalletTreasuryProposal: {
    proposer: "AccountId32",
    value: "u128",
    beneficiary: "AccountId32",
    bond: "u128",
  },
  /**
   * Lookup280: pallet_treasury::SpendStatus<AssetKind, AssetBalance,
   * sp_core::crypto::AccountId32, BlockNumber, PaymentId>
   */
  PalletTreasurySpendStatus: {
    assetKind: "Null",
    amount: "u128",
    beneficiary: "AccountId32",
    validFrom: "u32",
    expireAt: "u32",
    status: "PalletTreasuryPaymentState",
  },
  /** Lookup281: pallet_treasury::PaymentState<Id> */
  PalletTreasuryPaymentState: {
    _enum: {
      Pending: "Null",
      Attempted: {
        id: "Null",
      },
      Failed: "Null",
    },
  },
  /** Lookup282: pallet_treasury::pallet::Call<T, I> */
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
      spend_local: {
        amount: "Compact<u128>",
        beneficiary: "AccountId32",
      },
      remove_approval: {
        proposalId: "Compact<u32>",
      },
      spend: {
        assetKind: "Null",
        amount: "Compact<u128>",
        beneficiary: "AccountId32",
        validFrom: "Option<u32>",
      },
      payout: {
        index: "u32",
      },
      check_status: {
        index: "u32",
      },
      void_spend: {
        index: "u32",
      },
    },
  },
  /** Lookup283: frame_support::PalletId */
  FrameSupportPalletId: "[u8;8]",
  /** Lookup284: pallet_treasury::pallet::Error<T, I> */
  PalletTreasuryError: {
    _enum: [
      "InsufficientProposersBalance",
      "InvalidIndex",
      "TooManyApprovals",
      "InsufficientPermission",
      "ProposalNotApproved",
      "FailedToConvertBalance",
      "SpendExpired",
      "EarlyPayout",
      "AlreadyAttempted",
      "PayoutError",
      "NotAttempted",
      "Inconclusive",
    ],
  },
  /** Lookup285: pallet_utility::pallet::Call<T> */
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
  /** Lookup288: pallet_preimage::pallet::Call<T> */
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
      ensure_updated: {
        hashes: "Vec<H256>",
      },
    },
  },
  /** Lookup289: pallet_identity::pallet::Call<T> */
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: "AccountId32",
      },
      set_identity: {
        info: "PalletIdentityLegacyIdentityInfo",
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
        fields: "u64",
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
      add_username_authority: {
        authority: "AccountId32",
        suffix: "Bytes",
        allocation: "u32",
      },
      remove_username_authority: {
        authority: "AccountId32",
      },
      set_username_for: {
        who: "AccountId32",
        username: "Bytes",
        signature: "Option<SpRuntimeMultiSignature>",
      },
      accept_username: {
        username: "Bytes",
      },
      remove_expired_approval: {
        username: "Bytes",
      },
      set_primary_username: {
        username: "Bytes",
      },
      remove_dangling_username: {
        username: "Bytes",
      },
    },
  },
  /** Lookup290: pallet_identity::legacy::IdentityInfo<FieldLimit> */
  PalletIdentityLegacyIdentityInfo: {
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
  /** Lookup326: pallet_identity::types::Judgement<Balance> */
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
  /** Lookup328: sp_runtime::MultiSignature */
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: "SpCoreEd25519Signature",
      Sr25519: "SpCoreSr25519Signature",
      Ecdsa: "SpCoreEcdsaSignature",
    },
  },
  /** Lookup329: sp_core::ed25519::Signature */
  SpCoreEd25519Signature: "[u8;64]",
  /** Lookup331: sp_core::sr25519::Signature */
  SpCoreSr25519Signature: "[u8;64]",
  /** Lookup332: sp_core::ecdsa::Signature */
  SpCoreEcdsaSignature: "[u8;65]",
  /** Lookup334: pallet_democracy::pallet::Call<T> */
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
      set_metadata: {
        owner: "PalletDemocracyMetadataOwner",
        maybeHash: "Option<H256>",
      },
    },
  },
  /**
   * Lookup335:
   * frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall,
   * sp_runtime::traits::BlakeTwo256>
   */
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
  /** Lookup336: sp_runtime::traits::BlakeTwo256 */
  SpRuntimeBlakeTwo256: "Null",
  /** Lookup338: pallet_democracy::conviction::Conviction */
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
  /** Lookup340: pallet_elections_phragmen::pallet::Call<T> */
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
  /** Lookup341: pallet_elections_phragmen::Renouncing */
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: "Null",
      RunnerUp: "Null",
      Candidate: "Compact<u32>",
    },
  },
  /** Lookup342: pallet_collective::pallet::Call<T, I> */
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
      __Unused4: "Null",
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
  /** Lookup344: pallet_tips::pallet::Call<T, I> */
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
  /** Lookup345: pallet_proxy::pallet::Call<T> */
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: "AccountId32",
        forceProxyType: "Option<HydradxRuntimeSystemProxyType>",
        call: "Call",
      },
      add_proxy: {
        delegate: "AccountId32",
        proxyType: "HydradxRuntimeSystemProxyType",
        delay: "u32",
      },
      remove_proxy: {
        delegate: "AccountId32",
        proxyType: "HydradxRuntimeSystemProxyType",
        delay: "u32",
      },
      remove_proxies: "Null",
      create_pure: {
        proxyType: "HydradxRuntimeSystemProxyType",
        delay: "u32",
        index: "u16",
      },
      kill_pure: {
        spawner: "AccountId32",
        proxyType: "HydradxRuntimeSystemProxyType",
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
        forceProxyType: "Option<HydradxRuntimeSystemProxyType>",
        call: "Call",
      },
    },
  },
  /** Lookup347: pallet_multisig::pallet::Call<T> */
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
  /** Lookup349: pallet_uniques::pallet::Call<T, I> */
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
        newOwner: "AccountId32",
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
  /** Lookup350: pallet_uniques::types::DestroyWitness */
  PalletUniquesDestroyWitness: {
    items: "Compact<u32>",
    itemMetadatas: "Compact<u32>",
    attributes: "Compact<u32>",
  },
  /** Lookup351: pallet_state_trie_migration::pallet::Call<T> */
  PalletStateTrieMigrationCall: {
    _enum: {
      control_auto_migration: {
        maybeConfig: "Option<PalletStateTrieMigrationMigrationLimits>",
      },
      continue_migrate: {
        limits: "PalletStateTrieMigrationMigrationLimits",
        realSizeUpper: "u32",
        witnessTask: "PalletStateTrieMigrationMigrationTask",
      },
      migrate_custom_top: {
        _alias: {
          keys_: "keys",
        },
        keys_: "Vec<Bytes>",
        witnessSize: "u32",
      },
      migrate_custom_child: {
        root: "Bytes",
        childKeys: "Vec<Bytes>",
        totalSize: "u32",
      },
      set_signed_max_limits: {
        limits: "PalletStateTrieMigrationMigrationLimits",
      },
      force_set_progress: {
        progressTop: "PalletStateTrieMigrationProgress",
        progressChild: "PalletStateTrieMigrationProgress",
      },
    },
  },
  /** Lookup353: pallet_state_trie_migration::pallet::MigrationLimits */
  PalletStateTrieMigrationMigrationLimits: {
    _alias: {
      size_: "size",
    },
    size_: "u32",
    item: "u32",
  },
  /** Lookup354: pallet_state_trie_migration::pallet::MigrationTask<T> */
  PalletStateTrieMigrationMigrationTask: {
    _alias: {
      size_: "size",
    },
    progressTop: "PalletStateTrieMigrationProgress",
    progressChild: "PalletStateTrieMigrationProgress",
    size_: "u32",
    topItems: "u32",
    childItems: "u32",
  },
  /** Lookup355: pallet_state_trie_migration::pallet::Progress<MaxKeyLen> */
  PalletStateTrieMigrationProgress: {
    _enum: {
      ToStart: "Null",
      LastKey: "Bytes",
      Complete: "Null",
    },
  },
  /** Lookup357: pallet_asset_registry::pallet::Call<T> */
  PalletAssetRegistryCall: {
    _enum: {
      register: {
        assetId: "Option<u32>",
        name: "Option<Bytes>",
        assetType: "PalletAssetRegistryAssetType",
        existentialDeposit: "Option<u128>",
        symbol: "Option<Bytes>",
        decimals: "Option<u8>",
        location: "Option<HydradxRuntimeXcmAssetLocation>",
        xcmRateLimit: "Option<u128>",
        isSufficient: "bool",
      },
      update: {
        assetId: "u32",
        name: "Option<Bytes>",
        assetType: "Option<PalletAssetRegistryAssetType>",
        existentialDeposit: "Option<u128>",
        xcmRateLimit: "Option<u128>",
        isSufficient: "Option<bool>",
        symbol: "Option<Bytes>",
        decimals: "Option<u8>",
        location: "Option<HydradxRuntimeXcmAssetLocation>",
      },
      __Unused2: "Null",
      __Unused3: "Null",
      register_external: {
        location: "HydradxRuntimeXcmAssetLocation",
      },
      ban_asset: {
        assetId: "u32",
      },
      unban_asset: {
        assetId: "u32",
      },
    },
  },
  /** Lookup361: pallet_claims::pallet::Call<T> */
  PalletClaimsCall: {
    _enum: {
      claim: {
        ethereumSignature: "PalletClaimsEcdsaSignature",
      },
    },
  },
  /** Lookup362: pallet_claims::traits::EcdsaSignature */
  PalletClaimsEcdsaSignature: "[u8;65]",
  /** Lookup363: pallet_genesis_history::pallet::Call<T> */
  PalletGenesisHistoryCall: "Null",
  /** Lookup364: pallet_omnipool::pallet::Call<T> */
  PalletOmnipoolCall: {
    _enum: {
      __Unused0: "Null",
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
      __Unused10: "Null",
      withdraw_protocol_liquidity: {
        assetId: "u32",
        amount: "u128",
        price: "(u128,u128)",
        dest: "AccountId32",
      },
      remove_token: {
        assetId: "u32",
        beneficiary: "AccountId32",
      },
      add_liquidity_with_limit: {
        asset: "u32",
        amount: "u128",
        minSharesLimit: "u128",
      },
      remove_liquidity_with_limit: {
        positionId: "u128",
        amount: "u128",
        minLimit: "u128",
      },
    },
  },
  /** Lookup366: pallet_transaction_pause::pallet::Call<T> */
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
  /** Lookup367: pallet_duster::pallet::Call<T> */
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
  /** Lookup368: pallet_liquidity_mining::pallet::Call<T, I> */
  PalletLiquidityMiningCall: "Null",
  /** Lookup369: pallet_omnipool_liquidity_mining::pallet::Call<T> */
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
  /** Lookup370: pallet_otc::pallet::Call<T> */
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
  /** Lookup371: pallet_circuit_breaker::pallet::Call<T> */
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
  /** Lookup372: pallet_route_executor::pallet::Call<T> */
  PalletRouteExecutorCall: {
    _enum: {
      sell: {
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        minAmountOut: "u128",
        route: "Vec<HydradxTraitsRouterTrade>",
      },
      buy: {
        assetIn: "u32",
        assetOut: "u32",
        amountOut: "u128",
        maxAmountIn: "u128",
        route: "Vec<HydradxTraitsRouterTrade>",
      },
      set_route: {
        assetPair: "HydradxTraitsRouterAssetPair",
        newRoute: "Vec<HydradxTraitsRouterTrade>",
      },
      force_insert_route: {
        assetPair: "HydradxTraitsRouterAssetPair",
        newRoute: "Vec<HydradxTraitsRouterTrade>",
      },
    },
  },
  /** Lookup373: hydradx_traits::router::AssetPair<AssetId> */
  HydradxTraitsRouterAssetPair: {
    assetIn: "u32",
    assetOut: "u32",
  },
  /** Lookup374: pallet_dynamic_fees::pallet::Call<T> */
  PalletDynamicFeesCall: "Null",
  /** Lookup375: pallet_staking::pallet::Call<T> */
  PalletStakingCall: {
    _enum: {
      initialize_staking: "Null",
      stake: {
        amount: "u128",
      },
      increase_stake: {
        positionId: "u128",
        amount: "u128",
      },
      claim: {
        positionId: "u128",
      },
      unstake: {
        positionId: "u128",
      },
    },
  },
  /** Lookup376: pallet_stableswap::pallet::Call<T> */
  PalletStableswapCall: {
    _enum: {
      create_pool: {
        shareAsset: "u32",
        assets: "Vec<u32>",
        amplification: "u16",
        fee: "Permill",
      },
      update_pool_fee: {
        poolId: "u32",
        fee: "Permill",
      },
      update_amplification: {
        poolId: "u32",
        finalAmplification: "u16",
        startBlock: "u32",
        endBlock: "u32",
      },
      add_liquidity: {
        poolId: "u32",
        assets: "Vec<PalletStableswapAssetAmount>",
      },
      add_liquidity_shares: {
        poolId: "u32",
        shares: "u128",
        assetId: "u32",
        maxAssetAmount: "u128",
      },
      remove_liquidity_one_asset: {
        poolId: "u32",
        assetId: "u32",
        shareAmount: "u128",
        minAmountOut: "u128",
      },
      withdraw_asset_amount: {
        poolId: "u32",
        assetId: "u32",
        amount: "u128",
        maxShareAmount: "u128",
      },
      sell: {
        poolId: "u32",
        assetIn: "u32",
        assetOut: "u32",
        amountIn: "u128",
        minBuyAmount: "u128",
      },
      buy: {
        poolId: "u32",
        assetOut: "u32",
        assetIn: "u32",
        amountOut: "u128",
        maxSellAmount: "u128",
      },
      set_asset_tradable_state: {
        poolId: "u32",
        assetId: "u32",
        state: "PalletStableswapTradability",
      },
    },
  },
  /** Lookup377: pallet_bonds::pallet::Call<T> */
  PalletBondsCall: {
    _enum: {
      issue: {
        assetId: "u32",
        amount: "u128",
        maturity: "u64",
      },
      redeem: {
        bondId: "u32",
        amount: "u128",
      },
    },
  },
  /** Lookup378: pallet_otc_settlements::pallet::Call<T> */
  PalletOtcSettlementsCall: {
    _enum: {
      settle_otc_order: {
        otcId: "u32",
        amount: "u128",
        route: "Vec<HydradxTraitsRouterTrade>",
      },
    },
  },
  /** Lookup379: pallet_lbp::pallet::Call<T> */
  PalletLbpCall: {
    _enum: {
      create_pool: {
        poolOwner: "AccountId32",
        assetA: "u32",
        assetAAmount: "u128",
        assetB: "u32",
        assetBAmount: "u128",
        initialWeight: "u32",
        finalWeight: "u32",
        weightCurve: "PalletLbpWeightCurveType",
        fee: "(u32,u32)",
        feeCollector: "AccountId32",
        repayTarget: "u128",
      },
      update_pool_data: {
        poolId: "AccountId32",
        poolOwner: "Option<AccountId32>",
        start: "Option<u32>",
        end: "Option<u32>",
        initialWeight: "Option<u32>",
        finalWeight: "Option<u32>",
        fee: "Option<(u32,u32)>",
        feeCollector: "Option<AccountId32>",
        repayTarget: "Option<u128>",
      },
      add_liquidity: {
        amountA: "(u32,u128)",
        amountB: "(u32,u128)",
      },
      remove_liquidity: {
        poolId: "AccountId32",
      },
      sell: {
        assetIn: "u32",
        assetOut: "u32",
        amount: "u128",
        maxLimit: "u128",
      },
      buy: {
        assetOut: "u32",
        assetIn: "u32",
        amount: "u128",
        maxLimit: "u128",
      },
    },
  },
  /** Lookup381: pallet_xyk::pallet::Call<T> */
  PalletXykCall: {
    _enum: {
      create_pool: {
        assetA: "u32",
        amountA: "u128",
        assetB: "u32",
        amountB: "u128",
      },
      add_liquidity: {
        assetA: "u32",
        assetB: "u32",
        amountA: "u128",
        amountBMaxLimit: "u128",
      },
      remove_liquidity: {
        assetA: "u32",
        assetB: "u32",
        liquidityAmount: "u128",
      },
      sell: {
        assetIn: "u32",
        assetOut: "u32",
        amount: "u128",
        maxLimit: "u128",
        discount: "bool",
      },
      buy: {
        assetOut: "u32",
        assetIn: "u32",
        amount: "u128",
        maxLimit: "u128",
        discount: "bool",
      },
    },
  },
  /** Lookup382: pallet_referrals::pallet::Call<T> */
  PalletReferralsCall: {
    _enum: {
      register_code: {
        code: "Bytes",
      },
      link_code: {
        code: "Bytes",
      },
      convert: {
        assetId: "u32",
      },
      claim_rewards: "Null",
      set_reward_percentage: {
        assetId: "u32",
        level: "PalletReferralsLevel",
        rewards: "PalletReferralsFeeDistribution",
      },
    },
  },
  /** Lookup383: orml_tokens::module::Call<T> */
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
  /** Lookup384: pallet_currencies::module::Call<T> */
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
  /** Lookup385: orml_vesting::module::Call<T> */
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
  /** Lookup387: pallet_evm::pallet::Call<T> */
  PalletEvmCall: {
    _enum: {
      withdraw: {
        address: "H160",
        value: "u128",
      },
      call: {
        source: "H160",
        target: "H160",
        input: "Bytes",
        value: "U256",
        gasLimit: "u64",
        maxFeePerGas: "U256",
        maxPriorityFeePerGas: "Option<U256>",
        nonce: "Option<U256>",
        accessList: "Vec<(H160,Vec<H256>)>",
      },
      create: {
        source: "H160",
        init: "Bytes",
        value: "U256",
        gasLimit: "u64",
        maxFeePerGas: "U256",
        maxPriorityFeePerGas: "Option<U256>",
        nonce: "Option<U256>",
        accessList: "Vec<(H160,Vec<H256>)>",
      },
      create2: {
        source: "H160",
        init: "Bytes",
        salt: "H256",
        value: "U256",
        gasLimit: "u64",
        maxFeePerGas: "U256",
        maxPriorityFeePerGas: "Option<U256>",
        nonce: "Option<U256>",
        accessList: "Vec<(H160,Vec<H256>)>",
      },
    },
  },
  /** Lookup391: pallet_ethereum::pallet::Call<T> */
  PalletEthereumCall: {
    _enum: {
      transact: {
        transaction: "EthereumTransactionTransactionV2",
      },
    },
  },
  /** Lookup392: ethereum::transaction::TransactionV2 */
  EthereumTransactionTransactionV2: {
    _enum: {
      Legacy: "EthereumTransactionLegacyTransaction",
      EIP2930: "EthereumTransactionEip2930Transaction",
      EIP1559: "EthereumTransactionEip1559Transaction",
    },
  },
  /** Lookup393: ethereum::transaction::LegacyTransaction */
  EthereumTransactionLegacyTransaction: {
    nonce: "U256",
    gasPrice: "U256",
    gasLimit: "U256",
    action: "EthereumTransactionTransactionAction",
    value: "U256",
    input: "Bytes",
    signature: "EthereumTransactionTransactionSignature",
  },
  /** Lookup394: ethereum::transaction::TransactionAction */
  EthereumTransactionTransactionAction: {
    _enum: {
      Call: "H160",
      Create: "Null",
    },
  },
  /** Lookup395: ethereum::transaction::TransactionSignature */
  EthereumTransactionTransactionSignature: {
    v: "u64",
    r: "H256",
    s: "H256",
  },
  /** Lookup397: ethereum::transaction::EIP2930Transaction */
  EthereumTransactionEip2930Transaction: {
    chainId: "u64",
    nonce: "U256",
    gasPrice: "U256",
    gasLimit: "U256",
    action: "EthereumTransactionTransactionAction",
    value: "U256",
    input: "Bytes",
    accessList: "Vec<EthereumTransactionAccessListItem>",
    oddYParity: "bool",
    r: "H256",
    s: "H256",
  },
  /** Lookup399: ethereum::transaction::AccessListItem */
  EthereumTransactionAccessListItem: {
    address: "H160",
    storageKeys: "Vec<H256>",
  },
  /** Lookup400: ethereum::transaction::EIP1559Transaction */
  EthereumTransactionEip1559Transaction: {
    chainId: "u64",
    nonce: "U256",
    maxPriorityFeePerGas: "U256",
    maxFeePerGas: "U256",
    gasLimit: "U256",
    action: "EthereumTransactionTransactionAction",
    value: "U256",
    input: "Bytes",
    accessList: "Vec<EthereumTransactionAccessListItem>",
    oddYParity: "bool",
    r: "H256",
    s: "H256",
  },
  /** Lookup401: pallet_evm_accounts::pallet::Call<T> */
  PalletEvmAccountsCall: {
    _enum: {
      bind_evm_address: "Null",
      add_contract_deployer: {
        address: "H160",
      },
      remove_contract_deployer: {
        address: "H160",
      },
      renounce_contract_deployer: "Null",
    },
  },
  /** Lookup402: pallet_xyk_liquidity_mining::pallet::Call<T> */
  PalletXykLiquidityMiningCall: {
    _enum: {
      create_global_farm: {
        totalRewards: "u128",
        plannedYieldingPeriods: "u32",
        blocksPerPeriod: "u32",
        incentivizedAsset: "u32",
        rewardCurrency: "u32",
        owner: "AccountId32",
        yieldPerPeriod: "Perquintill",
        minDeposit: "u128",
        priceAdjustment: "u128",
      },
      update_global_farm: {
        globalFarmId: "u32",
        priceAdjustment: "u128",
      },
      terminate_global_farm: {
        globalFarmId: "u32",
      },
      create_yield_farm: {
        globalFarmId: "u32",
        assetPair: "PalletXykAssetPair",
        multiplier: "u128",
        loyaltyCurve: "Option<PalletLiquidityMiningLoyaltyCurve>",
      },
      update_yield_farm: {
        globalFarmId: "u32",
        assetPair: "PalletXykAssetPair",
        multiplier: "u128",
      },
      stop_yield_farm: {
        globalFarmId: "u32",
        assetPair: "PalletXykAssetPair",
      },
      resume_yield_farm: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetPair: "PalletXykAssetPair",
        multiplier: "u128",
      },
      terminate_yield_farm: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetPair: "PalletXykAssetPair",
      },
      deposit_shares: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetPair: "PalletXykAssetPair",
        sharesAmount: "u128",
      },
      redeposit_shares: {
        globalFarmId: "u32",
        yieldFarmId: "u32",
        assetPair: "PalletXykAssetPair",
        depositId: "u128",
      },
      claim_rewards: {
        depositId: "u128",
        yieldFarmId: "u32",
      },
      withdraw_shares: {
        depositId: "u128",
        yieldFarmId: "u32",
        assetPair: "PalletXykAssetPair",
      },
    },
  },
  /** Lookup404: pallet_relaychain_info::pallet::Call<T> */
  PalletRelaychainInfoCall: "Null",
  /** Lookup405: pallet_dca::pallet::Call<T> */
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
   * Lookup406: pallet_dca::types::Schedule<sp_core::crypto::AccountId32,
   * AssetId, BlockNumber>
   */
  PalletDcaSchedule: {
    owner: "AccountId32",
    period: "u32",
    totalAmount: "u128",
    maxRetries: "Option<u8>",
    stabilityThreshold: "Option<Permill>",
    slippage: "Option<Permill>",
    order: "PalletDcaOrder",
  },
  /** Lookup408: pallet_scheduler::pallet::Call<T> */
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
  /** Lookup409: cumulus_pallet_parachain_system::pallet::Call<T> */
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
        checkVersion: "bool",
      },
      enact_authorized_upgrade: {
        code: "Bytes",
      },
    },
  },
  /** Lookup410: cumulus_primitives_parachain_inherent::ParachainInherentData */
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: "PolkadotPrimitivesV6PersistedValidationData",
    relayChainState: "SpTrieStorageProof",
    downwardMessages: "Vec<PolkadotCorePrimitivesInboundDownwardMessage>",
    horizontalMessages:
      "BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>",
  },
  /** Lookup411: polkadot_primitives::v6::PersistedValidationData<primitive_types::H256, N> */
  PolkadotPrimitivesV6PersistedValidationData: {
    parentHead: "Bytes",
    relayParentNumber: "u32",
    relayParentStorageRoot: "H256",
    maxPovSize: "u32",
  },
  /** Lookup413: sp_trie::storage_proof::StorageProof */
  SpTrieStorageProof: {
    trieNodes: "BTreeSet<Bytes>",
  },
  /** Lookup416: polkadot_core_primitives::InboundDownwardMessage<BlockNumber> */
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: "u32",
    msg: "Bytes",
  },
  /** Lookup419: polkadot_core_primitives::InboundHrmpMessage<BlockNumber> */
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: "u32",
    data: "Bytes",
  },
  /** Lookup422: staging_parachain_info::pallet::Call<T> */
  StagingParachainInfoCall: "Null",
  /** Lookup423: pallet_xcm::pallet::Call<T> */
  PalletXcmCall: {
    _enum: {
      send: {
        dest: "XcmVersionedLocation",
        message: "XcmVersionedXcm",
      },
      teleport_assets: {
        dest: "XcmVersionedLocation",
        beneficiary: "XcmVersionedLocation",
        assets: "XcmVersionedAssets",
        feeAssetItem: "u32",
      },
      reserve_transfer_assets: {
        dest: "XcmVersionedLocation",
        beneficiary: "XcmVersionedLocation",
        assets: "XcmVersionedAssets",
        feeAssetItem: "u32",
      },
      execute: {
        message: "XcmVersionedXcm",
        maxWeight: "SpWeightsWeightV2Weight",
      },
      force_xcm_version: {
        location: "StagingXcmV4Location",
        version: "u32",
      },
      force_default_xcm_version: {
        maybeXcmVersion: "Option<u32>",
      },
      force_subscribe_version_notify: {
        location: "XcmVersionedLocation",
      },
      force_unsubscribe_version_notify: {
        location: "XcmVersionedLocation",
      },
      limited_reserve_transfer_assets: {
        dest: "XcmVersionedLocation",
        beneficiary: "XcmVersionedLocation",
        assets: "XcmVersionedAssets",
        feeAssetItem: "u32",
        weightLimit: "XcmV3WeightLimit",
      },
      limited_teleport_assets: {
        dest: "XcmVersionedLocation",
        beneficiary: "XcmVersionedLocation",
        assets: "XcmVersionedAssets",
        feeAssetItem: "u32",
        weightLimit: "XcmV3WeightLimit",
      },
      force_suspension: {
        suspended: "bool",
      },
      transfer_assets: {
        dest: "XcmVersionedLocation",
        beneficiary: "XcmVersionedLocation",
        assets: "XcmVersionedAssets",
        feeAssetItem: "u32",
        weightLimit: "XcmV3WeightLimit",
      },
    },
  },
  /** Lookup424: xcm::VersionedXcm<RuntimeCall> */
  XcmVersionedXcm: {
    _enum: {
      __Unused0: "Null",
      __Unused1: "Null",
      V2: "XcmV2Xcm",
      V3: "XcmV3Xcm",
      V4: "StagingXcmV4Xcm",
    },
  },
  /** Lookup425: xcm::v2::Xcm<RuntimeCall> */
  XcmV2Xcm: "Vec<XcmV2Instruction>",
  /** Lookup427: xcm::v2::Instruction<RuntimeCall> */
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
  /** Lookup428: xcm::v2::Response */
  XcmV2Response: {
    _enum: {
      Null: "Null",
      Assets: "XcmV2MultiassetMultiAssets",
      ExecutionResult: "Option<(u32,XcmV2TraitsError)>",
      Version: "u32",
    },
  },
  /** Lookup431: xcm::v2::traits::Error */
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
  /** Lookup432: xcm::v2::multiasset::MultiAssetFilter */
  XcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: "XcmV2MultiassetMultiAssets",
      Wild: "XcmV2MultiassetWildMultiAsset",
    },
  },
  /** Lookup433: xcm::v2::multiasset::WildMultiAsset */
  XcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: "Null",
      AllOf: {
        id: "XcmV2MultiassetAssetId",
        fun: "XcmV2MultiassetWildFungibility",
      },
    },
  },
  /** Lookup434: xcm::v2::multiasset::WildFungibility */
  XcmV2MultiassetWildFungibility: {
    _enum: ["Fungible", "NonFungible"],
  },
  /** Lookup435: xcm::v2::WeightLimit */
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: "Null",
      Limited: "Compact<u64>",
    },
  },
  /** Lookup436: xcm::v3::Xcm<Call> */
  XcmV3Xcm: "Vec<XcmV3Instruction>",
  /** Lookup438: xcm::v3::Instruction<Call> */
  XcmV3Instruction: {
    _enum: {
      WithdrawAsset: "XcmV3MultiassetMultiAssets",
      ReserveAssetDeposited: "XcmV3MultiassetMultiAssets",
      ReceiveTeleportedAsset: "XcmV3MultiassetMultiAssets",
      QueryResponse: {
        queryId: "Compact<u64>",
        response: "XcmV3Response",
        maxWeight: "SpWeightsWeightV2Weight",
        querier: "Option<StagingXcmV3MultiLocation>",
      },
      TransferAsset: {
        assets: "XcmV3MultiassetMultiAssets",
        beneficiary: "StagingXcmV3MultiLocation",
      },
      TransferReserveAsset: {
        assets: "XcmV3MultiassetMultiAssets",
        dest: "StagingXcmV3MultiLocation",
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
        beneficiary: "StagingXcmV3MultiLocation",
      },
      DepositReserveAsset: {
        assets: "XcmV3MultiassetMultiAssetFilter",
        dest: "StagingXcmV3MultiLocation",
        xcm: "XcmV3Xcm",
      },
      ExchangeAsset: {
        give: "XcmV3MultiassetMultiAssetFilter",
        want: "XcmV3MultiassetMultiAssets",
        maximal: "bool",
      },
      InitiateReserveWithdraw: {
        assets: "XcmV3MultiassetMultiAssetFilter",
        reserve: "StagingXcmV3MultiLocation",
        xcm: "XcmV3Xcm",
      },
      InitiateTeleport: {
        assets: "XcmV3MultiassetMultiAssetFilter",
        dest: "StagingXcmV3MultiLocation",
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
        ticket: "StagingXcmV3MultiLocation",
      },
      Trap: "Compact<u64>",
      SubscribeVersion: {
        queryId: "Compact<u64>",
        maxResponseWeight: "SpWeightsWeightV2Weight",
      },
      UnsubscribeVersion: "Null",
      BurnAsset: "XcmV3MultiassetMultiAssets",
      ExpectAsset: "XcmV3MultiassetMultiAssets",
      ExpectOrigin: "Option<StagingXcmV3MultiLocation>",
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
        unlocker: "StagingXcmV3MultiLocation",
      },
      UnlockAsset: {
        asset: "XcmV3MultiAsset",
        target: "StagingXcmV3MultiLocation",
      },
      NoteUnlockable: {
        asset: "XcmV3MultiAsset",
        owner: "StagingXcmV3MultiLocation",
      },
      RequestUnlock: {
        asset: "XcmV3MultiAsset",
        locker: "StagingXcmV3MultiLocation",
      },
      SetFeesMode: {
        jitWithdraw: "bool",
      },
      SetTopic: "[u8;32]",
      ClearTopic: "Null",
      AliasOrigin: "StagingXcmV3MultiLocation",
      UnpaidExecution: {
        weightLimit: "XcmV3WeightLimit",
        checkOrigin: "Option<StagingXcmV3MultiLocation>",
      },
    },
  },
  /** Lookup439: xcm::v3::Response */
  XcmV3Response: {
    _enum: {
      Null: "Null",
      Assets: "XcmV3MultiassetMultiAssets",
      ExecutionResult: "Option<(u32,XcmV3TraitsError)>",
      Version: "u32",
      PalletsInfo: "Vec<XcmV3PalletInfo>",
      DispatchResult: "XcmV3MaybeErrorCode",
    },
  },
  /** Lookup441: xcm::v3::PalletInfo */
  XcmV3PalletInfo: {
    index: "Compact<u32>",
    name: "Bytes",
    moduleName: "Bytes",
    major: "Compact<u32>",
    minor: "Compact<u32>",
    patch: "Compact<u32>",
  },
  /** Lookup445: xcm::v3::QueryResponseInfo */
  XcmV3QueryResponseInfo: {
    destination: "StagingXcmV3MultiLocation",
    queryId: "Compact<u64>",
    maxWeight: "SpWeightsWeightV2Weight",
  },
  /** Lookup446: xcm::v3::multiasset::MultiAssetFilter */
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: "XcmV3MultiassetMultiAssets",
      Wild: "XcmV3MultiassetWildMultiAsset",
    },
  },
  /** Lookup447: xcm::v3::multiasset::WildMultiAsset */
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
  /** Lookup448: xcm::v3::multiasset::WildFungibility */
  XcmV3MultiassetWildFungibility: {
    _enum: ["Fungible", "NonFungible"],
  },
  /** Lookup460: cumulus_pallet_xcm::pallet::Call<T> */
  CumulusPalletXcmCall: "Null",
  /** Lookup461: pallet_message_queue::pallet::Call<T> */
  PalletMessageQueueCall: {
    _enum: {
      reap_page: {
        messageOrigin: "CumulusPrimitivesCoreAggregateMessageOrigin",
        pageIndex: "u32",
      },
      execute_overweight: {
        messageOrigin: "CumulusPrimitivesCoreAggregateMessageOrigin",
        page: "u32",
        index: "u32",
        weightLimit: "SpWeightsWeightV2Weight",
      },
    },
  },
  /** Lookup462: orml_xcm::module::Call<T> */
  OrmlXcmModuleCall: {
    _enum: {
      send_as_sovereign: {
        dest: "XcmVersionedLocation",
        message: "XcmVersionedXcm",
      },
    },
  },
  /** Lookup463: orml_xtokens::module::Call<T> */
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: "u32",
        amount: "u128",
        dest: "XcmVersionedLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
      transfer_multiasset: {
        asset: "XcmVersionedAsset",
        dest: "XcmVersionedLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
      transfer_with_fee: {
        currencyId: "u32",
        amount: "u128",
        fee: "u128",
        dest: "XcmVersionedLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
      transfer_multiasset_with_fee: {
        asset: "XcmVersionedAsset",
        fee: "XcmVersionedAsset",
        dest: "XcmVersionedLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
      transfer_multicurrencies: {
        currencies: "Vec<(u32,u128)>",
        feeItem: "u32",
        dest: "XcmVersionedLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
      transfer_multiassets: {
        assets: "XcmVersionedAssets",
        feeItem: "u32",
        dest: "XcmVersionedLocation",
        destWeightLimit: "XcmV3WeightLimit",
      },
    },
  },
  /** Lookup464: xcm::VersionedAsset */
  XcmVersionedAsset: {
    _enum: {
      __Unused0: "Null",
      V2: "XcmV2MultiAsset",
      __Unused2: "Null",
      V3: "XcmV3MultiAsset",
      V4: "StagingXcmV4Asset",
    },
  },
  /** Lookup466: pallet_collator_selection::pallet::Call<T> */
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
      add_invulnerable: {
        who: "AccountId32",
      },
      remove_invulnerable: {
        who: "AccountId32",
      },
      update_bond: {
        newDeposit: "u128",
      },
      take_candidate_slot: {
        deposit: "u128",
        target: "AccountId32",
      },
    },
  },
  /** Lookup467: pallet_session::pallet::Call<T> */
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
  /** Lookup468: hydradx_runtime::opaque::SessionKeys */
  HydradxRuntimeOpaqueSessionKeys: {
    aura: "SpConsensusAuraSr25519AppSr25519Public",
  },
  /** Lookup469: sp_consensus_aura::sr25519::app_sr25519::Public */
  SpConsensusAuraSr25519AppSr25519Public: "SpCoreSr25519Public",
  /** Lookup470: sp_core::sr25519::Public */
  SpCoreSr25519Public: "[u8;32]",
  /** Lookup471: pallet_ema_oracle::pallet::Call<T> */
  PalletEmaOracleCall: {
    _enum: {
      add_oracle: {
        source: "[u8;8]",
        assets: "(u32,u32)",
      },
      remove_oracle: {
        source: "[u8;8]",
        assets: "(u32,u32)",
      },
    },
  },
  /** Lookup472: hydradx_runtime::OriginCaller */
  HydradxRuntimeOriginCaller: {
    _enum: {
      __Unused0: "Null",
      system: "FrameSupportDispatchRawOrigin",
      __Unused2: "Null",
      __Unused3: "Null",
      __Unused4: "Null",
      __Unused5: "Null",
      Void: "SpCoreVoid",
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
      Ethereum: "PalletEthereumRawOrigin",
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
  /** Lookup473: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32> */
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: "Null",
      Signed: "AccountId32",
      None: "Null",
    },
  },
  /** Lookup474: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I> */
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: "(u32,u32)",
      Member: "AccountId32",
      _Phantom: "Null",
    },
  },
  /** Lookup476: pallet_ethereum::RawOrigin */
  PalletEthereumRawOrigin: {
    _enum: {
      EthereumTransaction: "H160",
    },
  },
  /** Lookup477: pallet_xcm::pallet::Origin */
  PalletXcmOrigin: {
    _enum: {
      Xcm: "StagingXcmV4Location",
      Response: "StagingXcmV4Location",
    },
  },
  /** Lookup478: cumulus_pallet_xcm::pallet::Origin */
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: "Null",
      SiblingParachain: "u32",
    },
  },
  /** Lookup479: sp_core::Void */
  SpCoreVoid: "Null",
  /** Lookup480: pallet_utility::pallet::Error<T> */
  PalletUtilityError: {
    _enum: ["TooManyCalls"],
  },
  /** Lookup481: pallet_preimage::OldRequestStatus<sp_core::crypto::AccountId32, Balance> */
  PalletPreimageOldRequestStatus: {
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
  /**
   * Lookup483: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32,
   * frame_support::traits::tokens::fungible::HoldConsideration<A, F, R, D>>
   */
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        ticket: "(AccountId32,u128)",
        len: "u32",
      },
      Requested: {
        maybeTicket: "Option<(AccountId32,u128)>",
        count: "u32",
        maybeLen: "Option<u32>",
      },
    },
  },
  /** Lookup489: pallet_preimage::pallet::Error<T> */
  PalletPreimageError: {
    _enum: [
      "TooBig",
      "AlreadyNoted",
      "NotAuthorized",
      "NotNoted",
      "Requested",
      "NotRequested",
      "TooMany",
      "TooFew",
    ],
  },
  /**
   * Lookup491: pallet_identity::types::Registration<Balance, MaxJudgements,
   * pallet_identity::legacy::IdentityInfo<FieldLimit>>
   */
  PalletIdentityRegistration: {
    judgements: "Vec<(u32,PalletIdentityJudgement)>",
    deposit: "u128",
    info: "PalletIdentityLegacyIdentityInfo",
  },
  /**
   * Lookup500: pallet_identity::types::RegistrarInfo<Balance,
   * sp_core::crypto::AccountId32, IdField>
   */
  PalletIdentityRegistrarInfo: {
    account: "AccountId32",
    fee: "u128",
    fields: "u64",
  },
  /**
   * Lookup502:
   * pallet_identity::types::AuthorityProperties<bounded_collections::bounded_vec::BoundedVec<T,
   * S>>
   */
  PalletIdentityAuthorityProperties: {
    suffix: "Bytes",
    allocation: "u32",
  },
  /** Lookup505: pallet_identity::pallet::Error<T> */
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
      "TooManyRegistrars",
      "AlreadyClaimed",
      "NotSub",
      "NotOwned",
      "JudgementForDifferentIdentity",
      "JudgementPaymentFailed",
      "InvalidSuffix",
      "NotUsernameAuthority",
      "NoAllocation",
      "InvalidSignature",
      "RequiresSignature",
      "InvalidUsername",
      "UsernameTaken",
      "NoUsername",
      "NotExpired",
    ],
  },
  /**
   * Lookup511: pallet_democracy::types::ReferendumInfo<BlockNumber,
   * frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall,
   * sp_runtime::traits::BlakeTwo256>, Balance>
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
   * Lookup512: pallet_democracy::types::ReferendumStatus<BlockNumber,
   * frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall,
   * sp_runtime::traits::BlakeTwo256>, Balance>
   */
  PalletDemocracyReferendumStatus: {
    end: "u32",
    proposal: "FrameSupportPreimagesBounded",
    threshold: "PalletDemocracyVoteThreshold",
    delay: "u32",
    tally: "PalletDemocracyTally",
  },
  /** Lookup513: pallet_democracy::types::Tally<Balance> */
  PalletDemocracyTally: {
    ayes: "u128",
    nays: "u128",
    turnout: "u128",
  },
  /**
   * Lookup514: pallet_democracy::vote::Voting<Balance,
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
  /** Lookup518: pallet_democracy::types::Delegations<Balance> */
  PalletDemocracyDelegations: {
    votes: "u128",
    capital: "u128",
  },
  /** Lookup519: pallet_democracy::vote::PriorLock<BlockNumber, Balance> */
  PalletDemocracyVotePriorLock: "(u32,u128)",
  /** Lookup522: pallet_democracy::pallet::Error<T> */
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
      "PreimageNotExist",
    ],
  },
  /**
   * Lookup524:
   * pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   */
  PalletElectionsPhragmenSeatHolder: {
    who: "AccountId32",
    stake: "u128",
    deposit: "u128",
  },
  /** Lookup525: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance> */
  PalletElectionsPhragmenVoter: {
    votes: "Vec<AccountId32>",
    stake: "u128",
    deposit: "u128",
  },
  /** Lookup526: pallet_elections_phragmen::pallet::Error<T> */
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
  /** Lookup528: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber> */
  PalletCollectiveVotes: {
    index: "u32",
    threshold: "u32",
    ayes: "Vec<AccountId32>",
    nays: "Vec<AccountId32>",
    end: "u32",
  },
  /** Lookup529: pallet_collective::pallet::Error<T, I> */
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
      "PrimeAccountNotMember",
    ],
  },
  /**
   * Lookup532: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance,
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
  /** Lookup534: pallet_tips::pallet::Error<T, I> */
  PalletTipsError: {
    _enum: [
      "ReasonTooBig",
      "AlreadyKnown",
      "UnknownTip",
      "MaxTipAmountExceeded",
      "NotFinder",
      "StillOpen",
      "Premature",
    ],
  },
  /**
   * Lookup537: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32,
   * hydradx_runtime::system::ProxyType, BlockNumber>
   */
  PalletProxyProxyDefinition: {
    delegate: "AccountId32",
    proxyType: "HydradxRuntimeSystemProxyType",
    delay: "u32",
  },
  /**
   * Lookup541: pallet_proxy::Announcement<sp_core::crypto::AccountId32,
   * primitive_types::H256, BlockNumber>
   */
  PalletProxyAnnouncement: {
    real: "AccountId32",
    callHash: "H256",
    height: "u32",
  },
  /** Lookup543: pallet_proxy::pallet::Error<T> */
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
   * Lookup545: pallet_multisig::Multisig<BlockNumber, Balance,
   * sp_core::crypto::AccountId32, MaxApprovals>
   */
  PalletMultisigMultisig: {
    when: "PalletMultisigTimepoint",
    deposit: "u128",
    depositor: "AccountId32",
    approvals: "Vec<AccountId32>",
  },
  /** Lookup547: pallet_multisig::pallet::Error<T> */
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
   * Lookup548:
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
   * Lookup550: pallet_uniques::types::ItemDetails<sp_core::crypto::AccountId32,
   * DepositBalance>
   */
  PalletUniquesItemDetails: {
    owner: "AccountId32",
    approved: "Option<AccountId32>",
    isFrozen: "bool",
    deposit: "u128",
  },
  /** Lookup551: pallet_uniques::types::CollectionMetadata<DepositBalance, StringLimit> */
  PalletUniquesCollectionMetadata: {
    deposit: "u128",
    data: "Bytes",
    isFrozen: "bool",
  },
  /** Lookup552: pallet_uniques::types::ItemMetadata<DepositBalance, StringLimit> */
  PalletUniquesItemMetadata: {
    deposit: "u128",
    data: "Bytes",
    isFrozen: "bool",
  },
  /** Lookup556: pallet_uniques::pallet::Error<T, I> */
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
  /** Lookup557: pallet_asset_registry::types::AssetDetails<StringLimit> */
  PalletAssetRegistryAssetDetails: {
    name: "Option<Bytes>",
    assetType: "PalletAssetRegistryAssetType",
    existentialDeposit: "u128",
    symbol: "Option<Bytes>",
    decimals: "Option<u8>",
    xcmRateLimit: "Option<u128>",
    isSufficient: "bool",
  },
  /** Lookup558: pallet_asset_registry::pallet::Error<T> */
  PalletAssetRegistryError: {
    _enum: [
      "NoIdAvailable",
      "AssetNotFound",
      "TooShort",
      "InvalidSymbol",
      "AssetNotRegistered",
      "AssetAlreadyRegistered",
      "InvalidSharedAssetLen",
      "CannotUpdateLocation",
      "NotInReservedRange",
      "LocationAlreadyRegistered",
      "Forbidden",
      "InsufficientBalance",
      "ForbiddenSufficiencyChange",
      "AssetAlreadyBanned",
      "AssetNotBanned",
    ],
  },
  /** Lookup559: pallet_claims::pallet::Error<T> */
  PalletClaimsError: {
    _enum: [
      "InvalidEthereumSignature",
      "NoClaimOrAlreadyClaimed",
      "BalanceOverflow",
    ],
  },
  /** Lookup560: pallet_genesis_history::Chain */
  PalletGenesisHistoryChain: {
    genesisHash: "H256",
    lastBlockHash: "H256",
  },
  /** Lookup562: pallet_collator_rewards::pallet::Error<T> */
  PalletCollatorRewardsError: "Null",
  /** Lookup563: pallet_omnipool::types::AssetState<Balance> */
  PalletOmnipoolAssetState: {
    hubReserve: "u128",
    shares: "u128",
    protocolShares: "u128",
    cap: "u128",
    tradable: "PalletOmnipoolTradability",
  },
  /** Lookup564: pallet_omnipool::types::SimpleImbalance<Balance> */
  PalletOmnipoolSimpleImbalance: {
    value: "u128",
    negative: "bool",
  },
  /** Lookup565: pallet_omnipool::types::Position<Balance, AssetId> */
  PalletOmnipoolPosition: {
    assetId: "u32",
    amount: "u128",
    shares: "u128",
    price: "(u128,u128)",
  },
  /** Lookup566: pallet_omnipool::pallet::Error<T> */
  PalletOmnipoolError: {
    _enum: [
      "InsufficientBalance",
      "AssetAlreadyAdded",
      "AssetNotFound",
      "MissingBalance",
      "InvalidInitialAssetPrice",
      "BuyLimitNotReached",
      "SellLimitExceeded",
      "PositionNotFound",
      "InsufficientShares",
      "NotAllowed",
      "Forbidden",
      "AssetWeightCapExceeded",
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
      "FeeOverdraft",
      "SharesRemaining",
      "AssetNotFrozen",
      "ZeroAmountOut",
      "ExistentialDepositNotAvailable",
      "SlippageLimit",
    ],
  },
  /** Lookup569: pallet_transaction_pause::pallet::Error<T> */
  PalletTransactionPauseError: {
    _enum: ["CannotPause", "InvalidCharacter", "NameTooLong"],
  },
  /** Lookup570: pallet_duster::pallet::Error<T> */
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
  /** Lookup571: pallet_liquidity_mining::types::GlobalFarmData<T, I> */
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
  /** Lookup572: pallet_liquidity_mining::types::FarmState */
  PalletLiquidityMiningFarmState: {
    _enum: ["Active", "Stopped", "Terminated"],
  },
  /** Lookup574: pallet_liquidity_mining::types::YieldFarmData<T, I> */
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
  /** Lookup575: pallet_liquidity_mining::types::DepositData<T, I> */
  PalletLiquidityMiningDepositData: {
    shares: "u128",
    ammPoolId: "u32",
    yieldFarmEntries: "Vec<PalletLiquidityMiningYieldFarmEntry>",
  },
  /** Lookup577: pallet_liquidity_mining::types::YieldFarmEntry<T, I> */
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
  /** Lookup579: pallet_liquidity_mining::pallet::Error<T, I> */
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
  /** Lookup580: pallet_liquidity_mining::pallet::InconsistentStateError */
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
      "NoExistentialDepositForAsset",
    ],
  },
  /** Lookup581: hydradx_traits::oracle::OraclePeriod */
  HydradxTraitsOracleOraclePeriod: {
    _enum: ["LastBlock", "Short", "TenMinutes", "Hour", "Day", "Week"],
  },
  /** Lookup582: pallet_omnipool_liquidity_mining::pallet::Error<T> */
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
  /** Lookup583: pallet_omnipool_liquidity_mining::pallet::InconsistentStateError */
  PalletOmnipoolLiquidityMiningInconsistentStateError: {
    _enum: ["MissingLpPosition", "DepositDataNotFound"],
  },
  /** Lookup584: pallet_otc::Order<sp_core::crypto::AccountId32, AssetId> */
  PalletOtcOrder: {
    owner: "AccountId32",
    assetIn: "u32",
    assetOut: "u32",
    amountIn: "u128",
    amountOut: "u128",
    partiallyFillable: "bool",
  },
  /** Lookup585: pallet_otc::pallet::Error<T> */
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
  /** Lookup586: pallet_circuit_breaker::TradeVolumeLimit<T> */
  PalletCircuitBreakerTradeVolumeLimit: {
    volumeIn: "u128",
    volumeOut: "u128",
    limit: "u128",
  },
  /** Lookup587: pallet_circuit_breaker::LiquidityLimit<T> */
  PalletCircuitBreakerLiquidityLimit: {
    liquidity: "u128",
    limit: "u128",
  },
  /** Lookup588: pallet_circuit_breaker::pallet::Error<T> */
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
  /** Lookup589: pallet_route_executor::pallet::Error<T> */
  PalletRouteExecutorError: {
    _enum: [
      "TradingLimitReached",
      "MaxTradesExceeded",
      "PoolNotSupported",
      "InsufficientBalance",
      "RouteCalculationFailed",
      "InvalidRoute",
      "RouteUpdateIsNotSuccessful",
      "InsufficientAssetNotSupported",
      "InvalidRouteExecution",
      "NotAllowed",
    ],
  },
  /**
   * Lookup590:
   * pallet_dynamic_fees::types::FeeEntry<sp_arithmetic::per_things::Permill, Block>
   */
  PalletDynamicFeesFeeEntry: {
    assetFee: "Permill",
    protocolFee: "Permill",
    timestamp: "u32",
  },
  /** Lookup591: pallet_dynamic_fees::types::FeeParams<sp_arithmetic::per_things::Permill> */
  PalletDynamicFeesFeeParams: {
    minFee: "Permill",
    maxFee: "Permill",
    decay: "u128",
    amplification: "u128",
  },
  /** Lookup592: pallet_dynamic_fees::pallet::Error<T> */
  PalletDynamicFeesError: "Null",
  /** Lookup593: pallet_staking::types::StakingData */
  PalletStakingStakingData: {
    totalStake: "u128",
    accumulatedRewardPerStake: "u128",
    potReservedBalance: "u128",
  },
  /** Lookup594: pallet_staking::types::Position<BlockNumber> */
  PalletStakingPosition: {
    stake: "u128",
    actionPoints: "u128",
    rewardPerStake: "u128",
    createdAt: "u32",
    accumulatedSlashPoints: "u128",
    accumulatedUnpaidRewards: "u128",
    accumulatedLockedRewards: "u128",
  },
  /** Lookup595: pallet_staking::types::Voting<MaxVotes> */
  PalletStakingVoting: {
    votes: "Vec<(u32,PalletStakingVote)>",
  },
  /** Lookup598: pallet_staking::types::Vote */
  PalletStakingVote: {
    amount: "u128",
    conviction: "PalletStakingConviction",
  },
  /** Lookup599: pallet_staking::types::Conviction */
  PalletStakingConviction: {
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
  /** Lookup602: pallet_staking::pallet::Error<T> */
  PalletStakingError: {
    _enum: {
      InsufficientBalance: "Null",
      InsufficientStake: "Null",
      PositionNotFound: "Null",
      MaxVotesReached: "Null",
      NotInitialized: "Null",
      AlreadyInitialized: "Null",
      Arithmetic: "Null",
      MissingPotBalance: "Null",
      PositionAlreadyExists: "Null",
      Forbidden: "Null",
      ExistingVotes: "Null",
      ExistingProcessedVotes: "Null",
      InconsistentState: "PalletStakingInconsistentStateError",
    },
  },
  /** Lookup603: pallet_staking::pallet::InconsistentStateError */
  PalletStakingInconsistentStateError: {
    _enum: [
      "PositionNotFound",
      "NegativePendingRewards",
      "NegativeUnpaidRewards",
      "TooManyPositions",
      "Arithmetic",
    ],
  },
  /** Lookup604: pallet_stableswap::types::PoolInfo<AssetId, BlockNumber> */
  PalletStableswapPoolInfo: {
    assets: "Vec<u32>",
    initialAmplification: "u16",
    finalAmplification: "u16",
    initialBlock: "u32",
    finalBlock: "u32",
    fee: "Permill",
  },
  /** Lookup607: pallet_stableswap::pallet::Error<T> */
  PalletStableswapError: {
    _enum: [
      "IncorrectAssets",
      "MaxAssetsExceeded",
      "PoolNotFound",
      "PoolExists",
      "AssetNotInPool",
      "ShareAssetNotRegistered",
      "ShareAssetInPoolAssets",
      "AssetNotRegistered",
      "InvalidAssetAmount",
      "InsufficientBalance",
      "InsufficientShares",
      "InsufficientLiquidity",
      "InsufficientLiquidityRemaining",
      "InsufficientTradingAmount",
      "BuyLimitNotReached",
      "SellLimitExceeded",
      "InvalidInitialLiquidity",
      "InvalidAmplification",
      "InsufficientShareBalance",
      "NotAllowed",
      "PastBlock",
      "SameAmplification",
      "SlippageLimit",
      "UnknownDecimals",
    ],
  },
  /** Lookup609: pallet_bonds::pallet::Error<T> */
  PalletBondsError: {
    _enum: [
      "NotRegistered",
      "NotMature",
      "InvalidMaturity",
      "DisallowedAsset",
      "AssetNotFound",
      "InvalidBondName",
      "FailToParseName",
    ],
  },
  /** Lookup610: pallet_otc_settlements::pallet::Error<T> */
  PalletOtcSettlementsError: {
    _enum: [
      "OrderNotFound",
      "NotPartiallyFillable",
      "InvalidRoute",
      "BalanceInconsistency",
      "TradeAmountTooHigh",
      "TradeAmountTooLow",
      "PriceNotAvailable",
    ],
  },
  /** Lookup611: pallet_lbp::pallet::Error<T> */
  PalletLbpError: {
    _enum: [
      "CannotCreatePoolWithSameAssets",
      "NotOwner",
      "SaleStarted",
      "SaleNotEnded",
      "SaleIsNotRunning",
      "MaxSaleDurationExceeded",
      "CannotAddZeroLiquidity",
      "InsufficientAssetBalance",
      "PoolNotFound",
      "PoolAlreadyExists",
      "InvalidBlockRange",
      "WeightCalculationError",
      "InvalidWeight",
      "ZeroAmount",
      "MaxInRatioExceeded",
      "MaxOutRatioExceeded",
      "FeeAmountInvalid",
      "TradingLimitReached",
      "Overflow",
      "NothingToUpdate",
      "InsufficientLiquidity",
      "InsufficientTradingAmount",
      "FeeCollectorWithAssetAlreadyUsed",
    ],
  },
  /** Lookup612: pallet_xyk::pallet::Error<T> */
  PalletXykError: {
    _enum: [
      "CannotCreatePoolWithSameAssets",
      "InsufficientLiquidity",
      "InsufficientTradingAmount",
      "ZeroLiquidity",
      "ZeroInitialPrice",
      "CreatePoolAssetAmountInvalid",
      "InvalidMintedLiquidity",
      "InvalidLiquidityAmount",
      "AssetAmountExceededLimit",
      "AssetAmountNotReachedLimit",
      "InsufficientAssetBalance",
      "InsufficientPoolAssetBalance",
      "InsufficientNativeCurrencyBalance",
      "TokenPoolNotFound",
      "TokenPoolAlreadyExists",
      "AddAssetAmountInvalid",
      "RemoveAssetAmountInvalid",
      "SellAssetAmountInvalid",
      "BuyAssetAmountInvalid",
      "FeeAmountInvalid",
      "CannotApplyDiscount",
      "MaxOutRatioExceeded",
      "MaxInRatioExceeded",
      "Overflow",
      "CannotCreatePool",
    ],
  },
  /** Lookup616: pallet_referrals::pallet::Error<T> */
  PalletReferralsError: {
    _enum: [
      "TooLong",
      "TooShort",
      "InvalidCharacter",
      "AlreadyExists",
      "InvalidCode",
      "AlreadyLinked",
      "ZeroAmount",
      "LinkNotAllowed",
      "IncorrectRewardCalculation",
      "IncorrectRewardPercentage",
      "AlreadyRegistered",
      "PriceNotFound",
      "ConversionMinTradingAmountNotReached",
      "ConversionZeroAmountReceived",
    ],
  },
  /** Lookup618: orml_tokens::BalanceLock<Balance> */
  OrmlTokensBalanceLock: {
    id: "[u8;8]",
    amount: "u128",
  },
  /** Lookup620: orml_tokens::AccountData<Balance> */
  OrmlTokensAccountData: {
    free: "u128",
    reserved: "u128",
    frozen: "u128",
  },
  /** Lookup622: orml_tokens::ReserveData<ReserveIdentifier, Balance> */
  OrmlTokensReserveData: {
    id: "[u8;8]",
    amount: "u128",
  },
  /** Lookup624: orml_tokens::module::Error<T> */
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
  /** Lookup625: pallet_currencies::module::Error<T> */
  PalletCurrenciesModuleError: {
    _enum: ["AmountIntoBalanceFailed", "BalanceTooLow", "DepositFailed"],
  },
  /** Lookup627: orml_vesting::module::Error<T> */
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
  /** Lookup628: pallet_evm::CodeMetadata */
  PalletEvmCodeMetadata: {
    _alias: {
      size_: "size",
      hash_: "hash",
    },
    size_: "u64",
    hash_: "H256",
  },
  /** Lookup630: pallet_evm::pallet::Error<T> */
  PalletEvmError: {
    _enum: [
      "BalanceLow",
      "FeeOverflow",
      "PaymentOverflow",
      "WithdrawFailed",
      "GasPriceTooLow",
      "InvalidNonce",
      "GasLimitTooLow",
      "GasLimitTooHigh",
      "InvalidChainId",
      "InvalidSignature",
      "Reentrancy",
      "TransactionMustComeFromEOA",
      "InvalidTransaction",
      "Undefined",
    ],
  },
  /** Lookup633: fp_rpc::TransactionStatus */
  FpRpcTransactionStatus: {
    transactionHash: "H256",
    transactionIndex: "u32",
    from: "H160",
    to: "Option<H160>",
    contractAddress: "Option<H160>",
    logs: "Vec<EthereumLog>",
    logsBloom: "EthbloomBloom",
  },
  /** Lookup636: ethbloom::Bloom */
  EthbloomBloom: "[u8;256]",
  /** Lookup638: ethereum::receipt::ReceiptV3 */
  EthereumReceiptReceiptV3: {
    _enum: {
      Legacy: "EthereumReceiptEip658ReceiptData",
      EIP2930: "EthereumReceiptEip658ReceiptData",
      EIP1559: "EthereumReceiptEip658ReceiptData",
    },
  },
  /** Lookup639: ethereum::receipt::EIP658ReceiptData */
  EthereumReceiptEip658ReceiptData: {
    statusCode: "u8",
    usedGas: "U256",
    logsBloom: "EthbloomBloom",
    logs: "Vec<EthereumLog>",
  },
  /**
   * Lookup640:
   * ethereum::block::Block[ethereum::transaction::TransactionV2](ethereum::transaction::TransactionV2)
   */
  EthereumBlock: {
    header: "EthereumHeader",
    transactions: "Vec<EthereumTransactionTransactionV2>",
    ommers: "Vec<EthereumHeader>",
  },
  /** Lookup641: ethereum::header::Header */
  EthereumHeader: {
    parentHash: "H256",
    ommersHash: "H256",
    beneficiary: "H160",
    stateRoot: "H256",
    transactionsRoot: "H256",
    receiptsRoot: "H256",
    logsBloom: "EthbloomBloom",
    difficulty: "U256",
    number: "U256",
    gasLimit: "U256",
    gasUsed: "U256",
    timestamp: "u64",
    extraData: "Bytes",
    mixHash: "H256",
    nonce: "EthereumTypesHashH64",
  },
  /** Lookup642: ethereum_types::hash::H64 */
  EthereumTypesHashH64: "[u8;8]",
  /** Lookup647: pallet_ethereum::pallet::Error<T> */
  PalletEthereumError: {
    _enum: ["InvalidSignature", "PreLogExists"],
  },
  /** Lookup648: pallet_evm_accounts::pallet::Error<T> */
  PalletEvmAccountsError: {
    _enum: [
      "TruncatedAccountAlreadyUsed",
      "AddressAlreadyBound",
      "BoundAddressCannotBeUsed",
      "AddressNotWhitelisted",
    ],
  },
  /** Lookup649: pallet_xyk_liquidity_mining::pallet::Error<T> */
  PalletXykLiquidityMiningError: {
    _enum: [
      "CantFindDepositOwner",
      "InsufficientXykSharesBalance",
      "XykPoolDoesntExist",
      "NotDepositOwner",
      "CantGetXykAssets",
      "DepositDataNotFound",
      "ZeroClaimedRewards",
      "AssetNotInAssetPair",
      "InvalidAssetPair",
      "AssetNotRegistered",
      "FailToGetPotId",
    ],
  },
  /** Lookup658: pallet_relaychain_info::pallet::Error<T> */
  PalletRelaychainInfoError: "Null",
  /** Lookup660: pallet_dca::pallet::Error<T> */
  PalletDcaError: {
    _enum: [
      "ScheduleNotFound",
      "MinTradeAmountNotReached",
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
      "NoParentHashFound",
      "InvalidState",
    ],
  },
  /**
   * Lookup663: pallet_scheduler::Scheduled<Name,
   * frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall,
   * sp_runtime::traits::BlakeTwo256>, BlockNumber,
   * hydradx_runtime::OriginCaller, sp_core::crypto::AccountId32>
   */
  PalletSchedulerScheduled: {
    maybeId: "Option<[u8;32]>",
    priority: "u8",
    call: "FrameSupportPreimagesBounded",
    maybePeriodic: "Option<(u32,u32)>",
    origin: "HydradxRuntimeOriginCaller",
  },
  /** Lookup665: pallet_scheduler::pallet::Error<T> */
  PalletSchedulerError: {
    _enum: [
      "FailedToSchedule",
      "NotFound",
      "TargetBlockNumberInPast",
      "RescheduleNoChange",
      "Named",
    ],
  },
  /**
   * Lookup667:
   * cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
   */
  CumulusPalletParachainSystemUnincludedSegmentAncestor: {
    usedBandwidth: "CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth",
    paraHeadHash: "Option<H256>",
    consumedGoAheadSignal: "Option<PolkadotPrimitivesV6UpgradeGoAhead>",
  },
  /** Lookup668: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth */
  CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
    umpMsgCount: "u32",
    umpTotalBytes: "u32",
    hrmpOutgoing:
      "BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>",
  },
  /** Lookup670: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate */
  CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
    msgCount: "u32",
    totalBytes: "u32",
  },
  /** Lookup674: polkadot_primitives::v6::UpgradeGoAhead */
  PolkadotPrimitivesV6UpgradeGoAhead: {
    _enum: ["Abort", "GoAhead"],
  },
  /**
   * Lookup675:
   * cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
   */
  CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
    usedBandwidth: "CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth",
    hrmpWatermark: "Option<u32>",
    consumedGoAheadSignal: "Option<PolkadotPrimitivesV6UpgradeGoAhead>",
  },
  /** Lookup677: polkadot_primitives::v6::UpgradeRestriction */
  PolkadotPrimitivesV6UpgradeRestriction: {
    _enum: ["Present"],
  },
  /**
   * Lookup678:
   * cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   */
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: "H256",
    relayDispatchQueueRemainingCapacity:
      "CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity",
    ingressChannels: "Vec<(u32,PolkadotPrimitivesV6AbridgedHrmpChannel)>",
    egressChannels: "Vec<(u32,PolkadotPrimitivesV6AbridgedHrmpChannel)>",
  },
  /**
   * Lookup679:
   * cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
   */
  CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity:
    {
      remainingCount: "u32",
      remainingSize: "u32",
    },
  /** Lookup682: polkadot_primitives::v6::AbridgedHrmpChannel */
  PolkadotPrimitivesV6AbridgedHrmpChannel: {
    maxCapacity: "u32",
    maxTotalSize: "u32",
    maxMessageSize: "u32",
    msgCount: "u32",
    totalSize: "u32",
    mqcHead: "Option<H256>",
  },
  /** Lookup683: polkadot_primitives::v6::AbridgedHostConfiguration */
  PolkadotPrimitivesV6AbridgedHostConfiguration: {
    maxCodeSize: "u32",
    maxHeadDataSize: "u32",
    maxUpwardQueueCount: "u32",
    maxUpwardQueueSize: "u32",
    maxUpwardMessageSize: "u32",
    maxUpwardMessageNumPerCandidate: "u32",
    hrmpMaxMessageNumPerCandidate: "u32",
    validationUpgradeCooldown: "u32",
    validationUpgradeDelay: "u32",
    asyncBackingParams: "PolkadotPrimitivesV6AsyncBackingAsyncBackingParams",
  },
  /** Lookup684: polkadot_primitives::v6::async_backing::AsyncBackingParams */
  PolkadotPrimitivesV6AsyncBackingAsyncBackingParams: {
    maxCandidateDepth: "u32",
    allowedAncestryLen: "u32",
  },
  /**
   * Lookup690:
   * polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
   */
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: "u32",
    data: "Bytes",
  },
  /** Lookup691: cumulus_pallet_parachain_system::pallet::Error<T> */
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
  /** Lookup692: pallet_xcm::pallet::QueryStatus<BlockNumber> */
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: "XcmVersionedLocation",
        maybeMatchQuerier: "Option<XcmVersionedLocation>",
        maybeNotify: "Option<(u8,u8)>",
        timeout: "u32",
      },
      VersionNotifier: {
        origin: "XcmVersionedLocation",
        isActive: "bool",
      },
      Ready: {
        response: "XcmVersionedResponse",
        at: "u32",
      },
    },
  },
  /** Lookup696: xcm::VersionedResponse */
  XcmVersionedResponse: {
    _enum: {
      __Unused0: "Null",
      __Unused1: "Null",
      V2: "XcmV2Response",
      V3: "XcmV3Response",
      V4: "StagingXcmV4Response",
    },
  },
  /** Lookup702: pallet_xcm::pallet::VersionMigrationStage */
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: "Null",
      MigrateVersionNotifiers: "Null",
      NotifyCurrentTargets: "Option<Bytes>",
      MigrateAndNotifyOldTargets: "Null",
    },
  },
  /** Lookup705: xcm::VersionedAssetId */
  XcmVersionedAssetId: {
    _enum: {
      __Unused0: "Null",
      __Unused1: "Null",
      __Unused2: "Null",
      V3: "XcmV3MultiassetAssetId",
      V4: "StagingXcmV4AssetAssetId",
    },
  },
  /**
   * Lookup706:
   * pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   */
  PalletXcmRemoteLockedFungibleRecord: {
    amount: "u128",
    owner: "XcmVersionedLocation",
    locker: "XcmVersionedLocation",
    consumers: "Vec<(Null,u128)>",
  },
  /** Lookup713: pallet_xcm::pallet::Error<T> */
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
      "CannotCheckOutTeleport",
      "LowBalance",
      "TooManyLocks",
      "AccountNotSovereign",
      "FeesNotMet",
      "LockNotFound",
      "InUse",
      "InvalidAssetNotConcrete",
      "InvalidAssetUnknownReserve",
      "InvalidAssetUnsupportedReserve",
      "TooManyReserves",
      "LocalExecutionIncomplete",
    ],
  },
  /** Lookup718: cumulus_pallet_xcmp_queue::OutboundChannelDetails */
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: "u32",
    state: "CumulusPalletXcmpQueueOutboundState",
    signalsExist: "bool",
    firstIndex: "u16",
    lastIndex: "u16",
  },
  /** Lookup719: cumulus_pallet_xcmp_queue::OutboundState */
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ["Ok", "Suspended"],
  },
  /** Lookup721: cumulus_pallet_xcmp_queue::QueueConfigData */
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: "u32",
    dropThreshold: "u32",
    resumeThreshold: "u32",
  },
  /** Lookup722: cumulus_pallet_xcmp_queue::pallet::Error<T> */
  CumulusPalletXcmpQueueError: {
    _enum: ["BadQueueConfig", "AlreadySuspended", "AlreadyResumed"],
  },
  /**
   * Lookup723:
   * pallet_message_queue::BookState<cumulus_primitives_core::AggregateMessageOrigin>
   */
  PalletMessageQueueBookState: {
    _alias: {
      size_: "size",
    },
    begin: "u32",
    end: "u32",
    count: "u32",
    readyNeighbours: "Option<PalletMessageQueueNeighbours>",
    messageCount: "u64",
    size_: "u64",
  },
  /**
   * Lookup725:
   * pallet_message_queue::Neighbours<cumulus_primitives_core::AggregateMessageOrigin>
   */
  PalletMessageQueueNeighbours: {
    prev: "CumulusPrimitivesCoreAggregateMessageOrigin",
    next: "CumulusPrimitivesCoreAggregateMessageOrigin",
  },
  /** Lookup727: pallet_message_queue::Page<Size, HeapSize> */
  PalletMessageQueuePage: {
    remaining: "u32",
    remainingSize: "u32",
    firstIndex: "u32",
    first: "u32",
    last: "u32",
    heap: "Bytes",
  },
  /** Lookup729: pallet_message_queue::pallet::Error<T> */
  PalletMessageQueueError: {
    _enum: [
      "NotReapable",
      "NoPage",
      "NoMessage",
      "AlreadyProcessed",
      "Queued",
      "InsufficientWeight",
      "TemporarilyUnprocessable",
      "QueuePaused",
      "RecursiveDisallowed",
    ],
  },
  /** Lookup730: orml_xcm::module::Error<T> */
  OrmlXcmModuleError: {
    _enum: ["Unreachable", "SendFailure", "BadVersion"],
  },
  /** Lookup731: orml_xtokens::module::Error<T> */
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
      "NotSupportedLocation",
      "MinXcmFeeNotDefined",
      "RateLimited",
    ],
  },
  /** Lookup734: orml_unknown_tokens::module::Error<T> */
  OrmlUnknownTokensModuleError: {
    _enum: ["BalanceTooLow", "BalanceOverflow", "UnhandledAsset"],
  },
  /**
   * Lookup736:
   * pallet_collator_selection::pallet::CandidateInfo<sp_core::crypto::AccountId32,
   * Balance>
   */
  PalletCollatorSelectionCandidateInfo: {
    who: "AccountId32",
    deposit: "u128",
  },
  /** Lookup738: pallet_collator_selection::pallet::Error<T> */
  PalletCollatorSelectionError: {
    _enum: [
      "TooManyCandidates",
      "TooFewEligibleCollators",
      "AlreadyCandidate",
      "NotCandidate",
      "TooManyInvulnerables",
      "AlreadyInvulnerable",
      "NotInvulnerable",
      "NoAssociatedValidatorId",
      "ValidatorNotRegistered",
      "InsertToCandidateListFailed",
      "RemoveFromCandidateListFailed",
      "DepositTooLow",
      "UpdateCandidateListFailed",
      "InsufficientBond",
      "TargetIsNotCandidate",
      "IdenticalDeposit",
      "InvalidUnreserve",
    ],
  },
  /** Lookup742: sp_core::crypto::KeyTypeId */
  SpCoreCryptoKeyTypeId: "[u8;4]",
  /** Lookup743: pallet_session::pallet::Error<T> */
  PalletSessionError: {
    _enum: [
      "InvalidProof",
      "NoAssociatedValidatorId",
      "DuplicatedKey",
      "NoKeys",
      "NoAccount",
    ],
  },
  /** Lookup750: pallet_ema_oracle::types::OracleEntry<BlockNumber> */
  PalletEmaOracleOracleEntry: {
    price: "HydraDxMathRatio",
    volume: "HydradxTraitsOracleVolume",
    liquidity: "HydradxTraitsOracleLiquidity",
    updatedAt: "u32",
  },
  /** Lookup751: hydra_dx_math::ratio::Ratio */
  HydraDxMathRatio: {
    n: "u128",
    d: "u128",
  },
  /** Lookup752: hydradx_traits::oracle::Volume<Balance> */
  HydradxTraitsOracleVolume: {
    aIn: "u128",
    bOut: "u128",
    aOut: "u128",
    bIn: "u128",
  },
  /** Lookup753: hydradx_traits::oracle::Liquidity<Balance> */
  HydradxTraitsOracleLiquidity: {
    a: "u128",
    b: "u128",
  },
  /** Lookup762: pallet_ema_oracle::pallet::Error<T> */
  PalletEmaOracleError: {
    _enum: ["TooManyUniqueEntries", "OnTradeValueZero", "OracleNotFound"],
  },
  /** Lookup765: frame_system::extensions::check_spec_version::CheckSpecVersion<T> */
  FrameSystemExtensionsCheckSpecVersion: "Null",
  /** Lookup766: frame_system::extensions::check_tx_version::CheckTxVersion<T> */
  FrameSystemExtensionsCheckTxVersion: "Null",
  /** Lookup767: frame_system::extensions::check_genesis::CheckGenesis<T> */
  FrameSystemExtensionsCheckGenesis: "Null",
  /** Lookup770: frame_system::extensions::check_nonce::CheckNonce<T> */
  FrameSystemExtensionsCheckNonce: "Compact<u32>",
  /** Lookup771: frame_system::extensions::check_weight::CheckWeight<T> */
  FrameSystemExtensionsCheckWeight: "Null",
  /** Lookup772: pallet_transaction_payment::ChargeTransactionPayment<T> */
  PalletTransactionPaymentChargeTransactionPayment: "Compact<u128>",
  /** Lookup773: pallet_claims::ValidateClaim<T> */
  PalletClaimsValidateClaim: "Null",
  /** Lookup775: hydradx_runtime::Runtime */
  HydradxRuntimeRuntime: "Null",
};
