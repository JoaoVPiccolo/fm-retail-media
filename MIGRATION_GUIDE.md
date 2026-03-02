# 📱 Guia de Migração - Rotas Contato e Sobre

Bem-vindo ao guia de implementação das novas rotas de **Contato** e **Sobre** no projeto `fm-retail-media`.

## ✅ O que foi criado

### 1. **ContactRoute.tsx**

Localização: `src/routes/contactRoute/ContactRoute.tsx`

**Características:**

- Layout responsivo com seções lado a lado (mobile: coluna, desktop: linha)
- Formulário de contato com validação básica (MUI TextField)
- Informações de contato: email, telefone, suporte técnico
- Cards de suporte destacando tipos de contato
- Integração com NavBar e Footer
- Tema consistente com o resto do projeto

**Como usar:**

```tsx
import ContactRoute from "./routes/contactRoute/ContactRoute.tsx";

// Já adicionado ao router em main.tsx:
// {
//   path: "/contato",
//   element: <ContactRoute />,
// }
```

### 2. **AboutRoute.tsx**

Localização: `src/routes/aboutRoute/AboutRoute.tsx`

**Características:**

- Header com título destacado "Sobre Nós"
- Seção de história da empresa (3 parágrafos)
- Cards de estatísticas (Fundação, Clientes, Cidades, Pessoas Impactadas)
- Seção "Por que escolher a Flexmedia?" com 6 cards de valores
- Layout responsivo
- Tema consistente com o resto do projeto

**Como usar:**

```tsx
import AboutRoute from "./routes/aboutRoute/AboutRoute.tsx";

// Já adicionado ao router em main.tsx:
// {
//   path: "/sobre",
//   element: <AboutRoute />,
// }
```

### 3. **utils.ts** - Configuração de Navegação

Localização: `src/utils.ts`

**Exports disponíveis:**

- `navigationItems`: Array com itens de navegação (Home, Cases, Sobre, Contato)
- `footerLinks`: Links para o footer
- `socialLinks`: Links de redes sociais e contato
- `contactInfo`: Informações de contato centralizadas

**Como usar:**

```tsx
import { navigationItems, socialLinks, contactInfo } from "./utils.ts";

// Usar em componentes que precisem de navegação
const items = navigationItems.map((item) => (
  <Link key={item.link} to={item.link}>
    {item.label}
  </Link>
));

// Acessar informações de contato
console.log(contactInfo.email); // "vendas@flexmedia.com.br"
console.log(contactInfo.phone); // "(11) 5535-0050"
```

### 4. **main.tsx** - Router Atualizado

O arquivo `main.tsx` foi atualizado com as novas rotas:

```tsx
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cases/", element: <CaseHome /> },
  { path: "/contato", element: <ContactRoute /> }, // ✨ Nova
  { path: "/sobre", element: <AboutRoute /> }, // ✨ Nova
]);
```

## 🎨 Padrão de Design Seguido

Ambas as rotas seguem o padrão visual estabelecido no projeto:

### Tipografia

- **Títulos**: `Montserrat` com `fontWeight: 700`
- **Subtítulos**: `Montserrat` com `fontWeight: 600`
- **Corpo**: `Inter` ou `Montserrat`
- **Responsividade**: Usando `clamp()` para escalas fluidas

### Cores

- **Primária**: `theme.palette.primary.main` (#76A86F)
- **Primária Light**: `theme.palette.primary.light` (#A2FFA8)
- **Texto**: `theme.palette.text.primary` (branco)
- **Fundo**: `theme.palette.background.default` (#0a0a0a)

### Responsividade

- **Breakpoints**: xs, sm, md, lg (consistentes com material-ui)
- **Spacing**: Usando gaps e paddings responsivos
- **Layouts**: Flexbox com `flexDirection` ajustável por breakpoint

## 📋 Estrutura das Rotas

### ContactRoute

```
┌─ NavBar (fixo no topo)
├─ Container Principal
│  ├─ Header ("Nos Contate")
│  ├─ Separadores (dividers)
│  └─ Seção de Contato (2 colunas em desktop)
│     ├─ Coluna Esquerda
│     │  ├─ Descrição
│     │  ├─ Métodos de Contato (email, phone, suporte)
│     │  └─ Cards de Suporte (3 cards)
│     └─ Coluna Direita
│        └─ Formulário de Contato
└─ Footer
```

### AboutRoute

```
┌─ NavBar (fixo no topo)
├─ Container Principal
│  ├─ Header ("Sobre Nós")
│  ├─ Seção de Conteúdo
│  │  ├─ Coluna Esquerda: Histórico (3 parágrafos)
│  │  └─ Coluna Direita: Cards de Estatísticas (4 cards)
│  └─ Seção "Por que Escolher?" (grid 3x2 de cards)
└─ Footer
```

## 🔧 Como Adicionar as Rotas ao Navegador

Se você tem um componente de navegação customizado, você pode integrar assim:

### Opção 1: Usando o array de navegação

```tsx
import { navigationItems } from "./utils.ts";
import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <nav>
      {navigationItems.map((item) => (
        <Link key={item.link} to={item.link}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
```

### Opção 2: Atualizando o NavBar existente

Se quiser adicionar links de navegação ao `NavBar.tsx` existente:

```tsx
// Adicionar ao NavBar.tsx
import { navigationItems } from "./utils.ts";
import { Link } from "react-router-dom";

// ... dentro do NavBar component:
<Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
  {navigationItems.map((item) => (
    <Link key={item.link} to={item.link} style={{ textDecoration: "none" }}>
      <Typography sx={{ color: "white", cursor: "pointer" }}>
        {item.label}
      </Typography>
    </Link>
  ))}
</Box>;
```

## 💡 Customizações Possíveis

### Mudar emails/telefones

Edite `src/utils.ts`:

```tsx
export const contactInfo = {
  email: "seu@email.com",
  phone: "(seu telefone)",
  support: "suporte@email.com",
};
```

### Adicionar/Remover itens de navegação

```tsx
// src/utils.ts
export const navigationItems: NavigationItem[] = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/blog" }, // ✨ Novo
  // ... outros itens
];
```

### Mudar cores das rotas

As rotas usam `theme.palette`, então mudar o tema afeta automaticamente:

```tsx
// src/theme/theme.ts
export const theme = createTheme({
  palette: {
    primary: {
      main: "#seu-color",
      light: "#sua-color-light",
    },
    // ...
  },
});
```

### Formulário de Contato

Para adicionar integração com servidor/API, atualize a função `handleSubmit` em `ContactRoute.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setSubmitted(true);
      // Limpar formulário...
    }
  } catch (error) {
    console.error("Erro ao enviar:", error);
  }
};
```

## 🧪 Testando as Rotas

Após completar a integração, teste:

1. **Navegação**: Acesse `/contato` e `/sobre` no navegador
2. **Responsividade**: Teste em mobile, tablet e desktop
3. **Form**: Preencha o formulário de contato e verifique comportamento
4. **Links**: Clique em emails e telefones para garantir que abrem correctly

## 📝 Checklist de Implementação

- [x] ContactRoute.tsx criado e funcional
- [x] AboutRoute.tsx criado e funcional
- [x] Rotas adicionadas ao router (main.tsx)
- [x] utils.ts com configurações de navegação
- [ ] Integrar navigationItems ao NavBar (opcional)
- [ ] Testar rotas em diferentes tamanhos de tela
- [ ] Customizar informações de contato se necessário
- [ ] Implementar envio de formulário (backend/API)
- [ ] Adicionar analytics/tracking se desejado

## 🐛 Troubleshooting

### "Página em branco ao acessar /contato ou /sobre"

- Verifique se as importações em `main.tsx` estão corretas
- Confirme que os arquivos estão em: `src/routes/contactRoute/` e `src/routes/aboutRoute/`

### "Formulário não funciona"

- O formulário atual é apenas um exemplo com validação local
- Para produção, implemente `handleSubmit` com chamada a API real

### "Tema não sendo aplicado corretamente"

- Confirme que `ThemeProvider` está envolvendo o `RouterProvider` em `main.tsx`
- Verifique se está usando `useTheme()` dentro de componentes MUI

### "Layout quebrado em mobile"

- As rotas usam `flexDirection: { xs: "column", md: "row" }`
- Se não está funcionando, verifique se breakpoints estão corretos em `theme.ts`

## 📚 Referências

- [Material-UI Documentation](https://mui.com/)
- [React Router v7](https://reactrouter.com/)
- [Projeto Theme](src/theme/theme.ts)
- [Responsive Utils](src/theme/responsiveUtils.ts)

## 🎯 Próximas Melhorias Sugeridas

1. **Integração com HubSpot**: Se preferir usar HubSpot form como em `LetsTalk.tsx`
2. **Animações**: Adicionar animações ao scroll com GSAP
3. **SEO**: Adicionar Helmet para meta tags por página
4. **Breadcrumbs**: Adicionar navegação por breadcrumbs
5. **Sitemap**: Atualizar sitemap.xml com novas rotas
6. **Analytics**: Adicionar tracking de páginas

---

**Data**: 02/03/2026  
**Versão**: 1.0  
**Status**: ✅ Implementado com sucesso
