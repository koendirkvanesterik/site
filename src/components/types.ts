export type MenuLink = {
  /**
   * String value representing link href
   */
  href: string
  /**
   * String value representing link label
   */
  label: string
}

export type MenuData = {
  /**
   * Array of type MenuLink holding all menu links
   */
  links: readonly MenuLink[]
  /**
   * String value representing menu name
   */
  name: string
}
