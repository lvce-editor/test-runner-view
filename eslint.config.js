import { defineConfig } from 'eslint/config'
import * as config from '@lvce-editor/eslint-config'

export default defineConfig([
  ...config.default,
  ...config.recommendedActions,
  ...config.recommendedDevcontainer,
  ...config.recommendedE2e,
  ...config.recommendedEslintConfig,
  ...config.recommendedExtensionJson,
  ...config.recommendedNode,
  ...config.recommendedNvmrc,
  ...config.recommendedRegex,
  ...config.recommendedRpc,
  ...config.recommendedTsconfig,
  ...config.recommendedVirtualDom,
  ...config.recommendedVirtualDomStrict,
])
