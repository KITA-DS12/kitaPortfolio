# kitaPortfolio

北椋太 / KITA Ryota の個人ポートフォリオサイト。

公開URL: <https://xn--djr.net/>

## 技術スタック

- **Framework**: Nuxt 3
- **Content**: `@nuxt/content`
- **Styling**: SCSS
- **Infra**: AWS S3 + CloudFront + Route 53 + ACM（Terraform 管理）

## ローカル開発

Node のバージョンは `.nvmrc` に従う（Node 22 系では Nuxt 3.9.3 のプリレンダーが失敗するため Node 20 を使用）。

```bash
nvm use        # .nvmrc に従い Node 20 を有効化
make install   # 依存インストール（bun）
make dev       # http://localhost:3000
```

## ビルド・デプロイ

```bash
make build     # 静的サイトを生成
make deploy    # S3 同期 + CloudFront キャッシュ無効化
```

インフラの初期構築は `terraform/` 配下の HCL を参照。

## ディレクトリ

```
kitaPortfolio/
├── pages/          # ルーティング（index.vue のみ）
├── components/     # Hero / Works / Studies / History / Articles 等
├── layouts/        # レイアウト
├── assets/         # 画像・SCSS
├── server/         # サーバーサイド設定
├── terraform/      # AWS インフラ（S3 / CloudFront / Route 53）
└── nuxt.config.ts
```

## ライセンス

- **ソースコード**: MIT License（[LICENSE](./LICENSE) 参照）
- **コンテンツ**: 文章・画像・デザイン・経歴/業務記述は著者の個人表現物であり、**All Rights Reserved**。無断転載・流用はご遠慮ください
