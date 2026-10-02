import App from '../App'
import ServicesIndex from './ServicesIndex'
import AiVisibility from './AiVisibility'
import AiConsulting from './AiConsulting'

// Keyed by the data-page attribute on #root in each HTML file.
export const PAGES = {
  home: App,
  services: ServicesIndex,
  'ai-visibility': AiVisibility,
  'ai-consulting': AiConsulting,
}
