export const manifest = {
  screens: {
    scr_0wb8hj: { name: "العربية (AR)", route: "/ar", position: { "x": 160, "y": 220 } },
    scr_q5km0b: { name: "English (EN)", route: "/en", position: { "x": 1560, "y": 220 } },
    scr_ua3b9e: { name: "Türkçe (TR)", route: "/tr", position: { "x": 4360, "y": 220 } },
    scr_wyowyn: { name: "Français (FR)", route: "/fr", position: { "x": 2960, "y": 220 } }
  },
  sections: {
    sec_ky20hn: { name: "Language Selection", x: 0, y: 0, width: 5720, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_ky20hn", children: [
    { kind: "screen", id: "scr_0wb8hj" },
    { kind: "screen", id: "scr_q5km0b" },
    { kind: "screen", id: "scr_wyowyn" },
    { kind: "screen", id: "scr_ua3b9e" }]
  }]

};