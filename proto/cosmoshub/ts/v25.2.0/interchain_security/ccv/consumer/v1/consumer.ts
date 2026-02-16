/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Any } from "../../../../google/protobuf/any";

export const protobufPackage = "interchain_security.ccv.consumer.v1";

/**
 * CrossChainValidator defines the type used to store validator information
 * internal to the consumer CCV module.  Note one cross chain validator entry is
 * persisted for each consumer validator, where incoming VSC packets update this
 * data, which is eventually forwarded to comet for consumer chain consensus.
 *
 * Note this type is only used internally to the consumer CCV module.
 */
export interface CrossChainValidator {
  address: Uint8Array;
  power: number;
  /** pubkey is the consensus public key of the validator, as a Protobuf Any. */
  pubkey: Any | undefined;
  /**
   * !!! DEPRECATED !!! opted_out is deprecated because after the introduction of Partial Set Security (PSS)
   * we removed the soft opt-out feature.
   *
   * @deprecated
   */
  optedOut: boolean;
}

/**
 * A record storing the state of a slash packet sent to the provider chain
 * which may bounce back and forth until handled by the provider.
 *
 * Note this type is only used internally to the consumer CCV module.
 */
export interface SlashRecord {
  waitingOnReply: boolean;
  sendTime: Date | undefined;
}

const baseCrossChainValidator: object = { power: 0, optedOut: false };

export const CrossChainValidator = {
  encode(
    message: CrossChainValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.power !== 0) {
      writer.uint32(16).int64(message.power);
    }
    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(26).fork()).ldelim();
    }
    if (message.optedOut === true) {
      writer.uint32(32).bool(message.optedOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCrossChainValidator } as CrossChainValidator;
    message.address = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.power = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.optedOut = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrossChainValidator {
    const message = { ...baseCrossChainValidator } as CrossChainValidator;
    message.address = new Uint8Array();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Number(object.power);
    } else {
      message.power = 0;
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = Any.fromJSON(object.pubkey);
    } else {
      message.pubkey = undefined;
    }
    if (object.optedOut !== undefined && object.optedOut !== null) {
      message.optedOut = Boolean(object.optedOut);
    } else {
      message.optedOut = false;
    }
    return message;
  },

  toJSON(message: CrossChainValidator): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(
        message.address !== undefined ? message.address : new Uint8Array()
      ));
    message.power !== undefined && (obj.power = message.power);
    message.pubkey !== undefined &&
      (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.optedOut !== undefined && (obj.optedOut = message.optedOut);
    return obj;
  },

  fromPartial(object: DeepPartial<CrossChainValidator>): CrossChainValidator {
    const message = { ...baseCrossChainValidator } as CrossChainValidator;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = new Uint8Array();
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    } else {
      message.power = 0;
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = Any.fromPartial(object.pubkey);
    } else {
      message.pubkey = undefined;
    }
    if (object.optedOut !== undefined && object.optedOut !== null) {
      message.optedOut = object.optedOut;
    } else {
      message.optedOut = false;
    }
    return message;
  },
};

const baseSlashRecord: object = { waitingOnReply: false };

export const SlashRecord = {
  encode(
    message: SlashRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.waitingOnReply === true) {
      writer.uint32(8).bool(message.waitingOnReply);
    }
    if (message.sendTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.sendTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlashRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSlashRecord } as SlashRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.waitingOnReply = reader.bool();
          break;
        case 2:
          message.sendTime = fromTimestamp(
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

  fromJSON(object: any): SlashRecord {
    const message = { ...baseSlashRecord } as SlashRecord;
    if (object.waitingOnReply !== undefined && object.waitingOnReply !== null) {
      message.waitingOnReply = Boolean(object.waitingOnReply);
    } else {
      message.waitingOnReply = false;
    }
    if (object.sendTime !== undefined && object.sendTime !== null) {
      message.sendTime = fromJsonTimestamp(object.sendTime);
    } else {
      message.sendTime = undefined;
    }
    return message;
  },

  toJSON(message: SlashRecord): unknown {
    const obj: any = {};
    message.waitingOnReply !== undefined &&
      (obj.waitingOnReply = message.waitingOnReply);
    message.sendTime !== undefined &&
      (obj.sendTime = message.sendTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<SlashRecord>): SlashRecord {
    const message = { ...baseSlashRecord } as SlashRecord;
    if (object.waitingOnReply !== undefined && object.waitingOnReply !== null) {
      message.waitingOnReply = object.waitingOnReply;
    } else {
      message.waitingOnReply = false;
    }
    if (object.sendTime !== undefined && object.sendTime !== null) {
      message.sendTime = object.sendTime;
    } else {
      message.sendTime = undefined;
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
