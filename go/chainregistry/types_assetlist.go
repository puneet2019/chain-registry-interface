package chainregistry

// AssetList represents assetlist.schema.json root object.
// Optional fields are pointers.
type AssetList struct {
	DollarSchema string  `json:"$schema"`
	ChainName    string  `json:"chain_name"`
	Assets       []Asset `json:"assets"`
}

// Asset mirrors $defs.asset (required subset + optionals as pointers).
type Asset struct {
	Deprecated          *bool        `json:"deprecated,omitempty"`
	Description         *string      `json:"description,omitempty"`
	ExtendedDescription *string      `json:"extended_description,omitempty"`
	DenomUnits          []DenomUnit  `json:"denom_units"`
	TypeAsset           string       `json:"type_asset"`
	Address             *string      `json:"address,omitempty"`
	Base               string       `json:"base"`
	Name               string       `json:"name"`
	Display            string       `json:"display"`
	Symbol             string       `json:"symbol"`
	Traces             []Trace      `json:"traces,omitempty"`
	LogoURIs           *LogoURIs    `json:"logo_URIs,omitempty"`
	CoingeckoID        *string      `json:"coingecko_id,omitempty"`
	Images             []AssetImage `json:"images,omitempty"`
	// Other optional fields from schema can be added incrementally as needed.
}

// DenomUnit mirrors $defs.denom_unit.
type DenomUnit struct {
	Denom    string   `json:"denom"`
	Exponent *int     `json:"exponent,omitempty"`
	Aliases  []string `json:"aliases,omitempty"`
}

// Trace mirrors $defs.trace (partial, optional fields as pointers).
type Trace struct {
	Type      *string     `json:"type,omitempty"`
	Counterparty *Counterparty `json:"counterparty,omitempty"`
	Chain     *TraceChain `json:"chain,omitempty"`
}

type Counterparty struct {
	ChainName *string `json:"chain_name,omitempty"`
	BaseDenom *string `json:"base_denom,omitempty"`
	ChannelID *string `json:"channel_id,omitempty"`
}

type TraceChain struct {
	Path   *string `json:"path,omitempty"`
	Port   *string `json:"port,omitempty"`
	ChannelID *string `json:"channel_id,omitempty"`
}

// AssetImage mirrors the image entry in asset schema (subset to satisfy JSON).
type AssetImage struct {
	Png   *string      `json:"png,omitempty"`
	Svg   *string      `json:"svg,omitempty"`
	Theme *ImageTheme  `json:"theme,omitempty"`
}

type ImageTheme struct {
	Circle   *bool `json:"circle,omitempty"`
	DarkMode *bool `json:"dark_mode,omitempty"`
}
