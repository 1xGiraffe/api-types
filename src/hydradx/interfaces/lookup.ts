// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup9: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup16: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup19: frame_system::EventRecord<hydradx_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup24: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup25: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null'
    }
  },
  /**
   * Lookup26: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup27: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup28: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup29: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup30: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup31: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup32: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup33: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128'
      }
    }
  },
  /**
   * Lookup34: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup37: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup38: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup39: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataTransferred: {
        _alias: {
          hash_: 'hash',
        },
        prevOwner: 'PalletDemocracyMetadataOwner',
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup40: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup41: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup43: pallet_democracy::types::MetadataOwner
   **/
  PalletDemocracyMetadataOwner: {
    _enum: {
      External: 'Null',
      Proposal: 'u32',
      Referendum: 'u32'
    }
  },
  /**
   * Lookup44: pallet_elections_phragmen::pallet::Event<T>
   **/
  PalletElectionsPhragmenEvent: {
    _enum: {
      NewTerm: {
        newMembers: 'Vec<(AccountId32,u128)>',
      },
      EmptyTerm: 'Null',
      ElectionError: 'Null',
      MemberKicked: {
        member: 'AccountId32',
      },
      Renounced: {
        candidate: 'AccountId32',
      },
      CandidateSlashed: {
        candidate: 'AccountId32',
        amount: 'u128',
      },
      SeatHolderSlashed: {
        seatHolder: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup47: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32'
      }
    }
  },
  /**
   * Lookup50: pallet_tips::pallet::Event<T, I>
   **/
  PalletTipsEvent: {
    _enum: {
      NewTip: {
        tipHash: 'H256',
      },
      TipClosing: {
        tipHash: 'H256',
      },
      TipClosed: {
        tipHash: 'H256',
        who: 'AccountId32',
        payout: 'u128',
      },
      TipRetracted: {
        tipHash: 'H256',
      },
      TipSlashed: {
        tipHash: 'H256',
        finder: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup51: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'HydradxRuntimeSystemProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'HydradxRuntimeSystemProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'HydradxRuntimeSystemProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup52: hydradx_runtime::system::ProxyType
   **/
  HydradxRuntimeSystemProxyType: {
    _enum: ['Any', 'CancelProxy', 'Governance', 'Transfer', 'Liquidity', 'LiquidityMining']
  },
  /**
   * Lookup54: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup55: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup56: pallet_uniques::pallet::Event<T, I>
   **/
  PalletUniquesEvent: {
    _enum: {
      Created: {
        collection: 'u128',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      ForceCreated: {
        collection: 'u128',
        owner: 'AccountId32',
      },
      Destroyed: {
        collection: 'u128',
      },
      Issued: {
        collection: 'u128',
        item: 'u128',
        owner: 'AccountId32',
      },
      Transferred: {
        collection: 'u128',
        item: 'u128',
        from: 'AccountId32',
        to: 'AccountId32',
      },
      Burned: {
        collection: 'u128',
        item: 'u128',
        owner: 'AccountId32',
      },
      Frozen: {
        collection: 'u128',
        item: 'u128',
      },
      Thawed: {
        collection: 'u128',
        item: 'u128',
      },
      CollectionFrozen: {
        collection: 'u128',
      },
      CollectionThawed: {
        collection: 'u128',
      },
      OwnerChanged: {
        collection: 'u128',
        newOwner: 'AccountId32',
      },
      TeamChanged: {
        collection: 'u128',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      ApprovedTransfer: {
        collection: 'u128',
        item: 'u128',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      ApprovalCancelled: {
        collection: 'u128',
        item: 'u128',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      ItemStatusChanged: {
        collection: 'u128',
      },
      CollectionMetadataSet: {
        collection: 'u128',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      CollectionMetadataCleared: {
        collection: 'u128',
      },
      MetadataSet: {
        collection: 'u128',
        item: 'u128',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        collection: 'u128',
        item: 'u128',
      },
      Redeposited: {
        collection: 'u128',
        successfulItems: 'Vec<u128>',
      },
      AttributeSet: {
        collection: 'u128',
        maybeItem: 'Option<u128>',
        key: 'Bytes',
        value: 'Bytes',
      },
      AttributeCleared: {
        collection: 'u128',
        maybeItem: 'Option<u128>',
        key: 'Bytes',
      },
      OwnershipAcceptanceChanged: {
        who: 'AccountId32',
        maybeCollection: 'Option<u128>',
      },
      CollectionMaxSupplySet: {
        collection: 'u128',
        maxSupply: 'u32',
      },
      ItemPriceSet: {
        collection: 'u128',
        item: 'u128',
        price: 'u128',
        whitelistedBuyer: 'Option<AccountId32>',
      },
      ItemPriceRemoved: {
        collection: 'u128',
        item: 'u128',
      },
      ItemBought: {
        collection: 'u128',
        item: 'u128',
        price: 'u128',
        seller: 'AccountId32',
        buyer: 'AccountId32'
      }
    }
  },
  /**
   * Lookup63: pallet_asset_registry::pallet::Event<T>
   **/
  PalletAssetRegistryEvent: {
    _enum: {
      ExistentialDepositPaid: {
        who: 'AccountId32',
        feeAsset: 'u32',
        amount: 'u128',
      },
      Registered: {
        assetId: 'u32',
        assetName: 'Option<Bytes>',
        assetType: 'PalletAssetRegistryAssetType',
        existentialDeposit: 'u128',
        xcmRateLimit: 'Option<u128>',
        symbol: 'Option<Bytes>',
        decimals: 'Option<u8>',
        isSufficient: 'bool',
      },
      Updated: {
        assetId: 'u32',
        assetName: 'Option<Bytes>',
        assetType: 'PalletAssetRegistryAssetType',
        existentialDeposit: 'u128',
        xcmRateLimit: 'Option<u128>',
        symbol: 'Option<Bytes>',
        decimals: 'Option<u8>',
        isSufficient: 'bool',
      },
      LocationSet: {
        assetId: 'u32',
        location: 'HydradxRuntimeXcmAssetLocation',
      },
      AssetBanned: {
        assetId: 'u32',
      },
      AssetUnbanned: {
        assetId: 'u32'
      }
    }
  },
  /**
   * Lookup66: pallet_asset_registry::types::AssetType
   **/
  PalletAssetRegistryAssetType: {
    _enum: ['Token', 'XYK', 'StableSwap', 'Bond', 'External']
  },
  /**
   * Lookup68: hydradx_runtime::xcm::AssetLocation
   **/
  HydradxRuntimeXcmAssetLocation: 'StagingXcmV3MultiLocation',
  /**
   * Lookup69: staging_xcm::v3::multilocation::MultiLocation
   **/
  StagingXcmV3MultiLocation: {
    parents: 'u8',
    interior: 'StagingXcmV3Junctions'
  },
  /**
   * Lookup70: staging_xcm::v3::junctions::Junctions
   **/
  StagingXcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'StagingXcmV3Junction',
      X2: '(StagingXcmV3Junction,StagingXcmV3Junction)',
      X3: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X4: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X5: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X6: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X7: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X8: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)'
    }
  },
  /**
   * Lookup71: staging_xcm::v3::junction::Junction
   **/
  StagingXcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'StagingXcmV3JunctionBodyId',
        part: 'StagingXcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'StagingXcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup74: staging_xcm::v3::junction::NetworkId
   **/
  StagingXcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null'
    }
  },
  /**
   * Lookup77: staging_xcm::v3::junction::BodyId
   **/
  StagingXcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup78: staging_xcm::v3::junction::BodyPart
   **/
  StagingXcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup79: pallet_claims::pallet::Event<T>
   **/
  PalletClaimsEvent: {
    _enum: {
      Claim: '(AccountId32,PalletClaimsEthereumAddress,u128)'
    }
  },
  /**
   * Lookup80: pallet_claims::traits::EthereumAddress
   **/
  PalletClaimsEthereumAddress: '[u8;20]',
  /**
   * Lookup81: pallet_collator_rewards::pallet::Event<T>
   **/
  PalletCollatorRewardsEvent: {
    _enum: {
      CollatorRewarded: {
        who: 'AccountId32',
        amount: 'u128',
        currency: 'u32'
      }
    }
  },
  /**
   * Lookup82: pallet_omnipool::pallet::Event<T>
   **/
  PalletOmnipoolEvent: {
    _enum: {
      TokenAdded: {
        assetId: 'u32',
        initialAmount: 'u128',
        initialPrice: 'u128',
      },
      TokenRemoved: {
        assetId: 'u32',
        amount: 'u128',
        hubWithdrawn: 'u128',
      },
      LiquidityAdded: {
        who: 'AccountId32',
        assetId: 'u32',
        amount: 'u128',
        positionId: 'u128',
      },
      LiquidityRemoved: {
        who: 'AccountId32',
        positionId: 'u128',
        assetId: 'u32',
        sharesRemoved: 'u128',
        fee: 'u128',
      },
      ProtocolLiquidityRemoved: {
        who: 'AccountId32',
        assetId: 'u32',
        amount: 'u128',
        hubAmount: 'u128',
        sharesRemoved: 'u128',
      },
      SellExecuted: {
        who: 'AccountId32',
        assetIn: 'u32',
        assetOut: 'u32',
        amountIn: 'u128',
        amountOut: 'u128',
        hubAmountIn: 'u128',
        hubAmountOut: 'u128',
        assetFeeAmount: 'u128',
        protocolFeeAmount: 'u128',
      },
      BuyExecuted: {
        who: 'AccountId32',
        assetIn: 'u32',
        assetOut: 'u32',
        amountIn: 'u128',
        amountOut: 'u128',
        hubAmountIn: 'u128',
        hubAmountOut: 'u128',
        assetFeeAmount: 'u128',
        protocolFeeAmount: 'u128',
      },
      PositionCreated: {
        positionId: 'u128',
        owner: 'AccountId32',
        asset: 'u32',
        amount: 'u128',
        shares: 'u128',
        price: 'u128',
      },
      PositionDestroyed: {
        positionId: 'u128',
        owner: 'AccountId32',
      },
      PositionUpdated: {
        positionId: 'u128',
        owner: 'AccountId32',
        asset: 'u32',
        amount: 'u128',
        shares: 'u128',
        price: 'u128',
      },
      TradableStateUpdated: {
        assetId: 'u32',
        state: 'PalletOmnipoolTradability',
      },
      AssetRefunded: {
        assetId: 'u32',
        amount: 'u128',
        recipient: 'AccountId32',
      },
      AssetWeightCapUpdated: {
        assetId: 'u32',
        cap: 'Permill'
      }
    }
  },
  /**
   * Lookup84: pallet_omnipool::types::Tradability
   **/
  PalletOmnipoolTradability: {
    bits: 'u8'
  },
  /**
   * Lookup86: pallet_transaction_pause::pallet::Event<T>
   **/
  PalletTransactionPauseEvent: {
    _enum: {
      TransactionPaused: {
        palletNameBytes: 'Bytes',
        functionNameBytes: 'Bytes',
      },
      TransactionUnpaused: {
        palletNameBytes: 'Bytes',
        functionNameBytes: 'Bytes'
      }
    }
  },
  /**
   * Lookup87: pallet_duster::pallet::Event<T>
   **/
  PalletDusterEvent: {
    _enum: {
      Dusted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Added: {
        who: 'AccountId32',
      },
      Removed: {
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup88: pallet_liquidity_mining::pallet::Event<T, I>
   **/
  PalletLiquidityMiningEvent: {
    _enum: {
      GlobalFarmAccRPZUpdated: {
        globalFarmId: 'u32',
        accumulatedRpz: 'u128',
        totalSharesZ: 'u128',
      },
      YieldFarmAccRPVSUpdated: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        accumulatedRpvs: 'u128',
        totalValuedShares: 'u128',
      },
      AllRewardsDistributed: {
        globalFarmId: 'u32'
      }
    }
  },
  /**
   * Lookup89: pallet_omnipool_liquidity_mining::pallet::Event<T>
   **/
  PalletOmnipoolLiquidityMiningEvent: {
    _enum: {
      GlobalFarmCreated: {
        id: 'u32',
        owner: 'AccountId32',
        totalRewards: 'u128',
        rewardCurrency: 'u32',
        yieldPerPeriod: 'Perquintill',
        plannedYieldingPeriods: 'u32',
        blocksPerPeriod: 'u32',
        maxRewardPerPeriod: 'u128',
        minDeposit: 'u128',
        lrnaPriceAdjustment: 'u128',
      },
      GlobalFarmTerminated: {
        globalFarmId: 'u32',
        who: 'AccountId32',
        rewardCurrency: 'u32',
        undistributedRewards: 'u128',
      },
      YieldFarmCreated: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        assetId: 'u32',
        multiplier: 'u128',
        loyaltyCurve: 'Option<PalletLiquidityMiningLoyaltyCurve>',
      },
      YieldFarmUpdated: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        assetId: 'u32',
        who: 'AccountId32',
        multiplier: 'u128',
      },
      YieldFarmStopped: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        assetId: 'u32',
        who: 'AccountId32',
      },
      YieldFarmResumed: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        assetId: 'u32',
        who: 'AccountId32',
        multiplier: 'u128',
      },
      YieldFarmTerminated: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        assetId: 'u32',
        who: 'AccountId32',
      },
      SharesDeposited: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        depositId: 'u128',
        assetId: 'u32',
        who: 'AccountId32',
        sharesAmount: 'u128',
        positionId: 'u128',
      },
      SharesRedeposited: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        depositId: 'u128',
        assetId: 'u32',
        who: 'AccountId32',
        sharesAmount: 'u128',
        positionId: 'u128',
      },
      RewardClaimed: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        who: 'AccountId32',
        claimed: 'u128',
        rewardCurrency: 'u32',
        depositId: 'u128',
      },
      SharesWithdrawn: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
        depositId: 'u128',
      },
      DepositDestroyed: {
        who: 'AccountId32',
        depositId: 'u128'
      }
    }
  },
  /**
   * Lookup92: pallet_liquidity_mining::types::LoyaltyCurve
   **/
  PalletLiquidityMiningLoyaltyCurve: {
    initialRewardPercentage: 'u128',
    scaleCoef: 'u32'
  },
  /**
   * Lookup93: pallet_otc::pallet::Event<T>
   **/
  PalletOtcEvent: {
    _enum: {
      Cancelled: {
        orderId: 'u32',
      },
      Filled: {
        orderId: 'u32',
        who: 'AccountId32',
        amountIn: 'u128',
        amountOut: 'u128',
      },
      PartiallyFilled: {
        orderId: 'u32',
        who: 'AccountId32',
        amountIn: 'u128',
        amountOut: 'u128',
      },
      Placed: {
        orderId: 'u32',
        assetIn: 'u32',
        assetOut: 'u32',
        amountIn: 'u128',
        amountOut: 'u128',
        partiallyFillable: 'bool'
      }
    }
  },
  /**
   * Lookup94: pallet_circuit_breaker::pallet::Event<T>
   **/
  PalletCircuitBreakerEvent: {
    _enum: {
      TradeVolumeLimitChanged: {
        assetId: 'u32',
        tradeVolumeLimit: '(u32,u32)',
      },
      AddLiquidityLimitChanged: {
        assetId: 'u32',
        liquidityLimit: 'Option<(u32,u32)>',
      },
      RemoveLiquidityLimitChanged: {
        assetId: 'u32',
        liquidityLimit: 'Option<(u32,u32)>'
      }
    }
  },
  /**
   * Lookup97: pallet_route_executor::pallet::Event<T>
   **/
  PalletRouteExecutorEvent: {
    _enum: {
      Executed: {
        assetIn: 'u32',
        assetOut: 'u32',
        amountIn: 'u128',
        amountOut: 'u128',
      },
      RouteUpdated: {
        assetIds: 'Vec<u32>'
      }
    }
  },
  /**
   * Lookup99: pallet_dynamic_fees::pallet::Event<T>
   **/
  PalletDynamicFeesEvent: 'Null',
  /**
   * Lookup100: pallet_staking::pallet::Event<T>
   **/
  PalletStakingEvent: {
    _enum: {
      PositionCreated: {
        who: 'AccountId32',
        positionId: 'u128',
        stake: 'u128',
      },
      StakeAdded: {
        who: 'AccountId32',
        positionId: 'u128',
        stake: 'u128',
        totalStake: 'u128',
        lockedRewards: 'u128',
        slashedPoints: 'u128',
        payablePercentage: 'u128',
      },
      RewardsClaimed: {
        who: 'AccountId32',
        positionId: 'u128',
        paidRewards: 'u128',
        unlockedRewards: 'u128',
        slashedPoints: 'u128',
        slashedUnpaidRewards: 'u128',
        payablePercentage: 'u128',
      },
      Unstaked: {
        who: 'AccountId32',
        positionId: 'u128',
        unlockedStake: 'u128',
      },
      StakingInitialized: {
        nonDustableBalance: 'u128',
      },
      AccumulatedRpsUpdated: {
        accumulatedRps: 'u128',
        totalStake: 'u128'
      }
    }
  },
  /**
   * Lookup101: pallet_stableswap::pallet::Event<T>
   **/
  PalletStableswapEvent: {
    _enum: {
      PoolCreated: {
        poolId: 'u32',
        assets: 'Vec<u32>',
        amplification: 'u16',
        fee: 'Permill',
      },
      FeeUpdated: {
        poolId: 'u32',
        fee: 'Permill',
      },
      LiquidityAdded: {
        poolId: 'u32',
        who: 'AccountId32',
        shares: 'u128',
        assets: 'Vec<PalletStableswapAssetAmount>',
      },
      LiquidityRemoved: {
        poolId: 'u32',
        who: 'AccountId32',
        shares: 'u128',
        amounts: 'Vec<PalletStableswapAssetAmount>',
        fee: 'u128',
      },
      SellExecuted: {
        who: 'AccountId32',
        poolId: 'u32',
        assetIn: 'u32',
        assetOut: 'u32',
        amountIn: 'u128',
        amountOut: 'u128',
        fee: 'u128',
      },
      BuyExecuted: {
        who: 'AccountId32',
        poolId: 'u32',
        assetIn: 'u32',
        assetOut: 'u32',
        amountIn: 'u128',
        amountOut: 'u128',
        fee: 'u128',
      },
      TradableStateUpdated: {
        poolId: 'u32',
        assetId: 'u32',
        state: 'PalletStableswapTradability',
      },
      AmplificationChanging: {
        poolId: 'u32',
        currentAmplification: 'u16',
        finalAmplification: 'u16',
        startBlock: 'u32',
        endBlock: 'u32'
      }
    }
  },
  /**
   * Lookup104: pallet_stableswap::types::AssetAmount<AssetId>
   **/
  PalletStableswapAssetAmount: {
    assetId: 'u32',
    amount: 'u128'
  },
  /**
   * Lookup105: pallet_stableswap::types::Tradability
   **/
  PalletStableswapTradability: {
    bits: 'u8'
  },
  /**
   * Lookup106: pallet_bonds::pallet::Event<T>
   **/
  PalletBondsEvent: {
    _enum: {
      TokenCreated: {
        issuer: 'AccountId32',
        assetId: 'u32',
        bondId: 'u32',
        maturity: 'u64',
      },
      Issued: {
        issuer: 'AccountId32',
        bondId: 'u32',
        amount: 'u128',
        fee: 'u128',
      },
      Redeemed: {
        who: 'AccountId32',
        bondId: 'u32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup107: pallet_lbp::pallet::Event<T>
   **/
  PalletLbpEvent: {
    _enum: {
      PoolCreated: {
        pool: 'AccountId32',
        data: 'PalletLbpPool',
      },
      PoolUpdated: {
        pool: 'AccountId32',
        data: 'PalletLbpPool',
      },
      LiquidityAdded: {
        who: 'AccountId32',
        assetA: 'u32',
        assetB: 'u32',
        amountA: 'u128',
        amountB: 'u128',
      },
      LiquidityRemoved: {
        who: 'AccountId32',
        assetA: 'u32',
        assetB: 'u32',
        amountA: 'u128',
        amountB: 'u128',
      },
      SellExecuted: {
        who: 'AccountId32',
        assetIn: 'u32',
        assetOut: 'u32',
        amount: 'u128',
        salePrice: 'u128',
        feeAsset: 'u32',
        feeAmount: 'u128',
      },
      BuyExecuted: {
        who: 'AccountId32',
        assetOut: 'u32',
        assetIn: 'u32',
        amount: 'u128',
        buyPrice: 'u128',
        feeAsset: 'u32',
        feeAmount: 'u128'
      }
    }
  },
  /**
   * Lookup108: pallet_lbp::Pool<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletLbpPool: {
    owner: 'AccountId32',
    start: 'Option<u32>',
    end: 'Option<u32>',
    assets: '(u32,u32)',
    initialWeight: 'u32',
    finalWeight: 'u32',
    weightCurve: 'PalletLbpWeightCurveType',
    fee: '(u32,u32)',
    feeCollector: 'AccountId32',
    repayTarget: 'u128'
  },
  /**
   * Lookup110: pallet_lbp::WeightCurveType
   **/
  PalletLbpWeightCurveType: {
    _enum: ['Linear']
  },
  /**
   * Lookup111: pallet_xyk::pallet::Event<T>
   **/
  PalletXykEvent: {
    _enum: {
      LiquidityAdded: {
        who: 'AccountId32',
        assetA: 'u32',
        assetB: 'u32',
        amountA: 'u128',
        amountB: 'u128',
      },
      LiquidityRemoved: {
        who: 'AccountId32',
        assetA: 'u32',
        assetB: 'u32',
        shares: 'u128',
      },
      PoolCreated: {
        who: 'AccountId32',
        assetA: 'u32',
        assetB: 'u32',
        initialSharesAmount: 'u128',
        shareToken: 'u32',
        pool: 'AccountId32',
      },
      PoolDestroyed: {
        who: 'AccountId32',
        assetA: 'u32',
        assetB: 'u32',
        shareToken: 'u32',
        pool: 'AccountId32',
      },
      SellExecuted: {
        who: 'AccountId32',
        assetIn: 'u32',
        assetOut: 'u32',
        amount: 'u128',
        salePrice: 'u128',
        feeAsset: 'u32',
        feeAmount: 'u128',
        pool: 'AccountId32',
      },
      BuyExecuted: {
        who: 'AccountId32',
        assetOut: 'u32',
        assetIn: 'u32',
        amount: 'u128',
        buyPrice: 'u128',
        feeAsset: 'u32',
        feeAmount: 'u128',
        pool: 'AccountId32'
      }
    }
  },
  /**
   * Lookup112: pallet_referrals::pallet::Event<T>
   **/
  PalletReferralsEvent: {
    _enum: {
      CodeRegistered: {
        code: 'Bytes',
        account: 'AccountId32',
      },
      CodeLinked: {
        account: 'AccountId32',
        code: 'Bytes',
        referralAccount: 'AccountId32',
      },
      Converted: {
        from: 'PalletReferralsAssetAmount',
        to: 'PalletReferralsAssetAmount',
      },
      Claimed: {
        who: 'AccountId32',
        referrerRewards: 'u128',
        tradeRewards: 'u128',
      },
      AssetRewardsUpdated: {
        assetId: 'u32',
        level: 'PalletReferralsLevel',
        rewards: 'PalletReferralsFeeDistribution',
      },
      LevelUp: {
        who: 'AccountId32',
        level: 'PalletReferralsLevel'
      }
    }
  },
  /**
   * Lookup114: pallet_referrals::AssetAmount<AssetId>
   **/
  PalletReferralsAssetAmount: {
    assetId: 'u32',
    amount: 'u128'
  },
  /**
   * Lookup115: pallet_referrals::Level
   **/
  PalletReferralsLevel: {
    _enum: ['None', 'Tier0', 'Tier1', 'Tier2', 'Tier3', 'Tier4']
  },
  /**
   * Lookup116: pallet_referrals::FeeDistribution
   **/
  PalletReferralsFeeDistribution: {
    referrer: 'Permill',
    trader: 'Permill',
    external: 'Permill'
  },
  /**
   * Lookup117: pallet_xcm_rate_limiter::pallet::Event<T>
   **/
  PalletXcmRateLimiterEvent: 'Null',
  /**
   * Lookup118: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'u32',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'u32',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'u32',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'u32',
        who: 'AccountId32',
      },
      Locked: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Issued: {
        currencyId: 'u32',
        amount: 'u128',
      },
      Rescinded: {
        currencyId: 'u32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup120: pallet_currencies::module::Event<T>
   **/
  PalletCurrenciesModuleEvent: {
    _enum: {
      Transferred: {
        currencyId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceUpdated: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'i128',
      },
      Deposited: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup122: orml_vesting::module::Event<T>
   **/
  OrmlVestingModuleEvent: {
    _enum: {
      VestingScheduleAdded: {
        from: 'AccountId32',
        to: 'AccountId32',
        vestingSchedule: 'OrmlVestingVestingSchedule',
      },
      Claimed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      VestingSchedulesUpdated: {
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup123: orml_vesting::VestingSchedule<BlockNumber, Balance>
   **/
  OrmlVestingVestingSchedule: {
    start: 'u32',
    period: 'u32',
    periodCount: 'u32',
    perPeriod: 'Compact<u128>'
  },
  /**
   * Lookup124: pallet_evm::pallet::Event<T>
   **/
  PalletEvmEvent: {
    _enum: {
      Log: {
        log: 'EthereumLog',
      },
      Created: {
        address: 'H160',
      },
      CreatedFailed: {
        address: 'H160',
      },
      Executed: {
        address: 'H160',
      },
      ExecutedFailed: {
        address: 'H160'
      }
    }
  },
  /**
   * Lookup125: ethereum::log::Log
   **/
  EthereumLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes'
  },
  /**
   * Lookup128: pallet_ethereum::pallet::Event
   **/
  PalletEthereumEvent: {
    _enum: {
      Executed: {
        from: 'H160',
        to: 'H160',
        transactionHash: 'H256',
        exitReason: 'EvmCoreErrorExitReason',
        extraData: 'Bytes'
      }
    }
  },
  /**
   * Lookup129: evm_core::error::ExitReason
   **/
  EvmCoreErrorExitReason: {
    _enum: {
      Succeed: 'EvmCoreErrorExitSucceed',
      Error: 'EvmCoreErrorExitError',
      Revert: 'EvmCoreErrorExitRevert',
      Fatal: 'EvmCoreErrorExitFatal'
    }
  },
  /**
   * Lookup130: evm_core::error::ExitSucceed
   **/
  EvmCoreErrorExitSucceed: {
    _enum: ['Stopped', 'Returned', 'Suicided']
  },
  /**
   * Lookup131: evm_core::error::ExitError
   **/
  EvmCoreErrorExitError: {
    _enum: {
      StackUnderflow: 'Null',
      StackOverflow: 'Null',
      InvalidJump: 'Null',
      InvalidRange: 'Null',
      DesignatedInvalid: 'Null',
      CallTooDeep: 'Null',
      CreateCollision: 'Null',
      CreateContractLimit: 'Null',
      OutOfOffset: 'Null',
      OutOfGas: 'Null',
      OutOfFund: 'Null',
      PCUnderflow: 'Null',
      CreateEmpty: 'Null',
      Other: 'Text',
      MaxNonce: 'Null',
      InvalidCode: 'u8'
    }
  },
  /**
   * Lookup135: evm_core::error::ExitRevert
   **/
  EvmCoreErrorExitRevert: {
    _enum: ['Reverted']
  },
  /**
   * Lookup136: evm_core::error::ExitFatal
   **/
  EvmCoreErrorExitFatal: {
    _enum: {
      NotSupported: 'Null',
      UnhandledInterrupt: 'Null',
      CallErrorAsFatal: 'EvmCoreErrorExitError',
      Other: 'Text'
    }
  },
  /**
   * Lookup137: pallet_evm_accounts::pallet::Event<T>
   **/
  PalletEvmAccountsEvent: {
    _enum: {
      Bound: {
        account: 'AccountId32',
        address: 'H160',
      },
      DeployerAdded: {
        who: 'H160',
      },
      DeployerRemoved: {
        who: 'H160'
      }
    }
  },
  /**
   * Lookup138: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      UpgradeAuthorized: {
        codeHash: 'H256',
      },
      DownwardMessagesReceived: {
        count: 'u32',
      },
      DownwardMessagesProcessed: {
        weightUsed: 'SpWeightsWeightV2Weight',
        dmqHead: 'H256',
      },
      UpwardMessageSent: {
        messageHash: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup140: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup141: pallet_dca::pallet::Event<T>
   **/
  PalletDcaEvent: {
    _enum: {
      ExecutionStarted: {
        id: 'u32',
        block: 'u32',
      },
      Scheduled: {
        id: 'u32',
        who: 'AccountId32',
        period: 'u32',
        totalAmount: 'u128',
        order: 'PalletDcaOrder',
      },
      ExecutionPlanned: {
        id: 'u32',
        who: 'AccountId32',
        block: 'u32',
      },
      TradeExecuted: {
        id: 'u32',
        who: 'AccountId32',
        amountIn: 'u128',
        amountOut: 'u128',
      },
      TradeFailed: {
        id: 'u32',
        who: 'AccountId32',
        error: 'SpRuntimeDispatchError',
      },
      Terminated: {
        id: 'u32',
        who: 'AccountId32',
        error: 'SpRuntimeDispatchError',
      },
      Completed: {
        id: 'u32',
        who: 'AccountId32',
      },
      RandomnessGenerationFailed: {
        block: 'u32',
        error: 'SpRuntimeDispatchError'
      }
    }
  },
  /**
   * Lookup142: pallet_dca::types::Order<AssetId>
   **/
  PalletDcaOrder: {
    _enum: {
      Sell: {
        assetIn: 'u32',
        assetOut: 'u32',
        amountIn: 'u128',
        minAmountOut: 'u128',
        route: 'Vec<HydradxTraitsRouterTrade>',
      },
      Buy: {
        assetIn: 'u32',
        assetOut: 'u32',
        amountOut: 'u128',
        maxAmountIn: 'u128',
        route: 'Vec<HydradxTraitsRouterTrade>'
      }
    }
  },
  /**
   * Lookup144: hydradx_traits::router::Trade<AssetId>
   **/
  HydradxTraitsRouterTrade: {
    pool: 'HydradxTraitsRouterPoolType',
    assetIn: 'u32',
    assetOut: 'u32'
  },
  /**
   * Lookup145: hydradx_traits::router::PoolType<AssetId>
   **/
  HydradxTraitsRouterPoolType: {
    _enum: {
      XYK: 'Null',
      LBP: 'Null',
      Stableswap: 'u32',
      Omnipool: 'Null'
    }
  },
  /**
   * Lookup147: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: {
        outcome: 'StagingXcmV3TraitsOutcome',
      },
      Sent: {
        origin: 'StagingXcmV3MultiLocation',
        destination: 'StagingXcmV3MultiLocation',
        message: 'StagingXcmV3Xcm',
        messageId: '[u8;32]',
      },
      UnexpectedResponse: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseReady: {
        queryId: 'u64',
        response: 'StagingXcmV3Response',
      },
      Notified: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyOverweight: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
        actualWeight: 'SpWeightsWeightV2Weight',
        maxBudgetedWeight: 'SpWeightsWeightV2Weight',
      },
      NotifyDispatchError: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyDecodeFailed: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      InvalidResponder: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        expectedLocation: 'Option<StagingXcmV3MultiLocation>',
      },
      InvalidResponderVersion: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseTaken: {
        queryId: 'u64',
      },
      AssetsTrapped: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV3MultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
      },
      VersionChangeNotified: {
        destination: 'StagingXcmV3MultiLocation',
        result: 'u32',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      SupportedVersionChanged: {
        location: 'StagingXcmV3MultiLocation',
        version: 'u32',
      },
      NotifyTargetSendFail: {
        location: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        error: 'StagingXcmV3TraitsError',
      },
      NotifyTargetMigrationFail: {
        location: 'StagingXcmVersionedMultiLocation',
        queryId: 'u64',
      },
      InvalidQuerierVersion: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      InvalidQuerier: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        expectedQuerier: 'StagingXcmV3MultiLocation',
        maybeActualQuerier: 'Option<StagingXcmV3MultiLocation>',
      },
      VersionNotifyStarted: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyRequested: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyUnrequested: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      FeesPaid: {
        paying: 'StagingXcmV3MultiLocation',
        fees: 'StagingXcmV3MultiassetMultiAssets',
      },
      AssetsClaimed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV3MultiLocation',
        assets: 'StagingXcmVersionedMultiAssets'
      }
    }
  },
  /**
   * Lookup148: staging_xcm::v3::traits::Outcome
   **/
  StagingXcmV3TraitsOutcome: {
    _enum: {
      Complete: 'SpWeightsWeightV2Weight',
      Incomplete: '(SpWeightsWeightV2Weight,StagingXcmV3TraitsError)',
      Error: 'StagingXcmV3TraitsError'
    }
  },
  /**
   * Lookup149: staging_xcm::v3::traits::Error
   **/
  StagingXcmV3TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup150: staging_xcm::v3::Xcm<Call>
   **/
  StagingXcmV3Xcm: 'Vec<StagingXcmV3Instruction>',
  /**
   * Lookup152: staging_xcm::v3::Instruction<Call>
   **/
  StagingXcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'StagingXcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'StagingXcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssets',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssets',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      Transact: {
        originKind: 'StagingXcmV2OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'StagingXcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'StagingXcmV3Junctions',
      ReportError: 'StagingXcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV3MultiassetMultiAssetFilter',
        want: 'StagingXcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'StagingXcmV3QueryResponseInfo',
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'StagingXcmV3MultiAsset',
        weightLimit: 'StagingXcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV3Xcm',
      SetAppendix: 'StagingXcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssets',
        ticket: 'StagingXcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'StagingXcmV3MultiassetMultiAssets',
      ExpectAsset: 'StagingXcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<StagingXcmV3MultiLocation>',
      ExpectError: 'Option<(u32,StagingXcmV3TraitsError)>',
      ExpectTransactStatus: 'StagingXcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'StagingXcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'StagingXcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'StagingXcmV3Junction',
      ExportMessage: {
        network: 'StagingXcmV3JunctionNetworkId',
        destination: 'StagingXcmV3Junctions',
        xcm: 'StagingXcmV3Xcm',
      },
      LockAsset: {
        asset: 'StagingXcmV3MultiAsset',
        unlocker: 'StagingXcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'StagingXcmV3MultiAsset',
        target: 'StagingXcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'StagingXcmV3MultiAsset',
        owner: 'StagingXcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'StagingXcmV3MultiAsset',
        locker: 'StagingXcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'StagingXcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup153: staging_xcm::v3::multiasset::MultiAssets
   **/
  StagingXcmV3MultiassetMultiAssets: 'Vec<StagingXcmV3MultiAsset>',
  /**
   * Lookup155: staging_xcm::v3::multiasset::MultiAsset
   **/
  StagingXcmV3MultiAsset: {
    id: 'StagingXcmV3MultiassetAssetId',
    fun: 'StagingXcmV3MultiassetFungibility'
  },
  /**
   * Lookup156: staging_xcm::v3::multiasset::AssetId
   **/
  StagingXcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup157: staging_xcm::v3::multiasset::Fungibility
   **/
  StagingXcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup158: staging_xcm::v3::multiasset::AssetInstance
   **/
  StagingXcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup160: staging_xcm::v3::Response
   **/
  StagingXcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,StagingXcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<StagingXcmV3PalletInfo>',
      DispatchResult: 'StagingXcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup164: staging_xcm::v3::PalletInfo
   **/
  StagingXcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup167: staging_xcm::v3::MaybeErrorCode
   **/
  StagingXcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup170: staging_xcm::v2::OriginKind
   **/
  StagingXcmV2OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup171: staging_xcm::double_encoded::DoubleEncoded<T>
   **/
  StagingXcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup172: staging_xcm::v3::QueryResponseInfo
   **/
  StagingXcmV3QueryResponseInfo: {
    destination: 'StagingXcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup173: staging_xcm::v3::multiasset::MultiAssetFilter
   **/
  StagingXcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV3MultiassetMultiAssets',
      Wild: 'StagingXcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup174: staging_xcm::v3::multiasset::WildMultiAsset
   **/
  StagingXcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV3MultiassetAssetId',
        fun: 'StagingXcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'StagingXcmV3MultiassetAssetId',
        fun: 'StagingXcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup175: staging_xcm::v3::multiasset::WildFungibility
   **/
  StagingXcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup176: staging_xcm::v3::WeightLimit
   **/
  StagingXcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup177: staging_xcm::VersionedMultiAssets
   **/
  StagingXcmVersionedMultiAssets: {
    _enum: {
      __Unused0: 'Null',
      V2: 'StagingXcmV2MultiassetMultiAssets',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiassetMultiAssets'
    }
  },
  /**
   * Lookup178: staging_xcm::v2::multiasset::MultiAssets
   **/
  StagingXcmV2MultiassetMultiAssets: 'Vec<StagingXcmV2MultiAsset>',
  /**
   * Lookup180: staging_xcm::v2::multiasset::MultiAsset
   **/
  StagingXcmV2MultiAsset: {
    id: 'StagingXcmV2MultiassetAssetId',
    fun: 'StagingXcmV2MultiassetFungibility'
  },
  /**
   * Lookup181: staging_xcm::v2::multiasset::AssetId
   **/
  StagingXcmV2MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV2MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup182: staging_xcm::v2::multilocation::MultiLocation
   **/
  StagingXcmV2MultiLocation: {
    parents: 'u8',
    interior: 'StagingXcmV2MultilocationJunctions'
  },
  /**
   * Lookup183: staging_xcm::v2::multilocation::Junctions
   **/
  StagingXcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'StagingXcmV2Junction',
      X2: '(StagingXcmV2Junction,StagingXcmV2Junction)',
      X3: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X4: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X5: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X6: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X7: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X8: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)'
    }
  },
  /**
   * Lookup184: staging_xcm::v2::junction::Junction
   **/
  StagingXcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'StagingXcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'StagingXcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'StagingXcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'StagingXcmV2BodyId',
        part: 'StagingXcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup185: staging_xcm::v2::NetworkId
   **/
  StagingXcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup187: staging_xcm::v2::BodyId
   **/
  StagingXcmV2BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup188: staging_xcm::v2::BodyPart
   **/
  StagingXcmV2BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup189: staging_xcm::v2::multiasset::Fungibility
   **/
  StagingXcmV2MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV2MultiassetAssetInstance'
    }
  },
  /**
   * Lookup190: staging_xcm::v2::multiasset::AssetInstance
   **/
  StagingXcmV2MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup191: staging_xcm::VersionedMultiLocation
   **/
  StagingXcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'StagingXcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup192: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;32]',
      UnsupportedVersion: '[u8;32]',
      ExecutedDownward: '([u8;32],StagingXcmV3TraitsOutcome)'
    }
  },
  /**
   * Lookup193: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        weight: 'SpWeightsWeightV2Weight',
      },
      Fail: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        error: 'StagingXcmV3TraitsError',
        weight: 'SpWeightsWeightV2Weight',
      },
      BadVersion: {
        messageHash: '[u8;32]',
      },
      BadFormat: {
        messageHash: '[u8;32]',
      },
      XcmpMessageSent: {
        messageHash: '[u8;32]',
      },
      OverweightEnqueued: {
        sender: 'u32',
        sentAt: 'u32',
        index: 'u64',
        required: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        index: 'u64',
        used: 'SpWeightsWeightV2Weight',
      },
      XcmDeferred: {
        sender: 'u32',
        sentAt: 'u32',
        deferredTo: 'u32',
        index: '(u32,u16)',
        position: 'u32',
        messageHash: 'Option<[u8;32]>',
      },
      XcmDeferredQueueFull: {
        sender: 'u32',
        sentAt: 'u32',
        messageHash: 'Option<[u8;32]>',
      },
      DeferredXcmDiscarded: {
        sender: 'u32',
        sentAt: 'u32',
        deferredTo: 'u32',
        index: '(u32,u16)',
        position: 'u32',
        messageHash: 'Option<[u8;32]>',
      },
      DeferredBucketDiscarded: {
        sender: 'u32',
        index: '(u32,u16)'
      }
    }
  },
  /**
   * Lookup196: cumulus_pallet_dmp_queue::pallet::Event<T>
   **/
  CumulusPalletDmpQueueEvent: {
    _enum: {
      InvalidFormat: {
        messageHash: '[u8;32]',
      },
      UnsupportedVersion: {
        messageHash: '[u8;32]',
      },
      ExecutedDownward: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        outcome: 'StagingXcmV3TraitsOutcome',
      },
      WeightExhausted: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        remainingWeight: 'SpWeightsWeightV2Weight',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightEnqueued: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        overweightIndex: 'u64',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        overweightIndex: 'u64',
        weightUsed: 'SpWeightsWeightV2Weight',
      },
      MaxMessagesExhausted: {
        messageHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup197: orml_xcm::module::Event<T>
   **/
  OrmlXcmModuleEvent: {
    _enum: {
      Sent: {
        to: 'StagingXcmV3MultiLocation',
        message: 'StagingXcmV3Xcm'
      }
    }
  },
  /**
   * Lookup198: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: 'AccountId32',
        assets: 'StagingXcmV3MultiassetMultiAssets',
        fee: 'StagingXcmV3MultiAsset',
        dest: 'StagingXcmV3MultiLocation'
      }
    }
  },
  /**
   * Lookup199: orml_unknown_tokens::module::Event
   **/
  OrmlUnknownTokensModuleEvent: {
    _enum: {
      Deposited: {
        asset: 'StagingXcmV3MultiAsset',
        who: 'StagingXcmV3MultiLocation',
      },
      Withdrawn: {
        asset: 'StagingXcmV3MultiAsset',
        who: 'StagingXcmV3MultiLocation'
      }
    }
  },
  /**
   * Lookup200: pallet_collator_selection::pallet::Event<T>
   **/
  PalletCollatorSelectionEvent: {
    _enum: {
      NewInvulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      InvulnerableAdded: {
        accountId: 'AccountId32',
      },
      InvulnerableRemoved: {
        accountId: 'AccountId32',
      },
      NewDesiredCandidates: {
        desiredCandidates: 'u32',
      },
      NewCandidacyBond: {
        bondAmount: 'u128',
      },
      CandidateAdded: {
        accountId: 'AccountId32',
        deposit: 'u128',
      },
      CandidateRemoved: {
        accountId: 'AccountId32',
      },
      InvalidInvulnerableSkipped: {
        accountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup202: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup203: pallet_relaychain_info::pallet::Event<T>
   **/
  PalletRelaychainInfoEvent: {
    _enum: {
      CurrentBlockNumbers: {
        parachainBlockNumber: 'u32',
        relaychainBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup204: pallet_ema_oracle::pallet::Event<T>
   **/
  PalletEmaOracleEvent: 'Null',
  /**
   * Lookup205: pallet_transaction_multi_payment::pallet::Event<T>
   **/
  PalletTransactionMultiPaymentEvent: {
    _enum: {
      CurrencySet: {
        accountId: 'AccountId32',
        assetId: 'u32',
      },
      CurrencyAdded: {
        assetId: 'u32',
      },
      CurrencyRemoved: {
        assetId: 'u32',
      },
      FeeWithdrawn: {
        accountId: 'AccountId32',
        assetId: 'u32',
        nativeFeeAmount: 'u128',
        nonNativeFeeAmount: 'u128',
        destinationAccountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup206: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup208: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup209: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup213: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup214: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup215: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup217: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup218: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup219: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup220: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup224: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup225: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup227: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup228: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup231: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup234: pallet_balances::types::IdAmount<Id, Balance>
   **/
  PalletBalancesIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup237: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'AccountId32',
        value: 'Compact<u128>',
      },
      set_balance_deprecated: {
        who: 'AccountId32',
        newFree: 'Compact<u128>',
        oldReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'AccountId32',
        dest: 'AccountId32',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'AccountId32',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'AccountId32',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'AccountId32',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      transfer: {
        dest: 'AccountId32',
        value: 'Compact<u128>',
      },
      force_set_balance: {
        who: 'AccountId32',
        newFree: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup238: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes']
  },
  /**
   * Lookup239: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup240: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup242: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'AccountId32',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'AccountId32',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup243: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup244: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup245: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'HydradxRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup248: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup249: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'AccountId32',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'AccountId32',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'AccountId32',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'AccountId32',
      },
      add_sub: {
        sub: 'AccountId32',
        data: 'Data',
      },
      rename_sub: {
        sub: 'AccountId32',
        data: 'Data',
      },
      remove_sub: {
        sub: 'AccountId32',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup250: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup286: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup287: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup288: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup289: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: 'FrameSupportPreimagesBounded',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_majority: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_default: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      delegate: {
        to: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      unlock: {
        target: 'AccountId32',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'AccountId32',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>',
      },
      set_metadata: {
        owner: 'PalletDemocracyMetadataOwner',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup290: frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup292: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup294: pallet_elections_phragmen::pallet::Call<T>
   **/
  PalletElectionsPhragmenCall: {
    _enum: {
      vote: {
        votes: 'Vec<AccountId32>',
        value: 'Compact<u128>',
      },
      remove_voter: 'Null',
      submit_candidacy: {
        candidateCount: 'Compact<u32>',
      },
      renounce_candidacy: {
        renouncing: 'PalletElectionsPhragmenRenouncing',
      },
      remove_member: {
        who: 'AccountId32',
        slashBond: 'bool',
        rerunElection: 'bool',
      },
      clean_defunct_voters: {
        numVoters: 'u32',
        numDefunct: 'u32'
      }
    }
  },
  /**
   * Lookup295: pallet_elections_phragmen::Renouncing
   **/
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: 'Null',
      RunnerUp: 'Null',
      Candidate: 'Compact<u32>'
    }
  },
  /**
   * Lookup296: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused4: 'Null',
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup298: pallet_tips::pallet::Call<T, I>
   **/
  PalletTipsCall: {
    _enum: {
      report_awesome: {
        reason: 'Bytes',
        who: 'AccountId32',
      },
      retract_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      tip_new: {
        reason: 'Bytes',
        who: 'AccountId32',
        tipValue: 'Compact<u128>',
      },
      tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        tipValue: 'Compact<u128>',
      },
      close_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      slash_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup299: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'AccountId32',
        forceProxyType: 'Option<HydradxRuntimeSystemProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'AccountId32',
        proxyType: 'HydradxRuntimeSystemProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'AccountId32',
        proxyType: 'HydradxRuntimeSystemProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'HydradxRuntimeSystemProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'AccountId32',
        proxyType: 'HydradxRuntimeSystemProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'AccountId32',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'AccountId32',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'AccountId32',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'AccountId32',
        real: 'AccountId32',
        forceProxyType: 'Option<HydradxRuntimeSystemProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup301: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup303: pallet_uniques::pallet::Call<T, I>
   **/
  PalletUniquesCall: {
    _enum: {
      create: {
        collection: 'u128',
        admin: 'AccountId32',
      },
      force_create: {
        collection: 'u128',
        owner: 'AccountId32',
        freeHolding: 'bool',
      },
      destroy: {
        collection: 'u128',
        witness: 'PalletUniquesDestroyWitness',
      },
      mint: {
        collection: 'u128',
        item: 'u128',
        owner: 'AccountId32',
      },
      burn: {
        collection: 'u128',
        item: 'u128',
        checkOwner: 'Option<AccountId32>',
      },
      transfer: {
        collection: 'u128',
        item: 'u128',
        dest: 'AccountId32',
      },
      redeposit: {
        collection: 'u128',
        items: 'Vec<u128>',
      },
      freeze: {
        collection: 'u128',
        item: 'u128',
      },
      thaw: {
        collection: 'u128',
        item: 'u128',
      },
      freeze_collection: {
        collection: 'u128',
      },
      thaw_collection: {
        collection: 'u128',
      },
      transfer_ownership: {
        collection: 'u128',
        owner: 'AccountId32',
      },
      set_team: {
        collection: 'u128',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      approve_transfer: {
        collection: 'u128',
        item: 'u128',
        delegate: 'AccountId32',
      },
      cancel_approval: {
        collection: 'u128',
        item: 'u128',
        maybeCheckDelegate: 'Option<AccountId32>',
      },
      force_item_status: {
        collection: 'u128',
        owner: 'AccountId32',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
        freeHolding: 'bool',
        isFrozen: 'bool',
      },
      set_attribute: {
        collection: 'u128',
        maybeItem: 'Option<u128>',
        key: 'Bytes',
        value: 'Bytes',
      },
      clear_attribute: {
        collection: 'u128',
        maybeItem: 'Option<u128>',
        key: 'Bytes',
      },
      set_metadata: {
        collection: 'u128',
        item: 'u128',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      clear_metadata: {
        collection: 'u128',
        item: 'u128',
      },
      set_collection_metadata: {
        collection: 'u128',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      clear_collection_metadata: {
        collection: 'u128',
      },
      set_accept_ownership: {
        maybeCollection: 'Option<u128>',
      },
      set_collection_max_supply: {
        collection: 'u128',
        maxSupply: 'u32',
      },
      set_price: {
        collection: 'u128',
        item: 'u128',
        price: 'Option<u128>',
        whitelistedBuyer: 'Option<AccountId32>',
      },
      buy_item: {
        collection: 'u128',
        item: 'u128',
        bidPrice: 'u128'
      }
    }
  },
  /**
   * Lookup304: pallet_uniques::types::DestroyWitness
   **/
  PalletUniquesDestroyWitness: {
    items: 'Compact<u32>',
    itemMetadatas: 'Compact<u32>',
    attributes: 'Compact<u32>'
  },
  /**
   * Lookup305: pallet_asset_registry::pallet::Call<T>
   **/
  PalletAssetRegistryCall: {
    _enum: {
      register: {
        assetId: 'Option<u32>',
        name: 'Option<Bytes>',
        assetType: 'PalletAssetRegistryAssetType',
        existentialDeposit: 'Option<u128>',
        symbol: 'Option<Bytes>',
        decimals: 'Option<u8>',
        location: 'Option<HydradxRuntimeXcmAssetLocation>',
        xcmRateLimit: 'Option<u128>',
        isSufficient: 'bool',
      },
      update: {
        assetId: 'u32',
        name: 'Option<Bytes>',
        assetType: 'Option<PalletAssetRegistryAssetType>',
        existentialDeposit: 'Option<u128>',
        xcmRateLimit: 'Option<u128>',
        isSufficient: 'Option<bool>',
        symbol: 'Option<Bytes>',
        decimals: 'Option<u8>',
        location: 'Option<HydradxRuntimeXcmAssetLocation>',
      },
      __Unused2: 'Null',
      __Unused3: 'Null',
      register_external: {
        location: 'HydradxRuntimeXcmAssetLocation',
      },
      ban_asset: {
        assetId: 'u32',
      },
      unban_asset: {
        assetId: 'u32'
      }
    }
  },
  /**
   * Lookup309: pallet_claims::pallet::Call<T>
   **/
  PalletClaimsCall: {
    _enum: {
      claim: {
        ethereumSignature: 'PalletClaimsEcdsaSignature'
      }
    }
  },
  /**
   * Lookup310: pallet_claims::traits::EcdsaSignature
   **/
  PalletClaimsEcdsaSignature: '[u8;65]',
  /**
   * Lookup312: pallet_genesis_history::pallet::Call<T>
   **/
  PalletGenesisHistoryCall: 'Null',
  /**
   * Lookup313: pallet_omnipool::pallet::Call<T>
   **/
  PalletOmnipoolCall: {
    _enum: {
      __Unused0: 'Null',
      add_token: {
        asset: 'u32',
        initialPrice: 'u128',
        weightCap: 'Permill',
        positionOwner: 'AccountId32',
      },
      add_liquidity: {
        asset: 'u32',
        amount: 'u128',
      },
      remove_liquidity: {
        positionId: 'u128',
        amount: 'u128',
      },
      sacrifice_position: {
        positionId: 'u128',
      },
      sell: {
        assetIn: 'u32',
        assetOut: 'u32',
        amount: 'u128',
        minBuyAmount: 'u128',
      },
      buy: {
        assetOut: 'u32',
        assetIn: 'u32',
        amount: 'u128',
        maxSellAmount: 'u128',
      },
      set_asset_tradable_state: {
        assetId: 'u32',
        state: 'PalletOmnipoolTradability',
      },
      refund_refused_asset: {
        assetId: 'u32',
        amount: 'u128',
        recipient: 'AccountId32',
      },
      set_asset_weight_cap: {
        assetId: 'u32',
        cap: 'Permill',
      },
      __Unused10: 'Null',
      withdraw_protocol_liquidity: {
        assetId: 'u32',
        amount: 'u128',
        price: '(u128,u128)',
        dest: 'AccountId32',
      },
      remove_token: {
        assetId: 'u32',
        beneficiary: 'AccountId32'
      }
    }
  },
  /**
   * Lookup315: pallet_transaction_pause::pallet::Call<T>
   **/
  PalletTransactionPauseCall: {
    _enum: {
      pause_transaction: {
        palletName: 'Bytes',
        functionName: 'Bytes',
      },
      unpause_transaction: {
        palletName: 'Bytes',
        functionName: 'Bytes'
      }
    }
  },
  /**
   * Lookup316: pallet_duster::pallet::Call<T>
   **/
  PalletDusterCall: {
    _enum: {
      dust_account: {
        account: 'AccountId32',
        currencyId: 'u32',
      },
      add_nondustable_account: {
        account: 'AccountId32',
      },
      remove_nondustable_account: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup317: pallet_liquidity_mining::pallet::Call<T, I>
   **/
  PalletLiquidityMiningCall: 'Null',
  /**
   * Lookup318: pallet_omnipool_liquidity_mining::pallet::Call<T>
   **/
  PalletOmnipoolLiquidityMiningCall: {
    _enum: {
      create_global_farm: {
        totalRewards: 'u128',
        plannedYieldingPeriods: 'u32',
        blocksPerPeriod: 'u32',
        rewardCurrency: 'u32',
        owner: 'AccountId32',
        yieldPerPeriod: 'Perquintill',
        minDeposit: 'u128',
        lrnaPriceAdjustment: 'u128',
      },
      __Unused1: 'Null',
      terminate_global_farm: {
        globalFarmId: 'u32',
      },
      create_yield_farm: {
        globalFarmId: 'u32',
        assetId: 'u32',
        multiplier: 'u128',
        loyaltyCurve: 'Option<PalletLiquidityMiningLoyaltyCurve>',
      },
      update_yield_farm: {
        globalFarmId: 'u32',
        assetId: 'u32',
        multiplier: 'u128',
      },
      stop_yield_farm: {
        globalFarmId: 'u32',
        assetId: 'u32',
      },
      resume_yield_farm: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        assetId: 'u32',
        multiplier: 'u128',
      },
      terminate_yield_farm: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        assetId: 'u32',
      },
      deposit_shares: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        positionId: 'u128',
      },
      redeposit_shares: {
        globalFarmId: 'u32',
        yieldFarmId: 'u32',
        depositId: 'u128',
      },
      claim_rewards: {
        depositId: 'u128',
        yieldFarmId: 'u32',
      },
      withdraw_shares: {
        depositId: 'u128',
        yieldFarmId: 'u32'
      }
    }
  },
  /**
   * Lookup319: pallet_otc::pallet::Call<T>
   **/
  PalletOtcCall: {
    _enum: {
      place_order: {
        assetIn: 'u32',
        assetOut: 'u32',
        amountIn: 'u128',
        amountOut: 'u128',
        partiallyFillable: 'bool',
      },
      partial_fill_order: {
        orderId: 'u32',
        amountIn: 'u128',
      },
      fill_order: {
        orderId: 'u32',
      },
      cancel_order: {
        orderId: 'u32'
      }
    }
  },
  /**
   * Lookup320: pallet_circuit_breaker::pallet::Call<T>
   **/
  PalletCircuitBreakerCall: {
    _enum: {
      set_trade_volume_limit: {
        assetId: 'u32',
        tradeVolumeLimit: '(u32,u32)',
      },
      set_add_liquidity_limit: {
        assetId: 'u32',
        liquidityLimit: 'Option<(u32,u32)>',
      },
      set_remove_liquidity_limit: {
        assetId: 'u32',
        liquidityLimit: 'Option<(u32,u32)>'
      }
    }
  },
  /**
   * Lookup321: pallet_route_executor::pallet::Call<T>
   **/
  PalletRouteExecutorCall: {
    _enum: {
      sell: {
        assetIn: 'u32',
        assetOut: 'u32',
        amountIn: 'u128',
        minAmountOut: 'u128',
        route: 'Vec<HydradxTraitsRouterTrade>',
      },
      buy: {
        assetIn: 'u32',
        assetOut: 'u32',
        amountOut: 'u128',
        maxAmountIn: 'u128',
        route: 'Vec<HydradxTraitsRouterTrade>',
      },
      set_route: {
        assetPair: 'HydradxTraitsRouterAssetPair',
        newRoute: 'Vec<HydradxTraitsRouterTrade>'
      }
    }
  },
  /**
   * Lookup322: hydradx_traits::router::AssetPair<AssetId>
   **/
  HydradxTraitsRouterAssetPair: {
    assetIn: 'u32',
    assetOut: 'u32'
  },
  /**
   * Lookup323: pallet_dynamic_fees::pallet::Call<T>
   **/
  PalletDynamicFeesCall: 'Null',
  /**
   * Lookup324: pallet_staking::pallet::Call<T>
   **/
  PalletStakingCall: {
    _enum: {
      initialize_staking: 'Null',
      stake: {
        amount: 'u128',
      },
      increase_stake: {
        positionId: 'u128',
        amount: 'u128',
      },
      claim: {
        positionId: 'u128',
      },
      unstake: {
        positionId: 'u128'
      }
    }
  },
  /**
   * Lookup325: pallet_stableswap::pallet::Call<T>
   **/
  PalletStableswapCall: {
    _enum: {
      create_pool: {
        shareAsset: 'u32',
        assets: 'Vec<u32>',
        amplification: 'u16',
        fee: 'Permill',
      },
      update_pool_fee: {
        poolId: 'u32',
        fee: 'Permill',
      },
      update_amplification: {
        poolId: 'u32',
        finalAmplification: 'u16',
        startBlock: 'u32',
        endBlock: 'u32',
      },
      add_liquidity: {
        poolId: 'u32',
        assets: 'Vec<PalletStableswapAssetAmount>',
      },
      add_liquidity_shares: {
        poolId: 'u32',
        shares: 'u128',
        assetId: 'u32',
        maxAssetAmount: 'u128',
      },
      remove_liquidity_one_asset: {
        poolId: 'u32',
        assetId: 'u32',
        shareAmount: 'u128',
        minAmountOut: 'u128',
      },
      withdraw_asset_amount: {
        poolId: 'u32',
        assetId: 'u32',
        amount: 'u128',
        maxShareAmount: 'u128',
      },
      sell: {
        poolId: 'u32',
        assetIn: 'u32',
        assetOut: 'u32',
        amountIn: 'u128',
        minBuyAmount: 'u128',
      },
      buy: {
        poolId: 'u32',
        assetOut: 'u32',
        assetIn: 'u32',
        amountOut: 'u128',
        maxSellAmount: 'u128',
      },
      set_asset_tradable_state: {
        poolId: 'u32',
        assetId: 'u32',
        state: 'PalletStableswapTradability'
      }
    }
  },
  /**
   * Lookup326: pallet_bonds::pallet::Call<T>
   **/
  PalletBondsCall: {
    _enum: {
      issue: {
        assetId: 'u32',
        amount: 'u128',
        maturity: 'u64',
      },
      redeem: {
        bondId: 'u32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup327: pallet_lbp::pallet::Call<T>
   **/
  PalletLbpCall: {
    _enum: {
      create_pool: {
        poolOwner: 'AccountId32',
        assetA: 'u32',
        assetAAmount: 'u128',
        assetB: 'u32',
        assetBAmount: 'u128',
        initialWeight: 'u32',
        finalWeight: 'u32',
        weightCurve: 'PalletLbpWeightCurveType',
        fee: '(u32,u32)',
        feeCollector: 'AccountId32',
        repayTarget: 'u128',
      },
      update_pool_data: {
        poolId: 'AccountId32',
        poolOwner: 'Option<AccountId32>',
        start: 'Option<u32>',
        end: 'Option<u32>',
        initialWeight: 'Option<u32>',
        finalWeight: 'Option<u32>',
        fee: 'Option<(u32,u32)>',
        feeCollector: 'Option<AccountId32>',
        repayTarget: 'Option<u128>',
      },
      add_liquidity: {
        amountA: '(u32,u128)',
        amountB: '(u32,u128)',
      },
      remove_liquidity: {
        poolId: 'AccountId32',
      },
      sell: {
        assetIn: 'u32',
        assetOut: 'u32',
        amount: 'u128',
        maxLimit: 'u128',
      },
      buy: {
        assetOut: 'u32',
        assetIn: 'u32',
        amount: 'u128',
        maxLimit: 'u128'
      }
    }
  },
  /**
   * Lookup329: pallet_xyk::pallet::Call<T>
   **/
  PalletXykCall: {
    _enum: {
      create_pool: {
        assetA: 'u32',
        amountA: 'u128',
        assetB: 'u32',
        amountB: 'u128',
      },
      add_liquidity: {
        assetA: 'u32',
        assetB: 'u32',
        amountA: 'u128',
        amountBMaxLimit: 'u128',
      },
      remove_liquidity: {
        assetA: 'u32',
        assetB: 'u32',
        liquidityAmount: 'u128',
      },
      sell: {
        assetIn: 'u32',
        assetOut: 'u32',
        amount: 'u128',
        maxLimit: 'u128',
        discount: 'bool',
      },
      buy: {
        assetOut: 'u32',
        assetIn: 'u32',
        amount: 'u128',
        maxLimit: 'u128',
        discount: 'bool'
      }
    }
  },
  /**
   * Lookup330: pallet_referrals::pallet::Call<T>
   **/
  PalletReferralsCall: {
    _enum: {
      register_code: {
        code: 'Bytes',
      },
      link_code: {
        code: 'Bytes',
      },
      convert: {
        assetId: 'u32',
      },
      claim_rewards: 'Null',
      set_reward_percentage: {
        assetId: 'u32',
        level: 'PalletReferralsLevel',
        rewards: 'PalletReferralsFeeDistribution'
      }
    }
  },
  /**
   * Lookup331: pallet_xcm_rate_limiter::pallet::Call<T>
   **/
  PalletXcmRateLimiterCall: 'Null',
  /**
   * Lookup332: orml_tokens::module::Call<T>
   **/
  OrmlTokensModuleCall: {
    _enum: {
      transfer: {
        dest: 'AccountId32',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'AccountId32',
        currencyId: 'u32',
        keepAlive: 'bool',
      },
      transfer_keep_alive: {
        dest: 'AccountId32',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        source: 'AccountId32',
        dest: 'AccountId32',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      set_balance: {
        who: 'AccountId32',
        currencyId: 'u32',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup333: pallet_currencies::module::Call<T>
   **/
  PalletCurrenciesModuleCall: {
    _enum: {
      transfer: {
        dest: 'AccountId32',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      transfer_native_currency: {
        dest: 'AccountId32',
        amount: 'Compact<u128>',
      },
      update_balance: {
        who: 'AccountId32',
        currencyId: 'u32',
        amount: 'i128'
      }
    }
  },
  /**
   * Lookup334: orml_vesting::module::Call<T>
   **/
  OrmlVestingModuleCall: {
    _enum: {
      claim: 'Null',
      vested_transfer: {
        dest: 'AccountId32',
        schedule: 'OrmlVestingVestingSchedule',
      },
      update_vesting_schedules: {
        who: 'AccountId32',
        vestingSchedules: 'Vec<OrmlVestingVestingSchedule>',
      },
      claim_for: {
        dest: 'AccountId32'
      }
    }
  },
  /**
   * Lookup336: pallet_evm::pallet::Call<T>
   **/
  PalletEvmCall: {
    _enum: {
      withdraw: {
        address: 'H160',
        value: 'u128',
      },
      call: {
        source: 'H160',
        target: 'H160',
        input: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create: {
        source: 'H160',
        init: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create2: {
        source: 'H160',
        init: 'Bytes',
        salt: 'H256',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>'
      }
    }
  },
  /**
   * Lookup342: pallet_ethereum::pallet::Call<T>
   **/
  PalletEthereumCall: {
    _enum: {
      transact: {
        transaction: 'EthereumTransactionTransactionV2'
      }
    }
  },
  /**
   * Lookup343: ethereum::transaction::TransactionV2
   **/
  EthereumTransactionTransactionV2: {
    _enum: {
      Legacy: 'EthereumTransactionLegacyTransaction',
      EIP2930: 'EthereumTransactionEip2930Transaction',
      EIP1559: 'EthereumTransactionEip1559Transaction'
    }
  },
  /**
   * Lookup344: ethereum::transaction::LegacyTransaction
   **/
  EthereumTransactionLegacyTransaction: {
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    signature: 'EthereumTransactionTransactionSignature'
  },
  /**
   * Lookup345: ethereum::transaction::TransactionAction
   **/
  EthereumTransactionTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  /**
   * Lookup346: ethereum::transaction::TransactionSignature
   **/
  EthereumTransactionTransactionSignature: {
    v: 'u64',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup348: ethereum::transaction::EIP2930Transaction
   **/
  EthereumTransactionEip2930Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup350: ethereum::transaction::AccessListItem
   **/
  EthereumTransactionAccessListItem: {
    address: 'H160',
    storageKeys: 'Vec<H256>'
  },
  /**
   * Lookup351: ethereum::transaction::EIP1559Transaction
   **/
  EthereumTransactionEip1559Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    maxPriorityFeePerGas: 'U256',
    maxFeePerGas: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup352: pallet_evm_accounts::pallet::Call<T>
   **/
  PalletEvmAccountsCall: {
    _enum: {
      bind_evm_address: 'Null',
      add_contract_deployer: {
        address: 'H160',
      },
      remove_contract_deployer: {
        address: 'H160',
      },
      renounce_contract_deployer: 'Null'
    }
  },
  /**
   * Lookup353: cumulus_pallet_parachain_system::pallet::Call<T>
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPrimitivesParachainInherentParachainInherentData',
      },
      sudo_send_upward_message: {
        message: 'Bytes',
      },
      authorize_upgrade: {
        codeHash: 'H256',
        checkVersion: 'bool',
      },
      enact_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup354: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV5PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
   * Lookup355: polkadot_primitives::v5::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV5PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup357: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup360: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup363: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup366: parachain_info::pallet::Call<T>
   **/
  ParachainInfoCall: 'Null',
  /**
   * Lookup367: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup368: pallet_dca::pallet::Call<T>
   **/
  PalletDcaCall: {
    _enum: {
      schedule: {
        schedule: 'PalletDcaSchedule',
        startExecutionBlock: 'Option<u32>',
      },
      terminate: {
        scheduleId: 'u32',
        nextExecutionBlock: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup369: pallet_dca::types::Schedule<sp_core::crypto::AccountId32, AssetId, BlockNumber>
   **/
  PalletDcaSchedule: {
    owner: 'AccountId32',
    period: 'u32',
    totalAmount: 'u128',
    maxRetries: 'Option<u8>',
    stabilityThreshold: 'Option<Permill>',
    slippage: 'Option<Permill>',
    order: 'PalletDcaOrder'
  },
  /**
   * Lookup371: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'StagingXcmVersionedMultiLocation',
        message: 'StagingXcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'StagingXcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'StagingXcmV3MultiLocation',
        version: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'StagingXcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'StagingXcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'StagingXcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'StagingXcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool'
      }
    }
  },
  /**
   * Lookup372: staging_xcm::VersionedXcm<RuntimeCall>
   **/
  StagingXcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'StagingXcmV2Xcm',
      V3: 'StagingXcmV3Xcm'
    }
  },
  /**
   * Lookup373: staging_xcm::v2::Xcm<RuntimeCall>
   **/
  StagingXcmV2Xcm: 'Vec<StagingXcmV2Instruction>',
  /**
   * Lookup375: staging_xcm::v2::Instruction<RuntimeCall>
   **/
  StagingXcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV2MultiassetMultiAssets',
      ReserveAssetDeposited: 'StagingXcmV2MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'StagingXcmV2MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssets',
        beneficiary: 'StagingXcmV2MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssets',
        dest: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      Transact: {
        originType: 'StagingXcmV2OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'StagingXcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'StagingXcmV2MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'StagingXcmV2MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'StagingXcmV2MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV2MultiassetMultiAssetFilter',
        receive: 'StagingXcmV2MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        dest: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'StagingXcmV2MultiLocation',
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'StagingXcmV2MultiAsset',
        weightLimit: 'StagingXcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV2Xcm',
      SetAppendix: 'StagingXcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssets',
        ticket: 'StagingXcmV2MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup376: staging_xcm::v2::Response
   **/
  StagingXcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV2MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,StagingXcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup379: staging_xcm::v2::traits::Error
   **/
  StagingXcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup380: staging_xcm::v2::multiasset::MultiAssetFilter
   **/
  StagingXcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV2MultiassetMultiAssets',
      Wild: 'StagingXcmV2MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup381: staging_xcm::v2::multiasset::WildMultiAsset
   **/
  StagingXcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV2MultiassetAssetId',
        fun: 'StagingXcmV2MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup382: staging_xcm::v2::multiasset::WildFungibility
   **/
  StagingXcmV2MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup383: staging_xcm::v2::WeightLimit
   **/
  StagingXcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup392: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup393: cumulus_pallet_dmp_queue::pallet::Call<T>
   **/
  CumulusPalletDmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup394: orml_xcm::module::Call<T>
   **/
  OrmlXcmModuleCall: {
    _enum: {
      send_as_sovereign: {
        dest: 'StagingXcmVersionedMultiLocation',
        message: 'StagingXcmVersionedXcm'
      }
    }
  },
  /**
   * Lookup395: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'u32',
        amount: 'u128',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multiasset: {
        asset: 'StagingXcmVersionedMultiAsset',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'u32',
        amount: 'u128',
        fee: 'u128',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'StagingXcmVersionedMultiAsset',
        fee: 'StagingXcmVersionedMultiAsset',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(u32,u128)>',
        feeItem: 'u32',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multiassets: {
        assets: 'StagingXcmVersionedMultiAssets',
        feeItem: 'u32',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit'
      }
    }
  },
  /**
   * Lookup396: staging_xcm::VersionedMultiAsset
   **/
  StagingXcmVersionedMultiAsset: {
    _enum: {
      __Unused0: 'Null',
      V2: 'StagingXcmV2MultiAsset',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiAsset'
    }
  },
  /**
   * Lookup398: pallet_collator_selection::pallet::Call<T>
   **/
  PalletCollatorSelectionCall: {
    _enum: {
      set_invulnerables: {
        _alias: {
          new_: 'new',
        },
        new_: 'Vec<AccountId32>',
      },
      set_desired_candidates: {
        max: 'u32',
      },
      set_candidacy_bond: {
        bond: 'u128',
      },
      register_as_candidate: 'Null',
      leave_intent: 'Null',
      add_invulnerable: {
        who: 'AccountId32',
      },
      remove_invulnerable: {
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup399: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'HydradxRuntimeOpaqueSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup400: hydradx_runtime::opaque::SessionKeys
   **/
  HydradxRuntimeOpaqueSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public'
  },
  /**
   * Lookup401: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup402: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup403: pallet_relaychain_info::pallet::Call<T>
   **/
  PalletRelaychainInfoCall: 'Null',
  /**
   * Lookup404: pallet_ema_oracle::pallet::Call<T>
   **/
  PalletEmaOracleCall: 'Null',
  /**
   * Lookup405: pallet_transaction_multi_payment::pallet::Call<T>
   **/
  PalletTransactionMultiPaymentCall: {
    _enum: {
      set_currency: {
        currency: 'u32',
      },
      add_currency: {
        currency: 'u32',
        price: 'u128',
      },
      remove_currency: {
        currency: 'u32'
      }
    }
  },
  /**
   * Lookup406: hydradx_runtime::OriginCaller
   **/
  HydradxRuntimeOriginCaller: {
    _enum: {
      __Unused0: 'Null',
      system: 'FrameSupportDispatchRawOrigin',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      Void: 'SpCoreVoid',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      Council: 'PalletCollectiveRawOrigin',
      __Unused24: 'Null',
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      Ethereum: 'PalletEthereumRawOrigin',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      __Unused99: 'Null',
      __Unused100: 'Null',
      __Unused101: 'Null',
      __Unused102: 'Null',
      __Unused103: 'Null',
      __Unused104: 'Null',
      __Unused105: 'Null',
      __Unused106: 'Null',
      PolkadotXcm: 'PalletXcmOrigin',
      __Unused108: 'Null',
      CumulusXcm: 'CumulusPalletXcmOrigin'
    }
  },
  /**
   * Lookup407: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup408: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup410: pallet_ethereum::RawOrigin
   **/
  PalletEthereumRawOrigin: {
    _enum: {
      EthereumTransaction: 'H160'
    }
  },
  /**
   * Lookup411: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'StagingXcmV3MultiLocation',
      Response: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup412: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup413: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup414: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup415: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup419: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup420: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup428: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup430: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup436: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup437: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup438: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup439: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup443: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup444: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup447: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
  },
  /**
   * Lookup449: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenSeatHolder: {
    who: 'AccountId32',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup450: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenVoter: {
    votes: 'Vec<AccountId32>',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup451: pallet_elections_phragmen::pallet::Error<T>
   **/
  PalletElectionsPhragmenError: {
    _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'DuplicatedCandidate', 'TooManyCandidates', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
  },
  /**
   * Lookup453: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup454: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength', 'PrimeAccountNotMember']
  },
  /**
   * Lookup457: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
   **/
  PalletTipsOpenTip: {
    reason: 'H256',
    who: 'AccountId32',
    finder: 'AccountId32',
    deposit: 'u128',
    closes: 'Option<u32>',
    tips: 'Vec<(AccountId32,u128)>',
    findersFee: 'bool'
  },
  /**
   * Lookup459: pallet_tips::pallet::Error<T, I>
   **/
  PalletTipsError: {
    _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'NotFinder', 'StillOpen', 'Premature']
  },
  /**
   * Lookup462: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, hydradx_runtime::system::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'HydradxRuntimeSystemProxyType',
    delay: 'u32'
  },
  /**
   * Lookup466: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup468: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup470: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup472: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup473: pallet_uniques::types::CollectionDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletUniquesCollectionDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    freezer: 'AccountId32',
    totalDeposit: 'u128',
    freeHolding: 'bool',
    items: 'u32',
    itemMetadatas: 'u32',
    attributes: 'u32',
    isFrozen: 'bool'
  },
  /**
   * Lookup475: pallet_uniques::types::ItemDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletUniquesItemDetails: {
    owner: 'AccountId32',
    approved: 'Option<AccountId32>',
    isFrozen: 'bool',
    deposit: 'u128'
  },
  /**
   * Lookup476: pallet_uniques::types::CollectionMetadata<DepositBalance, StringLimit>
   **/
  PalletUniquesCollectionMetadata: {
    deposit: 'u128',
    data: 'Bytes',
    isFrozen: 'bool'
  },
  /**
   * Lookup477: pallet_uniques::types::ItemMetadata<DepositBalance, StringLimit>
   **/
  PalletUniquesItemMetadata: {
    deposit: 'u128',
    data: 'Bytes',
    isFrozen: 'bool'
  },
  /**
   * Lookup481: pallet_uniques::pallet::Error<T, I>
   **/
  PalletUniquesError: {
    _enum: ['NoPermission', 'UnknownCollection', 'AlreadyExists', 'WrongOwner', 'BadWitness', 'InUse', 'Frozen', 'WrongDelegate', 'NoDelegate', 'Unapproved', 'Unaccepted', 'Locked', 'MaxSupplyReached', 'MaxSupplyAlreadySet', 'MaxSupplyTooSmall', 'UnknownItem', 'NotForSale', 'BidTooLow']
  },
  /**
   * Lookup482: pallet_asset_registry::types::AssetDetails<StringLimit>
   **/
  PalletAssetRegistryAssetDetails: {
    name: 'Option<Bytes>',
    assetType: 'PalletAssetRegistryAssetType',
    existentialDeposit: 'u128',
    symbol: 'Option<Bytes>',
    decimals: 'Option<u8>',
    xcmRateLimit: 'Option<u128>',
    isSufficient: 'bool'
  },
  /**
   * Lookup483: pallet_asset_registry::pallet::Error<T>
   **/
  PalletAssetRegistryError: {
    _enum: ['NoIdAvailable', 'AssetNotFound', 'TooShort', 'InvalidSymbol', 'AssetNotRegistered', 'AssetAlreadyRegistered', 'InvalidSharedAssetLen', 'CannotUpdateLocation', 'NotInReservedRange', 'LocationAlreadyRegistered', 'Forbidden', 'InsufficientBalance', 'ForbiddenSufficiencyChange', 'AssetAlreadyBanned', 'AssetNotBanned']
  },
  /**
   * Lookup484: pallet_claims::pallet::Error<T>
   **/
  PalletClaimsError: {
    _enum: ['InvalidEthereumSignature', 'NoClaimOrAlreadyClaimed', 'BalanceOverflow']
  },
  /**
   * Lookup485: pallet_genesis_history::Chain
   **/
  PalletGenesisHistoryChain: {
    genesisHash: 'H256',
    lastBlockHash: 'H256'
  },
  /**
   * Lookup487: pallet_collator_rewards::pallet::Error<T>
   **/
  PalletCollatorRewardsError: 'Null',
  /**
   * Lookup488: pallet_omnipool::types::AssetState<Balance>
   **/
  PalletOmnipoolAssetState: {
    hubReserve: 'u128',
    shares: 'u128',
    protocolShares: 'u128',
    cap: 'u128',
    tradable: 'PalletOmnipoolTradability'
  },
  /**
   * Lookup489: pallet_omnipool::types::SimpleImbalance<Balance>
   **/
  PalletOmnipoolSimpleImbalance: {
    value: 'u128',
    negative: 'bool'
  },
  /**
   * Lookup490: pallet_omnipool::types::Position<Balance, AssetId>
   **/
  PalletOmnipoolPosition: {
    assetId: 'u32',
    amount: 'u128',
    shares: 'u128',
    price: '(u128,u128)'
  },
  /**
   * Lookup491: pallet_omnipool::pallet::Error<T>
   **/
  PalletOmnipoolError: {
    _enum: ['InsufficientBalance', 'AssetAlreadyAdded', 'AssetNotFound', 'MissingBalance', 'InvalidInitialAssetPrice', 'BuyLimitNotReached', 'SellLimitExceeded', 'PositionNotFound', 'InsufficientShares', 'NotAllowed', 'Forbidden', 'AssetWeightCapExceeded', 'AssetNotRegistered', 'InsufficientLiquidity', 'InsufficientTradingAmount', 'SameAssetTradeNotAllowed', 'HubAssetUpdateError', 'PositiveImbalance', 'InvalidSharesAmount', 'InvalidHubAssetTradableState', 'AssetRefundNotAllowed', 'MaxOutRatioExceeded', 'MaxInRatioExceeded', 'PriceDifferenceTooHigh', 'InvalidOraclePrice', 'InvalidWithdrawalFee', 'FeeOverdraft', 'SharesRemaining', 'AssetNotFrozen', 'ZeroAmountOut']
  },
  /**
   * Lookup494: pallet_transaction_pause::pallet::Error<T>
   **/
  PalletTransactionPauseError: {
    _enum: ['CannotPause', 'InvalidCharacter', 'NameTooLong']
  },
  /**
   * Lookup495: pallet_duster::pallet::Error<T>
   **/
  PalletDusterError: {
    _enum: ['AccountBlacklisted', 'AccountNotBlacklisted', 'ZeroBalance', 'BalanceSufficient', 'DustAccountNotSet', 'ReserveAccountNotSet']
  },
  /**
   * Lookup496: pallet_liquidity_mining::types::GlobalFarmData<T, I>
   **/
  PalletLiquidityMiningGlobalFarmData: {
    id: 'u32',
    owner: 'AccountId32',
    updatedAt: 'u32',
    totalSharesZ: 'u128',
    accumulatedRpz: 'u128',
    rewardCurrency: 'u32',
    pendingRewards: 'u128',
    accumulatedPaidRewards: 'u128',
    yieldPerPeriod: 'Perquintill',
    plannedYieldingPeriods: 'u32',
    blocksPerPeriod: 'u32',
    incentivizedAsset: 'u32',
    maxRewardPerPeriod: 'u128',
    minDeposit: 'u128',
    liveYieldFarmsCount: 'u32',
    totalYieldFarmsCount: 'u32',
    priceAdjustment: 'u128',
    state: 'PalletLiquidityMiningFarmState'
  },
  /**
   * Lookup497: pallet_liquidity_mining::types::FarmState
   **/
  PalletLiquidityMiningFarmState: {
    _enum: ['Active', 'Stopped', 'Terminated']
  },
  /**
   * Lookup499: pallet_liquidity_mining::types::YieldFarmData<T, I>
   **/
  PalletLiquidityMiningYieldFarmData: {
    id: 'u32',
    updatedAt: 'u32',
    totalShares: 'u128',
    totalValuedShares: 'u128',
    accumulatedRpvs: 'u128',
    accumulatedRpz: 'u128',
    loyaltyCurve: 'Option<PalletLiquidityMiningLoyaltyCurve>',
    multiplier: 'u128',
    state: 'PalletLiquidityMiningFarmState',
    entriesCount: 'u64',
    leftToDistribute: 'u128',
    totalStopped: 'u32'
  },
  /**
   * Lookup500: pallet_liquidity_mining::types::DepositData<T, I>
   **/
  PalletLiquidityMiningDepositData: {
    shares: 'u128',
    ammPoolId: 'u32',
    yieldFarmEntries: 'Vec<PalletLiquidityMiningYieldFarmEntry>'
  },
  /**
   * Lookup502: pallet_liquidity_mining::types::YieldFarmEntry<T, I>
   **/
  PalletLiquidityMiningYieldFarmEntry: {
    globalFarmId: 'u32',
    yieldFarmId: 'u32',
    valuedShares: 'u128',
    accumulatedRpvs: 'u128',
    accumulatedClaimedRewards: 'u128',
    enteredAt: 'u32',
    updatedAt: 'u32',
    stoppedAtCreation: 'u32'
  },
  /**
   * Lookup504: pallet_liquidity_mining::pallet::Error<T, I>
   **/
  PalletLiquidityMiningError: {
    _enum: {
      GlobalFarmNotFound: 'Null',
      YieldFarmNotFound: 'Null',
      DoubleClaimInPeriod: 'Null',
      LiquidityMiningCanceled: 'Null',
      LiquidityMiningIsActive: 'Null',
      LiquidityMiningIsNotStopped: 'Null',
      InvalidDepositAmount: 'Null',
      Forbidden: 'Null',
      InvalidMultiplier: 'Null',
      YieldFarmAlreadyExists: 'Null',
      InvalidInitialRewardPercentage: 'Null',
      GlobalFarmIsNotEmpty: 'Null',
      MissingIncentivizedAsset: 'Null',
      InsufficientRewardCurrencyBalance: 'Null',
      InvalidBlocksPerPeriod: 'Null',
      InvalidYieldPerPeriod: 'Null',
      InvalidTotalRewards: 'Null',
      InvalidPlannedYieldingPeriods: 'Null',
      MaxEntriesPerDeposit: 'Null',
      DoubleLock: 'Null',
      YieldFarmEntryNotFound: 'Null',
      GlobalFarmIsFull: 'Null',
      InvalidMinDeposit: 'Null',
      InvalidPriceAdjustment: 'Null',
      ErrorGetAccountId: 'Null',
      IncorrectValuedShares: 'Null',
      RewardCurrencyNotRegistered: 'Null',
      IncentivizedAssetNotRegistered: 'Null',
      InconsistentState: 'PalletLiquidityMiningInconsistentStateError'
    }
  },
  /**
   * Lookup505: pallet_liquidity_mining::pallet::InconsistentStateError
   **/
  PalletLiquidityMiningInconsistentStateError: {
    _enum: ['YieldFarmNotFound', 'GlobalFarmNotFound', 'LiquidityIsNotActive', 'GlobalFarmIsNotActive', 'DepositNotFound', 'InvalidPeriod', 'NotEnoughRewardsInYieldFarm', 'InvalidLiveYielFarmsCount', 'InvalidTotalYieldFarmsCount', 'InvalidYieldFarmEntriesCount', 'InvalidTotalShares', 'InvalidValuedShares', 'InvalidTotalSharesZ', 'InvalidPaidAccumulatedRewards', 'InvalidFarmId', 'InvalidLoyaltyMultiplier']
  },
  /**
   * Lookup506: hydradx_traits::oracle::OraclePeriod
   **/
  HydradxTraitsOracleOraclePeriod: {
    _enum: ['LastBlock', 'Short', 'TenMinutes', 'Hour', 'Day', 'Week']
  },
  /**
   * Lookup507: pallet_omnipool_liquidity_mining::pallet::Error<T>
   **/
  PalletOmnipoolLiquidityMiningError: {
    _enum: {
      AssetNotFound: 'Null',
      Forbidden: 'Null',
      ZeroClaimedRewards: 'Null',
      InconsistentState: 'PalletOmnipoolLiquidityMiningInconsistentStateError',
      OracleNotAvailable: 'Null',
      PriceAdjustmentNotAvailable: 'Null'
    }
  },
  /**
   * Lookup508: pallet_omnipool_liquidity_mining::pallet::InconsistentStateError
   **/
  PalletOmnipoolLiquidityMiningInconsistentStateError: {
    _enum: ['MissingLpPosition', 'DepositDataNotFound']
  },
  /**
   * Lookup509: pallet_otc::Order<sp_core::crypto::AccountId32, AssetId>
   **/
  PalletOtcOrder: {
    owner: 'AccountId32',
    assetIn: 'u32',
    assetOut: 'u32',
    amountIn: 'u128',
    amountOut: 'u128',
    partiallyFillable: 'bool'
  },
  /**
   * Lookup510: pallet_otc::pallet::Error<T>
   **/
  PalletOtcError: {
    _enum: ['AssetNotRegistered', 'OrderNotFound', 'OrderIdOutOfBound', 'OrderNotPartiallyFillable', 'OrderAmountTooSmall', 'MathError', 'Forbidden', 'InsufficientReservedAmount']
  },
  /**
   * Lookup511: pallet_circuit_breaker::TradeVolumeLimit<T>
   **/
  PalletCircuitBreakerTradeVolumeLimit: {
    volumeIn: 'u128',
    volumeOut: 'u128',
    limit: 'u128'
  },
  /**
   * Lookup512: pallet_circuit_breaker::LiquidityLimit<T>
   **/
  PalletCircuitBreakerLiquidityLimit: {
    liquidity: 'u128',
    limit: 'u128'
  },
  /**
   * Lookup513: pallet_circuit_breaker::pallet::Error<T>
   **/
  PalletCircuitBreakerError: {
    _enum: ['InvalidLimitValue', 'LiquidityLimitNotStoredForAsset', 'TokenOutflowLimitReached', 'TokenInfluxLimitReached', 'MaxLiquidityLimitPerBlockReached', 'NotAllowed']
  },
  /**
   * Lookup514: pallet_route_executor::pallet::Error<T>
   **/
  PalletRouteExecutorError: {
    _enum: ['TradingLimitReached', 'MaxTradesExceeded', 'PoolNotSupported', 'InsufficientBalance', 'RouteCalculationFailed', 'InvalidRoute', 'RouteUpdateIsNotSuccessful', 'InsufficientAssetNotSupported', 'InvalidRouteExecution', 'NotAllowed']
  },
  /**
   * Lookup515: pallet_dynamic_fees::types::FeeEntry<sp_arithmetic::per_things::Permill, Block>
   **/
  PalletDynamicFeesFeeEntry: {
    assetFee: 'Permill',
    protocolFee: 'Permill',
    timestamp: 'u32'
  },
  /**
   * Lookup516: pallet_dynamic_fees::types::FeeParams<sp_arithmetic::per_things::Permill>
   **/
  PalletDynamicFeesFeeParams: {
    minFee: 'Permill',
    maxFee: 'Permill',
    decay: 'u128',
    amplification: 'u128'
  },
  /**
   * Lookup517: pallet_dynamic_fees::pallet::Error<T>
   **/
  PalletDynamicFeesError: 'Null',
  /**
   * Lookup518: pallet_staking::types::StakingData
   **/
  PalletStakingStakingData: {
    totalStake: 'u128',
    accumulatedRewardPerStake: 'u128',
    potReservedBalance: 'u128'
  },
  /**
   * Lookup519: pallet_staking::types::Position<BlockNumber>
   **/
  PalletStakingPosition: {
    stake: 'u128',
    actionPoints: 'u128',
    rewardPerStake: 'u128',
    createdAt: 'u32',
    accumulatedSlashPoints: 'u128',
    accumulatedUnpaidRewards: 'u128',
    accumulatedLockedRewards: 'u128'
  },
  /**
   * Lookup520: pallet_staking::types::Voting<MaxVotes>
   **/
  PalletStakingVoting: {
    votes: 'Vec<(u32,PalletStakingVote)>'
  },
  /**
   * Lookup523: pallet_staking::types::Vote
   **/
  PalletStakingVote: {
    amount: 'u128',
    conviction: 'PalletStakingConviction'
  },
  /**
   * Lookup524: pallet_staking::types::Conviction
   **/
  PalletStakingConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup527: pallet_staking::pallet::Error<T>
   **/
  PalletStakingError: {
    _enum: {
      InsufficientBalance: 'Null',
      InsufficientStake: 'Null',
      PositionNotFound: 'Null',
      MaxVotesReached: 'Null',
      NotInitialized: 'Null',
      AlreadyInitialized: 'Null',
      Arithmetic: 'Null',
      MissingPotBalance: 'Null',
      PositionAlreadyExists: 'Null',
      Forbidden: 'Null',
      RemoveVoteNotAllowed: 'Null',
      InconsistentState: 'PalletStakingInconsistentStateError'
    }
  },
  /**
   * Lookup528: pallet_staking::pallet::InconsistentStateError
   **/
  PalletStakingInconsistentStateError: {
    _enum: ['PositionNotFound', 'NegativePendingRewards', 'NegativeUnpaidRewards', 'TooManyPositions', 'Arithmetic']
  },
  /**
   * Lookup529: pallet_stableswap::types::PoolInfo<AssetId, BlockNumber>
   **/
  PalletStableswapPoolInfo: {
    assets: 'Vec<u32>',
    initialAmplification: 'u16',
    finalAmplification: 'u16',
    initialBlock: 'u32',
    finalBlock: 'u32',
    fee: 'Permill'
  },
  /**
   * Lookup532: pallet_stableswap::pallet::Error<T>
   **/
  PalletStableswapError: {
    _enum: ['IncorrectAssets', 'MaxAssetsExceeded', 'PoolNotFound', 'PoolExists', 'AssetNotInPool', 'ShareAssetNotRegistered', 'ShareAssetInPoolAssets', 'AssetNotRegistered', 'InvalidAssetAmount', 'InsufficientBalance', 'InsufficientShares', 'InsufficientLiquidity', 'InsufficientLiquidityRemaining', 'InsufficientTradingAmount', 'BuyLimitNotReached', 'SellLimitExceeded', 'InvalidInitialLiquidity', 'InvalidAmplification', 'InsufficientShareBalance', 'NotAllowed', 'PastBlock', 'SameAmplification', 'SlippageLimit', 'UnknownDecimals']
  },
  /**
   * Lookup534: pallet_bonds::pallet::Error<T>
   **/
  PalletBondsError: {
    _enum: ['NotRegistered', 'NotMature', 'InvalidMaturity', 'DisallowedAsset', 'AssetNotFound', 'InvalidBondName', 'FailToParseName']
  },
  /**
   * Lookup536: pallet_lbp::pallet::Error<T>
   **/
  PalletLbpError: {
    _enum: ['CannotCreatePoolWithSameAssets', 'NotOwner', 'SaleStarted', 'SaleNotEnded', 'SaleIsNotRunning', 'MaxSaleDurationExceeded', 'CannotAddZeroLiquidity', 'InsufficientAssetBalance', 'PoolNotFound', 'PoolAlreadyExists', 'InvalidBlockRange', 'WeightCalculationError', 'InvalidWeight', 'ZeroAmount', 'MaxInRatioExceeded', 'MaxOutRatioExceeded', 'FeeAmountInvalid', 'TradingLimitReached', 'Overflow', 'NothingToUpdate', 'InsufficientLiquidity', 'InsufficientTradingAmount', 'FeeCollectorWithAssetAlreadyUsed']
  },
  /**
   * Lookup537: pallet_xyk::pallet::Error<T>
   **/
  PalletXykError: {
    _enum: ['CannotCreatePoolWithSameAssets', 'InsufficientLiquidity', 'InsufficientTradingAmount', 'ZeroLiquidity', 'ZeroInitialPrice', 'CreatePoolAssetAmountInvalid', 'InvalidMintedLiquidity', 'InvalidLiquidityAmount', 'AssetAmountExceededLimit', 'AssetAmountNotReachedLimit', 'InsufficientAssetBalance', 'InsufficientPoolAssetBalance', 'InsufficientNativeCurrencyBalance', 'TokenPoolNotFound', 'TokenPoolAlreadyExists', 'AddAssetAmountInvalid', 'RemoveAssetAmountInvalid', 'SellAssetAmountInvalid', 'BuyAssetAmountInvalid', 'FeeAmountInvalid', 'CannotApplyDiscount', 'MaxOutRatioExceeded', 'MaxInRatioExceeded', 'Overflow', 'CannotCreatePool']
  },
  /**
   * Lookup541: pallet_referrals::pallet::Error<T>
   **/
  PalletReferralsError: {
    _enum: ['TooLong', 'TooShort', 'InvalidCharacter', 'AlreadyExists', 'InvalidCode', 'AlreadyLinked', 'ZeroAmount', 'LinkNotAllowed', 'IncorrectRewardCalculation', 'IncorrectRewardPercentage', 'AlreadyRegistered', 'PriceNotFound', 'ConversionMinTradingAmountNotReached', 'ConversionZeroAmountReceived']
  },
  /**
   * Lookup542: pallet_xcm_rate_limiter::AccumulatedAmount
   **/
  PalletXcmRateLimiterAccumulatedAmount: {
    amount: 'u128',
    lastUpdated: 'u32'
  },
  /**
   * Lookup543: pallet_xcm_rate_limiter::pallet::Error<T>
   **/
  PalletXcmRateLimiterError: 'Null',
  /**
   * Lookup545: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup547: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup549: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup551: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup552: pallet_currencies::module::Error<T>
   **/
  PalletCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
  },
  /**
   * Lookup554: orml_vesting::module::Error<T>
   **/
  OrmlVestingModuleError: {
    _enum: ['ZeroVestingPeriod', 'ZeroVestingPeriodCount', 'InsufficientBalanceToLock', 'TooManyVestingSchedules', 'AmountLow', 'MaxVestingSchedulesExceeded']
  },
  /**
   * Lookup555: pallet_evm::CodeMetadata
   **/
  PalletEvmCodeMetadata: {
    _alias: {
      size_: 'size',
      hash_: 'hash'
    },
    size_: 'u64',
    hash_: 'H256'
  },
  /**
   * Lookup557: pallet_evm::pallet::Error<T>
   **/
  PalletEvmError: {
    _enum: ['BalanceLow', 'FeeOverflow', 'PaymentOverflow', 'WithdrawFailed', 'GasPriceTooLow', 'InvalidNonce', 'GasLimitTooLow', 'GasLimitTooHigh', 'Undefined', 'Reentrancy', 'TransactionMustComeFromEOA']
  },
  /**
   * Lookup560: fp_rpc::TransactionStatus
   **/
  FpRpcTransactionStatus: {
    transactionHash: 'H256',
    transactionIndex: 'u32',
    from: 'H160',
    to: 'Option<H160>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthereumLog>',
    logsBloom: 'EthbloomBloom'
  },
  /**
   * Lookup563: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup565: ethereum::receipt::ReceiptV3
   **/
  EthereumReceiptReceiptV3: {
    _enum: {
      Legacy: 'EthereumReceiptEip658ReceiptData',
      EIP2930: 'EthereumReceiptEip658ReceiptData',
      EIP1559: 'EthereumReceiptEip658ReceiptData'
    }
  },
  /**
   * Lookup566: ethereum::receipt::EIP658ReceiptData
   **/
  EthereumReceiptEip658ReceiptData: {
    statusCode: 'u8',
    usedGas: 'U256',
    logsBloom: 'EthbloomBloom',
    logs: 'Vec<EthereumLog>'
  },
  /**
   * Lookup567: ethereum::block::Block<ethereum::transaction::TransactionV2>
   **/
  EthereumBlock: {
    header: 'EthereumHeader',
    transactions: 'Vec<EthereumTransactionTransactionV2>',
    ommers: 'Vec<EthereumHeader>'
  },
  /**
   * Lookup568: ethereum::header::Header
   **/
  EthereumHeader: {
    parentHash: 'H256',
    ommersHash: 'H256',
    beneficiary: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    logsBloom: 'EthbloomBloom',
    difficulty: 'U256',
    number: 'U256',
    gasLimit: 'U256',
    gasUsed: 'U256',
    timestamp: 'u64',
    extraData: 'Bytes',
    mixHash: 'H256',
    nonce: 'EthereumTypesHashH64'
  },
  /**
   * Lookup569: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup574: pallet_ethereum::pallet::Error<T>
   **/
  PalletEthereumError: {
    _enum: ['InvalidSignature', 'PreLogExists']
  },
  /**
   * Lookup575: pallet_evm_accounts::pallet::Error<T>
   **/
  PalletEvmAccountsError: {
    _enum: ['TruncatedAccountAlreadyUsed', 'AddressAlreadyBound', 'BoundAddressCannotBeUsed', 'AddressNotWhitelisted']
  },
  /**
   * Lookup577: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentAncestor: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    paraHeadHash: 'Option<H256>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV5UpgradeGoAhead>'
  },
  /**
   * Lookup578: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
   **/
  CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
    umpMsgCount: 'u32',
    umpTotalBytes: 'u32',
    hrmpOutgoing: 'BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>'
  },
  /**
   * Lookup580: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
   **/
  CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
    msgCount: 'u32',
    totalBytes: 'u32'
  },
  /**
   * Lookup584: polkadot_primitives::v5::UpgradeGoAhead
   **/
  PolkadotPrimitivesV5UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup585: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    hrmpWatermark: 'Option<u32>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV5UpgradeGoAhead>'
  },
  /**
   * Lookup587: polkadot_primitives::v5::UpgradeRestriction
   **/
  PolkadotPrimitivesV5UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup588: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueRemainingCapacity: 'CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV5AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV5AbridgedHrmpChannel)>'
  },
  /**
   * Lookup589: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
   **/
  CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
    remainingCount: 'u32',
    remainingSize: 'u32'
  },
  /**
   * Lookup592: polkadot_primitives::v5::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV5AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup593: polkadot_primitives::v5::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV5AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesVstagingAsyncBackingParams'
  },
  /**
   * Lookup594: polkadot_primitives::vstaging::AsyncBackingParams
   **/
  PolkadotPrimitivesVstagingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup600: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup601: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
   **/
  CumulusPalletParachainSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup602: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup605: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<hydradx_runtime::RuntimeCall>, BlockNumber, hydradx_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'HydradxRuntimeOriginCaller'
  },
  /**
   * Lookup607: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup609: pallet_dca::pallet::Error<T>
   **/
  PalletDcaError: {
    _enum: ['ScheduleNotFound', 'MinTradeAmountNotReached', 'Forbidden', 'BlockNumberIsNotInFuture', 'PriceUnstable', 'CalculatingPriceError', 'TotalAmountIsSmallerThanMinBudget', 'BudgetTooLow', 'NoFreeBlockFound', 'ManuallyTerminated', 'MaxRetryReached', 'TradeLimitReached', 'SlippageLimitReached', 'NoParentHashFound', 'InvalidState']
  },
  /**
   * Lookup610: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'StagingXcmVersionedMultiLocation',
        maybeMatchQuerier: 'Option<StagingXcmVersionedMultiLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'StagingXcmVersionedMultiLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'StagingXcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup614: staging_xcm::VersionedResponse
   **/
  StagingXcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'StagingXcmV2Response',
      V3: 'StagingXcmV3Response'
    }
  },
  /**
   * Lookup620: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup623: staging_xcm::VersionedAssetId
   **/
  StagingXcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiassetAssetId'
    }
  },
  /**
   * Lookup624: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'StagingXcmVersionedMultiLocation',
    locker: 'StagingXcmVersionedMultiLocation',
    consumers: 'Vec<(Null,u128)>'
  },
  /**
   * Lookup631: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
  },
  /**
   * Lookup632: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup634: cumulus_pallet_xcmp_queue::InboundChannelDetails
   **/
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: 'u32',
    state: 'CumulusPalletXcmpQueueInboundState',
    messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat)>'
  },
  /**
   * Lookup635: cumulus_pallet_xcmp_queue::InboundState
   **/
  CumulusPalletXcmpQueueInboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup638: polkadot_parachain_primitives::primitives::XcmpMessageFormat
   **/
  PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  /**
   * Lookup641: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup642: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup644: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32',
    thresholdWeight: 'SpWeightsWeightV2Weight',
    weightRestrictDecay: 'SpWeightsWeightV2Weight',
    xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup652: cumulus_pallet_xcmp_queue::DeferredMessage<hydradx_runtime::RuntimeCall>
   **/
  CumulusPalletXcmpQueueDeferredMessage: {
    sentAt: 'u32',
    deferredTo: 'u32',
    sender: 'u32',
    xcm: 'StagingXcmVersionedXcm'
  },
  /**
   * Lookup654: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit', 'MessageNotFound']
  },
  /**
   * Lookup655: cumulus_pallet_dmp_queue::ConfigData
   **/
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup656: cumulus_pallet_dmp_queue::PageIndexData
   **/
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: 'u32',
    endUsed: 'u32',
    overweightCount: 'u64'
  },
  /**
   * Lookup659: cumulus_pallet_dmp_queue::pallet::Error<T>
   **/
  CumulusPalletDmpQueueError: {
    _enum: ['Unknown', 'OverLimit']
  },
  /**
   * Lookup660: orml_xcm::module::Error<T>
   **/
  OrmlXcmModuleError: {
    _enum: ['Unreachable', 'SendFailure', 'BadVersion']
  },
  /**
   * Lookup661: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
  },
  /**
   * Lookup664: orml_unknown_tokens::module::Error<T>
   **/
  OrmlUnknownTokensModuleError: {
    _enum: ['BalanceTooLow', 'BalanceOverflow', 'UnhandledAsset']
  },
  /**
   * Lookup666: pallet_collator_selection::pallet::CandidateInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PalletCollatorSelectionCandidateInfo: {
    who: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup668: pallet_collator_selection::pallet::Error<T>
   **/
  PalletCollatorSelectionError: {
    _enum: ['TooManyCandidates', 'TooFewEligibleCollators', 'AlreadyCandidate', 'NotCandidate', 'TooManyInvulnerables', 'AlreadyInvulnerable', 'NotInvulnerable', 'NoAssociatedValidatorId', 'ValidatorNotRegistered']
  },
  /**
   * Lookup672: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup673: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup678: pallet_relaychain_info::pallet::Error<T>
   **/
  PalletRelaychainInfoError: 'Null',
  /**
   * Lookup681: pallet_ema_oracle::types::OracleEntry<BlockNumber>
   **/
  PalletEmaOracleOracleEntry: {
    price: 'HydraDxMathRatio',
    volume: 'HydradxTraitsOracleVolume',
    liquidity: 'HydradxTraitsOracleLiquidity',
    updatedAt: 'u32'
  },
  /**
   * Lookup682: hydra_dx_math::ratio::Ratio
   **/
  HydraDxMathRatio: {
    n: 'u128',
    d: 'u128'
  },
  /**
   * Lookup683: hydradx_traits::oracle::Volume<Balance>
   **/
  HydradxTraitsOracleVolume: {
    aIn: 'u128',
    bOut: 'u128',
    aOut: 'u128',
    bIn: 'u128'
  },
  /**
   * Lookup684: hydradx_traits::oracle::Liquidity<Balance>
   **/
  HydradxTraitsOracleLiquidity: {
    a: 'u128',
    b: 'u128'
  },
  /**
   * Lookup690: pallet_ema_oracle::pallet::Error<T>
   **/
  PalletEmaOracleError: {
    _enum: ['TooManyUniqueEntries', 'OnTradeValueZero']
  },
  /**
   * Lookup691: pallet_transaction_multi_payment::pallet::Error<T>
   **/
  PalletTransactionMultiPaymentError: {
    _enum: ['UnsupportedCurrency', 'ZeroBalance', 'AlreadyAccepted', 'CoreAssetNotAllowed', 'ZeroPrice', 'FallbackPriceNotFound', 'Overflow']
  },
  /**
   * Lookup693: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup694: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup696: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup697: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup699: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup700: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup701: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup704: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup705: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup706: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup707: pallet_claims::ValidateClaim<T>
   **/
  PalletClaimsValidateClaim: 'Null',
  /**
   * Lookup709: hydradx_runtime::Runtime
   **/
  HydradxRuntimeRuntime: 'Null'
};
