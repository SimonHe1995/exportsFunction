import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    // default
    './src/index',
  ],
  outDir: 'build',
  declaration: true,
})
