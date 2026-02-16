/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AccountAuthenticator } from "../../../osmosis/smartaccount/v1beta1/models";
import { Params } from "../../../osmosis/smartaccount/v1beta1/params";

export const protobufPackage = "osmosis.smartaccount.v1beta1";

/**
 * AuthenticatorData represents a genesis exported account with Authenticators.
 * The address is used as the key, and the account authenticators are stored in
 * the authenticators field.
 */
export interface AuthenticatorData {
  /** address is an account address, one address can have many authenticators */
  address: string;
  /**
   * authenticators are the account's authenticators, these can be multiple
   * types including SignatureVerification, AllOfs, CosmWasmAuthenticators, etc
   */
  authenticators: AccountAuthenticator[];
}

/** GenesisState defines the authenticator module's genesis state. */
export interface GenesisState {
  /** params define the parameters for the authenticator module. */
  params: Params | undefined;
  /** next_authenticator_id is the next available authenticator ID. */
  nextAuthenticatorId: number;
  /**
   * authenticator_data contains the data for multiple accounts, each with their
   * authenticators.
   */
  authenticatorData: AuthenticatorData[];
}

const baseAuthenticatorData: object = { address: "" };

export const AuthenticatorData = {
  encode(
    message: AuthenticatorData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.authenticators) {
      AccountAuthenticator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticatorData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthenticatorData } as AuthenticatorData;
    message.authenticators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.authenticators.push(
            AccountAuthenticator.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticatorData {
    const message = { ...baseAuthenticatorData } as AuthenticatorData;
    message.authenticators = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.authenticators !== undefined && object.authenticators !== null) {
      for (const e of object.authenticators) {
        message.authenticators.push(AccountAuthenticator.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: AuthenticatorData): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.authenticators) {
      obj.authenticators = message.authenticators.map((e) =>
        e ? AccountAuthenticator.toJSON(e) : undefined
      );
    } else {
      obj.authenticators = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AuthenticatorData>): AuthenticatorData {
    const message = { ...baseAuthenticatorData } as AuthenticatorData;
    message.authenticators = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.authenticators !== undefined && object.authenticators !== null) {
      for (const e of object.authenticators) {
        message.authenticators.push(AccountAuthenticator.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGenesisState: object = { nextAuthenticatorId: 0 };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextAuthenticatorId !== 0) {
      writer.uint32(16).uint64(message.nextAuthenticatorId);
    }
    for (const v of message.authenticatorData) {
      AuthenticatorData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.authenticatorData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nextAuthenticatorId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.authenticatorData.push(
            AuthenticatorData.decode(reader, reader.uint32())
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
    message.authenticatorData = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.nextAuthenticatorId !== undefined &&
      object.nextAuthenticatorId !== null
    ) {
      message.nextAuthenticatorId = Number(object.nextAuthenticatorId);
    } else {
      message.nextAuthenticatorId = 0;
    }
    if (
      object.authenticatorData !== undefined &&
      object.authenticatorData !== null
    ) {
      for (const e of object.authenticatorData) {
        message.authenticatorData.push(AuthenticatorData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.nextAuthenticatorId !== undefined &&
      (obj.nextAuthenticatorId = message.nextAuthenticatorId);
    if (message.authenticatorData) {
      obj.authenticatorData = message.authenticatorData.map((e) =>
        e ? AuthenticatorData.toJSON(e) : undefined
      );
    } else {
      obj.authenticatorData = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.authenticatorData = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.nextAuthenticatorId !== undefined &&
      object.nextAuthenticatorId !== null
    ) {
      message.nextAuthenticatorId = object.nextAuthenticatorId;
    } else {
      message.nextAuthenticatorId = 0;
    }
    if (
      object.authenticatorData !== undefined &&
      object.authenticatorData !== null
    ) {
      for (const e of object.authenticatorData) {
        message.authenticatorData.push(AuthenticatorData.fromPartial(e));
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
