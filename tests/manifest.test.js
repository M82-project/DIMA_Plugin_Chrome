import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '..');
const manifestPath = resolve(repoRoot, 'manifest.json');

describe('manifest.json', () => {
  const raw = readFileSync(manifestPath, 'utf8');
  const manifest = JSON.parse(raw);

  it('is valid JSON', () => {
    expect(manifest).toBeTypeOf('object');
  });

  it('declares manifest_version 3', () => {
    expect(manifest.manifest_version).toBe(3);
  });

  it('has a non-empty name, version, description', () => {
    expect(manifest.name).toBeTruthy();
    expect(manifest.version).toMatch(/^\d+\.\d+\.\d+$/);
    expect(manifest.description).toBeTruthy();
  });

  it('every JS file declared as a content script exists on disk', () => {
    const missing = [];
    for (const cs of manifest.content_scripts ?? []) {
      for (const file of cs.js ?? []) {
        if (!existsSync(resolve(repoRoot, file))) {
          missing.push(file);
        }
      }
    }
    expect(missing).toEqual([]);
  });

  it('every icon path declared exists on disk', () => {
    const missing = [];
    for (const file of Object.values(manifest.icons ?? {})) {
      if (!existsSync(resolve(repoRoot, file))) missing.push(file);
    }
    expect(missing).toEqual([]);
  });

  it('every web_accessible_resources path exists on disk', () => {
    const missing = [];
    for (const block of manifest.web_accessible_resources ?? []) {
      for (const file of block.resources ?? []) {
        if (!existsSync(resolve(repoRoot, file))) missing.push(file);
      }
    }
    expect(missing).toEqual([]);
  });
});
