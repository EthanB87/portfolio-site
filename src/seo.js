import { BUSINESS, VISIBILITY } from './data'

const servicesUrl = `${BUSINESS.url}/services/`
const visibilityUrl = `${BUSINESS.url}/services/ai-visibility/`
const consultingUrl = `${BUSINESS.url}/services/ai-consulting/`

const areaServed = {
  '@type': 'AdministrativeArea',
  name: 'Ontario',
  containedInPlace: { '@type': 'Country', name: 'Canada' },
}

function offer(name, service, url, price, { monthly = false } = {}) {
  const o = {
    '@type': 'Offer',
    name,
    url,
    itemOffered: { '@type': 'Service', name: service, areaServed },
  }
  if (price !== undefined) {
    o.price = price.toFixed(2)
    o.priceCurrency = 'CAD'
    // Prices are quoted before HST.
    o.priceSpecification = {
      '@type': monthly ? 'UnitPriceSpecification' : 'PriceSpecification',
      price: o.price,
      priceCurrency: 'CAD',
      valueAddedTaxIncluded: false,
      ...(monthly && { unitCode: 'MON', unitText: 'month' }),
    }
  }
  return o
}

// ProfessionalService JSON-LD, injected into the service pages at build time
// by scripts/prerender.mjs. Built from BUSINESS so details match the rest of the site.
export function businessJsonLd() {
  const visibilityOffers = VISIBILITY.tiers.map((t) =>
    offer(t.name, 'AI visibility', visibilityUrl, t.price, { monthly: t.monthly })
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    url: `${BUSINESS.url}/`,
    email: BUSINESS.email,
    description:
      'AI visibility, websites and AI consulting for local and service businesses in Ontario.',
    address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
    areaServed,
    makesOffer: [
      ...visibilityOffers,
      offer('AI consulting', 'AI consulting', consultingUrl),
      offer('Websites and online shops', 'Website design and development', servicesUrl),
    ],
  }
}
