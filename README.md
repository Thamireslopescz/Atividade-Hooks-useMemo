# Atividade Hooks - Grupo

Por: Everton Cadona, Matheus Palma, Patrick Dutra e Thamires Lopes

## O que são Hooks?

![https://media4.giphy.com/media/KGSxFwJJHQPsKzzFba/giphy.gif?cid=7941fdc6uduoqkhiiiym5nlxjo653h9oyevc8lio74vqvna4&ep=v1_gifs_search&rid=giphy.gif&ct=g](https://media4.giphy.com/media/KGSxFwJJHQPsKzzFba/giphy.gif?cid=7941fdc6uduoqkhiiiym5nlxjo653h9oyevc8lio74vqvna4&ep=v1_gifs_search&rid=giphy.gif&ct=g)

Traduzindo para o português, “**Hooks**” significa **ganchos**. Esses hooks foram introduzidos no React a partir da versão 16.8 da biblioteca, sendo recursos que permitem que você gerencie o estado, ciclos de vida do componente e outros recursos do React sem precisar escrever componentes em forma de classes.

Antes da inclusão dos hooks nessa biblioteca, os componentes eram escritos em forma de classes, utilizando funções como `setState()`, `componentDidMount()`, dentre outras.

Abaixo, vejamos como era a escrita de um componente com classes:

```jsx
import React, { Component } from 'react';

class ComponenteClasseExemplo extends Component {
  render() {
    return (
      <div>Exemplo de um componente com classes</div>
    );
  }
}

```

Mas, isso quer dizer que tudo que aprendi de React com classes não serviu de nada? Não necessariamente. 

Alguns projetos legados ainda utilizam esse método nas aplicações e, caso você saiba manipular componentes com classe, é mais um diferencial em seu currículo.

Vejamos, o mesmo exemplo acima reescrito, sem a criação de classes:

```jsx
import React from 'react';

function ComponenteHookExemplo {
    return (
      <div>
        Exemplo de um componente sem classes.
      </div>
    );
}

```

O componente fica muito mais simples, não é? Além de deixar nosso código legível para outras pessoas programadoras poderem entender, nossa aplicação utilizando Hooks ficará muito mais robusta, com um melhor desempenho.

- **useMemo**
    
    `useMemo` é um Hook que permite memoizar valores caros de serem calculados. Ele recebe uma função e um array de dependências e retorna o valor calculado.
    
    ```jsx
    import React, { useMemo } from 'react';
    
    function App() {
      const value = useMemo(() => {
        console.log('Valor calculado');
        return Math.random();
      }, []);
    
      return <div>{value}</div>;
    }
    
    ```
    

# Instalando o React Hooks

Para começar a utilizar os Hooks no React, você precisará ter a versão 16.8 ou superior instalada em sua aplicação. Você pode instalar o React utilizando o npm ou o yarn.

Para instalar com npm, execute o seguinte comando no terminal:

```
npm install react@16.8.0 react-dom@16.8.0

```

Para instalar com yarn, execute o seguinte comando no terminal:

```
yarn add react@16.8.0 react-dom@16.8.0

```

Após instalar o React, você pode começar a utilizar os Hooks em seus componentes funcionais. Lembre-se de consultar a [documentação oficial do React](https://pt-br.react.dev/reference/react) para mais informações sobre os Hooks disponíveis e como utilizá-los em sua aplicação.

![Captura de tela 2023-08-15 093219.png](Atividade%20Hooks%20-%20Grupo%20f9eefd4f36584ce58346c9fca1d5f26a/Captura_de_tela_2023-08-15_093219.png)

# Custom Hooks: Construindo Hooks Personalizados para Chamadas de API em React

Os Custom Hooks permitem criar funcionalidades reutilizáveis em React. Vamos explorar como construir um Custom Hook para buscar dados de uma API de maneira fácil.

1. **Criação do Custom Hook: useFetch**

Um Custom Hook é uma função que inicia com a palavra-chave "use". Por exemplo, "useSearch" ou "usePaper". Vamos criar um Hook chamado "useFetch" para buscar dados de uma API.

```jsx
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setError(data.error);
        setData(data.joke);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

```

O Hook `useFetch` tem três estados iniciais:

- `data`: contém a resposta da API;
- `error`: mantém uma mensagem de erro, se ocorrer;
- `loading`: indica se os dados da API estão sendo buscados. Inicialmente, o estado de carregamento é verdadeiro e é definido como falso após obter os dados.
1. **Utilizando o Custom Hook**

Vamos ver como usar o Custom Hook "useFetch" em um componente chamado "Piadas".

```jsx
import React from "react";
import useFetch from "./useFetch"; // Importando o Custom Hook

const Piadas = () => {
  const url = "<https://sv443.net/jokeapi/v2/joke/Programming?type=single>"; // URL da API de piadas
  const { data, loading, error } = useFetch(url); // Usando o Custom Hook

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      {error && <div>{error}</div>}
      {data && <div>{data}</div>}
    </div>
  );
};

export default Piadas;

```

O componente "Piadas" usa o Custom Hook "useFetch" para buscar dados da API de piadas. Ele exibe "Carregando..." enquanto os dados estão sendo buscados. Em seguida, exibe os dados ou mensagens de erro, se houverem.

Os Custom Hooks simplificam a reutilização de lógica em diferentes componentes, tornando o código mais limpo e eficiente.

---

# Curiosodades Hooks React:

1. **Introdução Revolucionária**: Os React Hooks foram introduzidos pela primeira vez na versão 16.8 do React. Eles representaram uma mudança significativa na forma como o estado e o ciclo de vida eram gerenciados em componentes funcionais.
2. **Lógica Reutilizável**: Uma das principais motivações para a criação dos React Hooks foi permitir a reutilização de lógica de estado e efeitos colaterais entre componentes diferentes, sem a necessidade de criar classes.
3. **useState e useEffect São os Mais Comuns**: Dois dos Hooks mais amplamente utilizados são **`useState`** e **`useEffect`**. O **`useState`** permite que componentes funcionais tenham seu próprio estado local, enquanto o **`useEffect`** gerencia efeitos colaterais, como chamadas de API, assinaturas de eventos, entre outros.
4. **Custom Hooks**: Além dos Hooks internos fornecidos pelo React, os desenvolvedores podem criar seus próprios Hooks personalizados. Isso facilita a criação de abstrações reutilizáveis para lógica complexa em componentes.
5. **Não Quebra Compatibilidade**: A introdução dos React Hooks não quebrou a compatibilidade com as versões anteriores do React. Isso significa que os desenvolvedores podem optar por continuar usando classes se preferirem ou adotar Hooks gradualmente.
6. **Performance Otimizada**: Os React Hooks, quando usados corretamente, podem ajudar a otimizar o desempenho dos componentes. Isso ocorre porque eles permitem controlar quando um componente é renderizado novamente e reduzir a quantidade de código duplicado.
7. **UseMemo e UseCallback**: Além de **`useState`** e **`useEffect`**, Hooks como **`useMemo`** e **`useCallback`** permitem otimizar a performance, evitando cálculos desnecessários ou re-renderizações de componentes.
8. **Cuidado com Efeitos Colaterais**: Embora o **`useEffect`** seja poderoso para tratar efeitos colaterais, é importante usá-lo com cuidado para evitar loops infinitos ou chamadas excessivas de API.
9. **Rastreamento de Dependências Automático**: O React Hooks faz automaticamente o rastreamento das dependências dos efeitos. Isso significa que você pode se concentrar na lógica e deixar o React cuidar da atualização apropriada do componente.
10. **Uso Crescente na Comunidade**: Os Hooks têm ganhado cada vez mais popularidade na comunidade React desde sua introdução, e muitos projetos e bibliotecas agora os utilizam extensivamente.
    
    <aside>
    💡 Se você quer se aprofundar ainda mais sobre Hooks e como eles funcionam, recomendamos que assista este vídeo. Ele aborda os principais Hooks do React e fornece uma visão geral de como eles podem ser usados para melhorar a performance e a organização do código em projetos React.
    
    </aside>
    
    [https://www.youtube.com/watch?v=O3Uy2mXAta8](https://www.youtube.com/watch?v=O3Uy2mXAta8)
    
    # Faaala Dev!
    
    É com muita alegria que queremos te agradecer por ter chegado até aqui. É incrível ver o teu interesse e dedicação no material que estamos compartilhando!
    
    Se em algum momento pintar alguma dúvida, ideia bacana ou até mesmo um projeto que você queira discutir, saiba que estamos à disposição para trocar uma ideia de maneira amigável e construtiva. Afinal, estamos todos juntos nessa jornada de aprendizado.
    
    Então, seguimos na vibe dos estudos e que cada trecho do conteúdo acrescente um novo nível ao teu conhecimento. Que as descobertas feitas aqui guiem os teus próximos passos de forma muito positiva.
    
    Um forte abraço,
    
    Grupo Hooks.