/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ethereum.eth.dbval";

/**
 * BackfillStatus is a value used to keep track of the progress of the process
 * of backfilling blocks leading up to the origin block used to checkpoint sync
 * a node. There is only one BackfillStatus value in the database.
 */
export interface BackfillStatus {
  /**
   * low_slot is the slot of the last block that backfill will attempt to
   * download and import. This is determined by MIN_EPOCHS_FOR_BLOCK_REQUESTS,
   * or by a user-specified override.
   */
  lowSlot: number;
  /**
   * low_root is the root of the last block that backfill will attempt to
   * download and import.
   */
  lowRoot: Uint8Array;
  /**
   * low_parent_root is the parent_root of the block at low_root. This enables
   * the backfill service to check that a block is the direct ancestor of the
   * block for low_root without an additional db lookup.
   */
  lowParentRoot: Uint8Array;
  /**
   * origin_slot is the slot of the origin block, which is the block used to
   * initiate a checkpoint sync. Backfill uses the origin block as the reference
   * point to determine canonical ancestors.
   */
  originSlot: number;
  /** origin_root is the root of the origin block. */
  originRoot: Uint8Array;
}

const baseBackfillStatus: object = { lowSlot: 0, originSlot: 0 };

export const BackfillStatus = {
  encode(
    message: BackfillStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lowSlot !== 0) {
      writer.uint32(8).uint64(message.lowSlot);
    }
    if (message.lowRoot.length !== 0) {
      writer.uint32(18).bytes(message.lowRoot);
    }
    if (message.lowParentRoot.length !== 0) {
      writer.uint32(26).bytes(message.lowParentRoot);
    }
    if (message.originSlot !== 0) {
      writer.uint32(32).uint64(message.originSlot);
    }
    if (message.originRoot.length !== 0) {
      writer.uint32(50).bytes(message.originRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackfillStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackfillStatus } as BackfillStatus;
    message.lowRoot = new Uint8Array();
    message.lowParentRoot = new Uint8Array();
    message.originRoot = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lowSlot = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.lowRoot = reader.bytes();
          break;
        case 3:
          message.lowParentRoot = reader.bytes();
          break;
        case 4:
          message.originSlot = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.originRoot = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BackfillStatus {
    const message = { ...baseBackfillStatus } as BackfillStatus;
    message.lowRoot = new Uint8Array();
    message.lowParentRoot = new Uint8Array();
    message.originRoot = new Uint8Array();
    if (object.lowSlot !== undefined && object.lowSlot !== null) {
      message.lowSlot = Number(object.lowSlot);
    } else {
      message.lowSlot = 0;
    }
    if (object.lowRoot !== undefined && object.lowRoot !== null) {
      message.lowRoot = bytesFromBase64(object.lowRoot);
    }
    if (object.lowParentRoot !== undefined && object.lowParentRoot !== null) {
      message.lowParentRoot = bytesFromBase64(object.lowParentRoot);
    }
    if (object.originSlot !== undefined && object.originSlot !== null) {
      message.originSlot = Number(object.originSlot);
    } else {
      message.originSlot = 0;
    }
    if (object.originRoot !== undefined && object.originRoot !== null) {
      message.originRoot = bytesFromBase64(object.originRoot);
    }
    return message;
  },

  toJSON(message: BackfillStatus): unknown {
    const obj: any = {};
    message.lowSlot !== undefined && (obj.lowSlot = message.lowSlot);
    message.lowRoot !== undefined &&
      (obj.lowRoot = base64FromBytes(
        message.lowRoot !== undefined ? message.lowRoot : new Uint8Array()
      ));
    message.lowParentRoot !== undefined &&
      (obj.lowParentRoot = base64FromBytes(
        message.lowParentRoot !== undefined
          ? message.lowParentRoot
          : new Uint8Array()
      ));
    message.originSlot !== undefined && (obj.originSlot = message.originSlot);
    message.originRoot !== undefined &&
      (obj.originRoot = base64FromBytes(
        message.originRoot !== undefined ? message.originRoot : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<BackfillStatus>): BackfillStatus {
    const message = { ...baseBackfillStatus } as BackfillStatus;
    if (object.lowSlot !== undefined && object.lowSlot !== null) {
      message.lowSlot = object.lowSlot;
    } else {
      message.lowSlot = 0;
    }
    if (object.lowRoot !== undefined && object.lowRoot !== null) {
      message.lowRoot = object.lowRoot;
    } else {
      message.lowRoot = new Uint8Array();
    }
    if (object.lowParentRoot !== undefined && object.lowParentRoot !== null) {
      message.lowParentRoot = object.lowParentRoot;
    } else {
      message.lowParentRoot = new Uint8Array();
    }
    if (object.originSlot !== undefined && object.originSlot !== null) {
      message.originSlot = object.originSlot;
    } else {
      message.originSlot = 0;
    }
    if (object.originRoot !== undefined && object.originRoot !== null) {
      message.originRoot = object.originRoot;
    } else {
      message.originRoot = new Uint8Array();
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
