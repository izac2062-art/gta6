# GTA 6 Creator Pack — pacote corrigido para Vercel

## Corrigido para evitar 404
Os arquivos do site estão na raiz do ZIP: `index.html`, `styles.css`, `script.js`, `config.js`, `termos.html`, `privacidade.html` e `vercel.json`.

## Publicação na Vercel
1. Extraia o ZIP no computador.
2. No projeto da Vercel, envie/conecte a pasta que contém diretamente `index.html` (não a pasta pai que contém outra pasta `gta6-landing`).
3. Em Settings → Build and Deployment, use Framework Preset **Other**, Build Command vazio e Output Directory `.`.
4. Faça um novo deploy e abra o domínio de produção.

Se publicar pelo GitHub, confirme que `index.html` aparece na raiz do repositório, no mesmo nível de `styles.css`.

## Checkout
Os links da Kiwify ainda precisam ser adicionados em `config.js` depois de criar os produtos. Preencha `checkout.basic` e `checkout.pro` com URLs oficiais.
