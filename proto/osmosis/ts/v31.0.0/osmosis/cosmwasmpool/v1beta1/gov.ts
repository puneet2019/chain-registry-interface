/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";

/**
 * UploadCosmWasmPoolCodeAndWhiteListProposal is a gov Content type for
 * uploading coswasm pool code and adding it to internal whitelist. Only the
 * code ids created by this message are eligible for being x/cosmwasmpool pools.
 */
export interface UploadCosmWasmPoolCodeAndWhiteListProposal {
  title: string;
  description: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
}

/**
 * MigratePoolContractsProposal is a gov Content type for
 * migrating  given pools to the new contract code and adding to internal
 * whitelist if needed. It has two options to perform the migration:
 *
 * 1. If the codeID is non-zero, it will migrate the pool contracts to a given
 * codeID assuming that it has already been uploaded. uploadByteCode must be
 * empty in such a case. Fails if codeID does not exist. Fails if uploadByteCode
 * is not empty.
 *
 * 2. If the codeID is zero, it will upload the given uploadByteCode and use the
 * new resulting code id to migrate the pool to. Errors if uploadByteCode is
 * empty or invalid.
 *
 * In both cases, if one of the pools specified by the given poolID does not
 * exist, the proposal fails.
 *
 * The reason for having poolIDs be a slice of ids is to account for the
 * potential need for emergency migration of all old code ids associated with
 * particular pools to new code ids, or simply having the flexibility of
 * migrating multiple older pool contracts to a new one at once when there is a
 * release.
 *
 * poolD count to be submitted at once is gated by a governance paramets (20 at
 * launch). The proposal fails if more. Note that 20 was chosen arbitrarily to
 * have a constant bound on the number of pools migrated at once. This size will
 * be configured by a module parameter so it can be changed by a constant.
 */
export interface MigratePoolContractsProposal {
  title: string;
  description: string;
  /**
   * pool_ids are the pool ids of the contracts to be migrated
   * either to the new_code_id that is already uploaded to chain or to
   * the given wasm_byte_code.
   */
  poolIds: number[];
  /**
   * new_code_id is the code id of the contract code to migrate to.
   * Assumes that the code is already uploaded to chain. Only one of
   * new_code_id and wasm_byte_code should be set.
   */
  newCodeId: number;
  /**
   * WASMByteCode can be raw or gzip compressed. Assumes that the code id
   * has not been uploaded yet so uploads the given code and migrates to it.
   * Only one of new_code_id and wasm_byte_code should be set.
   */
  wasmByteCode: Uint8Array;
  /** MigrateMsg migrate message to be used for migrating the pool contracts. */
  migrateMsg: Uint8Array;
}

const baseUploadCosmWasmPoolCodeAndWhiteListProposal: object = {
  title: "",
  description: "",
};

export const UploadCosmWasmPoolCodeAndWhiteListProposal = {
  encode(
    message: UploadCosmWasmPoolCodeAndWhiteListProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(26).bytes(message.wasmByteCode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UploadCosmWasmPoolCodeAndWhiteListProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUploadCosmWasmPoolCodeAndWhiteListProposal,
    } as UploadCosmWasmPoolCodeAndWhiteListProposal;
    message.wasmByteCode = new Uint8Array();
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
          message.wasmByteCode = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UploadCosmWasmPoolCodeAndWhiteListProposal {
    const message = {
      ...baseUploadCosmWasmPoolCodeAndWhiteListProposal,
    } as UploadCosmWasmPoolCodeAndWhiteListProposal;
    message.wasmByteCode = new Uint8Array();
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
    if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
      message.wasmByteCode = bytesFromBase64(object.wasmByteCode);
    }
    return message;
  },

  toJSON(message: UploadCosmWasmPoolCodeAndWhiteListProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined
          ? message.wasmByteCode
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<UploadCosmWasmPoolCodeAndWhiteListProposal>
  ): UploadCosmWasmPoolCodeAndWhiteListProposal {
    const message = {
      ...baseUploadCosmWasmPoolCodeAndWhiteListProposal,
    } as UploadCosmWasmPoolCodeAndWhiteListProposal;
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
    if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
      message.wasmByteCode = object.wasmByteCode;
    } else {
      message.wasmByteCode = new Uint8Array();
    }
    return message;
  },
};

const baseMigratePoolContractsProposal: object = {
  title: "",
  description: "",
  poolIds: 0,
  newCodeId: 0,
};

export const MigratePoolContractsProposal = {
  encode(
    message: MigratePoolContractsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.newCodeId !== 0) {
      writer.uint32(32).uint64(message.newCodeId);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(42).bytes(message.wasmByteCode);
    }
    if (message.migrateMsg.length !== 0) {
      writer.uint32(50).bytes(message.migrateMsg);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MigratePoolContractsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMigratePoolContractsProposal,
    } as MigratePoolContractsProposal;
    message.poolIds = [];
    message.wasmByteCode = new Uint8Array();
    message.migrateMsg = new Uint8Array();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.poolIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 4:
          message.newCodeId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.wasmByteCode = reader.bytes();
          break;
        case 6:
          message.migrateMsg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MigratePoolContractsProposal {
    const message = {
      ...baseMigratePoolContractsProposal,
    } as MigratePoolContractsProposal;
    message.poolIds = [];
    message.wasmByteCode = new Uint8Array();
    message.migrateMsg = new Uint8Array();
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
    if (object.poolIds !== undefined && object.poolIds !== null) {
      for (const e of object.poolIds) {
        message.poolIds.push(Number(e));
      }
    }
    if (object.newCodeId !== undefined && object.newCodeId !== null) {
      message.newCodeId = Number(object.newCodeId);
    } else {
      message.newCodeId = 0;
    }
    if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
      message.wasmByteCode = bytesFromBase64(object.wasmByteCode);
    }
    if (object.migrateMsg !== undefined && object.migrateMsg !== null) {
      message.migrateMsg = bytesFromBase64(object.migrateMsg);
    }
    return message;
  },

  toJSON(message: MigratePoolContractsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map((e) => e);
    } else {
      obj.poolIds = [];
    }
    message.newCodeId !== undefined && (obj.newCodeId = message.newCodeId);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined
          ? message.wasmByteCode
          : new Uint8Array()
      ));
    message.migrateMsg !== undefined &&
      (obj.migrateMsg = base64FromBytes(
        message.migrateMsg !== undefined ? message.migrateMsg : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MigratePoolContractsProposal>
  ): MigratePoolContractsProposal {
    const message = {
      ...baseMigratePoolContractsProposal,
    } as MigratePoolContractsProposal;
    message.poolIds = [];
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
    if (object.poolIds !== undefined && object.poolIds !== null) {
      for (const e of object.poolIds) {
        message.poolIds.push(e);
      }
    }
    if (object.newCodeId !== undefined && object.newCodeId !== null) {
      message.newCodeId = object.newCodeId;
    } else {
      message.newCodeId = 0;
    }
    if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
      message.wasmByteCode = object.wasmByteCode;
    } else {
      message.wasmByteCode = new Uint8Array();
    }
    if (object.migrateMsg !== undefined && object.migrateMsg !== null) {
      message.migrateMsg = object.migrateMsg;
    } else {
      message.migrateMsg = new Uint8Array();
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
