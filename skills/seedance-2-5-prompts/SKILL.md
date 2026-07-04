---
name: seedance-2-5-prompts
description: Find and adapt reviewed Seedance 2.5 video prompts from the Image Prompt Gallery open bundle.
---

# Seedance 2.5 Prompts

Use this skill when a user asks for Seedance 2.5 video prompts, prompt
structure, camera movement, reference-image setup, or source-attributed video
prompt examples.

## Workflow

1. Read `data/seedance-2-5-prompts.json`.
2. If `status` is `prelaunch` or `count` is 0, explain that no reviewed
   open Seedance 2.5 prompt bundle has been published yet.
3. Match 1-3 prompts by scene, subject, action, camera movement, lighting,
   aspect ratio, duration, `inputMode`, and `generationMode`.
4. Adapt the selected prompt to the user's subject without removing source
   attribution, shot timing, motion, or reference-image constraints.
5. Remind the user to check source rights and model provider terms before
   commercial use.

## 中文

当用户需要 Seedance 2.5 视频提示词、镜头结构、运镜、参考图设置或带来源归因的视频案例时使用本 skill。

如果 bundle 仍是 `prelaunch` 或 `count=0`，请明确说明尚未发布已审查的公开 Seedance 2.5 prompt 数据，不要编造案例。
