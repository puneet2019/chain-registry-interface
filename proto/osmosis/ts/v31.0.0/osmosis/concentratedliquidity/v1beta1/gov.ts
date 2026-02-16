/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";

/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposal {
  title: string;
  description: string;
  poolRecords: PoolRecord[];
}

/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposal {
  title: string;
  description: string;
  poolIdToTickSpacingRecords: PoolIdToTickSpacingRecord[];
}

/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecord {
  poolId: number;
  newTickSpacing: number;
}

export interface PoolRecord {
  denom0: string;
  denom1: string;
  tickSpacing: number;
  spreadFactor: string;
}

const baseCreateConcentratedLiquidityPoolsProposal: object = {
  title: "",
  description: "",
};

export const CreateConcentratedLiquidityPoolsProposal = {
  encode(
    message: CreateConcentratedLiquidityPoolsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolRecords) {
      PoolRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateConcentratedLiquidityPoolsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateConcentratedLiquidityPoolsProposal,
    } as CreateConcentratedLiquidityPoolsProposal;
    message.poolRecords = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.poolRecords.push(PoolRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateConcentratedLiquidityPoolsProposal {
    const message = {
      ...baseCreateConcentratedLiquidityPoolsProposal,
    } as CreateConcentratedLiquidityPoolsProposal;
    message.poolRecords = [];
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.poolRecords !== undefined && object.poolRecords !== null) {
      for (const e of object.poolRecords) {
        message.poolRecords.push(PoolRecord.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: CreateConcentratedLiquidityPoolsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.poolRecords) {
      obj.poolRecords = message.poolRecords.map((e) =>
        e ? PoolRecord.toJSON(e) : undefined
      );
    } else {
      obj.poolRecords = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateConcentratedLiquidityPoolsProposal>
  ): CreateConcentratedLiquidityPoolsProposal {
    const message = {
      ...baseCreateConcentratedLiquidityPoolsProposal,
    } as CreateConcentratedLiquidityPoolsProposal;
    message.poolRecords = [];
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.poolRecords !== undefined && object.poolRecords !== null) {
      for (const e of object.poolRecords) {
        message.poolRecords.push(PoolRecord.fromPartial(e));
      }
    }
    return message;
  },
};

const baseTickSpacingDecreaseProposal: object = { title: "", description: "" };

export const TickSpacingDecreaseProposal = {
  encode(
    message: TickSpacingDecreaseProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolIdToTickSpacingRecords) {
      PoolIdToTickSpacingRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TickSpacingDecreaseProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTickSpacingDecreaseProposal,
    } as TickSpacingDecreaseProposal;
    message.poolIdToTickSpacingRecords = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.poolIdToTickSpacingRecords.push(
            PoolIdToTickSpacingRecord.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TickSpacingDecreaseProposal {
    const message = {
      ...baseTickSpacingDecreaseProposal,
    } as TickSpacingDecreaseProposal;
    message.poolIdToTickSpacingRecords = [];
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.poolIdToTickSpacingRecords !== undefined &&
      object.poolIdToTickSpacingRecords !== null
    ) {
      for (const e of object.poolIdToTickSpacingRecords) {
        message.poolIdToTickSpacingRecords.push(
          PoolIdToTickSpacingRecord.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: TickSpacingDecreaseProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.poolIdToTickSpacingRecords) {
      obj.poolIdToTickSpacingRecords = message.poolIdToTickSpacingRecords.map(
        (e) => (e ? PoolIdToTickSpacingRecord.toJSON(e) : undefined)
      );
    } else {
      obj.poolIdToTickSpacingRecords = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<TickSpacingDecreaseProposal>
  ): TickSpacingDecreaseProposal {
    const message = {
      ...baseTickSpacingDecreaseProposal,
    } as TickSpacingDecreaseProposal;
    message.poolIdToTickSpacingRecords = [];
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.poolIdToTickSpacingRecords !== undefined &&
      object.poolIdToTickSpacingRecords !== null
    ) {
      for (const e of object.poolIdToTickSpacingRecords) {
        message.poolIdToTickSpacingRecords.push(
          PoolIdToTickSpacingRecord.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const basePoolIdToTickSpacingRecord: object = { poolId: 0, newTickSpacing: 0 };

export const PoolIdToTickSpacingRecord = {
  encode(
    message: PoolIdToTickSpacingRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.newTickSpacing !== 0) {
      writer.uint32(16).uint64(message.newTickSpacing);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PoolIdToTickSpacingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePoolIdToTickSpacingRecord,
    } as PoolIdToTickSpacingRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.newTickSpacing = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolIdToTickSpacingRecord {
    const message = {
      ...basePoolIdToTickSpacingRecord,
    } as PoolIdToTickSpacingRecord;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Number(object.poolId);
    } else {
      message.poolId = 0;
    }
    if (object.newTickSpacing !== undefined && object.newTickSpacing !== null) {
      message.newTickSpacing = Number(object.newTickSpacing);
    } else {
      message.newTickSpacing = 0;
    }
    return message;
  },

  toJSON(message: PoolIdToTickSpacingRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.newTickSpacing !== undefined &&
      (obj.newTickSpacing = message.newTickSpacing);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PoolIdToTickSpacingRecord>
  ): PoolIdToTickSpacingRecord {
    const message = {
      ...basePoolIdToTickSpacingRecord,
    } as PoolIdToTickSpacingRecord;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    } else {
      message.poolId = 0;
    }
    if (object.newTickSpacing !== undefined && object.newTickSpacing !== null) {
      message.newTickSpacing = object.newTickSpacing;
    } else {
      message.newTickSpacing = 0;
    }
    return message;
  },
};

const basePoolRecord: object = {
  denom0: "",
  denom1: "",
  tickSpacing: 0,
  spreadFactor: "",
};

export const PoolRecord = {
  encode(
    message: PoolRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    if (message.tickSpacing !== 0) {
      writer.uint32(24).uint64(message.tickSpacing);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(42).string(message.spreadFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolRecord } as PoolRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        case 3:
          message.tickSpacing = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.spreadFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolRecord {
    const message = { ...basePoolRecord } as PoolRecord;
    if (object.denom0 !== undefined && object.denom0 !== null) {
      message.denom0 = String(object.denom0);
    } else {
      message.denom0 = "";
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = String(object.denom1);
    } else {
      message.denom1 = "";
    }
    if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
      message.tickSpacing = Number(object.tickSpacing);
    } else {
      message.tickSpacing = 0;
    }
    if (object.spreadFactor !== undefined && object.spreadFactor !== null) {
      message.spreadFactor = String(object.spreadFactor);
    } else {
      message.spreadFactor = "";
    }
    return message;
  },

  toJSON(message: PoolRecord): unknown {
    const obj: any = {};
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.tickSpacing !== undefined &&
      (obj.tickSpacing = message.tickSpacing);
    message.spreadFactor !== undefined &&
      (obj.spreadFactor = message.spreadFactor);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolRecord>): PoolRecord {
    const message = { ...basePoolRecord } as PoolRecord;
    if (object.denom0 !== undefined && object.denom0 !== null) {
      message.denom0 = object.denom0;
    } else {
      message.denom0 = "";
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = object.denom1;
    } else {
      message.denom1 = "";
    }
    if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
      message.tickSpacing = object.tickSpacing;
    } else {
      message.tickSpacing = 0;
    }
    if (object.spreadFactor !== undefined && object.spreadFactor !== null) {
      message.spreadFactor = object.spreadFactor;
    } else {
      message.spreadFactor = "";
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
