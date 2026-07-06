export const hotel = {
  id: "plat-house-hatsudai",
  name: {
    ja: "ぷらっとハウス初台",
    en: "Plat House Hatsudai",
  },
  catchcopy: {
    ja: "西新宿５丁目駅徒歩10分。30㎡・最大4名。新宿・初台エリアのプライベートステイ",
    en: "10 min from 西新宿５丁目駅. Plat House Hatsudai — private stay in 新宿・初台.",
  },
  address: {
    postalCode: "160-0023",
    ja: "東京都新宿区西新宿4-25−16",
    en: "東京都新宿区西新宿4-25−16",
  },
  area: "新宿・初台",
  phone: "08070583086",
  category: "民泊",
  website: "https://hatsudai.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 19800,
    max: 19800,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=240669&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "西新宿５丁目駅", line: "都営大江戸線", walk: 10 },
    { station: "初台駅", line: "京王新線", walk: 7 }
  ],
  floors: "2階建て",
  parking: 0,
  capacity: 4,
  size: "30㎡",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "プレイステーション", nameEn: "プレイステーション", icon: "🎮", highlight: false },
  { name: "ポケットWi-Fi", nameEn: "ポケットWi-Fi", icon: "📶", highlight: true },
  { name: "インターネット（Wi-Fi）", nameEn: "インターネット（Wi-Fi）", icon: "🌐", highlight: true },
  { name: "ドラム式洗濯機", nameEn: "ドラム式洗濯機", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "冷蔵庫", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "電子レンジ", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "電気ケトル", icon: "☕", highlight: false },
  { name: "シャワー", nameEn: "シャワー", icon: "🚿", highlight: false },
  { name: "独立トイレ", nameEn: "独立トイレ", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "ウォシュレット", icon: "✨", highlight: false },
  { name: "エアコン", nameEn: "エアコン", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "大型TV", icon: "📺", highlight: false },
  { name: "コテ＆カールドライヤー", nameEn: "コテ＆カールドライヤー", icon: "💅", highlight: false },
  { name: "ヘアドライヤー", nameEn: "ヘアドライヤー", icon: "💨", highlight: false },
  { name: "アイロン", nameEn: "アイロン", icon: "👔", highlight: false },
  { name: "キッチン", nameEn: "キッチン", icon: "🍳", highlight: true },
  { name: "乾燥機", nameEn: "乾燥機", icon: "🫧", highlight: false },
  { name: "カードゲーム", nameEn: "カードゲーム", icon: "🃏", highlight: false },
  { name: "アメニティ一式", nameEn: "アメニティ一式", icon: "🧴", highlight: false },
  { name: "ボタニスト（アメニティ）", nameEn: "ボタニスト（アメニティ）", icon: "🌿", highlight: false },
  { name: "バスタオル・フェイスタオル", nameEn: "バスタオル・フェイスタオル", icon: "🏩", highlight: false },
  { name: "空気清浄機", nameEn: "空気清浄機", icon: "💨", highlight: false },
  { name: "加湿器", nameEn: "加湿器", icon: "✅", highlight: false },
  { name: "サーキュレータ", nameEn: "サーキュレータ", icon: "✅", highlight: false },
  { name: "除湿器", nameEn: "除湿器", icon: "✅", highlight: false },
  { name: "翻訳機", nameEn: "翻訳機", icon: "✅", highlight: false },
  { name: "カメラ", nameEn: "カメラ", icon: "✅", highlight: false },
  { name: "美顔器", nameEn: "美顔器", icon: "✅", highlight: false },
  { name: "ソファー", nameEn: "ソファー", icon: "✅", highlight: false },
  { name: "ローテブル", nameEn: "ローテブル", icon: "✅", highlight: false },
  { name: "クローゼット", nameEn: "クローゼット", icon: "✅", highlight: false },
  { name: "洋服掛け", nameEn: "洋服掛け", icon: "✅", highlight: false },
  { name: "ハンガー", nameEn: "ハンガー", icon: "✅", highlight: false },
  { name: "洗剤関係", nameEn: "洗剤関係", icon: "✅", highlight: false },
  { name: "浴槽", nameEn: "浴槽", icon: "🛁", highlight: true },
  { name: "洗面台", nameEn: "洗面台", icon: "✅", highlight: false },
  { name: "調理器具", nameEn: "調理器具", icon: "✅", highlight: false },
  { name: "皿・グラス関係", nameEn: "皿・グラス関係", icon: "✅", highlight: false },
  { name: "リビングスペース", nameEn: "リビングスペース", icon: "✅", highlight: false }
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "ぷらっとハウス初台（30㎡・1K）", en: "Plat House Hatsudai (30㎡ 1K)" },
    bedType: { ja: "ダブルマットレス×2", en: "2 Double Mattresses" },
    maxGuests: 4,
    description: {
      ja: "30㎡の1K一棟貸切。ダブルマットレスを2枚ご用意し、最大4名様でご利用いただけます。初台駅徒歩7分・西新宿5丁目駅徒歩10分の好立地です。",
      en: "Entire 30㎡ 1K house. Features 2 double mattresses. Accommodates up to 4 guests. 7 min walk from Hatsudai Station.",
    },
    images: [],
  }
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16:00、チェックアウトは11:00です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "最大4名様までご宿泊いただけます。", en: "Up to 4 guests." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "西新宿５丁目駅（都営大江戸線）徒歩10分です。", en: "西新宿５丁目駅 (都営大江戸線) is a 10 min walk." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "専用駐車場はございません。近隣のコインパーキングをご利用ください。", en: "There is no on-site parking. Please use nearby coin parking facilities." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
];
