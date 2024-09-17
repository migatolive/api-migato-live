## [1.0.4](https://github.com/migatolive/api-migato-live/compare/v1.0.3...v1.0.4) (2024-09-17)


### Bug Fixes

* **auth:** improve error handling for email verification token expiration and validation ([ee9370e](https://github.com/migatolive/api-migato-live/commit/ee9370e52d7fd5238a8cc4dde610b102be56df31))
* **email:** encode email verification token in URL to avoid invalid characters ([16e83ff](https://github.com/migatolive/api-migato-live/commit/16e83ff41e585c1896bbbf792709147d0a64542f))

## [1.0.3](https://github.com/migatolive/api-migato-live/compare/v1.0.2...v1.0.3) (2024-09-17)


### Bug Fixes

* **token:** update hooks from beforeCreate to beforeValidate and fix date validation ([1a3dbec](https://github.com/migatolive/api-migato-live/commit/1a3dbec010fb2d0a04d8e565a11c8ce12deee6ad))

## [1.0.2](https://github.com/migatolive/api-migato-live/compare/v1.0.1...v1.0.2) (2024-09-17)


### Bug Fixes

* **circleci:** correct unary operator error in reviewdog script ([534df1d](https://github.com/migatolive/api-migato-live/commit/534df1d9c79db8bfb013b86aaec869744cdfcade))

## [1.0.1](https://github.com/migatolive/api-migato-live/compare/v1.0.0...v1.0.1) (2024-09-17)


### Bug Fixes

* add sequelize error handler and remove empty auth middleware ([c11ed2f](https://github.com/migatolive/api-migato-live/commit/c11ed2f5bfbf068fa5534c97e7f3f00ba78eb832))
* **circleci:** correct 'filter' to 'filters' in release workflow ([94bcc0d](https://github.com/migatolive/api-migato-live/commit/94bcc0d4307d97d47c4afd95e52091ce7aad5f73))
* **circleci:** correct 'filter' to 'filters' in release workflow ([c405c23](https://github.com/migatolive/api-migato-live/commit/c405c236781f5f08cbadd573b98a3fe896ab0c8d))
* **circleci:** remove colon after build ([1c97453](https://github.com/migatolive/api-migato-live/commit/1c97453288981dd26265127e0c31650a21b8027e))
* **circleci:** run reviewdog only on pull requests ([390a11b](https://github.com/migatolive/api-migato-live/commit/390a11b71d201fb4ab5fbd4fb37b824451f6a7ab))
* **circleci:** run reviewdog only on pull requests ([78c1b2d](https://github.com/migatolive/api-migato-live/commit/78c1b2deeb3962a7ad146c734e04f25bd3a9fa80))

# 1.0.0 (2024-09-13)


### Bug Fixes

* **error-handler:** ensure valid status code ([86b707c](https://github.com/migatolive/api-migato-live/commit/86b707cd9a64248c9ed73a477c88240bf4f7ea59))
* **error-handler:** handle errors correctly in middleware ([f6142c7](https://github.com/migatolive/api-migato-live/commit/f6142c79b7ee37ac69cb20ebe39bd28623b05c80))


### Features

* **api-error:** implementar api-error.js ([3eb7a5e](https://github.com/migatolive/api-migato-live/commit/3eb7a5e686e50616f454ee3e7db1baa82779670e))
* **auth:** desarrollar componente de autenticación ([19cf4a6](https://github.com/migatolive/api-migato-live/commit/19cf4a66db8d13b0b63fdab330194d5ef325df92))
* **circleci:** add CircleCI configuration ([b25fa5e](https://github.com/migatolive/api-migato-live/commit/b25fa5e47977752f5a3fd1c91c459a8cdbbd351a))
* **database:** configurar Sequelize ([ba70ecc](https://github.com/migatolive/api-migato-live/commit/ba70eccdb975e9b4c290c08e33755d970188c914))
* **email:** configurar el servicio de email ([6169841](https://github.com/migatolive/api-migato-live/commit/616984155269de3ce07d5dbe0d20067b7ef794da))
* **email:** crear plantillas de email ([70f6ea6](https://github.com/migatolive/api-migato-live/commit/70f6ea635367a6f46aaf37fd1b236f88700bec58))
* **express:** configurar Express ([90605ed](https://github.com/migatolive/api-migato-live/commit/90605ed0354a2ba1cac57f8cd3b0fc468c621548))
* **extendable-error:** implementar extendable-error.js ([5b9bce6](https://github.com/migatolive/api-migato-live/commit/5b9bce62bca831d83e34db0f38534b15e2a08208))
* **loader:** Implementar loader de base de datos ([e8d5949](https://github.com/migatolive/api-migato-live/commit/e8d5949e3fdd3538b1f6d3fbfa971611b08367dd))
* **middleware:** implementar middleware de manejo de errores ([574d85e](https://github.com/migatolive/api-migato-live/commit/574d85e6bcbf143031b58e1e8f50d4be6e7e9bc7))
* **migrations:** añadir migraciones de autenticación ([e205355](https://github.com/migatolive/api-migato-live/commit/e20535523be67816ff23c9a3ce815d74d3f4d653))
* **models:** añadir modelos de autenticación ([59a0841](https://github.com/migatolive/api-migato-live/commit/59a08411caa6cf472080c43f48cdbc4fcedbd2f3))
* **passport:** configurar Passport ([b8b63bf](https://github.com/migatolive/api-migato-live/commit/b8b63bff46d66416d10efba9b84b0360e088bb77))
* **Procfile:** add Heroku configuration ([f0cbfa3](https://github.com/migatolive/api-migato-live/commit/f0cbfa32ea5e608fde9f660fd9941f18b2bb5f88))
* provided .gitignore ([ab62aea](https://github.com/migatolive/api-migato-live/commit/ab62aea475a3a0a11cb5ec71a091d6680e4584ef))
* **routes:** inicializar todas las rutas ([df8f280](https://github.com/migatolive/api-migato-live/commit/df8f280d34374ef78e3eb7dafa9d21c717171c33))
* **vars:** configurar variables de entorno ([cf7c60d](https://github.com/migatolive/api-migato-live/commit/cf7c60d02560e9f13cd987cf39356bb88f017c72))
