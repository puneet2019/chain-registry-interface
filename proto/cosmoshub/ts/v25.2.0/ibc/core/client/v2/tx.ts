/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Config } from "../../../../ibc/core/client/v2/config";

export const protobufPackage = "ibc.core.client.v2";

/** MsgRegisterCounterparty defines a message to register a counterparty on a client */
export interface MsgRegisterCounterparty {
  /** client identifier */
  clientId: string;
  /** counterparty merkle prefix */
  counterpartyMerklePrefix: Uint8Array[];
  /** counterparty client identifier */
  counterpartyClientId: string;
  /** signer address */
  signer: string;
}

/** MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type. */
export interface MsgRegisterCounterpartyResponse {}

/** MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client */
export interface MsgUpdateClientConfig {
  /** client identifier */
  clientId: string;
  /**
   * allowed relayers
   *
   * NOTE: All fields in the config must be supplied.
   */
  config: Config | undefined;
  /** signer address */
  signer: string;
}

/** MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type. */
export interface MsgUpdateClientConfigResponse {}

const baseMsgRegisterCounterparty: object = {
  clientId: "",
  counterpartyClientId: "",
  signer: "",
};

export const MsgRegisterCounterparty = {
  encode(
    message: MsgRegisterCounterparty,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.counterpartyMerklePrefix) {
      writer.uint32(18).bytes(v!);
    }
    if (message.counterpartyClientId !== "") {
      writer.uint32(26).string(message.counterpartyClientId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterCounterparty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterCounterparty,
    } as MsgRegisterCounterparty;
    message.counterpartyMerklePrefix = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterpartyMerklePrefix.push(reader.bytes());
          break;
        case 3:
          message.counterpartyClientId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterCounterparty {
    const message = {
      ...baseMsgRegisterCounterparty,
    } as MsgRegisterCounterparty;
    message.counterpartyMerklePrefix = [];
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    if (
      object.counterpartyMerklePrefix !== undefined &&
      object.counterpartyMerklePrefix !== null
    ) {
      for (const e of object.counterpartyMerklePrefix) {
        message.counterpartyMerklePrefix.push(bytesFromBase64(e));
      }
    }
    if (
      object.counterpartyClientId !== undefined &&
      object.counterpartyClientId !== null
    ) {
      message.counterpartyClientId = String(object.counterpartyClientId);
    } else {
      message.counterpartyClientId = "";
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterCounterparty): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.counterpartyMerklePrefix) {
      obj.counterpartyMerklePrefix = message.counterpartyMerklePrefix.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.counterpartyMerklePrefix = [];
    }
    message.counterpartyClientId !== undefined &&
      (obj.counterpartyClientId = message.counterpartyClientId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterCounterparty>
  ): MsgRegisterCounterparty {
    const message = {
      ...baseMsgRegisterCounterparty,
    } as MsgRegisterCounterparty;
    message.counterpartyMerklePrefix = [];
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (
      object.counterpartyMerklePrefix !== undefined &&
      object.counterpartyMerklePrefix !== null
    ) {
      for (const e of object.counterpartyMerklePrefix) {
        message.counterpartyMerklePrefix.push(e);
      }
    }
    if (
      object.counterpartyClientId !== undefined &&
      object.counterpartyClientId !== null
    ) {
      message.counterpartyClientId = object.counterpartyClientId;
    } else {
      message.counterpartyClientId = "";
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgRegisterCounterpartyResponse: object = {};

export const MsgRegisterCounterpartyResponse = {
  encode(
    _: MsgRegisterCounterpartyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterCounterpartyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterCounterpartyResponse,
    } as MsgRegisterCounterpartyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterCounterpartyResponse {
    const message = {
      ...baseMsgRegisterCounterpartyResponse,
    } as MsgRegisterCounterpartyResponse;
    return message;
  },

  toJSON(_: MsgRegisterCounterpartyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterCounterpartyResponse>
  ): MsgRegisterCounterpartyResponse {
    const message = {
      ...baseMsgRegisterCounterpartyResponse,
    } as MsgRegisterCounterpartyResponse;
    return message;
  },
};

const baseMsgUpdateClientConfig: object = { clientId: "", signer: "" };

export const MsgUpdateClientConfig = {
  encode(
    message: MsgUpdateClientConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateClientConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateClientConfig } as MsgUpdateClientConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.config = Config.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateClientConfig {
    const message = { ...baseMsgUpdateClientConfig } as MsgUpdateClientConfig;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromJSON(object.config);
    } else {
      message.config = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateClientConfig): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.config !== undefined &&
      (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateClientConfig>
  ): MsgUpdateClientConfig {
    const message = { ...baseMsgUpdateClientConfig } as MsgUpdateClientConfig;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromPartial(object.config);
    } else {
      message.config = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgUpdateClientConfigResponse: object = {};

export const MsgUpdateClientConfigResponse = {
  encode(
    _: MsgUpdateClientConfigResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateClientConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateClientConfigResponse,
    } as MsgUpdateClientConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateClientConfigResponse {
    const message = {
      ...baseMsgUpdateClientConfigResponse,
    } as MsgUpdateClientConfigResponse;
    return message;
  },

  toJSON(_: MsgUpdateClientConfigResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateClientConfigResponse>
  ): MsgUpdateClientConfigResponse {
    const message = {
      ...baseMsgUpdateClientConfigResponse,
    } as MsgUpdateClientConfigResponse;
    return message;
  },
};

/** Msg defines the ibc/client/v2 Msg service. */
export interface Msg {
  /** RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty. */
  RegisterCounterparty(
    request: MsgRegisterCounterparty
  ): Promise<MsgRegisterCounterpartyResponse>;
  /** UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig. */
  UpdateClientConfig(
    request: MsgUpdateClientConfig
  ): Promise<MsgUpdateClientConfigResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RegisterCounterparty(
    request: MsgRegisterCounterparty
  ): Promise<MsgRegisterCounterpartyResponse> {
    const data = MsgRegisterCounterparty.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v2.Msg",
      "RegisterCounterparty",
      data
    );
    return promise.then((data) =>
      MsgRegisterCounterpartyResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateClientConfig(
    request: MsgUpdateClientConfig
  ): Promise<MsgUpdateClientConfigResponse> {
    const data = MsgUpdateClientConfig.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v2.Msg",
      "UpdateClientConfig",
      data
    );
    return promise.then((data) =>
      MsgUpdateClientConfigResponse.decode(new _m0.Reader(data))
    );
  }
}

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
