/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.mint.v1beta1";

/** Minter represents the minting state. */
export interface Minter {
  /** epoch_provisions represent rewards for the current epoch. */
  epochProvisions: string;
}

/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddress {
  address: string;
  weight: string;
}

/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */
export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted mint_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * pool_incentives defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */
  poolIncentives: string;
  /**
   * developer_rewards defines the proportion of the minted mint_denom that is
   * to be allocated to developer rewards address.
   */
  developerRewards: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool.
   */
  communityPool: string;
}

/** Params holds parameters for the x/mint module. */
export interface Params {
  /** mint_denom is the denom of the coin to mint. */
  mintDenom: string;
  /** genesis_epoch_provisions epoch provisions from the first epoch. */
  genesisEpochProvisions: string;
  /** epoch_identifier mint epoch identifier e.g. (day, week). */
  epochIdentifier: string;
  /**
   * reduction_period_in_epochs the number of epochs it takes
   * to reduce the rewards.
   */
  reductionPeriodInEpochs: number;
  /**
   * reduction_factor is the reduction multiplier to execute
   * at the end of each period set by reduction_period_in_epochs.
   */
  reductionFactor: string;
  /**
   * distribution_proportions defines the distribution proportions of the minted
   * denom. In other words, defines which stakeholders will receive the minted
   * denoms and how much.
   */
  distributionProportions: DistributionProportions | undefined;
  /**
   * weighted_developer_rewards_receivers is the address to receive developer
   * rewards with weights assignedt to each address. The final amount that each
   * address receives is: epoch_provisions *
   * distribution_proportions.developer_rewards * Address's Weight.
   */
  weightedDeveloperRewardsReceivers: WeightedAddress[];
  /**
   * minting_rewards_distribution_start_epoch start epoch to distribute minting
   * rewards
   */
  mintingRewardsDistributionStartEpoch: number;
}

const baseMinter: object = { epochProvisions: "" };

export const Minter = {
  encode(
    message: Minter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(message.epochProvisions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMinter } as Minter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Minter {
    const message = { ...baseMinter } as Minter;
    if (
      object.epochProvisions !== undefined &&
      object.epochProvisions !== null
    ) {
      message.epochProvisions = String(object.epochProvisions);
    } else {
      message.epochProvisions = "";
    }
    return message;
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.epochProvisions !== undefined &&
      (obj.epochProvisions = message.epochProvisions);
    return obj;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = { ...baseMinter } as Minter;
    if (
      object.epochProvisions !== undefined &&
      object.epochProvisions !== null
    ) {
      message.epochProvisions = object.epochProvisions;
    } else {
      message.epochProvisions = "";
    }
    return message;
  },
};

const baseWeightedAddress: object = { address: "", weight: "" };

export const WeightedAddress = {
  encode(
    message: WeightedAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWeightedAddress } as WeightedAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WeightedAddress {
    const message = { ...baseWeightedAddress } as WeightedAddress;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = String(object.weight);
    } else {
      message.weight = "";
    }
    return message;
  },

  toJSON(message: WeightedAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress {
    const message = { ...baseWeightedAddress } as WeightedAddress;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    } else {
      message.weight = "";
    }
    return message;
  },
};

const baseDistributionProportions: object = {
  staking: "",
  poolIncentives: "",
  developerRewards: "",
  communityPool: "",
};

export const DistributionProportions = {
  encode(
    message: DistributionProportions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    if (message.poolIncentives !== "") {
      writer.uint32(18).string(message.poolIncentives);
    }
    if (message.developerRewards !== "") {
      writer.uint32(26).string(message.developerRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(34).string(message.communityPool);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DistributionProportions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDistributionProportions,
    } as DistributionProportions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;
        case 2:
          message.poolIncentives = reader.string();
          break;
        case 3:
          message.developerRewards = reader.string();
          break;
        case 4:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DistributionProportions {
    const message = {
      ...baseDistributionProportions,
    } as DistributionProportions;
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = String(object.staking);
    } else {
      message.staking = "";
    }
    if (object.poolIncentives !== undefined && object.poolIncentives !== null) {
      message.poolIncentives = String(object.poolIncentives);
    } else {
      message.poolIncentives = "";
    }
    if (
      object.developerRewards !== undefined &&
      object.developerRewards !== null
    ) {
      message.developerRewards = String(object.developerRewards);
    } else {
      message.developerRewards = "";
    }
    if (object.communityPool !== undefined && object.communityPool !== null) {
      message.communityPool = String(object.communityPool);
    } else {
      message.communityPool = "";
    }
    return message;
  },

  toJSON(message: DistributionProportions): unknown {
    const obj: any = {};
    message.staking !== undefined && (obj.staking = message.staking);
    message.poolIncentives !== undefined &&
      (obj.poolIncentives = message.poolIncentives);
    message.developerRewards !== undefined &&
      (obj.developerRewards = message.developerRewards);
    message.communityPool !== undefined &&
      (obj.communityPool = message.communityPool);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DistributionProportions>
  ): DistributionProportions {
    const message = {
      ...baseDistributionProportions,
    } as DistributionProportions;
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = object.staking;
    } else {
      message.staking = "";
    }
    if (object.poolIncentives !== undefined && object.poolIncentives !== null) {
      message.poolIncentives = object.poolIncentives;
    } else {
      message.poolIncentives = "";
    }
    if (
      object.developerRewards !== undefined &&
      object.developerRewards !== null
    ) {
      message.developerRewards = object.developerRewards;
    } else {
      message.developerRewards = "";
    }
    if (object.communityPool !== undefined && object.communityPool !== null) {
      message.communityPool = object.communityPool;
    } else {
      message.communityPool = "";
    }
    return message;
  },
};

const baseParams: object = {
  mintDenom: "",
  genesisEpochProvisions: "",
  epochIdentifier: "",
  reductionPeriodInEpochs: 0,
  reductionFactor: "",
  mintingRewardsDistributionStartEpoch: 0,
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(message.genesisEpochProvisions);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (message.reductionPeriodInEpochs !== 0) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(42).string(message.reductionFactor);
    }
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(
        message.distributionProportions,
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.weightedDeveloperRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.mintingRewardsDistributionStartEpoch !== 0) {
      writer.uint32(64).int64(message.mintingRewardsDistributionStartEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.weightedDeveloperRewardsReceivers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.genesisEpochProvisions = reader.string();
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.reductionPeriodInEpochs = longToNumber(
            reader.int64() as Long
          );
          break;
        case 5:
          message.reductionFactor = reader.string();
          break;
        case 6:
          message.distributionProportions = DistributionProportions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.weightedDeveloperRewardsReceivers.push(
            WeightedAddress.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.mintingRewardsDistributionStartEpoch = longToNumber(
            reader.int64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.weightedDeveloperRewardsReceivers = [];
    if (object.mintDenom !== undefined && object.mintDenom !== null) {
      message.mintDenom = String(object.mintDenom);
    } else {
      message.mintDenom = "";
    }
    if (
      object.genesisEpochProvisions !== undefined &&
      object.genesisEpochProvisions !== null
    ) {
      message.genesisEpochProvisions = String(object.genesisEpochProvisions);
    } else {
      message.genesisEpochProvisions = "";
    }
    if (
      object.epochIdentifier !== undefined &&
      object.epochIdentifier !== null
    ) {
      message.epochIdentifier = String(object.epochIdentifier);
    } else {
      message.epochIdentifier = "";
    }
    if (
      object.reductionPeriodInEpochs !== undefined &&
      object.reductionPeriodInEpochs !== null
    ) {
      message.reductionPeriodInEpochs = Number(object.reductionPeriodInEpochs);
    } else {
      message.reductionPeriodInEpochs = 0;
    }
    if (
      object.reductionFactor !== undefined &&
      object.reductionFactor !== null
    ) {
      message.reductionFactor = String(object.reductionFactor);
    } else {
      message.reductionFactor = "";
    }
    if (
      object.distributionProportions !== undefined &&
      object.distributionProportions !== null
    ) {
      message.distributionProportions = DistributionProportions.fromJSON(
        object.distributionProportions
      );
    } else {
      message.distributionProportions = undefined;
    }
    if (
      object.weightedDeveloperRewardsReceivers !== undefined &&
      object.weightedDeveloperRewardsReceivers !== null
    ) {
      for (const e of object.weightedDeveloperRewardsReceivers) {
        message.weightedDeveloperRewardsReceivers.push(
          WeightedAddress.fromJSON(e)
        );
      }
    }
    if (
      object.mintingRewardsDistributionStartEpoch !== undefined &&
      object.mintingRewardsDistributionStartEpoch !== null
    ) {
      message.mintingRewardsDistributionStartEpoch = Number(
        object.mintingRewardsDistributionStartEpoch
      );
    } else {
      message.mintingRewardsDistributionStartEpoch = 0;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.genesisEpochProvisions !== undefined &&
      (obj.genesisEpochProvisions = message.genesisEpochProvisions);
    message.epochIdentifier !== undefined &&
      (obj.epochIdentifier = message.epochIdentifier);
    message.reductionPeriodInEpochs !== undefined &&
      (obj.reductionPeriodInEpochs = message.reductionPeriodInEpochs);
    message.reductionFactor !== undefined &&
      (obj.reductionFactor = message.reductionFactor);
    message.distributionProportions !== undefined &&
      (obj.distributionProportions = message.distributionProportions
        ? DistributionProportions.toJSON(message.distributionProportions)
        : undefined);
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weightedDeveloperRewardsReceivers = message.weightedDeveloperRewardsReceivers.map(
        (e) => (e ? WeightedAddress.toJSON(e) : undefined)
      );
    } else {
      obj.weightedDeveloperRewardsReceivers = [];
    }
    message.mintingRewardsDistributionStartEpoch !== undefined &&
      (obj.mintingRewardsDistributionStartEpoch =
        message.mintingRewardsDistributionStartEpoch);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.weightedDeveloperRewardsReceivers = [];
    if (object.mintDenom !== undefined && object.mintDenom !== null) {
      message.mintDenom = object.mintDenom;
    } else {
      message.mintDenom = "";
    }
    if (
      object.genesisEpochProvisions !== undefined &&
      object.genesisEpochProvisions !== null
    ) {
      message.genesisEpochProvisions = object.genesisEpochProvisions;
    } else {
      message.genesisEpochProvisions = "";
    }
    if (
      object.epochIdentifier !== undefined &&
      object.epochIdentifier !== null
    ) {
      message.epochIdentifier = object.epochIdentifier;
    } else {
      message.epochIdentifier = "";
    }
    if (
      object.reductionPeriodInEpochs !== undefined &&
      object.reductionPeriodInEpochs !== null
    ) {
      message.reductionPeriodInEpochs = object.reductionPeriodInEpochs;
    } else {
      message.reductionPeriodInEpochs = 0;
    }
    if (
      object.reductionFactor !== undefined &&
      object.reductionFactor !== null
    ) {
      message.reductionFactor = object.reductionFactor;
    } else {
      message.reductionFactor = "";
    }
    if (
      object.distributionProportions !== undefined &&
      object.distributionProportions !== null
    ) {
      message.distributionProportions = DistributionProportions.fromPartial(
        object.distributionProportions
      );
    } else {
      message.distributionProportions = undefined;
    }
    if (
      object.weightedDeveloperRewardsReceivers !== undefined &&
      object.weightedDeveloperRewardsReceivers !== null
    ) {
      for (const e of object.weightedDeveloperRewardsReceivers) {
        message.weightedDeveloperRewardsReceivers.push(
          WeightedAddress.fromPartial(e)
        );
      }
    }
    if (
      object.mintingRewardsDistributionStartEpoch !== undefined &&
      object.mintingRewardsDistributionStartEpoch !== null
    ) {
      message.mintingRewardsDistributionStartEpoch =
        object.mintingRewardsDistributionStartEpoch;
    } else {
      message.mintingRewardsDistributionStartEpoch = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
