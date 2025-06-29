import { useLocation } from 'react-router-dom'

export const useDynamicNamespace = () => {
  const { pathname } = useLocation()

  // Remove leading slash and split into segments
  const parts = pathname.slice(1).split('/')

  if (parts.length >= 2) {
    const ns = `${parts[0]}/${parts[1]}`
    return ns
  }

  return 'static' // default fallback
}
