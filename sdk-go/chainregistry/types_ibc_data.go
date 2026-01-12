package chainregistry

// IBCData represents ibc_data.schema.json root object.
type IBCData struct {
	DollarSchema string           `json:"$schema"`
	Chain1      IBCChainInfo     `json:"chain_1"`
	Chain2      IBCChainInfo     `json:"chain_2"`
	Channels    []IBCChannel     `json:"channels"`
	Operators   []IBCOperator    `json:"operators,omitempty"`
}

// IBCChainInfo mirrors $defs.chain_info
// required: chain_name, chain_id, client_id, connection_id
// additionalProperties: false (not enforced at runtime)
type IBCChainInfo struct {
	ChainName     string `json:"chain_name"`
	ChainID       string `json:"chain_id"`
	ClientID      string `json:"client_id"`
	ConnectionID  string `json:"connection_id"`
}

// IBCChannel represents an entry in the channels array.
// required: chain_1, chain_2, ordering, version
type IBCChannel struct {
	Chain1      IBCChannelInfo `json:"chain_1"`
	Chain2      IBCChannelInfo `json:"chain_2"`
	Ordering    string         `json:"ordering"`
	Version     string         `json:"version"`
	FeeVersion  *string        `json:"fee_version,omitempty"`
	Tags        *IBCTags       `json:"tags,omitempty"`
}

// IBCChannelInfo mirrors $defs.channel_info
// required: channel_id, port_id
// optional: client_id, connection_id
type IBCChannelInfo struct {
	ChannelID     string  `json:"channel_id"`
	PortID        string  `json:"port_id"`
	ClientID      *string `json:"client_id,omitempty"`
	ConnectionID  *string `json:"connection_id,omitempty"`
}

// IBCTags mirrors the tags object in channels entries.
// properties: preferred (bool), status (enum string)
type IBCTags struct {
	Preferred *bool  `json:"preferred,omitempty"`
	Status    *string `json:"status,omitempty"`
}

// IBCOperator mirrors an entry in operators.
type IBCOperator struct {
	Chain1        IBCOperatorInfo `json:"chain_1"`
	Chain2        IBCOperatorInfo `json:"chain_2"`
	Memo          string          `json:"memo"`
	Name          string          `json:"name"`
	DiscordHandle *string         `json:"discord_handle,omitempty"`
}

// IBCOperatorInfo per $defs.chain_operator_info (address optional)
type IBCOperatorInfo struct {
	Address *string `json:"address,omitempty"`
}
