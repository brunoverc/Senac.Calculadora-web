# README do Projeto Calculadora

## HTML + CSS

1. **Organização em Layout de Grade:**
   - Os botões foram organizados em um layout de grade para proporcionar uma estrutura mais organizada.

2. **Visual Mais Limpo com Ajustes de Tamanho de Fonte e Botões:**
   - Os tamanhos de fonte e dos botões foram ajustados para um visual mais limpo e agradável.

3. **Inclusão do Botão Zero:**
   - Adição de um botão zero para facilitar a inclusão de todos os dígitos.

4. **Centralização da Calculadora na Página:**
   - A calculadora foi centralizada na página para melhorar a experiência do usuário.

5. **Melhoria nos Estilos de Fonte para Maior Legibilidade:**
   - Os estilos de fonte foram aprimorados para proporcionar melhor legibilidade.

6. **Aparência Moderna com Ajustes de Cores e Sombra:**
   - As cores foram ajustadas, sombras sutis foram adicionadas e o border-radius foi melhorado para conferir à calculadora uma aparência moderna.

7. **Contraste Aprimorado e Legibilidade com Mudanças de Cores:**
   - As cores de fundo e de texto foram modificadas para criar um melhor contraste e melhorar a legibilidade.

8. **Efeito de Hover Suave com Transições nos Botões:**
   - Transições foram aplicadas aos botões para um efeito de hover mais suave.

9. **Design Responsivo para Telas Menores:**
   - A calculadora foi tornada responsiva para proporcionar uma experiência consistente em telas menores.

## JavaScript

- **Tratamento de Entrada de Números:**
  - Foi adicionada uma função específica chamada `handleNumberInput` para gerenciar entradas de números.
  - Essa função verifica se a entrada é zero e se já existem zeros no início da expressão. Se houver, ela não adiciona zeros adicionais no início, simulando o comportamento de uma calculadora típica onde zeros iniciais são ignorados.

- **Prevenção de Entradas Consecutivas de Zero:**
  - O código agora inclui uma verificação para garantir que entradas consecutivas de zero sejam ignoradas.
  - Se a expressão atual já for '0' e outro zero for pressionado, não será adicionado um zero adicional, resolvendo o problema mencionado.
