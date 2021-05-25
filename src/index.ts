import { NotSupportedError, AbortError } from './utils'

type TODOType<T = unknown> = T

type SecureContext = Window

type AuthenticatorResponse = {
  readonly clientDataJson: ArrayBuffer
}

type AuthenticationExtensionsClientOutputs = TODOType

type PublicKeyCredential = {
  readonly id: string
  readonly rawId: ArrayBuffer
  readonly response: AuthenticatorResponse
  readonly type: 'public-key'
  getClientExtensionResults(): AuthenticationExtensionsClientOutputs
}

type PublicKeyCredentialCreationOptions = {
  challenge: string
  rp: {
    name: string
    id: string
    icon?: string
  }
  user: {
    id: ArrayBuffer
    name: string
    displayName: string
  }
  signal?: AbortSignal
  authenticatorSelection: {
    userVerification: 'preferred'
  }
  pubKeyCredParams: {
    type: string
    alg: number
  }[]
}

const TODO: TODOType<true> = true

// todo: detect whether environment is secure context
const getSecureContext = (...args: unknown[]): Window | boolean => {
  if (!self.isSecureContext) {
    return false
  }
  return window
}

const interfaces = new Set()

class CredentialsContainer {
  constructor () {
    throw new Error('cannot use \'new\' syntax')
  }

  // todo: currently we only support public key credential creation for the current demand
  // implements refs:
  //  https://w3c.github.io/webappsec-credential-management/#algorithm-create
  //  https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/create
  static create (options: PublicKeyCredentialCreationOptions): Promise<PublicKeyCredential> {
    let settings: TODOType<SecureContext>
    let sameOriginWithAncestors = false
    const settingsOrSameOriginWithAncestors = getSecureContext()
    if (
      typeof settingsOrSameOriginWithAncestors === 'boolean' &&
      !settingsOrSameOriginWithAncestors
    ) {
      throw new Error('Not a secure context')
    } else {
      settings = settingsOrSameOriginWithAncestors as TODOType<SecureContext>
      sameOriginWithAncestors = true
    }

    interfaces.add(options)
    return new Promise<PublicKeyCredential>((resolve, reject) => {
      if (interfaces.size > 1) {
        reject(new NotSupportedError())
      }
      if (options.signal?.aborted) {
        reject(new AbortError())
      }

      // fixme: should be `origin = settings.origin` which `settings should like secure context`
      const origin = settings.origin
      const credential = createPublicKeyCredential(origin, options, sameOriginWithAncestors)
      resolve(credential)
    })

    function createPublicKeyCredential (
      origin: string, options: PublicKeyCredentialCreationOptions,
      sameOriginWithAncestors: boolean
    ): PublicKeyCredential | null {
      if (TODO) {
        return <PublicKeyCredential>{
          id: '',
          type: ''
        }
      }
      return null
    }
  }

  static get (): Promise<PublicKeyCredential> {

  }
}

export {
  CredentialsContainer
}
