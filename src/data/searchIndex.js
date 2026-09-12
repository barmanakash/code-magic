// Flattened, searchable index of every documentation topic across React,
// JavaScript, HTML, and CSS. Built from the same source-of-truth sidebar
// data DocsPage.js uses, so this list stays automatically in sync with the
// actual sidebars instead of being hand-maintained separately.

import docsNav from './docsNav';
import { JAVASCRIPT_SIDEBAR, HTML_SIDEBAR, CSS_SIDEBAR } from './sidebarConfig';

function flatten(sidebarGroups, category) {
  const entries = [];
  sidebarGroups.forEach((group) => {
    group.items.forEach((item) => {
      entries.push({
        label: item.label.trim(),
        sectionId: item.id,
        category,
      });
    });
  });
  return entries;
}

const searchIndex = [
  ...flatten(docsNav, 'React'),
  ...flatten(JAVASCRIPT_SIDEBAR, 'JavaScript'),
  ...flatten(HTML_SIDEBAR, 'HTML'),
  ...flatten(CSS_SIDEBAR, 'CSS'),
];

export default searchIndex;
