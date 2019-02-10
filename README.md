# config-webpack

__Projeto base para a configuração do web-pack__

# Tratando arquivos css como módulos

```
npm install bootstrap@3.3.7 --save
npm install css-loader@0.28.4 style-loader@0.18.2 --save-dev
```

Para configurar esses loader
Criar uma nova regra
test para dizer qual extesão no arquivo vai sofrer a ação do loader
não vou fazer exclude da pasta node_modules porque o css bootstrap esta nela
o loader vai ser style-loader!css-loader
o ! indica que vai ser um e depois o outro e ele lê sempre da direita para esquerda, nesse caso o css-loader vai ser lido primeiro

Resolvendo o arquivos de fonte do bootstrap

npm install url-loader@0.5.9 file-loader@0.11.2 --save-dev

Criar regras para trabalhar com fontes do bootstrap

Resolvendo o problema de carregamento atrazado do css ou FOUC significa flash of unstyled content.

npm install extract-text-webpack-plugin@3.0.0 --save-dev

No ambimente de produção o css deve ser minificado, para isso usamos

npm install optimize-css-assets-webpack-plugin@2.0.0 cssnano@3.10.0 --save-dev
