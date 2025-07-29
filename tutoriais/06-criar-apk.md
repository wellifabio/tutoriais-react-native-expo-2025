# Criar APK para emulador e dispositivo Android
O formato de arquivo padrão usado ao criar aplicativos Android com o EAS Build é um Android App Bundle (AAB/ .aab ). Este formato é otimizado para distribuição na Google Play Store. No entanto, AABs não podem ser instalados diretamente no seu dispositivo. Para instalar uma compilação diretamente no seu dispositivo Android ou emulador, você precisa criar um Android Package **(APK/ .apk )**.

## Configurando um perfil para construir APKs
O primeiro passo é instalar o EAS CLI, se ainda não estiver instalado. Você pode fazer isso com o seguinte comando:

```bash
npm install -g eas-cli
```

Você pode criar um perfil de construção específico para APKs no arquivo `eas.json`. Por exemplo, você pode adicionar um perfil chamado `preview` para construir um APK:

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```
## Construindo o APK
Depois de configurar o perfil, você pode construir o APK usando o seguinte comando:

```bash
npx eas build -p android --profile preview
```

Vai precisar e uma conta no EAS Build para executar o comando acima. Se você não tiver uma conta, pode criar uma gratuitamente no site do [EAS Build](https://expo.dev/eas).
Durante a execução do comando, o EAS CLI solicitará que você faça login na sua conta do Expo, se ainda não estiver logado.

Depois que o processo de construção for concluído, você receberá um link para baixar o APK gerado. Você pode instalar esse APK diretamente no seu dispositivo Android ou emulador.

## Para testar no Celular
Para instalar o APK no seu dispositivo Android, acesse o link fornecido após a construção e baixe o arquivo APK. Em seguida, transfira o APK para o seu dispositivo Android e instale-o. Você pode precisar habilitar a instalação de aplicativos de fontes desconhecidas nas configurações do seu dispositivo.
