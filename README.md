# @nestjs/starter

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

One paragraph of the module's description goes here

## Installation

```bash
npm i --save @nestjs/starter
```

## Usage

Import `StarterModule` in your application.

```ts
import { Module } from '@nestjs/common'
import { StarterModule } from '@nestjs/starter'

@Module({
  imports: [StarterModule]
})
export class ApplicationModule {}
```

## Developing

```
npm run commit            # commits code
npm run format            # formats code
npm run test              # runs unit and mutation tests
npm run test:unit         # runs unit tests
npm run test:mutation     # runs mutation tests
npm run watch             # runs unit tests and watches for changes
```

## Built With

- [commitizen](https://github.com/commitizen/cz-cli)
- [jest](https://github.com/facebook/jest)
- [pre-commit](https://github.com/observing/pre-commit)
- [prettier](https://github.com/prettier/prettier)
- [semantic-release](https://github.com/semantic-release/semantic-release)
- [stryker](https://github.com/stryker-mutator/stryker)
- [tslint](https://github.com/palantir/tslint)
- [typescript](https://github.com/Microsoft/TypeScript)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/user/repo/tags).

## Authors

- **Firstname Lastname** - _Initial work_ - [user](https://github.com/user)

See also the list of [contributors](https://github.com/user/repo/contributors) who participated in this project.
