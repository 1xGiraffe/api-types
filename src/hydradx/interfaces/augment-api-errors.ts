// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * Asset is already registered.
       **/
      AssetAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Invalid asset name or symbol.
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * Asset ID is not registered in the asset-registry.
       **/
      AssetNotRegistered: AugmentedError<ApiType>;
      /**
       * Cannot update asset location
       **/
      CannotUpdateLocation: AugmentedError<ApiType>;
      /**
       * Incorrect number of assets provided to create shared asset.
       **/
      InvalidSharedAssetLen: AugmentedError<ApiType>;
      /**
       * Location already registered with different asset
       **/
      LocationAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Asset ID is not available. This only happens when it reaches the MAX value of given id type.
       **/
      NoIdAvailable: AugmentedError<ApiType>;
      /**
       * Selected asset id is out of reserved range.
       **/
      NotInReservedRange: AugmentedError<ApiType>;
      /**
       * Invalid asset name or symbol.
       **/
      TooLong: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bonds: {
      /**
       * Asset type not allowed for underlying asset
       **/
      DisallowedAsset: AugmentedError<ApiType>;
      /**
       * Maturity not long enough
       **/
      InvalidMaturity: AugmentedError<ApiType>;
      /**
       * Bond is not mature
       **/
      NotMature: AugmentedError<ApiType>;
      /**
       * Bond not registered
       **/
      NotRegistered: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    circuitBreaker: {
      /**
       * Invalid value for a limit. Limit must be non-zero.
       **/
      InvalidLimitValue: AugmentedError<ApiType>;
      /**
       * Allowed liquidity limit is not stored for asset
       **/
      LiquidityLimitNotStoredForAsset: AugmentedError<ApiType>;
      /**
       * Maximum pool's liquidity limit per block has been reached
       **/
      MaxLiquidityLimitPerBlockReached: AugmentedError<ApiType>;
      /**
       * Asset is not allowed to have a limit
       **/
      NotAllowed: AugmentedError<ApiType>;
      /**
       * Token trade influx per block has been reached
       **/
      TokenInfluxLimitReached: AugmentedError<ApiType>;
      /**
       * Token trade outflow per block has been reached
       **/
      TokenOutflowLimitReached: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    claims: {
      /**
       * Value reached maximum and cannot be incremented further
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * Ethereum signature is not valid
       **/
      InvalidEthereumSignature: AugmentedError<ApiType>;
      /**
       * Claim is not valid
       **/
      NoClaimOrAlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    collatorRewards: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    collatorSelection: {
      /**
       * User is already a candidate
       **/
      AlreadyCandidate: AugmentedError<ApiType>;
      /**
       * User is already an Invulnerable
       **/
      AlreadyInvulnerable: AugmentedError<ApiType>;
      /**
       * Account has no associated validator ID
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * User is not a candidate
       **/
      NotCandidate: AugmentedError<ApiType>;
      /**
       * Permission issue
       **/
      Permission: AugmentedError<ApiType>;
      /**
       * Too few candidates
       **/
      TooFewCandidates: AugmentedError<ApiType>;
      /**
       * Too many candidates
       **/
      TooManyCandidates: AugmentedError<ApiType>;
      /**
       * Too many invulnerables
       **/
      TooManyInvulnerables: AugmentedError<ApiType>;
      /**
       * Unknown error
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * Validator ID is not yet registered
       **/
      ValidatorNotRegistered: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    council: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    cumulusXcm: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    currencies: {
      /**
       * Unable to convert the Amount type into Balance.
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Deposit result is not expected
       **/
      DepositFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dca: {
      /**
       * The next execution block number is not in the future
       **/
      BlockNumberIsNotInFuture: AugmentedError<ApiType>;
      /**
       * The budget is too low for executing one DCA
       **/
      BudgetTooLow: AugmentedError<ApiType>;
      /**
       * Error occurred when calculating price
       **/
      CalculatingPriceError: AugmentedError<ApiType>;
      /**
       * Forbidden as the user is not the owner of the schedule
       **/
      Forbidden: AugmentedError<ApiType>;
      /**
       * Error that should not really happen only in case of invalid state of the schedule storage entries
       **/
      InvalidState: AugmentedError<ApiType>;
      /**
       * The DCA schedule has been manually terminated
       **/
      ManuallyTerminated: AugmentedError<ApiType>;
      /**
       * Max number of retries reached for schedule
       **/
      MaxRetryReached: AugmentedError<ApiType>;
      /**
       * The min trade amount is not reached
       **/
      MinTradeAmountNotReached: AugmentedError<ApiType>;
      /**
       * There is no free block found to plan DCA execution
       **/
      NoFreeBlockFound: AugmentedError<ApiType>;
      /**
       * No parent hash has been found from relay chain
       **/
      NoParentHashFound: AugmentedError<ApiType>;
      /**
       * Price is unstable as price change from oracle data is bigger than max allowed
       **/
      PriceUnstable: AugmentedError<ApiType>;
      /**
       * The route to execute the trade on is not specified
       **/
      RouteNotSpecified: AugmentedError<ApiType>;
      /**
       * Schedule not exist
       **/
      ScheduleNotFound: AugmentedError<ApiType>;
      /**
       * Slippage limit calculated from oracle is reached, leading to retry
       **/
      SlippageLimitReached: AugmentedError<ApiType>;
      /**
       * The total amount to be reserved is smaller than min budget
       **/
      TotalAmountIsSmallerThanMinBudget: AugmentedError<ApiType>;
      /**
       * Absolutely trade limit reached reached, leading to retry
       **/
      TradeLimitReached: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Maximum number of items reached.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Voting period too low
       **/
      VotingPeriodLow: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dmpQueue: {
      /**
       * The amount of weight given is possibly not enough for executing the message.
       **/
      OverLimit: AugmentedError<ApiType>;
      /**
       * The message index given is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    duster: {
      /**
       * Account is excluded from dusting.
       **/
      AccountBlacklisted: AugmentedError<ApiType>;
      /**
       * Account is not present in the non-dustable list.
       **/
      AccountNotBlacklisted: AugmentedError<ApiType>;
      /**
       * The balance is sufficient to keep account open.
       **/
      BalanceSufficient: AugmentedError<ApiType>;
      /**
       * Dust account is not set.
       **/
      DustAccountNotSet: AugmentedError<ApiType>;
      /**
       * Reserve account is not set.
       **/
      ReserveAccountNotSet: AugmentedError<ApiType>;
      /**
       * The balance is zero.
       **/
      ZeroBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dynamicFees: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    elections: {
      /**
       * Duplicated candidate submission.
       **/
      DuplicatedCandidate: AugmentedError<ApiType>;
      /**
       * Candidate does not have enough funds.
       **/
      InsufficientCandidateFunds: AugmentedError<ApiType>;
      /**
       * The renouncing origin presented a wrong `Renouncing` parameter.
       **/
      InvalidRenouncing: AugmentedError<ApiType>;
      /**
       * Prediction regarding replacement after member removal is wrong.
       **/
      InvalidReplacement: AugmentedError<ApiType>;
      /**
       * The provided count of number of votes is incorrect.
       **/
      InvalidVoteCount: AugmentedError<ApiType>;
      /**
       * The provided count of number of candidates is incorrect.
       **/
      InvalidWitnessData: AugmentedError<ApiType>;
      /**
       * Cannot vote with stake less than minimum balance.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * Cannot vote more than maximum allowed.
       **/
      MaximumVotesExceeded: AugmentedError<ApiType>;
      /**
       * Member cannot re-submit candidacy.
       **/
      MemberSubmit: AugmentedError<ApiType>;
      /**
       * Must be a voter.
       **/
      MustBeVoter: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Must vote for at least one candidate.
       **/
      NoVotes: AugmentedError<ApiType>;
      /**
       * Runner cannot re-submit candidacy.
       **/
      RunnerUpSubmit: AugmentedError<ApiType>;
      /**
       * Too many candidates have been created.
       **/
      TooManyCandidates: AugmentedError<ApiType>;
      /**
       * Cannot vote more than candidates.
       **/
      TooManyVotes: AugmentedError<ApiType>;
      /**
       * Voter can not pay voting bond.
       **/
      UnableToPayBond: AugmentedError<ApiType>;
      /**
       * Cannot vote when no candidates or members exist.
       **/
      UnableToVote: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    emaOracle: {
      OnTradeValueZero: AugmentedError<ApiType>;
      TooManyUniqueEntries: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The provided judgement was for a different identity.
       **/
      JudgementForDifferentIdentity: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * Error that occurs when there is an issue paying for judgement.
       **/
      JudgementPaymentFailed: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    lbp: {
      /**
       * Liquidity being added should not be zero
       **/
      CannotAddZeroLiquidity: AugmentedError<ApiType>;
      /**
       * Pool assets can not be the same
       **/
      CannotCreatePoolWithSameAssets: AugmentedError<ApiType>;
      /**
       * Invalid fee amount
       **/
      FeeAmountInvalid: AugmentedError<ApiType>;
      /**
       * Not more than one fee collector per asset id
       **/
      FeeCollectorWithAssetAlreadyUsed: AugmentedError<ApiType>;
      /**
       * Asset balance too low
       **/
      InsufficientAssetBalance: AugmentedError<ApiType>;
      /**
       * Liquidity has not reached the required minimum.
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Amount is less than minimum trading limit.
       **/
      InsufficientTradingAmount: AugmentedError<ApiType>;
      /**
       * Invalid block range
       **/
      InvalidBlockRange: AugmentedError<ApiType>;
      /**
       * Weight set is out of range
       **/
      InvalidWeight: AugmentedError<ApiType>;
      /**
       * Trade amount is too high
       **/
      MaxInRatioExceeded: AugmentedError<ApiType>;
      /**
       * Trade amount is too high
       **/
      MaxOutRatioExceeded: AugmentedError<ApiType>;
      /**
       * Sale duration is too long
       **/
      MaxSaleDurationExceeded: AugmentedError<ApiType>;
      /**
       * Nothing to update
       **/
      NothingToUpdate: AugmentedError<ApiType>;
      /**
       * Account is not a pool owner
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * An unexpected integer overflow occurred
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Pool has been already created
       **/
      PoolAlreadyExists: AugmentedError<ApiType>;
      /**
       * Pool does not exist
       **/
      PoolNotFound: AugmentedError<ApiType>;
      /**
       * Sale is not running
       **/
      SaleIsNotRunning: AugmentedError<ApiType>;
      /**
       * Sale is still in progress
       **/
      SaleNotEnded: AugmentedError<ApiType>;
      /**
       * Sale already started
       **/
      SaleStarted: AugmentedError<ApiType>;
      /**
       * Trading limit reached
       **/
      TradingLimitReached: AugmentedError<ApiType>;
      /**
       * Calculation error
       **/
      WeightCalculationError: AugmentedError<ApiType>;
      /**
       * Can not perform a trade with zero amount
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multiTransactionPayment: {
      /**
       * Currency is already in the list of accepted currencies.
       **/
      AlreadyAccepted: AugmentedError<ApiType>;
      /**
       * It is not allowed to add Core Asset as accepted currency. Core asset is accepted by design.
       **/
      CoreAssetNotAllowed: AugmentedError<ApiType>;
      /**
       * Fallback price was not found.
       **/
      FallbackPriceNotFound: AugmentedError<ApiType>;
      /**
       * Math overflow
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Selected currency is not supported.
       **/
      UnsupportedCurrency: AugmentedError<ApiType>;
      /**
       * Account balance should be non-zero.
       **/
      ZeroBalance: AugmentedError<ApiType>;
      /**
       * Fallback price cannot be zero.
       **/
      ZeroPrice: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    omnipool: {
      /**
       * Asset is already in omnipool
       **/
      AssetAlreadyAdded: AugmentedError<ApiType>;
      /**
       * Asset is not in omnipool
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * Asset is not registered in asset registry
       **/
      AssetNotRegistered: AugmentedError<ApiType>;
      /**
       * Asset is not allowed to be refunded.
       **/
      AssetRefundNotAllowed: AugmentedError<ApiType>;
      /**
       * Asset weight cap has been exceeded.
       **/
      AssetWeightCapExceeded: AugmentedError<ApiType>;
      /**
       * Minimum limit has not been reached during trade.
       **/
      BuyLimitNotReached: AugmentedError<ApiType>;
      /**
       * More than allowed amount of fee has been transferred.
       **/
      FeeOverdraft: AugmentedError<ApiType>;
      /**
       * Signed account is not owner of position instance.
       **/
      Forbidden: AugmentedError<ApiType>;
      /**
       * LRNA update after trade results in positive value.
       **/
      HubAssetUpdateError: AugmentedError<ApiType>;
      /**
       * Balance too low
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Provided liquidity is below minimum allowed limit
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Insufficient shares in position
       **/
      InsufficientShares: AugmentedError<ApiType>;
      /**
       * Traded amount is below minimum allowed limit
       **/
      InsufficientTradingAmount: AugmentedError<ApiType>;
      /**
       * HJb Asset's trabable is only allowed to be SELL or BUY.
       **/
      InvalidHubAssetTradableState: AugmentedError<ApiType>;
      /**
       * Invalid initial asset price. Price must be non-zero.
       **/
      InvalidInitialAssetPrice: AugmentedError<ApiType>;
      /**
       * Invalid oracle price - division by zero.
       **/
      InvalidOraclePrice: AugmentedError<ApiType>;
      /**
       * Amount of shares provided cannot be 0.
       **/
      InvalidSharesAmount: AugmentedError<ApiType>;
      /**
       * Failed to calculate withdrawal fee.
       **/
      InvalidWithdrawalFee: AugmentedError<ApiType>;
      /**
       * Max fraction of asset reserve to sell has been exceeded.
       **/
      MaxInRatioExceeded: AugmentedError<ApiType>;
      /**
       * Max fraction of asset reserve to buy has been exceeded.
       **/
      MaxOutRatioExceeded: AugmentedError<ApiType>;
      /**
       * Adding token as protocol ( root ), token balance has not been updated prior to add token.
       **/
      MissingBalance: AugmentedError<ApiType>;
      /**
       * No native asset in the pool yet.
       **/
      NoNativeAssetInPool: AugmentedError<ApiType>;
      /**
       * No stable asset in the pool
       **/
      NoStableAssetInPool: AugmentedError<ApiType>;
      /**
       * Asset is not allowed to be bought or sold
       **/
      NotAllowed: AugmentedError<ApiType>;
      /**
       * Position has not been found.
       **/
      PositionNotFound: AugmentedError<ApiType>;
      /**
       * Imbalance results in positive value.
       **/
      PositiveImbalance: AugmentedError<ApiType>;
      /**
       * Max allowed price difference has been exceeded.
       **/
      PriceDifferenceTooHigh: AugmentedError<ApiType>;
      /**
       * Sell or buy with same asset ids is not allowed.
       **/
      SameAssetTradeNotAllowed: AugmentedError<ApiType>;
      /**
       * Maximum limit has been exceeded during trade.
       **/
      SellLimitExceeded: AugmentedError<ApiType>;
      /**
       * TVL cap has been exceeded
       **/
      TVLCapExceeded: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    omnipoolLiquidityMining: {
      /**
       * Asset is not in the omnipool.
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * Signed account is not owner of the deposit.
       **/
      Forbidden: AugmentedError<ApiType>;
      /**
       * Action cannot be completed because unexpected error has occurred. This should be reported
       * to protocol maintainers.
       **/
      InconsistentState: AugmentedError<ApiType>;
      /**
       * Oracle could not be found for requested assets.
       **/
      OracleNotAvailable: AugmentedError<ApiType>;
      /**
       * Oracle providing `price_adjustment` could not be found for requested assets.
       **/
      PriceAdjustmentNotAvailable: AugmentedError<ApiType>;
      /**
       * Rewards to claim are 0.
       **/
      ZeroClaimedRewards: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    omnipoolWarehouseLM: {
      /**
       * Multiple claims in the same period is not allowed.
       **/
      DoubleClaimInPeriod: AugmentedError<ApiType>;
      /**
       * Trying to lock LP shares into already locked yield farm.
       **/
      DoubleLock: AugmentedError<ApiType>;
      /**
       * Account creation from id failed.
       **/
      ErrorGetAccountId: AugmentedError<ApiType>;
      /**
       * Account is not allowed to perform action.
       **/
      Forbidden: AugmentedError<ApiType>;
      /**
       * Max number of yield farms in global farm was reached. Global farm can't accept new
       * yield farms until some yield farm is not removed from storage.
       **/
      GlobalFarmIsFull: AugmentedError<ApiType>;
      /**
       * One or more yield farms exist in global farm.
       **/
      GlobalFarmIsNotEmpty: AugmentedError<ApiType>;
      /**
       * Global farm does not exist.
       **/
      GlobalFarmNotFound: AugmentedError<ApiType>;
      /**
       * `incentivized_asset` is not registered in asset registry.
       **/
      IncentivizedAssetNotRegistered: AugmentedError<ApiType>;
      /**
       * Action cannot be completed because unexpected error has occurred. This should be reported
       * to protocol maintainers.
       **/
      InconsistentState: AugmentedError<ApiType>;
      /**
       * Value of deposited shares amount in reward currency is bellow min. limit.
       **/
      IncorrectValuedShares: AugmentedError<ApiType>;
      /**
       * Reward currency balance is not sufficient.
       **/
      InsufficientRewardCurrencyBalance: AugmentedError<ApiType>;
      /**
       * Blocks per period can't be 0.
       **/
      InvalidBlocksPerPeriod: AugmentedError<ApiType>;
      /**
       * LP shares amount is not valid.
       **/
      InvalidDepositAmount: AugmentedError<ApiType>;
      /**
       * Loyalty curve's initial reward percentage is not valid. Valid range is: [0, 1).
       **/
      InvalidInitialRewardPercentage: AugmentedError<ApiType>;
      /**
       * Invalid min. deposit was set for global farm.
       **/
      InvalidMinDeposit: AugmentedError<ApiType>;
      /**
       * Yield farm multiplier can't be 0.
       **/
      InvalidMultiplier: AugmentedError<ApiType>;
      /**
       * Planned yielding periods is less than `MinPlannedYieldingPeriods`.
       **/
      InvalidPlannedYieldingPeriods: AugmentedError<ApiType>;
      /**
       * Price adjustment multiplier can't be 0.
       **/
      InvalidPriceAdjustment: AugmentedError<ApiType>;
      /**
       * Total rewards is less than `MinTotalFarmRewards`.
       **/
      InvalidTotalRewards: AugmentedError<ApiType>;
      /**
       * Yield per period can't be 0.
       **/
      InvalidYieldPerPeriod: AugmentedError<ApiType>;
      /**
       * Liquidity mining is canceled.
       **/
      LiquidityMiningCanceled: AugmentedError<ApiType>;
      /**
       * Liquidity mining is not canceled.
       **/
      LiquidityMiningIsActive: AugmentedError<ApiType>;
      /**
       * Liquidity mining is in `active` or `terminated` state and action cannot be completed.
       **/
      LiquidityMiningIsNotStopped: AugmentedError<ApiType>;
      /**
       * Maximum number of locks reached for deposit.
       **/
      MaxEntriesPerDeposit: AugmentedError<ApiType>;
      /**
       * Farm's `incentivized_asset` is missing in provided asset pair.
       **/
      MissingIncentivizedAsset: AugmentedError<ApiType>;
      /**
       * `reward_currency` is not registered in asset registry.
       **/
      RewardCurrencyNotRegistered: AugmentedError<ApiType>;
      /**
       * Yield farm with given `amm_pool_id` already exists in global farm.
       **/
      YieldFarmAlreadyExists: AugmentedError<ApiType>;
      /**
       * Yield farm entry doesn't exist for given deposit.
       **/
      YieldFarmEntryNotFound: AugmentedError<ApiType>;
      /**
       * Yield farm does not exist.
       **/
      YieldFarmNotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ormlXcm: {
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * The message and destination was recognized as being reachable but
       * the operation could not be completed.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * The message and destination combination was not recognized as being
       * reachable.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    otc: {
      /**
       * Asset does not exist in registry
       **/
      AssetNotRegistered: AugmentedError<ApiType>;
      /**
       * The caller does not have permission to complete the action
       **/
      Forbidden: AugmentedError<ApiType>;
      /**
       * Reserved amount not sufficient.
       **/
      InsufficientReservedAmount: AugmentedError<ApiType>;
      /**
       * Error with math calculations
       **/
      MathError: AugmentedError<ApiType>;
      /**
       * Order amount_in and amount_out must at all times be greater than the existential deposit
       * for the asset multiplied by the ExistentialDepositMultiplier.
       * A fill order may not leave behind amounts smaller than this.
       **/
      OrderAmountTooSmall: AugmentedError<ApiType>;
      /**
       * Size of order ID exceeds the bound
       **/
      OrderIdOutOfBound: AugmentedError<ApiType>;
      /**
       * Order cannot be found
       **/
      OrderNotFound: AugmentedError<ApiType>;
      /**
       * Cannot partially fill an order which is not partially fillable
       **/
      OrderNotPartiallyFillable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parachainSystem: {
      /**
       * The inherent which supplies the host configuration did not run this block
       **/
      HostConfigurationNotAvailable: AugmentedError<ApiType>;
      /**
       * No code upgrade has been authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * No validation function upgrade is currently scheduled.
       **/
      NotScheduled: AugmentedError<ApiType>;
      /**
       * Attempt to upgrade validation function while existing upgrade pending
       **/
      OverlappingUpgrades: AugmentedError<ApiType>;
      /**
       * Polkadot currently prohibits this parachain from upgrading its validation function
       **/
      ProhibitedByPolkadot: AugmentedError<ApiType>;
      /**
       * The supplied validation function has compiled into a blob larger than Polkadot is
       * willing to run
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * The given code upgrade has not been authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * The inherent which supplies the validation data did not run this block
       **/
      ValidationDataNotAvailable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    polkadotXcm: {
      /**
       * The given account is not an identifiable sovereign account for any location.
       **/
      AccountNotSovereign: AugmentedError<ApiType>;
      /**
       * The location is invalid since it already has a subscription from us.
       **/
      AlreadySubscribed: AugmentedError<ApiType>;
      /**
       * The given location could not be used (e.g. because it cannot be expressed in the
       * desired version of XCM).
       **/
      BadLocation: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `MultiLocation` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * The assets to be sent are empty.
       **/
      Empty: AugmentedError<ApiType>;
      /**
       * The operation required fees to be paid which the initiator could not meet.
       **/
      FeesNotMet: AugmentedError<ApiType>;
      /**
       * The message execution fails the filter.
       **/
      Filtered: AugmentedError<ApiType>;
      /**
       * The unlock operation cannot succeed because there are still users of the lock.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Invalid asset for the operation.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Origin is invalid for sending.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * A remote lock with the corresponding data could not be found.
       **/
      LockNotFound: AugmentedError<ApiType>;
      /**
       * The owner does not own (all) of the asset that they wish to do the operation on.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * The referenced subscription could not be found.
       **/
      NoSubscription: AugmentedError<ApiType>;
      /**
       * There was some other issue (i.e. not to do with routing) in sending the message. Perhaps
       * a lack of space for buffering the message.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * Too many assets have been attempted for transfer.
       **/
      TooManyAssets: AugmentedError<ApiType>;
      /**
       * The asset owner has too many locks on the asset.
       **/
      TooManyLocks: AugmentedError<ApiType>;
      /**
       * The desired destination was unreachable, generally because there is a no way of routing
       * to it.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    relayChainInfo: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    router: {
      /**
       * The user has not enough balance to execute the trade
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * The route execution failed in the underlying AMM
       **/
      InvalidRouteExecution: AugmentedError<ApiType>;
      /**
       * The the max number of trades limit is reached
       **/
      MaxTradesExceeded: AugmentedError<ApiType>;
      /**
       * The AMM pool is not supported for executing trades
       **/
      PoolNotSupported: AugmentedError<ApiType>;
      /**
       * The calculation of route trade amounts failed in the underlying AMM
       **/
      RouteCalculationFailed: AugmentedError<ApiType>;
      /**
       * Route has not trades to be executed
       **/
      RouteHasNoTrades: AugmentedError<ApiType>;
      /**
       * The trading limit has been reached
       **/
      TradingLimitReached: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    stableswap: {
      /**
       * Asset is already in the pool.
       **/
      AssetInPool: AugmentedError<ApiType>;
      /**
       * Asset is not in the pool.
       **/
      AssetNotInPool: AugmentedError<ApiType>;
      /**
       * One or more assets are not registered in AssetRegistry
       **/
      AssetNotRegistered: AugmentedError<ApiType>;
      /**
       * Account balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Minimum limit has not been reached during trade.
       **/
      BuyLimitNotReached: AugmentedError<ApiType>;
      /**
       * Creating a pool with same assets or less than 2 assets is not allowed.
       **/
      IncorrectAssets: AugmentedError<ApiType>;
      /**
       * Balance of an asset is not sufficient to perform a trade.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Liquidity has not reached the required minimum.
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Insufficient liquidity left in the pool after withdrawal.
       **/
      InsufficientLiquidityRemaining: AugmentedError<ApiType>;
      /**
       * Remaining balance of share asset is below asset's existential deposit.
       **/
      InsufficientShareBalance: AugmentedError<ApiType>;
      /**
       * Balance of a share asset is not sufficient to withdraw liquidity.
       **/
      InsufficientShares: AugmentedError<ApiType>;
      /**
       * Amount is less than the minimum trading amount configured.
       **/
      InsufficientTradingAmount: AugmentedError<ApiType>;
      /**
       * Amplification is outside configured range.
       **/
      InvalidAmplification: AugmentedError<ApiType>;
      /**
       * Invalid asset amount provided. Amount must be greater than zero.
       **/
      InvalidAssetAmount: AugmentedError<ApiType>;
      /**
       * Initial liquidity of asset must be > 0.
       **/
      InvalidInitialLiquidity: AugmentedError<ApiType>;
      /**
       * Maximum number of assets has been exceeded.
       **/
      MaxAssetsExceeded: AugmentedError<ApiType>;
      /**
       * Desired amount not reached.
       **/
      MinimumAmountNotReached: AugmentedError<ApiType>;
      /**
       * Not allowed to perform an operation on given asset.
       **/
      NotAllowed: AugmentedError<ApiType>;
      /**
       * Future block number is in the past.
       **/
      PastBlock: AugmentedError<ApiType>;
      /**
       * A pool with given assets already exists.
       **/
      PoolExists: AugmentedError<ApiType>;
      /**
       * A pool with given assets does not exist.
       **/
      PoolNotFound: AugmentedError<ApiType>;
      /**
       * New amplification is equal to the previous value.
       **/
      SameAmplification: AugmentedError<ApiType>;
      /**
       * Maximum limit has been exceeded during trade.
       **/
      SellLimitExceeded: AugmentedError<ApiType>;
      /**
       * Share asset is amount assets when creating a pool.
       **/
      ShareAssetInPoolAssets: AugmentedError<ApiType>;
      /**
       * Share asset is not registered in Registry.
       **/
      ShareAssetNotRegistered: AugmentedError<ApiType>;
      /**
       * Slippage
       **/
      SlippageLimit: AugmentedError<ApiType>;
      /**
       * Failed to retrieve asset decimals.
       **/
      UnknownDecimals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    staking: {
      /**
       * Staking is already initialized.
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Arithmetic error.
       **/
      Arithmetic: AugmentedError<ApiType>;
      /**
       * Signer is not an owner of the staking position.
       **/
      Forbidden: AugmentedError<ApiType>;
      /**
       * Action cannot be completed because unexpected error has occurred. This should be reported
       * to protocol maintainers.
       **/
      InconsistentState: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Staked amount is too low.
       **/
      InsufficientStake: AugmentedError<ApiType>;
      /**
       * Maximum amount of votes were reached for staking position.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * Pot's balance is zero.
       **/
      MissingPotBalance: AugmentedError<ApiType>;
      /**
       * Staking is not initialized.
       **/
      NotInitialized: AugmentedError<ApiType>;
      /**
       * Account's position already exists.
       **/
      PositionAlreadyExists: AugmentedError<ApiType>;
      /**
       * Staking position has not been found.
       **/
      PositionNotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tips: {
      /**
       * The tip was already found/started.
       **/
      AlreadyKnown: AugmentedError<ApiType>;
      /**
       * The account attempting to retract the tip is not the finder of the tip.
       **/
      NotFinder: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because there are not enough tippers yet.
       **/
      StillOpen: AugmentedError<ApiType>;
      /**
       * The tip hash is unknown.
       **/
      UnknownTip: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tokens: {
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Failed because the maximum locks was exceeded
       **/
      MaxLocksExceeded: AugmentedError<ApiType>;
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    transactionPause: {
      /**
       * can not pause
       **/
      CannotPause: AugmentedError<ApiType>;
      /**
       * invalid character encoding
       **/
      InvalidCharacter: AugmentedError<ApiType>;
      /**
       * pallet name or function name is too long
       **/
      NameTooLong: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * The spend origin is valid but the amount it is allowed to spend is lower than the
       * amount to be spent.
       **/
      InsufficientPermission: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    uniques: {
      /**
       * The item ID has already been used for an item.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * The provided bid is too low.
       **/
      BidTooLow: AugmentedError<ApiType>;
      /**
       * The item or collection is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The item ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The item is locked.
       **/
      Locked: AugmentedError<ApiType>;
      /**
       * The max supply has already been set.
       **/
      MaxSupplyAlreadySet: AugmentedError<ApiType>;
      /**
       * All items have been minted.
       **/
      MaxSupplyReached: AugmentedError<ApiType>;
      /**
       * The provided max supply is less to the amount of items a collection already has.
       **/
      MaxSupplyTooSmall: AugmentedError<ApiType>;
      /**
       * There is no delegate approved.
       **/
      NoDelegate: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Item is not for sale.
       **/
      NotForSale: AugmentedError<ApiType>;
      /**
       * The named owner has not signed ownership of the collection is acceptable.
       **/
      Unaccepted: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * The given item ID is unknown.
       **/
      UnknownCollection: AugmentedError<ApiType>;
      /**
       * The given item ID is unknown.
       **/
      UnknownItem: AugmentedError<ApiType>;
      /**
       * The delegate turned out to be different to what was expected.
       **/
      WrongDelegate: AugmentedError<ApiType>;
      /**
       * The owner turned out to be different to what was expected.
       **/
      WrongOwner: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    unknownTokens: {
      /**
       * The operation will cause balance to overflow.
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * The balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Unhandled asset.
       **/
      UnhandledAsset: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * The vested transfer amount is too low
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * Insufficient amount of balance to lock
       **/
      InsufficientBalanceToLock: AugmentedError<ApiType>;
      /**
       * Failed because the maximum vesting schedules was exceeded
       **/
      MaxVestingSchedulesExceeded: AugmentedError<ApiType>;
      /**
       * This account have too many vesting schedules
       **/
      TooManyVestingSchedules: AugmentedError<ApiType>;
      /**
       * Vesting period is zero
       **/
      ZeroVestingPeriod: AugmentedError<ApiType>;
      /**
       * Number of vests is zero
       **/
      ZeroVestingPeriodCount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xcmpQueue: {
      /**
       * Bad overweight index.
       **/
      BadOverweightIndex: AugmentedError<ApiType>;
      /**
       * Bad XCM data.
       **/
      BadXcm: AugmentedError<ApiType>;
      /**
       * Bad XCM origin.
       **/
      BadXcmOrigin: AugmentedError<ApiType>;
      /**
       * Failed to send XCM message.
       **/
      FailedToSend: AugmentedError<ApiType>;
      /**
       * Provided weight is possibly not enough to execute the message.
       **/
      WeightOverLimit: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xTokens: {
      /**
       * Asset has no reserve location.
       **/
      AssetHasNoReserve: AugmentedError<ApiType>;
      /**
       * The specified index does not exist in a MultiAssets struct.
       **/
      AssetIndexNonExistent: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the
       * destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `MultiLocation` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * We tried sending distinct asset and fee but they have different
       * reserve chains.
       **/
      DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
      /**
       * Fee is not enough.
       **/
      FeeNotEnough: AugmentedError<ApiType>;
      /**
       * Could not get ancestry of asset reserve location.
       **/
      InvalidAncestry: AugmentedError<ApiType>;
      /**
       * The MultiAsset is invalid.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Invalid transfer destination.
       **/
      InvalidDest: AugmentedError<ApiType>;
      /**
       * MinXcmFee not registered for certain reserve location
       **/
      MinXcmFeeNotDefined: AugmentedError<ApiType>;
      /**
       * Not cross-chain transfer.
       **/
      NotCrossChainTransfer: AugmentedError<ApiType>;
      /**
       * Currency is not cross-chain transferable.
       **/
      NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
      /**
       * Not supported MultiLocation
       **/
      NotSupportedMultiLocation: AugmentedError<ApiType>;
      /**
       * The number of assets to be sent is over the maximum.
       **/
      TooManyAssetsBeingSent: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * XCM execution failed.
       **/
      XcmExecutionFailed: AugmentedError<ApiType>;
      /**
       * The transfering asset amount is zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * The fee is zero.
       **/
      ZeroFee: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
