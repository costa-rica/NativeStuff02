# NativeStuff02

## Navigation

1. install:

```
yarn add @react-navigation/native@6
expo install react-native-screens react-native-safe-area-context
```

Stack navigation:
`yarn add @react-navigation/native-stack@6`
Tab navigation:
`yarn add @react-navigation/bottom-tabs@6`

## ExpoDocPicker

ChatGPT and https://blog.logrocket.com/picking-files-react-native-apps-using-react-native-document-picker/

uses this library: https://docs.expo.dev/versions/latest/sdk/document-picker/

### Install

`npx expo install expo-document-picker`

- This does not use react-native-document-picker

## ExpoDocPicker01

````js
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Allows any file type
      });
```

The result looks like:

```json
{
  "assets": [
    {
      "mimeType": "image/png",
      "name": "home_page.png",
      "size": 71726,
      "uri": "file:///data/user/0/host.exp.exponent/cache/DocumentPicker/9e86a9f5-4eb2-4317-9353-5f1b6c75e6f6.png"
    }
  ],
  "canceled": false
}
````

### Install

`npx expo install expo-document-picker`

- This does not use react-native-document-picker
