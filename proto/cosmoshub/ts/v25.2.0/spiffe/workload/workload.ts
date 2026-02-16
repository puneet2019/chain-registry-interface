/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Struct } from "../../google/protobuf/struct";

export const protobufPackage = "";

/**
 * The X509SVIDRequest message conveys parameters for requesting an X.509-SVID.
 * There are currently no request parameters.
 */
export interface X509SVIDRequest {}

/**
 * The X509SVIDResponse message carries X.509-SVIDs and related information,
 * including a set of global CRLs and a list of bundles the workload may use
 * for federating with foreign trust domains.
 */
export interface X509SVIDResponse {
  /**
   * Required. A list of X509SVID messages, each of which includes a single
   * X.509-SVID, its private key, and the bundle for the trust domain.
   */
  svids: X509SVID[];
  /** Optional. ASN.1 DER encoded certificate revocation lists. */
  crl: Uint8Array[];
  /**
   * Optional. CA certificate bundles belonging to foreign trust domains that
   * the workload should trust, keyed by the SPIFFE ID of the foreign trust
   * domain. Bundles are ASN.1 DER encoded.
   */
  federatedBundles: { [key: string]: Uint8Array };
}

export interface X509SVIDResponse_FederatedBundlesEntry {
  key: string;
  value: Uint8Array;
}

/**
 * The X509SVID message carries a single SVID and all associated information,
 * including the X.509 bundle for the trust domain.
 */
export interface X509SVID {
  /** Required. The SPIFFE ID of the SVID in this entry */
  spiffeId: string;
  /**
   * Required. ASN.1 DER encoded certificate chain. MAY include
   * intermediates, the leaf certificate (or SVID itself) MUST come first.
   */
  x509Svid: Uint8Array;
  /** Required. ASN.1 DER encoded PKCS#8 private key. MUST be unencrypted. */
  x509SvidKey: Uint8Array;
  /** Required. ASN.1 DER encoded X.509 bundle for the trust domain. */
  bundle: Uint8Array;
  /**
   * Optional. An operator-specified string used to provide guidance on how this
   * identity should be used by a workload when more than one SVID is returned.
   * For example, `internal` and `external` to indicate an SVID for internal or
   * external use, respectively.
   */
  hint: string;
}

/**
 * The X509BundlesRequest message conveys parameters for requesting X.509
 * bundles. There are currently no such parameters.
 */
export interface X509BundlesRequest {}

/**
 * The X509BundlesResponse message carries a set of global CRLs and a map of
 * trust bundles the workload should trust.
 */
export interface X509BundlesResponse {
  /** Optional. ASN.1 DER encoded certificate revocation lists. */
  crl: Uint8Array[];
  /**
   * Required. CA certificate bundles belonging to trust domains that the
   * workload should trust, keyed by the SPIFFE ID of the trust domain.
   * Bundles are ASN.1 DER encoded.
   */
  bundles: { [key: string]: Uint8Array };
}

export interface X509BundlesResponse_BundlesEntry {
  key: string;
  value: Uint8Array;
}

export interface JWTSVIDRequest {
  /** Required. The audience(s) the workload intends to authenticate against. */
  audience: string[];
  /**
   * Optional. The requested SPIFFE ID for the JWT-SVID. If unset, all
   * JWT-SVIDs to which the workload is entitled are requested.
   */
  spiffeId: string;
}

/** The JWTSVIDResponse message conveys JWT-SVIDs. */
export interface JWTSVIDResponse {
  /** Required. The list of returned JWT-SVIDs. */
  svids: JWTSVID[];
}

/** The JWTSVID message carries the JWT-SVID token and associated metadata. */
export interface JWTSVID {
  /** Required. The SPIFFE ID of the JWT-SVID. */
  spiffeId: string;
  /** Required. Encoded JWT using JWS Compact Serialization. */
  svid: string;
  /**
   * Optional. An operator-specified string used to provide guidance on how this
   * identity should be used by a workload when more than one SVID is returned.
   * For example, `internal` and `external` to indicate an SVID for internal or
   * external use, respectively.
   */
  hint: string;
}

/**
 * The JWTBundlesRequest message conveys parameters for requesting JWT bundles.
 * There are currently no such parameters.
 */
export interface JWTBundlesRequest {}

/** The JWTBundlesReponse conveys JWT bundles. */
export interface JWTBundlesResponse {
  /**
   * Required. JWK encoded JWT bundles, keyed by the SPIFFE ID of the trust
   * domain.
   */
  bundles: { [key: string]: Uint8Array };
}

export interface JWTBundlesResponse_BundlesEntry {
  key: string;
  value: Uint8Array;
}

/**
 * The ValidateJWTSVIDRequest message conveys request parameters for
 * JWT-SVID validation.
 */
export interface ValidateJWTSVIDRequest {
  /**
   * Required. The audience of the validating party. The JWT-SVID must
   * contain an audience claim which contains this value in order to
   * succesfully validate.
   */
  audience: string;
  /**
   * Required. The JWT-SVID to validate, encoded using JWS Compact
   * Serialization.
   */
  svid: string;
}

/** The ValidateJWTSVIDReponse message conveys the JWT-SVID validation results. */
export interface ValidateJWTSVIDResponse {
  /** Required. The SPIFFE ID of the validated JWT-SVID. */
  spiffeId: string;
  /**
   * Optional. Arbitrary claims contained within the payload of the validated
   * JWT-SVID.
   */
  claims: Struct | undefined;
}

const baseX509SVIDRequest: object = {};

export const X509SVIDRequest = {
  encode(
    _: X509SVIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): X509SVIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseX509SVIDRequest } as X509SVIDRequest;
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

  fromJSON(_: any): X509SVIDRequest {
    const message = { ...baseX509SVIDRequest } as X509SVIDRequest;
    return message;
  },

  toJSON(_: X509SVIDRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<X509SVIDRequest>): X509SVIDRequest {
    const message = { ...baseX509SVIDRequest } as X509SVIDRequest;
    return message;
  },
};

const baseX509SVIDResponse: object = {};

export const X509SVIDResponse = {
  encode(
    message: X509SVIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.svids) {
      X509SVID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.crl) {
      writer.uint32(18).bytes(v!);
    }
    Object.entries(message.federatedBundles).forEach(([key, value]) => {
      X509SVIDResponse_FederatedBundlesEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): X509SVIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseX509SVIDResponse } as X509SVIDResponse;
    message.svids = [];
    message.crl = [];
    message.federatedBundles = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.svids.push(X509SVID.decode(reader, reader.uint32()));
          break;
        case 2:
          message.crl.push(reader.bytes());
          break;
        case 3:
          const entry3 = X509SVIDResponse_FederatedBundlesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.federatedBundles[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): X509SVIDResponse {
    const message = { ...baseX509SVIDResponse } as X509SVIDResponse;
    message.svids = [];
    message.crl = [];
    message.federatedBundles = {};
    if (object.svids !== undefined && object.svids !== null) {
      for (const e of object.svids) {
        message.svids.push(X509SVID.fromJSON(e));
      }
    }
    if (object.crl !== undefined && object.crl !== null) {
      for (const e of object.crl) {
        message.crl.push(bytesFromBase64(e));
      }
    }
    if (
      object.federatedBundles !== undefined &&
      object.federatedBundles !== null
    ) {
      Object.entries(object.federatedBundles).forEach(([key, value]) => {
        message.federatedBundles[key] = bytesFromBase64(value as string);
      });
    }
    return message;
  },

  toJSON(message: X509SVIDResponse): unknown {
    const obj: any = {};
    if (message.svids) {
      obj.svids = message.svids.map((e) =>
        e ? X509SVID.toJSON(e) : undefined
      );
    } else {
      obj.svids = [];
    }
    if (message.crl) {
      obj.crl = message.crl.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.crl = [];
    }
    obj.federatedBundles = {};
    if (message.federatedBundles) {
      Object.entries(message.federatedBundles).forEach(([k, v]) => {
        obj.federatedBundles[k] = base64FromBytes(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<X509SVIDResponse>): X509SVIDResponse {
    const message = { ...baseX509SVIDResponse } as X509SVIDResponse;
    message.svids = [];
    message.crl = [];
    message.federatedBundles = {};
    if (object.svids !== undefined && object.svids !== null) {
      for (const e of object.svids) {
        message.svids.push(X509SVID.fromPartial(e));
      }
    }
    if (object.crl !== undefined && object.crl !== null) {
      for (const e of object.crl) {
        message.crl.push(e);
      }
    }
    if (
      object.federatedBundles !== undefined &&
      object.federatedBundles !== null
    ) {
      Object.entries(object.federatedBundles).forEach(([key, value]) => {
        if (value !== undefined) {
          message.federatedBundles[key] = value;
        }
      });
    }
    return message;
  },
};

const baseX509SVIDResponse_FederatedBundlesEntry: object = { key: "" };

export const X509SVIDResponse_FederatedBundlesEntry = {
  encode(
    message: X509SVIDResponse_FederatedBundlesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): X509SVIDResponse_FederatedBundlesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseX509SVIDResponse_FederatedBundlesEntry,
    } as X509SVIDResponse_FederatedBundlesEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): X509SVIDResponse_FederatedBundlesEntry {
    const message = {
      ...baseX509SVIDResponse_FederatedBundlesEntry,
    } as X509SVIDResponse_FederatedBundlesEntry;
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: X509SVIDResponse_FederatedBundlesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<X509SVIDResponse_FederatedBundlesEntry>
  ): X509SVIDResponse_FederatedBundlesEntry {
    const message = {
      ...baseX509SVIDResponse_FederatedBundlesEntry,
    } as X509SVIDResponse_FederatedBundlesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseX509SVID: object = { spiffeId: "", hint: "" };

export const X509SVID = {
  encode(
    message: X509SVID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spiffeId !== "") {
      writer.uint32(10).string(message.spiffeId);
    }
    if (message.x509Svid.length !== 0) {
      writer.uint32(18).bytes(message.x509Svid);
    }
    if (message.x509SvidKey.length !== 0) {
      writer.uint32(26).bytes(message.x509SvidKey);
    }
    if (message.bundle.length !== 0) {
      writer.uint32(34).bytes(message.bundle);
    }
    if (message.hint !== "") {
      writer.uint32(42).string(message.hint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): X509SVID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseX509SVID } as X509SVID;
    message.x509Svid = new Uint8Array();
    message.x509SvidKey = new Uint8Array();
    message.bundle = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spiffeId = reader.string();
          break;
        case 2:
          message.x509Svid = reader.bytes();
          break;
        case 3:
          message.x509SvidKey = reader.bytes();
          break;
        case 4:
          message.bundle = reader.bytes();
          break;
        case 5:
          message.hint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): X509SVID {
    const message = { ...baseX509SVID } as X509SVID;
    message.x509Svid = new Uint8Array();
    message.x509SvidKey = new Uint8Array();
    message.bundle = new Uint8Array();
    if (object.spiffeId !== undefined && object.spiffeId !== null) {
      message.spiffeId = String(object.spiffeId);
    } else {
      message.spiffeId = "";
    }
    if (object.x509Svid !== undefined && object.x509Svid !== null) {
      message.x509Svid = bytesFromBase64(object.x509Svid);
    }
    if (object.x509SvidKey !== undefined && object.x509SvidKey !== null) {
      message.x509SvidKey = bytesFromBase64(object.x509SvidKey);
    }
    if (object.bundle !== undefined && object.bundle !== null) {
      message.bundle = bytesFromBase64(object.bundle);
    }
    if (object.hint !== undefined && object.hint !== null) {
      message.hint = String(object.hint);
    } else {
      message.hint = "";
    }
    return message;
  },

  toJSON(message: X509SVID): unknown {
    const obj: any = {};
    message.spiffeId !== undefined && (obj.spiffeId = message.spiffeId);
    message.x509Svid !== undefined &&
      (obj.x509Svid = base64FromBytes(
        message.x509Svid !== undefined ? message.x509Svid : new Uint8Array()
      ));
    message.x509SvidKey !== undefined &&
      (obj.x509SvidKey = base64FromBytes(
        message.x509SvidKey !== undefined
          ? message.x509SvidKey
          : new Uint8Array()
      ));
    message.bundle !== undefined &&
      (obj.bundle = base64FromBytes(
        message.bundle !== undefined ? message.bundle : new Uint8Array()
      ));
    message.hint !== undefined && (obj.hint = message.hint);
    return obj;
  },

  fromPartial(object: DeepPartial<X509SVID>): X509SVID {
    const message = { ...baseX509SVID } as X509SVID;
    if (object.spiffeId !== undefined && object.spiffeId !== null) {
      message.spiffeId = object.spiffeId;
    } else {
      message.spiffeId = "";
    }
    if (object.x509Svid !== undefined && object.x509Svid !== null) {
      message.x509Svid = object.x509Svid;
    } else {
      message.x509Svid = new Uint8Array();
    }
    if (object.x509SvidKey !== undefined && object.x509SvidKey !== null) {
      message.x509SvidKey = object.x509SvidKey;
    } else {
      message.x509SvidKey = new Uint8Array();
    }
    if (object.bundle !== undefined && object.bundle !== null) {
      message.bundle = object.bundle;
    } else {
      message.bundle = new Uint8Array();
    }
    if (object.hint !== undefined && object.hint !== null) {
      message.hint = object.hint;
    } else {
      message.hint = "";
    }
    return message;
  },
};

const baseX509BundlesRequest: object = {};

export const X509BundlesRequest = {
  encode(
    _: X509BundlesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): X509BundlesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseX509BundlesRequest } as X509BundlesRequest;
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

  fromJSON(_: any): X509BundlesRequest {
    const message = { ...baseX509BundlesRequest } as X509BundlesRequest;
    return message;
  },

  toJSON(_: X509BundlesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<X509BundlesRequest>): X509BundlesRequest {
    const message = { ...baseX509BundlesRequest } as X509BundlesRequest;
    return message;
  },
};

const baseX509BundlesResponse: object = {};

export const X509BundlesResponse = {
  encode(
    message: X509BundlesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.crl) {
      writer.uint32(10).bytes(v!);
    }
    Object.entries(message.bundles).forEach(([key, value]) => {
      X509BundlesResponse_BundlesEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): X509BundlesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseX509BundlesResponse } as X509BundlesResponse;
    message.crl = [];
    message.bundles = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crl.push(reader.bytes());
          break;
        case 2:
          const entry2 = X509BundlesResponse_BundlesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.bundles[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): X509BundlesResponse {
    const message = { ...baseX509BundlesResponse } as X509BundlesResponse;
    message.crl = [];
    message.bundles = {};
    if (object.crl !== undefined && object.crl !== null) {
      for (const e of object.crl) {
        message.crl.push(bytesFromBase64(e));
      }
    }
    if (object.bundles !== undefined && object.bundles !== null) {
      Object.entries(object.bundles).forEach(([key, value]) => {
        message.bundles[key] = bytesFromBase64(value as string);
      });
    }
    return message;
  },

  toJSON(message: X509BundlesResponse): unknown {
    const obj: any = {};
    if (message.crl) {
      obj.crl = message.crl.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.crl = [];
    }
    obj.bundles = {};
    if (message.bundles) {
      Object.entries(message.bundles).forEach(([k, v]) => {
        obj.bundles[k] = base64FromBytes(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<X509BundlesResponse>): X509BundlesResponse {
    const message = { ...baseX509BundlesResponse } as X509BundlesResponse;
    message.crl = [];
    message.bundles = {};
    if (object.crl !== undefined && object.crl !== null) {
      for (const e of object.crl) {
        message.crl.push(e);
      }
    }
    if (object.bundles !== undefined && object.bundles !== null) {
      Object.entries(object.bundles).forEach(([key, value]) => {
        if (value !== undefined) {
          message.bundles[key] = value;
        }
      });
    }
    return message;
  },
};

const baseX509BundlesResponse_BundlesEntry: object = { key: "" };

export const X509BundlesResponse_BundlesEntry = {
  encode(
    message: X509BundlesResponse_BundlesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): X509BundlesResponse_BundlesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseX509BundlesResponse_BundlesEntry,
    } as X509BundlesResponse_BundlesEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): X509BundlesResponse_BundlesEntry {
    const message = {
      ...baseX509BundlesResponse_BundlesEntry,
    } as X509BundlesResponse_BundlesEntry;
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: X509BundlesResponse_BundlesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<X509BundlesResponse_BundlesEntry>
  ): X509BundlesResponse_BundlesEntry {
    const message = {
      ...baseX509BundlesResponse_BundlesEntry,
    } as X509BundlesResponse_BundlesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseJWTSVIDRequest: object = { audience: "", spiffeId: "" };

export const JWTSVIDRequest = {
  encode(
    message: JWTSVIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.audience) {
      writer.uint32(10).string(v!);
    }
    if (message.spiffeId !== "") {
      writer.uint32(18).string(message.spiffeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JWTSVIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJWTSVIDRequest } as JWTSVIDRequest;
    message.audience = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audience.push(reader.string());
          break;
        case 2:
          message.spiffeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JWTSVIDRequest {
    const message = { ...baseJWTSVIDRequest } as JWTSVIDRequest;
    message.audience = [];
    if (object.audience !== undefined && object.audience !== null) {
      for (const e of object.audience) {
        message.audience.push(String(e));
      }
    }
    if (object.spiffeId !== undefined && object.spiffeId !== null) {
      message.spiffeId = String(object.spiffeId);
    } else {
      message.spiffeId = "";
    }
    return message;
  },

  toJSON(message: JWTSVIDRequest): unknown {
    const obj: any = {};
    if (message.audience) {
      obj.audience = message.audience.map((e) => e);
    } else {
      obj.audience = [];
    }
    message.spiffeId !== undefined && (obj.spiffeId = message.spiffeId);
    return obj;
  },

  fromPartial(object: DeepPartial<JWTSVIDRequest>): JWTSVIDRequest {
    const message = { ...baseJWTSVIDRequest } as JWTSVIDRequest;
    message.audience = [];
    if (object.audience !== undefined && object.audience !== null) {
      for (const e of object.audience) {
        message.audience.push(e);
      }
    }
    if (object.spiffeId !== undefined && object.spiffeId !== null) {
      message.spiffeId = object.spiffeId;
    } else {
      message.spiffeId = "";
    }
    return message;
  },
};

const baseJWTSVIDResponse: object = {};

export const JWTSVIDResponse = {
  encode(
    message: JWTSVIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.svids) {
      JWTSVID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JWTSVIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJWTSVIDResponse } as JWTSVIDResponse;
    message.svids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.svids.push(JWTSVID.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JWTSVIDResponse {
    const message = { ...baseJWTSVIDResponse } as JWTSVIDResponse;
    message.svids = [];
    if (object.svids !== undefined && object.svids !== null) {
      for (const e of object.svids) {
        message.svids.push(JWTSVID.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: JWTSVIDResponse): unknown {
    const obj: any = {};
    if (message.svids) {
      obj.svids = message.svids.map((e) => (e ? JWTSVID.toJSON(e) : undefined));
    } else {
      obj.svids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<JWTSVIDResponse>): JWTSVIDResponse {
    const message = { ...baseJWTSVIDResponse } as JWTSVIDResponse;
    message.svids = [];
    if (object.svids !== undefined && object.svids !== null) {
      for (const e of object.svids) {
        message.svids.push(JWTSVID.fromPartial(e));
      }
    }
    return message;
  },
};

const baseJWTSVID: object = { spiffeId: "", svid: "", hint: "" };

export const JWTSVID = {
  encode(
    message: JWTSVID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spiffeId !== "") {
      writer.uint32(10).string(message.spiffeId);
    }
    if (message.svid !== "") {
      writer.uint32(18).string(message.svid);
    }
    if (message.hint !== "") {
      writer.uint32(26).string(message.hint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JWTSVID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJWTSVID } as JWTSVID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spiffeId = reader.string();
          break;
        case 2:
          message.svid = reader.string();
          break;
        case 3:
          message.hint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JWTSVID {
    const message = { ...baseJWTSVID } as JWTSVID;
    if (object.spiffeId !== undefined && object.spiffeId !== null) {
      message.spiffeId = String(object.spiffeId);
    } else {
      message.spiffeId = "";
    }
    if (object.svid !== undefined && object.svid !== null) {
      message.svid = String(object.svid);
    } else {
      message.svid = "";
    }
    if (object.hint !== undefined && object.hint !== null) {
      message.hint = String(object.hint);
    } else {
      message.hint = "";
    }
    return message;
  },

  toJSON(message: JWTSVID): unknown {
    const obj: any = {};
    message.spiffeId !== undefined && (obj.spiffeId = message.spiffeId);
    message.svid !== undefined && (obj.svid = message.svid);
    message.hint !== undefined && (obj.hint = message.hint);
    return obj;
  },

  fromPartial(object: DeepPartial<JWTSVID>): JWTSVID {
    const message = { ...baseJWTSVID } as JWTSVID;
    if (object.spiffeId !== undefined && object.spiffeId !== null) {
      message.spiffeId = object.spiffeId;
    } else {
      message.spiffeId = "";
    }
    if (object.svid !== undefined && object.svid !== null) {
      message.svid = object.svid;
    } else {
      message.svid = "";
    }
    if (object.hint !== undefined && object.hint !== null) {
      message.hint = object.hint;
    } else {
      message.hint = "";
    }
    return message;
  },
};

const baseJWTBundlesRequest: object = {};

export const JWTBundlesRequest = {
  encode(
    _: JWTBundlesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JWTBundlesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJWTBundlesRequest } as JWTBundlesRequest;
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

  fromJSON(_: any): JWTBundlesRequest {
    const message = { ...baseJWTBundlesRequest } as JWTBundlesRequest;
    return message;
  },

  toJSON(_: JWTBundlesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<JWTBundlesRequest>): JWTBundlesRequest {
    const message = { ...baseJWTBundlesRequest } as JWTBundlesRequest;
    return message;
  },
};

const baseJWTBundlesResponse: object = {};

export const JWTBundlesResponse = {
  encode(
    message: JWTBundlesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.bundles).forEach(([key, value]) => {
      JWTBundlesResponse_BundlesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JWTBundlesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJWTBundlesResponse } as JWTBundlesResponse;
    message.bundles = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = JWTBundlesResponse_BundlesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.bundles[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JWTBundlesResponse {
    const message = { ...baseJWTBundlesResponse } as JWTBundlesResponse;
    message.bundles = {};
    if (object.bundles !== undefined && object.bundles !== null) {
      Object.entries(object.bundles).forEach(([key, value]) => {
        message.bundles[key] = bytesFromBase64(value as string);
      });
    }
    return message;
  },

  toJSON(message: JWTBundlesResponse): unknown {
    const obj: any = {};
    obj.bundles = {};
    if (message.bundles) {
      Object.entries(message.bundles).forEach(([k, v]) => {
        obj.bundles[k] = base64FromBytes(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<JWTBundlesResponse>): JWTBundlesResponse {
    const message = { ...baseJWTBundlesResponse } as JWTBundlesResponse;
    message.bundles = {};
    if (object.bundles !== undefined && object.bundles !== null) {
      Object.entries(object.bundles).forEach(([key, value]) => {
        if (value !== undefined) {
          message.bundles[key] = value;
        }
      });
    }
    return message;
  },
};

const baseJWTBundlesResponse_BundlesEntry: object = { key: "" };

export const JWTBundlesResponse_BundlesEntry = {
  encode(
    message: JWTBundlesResponse_BundlesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): JWTBundlesResponse_BundlesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseJWTBundlesResponse_BundlesEntry,
    } as JWTBundlesResponse_BundlesEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JWTBundlesResponse_BundlesEntry {
    const message = {
      ...baseJWTBundlesResponse_BundlesEntry,
    } as JWTBundlesResponse_BundlesEntry;
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: JWTBundlesResponse_BundlesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<JWTBundlesResponse_BundlesEntry>
  ): JWTBundlesResponse_BundlesEntry {
    const message = {
      ...baseJWTBundlesResponse_BundlesEntry,
    } as JWTBundlesResponse_BundlesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseValidateJWTSVIDRequest: object = { audience: "", svid: "" };

export const ValidateJWTSVIDRequest = {
  encode(
    message: ValidateJWTSVIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.audience !== "") {
      writer.uint32(10).string(message.audience);
    }
    if (message.svid !== "") {
      writer.uint32(18).string(message.svid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ValidateJWTSVIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidateJWTSVIDRequest } as ValidateJWTSVIDRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audience = reader.string();
          break;
        case 2:
          message.svid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidateJWTSVIDRequest {
    const message = { ...baseValidateJWTSVIDRequest } as ValidateJWTSVIDRequest;
    if (object.audience !== undefined && object.audience !== null) {
      message.audience = String(object.audience);
    } else {
      message.audience = "";
    }
    if (object.svid !== undefined && object.svid !== null) {
      message.svid = String(object.svid);
    } else {
      message.svid = "";
    }
    return message;
  },

  toJSON(message: ValidateJWTSVIDRequest): unknown {
    const obj: any = {};
    message.audience !== undefined && (obj.audience = message.audience);
    message.svid !== undefined && (obj.svid = message.svid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ValidateJWTSVIDRequest>
  ): ValidateJWTSVIDRequest {
    const message = { ...baseValidateJWTSVIDRequest } as ValidateJWTSVIDRequest;
    if (object.audience !== undefined && object.audience !== null) {
      message.audience = object.audience;
    } else {
      message.audience = "";
    }
    if (object.svid !== undefined && object.svid !== null) {
      message.svid = object.svid;
    } else {
      message.svid = "";
    }
    return message;
  },
};

const baseValidateJWTSVIDResponse: object = { spiffeId: "" };

export const ValidateJWTSVIDResponse = {
  encode(
    message: ValidateJWTSVIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spiffeId !== "") {
      writer.uint32(10).string(message.spiffeId);
    }
    if (message.claims !== undefined) {
      Struct.encode(message.claims, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ValidateJWTSVIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseValidateJWTSVIDResponse,
    } as ValidateJWTSVIDResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spiffeId = reader.string();
          break;
        case 2:
          message.claims = Struct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidateJWTSVIDResponse {
    const message = {
      ...baseValidateJWTSVIDResponse,
    } as ValidateJWTSVIDResponse;
    if (object.spiffeId !== undefined && object.spiffeId !== null) {
      message.spiffeId = String(object.spiffeId);
    } else {
      message.spiffeId = "";
    }
    if (object.claims !== undefined && object.claims !== null) {
      message.claims = Struct.fromJSON(object.claims);
    } else {
      message.claims = undefined;
    }
    return message;
  },

  toJSON(message: ValidateJWTSVIDResponse): unknown {
    const obj: any = {};
    message.spiffeId !== undefined && (obj.spiffeId = message.spiffeId);
    message.claims !== undefined &&
      (obj.claims = message.claims ? Struct.toJSON(message.claims) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ValidateJWTSVIDResponse>
  ): ValidateJWTSVIDResponse {
    const message = {
      ...baseValidateJWTSVIDResponse,
    } as ValidateJWTSVIDResponse;
    if (object.spiffeId !== undefined && object.spiffeId !== null) {
      message.spiffeId = object.spiffeId;
    } else {
      message.spiffeId = "";
    }
    if (object.claims !== undefined && object.claims !== null) {
      message.claims = Struct.fromPartial(object.claims);
    } else {
      message.claims = undefined;
    }
    return message;
  },
};

/**
 * ///////////////////////////////////////////////////////////////////////
 * X509-SVID Profile
 * ///////////////////////////////////////////////////////////////////////
 */
export interface SpiffeWorkloadAPI {
  /**
   * Fetch X.509-SVIDs for all SPIFFE identities the workload is entitled to,
   * as well as related information like trust bundles and CRLs. As this
   * information changes, subsequent messages will be streamed from the
   * server.
   */
  FetchX509SVID(request: X509SVIDRequest): Observable<X509SVIDResponse>;
  /**
   * Fetch trust bundles and CRLs. Useful for clients that only need to
   * validate SVIDs without obtaining an SVID for themself. As this
   * information changes, subsequent messages will be streamed from the
   * server.
   */
  FetchX509Bundles(
    request: X509BundlesRequest
  ): Observable<X509BundlesResponse>;
  /**
   * Fetch JWT-SVIDs for all SPIFFE identities the workload is entitled to,
   * for the requested audience. If an optional SPIFFE ID is requested, only
   * the JWT-SVID for that SPIFFE ID is returned.
   */
  FetchJWTSVID(request: JWTSVIDRequest): Promise<JWTSVIDResponse>;
  /**
   * Fetches the JWT bundles, formatted as JWKS documents, keyed by the
   * SPIFFE ID of the trust domain. As this information changes, subsequent
   * messages will be streamed from the server.
   */
  FetchJWTBundles(request: JWTBundlesRequest): Observable<JWTBundlesResponse>;
  /**
   * Validates a JWT-SVID against the requested audience. Returns the SPIFFE
   * ID of the JWT-SVID and JWT claims.
   */
  ValidateJWTSVID(
    request: ValidateJWTSVIDRequest
  ): Promise<ValidateJWTSVIDResponse>;
}

export class SpiffeWorkloadAPIClientImpl implements SpiffeWorkloadAPI {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  FetchX509SVID(request: X509SVIDRequest): Promise<X509SVIDResponse> {
    const data = X509SVIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "SpiffeWorkloadAPI",
      "FetchX509SVID",
      data
    );
    return promise.then((data) =>
      X509SVIDResponse.decode(new _m0.Reader(data))
    );
  }

  FetchX509Bundles(request: X509BundlesRequest): Promise<X509BundlesResponse> {
    const data = X509BundlesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "SpiffeWorkloadAPI",
      "FetchX509Bundles",
      data
    );
    return promise.then((data) =>
      X509BundlesResponse.decode(new _m0.Reader(data))
    );
  }

  FetchJWTSVID(request: JWTSVIDRequest): Promise<JWTSVIDResponse> {
    const data = JWTSVIDRequest.encode(request).finish();
    const promise = this.rpc.request("SpiffeWorkloadAPI", "FetchJWTSVID", data);
    return promise.then((data) => JWTSVIDResponse.decode(new _m0.Reader(data)));
  }

  FetchJWTBundles(request: JWTBundlesRequest): Promise<JWTBundlesResponse> {
    const data = JWTBundlesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "SpiffeWorkloadAPI",
      "FetchJWTBundles",
      data
    );
    return promise.then((data) =>
      JWTBundlesResponse.decode(new _m0.Reader(data))
    );
  }

  ValidateJWTSVID(
    request: ValidateJWTSVIDRequest
  ): Promise<ValidateJWTSVIDResponse> {
    const data = ValidateJWTSVIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "SpiffeWorkloadAPI",
      "ValidateJWTSVID",
      data
    );
    return promise.then((data) =>
      ValidateJWTSVIDResponse.decode(new _m0.Reader(data))
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
