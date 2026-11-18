// ==================================================================
//  LOCKET PHOTOBOOTH - GOI CUA RIENG BAN - NCA
// ==================================================================

// DIA CHI CHUA ANH CUA BAN - sua dong nay thanh dia chi cua ban:
const MY_HOST = "https://cdn.jsdelivr.net/gh/TEN-CUA-BAN/locket-frames@main";

// Danh sach khung cua ban: id, ten hien thi, ten file anh, mau chu dao
const MY_FILTERS = [
  { id: "frame_noel", name: "Khung Noel", file: "pb_xmas_4cut.png", tint: "#2E7D32", colors: ["#2E7D32", "#C62828"] },
  { id: "frame_mua_thu", name: "Có Hẹn Với Mùa Thu", file: "frame_mua_thu.png", tint: "#C8432B", colors: ["#C8432B", "#E8A04C"] },
  { id: "frame_film", name: "Film ISO 100", file: "frame_film.png", tint: "#212121", colors: ["#212121", "#616161"] }
];

// Cac nhom hien trong bang filter
const MY_GROUPS = [
  { id: "group_photobooth", title: "Photobooth Của Tôi 📸", filterIds: ["frame_noel", "frame_mua_thu", "frame_film"] }
];

// Cac filter AI cua ban: moi filter gom mot cau lenh (prompt) gui cho
// AI cua Locket cung voi tam anh, va mot icon tu ve.
const MY_AI_FILTERS = [
  { id: "ai_flower_crown", name: "Vương Miện Hoa", file: "ai_flower_crown.png", colors: ["#EC407A", "#F8BBD0"], prompt: "Place a delicate crown of small pink and white flowers on the head of the person in the photo. Keep their face, pose, clothes and the background exactly as they are. If there is no person in the photo, return it unchanged." },
  { id: "ai_superhero_cape", name: "Áo Choàng Siêu Anh Hùng", file: "ai_superhero_cape.png", colors: ["#C62828", "#EF5350"], prompt: "Add a flowing red superhero cape behind the shoulders of the person in the photo, moving gently as if in a breeze. Keep their face, pose and the background exactly as they are. If there is no person in the photo, return it unchanged." },
  { id: "ai_sunglasses", name: "Kính Râm Chất", file: "ai_sunglasses.png", colors: ["#37474F", "#78909C"], prompt: "Put a pair of stylish black sunglasses on the face of the person in the photo, fitted naturally to their head angle. Keep everything else in the photo exactly as it is. If there is no person in the photo, return it unchanged." },
  { id: "ai_cat_ears", name: "Tai Mèo", file: "ai_cat_ears.png", colors: ["#8E24AA", "#CE93D8"], prompt: "Add a cute cat-ears headband on the head of the person in the photo, matching their hair and head angle. Keep their face, pose and the background exactly as they are. If there is no person in the photo, return it unchanged." },
  { id: "ai_angel_wings", name: "Cánh Thiên Thần", file: "ai_angel_wings.png", colors: ["#90CAF9", "#E3F2FD"], prompt: "Add a pair of soft white angel wings behind the back of the person in the photo, lit by gentle daylight. Keep their face, pose and the background exactly as they are. If there is no person in the photo, return it unchanged." },
  { id: "ai_golden_hour", name: "Nắng Hoàng Hôn", file: "ai_golden_hour.png", colors: ["#FB8C00", "#FFCC80"], prompt: "Relight the whole photo with warm golden-hour sunlight: soft orange glow, long gentle shadows and a calm sunset mood. Keep every person, object and the composition exactly as they are." },
  { id: "ai_snow_scene", name: "Tuyết Rơi", file: "ai_snow_scene.png", colors: ["#42A5F5", "#BBDEFB"], prompt: "Add gentle falling snow over the whole photo and a light dusting of snow on surfaces, with a cozy winter feeling. Keep every person, object and the composition exactly as they are." },
  { id: "ai_watercolor", name: "Tranh Màu Nước", file: "ai_watercolor.png", colors: ["#66BB6A", "#FFF9C4"], prompt: "Turn the photo into a soft watercolor painting: visible brush strokes, gentle color bleeding and paper texture, while keeping the same people, poses and composition clearly recognizable." },
  { id: "ai_birthday", name: "Tiệc Sinh Nhật", file: "ai_birthday.png", colors: ["#FF7043", "#FCE4EC"], prompt: "Put a colorful birthday party hat on the head of the person in the photo and add soft confetti and balloons around the edges of the scene. Keep their face, pose and the rest of the background as they are. If there is no person in the photo, only add the confetti and balloons." },
  { id: "ai_neon", name: "Neon Cyber", file: "ai_neon.png", colors: ["#00E5FF", "#FF4081"], prompt: "Give the photo a neon cyberpunk look: cyan and magenta rim light on the subject and a softly glowing neon city mood in the background. Keep every person, pose and the composition exactly as they are." }
];

function buildAiFilter(f) {
  const url = MY_HOST + "/assets/icons/" + f.file;
  return {
    uid: f.id, id: f.id, name: f.name, category: "AI",
    prompt: f.prompt,
    style: "cutout", type: "normal", filterType: "normal",
    overlay: true,
    imageUrl: url, iconUrl: url, overlayImageUrl: url, overlayImageURL: url,
    tintColor: f.colors[0], colors: f.colors, captureButtonColors: f.colors,
    icon: { url: url, iconUrl: url, remoteImage: url, sfSymbol: "sparkles", symbol: "sparkles", emoji: "" },
    outputUrl: null, productUrl: null, textColor: "#FFFFFF", referenceImages: [],
    requires_gold: false, requiresGold: false, is_gold: false, isGold: false,
    unlocked: true, is_unlocked: true, isUnlocked: true, free: true,
    allowsTryFilter: true, allows_try_filter: true, tryButtonEnabled: true, try_button_enabled: true
  };
}

function buildFilter(f) {
  const url = MY_HOST + "/assets/frames/" + f.file;
  return {
    uid: f.id, id: f.id, name: f.name, category: "Photobooth",
    prompt: f.id, style: "cutout", type: "normal", filterType: "cutout",
    overlay: true,
    imageUrl: url, iconUrl: url, overlayImageUrl: url, overlayImageURL: url,
    tintColor: f.tint, colors: f.colors, captureButtonColors: f.colors,
    icon: { url: url, iconUrl: url, remoteImage: url, sfSymbol: "square.grid.2x2", symbol: "square.grid.2x2", emoji: "" },
    outputUrl: null, productUrl: null, textColor: "#FFFFFF", referenceImages: [],
    requires_gold: false, requiresGold: false, is_gold: false, isGold: false,
    unlocked: true, is_unlocked: true, isUnlocked: true, free: true,
    allowsTryFilter: true, allows_try_filter: true, tryButtonEnabled: true, try_button_enabled: true
  };
}

function buildGroup(g) {
  return {
    id: g.id, title: { en: g.title, vi: g.title },
    filterIds: g.filterIds, filter_ids: g.filterIds,
    requires_gold: false, requiresGold: false, is_gold: false, isGold: false,
    unlocked: true, is_unlocked: true, isUnlocked: true, free: true
  };
}

(function () {
  const ua = ($request.headers["User-Agent"] || $request.headers["user-agent"] || "");
  if (!ua.includes("Locket")) { $done({}); return; }
  let obj;
  try { obj = JSON.parse($response.body); } catch (e) { $done({}); return; }
  if (!obj || typeof obj !== "object") { $done({}); return; }
  if (!obj.entries || typeof obj.entries !== "object") obj.entries = {};

  // Bat cong tac AI cua app va bo khoa Gold phia app cho filter AI:
  obj.entries.ai_filters_enabled = "true";
  obj.entries.ai_filter_gold_only = "false";
  obj.entries.ai_filters_gold_only = "false";
  obj.entries.ai_filter_requires_gold = "false";
  obj.entries.ai_filters_require_gold = "false";

  const filters = MY_FILTERS.map(buildFilter).concat(MY_AI_FILTERS.map(buildAiFilter));
  const groups = MY_GROUPS.map(buildGroup);
  groups.push({ id: "group_ai_own", title: { en: "AI C\u1ee7a T\u00f4i \u2728", vi: "AI C\u1ee7a T\u00f4i \u2728" },
    filterIds: MY_AI_FILTERS.map(function (f) { return f.id; }), filter_ids: MY_AI_FILTERS.map(function (f) { return f.id; }),
    requires_gold: false, requiresGold: false, is_gold: false, isGold: false,
    unlocked: true, is_unlocked: true, isUnlocked: true, free: true });
  const picker = MY_FILTERS.map(function (f) { return f.id; }).concat(MY_AI_FILTERS.map(function (f) { return f.id; }));
  const cfg = {
    showFilterButton: true, allowsCustomFilters: true,
    referenceImageAttachmentEnabled: true, sheetEnabled: true, openSheetImmediately: false,
    pickerFilters: picker, picker_filters: picker,
    filterGroups: groups, filter_groups: groups,
    sheetFilters: groups, sheet_filters: groups,
    remoteFilters: filters, remote_filters: filters, filters: filters,
    show_filter_button: true, allows_custom_filters: true,
    reference_image_attachment_enabled: true, sheet_enabled: true, open_sheet_immediately: false
  };
  obj.entries.camera_filter_config = JSON.stringify(cfg);
  obj.entries.celebrity_filter_config = JSON.stringify({ celebrityUid: "my_own_pack", cameraFilterConfig: cfg });
  $done({ body: JSON.stringify(obj) });
})();
