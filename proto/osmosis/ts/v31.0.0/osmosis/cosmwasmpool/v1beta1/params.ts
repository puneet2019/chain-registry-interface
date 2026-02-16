/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";

export interface Params {
  /**
   * code_ide_whitelist contains the list of code ids that are allowed to be
   * instantiated.
   */
  codeIdWhitelist: number[];
  /**
   * pool_migration_limit is the maximum number of pools that can be migrated
   * at once via governance proposal. This is to have a constant bound on the
   * number of pools that can be migrated at once and remove the possibility
   * of an unlikely scenario of causing a chain halt due to a large migration.
   */
  poolMigrationLimit: number;
}

const baseParams: object = { codeIdWhitelist: 0, poolMigrationLimit: 0 };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.codeIdWhitelist) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.poolMigrationLimit !== 0) {
      writer.uint32(16).uint64(message.poolMigrationLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.codeIdWhitelist = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIdWhitelist.push(
                longToNumber(reader.uint64() as Long)
              );
            }
          } else {
            message.codeIdWhitelist.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 2:
          message.poolMigrationLimit = longToNumber(reader.uint64() as Long);
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
    message.codeIdWhitelist = [];
    if (
      object.codeIdWhitelist !== undefined &&
      object.codeIdWhitelist !== null
    ) {
      for (const e of object.codeIdWhitelist) {
        message.codeIdWhitelist.push(Number(e));
      }
    }
    if (
      object.poolMigrationLimit !== undefined &&
      object.poolMigrationLimit !== null
    ) {
      message.poolMigrationLimit = Number(object.poolMigrationLimit);
    } else {
      message.poolMigrationLimit = 0;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.codeIdWhitelist) {
      obj.codeIdWhitelist = message.codeIdWhitelist.map((e) => e);
    } else {
      obj.codeIdWhitelist = [];
    }
    message.poolMigrationLimit !== undefined &&
      (obj.poolMigrationLimit = message.poolMigrationLimit);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.codeIdWhitelist = [];
    if (
      object.codeIdWhitelist !== undefined &&
      object.codeIdWhitelist !== null
    ) {
      for (const e of object.codeIdWhitelist) {
        message.codeIdWhitelist.push(e);
      }
    }
    if (
      object.poolMigrationLimit !== undefined &&
      object.poolMigrationLimit !== null
    ) {
      message.poolMigrationLimit = object.poolMigrationLimit;
    } else {
      message.poolMigrationLimit = 0;
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
