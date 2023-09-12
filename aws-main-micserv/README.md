# Microsserviços de e-commerce orientados a serveless-events

Este é um projeto de e-commerce orientados a serveless-events para desenvolvimento TypeScript com CDK. O arquivo `cdk.json` informa ao CDK Toolkit como executar o seu aplicativo.

## O que está incluído neste repositório
Seguiremos a arquitetura de referência, que é um **aplicativo de comércio eletrônico sem servidor** do mundo real e inclui;

* **REST API** e **CRUD** endpoints usando **AWS Lambda, API Gateway**
* **Data persistence** usando **AWS DynamoDB**
* **Decouple microservices** com eventos usando **Amazon EventBridge**
* **Message Queues** para comunicação entre serviços usando **AWS SQS**
* **Cloud stack development** com **IaC** usando **AWS CloudFormation and AWS CDK**

## Pré-requisitos
Você precisará das seguintes ferramentas:

* AWS Account e Usuário
* AWS CLI
* NodeJS
* AWS CDK Toolkit
* Docker

### Execute o projeto
Siga estas etapas para configurar seu ambiente de desenvolvimento: (Antes de executar, inicie o Docker Desktop)
1. Clone o repositório
2. No diretório raiz que inclui os arquivos **cdk.json**, execute o comando abaixo:
```csharp
implantação de cdk
```
>Nota: certifique-se de que seu Docker Desktop esteja em execução antes de executar o comando cdk deploy.

4. Aguarde o provisionamento de todos os microsserviços na nuvem AWS. e é isso!

5. Você pode **iniciar microsserviços** conforme os URLs abaixo:

* **Product API -> https://xxx.execute-api.ap-southeast-1.amazonaws.com/prod/product**
* **Basket API -> https://xxx.execute-api.ap-southeast-1.amazonaws.com/prod/basket**
* **Ordering API -> https://xxx.execute-api.ap-southeast-1.amazonaws.com/prod/order**

## Comandos úteis

 * `npm run build`   compilar texto digitado para js
 * `npm run watch`   observe as mudanças e compile
 * `npm run test`    realizar os testes de unidade jest
 * `cdk deploy`      implantar esta pilha em sua conta/região padrão da AWS
 * `cdk diff`        compare a pilha implantada com o estado atual
 * `cdk synth`       emite o modelo CloudFormation sintetizado

## Continuação e base de trabalho dos autores:

* **Mehmet Ozkaya** - *Trabalho inicial inspiracional* Veja o projeto arquitetado por ele ->- [mehmetozkaya](https://github.com/mehmetozkaya)
* **Rick Andersons** - *Trabalho inicial c/sdk inspiracional*
* **Juliano Costanhatzi** - *Trabalho inicial c/basket inspiracional*
* **Hiago Junior** - *Trabalho final c/API*
