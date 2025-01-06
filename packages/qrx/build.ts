import { dts } from 'bun-plugin-dtsx'

const resp = await Bun.build({
  target: 'browser',
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  plugins: [dts()],
})

console.log(resp)
