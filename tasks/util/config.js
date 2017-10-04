export const pathDir = 'html/20171003_10yue'

export function getDistName(pathDir) {
  if (!pathDir) {
    return
  }
  return pathDir.split('/')[1]
}
