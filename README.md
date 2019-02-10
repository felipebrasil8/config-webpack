# config-webpack

__Projeto base para a configuração do web-pack__

# Tratando arquivos css como módulos

```
npm install bootstrap@3.3.7 --save
npm install css-loader@0.28.4 style-loader@0.18.2 --save-dev
```

Resolvendo o arquivos de fonte do bootstrap

```
npm install url-loader@0.5.9 file-loader@0.11.2 --save-dev
```

Regras para trabalhar com fontes do bootstrap

```
{ 
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
    loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
},
{ 
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
},
{ 
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
    loader: 'file-loader' 
},
{ 
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
}
```

Resolvendo o problema de carregamento atrazado do css ou FOUC significa flash of unstyled content.

```
npm install extract-text-webpack-plugin@3.0.0 --save-dev
```

No ambimente de produção o css deve ser minificado, para isso usamos

```
npm install optimize-css-assets-webpack-plugin@2.0.0 cssnano@3.10.0 --save-dev
```
