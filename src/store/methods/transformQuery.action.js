export default async function({ commit }, query) {
  let transformedQuery = query.trim();
  return transformedQuery
    .toLowerCase()
    .split(" ")
    .join("-");
}
