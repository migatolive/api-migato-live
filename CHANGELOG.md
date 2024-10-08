# [1.4.0](https://github.com/migatolive/api-migato-live/compare/v1.3.0...v1.4.0) (2024-09-22)


### Bug Fixes

* **auth:** pass user object to email service methods ([c5a4df3](https://github.com/migatolive/api-migato-live/commit/c5a4df32038a53c426f730f3fc2e6b07064803a8))


### Features

* **email:** add user parameter to email service functions ([24c65cb](https://github.com/migatolive/api-migato-live/commit/24c65cbf87ebde0a40d5d7455e9f8e9777956fd8))

# [1.3.0](https://github.com/migatolive/api-migato-live/compare/v1.2.1...v1.3.0) (2024-09-22)


### Bug Fixes

* **auth:** ensure async handling in token generation ([c8c6f9c](https://github.com/migatolive/api-migato-live/commit/c8c6f9c16f356a959f021d22be85e88f03157cc8))


### Features

* **db:** add userEmail to RefreshToken model and migration ([95ea98f](https://github.com/migatolive/api-migato-live/commit/95ea98f273eca8968effb3a75efe51ece1a37abf))

## [1.2.1](https://github.com/migatolive/api-migato-live/compare/v1.2.0...v1.2.1) (2024-09-21)


### Bug Fixes

* **middleware:** hide error stack trace in production environment ([e0ba3c0](https://github.com/migatolive/api-migato-live/commit/e0ba3c08adf776f85a7a49f8c779f76fd3859773))

# [1.2.0](https://github.com/migatolive/api-migato-live/compare/v1.1.0...v1.2.0) (2024-09-19)


### Features

* **controllers:** add user controller ([d19a82a](https://github.com/migatolive/api-migato-live/commit/d19a82a0518630771757e8e482efa84329d2d3f3))
* **middlewares:** add new auth middleware ([41befb2](https://github.com/migatolive/api-migato-live/commit/41befb234fcc004e60e887d054247f378e6d353a))
* **models:** add get function to the User Model and export user roles ([886ef44](https://github.com/migatolive/api-migato-live/commit/886ef44b551e86c511291a0eff4e38f9207f22dd))
* **routes:** add userRoutes ([77f8626](https://github.com/migatolive/api-migato-live/commit/77f862617731abb9a43dfa1495f7851e3094a70f))

# [1.1.0](https://github.com/migatolive/api-migato-live/compare/v1.0.4...v1.1.0) (2024-09-17)


### Features

* **controllers:** add new book controller ([fd08c20](https://github.com/migatolive/api-migato-live/commit/fd08c20c7b5bd6357c4ccbfaf96346a89f59d0d2)), closes [#26](https://github.com/migatolive/api-migato-live/issues/26)
* **migrations:** add initial book table migration ([d47ebf1](https://github.com/migatolive/api-migato-live/commit/d47ebf1cd1b61b4618fd6cba3e65d1e933955b58)), closes [#29](https://github.com/migatolive/api-migato-live/issues/29)
* **models:** add new book model ([beb5b18](https://github.com/migatolive/api-migato-live/commit/beb5b18ddd8ee46ccda7e3f962edbea067710b97)), closes [#28](https://github.com/migatolive/api-migato-live/issues/28)
* **routes:** add new book routes ([ba03983](https://github.com/migatolive/api-migato-live/commit/ba03983f426cbdd8a44529cd26c2f7ed21713fbc)), closes [#24](https://github.com/migatolive/api-migato-live/issues/24) [#25](https://github.com/migatolive/api-migato-live/issues/25)
* **validators:** add new book validator ([4b3edfb](https://github.com/migatolive/api-migato-live/commit/4b3edfbab16585fa9157bbcf00d9f219b0244163)), closes [#27](https://github.com/migatolive/api-migato-live/issues/27)

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
