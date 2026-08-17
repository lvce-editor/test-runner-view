export const getFileName = (uri: string): string => {
  return uri.slice(Math.max(uri.lastIndexOf('/'), uri.lastIndexOf('\\')) + 1)
}
