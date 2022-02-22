## Perguntas

- Performance:
  > getNumberDivisors |=> O(n*sqrt(n)) Time | O(n) Space
  
  > isPrime |=> O(sqrt(n)) Time | O(1) Space

- Escalabilidade:
  Encapsulando em funções diferentes (usando a ideia de microserviço), conseguimos deixar
  as funções isoladas para escalar somente o que é necessário.
  
- Disponibilidade:
  Como os serviços estão isolados, temos a capacidade de escalar um serviço especifico de acordo com a demanda, alocando em multi regioes, zonas de disponibilidade diferentes assim mantendo um serviço mais disponivel.
  
- Resiliência:
  Como as funções estão isoladas, podemos inserir um sistema de mensageria para resiliencia, então toda vez que for calculado os divisores, enviamos para mensagem a uma fila, e usamos um listener no serviço de verificar se é um número primo, dessa forma, caso o serviço de número esteja fora, as mensagens estarão persistidas e quando o serviço voltar, será intolerante a falhas.
  
- Robustez:
  O código é robusto, pois todos os erros e cenários estão sendo verificados

  ## Como rodar ?

```console
foo@bar:~$ yarn install
foo@bar:~$ yarn start
```