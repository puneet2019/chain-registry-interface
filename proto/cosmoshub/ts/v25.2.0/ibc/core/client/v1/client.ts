/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";

export const protobufPackage = "ibc.core.client.v1";

/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientState {
  /** client identifier */
  clientId: string;
  /** client state */
  clientState: Any | undefined;
}

/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeight {
  /** consensus state height */
  height: Height | undefined;
  /** consensus state */
  consensusState: Any | undefined;
}

/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStates {
  /** client identifier */
  clientId: string;
  /** consensus states and their heights associated with the client */
  consensusStates: ConsensusStateWithHeight[];
}

/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 *
 * Please note that json tags for generated Go code are overridden to explicitly exclude the omitempty jsontag.
 * This enforces the Go json marshaller to always emit zero values for both revision_number and revision_height.
 */
export interface Height {
  /** the revision that the client is currently on */
  revisionNumber: number;
  /** the height within the given revision */
  revisionHeight: number;
}

/** Params defines the set of IBC light client parameters. */
export interface Params {
  /**
   * allowed_clients defines the list of allowed client state types which can be created
   * and interacted with. If a client type is removed from the allowed clients list, usage
   * of this client will be disabled until it is added again to the list.
   */
  allowedClients: string[];
}

const baseIdentifiedClientState: object = { clientId: "" };

export const IdentifiedClientState = {
  encode(
    message: IdentifiedClientState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IdentifiedClientState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentifiedClientState } as IdentifiedClientState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IdentifiedClientState {
    const message = { ...baseIdentifiedClientState } as IdentifiedClientState;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromJSON(object.clientState);
    } else {
      message.clientState = undefined;
    }
    return message;
  },

  toJSON(message: IdentifiedClientState): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientState !== undefined &&
      (obj.clientState = message.clientState
        ? Any.toJSON(message.clientState)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IdentifiedClientState>
  ): IdentifiedClientState {
    const message = { ...baseIdentifiedClientState } as IdentifiedClientState;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    } else {
      message.clientState = undefined;
    }
    return message;
  },
};

const baseConsensusStateWithHeight: object = {};

export const ConsensusStateWithHeight = {
  encode(
    message: ConsensusStateWithHeight,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConsensusStateWithHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConsensusStateWithHeight,
    } as ConsensusStateWithHeight;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusStateWithHeight {
    const message = {
      ...baseConsensusStateWithHeight,
    } as ConsensusStateWithHeight;
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromJSON(object.height);
    } else {
      message.height = undefined;
    }
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromJSON(object.consensusState);
    } else {
      message.consensusState = undefined;
    }
    return message;
  },

  toJSON(message: ConsensusStateWithHeight): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? Any.toJSON(message.consensusState)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ConsensusStateWithHeight>
  ): ConsensusStateWithHeight {
    const message = {
      ...baseConsensusStateWithHeight,
    } as ConsensusStateWithHeight;
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromPartial(object.height);
    } else {
      message.height = undefined;
    }
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    } else {
      message.consensusState = undefined;
    }
    return message;
  },
};

const baseClientConsensusStates: object = { clientId: "" };

export const ClientConsensusStates = {
  encode(
    message: ClientConsensusStates,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClientConsensusStates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClientConsensusStates } as ClientConsensusStates;
    message.consensusStates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.consensusStates.push(
            ConsensusStateWithHeight.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientConsensusStates {
    const message = { ...baseClientConsensusStates } as ClientConsensusStates;
    message.consensusStates = [];
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    if (
      object.consensusStates !== undefined &&
      object.consensusStates !== null
    ) {
      for (const e of object.consensusStates) {
        message.consensusStates.push(ConsensusStateWithHeight.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ClientConsensusStates): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map((e) =>
        e ? ConsensusStateWithHeight.toJSON(e) : undefined
      );
    } else {
      obj.consensusStates = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ClientConsensusStates>
  ): ClientConsensusStates {
    const message = { ...baseClientConsensusStates } as ClientConsensusStates;
    message.consensusStates = [];
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (
      object.consensusStates !== undefined &&
      object.consensusStates !== null
    ) {
      for (const e of object.consensusStates) {
        message.consensusStates.push(ConsensusStateWithHeight.fromPartial(e));
      }
    }
    return message;
  },
};

const baseHeight: object = { revisionNumber: 0, revisionHeight: 0 };

export const Height = {
  encode(
    message: Height,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.revisionNumber !== 0) {
      writer.uint32(8).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== 0) {
      writer.uint32(16).uint64(message.revisionHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Height {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeight } as Height;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.revisionHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Height {
    const message = { ...baseHeight } as Height;
    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = Number(object.revisionNumber);
    } else {
      message.revisionNumber = 0;
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = Number(object.revisionHeight);
    } else {
      message.revisionHeight = 0;
    }
    return message;
  },

  toJSON(message: Height): unknown {
    const obj: any = {};
    message.revisionNumber !== undefined &&
      (obj.revisionNumber = message.revisionNumber);
    message.revisionHeight !== undefined &&
      (obj.revisionHeight = message.revisionHeight);
    return obj;
  },

  fromPartial(object: DeepPartial<Height>): Height {
    const message = { ...baseHeight } as Height;
    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = object.revisionNumber;
    } else {
      message.revisionNumber = 0;
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = object.revisionHeight;
    } else {
      message.revisionHeight = 0;
    }
    return message;
  },
};

const baseParams: object = { allowedClients: "" };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.allowedClients) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.allowedClients = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedClients.push(reader.string());
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
    message.allowedClients = [];
    if (object.allowedClients !== undefined && object.allowedClients !== null) {
      for (const e of object.allowedClients) {
        message.allowedClients.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.allowedClients) {
      obj.allowedClients = message.allowedClients.map((e) => e);
    } else {
      obj.allowedClients = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.allowedClients = [];
    if (object.allowedClients !== undefined && object.allowedClients !== null) {
      for (const e of object.allowedClients) {
        message.allowedClients.push(e);
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
