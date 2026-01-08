package chainregistry

// Versions represents versions.schema.json root object.
// Optional fields are pointers; array/map types follow the schema.
type Versions struct {
	DollarSchema string          `json:"$schema"`
	ChainName    string          `json:"chain_name"`
	Versions     []ChainVersion  `json:"versions"`
}

// ChainVersion mirrors an entry in the versions array.
type ChainVersion struct {
	Name                string       `json:"name"`
	Tag                 *string      `json:"tag,omitempty"`
	Height              *float64     `json:"height,omitempty"`
	Proposal            *float64     `json:"proposal,omitempty"`
	PreviousVersionName *string      `json:"previous_version_name,omitempty"`
	NextVersionName     *string      `json:"next_version_name,omitempty"`
	RecommendedVersion  *string      `json:"recommended_version,omitempty"`
	CompatibleVersions  []string     `json:"compatible_versions,omitempty"`
	SDK                 *SDKInfo     `json:"sdk,omitempty"`
	Consensus           *ConsensusInfo `json:"consensus,omitempty"`
	Cosmwasm            *CosmwasmInfo  `json:"cosmwasm,omitempty"`
	IBC                 *IBCInfo     `json:"ibc,omitempty"`
	Language            *LanguageInfo `json:"language,omitempty"`
	Binaries            *Binaries    `json:"binaries,omitempty"`
}

// SDKInfo mirrors $defs.sdk
// required: type
// optional: version, repo, tag
// enums are not enforced in runtime types.
type SDKInfo struct {
	Type    string  `json:"type"`
	Version *string `json:"version,omitempty"`
	Repo    *string `json:"repo,omitempty"`
	Tag     *string `json:"tag,omitempty"`
}

// ConsensusInfo mirrors $defs.consensus
// required: type
// optional: version, repo, tag
type ConsensusInfo struct {
	Type    string  `json:"type"`
	Version *string `json:"version,omitempty"`
	Repo    *string `json:"repo,omitempty"`
	Tag     *string `json:"tag,omitempty"`
}

// CosmwasmInfo mirrors $defs.cosmwasm
// optional: version, repo, tag, enabled, path
type CosmwasmInfo struct {
	Version *string `json:"version,omitempty"`
	Repo    *string `json:"repo,omitempty"`
	Tag     *string `json:"tag,omitempty"`
	Enabled *bool   `json:"enabled,omitempty"`
	Path    *string `json:"path,omitempty"`
}

// IBCInfo mirrors $defs.ibc
// required: type
// optional: version, repo, tag, ics_enabled
type IBCInfo struct {
	Type       string   `json:"type"`
	Version    *string  `json:"version,omitempty"`
	Repo       *string  `json:"repo,omitempty"`
	Tag        *string  `json:"tag,omitempty"`
	ICSEnabled []string `json:"ics_enabled,omitempty"`
}

// LanguageInfo mirrors $defs.language
// required: type
// optional: version, repo, tag
type LanguageInfo struct {
	Type    string  `json:"type"`
	Version *string `json:"version,omitempty"`
	Repo    *string `json:"repo,omitempty"`
	Tag     *string `json:"tag,omitempty"`
}

// Binaries mirrors $defs.binaries
// The keys include slashes, so we use struct tags to keep exact names.
type Binaries struct {
	LinuxAmd64   *string `json:"linux/amd64,omitempty"`
	LinuxArm64   *string `json:"linux/arm64,omitempty"`
	DarwinAmd64  *string `json:"darwin/amd64,omitempty"`
	DarwinArm64  *string `json:"darwin/arm64,omitempty"`
	WindowsAmd64 *string `json:"windows/amd64,omitempty"`
	WindowsArm64 *string `json:"windows/arm64,omitempty"`
}
