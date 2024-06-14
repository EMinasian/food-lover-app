export function getSlug(title) {
  return title.trim().toLowerCase().replace(" ", "-");
}
