package chainregistry

// MemoKeys represents memo_keys.schema.json root object.
// The memo object is open-ended and represented as map[string]any.
type MemoKeys struct {
	DollarSchema string     `json:"$schema"`
	MemoKeys     []MemoKey  `json:"memo_keys"`
}

type MemoKey struct {
	Key         string         `json:"key"`
	Description string         `json:"description"`
	GitRepo     string         `json:"git_repo"`
	Memo        map[string]any `json:"memo"`
}
