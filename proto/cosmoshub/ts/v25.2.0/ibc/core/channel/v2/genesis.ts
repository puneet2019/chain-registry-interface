/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ibc.core.channel.v2";

/** GenesisState defines the ibc channel/v2 submodule's genesis state. */
export interface GenesisState {
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  asyncPackets: PacketState[];
  sendSequences: PacketSequence[];
}

/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketState {
  /** client unique identifier. */
  clientId: string;
  /** packet sequence. */
  sequence: number;
  /** embedded data that represents packet state. */
  data: Uint8Array;
}

/** PacketSequence defines the genesis type necessary to retrieve and store next send sequences. */
export interface PacketSequence {
  /** client unique identifier. */
  clientId: string;
  /** packet sequence */
  sequence: number;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.asyncPackets) {
      PacketState.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.sendSequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.acknowledgements = [];
    message.commitments = [];
    message.receipts = [];
    message.asyncPackets = [];
    message.sendSequences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.acknowledgements.push(
            PacketState.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.asyncPackets.push(
            PacketState.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.sendSequences.push(
            PacketSequence.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.acknowledgements = [];
    message.commitments = [];
    message.receipts = [];
    message.asyncPackets = [];
    message.sendSequences = [];
    if (
      object.acknowledgements !== undefined &&
      object.acknowledgements !== null
    ) {
      for (const e of object.acknowledgements) {
        message.acknowledgements.push(PacketState.fromJSON(e));
      }
    }
    if (object.commitments !== undefined && object.commitments !== null) {
      for (const e of object.commitments) {
        message.commitments.push(PacketState.fromJSON(e));
      }
    }
    if (object.receipts !== undefined && object.receipts !== null) {
      for (const e of object.receipts) {
        message.receipts.push(PacketState.fromJSON(e));
      }
    }
    if (object.asyncPackets !== undefined && object.asyncPackets !== null) {
      for (const e of object.asyncPackets) {
        message.asyncPackets.push(PacketState.fromJSON(e));
      }
    }
    if (object.sendSequences !== undefined && object.sendSequences !== null) {
      for (const e of object.sendSequences) {
        message.sendSequences.push(PacketSequence.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map((e) =>
        e ? PacketState.toJSON(e) : undefined
      );
    } else {
      obj.acknowledgements = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) =>
        e ? PacketState.toJSON(e) : undefined
      );
    } else {
      obj.commitments = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map((e) =>
        e ? PacketState.toJSON(e) : undefined
      );
    } else {
      obj.receipts = [];
    }
    if (message.asyncPackets) {
      obj.asyncPackets = message.asyncPackets.map((e) =>
        e ? PacketState.toJSON(e) : undefined
      );
    } else {
      obj.asyncPackets = [];
    }
    if (message.sendSequences) {
      obj.sendSequences = message.sendSequences.map((e) =>
        e ? PacketSequence.toJSON(e) : undefined
      );
    } else {
      obj.sendSequences = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.acknowledgements = [];
    message.commitments = [];
    message.receipts = [];
    message.asyncPackets = [];
    message.sendSequences = [];
    if (
      object.acknowledgements !== undefined &&
      object.acknowledgements !== null
    ) {
      for (const e of object.acknowledgements) {
        message.acknowledgements.push(PacketState.fromPartial(e));
      }
    }
    if (object.commitments !== undefined && object.commitments !== null) {
      for (const e of object.commitments) {
        message.commitments.push(PacketState.fromPartial(e));
      }
    }
    if (object.receipts !== undefined && object.receipts !== null) {
      for (const e of object.receipts) {
        message.receipts.push(PacketState.fromPartial(e));
      }
    }
    if (object.asyncPackets !== undefined && object.asyncPackets !== null) {
      for (const e of object.asyncPackets) {
        message.asyncPackets.push(PacketState.fromPartial(e));
      }
    }
    if (object.sendSequences !== undefined && object.sendSequences !== null) {
      for (const e of object.sendSequences) {
        message.sendSequences.push(PacketSequence.fromPartial(e));
      }
    }
    return message;
  },
};

const basePacketState: object = { clientId: "", sequence: 0 };

export const PacketState = {
  encode(
    message: PacketState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== 0) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacketState } as PacketState;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PacketState {
    const message = { ...basePacketState } as PacketState;
    message.data = new Uint8Array();
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Number(object.sequence);
    } else {
      message.sequence = 0;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: PacketState): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<PacketState>): PacketState {
    const message = { ...basePacketState } as PacketState;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = 0;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const basePacketSequence: object = { clientId: "", sequence: 0 };

export const PacketSequence = {
  encode(
    message: PacketSequence,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== 0) {
      writer.uint32(16).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacketSequence } as PacketSequence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PacketSequence {
    const message = { ...basePacketSequence } as PacketSequence;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Number(object.sequence);
    } else {
      message.sequence = 0;
    }
    return message;
  },

  toJSON(message: PacketSequence): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    return obj;
  },

  fromPartial(object: DeepPartial<PacketSequence>): PacketSequence {
    const message = { ...basePacketSequence } as PacketSequence;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = 0;
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
