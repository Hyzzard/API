# API REST
> API REST para cadastro de usuários.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

API para acessar aplicações back-end, de modo que essa comunicação seja feita com os padrões definidos pelo estilo de arquitetura Rest.

![](../header.png)

## Exemplo de uso

Pode ser usada para cadastro de usuários em um aplicativo Android/IOS.

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).send({ mensagem: 'Ok, Deu certo!' });
});
```


## Histórico de lançamentos

* 0.2.1
    * MUDANÇA: Atualização de docs (código do módulo permanece inalterado)
* 0.2.0
    * MUDANÇA: Remove `setDefaultXYZ()`
    * ADD: Adiciona `init()`
* 0.1.1
    * CONSERTADO: Crash quando chama `baz()` (Obrigado @NomeDoContribuidorGeneroso!)
* 0.1.0
    * O primeiro lançamento adequado
    * MUDANÇA: Renomeia `foo()` para `bar()`
* 0.0.1
    * Trabalho em andamento

## Meta

Luiz Gustavo – [@UserHyzzard](https://twitter.com/UserHyzzard) – user.hyzzard@gmail.com

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

[https://github.com/hyzzard/Teste](https://github.com/hyzzard/Teste)

## Contributing

1. Faça o _fork_ do projeto (<https://github.com/hyzzard/Teste/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki