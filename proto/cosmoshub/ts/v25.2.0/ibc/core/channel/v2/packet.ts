/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ibc.core.channel.v2";

/** PacketStatus specifies the status of a RecvPacketResult. */
export enum PacketStatus {
  /** PACKET_STATUS_UNSPECIFIED - PACKET_STATUS_UNSPECIFIED indicates an unknown packet status. */
  PACKET_STATUS_UNSPECIFIED = 0,
  /** PACKET_STATUS_SUCCESS - PACKET_STATUS_SUCCESS indicates a successful packet receipt. */
  PACKET_STATUS_SUCCESS = 1,
  /** PACKET_STATUS_FAILURE - PACKET_STATUS_FAILURE indicates a failed packet receipt. */
  PACKET_STATUS_FAILURE = 2,
  /** PACKET_STATUS_ASYNC - PACKET_STATUS_ASYNC indicates an async packet receipt. */
  PACKET_STATUS_ASYNC = 3,
  UNRECOGNIZED = -1,
}

export function packetStatusFromJSON(object: any): PacketStatus {
  switch (object) {
    case 0:
    case "PACKET_STATUS_UNSPECIFIED":
      return PacketStatus.PACKET_STATUS_UNSPECIFIED;
    case 1:
    case "PACKET_STATUS_SUCCESS":
      return PacketStatus.PACKET_STATUS_SUCCESS;
    case 2:
    case "PACKET_STATUS_FAILURE":
      return PacketStatus.PACKET_STATUS_FAILURE;
    case 3:
    case "PACKET_STATUS_ASYNC":
      return PacketStatus.PACKET_STATUS_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PacketStatus.UNRECOGNIZED;
  }
}

export function packetStatusToJSON(object: PacketStatus): string {
  switch (object) {
    case PacketStatus.PACKET_STATUS_UNSPECIFIED:
      return "PACKET_STATUS_UNSPECIFIED";
    case PacketStatus.PACKET_STATUS_SUCCESS:
      return "PACKET_STATUS_SUCCESS";
    case PacketStatus.PACKET_STATUS_FAILURE:
      return "PACKET_STATUS_FAILURE";
    case PacketStatus.PACKET_STATUS_ASYNC:
      return "PACKET_STATUS_ASYNC";
    default:
      return "UNKNOWN";
  }
}

/** Packet defines a type that carries data across different chains through IBC */
export interface Packet {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence: number;
  /** identifies the sending client on the sending chain. */
  sourceClient: string;
  /** identifies the receiving client on the receiving chain. */
  destinationClient: string;
  /** timeout timestamp in seconds after which the packet times out. */
  timeoutTimestamp: number;
  /** a list of payloads, each one for a specific application. */
  payloads: Payload[];
}

/** Payload contains the source and destination ports and payload for the application (version, encoding, raw bytes) */
export interface Payload {
  /** specifies the source port of the packet. */
  sourcePort: string;
  /** specifies the destination port of the packet. */
  destinationPort: string;
  /** version of the specified application. */
  version: string;
  /** the encoding used for the provided value. */
  encoding: string;
  /** the raw bytes for the payload. */
  value: Uint8Array;
}

/**
 * Acknowledgement contains a list of all ack results associated with a single packet.
 * In the case of a successful receive, the acknowledgement will contain an app acknowledgement
 * for each application that received a payload in the same order that the payloads were sent
 * in the packet.
 * If the receive is not successful, the acknowledgement will contain a single app acknowledgment
 * which will be a constant error acknowledgment as defined by the IBC v2 protocol.
 */
export interface Acknowledgement {
  appAcknowledgements: Uint8Array[];
}

/** RecvPacketResult speecifies the status of a packet as well as the acknowledgement bytes. */
export interface RecvPacketResult {
  /** status of the packet */
  status: PacketStatus;
  /** acknowledgement of the packet */
  acknowledgement: Uint8Array;
}

const basePacket: object = {
  sequence: 0,
  sourceClient: "",
  destinationClient: "",
  timeoutTimestamp: 0,
};

export const Packet = {
  encode(
    message: Packet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.sourceClient !== "") {
      writer.uint32(18).string(message.sourceClient);
    }
    if (message.destinationClient !== "") {
      writer.uint32(26).string(message.destinationClient);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    for (const v of message.payloads) {
      Payload.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacket } as Packet;
    message.payloads = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sourceClient = reader.string();
          break;
        case 3:
          message.destinationClient = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.payloads.push(Payload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet {
    const message = { ...basePacket } as Packet;
    message.payloads = [];
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Number(object.sequence);
    } else {
      message.sequence = 0;
    }
    if (object.sourceClient !== undefined && object.sourceClient !== null) {
      message.sourceClient = String(object.sourceClient);
    } else {
      message.sourceClient = "";
    }
    if (
      object.destinationClient !== undefined &&
      object.destinationClient !== null
    ) {
      message.destinationClient = String(object.destinationClient);
    } else {
      message.destinationClient = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.payloads !== undefined && object.payloads !== null) {
      for (const e of object.payloads) {
        message.payloads.push(Payload.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Packet): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.sourceClient !== undefined &&
      (obj.sourceClient = message.sourceClient);
    message.destinationClient !== undefined &&
      (obj.destinationClient = message.destinationClient);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    if (message.payloads) {
      obj.payloads = message.payloads.map((e) =>
        e ? Payload.toJSON(e) : undefined
      );
    } else {
      obj.payloads = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Packet>): Packet {
    const message = { ...basePacket } as Packet;
    message.payloads = [];
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = 0;
    }
    if (object.sourceClient !== undefined && object.sourceClient !== null) {
      message.sourceClient = object.sourceClient;
    } else {
      message.sourceClient = "";
    }
    if (
      object.destinationClient !== undefined &&
      object.destinationClient !== null
    ) {
      message.destinationClient = object.destinationClient;
    } else {
      message.destinationClient = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.payloads !== undefined && object.payloads !== null) {
      for (const e of object.payloads) {
        message.payloads.push(Payload.fromPartial(e));
      }
    }
    return message;
  },
};

const basePayload: object = {
  sourcePort: "",
  destinationPort: "",
  version: "",
  encoding: "",
};

export const Payload = {
  encode(
    message: Payload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.destinationPort !== "") {
      writer.uint32(18).string(message.destinationPort);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    if (message.value.length !== 0) {
      writer.uint32(42).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePayload } as Payload;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.destinationPort = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.encoding = reader.string();
          break;
        case 5:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Payload {
    const message = { ...basePayload } as Payload;
    message.value = new Uint8Array();
    if (object.sourcePort !== undefined && object.sourcePort !== null) {
      message.sourcePort = String(object.sourcePort);
    } else {
      message.sourcePort = "";
    }
    if (
      object.destinationPort !== undefined &&
      object.destinationPort !== null
    ) {
      message.destinationPort = String(object.destinationPort);
    } else {
      message.destinationPort = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = String(object.encoding);
    } else {
      message.encoding = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: Payload): unknown {
    const obj: any = {};
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.destinationPort !== undefined &&
      (obj.destinationPort = message.destinationPort);
    message.version !== undefined && (obj.version = message.version);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Payload>): Payload {
    const message = { ...basePayload } as Payload;
    if (object.sourcePort !== undefined && object.sourcePort !== null) {
      message.sourcePort = object.sourcePort;
    } else {
      message.sourcePort = "";
    }
    if (
      object.destinationPort !== undefined &&
      object.destinationPort !== null
    ) {
      message.destinationPort = object.destinationPort;
    } else {
      message.destinationPort = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    } else {
      message.encoding = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseAcknowledgement: object = {};

export const Acknowledgement = {
  encode(
    message: Acknowledgement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.appAcknowledgements) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Acknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAcknowledgement } as Acknowledgement;
    message.appAcknowledgements = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAcknowledgements.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Acknowledgement {
    const message = { ...baseAcknowledgement } as Acknowledgement;
    message.appAcknowledgements = [];
    if (
      object.appAcknowledgements !== undefined &&
      object.appAcknowledgements !== null
    ) {
      for (const e of object.appAcknowledgements) {
        message.appAcknowledgements.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: Acknowledgement): unknown {
    const obj: any = {};
    if (message.appAcknowledgements) {
      obj.appAcknowledgements = message.appAcknowledgements.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.appAcknowledgements = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Acknowledgement>): Acknowledgement {
    const message = { ...baseAcknowledgement } as Acknowledgement;
    message.appAcknowledgements = [];
    if (
      object.appAcknowledgements !== undefined &&
      object.appAcknowledgements !== null
    ) {
      for (const e of object.appAcknowledgements) {
        message.appAcknowledgements.push(e);
      }
    }
    return message;
  },
};

const baseRecvPacketResult: object = { status: 0 };

export const RecvPacketResult = {
  encode(
    message: RecvPacketResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecvPacketResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecvPacketResult } as RecvPacketResult;
    message.acknowledgement = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecvPacketResult {
    const message = { ...baseRecvPacketResult } as RecvPacketResult;
    message.acknowledgement = new Uint8Array();
    if (object.status !== undefined && object.status !== null) {
      message.status = packetStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.acknowledgement !== undefined &&
      object.acknowledgement !== null
    ) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    return message;
  },

  toJSON(message: RecvPacketResult): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = packetStatusToJSON(message.status));
    message.acknowledgement !== undefined &&
      (obj.acknowledgement = base64FromBytes(
        message.acknowledgement !== undefined
          ? message.acknowledgement
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<RecvPacketResult>): RecvPacketResult {
    const message = { ...baseRecvPacketResult } as RecvPacketResult;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.acknowledgement !== undefined &&
      object.acknowledgement !== null
    ) {
      message.acknowledgement = object.acknowledgement;
    } else {
      message.acknowledgement = new Uint8Array();
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
