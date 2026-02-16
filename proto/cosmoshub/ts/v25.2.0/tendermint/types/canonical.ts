/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  SignedMsgType,
  signedMsgTypeFromJSON,
  signedMsgTypeToJSON,
} from "../../tendermint/types/types";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "tendermint.types";

export interface CanonicalBlockID {
  hash: Uint8Array;
  partSetHeader: CanonicalPartSetHeader | undefined;
}

export interface CanonicalPartSetHeader {
  total: number;
  hash: Uint8Array;
}

export interface CanonicalProposal {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: number;
  /** canonicalization requires fixed size encoding here */
  round: number;
  polRound: number;
  blockId: CanonicalBlockID | undefined;
  timestamp: Date | undefined;
  chainId: string;
}

export interface CanonicalVote {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: number;
  /** canonicalization requires fixed size encoding here */
  round: number;
  blockId: CanonicalBlockID | undefined;
  timestamp: Date | undefined;
  chainId: string;
}

/**
 * CanonicalVoteExtension provides us a way to serialize a vote extension from
 * a particular validator such that we can sign over those serialized bytes.
 */
export interface CanonicalVoteExtension {
  extension: Uint8Array;
  height: number;
  round: number;
  chainId: string;
}

const baseCanonicalBlockID: object = {};

export const CanonicalBlockID = {
  encode(
    message: CanonicalBlockID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.partSetHeader !== undefined) {
      CanonicalPartSetHeader.encode(
        message.partSetHeader,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalBlockID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCanonicalBlockID } as CanonicalBlockID;
    message.hash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.partSetHeader = CanonicalPartSetHeader.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CanonicalBlockID {
    const message = { ...baseCanonicalBlockID } as CanonicalBlockID;
    message.hash = new Uint8Array();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.partSetHeader !== undefined && object.partSetHeader !== null) {
      message.partSetHeader = CanonicalPartSetHeader.fromJSON(
        object.partSetHeader
      );
    } else {
      message.partSetHeader = undefined;
    }
    return message;
  },

  toJSON(message: CanonicalBlockID): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.partSetHeader !== undefined &&
      (obj.partSetHeader = message.partSetHeader
        ? CanonicalPartSetHeader.toJSON(message.partSetHeader)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CanonicalBlockID>): CanonicalBlockID {
    const message = { ...baseCanonicalBlockID } as CanonicalBlockID;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = new Uint8Array();
    }
    if (object.partSetHeader !== undefined && object.partSetHeader !== null) {
      message.partSetHeader = CanonicalPartSetHeader.fromPartial(
        object.partSetHeader
      );
    } else {
      message.partSetHeader = undefined;
    }
    return message;
  },
};

const baseCanonicalPartSetHeader: object = { total: 0 };

export const CanonicalPartSetHeader = {
  encode(
    message: CanonicalPartSetHeader,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CanonicalPartSetHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCanonicalPartSetHeader } as CanonicalPartSetHeader;
    message.hash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CanonicalPartSetHeader {
    const message = { ...baseCanonicalPartSetHeader } as CanonicalPartSetHeader;
    message.hash = new Uint8Array();
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },

  toJSON(message: CanonicalPartSetHeader): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<CanonicalPartSetHeader>
  ): CanonicalPartSetHeader {
    const message = { ...baseCanonicalPartSetHeader } as CanonicalPartSetHeader;
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = new Uint8Array();
    }
    return message;
  },
};

const baseCanonicalProposal: object = {
  type: 0,
  height: 0,
  round: 0,
  polRound: 0,
  chainId: "",
};

export const CanonicalProposal = {
  encode(
    message: CanonicalProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== 0) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(25).sfixed64(message.round);
    }
    if (message.polRound !== 0) {
      writer.uint32(32).int64(message.polRound);
    }
    if (message.blockId !== undefined) {
      CanonicalBlockID.encode(
        message.blockId,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(58).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCanonicalProposal } as CanonicalProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.height = longToNumber(reader.sfixed64() as Long);
          break;
        case 3:
          message.round = longToNumber(reader.sfixed64() as Long);
          break;
        case 4:
          message.polRound = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.blockId = CanonicalBlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CanonicalProposal {
    const message = { ...baseCanonicalProposal } as CanonicalProposal;
    if (object.type !== undefined && object.type !== null) {
      message.type = signedMsgTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }
    if (object.polRound !== undefined && object.polRound !== null) {
      message.polRound = Number(object.polRound);
    } else {
      message.polRound = 0;
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = CanonicalBlockID.fromJSON(object.blockId);
    } else {
      message.blockId = undefined;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    return message;
  },

  toJSON(message: CanonicalProposal): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.polRound !== undefined && (obj.polRound = message.polRound);
    message.blockId !== undefined &&
      (obj.blockId = message.blockId
        ? CanonicalBlockID.toJSON(message.blockId)
        : undefined);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<CanonicalProposal>): CanonicalProposal {
    const message = { ...baseCanonicalProposal } as CanonicalProposal;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }
    if (object.polRound !== undefined && object.polRound !== null) {
      message.polRound = object.polRound;
    } else {
      message.polRound = 0;
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = CanonicalBlockID.fromPartial(object.blockId);
    } else {
      message.blockId = undefined;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    return message;
  },
};

const baseCanonicalVote: object = { type: 0, height: 0, round: 0, chainId: "" };

export const CanonicalVote = {
  encode(
    message: CanonicalVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== 0) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(25).sfixed64(message.round);
    }
    if (message.blockId !== undefined) {
      CanonicalBlockID.encode(
        message.blockId,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(50).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCanonicalVote } as CanonicalVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.height = longToNumber(reader.sfixed64() as Long);
          break;
        case 3:
          message.round = longToNumber(reader.sfixed64() as Long);
          break;
        case 4:
          message.blockId = CanonicalBlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CanonicalVote {
    const message = { ...baseCanonicalVote } as CanonicalVote;
    if (object.type !== undefined && object.type !== null) {
      message.type = signedMsgTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = CanonicalBlockID.fromJSON(object.blockId);
    } else {
      message.blockId = undefined;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    return message;
  },

  toJSON(message: CanonicalVote): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.blockId !== undefined &&
      (obj.blockId = message.blockId
        ? CanonicalBlockID.toJSON(message.blockId)
        : undefined);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<CanonicalVote>): CanonicalVote {
    const message = { ...baseCanonicalVote } as CanonicalVote;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = CanonicalBlockID.fromPartial(object.blockId);
    } else {
      message.blockId = undefined;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    return message;
  },
};

const baseCanonicalVoteExtension: object = { height: 0, round: 0, chainId: "" };

export const CanonicalVoteExtension = {
  encode(
    message: CanonicalVoteExtension,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.extension.length !== 0) {
      writer.uint32(10).bytes(message.extension);
    }
    if (message.height !== 0) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(25).sfixed64(message.round);
    }
    if (message.chainId !== "") {
      writer.uint32(34).string(message.chainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CanonicalVoteExtension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCanonicalVoteExtension } as CanonicalVoteExtension;
    message.extension = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extension = reader.bytes();
          break;
        case 2:
          message.height = longToNumber(reader.sfixed64() as Long);
          break;
        case 3:
          message.round = longToNumber(reader.sfixed64() as Long);
          break;
        case 4:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CanonicalVoteExtension {
    const message = { ...baseCanonicalVoteExtension } as CanonicalVoteExtension;
    message.extension = new Uint8Array();
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = bytesFromBase64(object.extension);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    return message;
  },

  toJSON(message: CanonicalVoteExtension): unknown {
    const obj: any = {};
    message.extension !== undefined &&
      (obj.extension = base64FromBytes(
        message.extension !== undefined ? message.extension : new Uint8Array()
      ));
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CanonicalVoteExtension>
  ): CanonicalVoteExtension {
    const message = { ...baseCanonicalVoteExtension } as CanonicalVoteExtension;
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = object.extension;
    } else {
      message.extension = new Uint8Array();
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
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
