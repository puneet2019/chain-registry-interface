/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ibc.core.commitment.v2";

/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * ICS-23 verification supports membership proofs for nested merkle trees.
 * The ICS-24 standard provable keys MUST be stored in the lowest level tree with an optional prefix.
 * The IC24 provable tree may then be stored in a higher level tree(s) that hash up to the root hash
 * stored in the consensus state of the client.
 * Each element of the path represents the key of a merkle tree from the root to the leaf.
 * The elements of the path before the final element must be the path to the tree that contains
 * the ICS24 provable store. Thus, it should remain constant for all ICS24 proofs.
 * The final element of the path is the key of the leaf in the ICS24 provable store,
 * Thus IBC core will append the ICS24 path to the final element of the MerklePath
 * stored in the counterparty to create the full path to the leaf for proof verification.
 * Examples:
 * Cosmos SDK:
 * The Cosmos SDK commits to a multi-tree where each store is an IAVL tree and all store hashes
 * are hashed in a simple merkle tree to get the final root hash. Thus, the MerklePath in the counterparty
 * MerklePrefix has the following structure: ["ibc", ""]
 * The core IBC handler will append the ICS24 path to the final element of the MerklePath
 * like so: ["ibc", "{packetCommitmentPath}"] which will then be used for final verification.
 * Ethereum:
 * The Ethereum client commits to a single Patricia merkle trie. The ICS24 provable store is managed
 * by the smart contract state. Each smart contract has a specific prefix reserved within the global trie.
 * Thus the MerklePath in the counterparty is the prefix to the smart contract state in the global trie.
 * Since there is only one tree in the commitment structure of ethereum the MerklePath in the counterparty
 * MerklePrefix has the following structure: ["IBCCoreContractAddressStoragePrefix"]
 * The core IBC handler will append the ICS24 path to the final element of the MerklePath
 * like so: ["IBCCoreContractAddressStoragePrefix{packetCommitmentPath}"] which will then be used for final
 * verification. Thus the MerklePath in the counterparty MerklePrefix is the nested key path from the root hash of the
 * consensus state down to the ICS24 provable store. The IBC handler retrieves the counterparty key path to the ICS24
 * provable store from the MerklePath and appends the ICS24 path to get the final key path to the value being verified
 * by the client against the root hash in the client's consensus state.
 */
export interface MerklePath {
  keyPath: Uint8Array[];
}

const baseMerklePath: object = {};

export const MerklePath = {
  encode(
    message: MerklePath,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.keyPath) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MerklePath {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMerklePath } as MerklePath;
    message.keyPath = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPath.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MerklePath {
    const message = { ...baseMerklePath } as MerklePath;
    message.keyPath = [];
    if (object.keyPath !== undefined && object.keyPath !== null) {
      for (const e of object.keyPath) {
        message.keyPath.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: MerklePath): unknown {
    const obj: any = {};
    if (message.keyPath) {
      obj.keyPath = message.keyPath.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.keyPath = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MerklePath>): MerklePath {
    const message = { ...baseMerklePath } as MerklePath;
    message.keyPath = [];
    if (object.keyPath !== undefined && object.keyPath !== null) {
      for (const e of object.keyPath) {
        message.keyPath.push(e);
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
