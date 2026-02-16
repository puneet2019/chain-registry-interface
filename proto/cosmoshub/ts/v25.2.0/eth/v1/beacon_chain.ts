/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ethereum.eth.v1";

/**
 * Copyright 2021 Prysmatic Labs.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface StateRequest {
  /**
   * The state id which can be any of: "head" (canonical head in node's view),
   * "genesis", "finalized", "justified", <slot>, <hex encoded stateRoot with 0x
   * prefix>.
   */
  stateId: Uint8Array;
}

const baseStateRequest: object = {};

export const StateRequest = {
  encode(
    message: StateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stateId.length !== 0) {
      writer.uint32(10).bytes(message.stateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStateRequest } as StateRequest;
    message.stateId = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stateId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateRequest {
    const message = { ...baseStateRequest } as StateRequest;
    message.stateId = new Uint8Array();
    if (object.stateId !== undefined && object.stateId !== null) {
      message.stateId = bytesFromBase64(object.stateId);
    }
    return message;
  },

  toJSON(message: StateRequest): unknown {
    const obj: any = {};
    message.stateId !== undefined &&
      (obj.stateId = base64FromBytes(
        message.stateId !== undefined ? message.stateId : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<StateRequest>): StateRequest {
    const message = { ...baseStateRequest } as StateRequest;
    if (object.stateId !== undefined && object.stateId !== null) {
      message.stateId = object.stateId;
    } else {
      message.stateId = new Uint8Array();
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
