import { readdir } from 'node:fs/promises'
import { build, context } from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

const options = {
  entryPoints: [
    './components/index.js',
    './components/Hello.tsx',
    './components/Foobar.tsx'
  ],
  bundle: true,
  format: 'esm',
  outdir: 'dist',
  plugins: [
    nodeExternalsPlugin()
  ],
}

if (process.argv.includes('--watch')) {
  const ctx = await context(options)
  await ctx.watch()
} else {
  await build(options)
}
