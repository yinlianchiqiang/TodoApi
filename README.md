# TodoApi — 待辦事項管理系統

這是一個使用 **C#、ASP.NET Core Web API 與 MySQL**
開發的待辦事項管理專案，提供待辦事項的新增、查詢、修改與刪除功能，並透過網頁介面與資料庫進行資料管理。

## 專案介紹

本專案是個人學習專案，目的是練習後端 Web API 開發、資料庫操作，以及前後端整合。
透過此專案熟悉 ASP.NET Core 的基本架構，並使用 Entity Framework Core 與 MySQL 儲存及管理待辦事項資料。

## 使用技術

- **程式語言：** C#
- **後端框架：** .NET / ASP.NET Core Web API
- **資料庫：** MySQL
- **ORM：** Entity Framework Core
- **前端技術：** HTML、CSS、JavaScript
- **開發工具：** Visual Studio、MySQL Workbench

## 主要功能

- **待辦事項查詢：** 取得資料庫中的待辦事項清單。
- **新增待辦事項：** 新增待辦事項並儲存至資料庫。
- **修改待辦事項：** 更新待辦事項的內容與完成狀態。
- **刪除待辦事項：** 移除不再需要的待辦事項。
- **完成狀態管理：** 標記待辦事項是否已完成。
- **網頁介面：** 透過前端頁面操作待辦事項。

## 專案架構

```text
TodoApi/
├── Controllers/       # API 控制器
├── Models/            # 資料模型
├── Data/              # 資料庫相關程式碼（若有）
├── wwwroot/           # 前端靜態檔案（若有）
├── Program.cs         # 應用程式設定與啟動
├── appsettings.json   # 應用程式設定
├── TodoApi.csproj     # 專案與套件設定
├── .gitignore         # Git 忽略規則
└── README.md          # 專案說明文件
```

## 執行環境

- 已安裝 .NET SDK
- 已安裝並啟動 MySQL Server
- 已建立 MySQL 資料庫
- 已設定專案所需的資料庫連線資訊

## 後續改善方向

- 前端網頁設計
- 加強輸入資料驗證與錯誤處理。
- 改善程式架構與可維護性。
- 加強資料庫連線設定及敏感資訊管理。
- 增加自動化測試。

---

此專案持續作為個人後端開發學習與實作練習。
