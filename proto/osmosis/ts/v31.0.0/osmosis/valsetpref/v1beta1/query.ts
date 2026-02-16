/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ValidatorPreference } from "../../../osmosis/valsetpref/v1beta1/state";

export const protobufPackage = "osmosis.valsetpref.v1beta1";

/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequest {
  /** user account address */
  address: string;
}

/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponse {
  preferences: ValidatorPreference[];
}

const baseUserValidatorPreferencesRequest: object = { address: "" };

export const UserValidatorPreferencesRequest = {
  encode(
    message: UserValidatorPreferencesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserValidatorPreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUserValidatorPreferencesRequest,
    } as UserValidatorPreferencesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserValidatorPreferencesRequest {
    const message = {
      ...baseUserValidatorPreferencesRequest,
    } as UserValidatorPreferencesRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: UserValidatorPreferencesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UserValidatorPreferencesRequest>
  ): UserValidatorPreferencesRequest {
    const message = {
      ...baseUserValidatorPreferencesRequest,
    } as UserValidatorPreferencesRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseUserValidatorPreferencesResponse: object = {};

export const UserValidatorPreferencesResponse = {
  encode(
    message: UserValidatorPreferencesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserValidatorPreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUserValidatorPreferencesResponse,
    } as UserValidatorPreferencesResponse;
    message.preferences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences.push(
            ValidatorPreference.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserValidatorPreferencesResponse {
    const message = {
      ...baseUserValidatorPreferencesResponse,
    } as UserValidatorPreferencesResponse;
    message.preferences = [];
    if (object.preferences !== undefined && object.preferences !== null) {
      for (const e of object.preferences) {
        message.preferences.push(ValidatorPreference.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: UserValidatorPreferencesResponse): unknown {
    const obj: any = {};
    if (message.preferences) {
      obj.preferences = message.preferences.map((e) =>
        e ? ValidatorPreference.toJSON(e) : undefined
      );
    } else {
      obj.preferences = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<UserValidatorPreferencesResponse>
  ): UserValidatorPreferencesResponse {
    const message = {
      ...baseUserValidatorPreferencesResponse,
    } as UserValidatorPreferencesResponse;
    message.preferences = [];
    if (object.preferences !== undefined && object.preferences !== null) {
      for (const e of object.preferences) {
        message.preferences.push(ValidatorPreference.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns the list of ValidatorPreferences for the user. */
  UserValidatorPreferences(
    request: UserValidatorPreferencesRequest
  ): Promise<UserValidatorPreferencesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  UserValidatorPreferences(
    request: UserValidatorPreferencesRequest
  ): Promise<UserValidatorPreferencesResponse> {
    const data = UserValidatorPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.valsetpref.v1beta1.Query",
      "UserValidatorPreferences",
      data
    );
    return promise.then((data) =>
      UserValidatorPreferencesResponse.decode(new _m0.Reader(data))
    );
  }
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
