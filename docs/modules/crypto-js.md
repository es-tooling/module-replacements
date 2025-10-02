# crypto-js

Discontinued JavaScript crypto library; migrate to native runtime crypto APIs.

# Alternatives

## node:crypto (built-in)

Node’s official cryptography module; supports hashes/HMAC, AES-GCM, PBKDF2/scrypt, RSA/ECDSA/Ed25519, and secure RNG.

[Documentation Page](https://nodejs.org/api/crypto.html)

## Web Crypto API (built-in)

Standards-based cryptography in browsers and modern Node (via crypto.webcrypto); async APIs for AES-GCM, HMAC, PBKDF2/HKDF, RSA/ECDSA, and secure RNG. Notable gaps: no streaming APIs, no MD5/RIPEMD160/SHA‑3, no RC4/3DES/ECB, no scrypt/Argon2 (PBKDF2/HKDF only), limited curves (P‑256/384/521; no Ed25519/Ed448 in browsers).

[Documentation Page](https://developer.mozilla.org/docs/Web/API/Web_Crypto_API)

## Bun built-ins

Bun’s native crypto: Web Crypto-compatible APIs plus streaming hashing via `Bun.CryptoHasher`. Notable gaps: same algorithm surface as Web Crypto (no legacy ciphers; no MD5/RIPEMD160/SHA‑3), use CryptoHasher for streaming digests.

[Project Page](https://bun.sh/docs/api/hashing)