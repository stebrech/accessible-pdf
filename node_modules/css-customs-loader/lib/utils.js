const isLoader = (loader, loaderName) =>
  loader.path.match(new RegExp(`\\b${loaderName}\\b`))

const findPreviousLoader = (self, loaderName) =>
  self.loaders
    .slice(0, self.loaderIndex)
    .find(loader => isLoader(loader, loaderName))

const findNextLoader = (self, loaderName) =>
  self.loaders
    .slice(self.loaderIndex + 1)
    .find(loader => isLoader(loader, loaderName))

module.exports = {
  isLoader,
  findPreviousLoader,
  findNextLoader,
}
