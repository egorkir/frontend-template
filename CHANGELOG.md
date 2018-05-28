# Changelog

Notable changes to this project.

The format is based on [Keep a Changelog][changelogDoc]

## [Unreleased]

### Changed

- updated `package.json`
- updated `yarn.lock`
- updated `.eslintrc` - add new plugins
- updated `.eslintignore`
- updated folder arch
- updated static scripts

### Added

- add gulp folder and new tasks/utils/config
- add `babelrc`
- add webpack config
- add `gulpfile.babel.js`
- add babel and webpack packages
- add `libs` folder for vendor source
- add jquery lib in dependencies

### Removed

- removed `gulpfile.js`
- removed `bower.json`
- removed HTML5 Shim and Respond
- removed `map.js`

### Fixed

- fixed old path

## [1.6.2] - 2018-04-05

### Changed

- renamed folder `modules` on `components`
- renamed folder `layout` on `views`
- renamed folder `web` on `dist`
- updated doc file

### Added

- add `static` folder

### Deprecated

- bower
- `gulp 3.9.1`

## [1.6.1] - 2018-04-04

### Changed

- updated `gitignore` - generated [gitignore.io](https://www.gitignore.io)
- updated `.eslintrc` config
- updated `.sass-lint.yml` config
- updated documentation

### Added

- `jstransformer-ejs`
- add sass mixin `size`
- add social module 0.0.1 ver
- add meta module 0.0.1 ver

### Removed

- `components` folder and all files

### Fixed

- fix sass linter for VSC editor

## [1.6.0] - 2018-03-20

### Changed

- updated gulp task for js
- updated `.eslintrc` - add es5 lint config
- update function scripts
- update `README.md` - added link for full documentation
- update doc file
- meta file is updated to a mixin

### Added

- add new watch task for js
- add `eslint-config-loris`

### Deprecated

- folder `scss/components`

### Removed

- remove `eslint-config-yandex`

## [1.5.9] - 2018-03-12

### Changed

- update `README.md`
- update `package.json`, add yarn engine and scripts
- update `.travis.yml`, add new scripts
- update mixins

### Added

- add `CHANGELOG.md`
- add `fulldoc.md`
- add `yarn.lock`

[changelogDoc]: https://keepachangelog.com/en/1.0.0/
[Unreleased]: https://github.com/deeppines/frontend-template/tree/dev
[1.6.2]: https://github.com/deeppines/frontend-template/releases/tag/1.6.2
[1.6.1]: https://github.com/deeppines/frontend-template/releases/tag/1.6.1
[1.6.0]: https://github.com/deeppines/frontend-template/releases/tag/1.6.0
[1.5.9]: https://github.com/deeppines/frontend-template/releases/tag/1.5.9
