/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";

export interface Pool {
  /** pool's address holding all liquidity tokens. */
  address: string;
  /** address holding the incentives liquidity. */
  incentivesAddress: string;
  /** address holding spread rewards from swaps. */
  spreadRewardsAddress: string;
  id: number;
  /** Amount of total liquidity */
  currentTickLiquidity: string;
  token0: string;
  token1: string;
  currentSqrtPrice: string;
  currentTick: number;
  /**
   * tick_spacing must be one of the authorized_tick_spacing values set in the
   * concentrated-liquidity parameters
   */
  tickSpacing: number;
  exponentAtPriceOne: number;
  /** spread_factor is the ratio that is charged on the amount of token in. */
  spreadFactor: string;
  /**
   * last_liquidity_update is the last time either the pool liquidity or the
   * active tick changed
   */
  lastLiquidityUpdate: Date | undefined;
}

const basePool: object = {
  address: "",
  incentivesAddress: "",
  spreadRewardsAddress: "",
  id: 0,
  currentTickLiquidity: "",
  token0: "",
  token1: "",
  currentSqrtPrice: "",
  currentTick: 0,
  tickSpacing: 0,
  exponentAtPriceOne: 0,
  spreadFactor: "",
};

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.incentivesAddress !== "") {
      writer.uint32(18).string(message.incentivesAddress);
    }
    if (message.spreadRewardsAddress !== "") {
      writer.uint32(26).string(message.spreadRewardsAddress);
    }
    if (message.id !== 0) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.currentTickLiquidity !== "") {
      writer.uint32(42).string(message.currentTickLiquidity);
    }
    if (message.token0 !== "") {
      writer.uint32(50).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(58).string(message.token1);
    }
    if (message.currentSqrtPrice !== "") {
      writer.uint32(66).string(message.currentSqrtPrice);
    }
    if (message.currentTick !== 0) {
      writer.uint32(72).int64(message.currentTick);
    }
    if (message.tickSpacing !== 0) {
      writer.uint32(80).uint64(message.tickSpacing);
    }
    if (message.exponentAtPriceOne !== 0) {
      writer.uint32(88).int64(message.exponentAtPriceOne);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(98).string(message.spreadFactor);
    }
    if (message.lastLiquidityUpdate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastLiquidityUpdate),
        writer.uint32(106).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePool } as Pool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.incentivesAddress = reader.string();
          break;
        case 3:
          message.spreadRewardsAddress = reader.string();
          break;
        case 4:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.currentTickLiquidity = reader.string();
          break;
        case 6:
          message.token0 = reader.string();
          break;
        case 7:
          message.token1 = reader.string();
          break;
        case 8:
          message.currentSqrtPrice = reader.string();
          break;
        case 9:
          message.currentTick = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.tickSpacing = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.exponentAtPriceOne = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.spreadFactor = reader.string();
          break;
        case 13:
          message.lastLiquidityUpdate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    const message = { ...basePool } as Pool;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (
      object.incentivesAddress !== undefined &&
      object.incentivesAddress !== null
    ) {
      message.incentivesAddress = String(object.incentivesAddress);
    } else {
      message.incentivesAddress = "";
    }
    if (
      object.spreadRewardsAddress !== undefined &&
      object.spreadRewardsAddress !== null
    ) {
      message.spreadRewardsAddress = String(object.spreadRewardsAddress);
    } else {
      message.spreadRewardsAddress = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (
      object.currentTickLiquidity !== undefined &&
      object.currentTickLiquidity !== null
    ) {
      message.currentTickLiquidity = String(object.currentTickLiquidity);
    } else {
      message.currentTickLiquidity = "";
    }
    if (object.token0 !== undefined && object.token0 !== null) {
      message.token0 = String(object.token0);
    } else {
      message.token0 = "";
    }
    if (object.token1 !== undefined && object.token1 !== null) {
      message.token1 = String(object.token1);
    } else {
      message.token1 = "";
    }
    if (
      object.currentSqrtPrice !== undefined &&
      object.currentSqrtPrice !== null
    ) {
      message.currentSqrtPrice = String(object.currentSqrtPrice);
    } else {
      message.currentSqrtPrice = "";
    }
    if (object.currentTick !== undefined && object.currentTick !== null) {
      message.currentTick = Number(object.currentTick);
    } else {
      message.currentTick = 0;
    }
    if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
      message.tickSpacing = Number(object.tickSpacing);
    } else {
      message.tickSpacing = 0;
    }
    if (
      object.exponentAtPriceOne !== undefined &&
      object.exponentAtPriceOne !== null
    ) {
      message.exponentAtPriceOne = Number(object.exponentAtPriceOne);
    } else {
      message.exponentAtPriceOne = 0;
    }
    if (object.spreadFactor !== undefined && object.spreadFactor !== null) {
      message.spreadFactor = String(object.spreadFactor);
    } else {
      message.spreadFactor = "";
    }
    if (
      object.lastLiquidityUpdate !== undefined &&
      object.lastLiquidityUpdate !== null
    ) {
      message.lastLiquidityUpdate = fromJsonTimestamp(
        object.lastLiquidityUpdate
      );
    } else {
      message.lastLiquidityUpdate = undefined;
    }
    return message;
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.incentivesAddress !== undefined &&
      (obj.incentivesAddress = message.incentivesAddress);
    message.spreadRewardsAddress !== undefined &&
      (obj.spreadRewardsAddress = message.spreadRewardsAddress);
    message.id !== undefined && (obj.id = message.id);
    message.currentTickLiquidity !== undefined &&
      (obj.currentTickLiquidity = message.currentTickLiquidity);
    message.token0 !== undefined && (obj.token0 = message.token0);
    message.token1 !== undefined && (obj.token1 = message.token1);
    message.currentSqrtPrice !== undefined &&
      (obj.currentSqrtPrice = message.currentSqrtPrice);
    message.currentTick !== undefined &&
      (obj.currentTick = message.currentTick);
    message.tickSpacing !== undefined &&
      (obj.tickSpacing = message.tickSpacing);
    message.exponentAtPriceOne !== undefined &&
      (obj.exponentAtPriceOne = message.exponentAtPriceOne);
    message.spreadFactor !== undefined &&
      (obj.spreadFactor = message.spreadFactor);
    message.lastLiquidityUpdate !== undefined &&
      (obj.lastLiquidityUpdate = message.lastLiquidityUpdate.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = { ...basePool } as Pool;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (
      object.incentivesAddress !== undefined &&
      object.incentivesAddress !== null
    ) {
      message.incentivesAddress = object.incentivesAddress;
    } else {
      message.incentivesAddress = "";
    }
    if (
      object.spreadRewardsAddress !== undefined &&
      object.spreadRewardsAddress !== null
    ) {
      message.spreadRewardsAddress = object.spreadRewardsAddress;
    } else {
      message.spreadRewardsAddress = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (
      object.currentTickLiquidity !== undefined &&
      object.currentTickLiquidity !== null
    ) {
      message.currentTickLiquidity = object.currentTickLiquidity;
    } else {
      message.currentTickLiquidity = "";
    }
    if (object.token0 !== undefined && object.token0 !== null) {
      message.token0 = object.token0;
    } else {
      message.token0 = "";
    }
    if (object.token1 !== undefined && object.token1 !== null) {
      message.token1 = object.token1;
    } else {
      message.token1 = "";
    }
    if (
      object.currentSqrtPrice !== undefined &&
      object.currentSqrtPrice !== null
    ) {
      message.currentSqrtPrice = object.currentSqrtPrice;
    } else {
      message.currentSqrtPrice = "";
    }
    if (object.currentTick !== undefined && object.currentTick !== null) {
      message.currentTick = object.currentTick;
    } else {
      message.currentTick = 0;
    }
    if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
      message.tickSpacing = object.tickSpacing;
    } else {
      message.tickSpacing = 0;
    }
    if (
      object.exponentAtPriceOne !== undefined &&
      object.exponentAtPriceOne !== null
    ) {
      message.exponentAtPriceOne = object.exponentAtPriceOne;
    } else {
      message.exponentAtPriceOne = 0;
    }
    if (object.spreadFactor !== undefined && object.spreadFactor !== null) {
      message.spreadFactor = object.spreadFactor;
    } else {
      message.spreadFactor = "";
    }
    if (
      object.lastLiquidityUpdate !== undefined &&
      object.lastLiquidityUpdate !== null
    ) {
      message.lastLiquidityUpdate = object.lastLiquidityUpdate;
    } else {
      message.lastLiquidityUpdate = undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
