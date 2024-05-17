// cra.config.js
module.exports = {
  // Configurações do servidor de desenvolvimento
  devServer: {
    port: 3000, // Porta padrão para o servidor de desenvolvimento
    open: true, // Abre o navegador após iniciar o servidor
    proxy: {
      "/api": "http://localhost:5000", // Proxy para chamadas de API
    },
  },

  // Personalizações do Babel
  babel: {
    presets: [
      // Adicione seus presets personalizados aqui
    ],
    plugins: [
      // Adicione seus plugins personalizados aqui
    ],
  },

  // Variáveis de Ambiente
  env: {
    PUBLIC_URL: JSON.stringify("caminho/para/assets/publicos"),
  },

  // Customização do ESLint
  eslint: {
    rules: {
      // Suas regras personalizadas aqui
    },
  },

  // Configurações do Webpack
  webpack: {
    alias: {
      "@components": "src/components",
      "@utils": "src/utils",
      // Adicione mais aliases conforme necessário
    },
    module: {
      rules: [
        // Adicione ou modifique loaders aqui
      ],
    },
    plugins: [
      // Adicione ou modifique plugins aqui
    ],
    // Outras modificações avançadas
  },

  // Outras configurações do Create React App
  // ...
};
