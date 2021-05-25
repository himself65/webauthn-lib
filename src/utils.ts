export class NotSupportedError extends Error {
  constructor () {
    super()
    this.name = 'NotSupportedError'
  }
}

export class AbortError extends Error {
  constructor () {
    super()
    this.name = 'AbortError'
  }
}
