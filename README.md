# Awesome Seedance 2.5 Video Prompts

An open, source-attributed bundle of 24 reviewed Seedance 2.5 video prompts exported from Image Prompt Gallery. The collection is intentionally small: records are published only when the model evidence, public source, prompt, and reuse-risk note are available. IPG production remains PostgreSQL; this repository is a versioned public dataset for people and agents.

- Web gallery: https://imagepromptgallery.com/prompts
- Seedance 2.5 prompt library: https://imagepromptgallery.com/models/seedance-2-5/prompts
- Source and maintenance record: https://imagepromptgallery.com/sources/seedance-2-5-prompts
- Public API: https://imagepromptgallery.com/api/public/prompts?domain=video&model=seedance-2-5&mediaType=video
- Open repository: https://github.com/Toolcentral-ai/awesome-seedance-2-5-prompts
- Dataset status: ready, limited coverage
- Prompt count: 24
- Generated at: `2026-07-04T12:47:31.925Z`
- Schema version: `2026-07-02`

Translations: [简体中文](README_zh.md) · [日本語](README_ja-JP.md) · [한국어](README_ko-KR.md) · [Deutsch](README_de-DE.md) · [Español](README_es-ES.md) · [Français](README_fr-FR.md) · [Português](README_pt-BR.md)

## Browse by Model and Category

- [Seedance 2.5 prompt library](https://imagepromptgallery.com/models/seedance-2-5/prompts)
- [All curated prompt topics](https://imagepromptgallery.com/prompts)
- [Video prompt sources](https://imagepromptgallery.com/sources)

Current machine-readable categories:

- Twitter Community: 9
- One-Take Cinematography: 5
- Music Synchronization: 4
- Emotional Performance: 3
- Video Editing & Remixing: 3

No Seedance 2.5-specific topic pack is published until at least five reviewed cases qualify for a coherent search topic. This prevents thin or misleading topic pages.

## Featured Prompts

`data/featured-prompts.json` is currently empty. Browse the [live Seedance 2.5 library](https://imagepromptgallery.com/models/seedance-2-5/prompts) for the 24 reviewed cases. Featured entries will be added only when their public media, source records, and reuse notes are stable; placeholder examples are not generated.

## Data Files

- `data/seedance-2-5-prompts.json`: open prompt bundle.
- `data/categories.json`: category index.
- `data/featured-prompts.json`: reviewed featured shortlist.
- `data/source-prompts.json`: public source handoff metadata.
- `schema/seedance-2-5-video-prompt.schema.json`: JSON schema.
- `skills/seedance-2-5-prompts/SKILL.md`: agent usage guide.
- `examples/read-prompts.mjs`: minimal Node reader.
- `docs/source-gallery.md`: source and category overview.

## JSON Schema and Public Fields

Validate the bundle with `schema/seedance-2-5-video-prompt.schema.json`. Top-level fields are `schemaVersion`, `generatedAt`, `status`, `source`, `count`, and `prompts`. Each prompt includes a public ID and slug, title, category and tags, model and domain, input mode, generation mode, prompt text, public source attribution, review evidence, and risk notice; aspect ratio is included when known. GSC data, private API tokens, ranking weights, internal source URLs, and unrelated admin fields are never exported.

## Attribution, Opt-out, and Commercial Reuse

Every prompt and media result has its own rights context. Before commercial use, inspect the original source and model-provider terms, then review brands, protected characters, music, voices, locations, likenesses, privacy, and regional model availability. To correct attribution or request removal, [open an issue](https://github.com/Toolcentral-ai/awesome-seedance-2-5-prompts/issues) with the public case URL and evidence; maintainers will update the source record and public bundle after review.

## Contribution

Open an issue or pull request with a public source URL, attribution notes, Seedance 2.5 model evidence, generation mode, and a short explanation of why the prompt is reusable. Submissions do not enter production automatically.

## 中文说明

本仓库当前提供 24 条已审核、可公开归因的 Seedance 2.5 视频提示词。数量保持真实且有意收敛，不补占位数据，也不伪造精选项。浏览公开案例和最新来源记录请访问 [Seedance 2.5 提示词库](https://imagepromptgallery.com/zh/models/seedance-2-5/prompts)；商用前需逐条检查原始授权、模型条款、品牌/IP、音乐、声音、地点和肖像权。
