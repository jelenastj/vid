import _ from 'lodash'

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items) // conform to lowdash wrapper
  .slice(startIndex)
  .take(pageSize)
  .value()//conform back to regural array
}