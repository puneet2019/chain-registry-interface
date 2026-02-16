/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.poolincentives.v1beta1";

/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools.
 *
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface MigrationRecords {
  balancerToConcentratedPoolLinks: BalancerToConcentratedPoolLink[];
}

/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 *
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface BalancerToConcentratedPoolLink {
  balancerPoolId: number;
  clPoolId: number;
}

const baseMigrationRecords: object = {};

export const MigrationRecords = {
  encode(
    message: MigrationRecords,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.balancerToConcentratedPoolLinks) {
      BalancerToConcentratedPoolLink.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrationRecords {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMigrationRecords } as MigrationRecords;
    message.balancerToConcentratedPoolLinks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balancerToConcentratedPoolLinks.push(
            BalancerToConcentratedPoolLink.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MigrationRecords {
    const message = { ...baseMigrationRecords } as MigrationRecords;
    message.balancerToConcentratedPoolLinks = [];
    if (
      object.balancerToConcentratedPoolLinks !== undefined &&
      object.balancerToConcentratedPoolLinks !== null
    ) {
      for (const e of object.balancerToConcentratedPoolLinks) {
        message.balancerToConcentratedPoolLinks.push(
          BalancerToConcentratedPoolLink.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: MigrationRecords): unknown {
    const obj: any = {};
    if (message.balancerToConcentratedPoolLinks) {
      obj.balancerToConcentratedPoolLinks = message.balancerToConcentratedPoolLinks.map(
        (e) => (e ? BalancerToConcentratedPoolLink.toJSON(e) : undefined)
      );
    } else {
      obj.balancerToConcentratedPoolLinks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MigrationRecords>): MigrationRecords {
    const message = { ...baseMigrationRecords } as MigrationRecords;
    message.balancerToConcentratedPoolLinks = [];
    if (
      object.balancerToConcentratedPoolLinks !== undefined &&
      object.balancerToConcentratedPoolLinks !== null
    ) {
      for (const e of object.balancerToConcentratedPoolLinks) {
        message.balancerToConcentratedPoolLinks.push(
          BalancerToConcentratedPoolLink.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseBalancerToConcentratedPoolLink: object = {
  balancerPoolId: 0,
  clPoolId: 0,
};

export const BalancerToConcentratedPoolLink = {
  encode(
    message: BalancerToConcentratedPoolLink,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.balancerPoolId !== 0) {
      writer.uint32(8).uint64(message.balancerPoolId);
    }
    if (message.clPoolId !== 0) {
      writer.uint32(16).uint64(message.clPoolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BalancerToConcentratedPoolLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBalancerToConcentratedPoolLink,
    } as BalancerToConcentratedPoolLink;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balancerPoolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.clPoolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BalancerToConcentratedPoolLink {
    const message = {
      ...baseBalancerToConcentratedPoolLink,
    } as BalancerToConcentratedPoolLink;
    if (object.balancerPoolId !== undefined && object.balancerPoolId !== null) {
      message.balancerPoolId = Number(object.balancerPoolId);
    } else {
      message.balancerPoolId = 0;
    }
    if (object.clPoolId !== undefined && object.clPoolId !== null) {
      message.clPoolId = Number(object.clPoolId);
    } else {
      message.clPoolId = 0;
    }
    return message;
  },

  toJSON(message: BalancerToConcentratedPoolLink): unknown {
    const obj: any = {};
    message.balancerPoolId !== undefined &&
      (obj.balancerPoolId = message.balancerPoolId);
    message.clPoolId !== undefined && (obj.clPoolId = message.clPoolId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BalancerToConcentratedPoolLink>
  ): BalancerToConcentratedPoolLink {
    const message = {
      ...baseBalancerToConcentratedPoolLink,
    } as BalancerToConcentratedPoolLink;
    if (object.balancerPoolId !== undefined && object.balancerPoolId !== null) {
      message.balancerPoolId = object.balancerPoolId;
    } else {
      message.balancerPoolId = 0;
    }
    if (object.clPoolId !== undefined && object.clPoolId !== null) {
      message.clPoolId = object.clPoolId;
    } else {
      message.clPoolId = 0;
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
