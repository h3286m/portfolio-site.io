# ポートフォリオサイト

静的なHTML/CSS/JSだけで動きます。ビルド作業は不要です。

## 公開手順（GitHub Pages）
1. このフォルダの中身をGitHubのリポジトリにpushする
2. Settings → Pages → Branch を `main` / `(root)` にして保存
3. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される

## 更新のしかた
- 文章：`index.html` を直接編集する
- 実績を足す：`<article class="work">` のブロックを丸ごとコピーして書き換える
- 画像を足す：`images/` に置き、`<figure>` を1つコピーして `src` / `alt` / 文言を変える
- 色・余白：`css/style.css` の先頭の `:root` を変える
- メールアドレス：`index.html` の `m.higashiyama.noctc@gmail.com` を差し替える
