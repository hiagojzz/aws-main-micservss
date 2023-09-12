#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsMicroservicesStack } from '../lib/aws-microservices-stack';

const app = new cdk.App();
new AwsMicroservicesStack(app, 'AwsMicroservicesStack', {
  /* Se você não especificar 'env', esta pilha será independente do ambiente.
   * Recursos dependentes de conta/região e pesquisas de contexto não funcionarão,
   * mas um único modelo sintetizado pode ser implantado em qualquer lugar. */

  /* Remova o comentário da próxima linha para especializar esta pilha para a conta AWS
   * e Região que estão implícitas na configuração CLI atual. */
  // env: { conta: process.env.CDK_DEFAULT_ACCOUNT, região: process.env.CDK_DEFAULT_REGION },

  /* Remova o comentário da próxima linha se você souber exatamente qual conta e região você
   * deseja implantar a pilha. */
  // env: { conta: '123456789012', região: 'us-east-1' },

  /* Para obter mais informações, consulte https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});