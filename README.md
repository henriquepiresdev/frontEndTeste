# Projeto Open Finance

Aplicação React + Vite com integração a uma API.

## 📋 Pré-requisitos

- Node.js v18+
- npm/yarn/pnpm

## 🛠 Configuração Inicial

1. **Clone o repositório**:

```bash
git clone https://github.com/henriquepiresdev/frontEndTeste.git
cd frontEndTeste
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Crie o arquivo .env** (copie exatamente como abaixo):

```env
VITE_API_URL="http://localhost:3000"
```

4. **Execute a aplicação**:

```bash
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

## 🔄 Comandos Principais

```bash
npm run dev    # Inicia o servidor de desenvolvimento
npm run build  # Cria a build de produção
npm run preview  # Testa a build localmente
```

## ⚠️ Solução de Problemas

- **API não conecta?** Verifique se:
  - A API está rodando na porta 3000
  - O arquivo `.env` foi criado corretamente
- **Erros de instalação?** Execute:

```bash
rm -rf node_modules && npm install
```

## 📝 Licença

MIT License - henriquepiresdev
