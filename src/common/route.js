export const ROUTE_PATH = {
  HOME: '/',
  WEBSITES_CATALOG: "/websites-catalog",
  PACKAGES: "/packages",
  CV: "/cv",
  TIME_TABLE_F: "/timetable-f",
  INCOME_CALCULATOR: "/income-calculator"
}

export const QUERY_PARAMS = {
    HIDE_HEADER: 'h_header',
    HIDE_FOOTER: 'h_footer',
}

export const HEADER_MENU_LINKS = [
  {
    title: "$HEADER.MENU_ITEM.WEBSITES_CATALOG",
    path: ROUTE_PATH.WEBSITES_CATALOG
  },
  {
    title: "$HEADER.MENU_ITEM.NP",
    path: ROUTE_PATH.PACKAGES
  },
  {
    title: "$HEADER.MENU_ITEM.CV",
    path: ROUTE_PATH.CV
  },
];

export const FOOTER_MENU_LINKS = [
  {
    title: "$FOOTER.MENU_ITEM.HOME",
    path: ROUTE_PATH.HOME
  },
  {
    title: "$FOOTER.MENU_ITEM.GAME",
    path: ROUTE_PATH.WEBSITES_CATALOG
  },
  {
    title: "$FOOTER.MENU_ITEM.NP",
    path: ROUTE_PATH.PACKAGES
  },
  {
    title: "$FOOTER.MENU_ITEM.CV",
    path: ROUTE_PATH.CV
  },
];