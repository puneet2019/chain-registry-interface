/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "proto";

/**
 * Manifest specifies the entries in a container bundle, keyed and sorted by
 * path.
 */
export interface Manifest {
  resource: Resource[];
}

export interface Resource {
  /**
   * Path specifies the path from the bundle root. If more than one
   * path is present, the entry may represent a hardlink, rather than using
   * a link target. The path format is operating system specific.
   */
  path: string[];
  /** Uid specifies the user id for the resource. */
  uid: number;
  /** Gid specifies the group id for the resource. */
  gid: number;
  /**
   * user and group are not currently used but their field numbers have been
   * reserved for future use. As such, they are marked as deprecated.
   *
   * @deprecated
   */
  user: string;
  /**
   * "deprecated" stands for "reserved" here
   *
   * @deprecated
   */
  group: string;
  /**
   * Mode defines the file mode and permissions. We've used the same
   * bit-packing from Go's os package,
   * http://golang.org/pkg/os/#FileMode, since they've done the work of
   * creating a cross-platform layout.
   */
  mode: number;
  /**
   * Size specifies the size in bytes of the resource. This is only valid
   * for regular files.
   */
  size: number;
  /**
   * Digest specifies the content digest of the target file. Only valid for
   * regular files. The strings are formatted in OCI style, i.e. <alg>:<encoded>.
   * For detailed information about the format, please refer to OCI Image Spec:
   * https://github.com/opencontainers/image-spec/blob/master/descriptor.md#digests-and-verification
   * The digests are sorted in lexical order and implementations may choose
   * which algorithms they prefer.
   */
  digest: string[];
  /**
   * Target defines the target of a hard or soft link. Absolute links start
   * with a slash and specify the resource relative to the bundle root.
   * Relative links do not start with a slash and are relative to the
   * resource path.
   */
  target: string;
  /** Major specifies the major device number for character and block devices. */
  major: number;
  /** Minor specifies the minor device number for character and block devices. */
  minor: number;
  /** Xattr provides storage for extended attributes for the target resource. */
  xattr: XAttr[];
  /** Ads stores one or more alternate data streams for the target resource. */
  ads: ADSEntry[];
}

/** XAttr encodes extended attributes for a resource. */
export interface XAttr {
  /** Name specifies the attribute name. */
  name: string;
  /** Data specifies the associated data for the attribute. */
  data: Uint8Array;
}

/** ADSEntry encodes information for a Windows Alternate Data Stream. */
export interface ADSEntry {
  /** Name specifices the stream name. */
  name: string;
  /**
   * Data specifies the stream data.
   * See also the description about the digest below.
   */
  data: Uint8Array;
  /**
   * Digest is a CAS representation of the stream data.
   *
   * At least one of data or digest MUST be specified, and either one of them
   * SHOULD be specified.
   *
   * How to access the actual data using the digest is implementation-specific,
   * and implementations can choose not to implement digest.
   * So, digest SHOULD be used only when the stream data is large.
   */
  digest: string;
}

const baseManifest: object = {};

export const Manifest = {
  encode(
    message: Manifest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resource) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Manifest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseManifest } as Manifest;
    message.resource = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource.push(Resource.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Manifest {
    const message = { ...baseManifest } as Manifest;
    message.resource = [];
    if (object.resource !== undefined && object.resource !== null) {
      for (const e of object.resource) {
        message.resource.push(Resource.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Manifest): unknown {
    const obj: any = {};
    if (message.resource) {
      obj.resource = message.resource.map((e) =>
        e ? Resource.toJSON(e) : undefined
      );
    } else {
      obj.resource = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Manifest>): Manifest {
    const message = { ...baseManifest } as Manifest;
    message.resource = [];
    if (object.resource !== undefined && object.resource !== null) {
      for (const e of object.resource) {
        message.resource.push(Resource.fromPartial(e));
      }
    }
    return message;
  },
};

const baseResource: object = {
  path: "",
  uid: 0,
  gid: 0,
  user: "",
  group: "",
  mode: 0,
  size: 0,
  digest: "",
  target: "",
  major: 0,
  minor: 0,
};

export const Resource = {
  encode(
    message: Resource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.path) {
      writer.uint32(10).string(v!);
    }
    if (message.uid !== 0) {
      writer.uint32(16).int64(message.uid);
    }
    if (message.gid !== 0) {
      writer.uint32(24).int64(message.gid);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    if (message.group !== "") {
      writer.uint32(42).string(message.group);
    }
    if (message.mode !== 0) {
      writer.uint32(48).uint32(message.mode);
    }
    if (message.size !== 0) {
      writer.uint32(56).uint64(message.size);
    }
    for (const v of message.digest) {
      writer.uint32(66).string(v!);
    }
    if (message.target !== "") {
      writer.uint32(74).string(message.target);
    }
    if (message.major !== 0) {
      writer.uint32(80).uint64(message.major);
    }
    if (message.minor !== 0) {
      writer.uint32(88).uint64(message.minor);
    }
    for (const v of message.xattr) {
      XAttr.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.ads) {
      ADSEntry.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResource } as Resource;
    message.path = [];
    message.digest = [];
    message.xattr = [];
    message.ads = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path.push(reader.string());
          break;
        case 2:
          message.uid = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.gid = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.user = reader.string();
          break;
        case 5:
          message.group = reader.string();
          break;
        case 6:
          message.mode = reader.uint32();
          break;
        case 7:
          message.size = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.digest.push(reader.string());
          break;
        case 9:
          message.target = reader.string();
          break;
        case 10:
          message.major = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.minor = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.xattr.push(XAttr.decode(reader, reader.uint32()));
          break;
        case 13:
          message.ads.push(ADSEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    const message = { ...baseResource } as Resource;
    message.path = [];
    message.digest = [];
    message.xattr = [];
    message.ads = [];
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = Number(object.uid);
    } else {
      message.uid = 0;
    }
    if (object.gid !== undefined && object.gid !== null) {
      message.gid = Number(object.gid);
    } else {
      message.gid = 0;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = Number(object.mode);
    } else {
      message.mode = 0;
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = Number(object.size);
    } else {
      message.size = 0;
    }
    if (object.digest !== undefined && object.digest !== null) {
      for (const e of object.digest) {
        message.digest.push(String(e));
      }
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = String(object.target);
    } else {
      message.target = "";
    }
    if (object.major !== undefined && object.major !== null) {
      message.major = Number(object.major);
    } else {
      message.major = 0;
    }
    if (object.minor !== undefined && object.minor !== null) {
      message.minor = Number(object.minor);
    } else {
      message.minor = 0;
    }
    if (object.xattr !== undefined && object.xattr !== null) {
      for (const e of object.xattr) {
        message.xattr.push(XAttr.fromJSON(e));
      }
    }
    if (object.ads !== undefined && object.ads !== null) {
      for (const e of object.ads) {
        message.ads.push(ADSEntry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    message.uid !== undefined && (obj.uid = message.uid);
    message.gid !== undefined && (obj.gid = message.gid);
    message.user !== undefined && (obj.user = message.user);
    message.group !== undefined && (obj.group = message.group);
    message.mode !== undefined && (obj.mode = message.mode);
    message.size !== undefined && (obj.size = message.size);
    if (message.digest) {
      obj.digest = message.digest.map((e) => e);
    } else {
      obj.digest = [];
    }
    message.target !== undefined && (obj.target = message.target);
    message.major !== undefined && (obj.major = message.major);
    message.minor !== undefined && (obj.minor = message.minor);
    if (message.xattr) {
      obj.xattr = message.xattr.map((e) => (e ? XAttr.toJSON(e) : undefined));
    } else {
      obj.xattr = [];
    }
    if (message.ads) {
      obj.ads = message.ads.map((e) => (e ? ADSEntry.toJSON(e) : undefined));
    } else {
      obj.ads = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = { ...baseResource } as Resource;
    message.path = [];
    message.digest = [];
    message.xattr = [];
    message.ads = [];
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = 0;
    }
    if (object.gid !== undefined && object.gid !== null) {
      message.gid = object.gid;
    } else {
      message.gid = 0;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    } else {
      message.mode = 0;
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = object.size;
    } else {
      message.size = 0;
    }
    if (object.digest !== undefined && object.digest !== null) {
      for (const e of object.digest) {
        message.digest.push(e);
      }
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    } else {
      message.target = "";
    }
    if (object.major !== undefined && object.major !== null) {
      message.major = object.major;
    } else {
      message.major = 0;
    }
    if (object.minor !== undefined && object.minor !== null) {
      message.minor = object.minor;
    } else {
      message.minor = 0;
    }
    if (object.xattr !== undefined && object.xattr !== null) {
      for (const e of object.xattr) {
        message.xattr.push(XAttr.fromPartial(e));
      }
    }
    if (object.ads !== undefined && object.ads !== null) {
      for (const e of object.ads) {
        message.ads.push(ADSEntry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseXAttr: object = { name: "" };

export const XAttr = {
  encode(message: XAttr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): XAttr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseXAttr } as XAttr;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): XAttr {
    const message = { ...baseXAttr } as XAttr;
    message.data = new Uint8Array();
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: XAttr): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<XAttr>): XAttr {
    const message = { ...baseXAttr } as XAttr;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const baseADSEntry: object = { name: "", digest: "" };

export const ADSEntry = {
  encode(
    message: ADSEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.digest !== "") {
      writer.uint32(26).string(message.digest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ADSEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseADSEntry } as ADSEntry;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.digest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ADSEntry {
    const message = { ...baseADSEntry } as ADSEntry;
    message.data = new Uint8Array();
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.digest !== undefined && object.digest !== null) {
      message.digest = String(object.digest);
    } else {
      message.digest = "";
    }
    return message;
  },

  toJSON(message: ADSEntry): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.digest !== undefined && (obj.digest = message.digest);
    return obj;
  },

  fromPartial(object: DeepPartial<ADSEntry>): ADSEntry {
    const message = { ...baseADSEntry } as ADSEntry;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    if (object.digest !== undefined && object.digest !== null) {
      message.digest = object.digest;
    } else {
      message.digest = "";
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
