// =============================================
//  WeatherFlow – app.js  (dummy data, no API)
// =============================================

// ── Dummy city data ─────────────────────────
const CITIES = [
  {
    id: 1, name: 'Mumbai', country: 'India', flag: '🇮🇳',
    temp: 32, feels: 35, desc: 'Partly Cloudy', icon: '⛅',
    humidity: 78, wind: 18, visibility: 9,
    high: 34, low: 27, uv: 8,
    pressure: 1006, dew: 26, uvDesc: 'Very High – wear SPF 30+ sunscreen',
    aqi: { val: 142, label: 'Unhealthy' },
    sunrise: '06:14 AM', sunset: '07:08 PM',
    sunProgress: 0.62,
    hourly: [
      { t:'Now', icon:'⛅', temp:32, rain:'12%' },
      { t:'1 PM', icon:'🌤', temp:33, rain:'5%' },
      { t:'2 PM', icon:'☀️', temp:34, rain:'0%' },
      { t:'3 PM', icon:'☀️', temp:34, rain:'0%' },
      { t:'4 PM', icon:'⛅', temp:33, rain:'8%' },
      { t:'5 PM', icon:'🌦', temp:30, rain:'35%' },
      { t:'6 PM', icon:'🌧', temp:28, rain:'70%' },
      { t:'7 PM', icon:'🌧', temp:27, rain:'80%' },
      { t:'8 PM', icon:'🌦', temp:27, rain:'45%' },
      { t:'9 PM', icon:'⛅', temp:28, rain:'15%' },
      { t:'10 PM', icon:'🌙', temp:29, rain:'5%' },
      { t:'11 PM', icon:'🌙', temp:28, rain:'2%' },
    ],
    weekly: [
      { day:'Today',   icon:'⛅', desc:'Partly Cloudy', hi:34, lo:27 },
      { day:'Tue',     icon:'🌧', desc:'Heavy Rain',    hi:29, lo:25 },
      { day:'Wed',     icon:'🌦', desc:'Light Rain',    hi:31, lo:26 },
      { day:'Thu',     icon:'☀️', desc:'Sunny',         hi:35, lo:28 },
      { day:'Fri',     icon:'☀️', desc:'Clear',         hi:36, lo:29 },
      { day:'Sat',     icon:'⛅', desc:'Cloudy',        hi:33, lo:27 },
      { day:'Sun',     icon:'🌤', desc:'Mostly Sunny',  hi:34, lo:28 },
    ],
    details: [
      { icon:'🌡', key:'Feels Like',  val:'35°C' },
      { icon:'💧', key:'Humidity',    val:'78%' },
      { icon:'💨', key:'Wind Speed',  val:'18 km/h' },
      { icon:'🧭', key:'Wind Dir.',   val:'SW' },
      { icon:'📉', key:'Pressure',    val:'1006 hPa' },
      { icon:'💦', key:'Dew Point',   val:'26°C' },
      { icon:'👁', key:'Visibility',  val:'9 km' },
      { icon:'☁️', key:'Cloud Cover', val:'55%' },
    ],
  },
  {
    id: 2, name: 'New York', country: 'USA', flag: '🇺🇸',
    temp: 22, feels: 20, desc: 'Clear Sky', icon: '☀️',
    humidity: 52, wind: 12, visibility: 15,
    high: 24, low: 16, uv: 5,
    pressure: 1021, dew: 12, uvDesc: 'Moderate – sunglasses recommended',
    aqi: { val: 48, label: 'Good' },
    sunrise: '06:32 AM', sunset: '07:51 PM',
    sunProgress: 0.45,
    hourly: [
      { t:'Now', icon:'☀️', temp:22, rain:'0%' },
      { t:'1 PM', icon:'☀️', temp:23, rain:'0%' },
      { t:'2 PM', icon:'🌤', temp:24, rain:'2%' },
      { t:'3 PM', icon:'🌤', temp:24, rain:'3%' },
      { t:'4 PM', icon:'⛅', temp:23, rain:'10%' },
      { t:'5 PM', icon:'⛅', temp:22, rain:'12%' },
      { t:'6 PM', icon:'🌤', temp:21, rain:'5%' },
      { t:'7 PM', icon:'🌤', temp:20, rain:'2%' },
      { t:'8 PM', icon:'🌙', temp:19, rain:'0%' },
      { t:'9 PM', icon:'🌙', temp:18, rain:'0%' },
      { t:'10 PM', icon:'🌙', temp:17, rain:'0%' },
      { t:'11 PM', icon:'🌙', temp:16, rain:'0%' },
    ],
    weekly: [
      { day:'Today',   icon:'☀️', desc:'Clear Sky',     hi:24, lo:16 },
      { day:'Tue',     icon:'🌤', desc:'Mostly Sunny',  hi:25, lo:17 },
      { day:'Wed',     icon:'⛅', desc:'Partly Cloudy', hi:22, lo:15 },
      { day:'Thu',     icon:'🌧', desc:'Rainy',         hi:18, lo:13 },
      { day:'Fri',     icon:'🌦', desc:'Light Rain',    hi:19, lo:13 },
      { day:'Sat',     icon:'☀️', desc:'Sunny',         hi:23, lo:15 },
      { day:'Sun',     icon:'☀️', desc:'Clear',         hi:26, lo:17 },
    ],
    details: [
      { icon:'🌡', key:'Feels Like',  val:'20°C' },
      { icon:'💧', key:'Humidity',    val:'52%' },
      { icon:'💨', key:'Wind Speed',  val:'12 km/h' },
      { icon:'🧭', key:'Wind Dir.',   val:'NW' },
      { icon:'📉', key:'Pressure',    val:'1021 hPa' },
      { icon:'💦', key:'Dew Point',   val:'12°C' },
      { icon:'👁', key:'Visibility',  val:'15 km' },
      { icon:'☁️', key:'Cloud Cover', val:'10%' },
    ],
  },
  {
    id: 3, name: 'London', country: 'UK', flag: '🇬🇧',
    temp: 14, feels: 11, desc: 'Overcast', icon: '🌧',
    humidity: 85, wind: 24, visibility: 6,
    high: 16, low: 10, uv: 2,
    pressure: 998, dew: 11, uvDesc: 'Low – minimal protection needed',
    aqi: { val: 60, label: 'Moderate' },
    sunrise: '05:58 AM', sunset: '08:42 PM',
    sunProgress: 0.35,
    hourly: [
      { t:'Now', icon:'🌧', temp:14, rain:'75%' },
      { t:'1 PM', icon:'🌧', temp:14, rain:'80%' },
      { t:'2 PM', icon:'🌦', temp:15, rain:'55%' },
      { t:'3 PM', icon:'⛅', temp:16, rain:'20%' },
      { t:'4 PM', icon:'⛅', temp:16, rain:'15%' },
      { t:'5 PM', icon:'🌦', temp:15, rain:'40%' },
      { t:'6 PM', icon:'🌧', temp:14, rain:'65%' },
      { t:'7 PM', icon:'🌧', temp:13, rain:'70%' },
      { t:'8 PM', icon:'🌧', temp:12, rain:'60%' },
      { t:'9 PM', icon:'⛅', temp:11, rain:'20%' },
      { t:'10 PM', icon:'🌙', temp:11, rain:'10%' },
      { t:'11 PM', icon:'🌙', temp:10, rain:'5%' },
    ],
    weekly: [
      { day:'Today',   icon:'🌧', desc:'Heavy Rain',    hi:16, lo:10 },
      { day:'Tue',     icon:'🌦', desc:'Light Rain',    hi:15, lo:9  },
      { day:'Wed',     icon:'⛅', desc:'Cloudy',        hi:17, lo:11 },
      { day:'Thu',     icon:'🌤', desc:'Partly Sunny',  hi:19, lo:12 },
      { day:'Fri',     icon:'☀️', desc:'Sunny',         hi:21, lo:13 },
      { day:'Sat',     icon:'🌤', desc:'Mostly Clear',  hi:20, lo:12 },
      { day:'Sun',     icon:'🌦', desc:'Showers',       hi:17, lo:10 },
    ],
    details: [
      { icon:'🌡', key:'Feels Like',  val:'11°C' },
      { icon:'💧', key:'Humidity',    val:'85%' },
      { icon:'💨', key:'Wind Speed',  val:'24 km/h' },
      { icon:'🧭', key:'Wind Dir.',   val:'SE' },
      { icon:'📉', key:'Pressure',    val:'998 hPa' },
      { icon:'💦', key:'Dew Point',   val:'11°C' },
      { icon:'👁', key:'Visibility',  val:'6 km' },
      { icon:'☁️', key:'Cloud Cover', val:'90%' },
    ],
  },
  {
    id: 4, name: 'Tokyo', country: 'Japan', flag: '🇯🇵',
    temp: 28, feels: 30, desc: 'Humid & Hazy', icon: '🌫',
    humidity: 80, wind: 9, visibility: 5,
    high: 31, low: 24, uv: 6,
    pressure: 1012, dew: 24, uvDesc: 'High – wear sunscreen and hat',
    aqi: { val: 88, label: 'Moderate' },
    sunrise: '04:52 AM', sunset: '06:47 PM',
    sunProgress: 0.72,
    hourly: [
      { t:'Now', icon:'🌫', temp:28, rain:'20%' },
      { t:'1 PM', icon:'🌫', temp:29, rain:'18%' },
      { t:'2 PM', icon:'⛅', temp:31, rain:'10%' },
      { t:'3 PM', icon:'⛅', temp:31, rain:'8%' },
      { t:'4 PM', icon:'🌦', temp:30, rain:'30%' },
      { t:'5 PM', icon:'🌧', temp:28, rain:'60%' },
      { t:'6 PM', icon:'🌧', temp:26, rain:'75%' },
      { t:'7 PM', icon:'🌦', temp:25, rain:'40%' },
      { t:'8 PM', icon:'⛅', temp:25, rain:'15%' },
      { t:'9 PM', icon:'🌙', temp:25, rain:'5%' },
      { t:'10 PM', icon:'🌙', temp:24, rain:'2%' },
      { t:'11 PM', icon:'🌙', temp:24, rain:'2%' },
    ],
    weekly: [
      { day:'Today',   icon:'🌫', desc:'Hazy',          hi:31, lo:24 },
      { day:'Tue',     icon:'🌧', desc:'Thunderstorm',  hi:27, lo:23 },
      { day:'Wed',     icon:'⛅', desc:'Partly Cloudy', hi:30, lo:24 },
      { day:'Thu',     icon:'🌤', desc:'Mostly Clear',  hi:32, lo:25 },
      { day:'Fri',     icon:'☀️', desc:'Sunny',         hi:33, lo:26 },
      { day:'Sat',     icon:'⛅', desc:'Humid',         hi:31, lo:25 },
      { day:'Sun',     icon:'🌦', desc:'Showers',       hi:28, lo:23 },
    ],
    details: [
      { icon:'🌡', key:'Feels Like',  val:'30°C' },
      { icon:'💧', key:'Humidity',    val:'80%' },
      { icon:'💨', key:'Wind Speed',  val:'9 km/h' },
      { icon:'🧭', key:'Wind Dir.',   val:'E' },
      { icon:'📉', key:'Pressure',    val:'1012 hPa' },
      { icon:'💦', key:'Dew Point',   val:'24°C' },
      { icon:'👁', key:'Visibility',  val:'5 km' },
      { icon:'☁️', key:'Cloud Cover', val:'75%' },
    ],
  },
  {
    id: 5, name: 'Sydney', country: 'Australia', flag: '🇦🇺',
    temp: 18, feels: 16, desc: 'Breezy & Clear', icon: '🌤',
    humidity: 60, wind: 28, visibility: 20,
    high: 21, low: 13, uv: 3,
    pressure: 1018, dew: 10, uvDesc: 'Moderate – consider sunscreen',
    aqi: { val: 32, label: 'Good' },
    sunrise: '06:44 AM', sunset: '05:22 PM',
    sunProgress: 0.55,
    hourly: [
      { t:'Now', icon:'🌤', temp:18, rain:'2%' },
      { t:'1 PM', icon:'🌤', temp:19, rain:'0%' },
      { t:'2 PM', icon:'☀️', temp:21, rain:'0%' },
      { t:'3 PM', icon:'☀️', temp:21, rain:'0%' },
      { t:'4 PM', icon:'🌤', temp:20, rain:'5%' },
      { t:'5 PM', icon:'⛅', temp:18, rain:'10%' },
      { t:'6 PM', icon:'🌙', temp:16, rain:'0%' },
      { t:'7 PM', icon:'🌙', temp:15, rain:'0%' },
      { t:'8 PM', icon:'🌙', temp:14, rain:'0%' },
      { t:'9 PM', icon:'🌙', temp:13, rain:'0%' },
      { t:'10 PM', icon:'🌙', temp:13, rain:'0%' },
      { t:'11 PM', icon:'🌙', temp:13, rain:'0%' },
    ],
    weekly: [
      { day:'Today',   icon:'🌤', desc:'Breezy Clear',  hi:21, lo:13 },
      { day:'Tue',     icon:'☀️', desc:'Sunny',         hi:23, lo:14 },
      { day:'Wed',     icon:'☀️', desc:'Clear',         hi:24, lo:14 },
      { day:'Thu',     icon:'⛅', desc:'Partly Cloudy', hi:21, lo:13 },
      { day:'Fri',     icon:'🌦', desc:'Light Rain',    hi:18, lo:12 },
      { day:'Sat',     icon:'🌧', desc:'Showers',       hi:16, lo:11 },
      { day:'Sun',     icon:'🌤', desc:'Improving',     hi:19, lo:12 },
    ],
    details: [
      { icon:'🌡', key:'Feels Like',  val:'16°C' },
      { icon:'💧', key:'Humidity',    val:'60%' },
      { icon:'💨', key:'Wind Speed',  val:'28 km/h' },
      { icon:'🧭', key:'Wind Dir.',   val:'N' },
      { icon:'📉', key:'Pressure',    val:'1018 hPa' },
      { icon:'💦', key:'Dew Point',   val:'10°C' },
      { icon:'👁', key:'Visibility',  val:'20 km' },
      { icon:'☁️', key:'Cloud Cover', val:'25%' },
    ],
  },
];

// ── State ────────────────────────────────────
let activeCityId = 1;
let isCelsius = true;
const SEARCH_LIST = CITIES.map(c => c.name);

// ── DOM refs ─────────────────────────────────
const $cityList   = document.getElementById('cityList');
const $heroCity   = document.getElementById('heroCity');
const $heroCountry= document.getElementById('heroCountry');
const $heroTemp   = document.getElementById('heroTemp');
const $heroDesc   = document.getElementById('heroDesc');
const $heroIcon   = document.getElementById('heroIcon');
const $heroFeels  = document.getElementById('heroFeels');
const $heroHumidity = document.getElementById('heroHumidity');
const $heroWind   = document.getElementById('heroWind');
const $heroVis    = document.getElementById('heroVis');
const $heroHigh   = document.getElementById('heroHigh');
const $heroLow    = document.getElementById('heroLow');
const $heroAqi    = document.getElementById('heroAqi');
const $hourlyTrack= document.getElementById('hourlyTrack');
const $weeklyList = document.getElementById('weeklyList');
const $detailsGrid= document.getElementById('detailsGrid');
const $uvFill     = document.getElementById('uvFill');
const $uvThumb    = document.getElementById('uvThumb');
const $uvMessage  = document.getElementById('uvMessage');
const $arcProgress= document.getElementById('arcProgress');
const $sunDot     = document.getElementById('sunDot');
const $sunriseTime= document.getElementById('sunriseTime');
const $sunsetTime = document.getElementById('sunsetTime');
const $currentDate= document.getElementById('currentDate');
const $searchInput= document.getElementById('searchInput');
const $searchDropdown = document.getElementById('searchDropdown');
const $unitToggle = document.getElementById('unitToggle');
const $sidebar    = document.getElementById('sidebar');
const $menuBtn    = document.getElementById('menuBtn');
const $sidebarClose = document.getElementById('sidebarClose');

// Overlay element (created dynamically)
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// ── Helpers ──────────────────────────────────
function toF(c) { return Math.round(c * 9/5 + 32); }
function fmt(val) { return isCelsius ? `${val}°C` : `${toF(val)}°F`; }
function fmtW(kmh) { return isCelsius ? `${kmh} km/h` : `${Math.round(kmh * 0.621)} mph`; }

function getCity() { return CITIES.find(c => c.id === activeCityId); }

// ── Date ─────────────────────────────────────
function updateDate() {
  const now = new Date();
  $currentDate.textContent = now.toLocaleDateString('en-GB', {
    weekday:'long', day:'numeric', month:'long', year:'numeric'
  });
}

// ── Render city sidebar ───────────────────────
function renderCityList() {
  $cityList.innerHTML = CITIES.map(c => `
    <div class="city-item ${c.id === activeCityId ? 'active' : ''}" data-id="${c.id}" role="button" tabindex="0" aria-label="Select ${c.name}">
      <div>
        <div class="city-name">${c.flag} ${c.name}</div>
        <div class="city-temp-small">${c.country}</div>
      </div>
      <span class="city-icon-small">${c.icon}</span>
      <span class="city-temp-small">${fmt(c.temp)}</span>
    </div>
  `).join('');

  $cityList.querySelectorAll('.city-item').forEach(el => {
    el.addEventListener('click', () => {
      activeCityId = +el.dataset.id;
      renderAll();
      closeSidebar();
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter') el.click();
    });
  });
}

// ── Render hero ───────────────────────────────
function renderHero() {
  const c = getCity();
  $heroCity.textContent    = c.name;
  $heroCountry.textContent = `, ${c.country}`;
  $heroTemp.textContent    = fmt(c.temp);
  $heroDesc.textContent    = c.desc;
  $heroIcon.textContent    = c.icon;
  $heroFeels.textContent   = fmt(c.feels);
  $heroHumidity.textContent= `${c.humidity}%`;
  $heroWind.textContent    = fmtW(c.wind);
  $heroVis.textContent     = `${c.visibility} km`;
  $heroHigh.textContent    = fmt(c.high);
  $heroLow.textContent     = fmt(c.low);
  $heroAqi.textContent     = `AQI ${c.aqi.val} · ${c.aqi.label}`;

  // AQI color
  const aqi = c.aqi.val;
  let aqiColor = '#4ade80';
  if (aqi > 50)  aqiColor = '#facc15';
  if (aqi > 100) aqiColor = '#f97316';
  if (aqi > 150) aqiColor = '#ef4444';
  if (aqi > 200) aqiColor = '#9333ea';
  $heroAqi.style.color = aqiColor;
  $heroAqi.style.borderColor = aqiColor + '55';
  $heroAqi.style.background  = aqiColor + '18';
}

// ── Render hourly ─────────────────────────────
function renderHourly() {
  const c = getCity();
  $hourlyTrack.innerHTML = c.hourly.map((h, i) => `
    <div class="hourly-card ${i === 0 ? 'active' : ''}" tabindex="0">
      <span class="hourly-time">${h.t}</span>
      <span class="hourly-icon">${h.icon}</span>
      <span class="hourly-temp">${isCelsius ? h.temp + '°' : toF(h.temp) + '°'}</span>
      <span class="hourly-rain">🌧 ${h.rain}</span>
    </div>
  `).join('');

  $hourlyTrack.querySelectorAll('.hourly-card').forEach(card => {
    card.addEventListener('click', () => {
      $hourlyTrack.querySelectorAll('.hourly-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

// ── Render weekly ─────────────────────────────
function renderWeekly() {
  const c = getCity();
  $weeklyList.innerHTML = c.weekly.map(w => `
    <div class="weekly-row">
      <span class="weekly-day">${w.day}</span>
      <span class="weekly-icon">${w.icon}</span>
      <span class="weekly-desc">${w.desc}</span>
      <div class="weekly-range">
        <span class="weekly-hi">${fmt(w.hi)}</span>
        <span class="weekly-lo">${fmt(w.lo)}</span>
      </div>
    </div>
  `).join('');
}

// ── Render details ────────────────────────────
function renderDetails() {
  const c = getCity();
  $detailsGrid.innerHTML = c.details.map(d => {
    // Convert speed/temp in details dynamically
    let val = d.val;
    if (d.key === 'Feels Like')  val = fmt(c.feels);
    if (d.key === 'Wind Speed')  val = fmtW(c.wind);
    if (d.key === 'Dew Point')   val = fmt(c.dew);
    if (d.key === 'Humidity')    val = `${c.humidity}%`;
    return `
      <div class="detail-card">
        <span class="detail-icon">${d.icon}</span>
        <span class="detail-key">${d.key}</span>
        <span class="detail-val">${val}</span>
      </div>
    `;
  }).join('');
}

// ── Render UV ────────────────────────────────
function renderUV() {
  const c = getCity();
  const pct = Math.min(c.uv / 12, 1) * 100;
  $uvFill.style.width   = pct + '%';
  $uvThumb.style.left   = pct + '%';
  $uvMessage.textContent= `UV ${c.uv} – ${c.uvDesc}`;
}

// ── Render Sun Arc ────────────────────────────
function renderSun() {
  const c = getCity();
  $sunriseTime.textContent = c.sunrise;
  $sunsetTime.textContent  = c.sunset;

  // Move dot along path
  const prog = c.sunProgress; // 0–1
  // Parametric quadratic bezier: B(t) = (1-t)²P0 + 2(1-t)tP1 + t²P2
  const p0 = [20, 140], p1 = [150, 10], p2 = [280, 140];
  const t = prog;
  const x = (1-t)**2 * p0[0] + 2*(1-t)*t * p1[0] + t**2 * p2[0];
  const y = (1-t)**2 * p0[1] + 2*(1-t)*t * p1[1] + t**2 * p2[1];
  $sunDot.setAttribute('cx', x.toFixed(1));
  $sunDot.setAttribute('cy', y.toFixed(1));

  // Dash offset (340 total)
  const offset = 340 * (1 - prog);
  $arcProgress.style.strokeDashoffset = offset.toFixed(1);
}

// ── Full render ───────────────────────────────
function renderAll() {
  renderCityList();
  renderHero();
  renderHourly();
  renderWeekly();
  renderDetails();
  renderUV();
  renderSun();
}

// ── Search ───────────────────────────────────
$searchInput.addEventListener('input', () => {
  const q = $searchInput.value.trim().toLowerCase();
  if (!q) { closeDropdown(); return; }

  const matches = CITIES.filter(c => c.name.toLowerCase().includes(q));
  if (!matches.length) { closeDropdown(); return; }

  $searchDropdown.innerHTML = matches.map(c =>
    `<div class="dropdown-item" data-id="${c.id}">${c.flag} ${c.name}, ${c.country}</div>`
  ).join('');
  $searchDropdown.classList.add('open');

  $searchDropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      activeCityId = +item.dataset.id;
      $searchInput.value = '';
      closeDropdown();
      renderAll();
    });
  });
});

$searchInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDropdown();
});

document.addEventListener('click', e => {
  if (!$searchInput.contains(e.target) && !$searchDropdown.contains(e.target)) closeDropdown();
});

function closeDropdown() { $searchDropdown.classList.remove('open'); }

// ── Unit toggle ───────────────────────────────
$unitToggle.addEventListener('change', () => {
  isCelsius = !$unitToggle.checked;
  renderAll();
});

// ── Sidebar mobile ────────────────────────────
function openSidebar()  {
  $sidebar.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  $sidebar.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
$menuBtn.addEventListener('click', openSidebar);
$sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// ── Simulate live updates ────────────────────
function simulateLiveUpdate() {
  CITIES.forEach(c => {
    c.temp   += (Math.random() - 0.5) * 0.4;
    c.temp    = Math.round(c.temp * 10) / 10;
    c.feels  += (Math.random() - 0.5) * 0.3;
    c.feels   = Math.round(c.feels * 10) / 10;
    c.wind   += (Math.random() - 0.5) * 1;
    c.wind    = Math.max(0, Math.round(c.wind));
  });
  renderHero();
  renderCityList();
}

// ── Init ──────────────────────────────────────
updateDate();
renderAll();
setInterval(simulateLiveUpdate, 8000);
setInterval(updateDate, 60000);
