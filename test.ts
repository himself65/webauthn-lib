import { create } from './src/index'

const challenge = new Uint8Array(32)
window.crypto.getRandomValues(challenge)

const userID = 'Kosv9fPtkDoh4Oz7Yq/pVgWHS8HhdlCto5cR0aBoVMw='
const id = Uint8Array.from(window.atob(userID), c => c.charCodeAt(0))

const publicKey = {
  challenge,
  rp: {
    name: 'Mask.ioß'
  },
  user: {
    id: id,
    name: 'himself65@outlook.com',
    displayName: 'Himself65'
  },
  pubKeyCredParams: [
    { type: 'public-key', alg: -7 },
    { type: 'public-key', alg: -257 }
  ]
}
