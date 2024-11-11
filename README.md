# デザインシステム

このプロジェクトは、**React**、**TypeScript**、および**Vite**を使用して構築されたデザインシステムです。開発、リント、UIコンポーネント開発のためのStorybookを含む最小限のセットアップが提供されています。

## はじめに

### 前提条件

以下がインストールされていることを確認してください：

- Node.js（バージョン14以上）
- npmまたはyarn

### インストール

1. リポジトリをクローンします：

   ```bash
   git clone <repository-url>
   cd designsystem

   ```

2. 依存関係をインストールします：

```
npm install

# または
yarn install
```

### 開発サーバーの起動

開発サーバーを起動するには、次のコマンドを実行します：

```
npm run dev
# または
yarn dev
```

これにより、ホットモジュールリプレースメント（HMR）を使用して、http://localhost:3000でアプリケーションが起動します。

### プロジェクトのビルド

プロダクション用にプロジェクトをビルドするには、次のコマンドを使用します：

```
npm run build
# または
yarn build
```

このコマンドは、TypeScriptファイルをコンパイルし、Viteプロジェクトをビルドします。

### リント

コードをリントするには、次のコマンドを実行します：

```
npm run lint
# または
yarn lint
```

### ビルドのプレビュー

プロダクションビルドをプレビューするには、次のコマンドを使用します：

```
npm run preview
# または
yarn preview
```

### Storybook

このプロジェクトには、UIコンポーネントを孤立して開発およびテストするためのStorybookが含まれています。

Storybookの起動
Storybookを起動するには、次のコマンドを実行します：

```
npm run storybook
# または
yarn storybook
```

Storybookはhttp://localhost:6006で利用可能になります。

### Storybookのビルド

Storybookの静的ビルドを作成するには、次のコマンドを使用します：

```
npm run build-storybook
# または
yarn build-storybook
```

これにより、storybook-staticディレクトリに静的なStorybookが生成されます。

## スクリプト

利用可能なスクリプトの概要は以下の通りです：

- dev: Vite開発サーバーを起動します。
- build: TypeScriptをコンパイルし、Viteプロジェクトをビルドします。
- lint: プロジェクトにESLintを実行します。
- preview: プロダクションビルドをプレビューします。
- storybook: Storybook開発サーバーを起動します。
- build-storybook: Storybookをプロダクション用にビルドします。

## 依存関係

このプロジェクトは、以下の主要な依存関係を使用しています：

- ReactおよびReactDOM: UIコンポーネントを構築するため。
- TypeScript: 型安全性を提供するため。
- Vite: 高速な開発およびビルドプロセスのため。
- Storybook: UIコンポーネントの開発およびテストのため。

## 開発依存関係

プロジェクトには、リント用のESLint、コードフォーマット用のPrettier、Storybook用のプラグインなど、さまざまな開発ツールが含まれています。
