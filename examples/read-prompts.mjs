#!/usr/bin/env node
import { readFileSync } from "node:fs";

const bundle = JSON.parse(readFileSync(new URL("../data/seedance-2-5-prompts.json", import.meta.url), "utf8"));
console.log(`${bundle.count} Seedance 2.5 video prompts (${bundle.status})`);
for (const prompt of bundle.prompts.slice(0, 5)) {
  console.log(`- [${prompt.inputMode} / ${prompt.generationMode}] ${prompt.title}: ${prompt.source.caseUrl}`);
}
