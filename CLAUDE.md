# houmiya-recruit — プロジェクト設定

## プロジェクト概要

ほうみや（蓬宮）の採用サイト。求人・リクルート専用ページ。

## 技術スタック

- Next.js 14 (App Router) + React 18
- TypeScript
- Tailwind CSS v3
- Framer Motion（アニメーション）
- GSAP + ScrollTrigger（スクロールアニメーション）
- Lenis（スムーススクロール）

## 業種特性

採用・リクルートサイトのため以下を重視する。

- 働く環境・社風・カルチャーの視覚的訴求
- 社員インタビュー・1日の流れ
- 福利厚生・待遇の明示
- キャリアパス・成長機会の訴求
- 応募フォーム・Indeedリンクの最適化
- 職場写真のリアルで親しみやすい演出

## SEO特記

採用サイトのため `JobPosting` Schema.org も実装する。

## 開発コマンド

```bash
npm run dev    # 開発サーバー起動
npm run build  # 本番ビルド
npm run lint   # Lint実行
```
