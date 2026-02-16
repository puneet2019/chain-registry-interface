/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "feemarket.feemarket.v1";

/**
 * Params contains the required set of parameters for the EIP1559 fee market
 * plugin implementation.
 */
export interface Params {
  /**
   * Alpha is the amount we additively increase the learning rate
   * when it is above or below the target +/- threshold.
   *
   * Must be > 0.
   */
  alpha: string;
  /**
   * Beta is the amount we multiplicatively decrease the learning rate
   * when it is within the target +/- threshold.
   *
   * Must be [0, 1].
   */
  beta: string;
  /**
   * Gamma is the threshold for the learning rate. If the learning rate is
   * above or below the target +/- threshold, we additively increase the
   * learning rate by Alpha. Otherwise, we multiplicatively decrease the
   * learning rate by Beta.
   *
   * Must be [0, 0.5].
   */
  gamma: string;
  /**
   * Delta is the amount we additively increase/decrease the gas price when the
   * net block utilization difference in the window is above/below the target
   * utilization.
   */
  delta: string;
  /**
   * MinBaseGasPrice determines the initial gas price of the module and the
   * global minimum for the network.
   */
  minBaseGasPrice: string;
  /** MinLearningRate is the lower bound for the learning rate. */
  minLearningRate: string;
  /** MaxLearningRate is the upper bound for the learning rate. */
  maxLearningRate: string;
  /** MaxBlockUtilization is the maximum block utilization. */
  maxBlockUtilization: number;
  /**
   * Window defines the window size for calculating an adaptive learning rate
   * over a moving window of blocks.
   */
  window: number;
  /** FeeDenom is the denom that will be used for all fee payments. */
  feeDenom: string;
  /**
   * Enabled is a boolean that determines whether the EIP1559 fee market is
   * enabled.
   */
  enabled: boolean;
  /**
   * DistributeFees is a boolean that determines whether the fees are burned or
   * distributed to all stakers.
   */
  distributeFees: boolean;
}

const baseParams: object = {
  alpha: "",
  beta: "",
  gamma: "",
  delta: "",
  minBaseGasPrice: "",
  minLearningRate: "",
  maxLearningRate: "",
  maxBlockUtilization: 0,
  window: 0,
  feeDenom: "",
  enabled: false,
  distributeFees: false,
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.alpha !== "") {
      writer.uint32(10).string(message.alpha);
    }
    if (message.beta !== "") {
      writer.uint32(18).string(message.beta);
    }
    if (message.gamma !== "") {
      writer.uint32(26).string(message.gamma);
    }
    if (message.delta !== "") {
      writer.uint32(34).string(message.delta);
    }
    if (message.minBaseGasPrice !== "") {
      writer.uint32(42).string(message.minBaseGasPrice);
    }
    if (message.minLearningRate !== "") {
      writer.uint32(50).string(message.minLearningRate);
    }
    if (message.maxLearningRate !== "") {
      writer.uint32(58).string(message.maxLearningRate);
    }
    if (message.maxBlockUtilization !== 0) {
      writer.uint32(64).uint64(message.maxBlockUtilization);
    }
    if (message.window !== 0) {
      writer.uint32(72).uint64(message.window);
    }
    if (message.feeDenom !== "") {
      writer.uint32(82).string(message.feeDenom);
    }
    if (message.enabled === true) {
      writer.uint32(88).bool(message.enabled);
    }
    if (message.distributeFees === true) {
      writer.uint32(96).bool(message.distributeFees);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alpha = reader.string();
          break;
        case 2:
          message.beta = reader.string();
          break;
        case 3:
          message.gamma = reader.string();
          break;
        case 4:
          message.delta = reader.string();
          break;
        case 5:
          message.minBaseGasPrice = reader.string();
          break;
        case 6:
          message.minLearningRate = reader.string();
          break;
        case 7:
          message.maxLearningRate = reader.string();
          break;
        case 8:
          message.maxBlockUtilization = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.window = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.feeDenom = reader.string();
          break;
        case 11:
          message.enabled = reader.bool();
          break;
        case 12:
          message.distributeFees = reader.bool();
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
    if (object.alpha !== undefined && object.alpha !== null) {
      message.alpha = String(object.alpha);
    } else {
      message.alpha = "";
    }
    if (object.beta !== undefined && object.beta !== null) {
      message.beta = String(object.beta);
    } else {
      message.beta = "";
    }
    if (object.gamma !== undefined && object.gamma !== null) {
      message.gamma = String(object.gamma);
    } else {
      message.gamma = "";
    }
    if (object.delta !== undefined && object.delta !== null) {
      message.delta = String(object.delta);
    } else {
      message.delta = "";
    }
    if (
      object.minBaseGasPrice !== undefined &&
      object.minBaseGasPrice !== null
    ) {
      message.minBaseGasPrice = String(object.minBaseGasPrice);
    } else {
      message.minBaseGasPrice = "";
    }
    if (
      object.minLearningRate !== undefined &&
      object.minLearningRate !== null
    ) {
      message.minLearningRate = String(object.minLearningRate);
    } else {
      message.minLearningRate = "";
    }
    if (
      object.maxLearningRate !== undefined &&
      object.maxLearningRate !== null
    ) {
      message.maxLearningRate = String(object.maxLearningRate);
    } else {
      message.maxLearningRate = "";
    }
    if (
      object.maxBlockUtilization !== undefined &&
      object.maxBlockUtilization !== null
    ) {
      message.maxBlockUtilization = Number(object.maxBlockUtilization);
    } else {
      message.maxBlockUtilization = 0;
    }
    if (object.window !== undefined && object.window !== null) {
      message.window = Number(object.window);
    } else {
      message.window = 0;
    }
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = String(object.feeDenom);
    } else {
      message.feeDenom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.distributeFees !== undefined && object.distributeFees !== null) {
      message.distributeFees = Boolean(object.distributeFees);
    } else {
      message.distributeFees = false;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.alpha !== undefined && (obj.alpha = message.alpha);
    message.beta !== undefined && (obj.beta = message.beta);
    message.gamma !== undefined && (obj.gamma = message.gamma);
    message.delta !== undefined && (obj.delta = message.delta);
    message.minBaseGasPrice !== undefined &&
      (obj.minBaseGasPrice = message.minBaseGasPrice);
    message.minLearningRate !== undefined &&
      (obj.minLearningRate = message.minLearningRate);
    message.maxLearningRate !== undefined &&
      (obj.maxLearningRate = message.maxLearningRate);
    message.maxBlockUtilization !== undefined &&
      (obj.maxBlockUtilization = message.maxBlockUtilization);
    message.window !== undefined && (obj.window = message.window);
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.distributeFees !== undefined &&
      (obj.distributeFees = message.distributeFees);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.alpha !== undefined && object.alpha !== null) {
      message.alpha = object.alpha;
    } else {
      message.alpha = "";
    }
    if (object.beta !== undefined && object.beta !== null) {
      message.beta = object.beta;
    } else {
      message.beta = "";
    }
    if (object.gamma !== undefined && object.gamma !== null) {
      message.gamma = object.gamma;
    } else {
      message.gamma = "";
    }
    if (object.delta !== undefined && object.delta !== null) {
      message.delta = object.delta;
    } else {
      message.delta = "";
    }
    if (
      object.minBaseGasPrice !== undefined &&
      object.minBaseGasPrice !== null
    ) {
      message.minBaseGasPrice = object.minBaseGasPrice;
    } else {
      message.minBaseGasPrice = "";
    }
    if (
      object.minLearningRate !== undefined &&
      object.minLearningRate !== null
    ) {
      message.minLearningRate = object.minLearningRate;
    } else {
      message.minLearningRate = "";
    }
    if (
      object.maxLearningRate !== undefined &&
      object.maxLearningRate !== null
    ) {
      message.maxLearningRate = object.maxLearningRate;
    } else {
      message.maxLearningRate = "";
    }
    if (
      object.maxBlockUtilization !== undefined &&
      object.maxBlockUtilization !== null
    ) {
      message.maxBlockUtilization = object.maxBlockUtilization;
    } else {
      message.maxBlockUtilization = 0;
    }
    if (object.window !== undefined && object.window !== null) {
      message.window = object.window;
    } else {
      message.window = 0;
    }
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = object.feeDenom;
    } else {
      message.feeDenom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.distributeFees !== undefined && object.distributeFees !== null) {
      message.distributeFees = object.distributeFees;
    } else {
      message.distributeFees = false;
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
