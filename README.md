****# Dashboard Omie - Teste Frontend

Este é um projeto de dashboard desenvolvido como teste técnico para a empresa Omie, demonstrando conhecimentos em arquitetura frontend moderna, consumo de APIs e otimização de performance.

## 🎯 Objetivo do Projeto

O projeto foi desenvolvido para demonstrar:
- Arquitetura escalável com Next.js 16
- Estratégias de data fetching (server-side e client-side)
- Implementação de cache inteligente
- Design responsivo com CSS Grid e styled-components
- Gerenciamento de estado e formulários

## 🚀 Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TanStack Query** - Gerenciamento de estado servidor e cache
- **Styled Components** - CSS-in-JS para estilização
- **TailwindCSS** - Utility-first CSS framework
- **TypeScript** - Tipagem estática
- **Zod** - Validação de schemas
- **React Hook Form** - Gerenciamento de formulários
- **Zustand** - Gerenciamento de estado global minimalista

## 📦 Instalação e Execução

```bash
# Instalar dependências
pnpm install

# Executar em modo de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Executar versão de produção
pnpm start
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas

```
├── app/                    # App Router do Next.js
│   ├── (home)/            # Grupo de rotas da home
│   ├── products/          # Página de produtos
│   └── users/             # Página de usuários
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes de interface base
│   ├── product/          # Componentes específicos de produtos
│   └── user/             # Componentes específicos de usuários
├── services/             # Camada de serviços/API
├── schemas/              # Validação com Zod
├── stores/               # Estado global com Zustand
├── hooks/                # Custom hooks
└── lib/                  # Configurações de bibliotecas
```

### Layout Responsivo com CSS Grid

O layout utiliza `grid-template-areas` para facilitar a responsividade:

```css
grid-template-areas:
  "header header header"
  "sidebar content content"
  "sidebar content content";
```

Esta abordagem permite reorganizar facilmente o layout em diferentes breakpoints, mantendo o código limpo e semântico.

## 🗂️ Gerenciamento de Estado Global com Zustand

### Implementação do Estado de Busca

Para gerenciar o estado da busca de forma global entre componentes, utilizamos Zustand - uma solução minimalista e performática:

```typescript
// stores/search.store.ts
import { create } from "zustand";

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  clearSearch: () => set({ searchQuery: "" }),
}));
```

### Integração com Componentes

#### 1. Formulário de Busca (Header)

```typescript
// components/form/search-form.component.tsx
export const SearchForm = () => {
  const { setSearchQuery } = useSearchStore();
  
  const onSubmit = handleSubmit((data: SearchDataSchema) => {
    setSearchQuery(data.search);
  });

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Faça uma busca, ex: macbook"
        {...register("search")}
      />
    </form>
  );
};
```

#### 2. Lista de Produtos (Consumidor)

```typescript
// components/product/product-list.component.tsx
export const ProductList = () => {
  const { searchQuery } = useSearchStore();

  // Query para produtos normais (sem busca)
  const { data: productsData, isLoading: isLoadingProducts } = useQuery({
    queryKey: ["products", skip],
    queryFn: () => getProducts({ skip }),
    enabled: !searchQuery, // Só executa se não há busca ativa
  });

  // Query para resultados de busca
  const { data: searchData, isLoading: isLoadingSearch } = useQuery({
    queryKey: ["search", searchQuery, skip],
    queryFn: () => getSearchProduct({ query: searchQuery, skip }),
    enabled: !!searchQuery, // Só executa se há busca ativa
  });

  // Seleciona dados baseado no estado da busca
  const data = searchQuery ? searchData : productsData;
  const isLoading = searchQuery ? isLoadingSearch : isLoadingProducts;
};
```

#### 3. Logo com Reset (Header)

```typescript
// components/header/header-logo.component.tsx
export const HeaderLogo = () => {
  const { clearSearch } = useSearchStore();

  return (
    <LogoStyle onClick={clearSearch}>
      Omie
    </LogoStyle>
  );
};
```

### Vantagens do Zustand para Busca

**Performance:**
- Sem providers desnecessários
- Re-renders otimizados apenas nos componentes que usam o estado
- Bundle size mínimo (~2.9kb)

**Simplicidade:**
- API intuitiva sem boilerplate
- TypeScript nativo
- Não requer context providers

**Funcionalidades:**
- Estado persistente durante navegação
- Fácil debugging
- Integração natural com React Query

### Fluxo de Busca Implementado

1. **Input no Header**: Usuário digita e submete busca
2. **Estado Global**: Zustand armazena `searchQuery`
3. **Lista de Produtos**: Reage ao estado e alterna entre queries
4. **TanStack Query**: Gerencia cache separado para busca e listagem
5. **Reset**: Logo permite limpar busca e voltar à listagem

### Cache Strategy com Busca

```typescript
// Cache separado por contexto
queryKey: ["products", skip]        // Lista normal
queryKey: ["search", searchQuery, skip]  // Resultados de busca

// Queries condicionais
enabled: !searchQuery   // Lista só quando não há busca
enabled: !!searchQuery  // Busca só quando há query
```

Esta arquitetura permite implementar facilmente features como histórico de buscas, sugestões automáticas e filtros avançados.

## 🔄 Estratégias de Data Fetching

### 1. Server-Side com `use cache` (Next.js 16)

Para dados que mudam com pouca frequência, utilizamos o cache do servidor:

```typescript
// services/user.service.ts
export async function getUsers({ skip = 0 }: { skip?: number }) {
  "use cache";
  
  cacheLife("hours");
  
  return await fetch(`${BASE_URL}/users?limit=10&skip=${skip}`)
    .then((res) => res.json());
}
```

**Vantagens:**
- Cache automático no servidor
- Reduz latência e carga na API
- Melhora SEO e performance inicial
- Dados disponíveis no primeiro render

### 2. Client-Side com TanStack Query

Para dados que requerem interatividade (paginação, busca), utilizamos TanStack Query:

```typescript
// components/product/product-list.component.tsx
const { data, isLoading, error } = useQuery<ProductListDataSchema>({
  queryKey: ["products", skip],
  queryFn: async () => {
    const products = await getProducts({ skip });
    return products;
  },
});
```

**Vantagens:**
- Cache inteligente no cliente
- Sincronização automática
- Estados de loading/error gerenciados
- Invalidação e refetch automáticos
- Otimização para paginação e busca

### Quando Usar Cada Estratégia

| Cenário | Estratégia | Motivo |
|---------|------------|--------|
| Dados estáticos/semi-estáticos | Server Cache (`use cache`) | SEO, performance inicial |
| Listas com paginação | TanStack Query | Interatividade, cache por página |
| Busca em tempo real | TanStack Query + Zustand | Estado global, cache de queries |
| Dados do usuário | Server Cache | Segurança, hidratação |
| Estado de UI global | Zustand | Performance, simplicidade |

## 🎨 Estratégia de Estilização

### Styled Components (Principal)

Utilizado para componentes complexos e temas:

```typescript
export const ContainerStyle = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content";
  // ...
`;
```

### TailwindCSS (Complementar)

Usado para utilitários e prototipagem rápida:

```tsx
<body className={`${robotoSans.variable} ${robotoMono.variable} scroll-smooth antialiased`}>
```

Esta combinação oferece flexibilidade máxima - styled-components para lógica complexa e Tailwind para utilitários rápidos.

## 📊 Funcionalidades Implementadas

### Dashboard Principal
- KPIs dinâmicos (total de produtos, categorias, preço médio)
- Componentes de loading skeleton
- Layout responsivo

### Gestão de Produtos
- Lista paginada com TanStack Query
- Busca global com Zustand + TanStack Query
- Cache inteligente separado por contexto (lista vs busca)
- Estados de loading e erro
- Reset de busca via logo

### Gestão de Usuários  
- Server-side rendering com cache
- Avatares com fallback de loading
- Dados otimizados para SEO

✅ **Implementado** - Busca funcional com estado global Zustand e cache otimizado.

## 🔧 Configurações Importantes

### TanStack Query Setup

```typescript
// lib/tanstack-query.lib.ts
export const queryClient = new QueryClient();

// providers/index.tsx
<QueryClientProvider client={queryClient}>
  {children}
</QueryClientProvider>
```

### Zustand Store Setup

```typescript
// stores/search.store.ts
export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  clearSearch: () => set({ searchQuery: "" }),
}));
```

### Cache Configuration

```typescript
// Configuração de cache do servidor
cacheLife("hours"); // Cache por 1 hora

// Configuração de query keys para cache do cliente
queryKey: ["products", skip] // Cache por página
```

## 📝 Considerações Técnicas

### Performance
- Lazy loading de componentes
- Code splitting automático do Next.js
- Otimização de imagens com next/image
- Cache estratégico em múltiplas camadas

### Acessibilidade
- Semantic HTML
- ARIA labels nos componentes
- Navegação por teclado
- Contraste adequado

### SEO
- Meta tags dinâmicas
- Server-side rendering
- Structured data
- Sitemap automático

---

**Desenvolvido por**: Breno Guardia  
**Empresa**: Teste Técnico Omie  
**Versão**: 0.1.0
