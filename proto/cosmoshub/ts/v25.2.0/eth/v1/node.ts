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

/** PeerDirection states the direction of the connection to a peer. */
export enum PeerDirection {
  INBOUND = 0,
  OUTBOUND = 1,
  UNRECOGNIZED = -1,
}

export function peerDirectionFromJSON(object: any): PeerDirection {
  switch (object) {
    case 0:
    case "INBOUND":
      return PeerDirection.INBOUND;
    case 1:
    case "OUTBOUND":
      return PeerDirection.OUTBOUND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PeerDirection.UNRECOGNIZED;
  }
}

export function peerDirectionToJSON(object: PeerDirection): string {
  switch (object) {
    case PeerDirection.INBOUND:
      return "INBOUND";
    case PeerDirection.OUTBOUND:
      return "OUTBOUND";
    default:
      return "UNKNOWN";
  }
}

/** ConnectionState states the current status of the peer. */
export enum ConnectionState {
  DISCONNECTED = 0,
  CONNECTING = 1,
  CONNECTED = 2,
  DISCONNECTING = 3,
  UNRECOGNIZED = -1,
}

export function connectionStateFromJSON(object: any): ConnectionState {
  switch (object) {
    case 0:
    case "DISCONNECTED":
      return ConnectionState.DISCONNECTED;
    case 1:
    case "CONNECTING":
      return ConnectionState.CONNECTING;
    case 2:
    case "CONNECTED":
      return ConnectionState.CONNECTED;
    case 3:
    case "DISCONNECTING":
      return ConnectionState.DISCONNECTING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionState.UNRECOGNIZED;
  }
}

export function connectionStateToJSON(object: ConnectionState): string {
  switch (object) {
    case ConnectionState.DISCONNECTED:
      return "DISCONNECTED";
    case ConnectionState.CONNECTING:
      return "CONNECTING";
    case ConnectionState.CONNECTED:
      return "CONNECTED";
    case ConnectionState.DISCONNECTING:
      return "DISCONNECTING";
    default:
      return "UNKNOWN";
  }
}

/** Peer provides details of a peer on the network. */
export interface Peer {
  /** The peer id of the peer. */
  peerId: string;
  /** The latest ENR of the peer that's in the record. */
  enr: string;
  /**
   * The address of the peer, as a full multiaddr, for example:
   * /ip4/37.221.192.134/tcp/13000/p2p/16Uiu2HAm8maLMjag1TAUM52zPfmLbVMGFdwUAWgoHu1HDQLR6e17
   */
  lastSeenP2pAddress: string;
  /**
   * The connection state of the peer at the moment of the request. (e.g.
   * Connecting)
   */
  state: ConnectionState;
  /** The direction of the connection (inbound/outbound). */
  direction: PeerDirection;
}

const basePeer: object = {
  peerId: "",
  enr: "",
  lastSeenP2pAddress: "",
  state: 0,
  direction: 0,
};

export const Peer = {
  encode(message: Peer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peerId !== "") {
      writer.uint32(10).string(message.peerId);
    }
    if (message.enr !== "") {
      writer.uint32(18).string(message.enr);
    }
    if (message.lastSeenP2pAddress !== "") {
      writer.uint32(26).string(message.lastSeenP2pAddress);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.direction !== 0) {
      writer.uint32(40).int32(message.direction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Peer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePeer } as Peer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerId = reader.string();
          break;
        case 2:
          message.enr = reader.string();
          break;
        case 3:
          message.lastSeenP2pAddress = reader.string();
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          message.direction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Peer {
    const message = { ...basePeer } as Peer;
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = String(object.peerId);
    } else {
      message.peerId = "";
    }
    if (object.enr !== undefined && object.enr !== null) {
      message.enr = String(object.enr);
    } else {
      message.enr = "";
    }
    if (
      object.lastSeenP2pAddress !== undefined &&
      object.lastSeenP2pAddress !== null
    ) {
      message.lastSeenP2pAddress = String(object.lastSeenP2pAddress);
    } else {
      message.lastSeenP2pAddress = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = connectionStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = peerDirectionFromJSON(object.direction);
    } else {
      message.direction = 0;
    }
    return message;
  },

  toJSON(message: Peer): unknown {
    const obj: any = {};
    message.peerId !== undefined && (obj.peerId = message.peerId);
    message.enr !== undefined && (obj.enr = message.enr);
    message.lastSeenP2pAddress !== undefined &&
      (obj.lastSeenP2pAddress = message.lastSeenP2pAddress);
    message.state !== undefined &&
      (obj.state = connectionStateToJSON(message.state));
    message.direction !== undefined &&
      (obj.direction = peerDirectionToJSON(message.direction));
    return obj;
  },

  fromPartial(object: DeepPartial<Peer>): Peer {
    const message = { ...basePeer } as Peer;
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = object.peerId;
    } else {
      message.peerId = "";
    }
    if (object.enr !== undefined && object.enr !== null) {
      message.enr = object.enr;
    } else {
      message.enr = "";
    }
    if (
      object.lastSeenP2pAddress !== undefined &&
      object.lastSeenP2pAddress !== null
    ) {
      message.lastSeenP2pAddress = object.lastSeenP2pAddress;
    } else {
      message.lastSeenP2pAddress = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = object.direction;
    } else {
      message.direction = 0;
    }
    return message;
  },
};

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
