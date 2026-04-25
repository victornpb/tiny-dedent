import { describe, it } from 'node:test';
import assert from 'node:assert';
import dedent from './src/dedent.js';

describe('dedent', () => {
  it('removes common indentation', () => {
    const result = dedent(`
      hello
      world
    `);
    assert.strictEqual(result, 'hello\nworld\n');
  });

  it('removes leading blank line (whitespace only)', () => {
    const result = dedent(`

      hello
    `);
    assert.strictEqual(result, '\nhello\n');
  });

  it('removes trailing blank line (whitespace only)', () => {
    const result = dedent(`
      hello

    `);
    assert.strictEqual(result, 'hello\n\n');
  });

  it('handles deeply nested indentation', () => {
    const result = dedent(`
          first
        second
      third
    `);
    assert.strictEqual(result, 'first\n        second\n      third\n');
  });

  it('handles string with no indentation', () => {
    const result = dedent('hello');
    assert.strictEqual(result, 'hello');
  });

  it('handles tabs', () => {
    const result = dedent(`
      hello
      world
    `);
    assert.strictEqual(result, 'hello\nworld\n');
  });

  it('handles single line with content', () => {
    const result = dedent(`
      hello
    `);
    assert.strictEqual(result, 'hello\n');
  });

  it('preserves internal spacing', () => {
    const result = dedent(`
      hello   world
      foo     bar
    `);
    assert.strictEqual(result, 'hello   world\nfoo     bar\n');
  });
});