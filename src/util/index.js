export const denormalize = obj => {
  return Object.keys(obj).map(key => obj[key])
}
