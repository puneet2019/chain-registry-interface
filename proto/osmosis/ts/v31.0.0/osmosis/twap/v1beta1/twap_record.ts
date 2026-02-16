/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "osmosis.twap.v1beta1";

/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecord {
  poolId: number;
  /** Lexicographically smaller denom of the pair */
  asset0Denom: string;
  /** Lexicographically larger denom of the pair */
  asset1Denom: string;
  /** height this record corresponds to, for debugging purposes */
  height: number;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */
  time: Date | undefined;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */
  p0LastSpotPrice: string;
  p1LastSpotPrice: string;
  p0ArithmeticTwapAccumulator: string;
  p1ArithmeticTwapAccumulator: string;
  geometricTwapAccumulator: string;
  /**
   * This field contains the time in which the last spot price error occurred.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */
  lastErrorTime: Date | undefined;
}

/**
 * PruningState allows us to spread out the pruning of TWAP records over time,
 * instead of pruning all at once at the end of the epoch.
 */
export interface PruningState {
  /**
   * is_pruning is true if the pruning process is ongoing.
   * This tells the module to continue pruning the TWAP records
   * at the EndBlock.
   */
  isPruning: boolean;
  /**
   * last_kept_time is the time of the last kept TWAP record.
   * This is used to determine all TWAP records that are older than
   * last_kept_time and should be pruned.
   */
  lastKeptTime: Date | undefined;
  /**
   * Deprecated: This field is deprecated.
   *
   * @deprecated
   */
  lastKeySeen: Uint8Array;
  /**
   * last_seen_pool_id is the pool_id that we will begin pruning in the next
   * block. This value starts at the highest pool_id at time of epoch, and
   * decreases until it reaches 1. When it reaches 1, the pruning
   * process is complete.
   */
  lastSeenPoolId: number;
}

const baseTwapRecord: object = {
  poolId: 0,
  asset0Denom: "",
  asset1Denom: "",
  height: 0,
  p0LastSpotPrice: "",
  p1LastSpotPrice: "",
  p0ArithmeticTwapAccumulator: "",
  p1ArithmeticTwapAccumulator: "",
  geometricTwapAccumulator: "",
};

export const TwapRecord = {
  encode(
    message: TwapRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.asset0Denom !== "") {
      writer.uint32(18).string(message.asset0Denom);
    }
    if (message.asset1Denom !== "") {
      writer.uint32(26).string(message.asset1Denom);
    }
    if (message.height !== 0) {
      writer.uint32(32).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.p0LastSpotPrice !== "") {
      writer.uint32(50).string(message.p0LastSpotPrice);
    }
    if (message.p1LastSpotPrice !== "") {
      writer.uint32(58).string(message.p1LastSpotPrice);
    }
    if (message.p0ArithmeticTwapAccumulator !== "") {
      writer.uint32(66).string(message.p0ArithmeticTwapAccumulator);
    }
    if (message.p1ArithmeticTwapAccumulator !== "") {
      writer.uint32(74).string(message.p1ArithmeticTwapAccumulator);
    }
    if (message.geometricTwapAccumulator !== "") {
      writer.uint32(82).string(message.geometricTwapAccumulator);
    }
    if (message.lastErrorTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastErrorTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TwapRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTwapRecord } as TwapRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.asset0Denom = reader.string();
          break;
        case 3:
          message.asset1Denom = reader.string();
          break;
        case 4:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.p0LastSpotPrice = reader.string();
          break;
        case 7:
          message.p1LastSpotPrice = reader.string();
          break;
        case 8:
          message.p0ArithmeticTwapAccumulator = reader.string();
          break;
        case 9:
          message.p1ArithmeticTwapAccumulator = reader.string();
          break;
        case 10:
          message.geometricTwapAccumulator = reader.string();
          break;
        case 11:
          message.lastErrorTime = fromTimestamp(
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

  fromJSON(object: any): TwapRecord {
    const message = { ...baseTwapRecord } as TwapRecord;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Number(object.poolId);
    } else {
      message.poolId = 0;
    }
    if (object.asset0Denom !== undefined && object.asset0Denom !== null) {
      message.asset0Denom = String(object.asset0Denom);
    } else {
      message.asset0Denom = "";
    }
    if (object.asset1Denom !== undefined && object.asset1Denom !== null) {
      message.asset1Denom = String(object.asset1Denom);
    } else {
      message.asset1Denom = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromJsonTimestamp(object.time);
    } else {
      message.time = undefined;
    }
    if (
      object.p0LastSpotPrice !== undefined &&
      object.p0LastSpotPrice !== null
    ) {
      message.p0LastSpotPrice = String(object.p0LastSpotPrice);
    } else {
      message.p0LastSpotPrice = "";
    }
    if (
      object.p1LastSpotPrice !== undefined &&
      object.p1LastSpotPrice !== null
    ) {
      message.p1LastSpotPrice = String(object.p1LastSpotPrice);
    } else {
      message.p1LastSpotPrice = "";
    }
    if (
      object.p0ArithmeticTwapAccumulator !== undefined &&
      object.p0ArithmeticTwapAccumulator !== null
    ) {
      message.p0ArithmeticTwapAccumulator = String(
        object.p0ArithmeticTwapAccumulator
      );
    } else {
      message.p0ArithmeticTwapAccumulator = "";
    }
    if (
      object.p1ArithmeticTwapAccumulator !== undefined &&
      object.p1ArithmeticTwapAccumulator !== null
    ) {
      message.p1ArithmeticTwapAccumulator = String(
        object.p1ArithmeticTwapAccumulator
      );
    } else {
      message.p1ArithmeticTwapAccumulator = "";
    }
    if (
      object.geometricTwapAccumulator !== undefined &&
      object.geometricTwapAccumulator !== null
    ) {
      message.geometricTwapAccumulator = String(
        object.geometricTwapAccumulator
      );
    } else {
      message.geometricTwapAccumulator = "";
    }
    if (object.lastErrorTime !== undefined && object.lastErrorTime !== null) {
      message.lastErrorTime = fromJsonTimestamp(object.lastErrorTime);
    } else {
      message.lastErrorTime = undefined;
    }
    return message;
  },

  toJSON(message: TwapRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.asset0Denom !== undefined &&
      (obj.asset0Denom = message.asset0Denom);
    message.asset1Denom !== undefined &&
      (obj.asset1Denom = message.asset1Denom);
    message.height !== undefined && (obj.height = message.height);
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.p0LastSpotPrice !== undefined &&
      (obj.p0LastSpotPrice = message.p0LastSpotPrice);
    message.p1LastSpotPrice !== undefined &&
      (obj.p1LastSpotPrice = message.p1LastSpotPrice);
    message.p0ArithmeticTwapAccumulator !== undefined &&
      (obj.p0ArithmeticTwapAccumulator = message.p0ArithmeticTwapAccumulator);
    message.p1ArithmeticTwapAccumulator !== undefined &&
      (obj.p1ArithmeticTwapAccumulator = message.p1ArithmeticTwapAccumulator);
    message.geometricTwapAccumulator !== undefined &&
      (obj.geometricTwapAccumulator = message.geometricTwapAccumulator);
    message.lastErrorTime !== undefined &&
      (obj.lastErrorTime = message.lastErrorTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<TwapRecord>): TwapRecord {
    const message = { ...baseTwapRecord } as TwapRecord;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    } else {
      message.poolId = 0;
    }
    if (object.asset0Denom !== undefined && object.asset0Denom !== null) {
      message.asset0Denom = object.asset0Denom;
    } else {
      message.asset0Denom = "";
    }
    if (object.asset1Denom !== undefined && object.asset1Denom !== null) {
      message.asset1Denom = object.asset1Denom;
    } else {
      message.asset1Denom = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = undefined;
    }
    if (
      object.p0LastSpotPrice !== undefined &&
      object.p0LastSpotPrice !== null
    ) {
      message.p0LastSpotPrice = object.p0LastSpotPrice;
    } else {
      message.p0LastSpotPrice = "";
    }
    if (
      object.p1LastSpotPrice !== undefined &&
      object.p1LastSpotPrice !== null
    ) {
      message.p1LastSpotPrice = object.p1LastSpotPrice;
    } else {
      message.p1LastSpotPrice = "";
    }
    if (
      object.p0ArithmeticTwapAccumulator !== undefined &&
      object.p0ArithmeticTwapAccumulator !== null
    ) {
      message.p0ArithmeticTwapAccumulator = object.p0ArithmeticTwapAccumulator;
    } else {
      message.p0ArithmeticTwapAccumulator = "";
    }
    if (
      object.p1ArithmeticTwapAccumulator !== undefined &&
      object.p1ArithmeticTwapAccumulator !== null
    ) {
      message.p1ArithmeticTwapAccumulator = object.p1ArithmeticTwapAccumulator;
    } else {
      message.p1ArithmeticTwapAccumulator = "";
    }
    if (
      object.geometricTwapAccumulator !== undefined &&
      object.geometricTwapAccumulator !== null
    ) {
      message.geometricTwapAccumulator = object.geometricTwapAccumulator;
    } else {
      message.geometricTwapAccumulator = "";
    }
    if (object.lastErrorTime !== undefined && object.lastErrorTime !== null) {
      message.lastErrorTime = object.lastErrorTime;
    } else {
      message.lastErrorTime = undefined;
    }
    return message;
  },
};

const basePruningState: object = { isPruning: false, lastSeenPoolId: 0 };

export const PruningState = {
  encode(
    message: PruningState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isPruning === true) {
      writer.uint32(8).bool(message.isPruning);
    }
    if (message.lastKeptTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastKeptTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.lastKeySeen.length !== 0) {
      writer.uint32(26).bytes(message.lastKeySeen);
    }
    if (message.lastSeenPoolId !== 0) {
      writer.uint32(32).uint64(message.lastSeenPoolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PruningState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePruningState } as PruningState;
    message.lastKeySeen = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isPruning = reader.bool();
          break;
        case 2:
          message.lastKeptTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.lastKeySeen = reader.bytes();
          break;
        case 4:
          message.lastSeenPoolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PruningState {
    const message = { ...basePruningState } as PruningState;
    message.lastKeySeen = new Uint8Array();
    if (object.isPruning !== undefined && object.isPruning !== null) {
      message.isPruning = Boolean(object.isPruning);
    } else {
      message.isPruning = false;
    }
    if (object.lastKeptTime !== undefined && object.lastKeptTime !== null) {
      message.lastKeptTime = fromJsonTimestamp(object.lastKeptTime);
    } else {
      message.lastKeptTime = undefined;
    }
    if (object.lastKeySeen !== undefined && object.lastKeySeen !== null) {
      message.lastKeySeen = bytesFromBase64(object.lastKeySeen);
    }
    if (object.lastSeenPoolId !== undefined && object.lastSeenPoolId !== null) {
      message.lastSeenPoolId = Number(object.lastSeenPoolId);
    } else {
      message.lastSeenPoolId = 0;
    }
    return message;
  },

  toJSON(message: PruningState): unknown {
    const obj: any = {};
    message.isPruning !== undefined && (obj.isPruning = message.isPruning);
    message.lastKeptTime !== undefined &&
      (obj.lastKeptTime = message.lastKeptTime.toISOString());
    message.lastKeySeen !== undefined &&
      (obj.lastKeySeen = base64FromBytes(
        message.lastKeySeen !== undefined
          ? message.lastKeySeen
          : new Uint8Array()
      ));
    message.lastSeenPoolId !== undefined &&
      (obj.lastSeenPoolId = message.lastSeenPoolId);
    return obj;
  },

  fromPartial(object: DeepPartial<PruningState>): PruningState {
    const message = { ...basePruningState } as PruningState;
    if (object.isPruning !== undefined && object.isPruning !== null) {
      message.isPruning = object.isPruning;
    } else {
      message.isPruning = false;
    }
    if (object.lastKeptTime !== undefined && object.lastKeptTime !== null) {
      message.lastKeptTime = object.lastKeptTime;
    } else {
      message.lastKeptTime = undefined;
    }
    if (object.lastKeySeen !== undefined && object.lastKeySeen !== null) {
      message.lastKeySeen = object.lastKeySeen;
    } else {
      message.lastKeySeen = new Uint8Array();
    }
    if (object.lastSeenPoolId !== undefined && object.lastSeenPoolId !== null) {
      message.lastSeenPoolId = object.lastSeenPoolId;
    } else {
      message.lastSeenPoolId = 0;
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
