import I18n from 'react-native-i18n'

// expand these files with your translations
// and replace them inside @I18n.translations = { en: en.json, fr: fr.json }
// if you're nit satisfy with json files change them to js files and export them as an object
// export default { greetings: "Hi!" }
// https://github.com/AlexanderZaytsev/react-native-i18n
// import en from './en.json'
// import fr from './fr.json'

I18n.fallbacks = true
I18n.missingBehaviour = 'guess'
I18n.defaultLocale = 'en'
I18n.locale = 'fr'

I18n.translations = {
  fr: {
    greetings: 'Bonjouer!'
  },
  en: {
    greetings: 'Hi!'
  }
}

export default I18n
