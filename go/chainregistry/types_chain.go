package chainregistry

// Chain represents chain.schema.json root object.
// Incrementally expanded to fully cover the schema. In Go, optional fields are pointers.
type Chain struct {
	DollarSchema       string         `json:"$schema"`
	ChainName          string         `json:"chain_name"`
	ChainType          string         `json:"chain_type"`
	Status             string         `json:"status"`

	// Optional fields
	ChainID            *string        `json:"chain_id,omitempty"`
	PreForkChainName   *string        `json:"pre_fork_chain_name,omitempty"`
	PrettyName         *string        `json:"pretty_name,omitempty"`
	Website            *string        `json:"website,omitempty"`
	NetworkType        *string        `json:"network_type,omitempty"`
	Bech32Prefix       *string        `json:"bech32_prefix,omitempty"`
	Bech32Config       *Bech32Config  `json:"bech32_config,omitempty"`
	LogoURIs           *LogoURIs      `json:"logo_URIs,omitempty"`
	Description        *string        `json:"description,omitempty"`
	Peers              *Peers         `json:"peers,omitempty"`
	Apis               *Apis          `json:"apis,omitempty"`
	Explorers          []Explorer     `json:"explorers,omitempty"`
	Keywords           []string       `json:"keywords,omitempty"`
	ExtraCodecs        []string       `json:"extra_codecs,omitempty"`
}

// Bech32Config mirrors the bech32_config object in the schema.
type Bech32Config struct {
	Bech32PrefixAccAddr  *string `json:"bech32PrefixAccAddr,omitempty"`
	Bech32PrefixAccPub   *string `json:"bech32PrefixAccPub,omitempty"`
	Bech32PrefixValAddr  *string `json:"bech32PrefixValAddr,omitempty"`
	Bech32PrefixValPub   *string `json:"bech32PrefixValPub,omitempty"`
	Bech32PrefixConsAddr *string `json:"bech32PrefixConsAddr,omitempty"`
	Bech32PrefixConsPub  *string `json:"bech32PrefixConsPub,omitempty"`
}

// LogoURIs mirrors the logo_URIs object in the schema.
type LogoURIs struct {
	Png *string `json:"png,omitempty"`
	Svg *string `json:"svg,omitempty"`
}

// Peers mirrors the peers object with seeds and persistent_peers.
type Peers struct {
	Seeds           []Peer `json:"seeds,omitempty"`
	PersistentPeers []Peer `json:"persistent_peers,omitempty"`
}

// Peer mirrors the $defs.peer type.
type Peer struct {
	ID       string  `json:"id"`
	Address  string  `json:"address"`
	Provider *string `json:"provider,omitempty"`
}

// Apis mirrors the apis object with rpc, rest, grpc, etc.
type Apis struct {
	RPC            []Endpoint `json:"rpc,omitempty"`
	REST           []Endpoint `json:"rest,omitempty"`
	GRPC           []Endpoint `json:"grpc,omitempty"`
	WSS            []Endpoint `json:"wss,omitempty"`
	GRPCWeb        []Endpoint `json:"grpc-web,omitempty"`
	EVMHTTPJSONRPC []Endpoint `json:"evm-http-jsonrpc,omitempty"`
}

// Endpoint mirrors the $defs.endpoint type.
type Endpoint struct {
	Address string  `json:"address"`
	Provider *string `json:"provider,omitempty"`
	Archive  *bool   `json:"archive,omitempty"`
}

// Explorer mirrors the $defs.explorer type.
type Explorer struct {
	Kind          *string `json:"kind,omitempty"`
	URL           *string `json:"url,omitempty"`
	TxPage        *string `json:"tx_page,omitempty"`
	AccountPage   *string `json:"account_page,omitempty"`
	ValidatorPage *string `json:"validator_page,omitempty"`
	ProposalPage  *string `json:"proposal_page,omitempty"`
	BlockPage     *string `json:"block_page,omitempty"`
}
