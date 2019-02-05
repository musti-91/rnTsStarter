# RN-Mobx-Ts

###### React-native Boilerplate with react-native, MobX & TypeScript,React Navigation

###### A bare minimum react-native-mobx-typescript boilerplate with fetch notes example

### Ideal for creating react-native apps from the scratch.

---

## Contains

- [x] [Typescript](https://www.typescriptlang.org/) ^3
- [x] [react-native](https://facebook.github.io/react-native/docs/getting-started.html) ^58
- [x] [react-navigation](https://reactnavigation.org) ^3
- [x] [Mobx](https://github.com/mobxjs/mobx) ^4
- [x] [Mobx React](https://github.com/mobxjs/mobx-react) ^5
- [x] [Locale](https://github.com/AlexanderZaytsev/react-native-i18n) ^2
- [x] [dependency injection](coming soon)
- [x] [Jest](https://jestjs.io) 24
- [x] [enzyme](https://github.com/airbnb/enzyme) ^3

---

## Notes

###### [x] MOBX should be version 4.

###### :( version 5 doesn't work correctly with android even you upgrade javaCore

##### [Upgrade Java Core](https://github.com/react-native-community/jsc-android-buildscripts#how-to-use-it-with-my-react-native-app)

##### [Check the last review](https://github.com/mobxjs/mobx/issues/1582)

---

## Setup

```
$ npm install
$ react-native link
```

## Running

```
// default bahavior
$ npm start
// for specific IOS 👨‍💻 or Android
$ npm run ios
or
$ npm run android
```

## Clean

```
$ npm run clean:ios
// for reset caching
$ npm run reset-cache
```

## Build

###### follow this instructions for build ios or android application

[Generate signed application](https://facebook.github.io/react-native/docs/signed-apk-android)

## Test

```
npm run test:w
// without watch
npm run test
```

## Code Format

```
preferred to use prettier
```

# License

MIT

# Creator

[Mustafa Alroomi](https://twitter.com/musti_rooni)
