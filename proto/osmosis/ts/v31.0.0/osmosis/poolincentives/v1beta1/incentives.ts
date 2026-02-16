/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "osmosis.poolincentives.v1beta1";

export interface Params {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  mintedDenom: string;
}

export interface LockableDurationsInfo {
  lockableDurations: Duration[];
}

export interface DistrInfo {
  totalWeight: string;
  records: DistrRecord[];
}

export interface DistrRecord {
  gaugeId: number;
  weight: string;
}

export interface PoolToGauge {
  poolId: number;
  gaugeId: number;
  duration: Duration | undefined;
}

export interface AnyPoolToInternalGauges {
  poolToGauge: PoolToGauge[];
}

export interface ConcentratedPoolToNoLockGauges {
  poolToGauge: PoolToGauge[];
}

const baseParams: object = { mintedDenom: "" };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintedDenom !== "") {
      writer.uint32(10).string(message.mintedDenom);
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
          message.mintedDenom = reader.string();
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
    if (object.mintedDenom !== undefined && object.mintedDenom !== null) {
      message.mintedDenom = String(object.mintedDenom);
    } else {
      message.mintedDenom = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintedDenom !== undefined &&
      (obj.mintedDenom = message.mintedDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.mintedDenom !== undefined && object.mintedDenom !== null) {
      message.mintedDenom = object.mintedDenom;
    } else {
      message.mintedDenom = "";
    }
    return message;
  },
};

const baseLockableDurationsInfo: object = {};

export const LockableDurationsInfo = {
  encode(
    message: LockableDurationsInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockableDurationsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLockableDurationsInfo } as LockableDurationsInfo;
    message.lockableDurations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(
            Duration.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockableDurationsInfo {
    const message = { ...baseLockableDurationsInfo } as LockableDurationsInfo;
    message.lockableDurations = [];
    if (
      object.lockableDurations !== undefined &&
      object.lockableDurations !== null
    ) {
      for (const e of object.lockableDurations) {
        message.lockableDurations.push(Duration.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: LockableDurationsInfo): unknown {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map((e) =>
        e ? Duration.toJSON(e) : undefined
      );
    } else {
      obj.lockableDurations = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<LockableDurationsInfo>
  ): LockableDurationsInfo {
    const message = { ...baseLockableDurationsInfo } as LockableDurationsInfo;
    message.lockableDurations = [];
    if (
      object.lockableDurations !== undefined &&
      object.lockableDurations !== null
    ) {
      for (const e of object.lockableDurations) {
        message.lockableDurations.push(Duration.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDistrInfo: object = { totalWeight: "" };

export const DistrInfo = {
  encode(
    message: DistrInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistrInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDistrInfo } as DistrInfo;
    message.records = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;
        case 2:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DistrInfo {
    const message = { ...baseDistrInfo } as DistrInfo;
    message.records = [];
    if (object.totalWeight !== undefined && object.totalWeight !== null) {
      message.totalWeight = String(object.totalWeight);
    } else {
      message.totalWeight = "";
    }
    if (object.records !== undefined && object.records !== null) {
      for (const e of object.records) {
        message.records.push(DistrRecord.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: DistrInfo): unknown {
    const obj: any = {};
    message.totalWeight !== undefined &&
      (obj.totalWeight = message.totalWeight);
    if (message.records) {
      obj.records = message.records.map((e) =>
        e ? DistrRecord.toJSON(e) : undefined
      );
    } else {
      obj.records = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DistrInfo>): DistrInfo {
    const message = { ...baseDistrInfo } as DistrInfo;
    message.records = [];
    if (object.totalWeight !== undefined && object.totalWeight !== null) {
      message.totalWeight = object.totalWeight;
    } else {
      message.totalWeight = "";
    }
    if (object.records !== undefined && object.records !== null) {
      for (const e of object.records) {
        message.records.push(DistrRecord.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDistrRecord: object = { gaugeId: 0, weight: "" };

export const DistrRecord = {
  encode(
    message: DistrRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gaugeId !== 0) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistrRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDistrRecord } as DistrRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): DistrRecord {
    const message = { ...baseDistrRecord } as DistrRecord;
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = Number(object.gaugeId);
    } else {
      message.gaugeId = 0;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = String(object.weight);
    } else {
      message.weight = "";
    }
    return message;
  },

  toJSON(message: DistrRecord): unknown {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gaugeId = message.gaugeId);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<DistrRecord>): DistrRecord {
    const message = { ...baseDistrRecord } as DistrRecord;
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = object.gaugeId;
    } else {
      message.gaugeId = 0;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    } else {
      message.weight = "";
    }
    return message;
  },
};

const basePoolToGauge: object = { poolId: 0, gaugeId: 0 };

export const PoolToGauge = {
  encode(
    message: PoolToGauge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.gaugeId !== 0) {
      writer.uint32(16).uint64(message.gaugeId);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolToGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolToGauge } as PoolToGauge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.gaugeId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolToGauge {
    const message = { ...basePoolToGauge } as PoolToGauge;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Number(object.poolId);
    } else {
      message.poolId = 0;
    }
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = Number(object.gaugeId);
    } else {
      message.gaugeId = 0;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromJSON(object.duration);
    } else {
      message.duration = undefined;
    }
    return message;
  },

  toJSON(message: PoolToGauge): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.gaugeId !== undefined && (obj.gaugeId = message.gaugeId);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolToGauge>): PoolToGauge {
    const message = { ...basePoolToGauge } as PoolToGauge;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    } else {
      message.poolId = 0;
    }
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = object.gaugeId;
    } else {
      message.gaugeId = 0;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    } else {
      message.duration = undefined;
    }
    return message;
  },
};

const baseAnyPoolToInternalGauges: object = {};

export const AnyPoolToInternalGauges = {
  encode(
    message: AnyPoolToInternalGauges,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolToGauge) {
      PoolToGauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AnyPoolToInternalGauges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAnyPoolToInternalGauges,
    } as AnyPoolToInternalGauges;
    message.poolToGauge = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AnyPoolToInternalGauges {
    const message = {
      ...baseAnyPoolToInternalGauges,
    } as AnyPoolToInternalGauges;
    message.poolToGauge = [];
    if (object.poolToGauge !== undefined && object.poolToGauge !== null) {
      for (const e of object.poolToGauge) {
        message.poolToGauge.push(PoolToGauge.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: AnyPoolToInternalGauges): unknown {
    const obj: any = {};
    if (message.poolToGauge) {
      obj.poolToGauge = message.poolToGauge.map((e) =>
        e ? PoolToGauge.toJSON(e) : undefined
      );
    } else {
      obj.poolToGauge = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<AnyPoolToInternalGauges>
  ): AnyPoolToInternalGauges {
    const message = {
      ...baseAnyPoolToInternalGauges,
    } as AnyPoolToInternalGauges;
    message.poolToGauge = [];
    if (object.poolToGauge !== undefined && object.poolToGauge !== null) {
      for (const e of object.poolToGauge) {
        message.poolToGauge.push(PoolToGauge.fromPartial(e));
      }
    }
    return message;
  },
};

const baseConcentratedPoolToNoLockGauges: object = {};

export const ConcentratedPoolToNoLockGauges = {
  encode(
    message: ConcentratedPoolToNoLockGauges,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolToGauge) {
      PoolToGauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConcentratedPoolToNoLockGauges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConcentratedPoolToNoLockGauges,
    } as ConcentratedPoolToNoLockGauges;
    message.poolToGauge = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConcentratedPoolToNoLockGauges {
    const message = {
      ...baseConcentratedPoolToNoLockGauges,
    } as ConcentratedPoolToNoLockGauges;
    message.poolToGauge = [];
    if (object.poolToGauge !== undefined && object.poolToGauge !== null) {
      for (const e of object.poolToGauge) {
        message.poolToGauge.push(PoolToGauge.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ConcentratedPoolToNoLockGauges): unknown {
    const obj: any = {};
    if (message.poolToGauge) {
      obj.poolToGauge = message.poolToGauge.map((e) =>
        e ? PoolToGauge.toJSON(e) : undefined
      );
    } else {
      obj.poolToGauge = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ConcentratedPoolToNoLockGauges>
  ): ConcentratedPoolToNoLockGauges {
    const message = {
      ...baseConcentratedPoolToNoLockGauges,
    } as ConcentratedPoolToNoLockGauges;
    message.poolToGauge = [];
    if (object.poolToGauge !== undefined && object.poolToGauge !== null) {
      for (const e of object.poolToGauge) {
        message.poolToGauge.push(PoolToGauge.fromPartial(e));
      }
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
