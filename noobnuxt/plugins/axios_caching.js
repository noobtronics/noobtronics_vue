import { cacheAdapterEnhancer } from 'axios-extensions'

export default function ({ $axios, ssrContext }) {
  const defaults = $axios.defaults
  defaults.adapter = cacheAdapterEnhancer(defaults.adapter, {
    enabledByDefault: false,
    cacheFlag: 'useCache',
  })
}
