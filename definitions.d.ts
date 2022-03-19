interface ConfigType {
  title?: string
  path_prefix: string
  domain?: string
  menu: MenuConfig
  footer: FooterConfig
}

interface PageType {
  title: string
  seo?: SeoType
	intro: {
		name: string
		role: string
		description?: string
	}
	sections?: SectionType[]
	contact: {
		heading: string
		description: string
		twitter?: ActionType
		email?: ActionType
	}
}

interface SeoType {
  title: string
  description: string
  robots: Array<
    | 'all'
    | 'index'
    | 'follow'
    | 'noindex'
    | 'nofollow'
    | 'noimageindex'
    | 'notranslate'
    | 'none'
  >
  extra: Array<{
    name: string
    value: string
    keyName: string
    relativeUrl: boolean
  }>
}

interface SubsectionType {
	type: string
  [key: string]: string
}

interface SectionType {
	id?: string
	title?: string
	subsections: SubsectionType[]
}

interface ActionType {
  url: string
  label: string
  newWindow?: boolean
  noFollow?: boolean
}

interface MenuConfig {
  links: ActionType[]
}

interface FooterConfig {
  has_nav: boolean
  nav_links: ActionType[]
  has_social: boolean
  social_links: ActionType[]
  copyright: string
  copyright_link: ActionType
}
