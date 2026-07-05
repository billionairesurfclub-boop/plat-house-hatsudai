export const hotel = {
  id: "plat-house-shibuya3-shinsen",
  name: {
    ja: "ぷらっとハウス渋谷Ⅲ（神泉）",
    en: "Plat House Shibuya III (Shinsen)",
  },
  catchcopy: {
    ja: "渋谷駅5分・神泉駅3分。80㎡の広々空間で、最大6名が快適に過ごせる渋谷の隠れ家",
    en: "5 min from Shibuya Station. Spacious 80㎡ private house for up to 6 guests in the heart of Tokyo.",
  },
  address: {
    postalCode: "150-0044",
    ja: "東京都渋谷区円山町２２－３",
    en: "22-3 Maruyamacho, Shibuya-ku, Tokyo 150-0044",
  },
  area: "渋谷・神泉",
  phone: "08070583086",
  category: "民泊",
  website: "https://shibuya3.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 30000,
    max: 60000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=325166&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "神泉駅", line: "京王井の頭線", walk: 3 },
    { station: "渋谷駅", line: "JR各線・各私鉄・地下鉄", walk: 5 },
  ],
  floors: "戸建て",
  parking: 0,
  capacity: 6,
  size: "80㎡",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Disney+", nameEn: "Disney+", icon: "🎭", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "10ギガインターネット", nameEn: "10Gbps Internet", icon: "🌐", highlight: true },
  { name: "ドラム式洗濯機", nameEn: "Drum Washing Machine", icon: "🫧", highlight: true },
  { name: "浴槽", nameEn: "Bathtub", icon: "🛁", highlight: true },
  { name: "キッチン", nameEn: "Kitchen", icon: "🍳", highlight: true },
  { name: "ソファー・リビング", nameEn: "Sofa & Living Space", icon: "🛋️", highlight: true },
  { name: "ボタニスト（アメニティ）", nameEn: "Botanist Amenities", icon: "🌿", highlight: false },
  { name: "空気清浄機・加湿器", nameEn: "Air Purifier & Humidifier", icon: "💨", highlight: false },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "調理器具・食器", nameEn: "Cookware & Tableware", icon: "🍽️", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "Large TV", icon: "📺", highlight: false },
  { name: "独立トイレ", nameEn: "Separate Toilet", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
  { name: "ヘアドライヤー", nameEn: "Hair Dryer", icon: "💨", highlight: false },
  { name: "コテ＆カールアイロン", nameEn: "Curling Iron", icon: "💅", highlight: false },
  { name: "アイロン", nameEn: "Iron", icon: "👔", highlight: false },
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "客室A（ダブル×2）", en: "Room A (Double x2)" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    description: {
      ja: "ダブルベッド2台を備えた広々とした客室。最大4名様でご利用いただけます。グループ・ファミリー旅行に最適。",
      en: "Spacious room with 2 double beds. Accommodates up to 4 guests. Perfect for groups and families.",
    },
    images: [],
  },
  {
    id: "room-b",
    floor: "",
    name: { ja: "客室B（クイーン）", en: "Room B (Queen)" },
    bedType: { ja: "クイーンベッド×1", en: "1 Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "クイーンベッド1台の落ち着いた客室。カップルや2名様のご利用に最適です。",
      en: "A cozy room with a queen bed. Ideal for couples or 2 guests.",
    },
    images: [],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "2つの客室で最大6名様までご宿泊いただけます。グループ・ファミリー旅行に最適です。", en: "Up to 6 guests across 2 rooms. Perfect for groups and family trips." },
  },
  {
    q: { ja: "渋谷駅からどのくらいですか？", en: "How far from Shibuya Station?" },
    a: { ja: "渋谷駅（JR・各線）から徒歩5分、神泉駅（京王井の頭線）から徒歩3分です。渋谷の観光・グルメ・ショッピングへのアクセス抜群です。", en: "5 min walk from Shibuya Station, 3 min from Shinsen Station. Excellent access to Shibuya's sightseeing and shopping." },
  },
  {
    q: { ja: "Netflix・Disney+は使えますか？", en: "Is Netflix and Disney+ available?" },
    a: { ja: "はい、Netflix・Disney+の両方をご利用いただけます。大型TVでお楽しみください。", en: "Yes, both Netflix and Disney+ are available on the large TV." },
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
