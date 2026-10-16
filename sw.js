// 選股平台 PWA service worker（最小版：不快取資料，只讓瀏覽器可安裝）
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
