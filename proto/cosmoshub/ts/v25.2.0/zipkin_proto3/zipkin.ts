/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "zipkin.proto3";

/**
 * A span is a single-host view of an operation. A trace is a series of spans
 * (often RPC calls) which nest to form a latency tree. Spans are in the same
 * trace when they share the same trace ID. The parent_id field establishes the
 * position of one span in the tree.
 *
 * The root span is where parent_id is Absent and usually has the longest
 * duration in the trace. However, nested asynchronous work can materialize as
 * child spans whose duration exceed the root span.
 *
 * Spans usually represent remote activity such as RPC calls, or messaging
 * producers and consumers. However, they can also represent in-process
 * activity in any position of the trace. For example, a root span could
 * represent a server receiving an initial client request. A root span could
 * also represent a scheduled job that has no remote context.
 *
 * Encoding notes:
 *
 * Epoch timestamp are encoded fixed64 as varint would also be 8 bytes, and more
 * expensive to encode and size. Duration is stored uint64, as often the numbers
 * are quite small.
 *
 * Default values are ok, as only natural numbers are used. For example, zero is
 * an invalid timestamp and an invalid duration, false values for debug or shared
 * are ignorable, and zero-length strings also coerce to null.
 *
 * The next id is 14.
 *
 * Note fields up to 15 take 1 byte to encode. Take care when adding new fields
 * https://developers.google.com/protocol-buffers/docs/proto3#assigning-tags
 */
export interface Span {
  /**
   * Randomly generated, unique identifier for a trace, set on all spans within
   * it.
   *
   * This field is required and encoded as 8 or 16 opaque bytes.
   */
  traceId: Uint8Array;
  /** The parent span ID or absent if this the root span in a trace. */
  parentId: Uint8Array;
  /**
   * Unique identifier for this operation within the trace.
   *
   * This field is required and encoded as 8 opaque bytes.
   */
  id: Uint8Array;
  /** When present, used to interpret remote_endpoint */
  kind: Span_Kind;
  /**
   * The logical operation this span represents in lowercase (e.g. rpc method).
   * Leave absent if unknown.
   *
   * As these are lookup labels, take care to ensure names are low cardinality.
   * For example, do not embed variables into the name.
   */
  name: string;
  /**
   * Epoch microseconds of the start of this span, possibly absent if
   * incomplete.
   *
   * For example, 1502787600000000 corresponds to 2017-08-15 09:00 UTC
   *
   * This value should be set directly by instrumentation, using the most
   * precise value possible. For example, gettimeofday or multiplying epoch
   * millis by 1000.
   *
   * There are three known edge-cases where this could be reported absent.
   * - A span was allocated but never started (ex not yet received a timestamp)
   * - The span's start event was lost
   * - Data about a completed span (ex tags) were sent after the fact
   */
  timestamp: number;
  /**
   * Duration in microseconds of the critical path, if known. Durations of less
   * than one are rounded up. Duration of children can be longer than their
   * parents due to asynchronous operations.
   *
   * For example 150 milliseconds is 150000 microseconds.
   */
  duration: number;
  /**
   * The host that recorded this span, primarily for query by service name.
   *
   * Instrumentation should always record this. Usually, absent implies late
   * data. The IP address corresponding to this is usually the site local or
   * advertised service address. When present, the port indicates the listen
   * port.
   */
  localEndpoint: Endpoint | undefined;
  /**
   * When an RPC (or messaging) span, indicates the other side of the
   * connection.
   *
   * By recording the remote endpoint, your trace will contain network context
   * even if the peer is not tracing. For example, you can record the IP from
   * the "X-Forwarded-For" header or the service name and socket of a remote
   * peer.
   */
  remoteEndpoint: Endpoint | undefined;
  /** Associates events that explain latency with the time they happened. */
  annotations: Annotation[];
  /**
   * Tags give your span context for search, viewing and analysis.
   *
   * For example, a key "your_app.version" would let you lookup traces by
   * version. A tag "sql.query" isn't searchable, but it can help in debugging
   * when viewing a trace.
   */
  tags: { [key: string]: string };
  /**
   * True is a request to store this span even if it overrides sampling policy.
   *
   * This is true when the "X-B3-Flags" header has a value of 1.
   */
  debug: boolean;
  /**
   * True if we are contributing to a span started by another tracer (ex on a
   * different host).
   */
  shared: boolean;
}

/**
 * When present, kind clarifies timestamp, duration and remote_endpoint. When
 * absent, the span is local or incomplete. Unlike client and server, there
 * is no direct critical path latency relationship between producer and
 * consumer spans.
 */
export enum Span_Kind {
  /** SPAN_KIND_UNSPECIFIED - Default value interpreted as absent. */
  SPAN_KIND_UNSPECIFIED = 0,
  /**
   * CLIENT - The span represents the client side of an RPC operation, implying the
   * following:
   *
   * timestamp is the moment a request was sent to the server.
   * duration is the delay until a response or an error was received.
   * remote_endpoint is the server.
   */
  CLIENT = 1,
  /**
   * SERVER - The span represents the server side of an RPC operation, implying the
   * following:
   *
   * timestamp is the moment a client request was received.
   * duration is the delay until a response was sent or an error.
   * remote_endpoint is the client.
   */
  SERVER = 2,
  /**
   * PRODUCER - The span represents production of a message to a remote broker, implying
   * the following:
   *
   * timestamp is the moment a message was sent to a destination.
   * duration is the delay sending the message, such as batching.
   * remote_endpoint is the broker.
   */
  PRODUCER = 3,
  /**
   * CONSUMER - The span represents consumption of a message from a remote broker, not
   * time spent servicing it. For example, a message processor would be an
   * in-process child span of a consumer. Consumer spans imply the following:
   *
   * timestamp is the moment a message was received from an origin.
   * duration is the delay consuming the message, such as from backlog.
   * remote_endpoint is the broker.
   */
  CONSUMER = 4,
  UNRECOGNIZED = -1,
}

export function span_KindFromJSON(object: any): Span_Kind {
  switch (object) {
    case 0:
    case "SPAN_KIND_UNSPECIFIED":
      return Span_Kind.SPAN_KIND_UNSPECIFIED;
    case 1:
    case "CLIENT":
      return Span_Kind.CLIENT;
    case 2:
    case "SERVER":
      return Span_Kind.SERVER;
    case 3:
    case "PRODUCER":
      return Span_Kind.PRODUCER;
    case 4:
    case "CONSUMER":
      return Span_Kind.CONSUMER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Span_Kind.UNRECOGNIZED;
  }
}

export function span_KindToJSON(object: Span_Kind): string {
  switch (object) {
    case Span_Kind.SPAN_KIND_UNSPECIFIED:
      return "SPAN_KIND_UNSPECIFIED";
    case Span_Kind.CLIENT:
      return "CLIENT";
    case Span_Kind.SERVER:
      return "SERVER";
    case Span_Kind.PRODUCER:
      return "PRODUCER";
    case Span_Kind.CONSUMER:
      return "CONSUMER";
    default:
      return "UNKNOWN";
  }
}

export interface Span_TagsEntry {
  key: string;
  value: string;
}

/**
 * The network context of a node in the service graph.
 *
 * The next id is 5.
 */
export interface Endpoint {
  /**
   * Lower-case label of this node in the service graph, such as "favstar".
   * Leave absent if unknown.
   *
   * This is a primary label for trace lookup and aggregation, so it should be
   * intuitive and consistent. Many use a name from service discovery.
   */
  serviceName: string;
  /**
   * 4 byte representation of the primary IPv4 address associated with this
   * connection. Absent if unknown.
   */
  ipv4: Uint8Array;
  /**
   * 16 byte representation of the primary IPv6 address associated with this
   * connection. Absent if unknown.
   *
   * Prefer using the ipv4 field for mapped addresses.
   */
  ipv6: Uint8Array;
  /**
   * Depending on context, this could be a listen port or the client-side of a
   * socket. Absent if unknown.
   */
  port: number;
}

/**
 * Associates an event that explains latency with a timestamp.
 * Unlike log statements, annotations are often codes. Ex. "ws" for WireSend
 *
 * The next id is 3.
 */
export interface Annotation {
  /**
   * Epoch microseconds of this event.
   *
   * For example, 1502787600000000 corresponds to 2017-08-15 09:00 UTC
   *
   * This value should be set directly by instrumentation, using the most
   * precise value possible. For example, gettimeofday or multiplying epoch
   * millis by 1000.
   */
  timestamp: number;
  /**
   * Usually a short tag indicating an event, like "error"
   *
   * While possible to add larger data, such as garbage collection details, low
   * cardinality event names both keep the size of spans down and also are easy
   * to search against.
   */
  value: string;
}

/**
 * A list of spans with possibly different trace ids, in no particular order.
 *
 * This is used for all transports: POST, Kafka messages etc. No other fields
 * are expected, This message facilitates the mechanics of encoding a list, as
 * a field number is required. The name of this type is the same in the OpenApi
 * aka Swagger specification. https://zipkin.io/zipkin-api/#/default/post_spans
 */
export interface ListOfSpans {
  spans: Span[];
}

const baseSpan: object = {
  kind: 0,
  name: "",
  timestamp: 0,
  duration: 0,
  debug: false,
  shared: false,
};

export const Span = {
  encode(message: Span, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traceId.length !== 0) {
      writer.uint32(10).bytes(message.traceId);
    }
    if (message.parentId.length !== 0) {
      writer.uint32(18).bytes(message.parentId);
    }
    if (message.id.length !== 0) {
      writer.uint32(26).bytes(message.id);
    }
    if (message.kind !== 0) {
      writer.uint32(32).int32(message.kind);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.timestamp !== 0) {
      writer.uint32(49).fixed64(message.timestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(56).uint64(message.duration);
    }
    if (message.localEndpoint !== undefined) {
      Endpoint.encode(message.localEndpoint, writer.uint32(66).fork()).ldelim();
    }
    if (message.remoteEndpoint !== undefined) {
      Endpoint.encode(
        message.remoteEndpoint,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.annotations) {
      Annotation.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    Object.entries(message.tags).forEach(([key, value]) => {
      Span_TagsEntry.encode(
        { key: key as any, value },
        writer.uint32(90).fork()
      ).ldelim();
    });
    if (message.debug === true) {
      writer.uint32(96).bool(message.debug);
    }
    if (message.shared === true) {
      writer.uint32(104).bool(message.shared);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Span {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpan } as Span;
    message.annotations = [];
    message.tags = {};
    message.traceId = new Uint8Array();
    message.parentId = new Uint8Array();
    message.id = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.traceId = reader.bytes();
          break;
        case 2:
          message.parentId = reader.bytes();
          break;
        case 3:
          message.id = reader.bytes();
          break;
        case 4:
          message.kind = reader.int32() as any;
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.timestamp = longToNumber(reader.fixed64() as Long);
          break;
        case 7:
          message.duration = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.localEndpoint = Endpoint.decode(reader, reader.uint32());
          break;
        case 9:
          message.remoteEndpoint = Endpoint.decode(reader, reader.uint32());
          break;
        case 10:
          message.annotations.push(Annotation.decode(reader, reader.uint32()));
          break;
        case 11:
          const entry11 = Span_TagsEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.tags[entry11.key] = entry11.value;
          }
          break;
        case 12:
          message.debug = reader.bool();
          break;
        case 13:
          message.shared = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Span {
    const message = { ...baseSpan } as Span;
    message.annotations = [];
    message.tags = {};
    message.traceId = new Uint8Array();
    message.parentId = new Uint8Array();
    message.id = new Uint8Array();
    if (object.traceId !== undefined && object.traceId !== null) {
      message.traceId = bytesFromBase64(object.traceId);
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = bytesFromBase64(object.parentId);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = bytesFromBase64(object.id);
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = span_KindFromJSON(object.kind);
    } else {
      message.kind = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Number(object.duration);
    } else {
      message.duration = 0;
    }
    if (object.localEndpoint !== undefined && object.localEndpoint !== null) {
      message.localEndpoint = Endpoint.fromJSON(object.localEndpoint);
    } else {
      message.localEndpoint = undefined;
    }
    if (object.remoteEndpoint !== undefined && object.remoteEndpoint !== null) {
      message.remoteEndpoint = Endpoint.fromJSON(object.remoteEndpoint);
    } else {
      message.remoteEndpoint = undefined;
    }
    if (object.annotations !== undefined && object.annotations !== null) {
      for (const e of object.annotations) {
        message.annotations.push(Annotation.fromJSON(e));
      }
    }
    if (object.tags !== undefined && object.tags !== null) {
      Object.entries(object.tags).forEach(([key, value]) => {
        message.tags[key] = String(value);
      });
    }
    if (object.debug !== undefined && object.debug !== null) {
      message.debug = Boolean(object.debug);
    } else {
      message.debug = false;
    }
    if (object.shared !== undefined && object.shared !== null) {
      message.shared = Boolean(object.shared);
    } else {
      message.shared = false;
    }
    return message;
  },

  toJSON(message: Span): unknown {
    const obj: any = {};
    message.traceId !== undefined &&
      (obj.traceId = base64FromBytes(
        message.traceId !== undefined ? message.traceId : new Uint8Array()
      ));
    message.parentId !== undefined &&
      (obj.parentId = base64FromBytes(
        message.parentId !== undefined ? message.parentId : new Uint8Array()
      ));
    message.id !== undefined &&
      (obj.id = base64FromBytes(
        message.id !== undefined ? message.id : new Uint8Array()
      ));
    message.kind !== undefined && (obj.kind = span_KindToJSON(message.kind));
    message.name !== undefined && (obj.name = message.name);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.duration !== undefined && (obj.duration = message.duration);
    message.localEndpoint !== undefined &&
      (obj.localEndpoint = message.localEndpoint
        ? Endpoint.toJSON(message.localEndpoint)
        : undefined);
    message.remoteEndpoint !== undefined &&
      (obj.remoteEndpoint = message.remoteEndpoint
        ? Endpoint.toJSON(message.remoteEndpoint)
        : undefined);
    if (message.annotations) {
      obj.annotations = message.annotations.map((e) =>
        e ? Annotation.toJSON(e) : undefined
      );
    } else {
      obj.annotations = [];
    }
    obj.tags = {};
    if (message.tags) {
      Object.entries(message.tags).forEach(([k, v]) => {
        obj.tags[k] = v;
      });
    }
    message.debug !== undefined && (obj.debug = message.debug);
    message.shared !== undefined && (obj.shared = message.shared);
    return obj;
  },

  fromPartial(object: DeepPartial<Span>): Span {
    const message = { ...baseSpan } as Span;
    message.annotations = [];
    message.tags = {};
    if (object.traceId !== undefined && object.traceId !== null) {
      message.traceId = object.traceId;
    } else {
      message.traceId = new Uint8Array();
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = object.parentId;
    } else {
      message.parentId = new Uint8Array();
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = new Uint8Array();
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    } else {
      message.kind = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = 0;
    }
    if (object.localEndpoint !== undefined && object.localEndpoint !== null) {
      message.localEndpoint = Endpoint.fromPartial(object.localEndpoint);
    } else {
      message.localEndpoint = undefined;
    }
    if (object.remoteEndpoint !== undefined && object.remoteEndpoint !== null) {
      message.remoteEndpoint = Endpoint.fromPartial(object.remoteEndpoint);
    } else {
      message.remoteEndpoint = undefined;
    }
    if (object.annotations !== undefined && object.annotations !== null) {
      for (const e of object.annotations) {
        message.annotations.push(Annotation.fromPartial(e));
      }
    }
    if (object.tags !== undefined && object.tags !== null) {
      Object.entries(object.tags).forEach(([key, value]) => {
        if (value !== undefined) {
          message.tags[key] = String(value);
        }
      });
    }
    if (object.debug !== undefined && object.debug !== null) {
      message.debug = object.debug;
    } else {
      message.debug = false;
    }
    if (object.shared !== undefined && object.shared !== null) {
      message.shared = object.shared;
    } else {
      message.shared = false;
    }
    return message;
  },
};

const baseSpan_TagsEntry: object = { key: "", value: "" };

export const Span_TagsEntry = {
  encode(
    message: Span_TagsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Span_TagsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpan_TagsEntry } as Span_TagsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Span_TagsEntry {
    const message = { ...baseSpan_TagsEntry } as Span_TagsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: Span_TagsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Span_TagsEntry>): Span_TagsEntry {
    const message = { ...baseSpan_TagsEntry } as Span_TagsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseEndpoint: object = { serviceName: "", port: 0 };

export const Endpoint = {
  encode(
    message: Endpoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.ipv4.length !== 0) {
      writer.uint32(18).bytes(message.ipv4);
    }
    if (message.ipv6.length !== 0) {
      writer.uint32(26).bytes(message.ipv6);
    }
    if (message.port !== 0) {
      writer.uint32(32).int32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpoint } as Endpoint;
    message.ipv4 = new Uint8Array();
    message.ipv6 = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.ipv4 = reader.bytes();
          break;
        case 3:
          message.ipv6 = reader.bytes();
          break;
        case 4:
          message.port = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Endpoint {
    const message = { ...baseEndpoint } as Endpoint;
    message.ipv4 = new Uint8Array();
    message.ipv6 = new Uint8Array();
    if (object.serviceName !== undefined && object.serviceName !== null) {
      message.serviceName = String(object.serviceName);
    } else {
      message.serviceName = "";
    }
    if (object.ipv4 !== undefined && object.ipv4 !== null) {
      message.ipv4 = bytesFromBase64(object.ipv4);
    }
    if (object.ipv6 !== undefined && object.ipv6 !== null) {
      message.ipv6 = bytesFromBase64(object.ipv6);
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = Number(object.port);
    } else {
      message.port = 0;
    }
    return message;
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    message.serviceName !== undefined &&
      (obj.serviceName = message.serviceName);
    message.ipv4 !== undefined &&
      (obj.ipv4 = base64FromBytes(
        message.ipv4 !== undefined ? message.ipv4 : new Uint8Array()
      ));
    message.ipv6 !== undefined &&
      (obj.ipv6 = base64FromBytes(
        message.ipv6 !== undefined ? message.ipv6 : new Uint8Array()
      ));
    message.port !== undefined && (obj.port = message.port);
    return obj;
  },

  fromPartial(object: DeepPartial<Endpoint>): Endpoint {
    const message = { ...baseEndpoint } as Endpoint;
    if (object.serviceName !== undefined && object.serviceName !== null) {
      message.serviceName = object.serviceName;
    } else {
      message.serviceName = "";
    }
    if (object.ipv4 !== undefined && object.ipv4 !== null) {
      message.ipv4 = object.ipv4;
    } else {
      message.ipv4 = new Uint8Array();
    }
    if (object.ipv6 !== undefined && object.ipv6 !== null) {
      message.ipv6 = object.ipv6;
    } else {
      message.ipv6 = new Uint8Array();
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = 0;
    }
    return message;
  },
};

const baseAnnotation: object = { timestamp: 0, value: "" };

export const Annotation = {
  encode(
    message: Annotation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(9).fixed64(message.timestamp);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Annotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAnnotation } as Annotation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Annotation {
    const message = { ...baseAnnotation } as Annotation;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: Annotation): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Annotation>): Annotation {
    const message = { ...baseAnnotation } as Annotation;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseListOfSpans: object = {};

export const ListOfSpans = {
  encode(
    message: ListOfSpans,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.spans) {
      Span.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOfSpans {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListOfSpans } as ListOfSpans;
    message.spans = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spans.push(Span.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListOfSpans {
    const message = { ...baseListOfSpans } as ListOfSpans;
    message.spans = [];
    if (object.spans !== undefined && object.spans !== null) {
      for (const e of object.spans) {
        message.spans.push(Span.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListOfSpans): unknown {
    const obj: any = {};
    if (message.spans) {
      obj.spans = message.spans.map((e) => (e ? Span.toJSON(e) : undefined));
    } else {
      obj.spans = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListOfSpans>): ListOfSpans {
    const message = { ...baseListOfSpans } as ListOfSpans;
    message.spans = [];
    if (object.spans !== undefined && object.spans !== null) {
      for (const e of object.spans) {
        message.spans.push(Span.fromPartial(e));
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
