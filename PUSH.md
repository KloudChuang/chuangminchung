# 推送與部署流程備忘

莊明中藝術家網站 — GitHub 推送說明

- **遠端 repo**：https://github.com/KloudChuang/chuangminchung
- **主分支**：`main`
- **SSH 認證**：使用 `~/.ssh/config` 裡的 host alias `github-kloud`
  （對應金鑰 `~/.ssh/id_ed25519_kloud`）。
  > ⚠️ 注意：一般的 `git@github.com:...` 會被拒絕（Permission denied），
  > 一定要用 `git@github-kloud:...` 這個位址。

remote 已經設定好（`git remote -v` 應該看到）：
```
origin  git@github-kloud:KloudChuang/chuangminchung.git
```

---

## 日常更新流程（最常用）

改完檔案後，在專案資料夾執行：

```bash
git add -A                       # 把所有改動（新增/修改/刪除）加入
git commit -m "描述這次改了什麼"   # 例如：更新作品集、修改首頁文字
git push origin main             # 推送到 GitHub
```

就這樣，三行搞定。

---

## 確認狀態的指令

```bash
git status        # 看哪些檔案被改了
git log --oneline -5   # 看最近 5 筆提交紀錄
```

---

## 進階：先推分支再合併（需要審核時才用）

如果想先放到一個分支、確認沒問題再合併進 main：

```bash
git checkout -b update-site      # 建立並切到新分支
git add -A
git commit -m "這次的改動說明"
git push -u origin update-site   # 推送分支

# 確認 OK 後合併回 main：
git checkout main
git merge update-site
git push origin main
```

---

## 第一次在新電腦設定時（備忘）

如果換電腦或重新 clone，需要：

1. 確認 `~/.ssh/config` 有這段：
   ```
   Host github-kloud
     HostName github.com
     User git
     IdentityFile ~/.ssh/id_ed25519_kloud
     IdentitiesOnly yes
   ```
2. 測試認證：`ssh -T git@github-kloud`
   （成功會顯示 `Hi KloudChuang/chuangminchung!`）
3. Clone：`git clone git@github-kloud:KloudChuang/chuangminchung.git`

---

## 常見問題

- **push 時出現 `Permission denied (publickey)`**
  → remote 位址沒用 `github-kloud`。修正：
  ```bash
  git remote set-url origin git@github-kloud:KloudChuang/chuangminchung.git
  ```

- **push 被拒絕說 `rejected ... fetch first`**
  → 遠端有別人/別處的新提交，先拉下來：
  ```bash
  git pull origin main
  ```
  然後再 `git push origin main`。
