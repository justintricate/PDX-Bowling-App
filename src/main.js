import './style.css';
let AppConfig = {
    DAYS_OF_WEEK: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    HOURS: Array.from({ length: 15 }, (e, t) => t + 9),
    NETLIFY_FUNCTION_URL: '/.netlify/functions/getDriveTimes',
    AUTOCOMPLETE_FUNCTION_URL: '/.netlify/functions/getAutocomplete',
  },
  bowlingAlleys = {
    'Milwaukie Bowl': {
      address: '3056 SE Harrison St, Milwaukie, OR 97222',
      url: 'https://www.milwaukiebowl.com/copy-of-legacy',
      phone: '(503) 654-7719',
      taxRate: 0,
      hours: {
        Sun: { o: 9, c: 22 },
        Mon: { o: 9, c: 23 },
        Tue: { o: 9, c: 23 },
        Wed: { o: 9, c: 23 },
        Thu: { o: 9, c: 23 },
        Fri: { o: 9, c: 24 },
        Sat: { o: 9, c: 24 },
      },
      specials: {},
    },
    'Tigard Bowl': {
      address: '11660 SW Pacific Hwy, Tigard, OR 97223',
      url: 'https://www.tigardbowl.com/open-bowl',
      phone: '(503) 639-2001',
      taxRate: 0,
      hours: {
        Sun: { o: 9, c: 24 },
        Mon: { o: 9, c: 24 },
        Tue: { o: 9, c: 24 },
        Wed: { o: 9, c: 24 },
        Thu: { o: 9, c: 24 },
        Fri: { o: 9, c: 25 },
        Sat: { o: 9, c: 25 },
      },
      specials: {},
    },
    'Kingpins Portland': {
      address: '3550 SE 92nd Ave, Portland, OR 97266',
      url: 'https://mykingpins.com/portland-bowling/#bowling-pricing',
      phone: '(503) 788-7889',
      taxRate: 0,
      hours: {
        Sun: { o: 9, c: 23, m: 30 },
        Mon: { o: 11, c: 24 },
        Tue: { o: 11, c: 23, m: 30 },
        Wed: { o: 11, c: 23, m: 30 },
        Thu: { o: 12, c: 23, m: 30 },
        Fri: { o: 10, c: 24 },
        Sat: { o: 9, c: 24 },
      },
      specials: {
        Sun: {
          from: 20,
          text: 'Quarter Mania! $11 cover + $0.25 games/shoes.',
          description:
            '<b>Kingpins (Both):</b> Cosmic Quarter Mania from 8:30 PM - Close ($11 cover, $0.25 games/shoes).',
        },
        Mon: {
          from: 21,
          text: 'Quarter Mania! $11 cover + $0.25 games/shoes.',
          description:
            '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        },
        Tue: {
          from: 21,
          text: 'Quarter Mania! $11 cover + $0.25 games/shoes.',
          description:
            '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        },
        Wed: {
          from: 21,
          text: 'Quarter Mania! $11 cover + $0.25 games/shoes.',
          description:
            '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        },
        Thu: {
          from: 21,
          text: 'Quarter Mania! $11 cover + $0.25 games/shoes.',
          description:
            '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        },
        Fri: {
          from: 22,
          text: 'All You Can Bowl for $15.',
          description:
            '<b>Kingpins Portland:</b> Cosmic All You Can Bowl from 10 PM - Midnight for $15 (shoes included).',
        },
        Sat: {
          from: 22,
          text: 'All You Can Bowl for $15.',
          description:
            '<b>Kingpins Portland:</b> Cosmic All You Can Bowl from 10 PM - Midnight for $15 (shoes included).',
        },
      },
    },
    SuperPlay: {
      address: '9300 SW Beaverton Hillsdale Hwy, Beaverton, OR 97005',
      url: 'https://www.superplayor.com/Play/Bowling',
      phone: '(503) 292-3523',
      taxRate: 0,
      hours: {
        Sun: { o: 12, c: 22 },
        Mon: { o: 15, c: 23 },
        Tue: { o: 15, c: 23 },
        Wed: { o: 15, c: 23 },
        Thu: { o: 12, c: 24 },
        Fri: { o: 12, c: 24 },
        Sat: { o: 12, c: 24 },
      },
      specials: {
        Tue: {
          allDay: !0,
          text: '$25/hr per lane special.',
          description: '<b>SuperPlay:</b> $25 per hour, all day.',
        },
        Wed: {
          allDay: !0,
          text: '$2/game & $2/shoes special.',
          description:
            '<b>SuperPlay:</b> $2 Wednesdays ($2 games, $2 shoes & drink specials).',
        },
        Thu: {
          allDay: !0,
          text: '$15/hr per lane special.',
          description: '<b>SuperPlay:</b> $15 per hour, all Day.',
        },
        Fri: {
          from: 21,
          text: 'Cosmic Bowling is on!',
          description: '<b>SuperPlay:</b> Cosmic Bowling after 9 PM.',
        },
        Sat: {
          from: 21,
          text: 'Cosmic Bowling is on!',
          description: '<b>SuperPlay:</b> Cosmic Bowling after 9 PM.',
        },
      },
    },
    'Hazel Dell Lanes': {
      address: '6300 NE Hwy 99, Vancouver, WA 98665',
      url: 'https://www.hazeldelllanes.com/hours--rates.html',
      phone: '(360) 694-8364',
      taxRate: 0.088,
      hours: {
        Sun: { o: 9, c: 22 },
        Mon: { o: 11, m: 30, c: 23 },
        Tue: { o: 10, m: 30, c: 23 },
        Wed: { o: 9, c: 23 },
        Thu: { o: 9, m: 30, c: 23 },
        Fri: { o: 9, m: 30, c: 24 },
        Sat: { o: 9, c: 24 },
      },
      specials: {
        Mon: {
          from: 21,
          text: 'All-You-Can-Bowl for $12.',
          description:
            '<b>Hazel Dell Lanes:</b> All-you-can-bowl for $12 from 9 PM - Midnight.',
        },
      },
    },
    'Kingpins Beaverton': {
      address: '2725 SW Cedar Hills Blvd, Beaverton, OR 97005',
      url: 'https://mykingpins.com/beaverton-bowling/#bowling-pricing',
      phone: '(503) 646-1116',
      taxRate: 0,
      hours: {
        Sun: { o: 10, c: 23, m: 30 },
        Mon: { o: 11, c: 23, m: 30 },
        Tue: { o: 10, c: 23, m: 30 },
        Wed: { o: 11, c: 23, m: 30 },
        Thu: { o: 10, c: 24 },
        Fri: { o: 11, c: 25 },
        Sat: { o: 9, c: 25 },
      },
      specials: {
        Sun: {
          from: 20,
          text: 'Quarter Mania! $11 cover + $0.25 games/shoes.',
          description:
            '<b>Kingpins (Both):</b> Cosmic Quarter Mania from 8:30 PM - Close ($11 cover, $0.25 games/shoes).',
        },
        Mon: {
          from: 21,
          text: 'Quarter Mania! $11 cover + $0.25 games/shoes.',
          description:
            '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        },
        Tue: {
          from: 21,
          text: 'Quarter Mania! $11 cover + $0.25 games/shoes.',
          description:
            '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        },
        Wed: {
          from: 21,
          text: 'Quarter Mania! $11 cover + $0.25 games/shoes.',
          description:
            '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        },
        Thu: {
          from: 21,
          text: 'Quarter Mania! $11 cover + $0.25 games/shoes.',
          description:
            '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        },
        Fri: {
          from: 23,
          text: 'All You Can Bowl for $15.',
          description:
            '<b>Kingpins Beaverton:</b> Cosmic All You Can Bowl from 11 PM - 1 AM for $15 (shoes included).',
        },
        Sat: {
          from: 23,
          text: 'All You Can Bowl for $15.',
          description:
            '<b>Kingpins Beaverton:</b> Cosmic All You Can Bowl from 11 PM - 1 AM for $15 (shoes included).',
        },
      },
    },
    "Big Al's Beaverton": {
      address: '14950 SW Barrows Rd, Beaverton, OR 97007',
      url: 'https://www.ilovebigals.com/beaverton/lanes/',
      phone: '(503) 748-6118',
      taxRate: 0,
      hours: {
        Sun: { o: 11, c: 22 },
        Mon: { o: 15, c: 22 },
        Tue: { o: 15, c: 22 },
        Wed: { o: 15, c: 22 },
        Thu: { o: 15, c: 22 },
        Fri: { o: 15, c: 24 },
        Sat: { o: 11, c: 24 },
      },
      specials: {
        Tue: {
          allDay: !0,
          text: '$2 games all day!',
          description:
            "<b>Big Al's Beaverton:</b> Two Buck Tuesdays ($2 games, shoes, sodas, beers & snacks).",
        },
      },
    },
    "Langer's Entertainment": {
      address: '21650 SW Langer Farms Pkwy, Sherwood, OR 97140',
      url: 'https://langersfun.com/attractions/bowling/',
      phone: '(503) 625-1800',
      taxRate: 0,
      hours: {
        Sun: { o: 11, c: 22 },
        Mon: { o: 11, c: 22 },
        Tue: { o: 11, c: 22 },
        Wed: { o: 11, c: 22 },
        Thu: { o: 11, c: 22 },
        Fri: { o: 11, c: 23 },
        Sat: { o: 11, c: 23 },
      },
      specials: {
        Mon: {
          from: 15,
          to: 18,
          text: 'Happy Hour! $15/hr.',
          description:
            "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        },
        Tue: {
          allDay: !0,
          text: '$2 games all day!',
          description: "<b>Langer's:</b> Twosday! $2 per person per game.",
        },
        Wed: {
          from: 15,
          to: 18,
          text: 'Happy Hour! $15/hr.',
          description:
            "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        },
        Thu: {
          from: 15,
          to: 18,
          text: 'Happy Hour! $15/hr.',
          description:
            "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        },
        Fri: {
          from: 15,
          to: 18,
          text: 'Happy Hour! $15/hr.',
          description:
            "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        },
      },
    },
    "Big Al's Vancouver": {
      address: '16615 SE 18th St, Vancouver, WA 98683',
      url: 'https://www.ilovebigals.com/vancouver/lanes/',
      phone: '(360) 944-6118',
      taxRate: 0.088,
      hours: {
        Sun: { o: 9, m: 30, c: 22 },
        Mon: { o: 15, c: 22 },
        Tue: { o: 15, c: 22 },
        Wed: { o: 15, c: 22 },
        Thu: { o: 15, c: 22 },
        Fri: { o: 15, c: 24 },
        Sat: { o: 12, c: 24 },
      },
      specials: {
        Tue: {
          allDay: !0,
          text: '$2 games, shoes, drinks & snacks!',
          description:
            "<b>Big Al's Vancouver:</b> Two Buck Tuesdays ($2 games, shoes, sodas, beers & snacks).",
        },
      },
    },
  },
  defaultSortOrder = [
    'Milwaukie Bowl',
    'Tigard Bowl',
    'Kingpins Beaverton',
    'Kingpins Portland',
    'SuperPlay',
    'Hazel Dell Lanes',
    "Big Al's Beaverton",
    "Langer's Entertainment",
    "Big Al's Vancouver",
  ],
  dom = {
    html: document.documentElement,
    daySelect: document.getElementById('day'),
    timeFilter: document.getElementById('timeFilter'),
    timeFilterExact: document.getElementById('timeFilterExact'),
    numPlayers: document.getElementById('numPlayers'),
    numGames: document.getElementById('numGames'),
    paceSelect: document.getElementById('paceSelect'),
    startAddress: document.getElementById('startAddress'),
    driveTimeButton: document.getElementById('driveTimeButton'),
    calculatorResult: document.getElementById('calculator-result'),
    results: document.getElementById('results'),
    specialsContainer: document.getElementById('specials-container'),
    themeToggle: document.getElementById('theme-toggle-checkbox'),
    drivePrompt: document.getElementById('drive-time-prompt'),
    closePromptBtn: document.getElementById('close-prompt-btn'),
    shareButton: document.getElementById('share-button'),
  },
  state = { contactInfo: {} };
function applyTheme(e) {
  dom.html.setAttribute('data-theme', e),
    (dom.themeToggle.checked = 'dark' === e),
    localStorage.setItem('theme', e),
    generateFullDayTable();
}
function initializeTheme() {
  let e = localStorage.getItem('theme');
  applyTheme('light' === e ? 'light' : 'dark');
}
function showDriveTimePrompt() {
  'true' !== sessionStorage.getItem('promptDismissed') &&
    dom.drivePrompt.classList.add('show');
}
function hideDriveTimePrompt() {
  dom.drivePrompt.classList.remove('show');
}
function shareSettings() {
  let e = new URLSearchParams({
    day: dom.daySelect.value,
    time: dom.timeFilter.value,
    players: dom.numPlayers.value,
    games: dom.numGames.value,
    pace: dom.paceSelect.value,
  });
  dom.timeFilterExact.checked && e.set('exact', 'true');
  let t = `${window.location.origin}${
    window.location.pathname
  }?${e.toString()}`;
  navigator.clipboard.writeText(t).then(() => {
    let e = dom.shareButton.innerHTML;
    (dom.shareButton.innerHTML = '<span>Copied!</span>'),
      setTimeout(() => {
        dom.shareButton.innerHTML = e;
      }, 2e3);
  });
}
function populateTimeFilter() {
  (dom.timeFilter.innerHTML = '<option value="any">Any Time</option>'),
    AppConfig.HOURS.forEach((e) => {
      let t = document.createElement('option');
      (t.value = e),
        (t.textContent = formatHour(e)),
        dom.timeFilter.appendChild(t);
    });
}
function setupTooltipEvents() {
  document.querySelectorAll('.deal-indicator, .special-icon').forEach((e) => {
    let t = e.querySelector('.tooltip-text');
    t &&
      (e.addEventListener('mouseenter', () => t.classList.add('show-tooltip')),
      e.addEventListener('mouseleave', () =>
        t.classList.remove('show-tooltip')
      ));
  });
}
async function getDriveTimes() {
  let e = dom.startAddress.value;
  if (!e) {
    alert('Please enter a starting address.');
    return;
  }
  (dom.driveTimeButton.disabled = !0),
    (dom.driveTimeButton.textContent = 'Calculating...');
  try {
    let t = Object.values(bowlingAlleys).map((e) => e.address),
      o = await fetch(AppConfig.NETLIFY_FUNCTION_URL, {
        method: 'POST',
        body: JSON.stringify({ origin: e, destinations: t.join('|') }),
      }),
      a = await o.json();
    if ('OK' !== a.status)
      throw Error(`Google Maps API Error: ${a.error_message || a.status}`);
    let r = Object.keys(bowlingAlleys);
    a.rows[0].elements.forEach((e, t) => {
      let o = r[t];
      'OK' === e.status
        ? (state.contactInfo[o].drive = e.duration.text)
        : (state.contactInfo[o].drive = 'Not found');
    }),
      generateFullDayTable(),
      hideDriveTimePrompt();
  } catch (s) {
    console.error('Error fetching drive times:', s),
      alert('Could not fetch drive times. Please try again later.');
  } finally {
    (dom.driveTimeButton.disabled = !1),
      (dom.driveTimeButton.textContent = 'Get Drive Times');
  }
}
function initializeContactInfo() {
  for (let e in bowlingAlleys)
    state.contactInfo[e] = { phone: bowlingAlleys[e].phone, drive: '- mins' };
}
function formatPhoneNumberForLink(e) {
  return e.replace(/\D/g, '');
}
function getCurrentPacificTime() {
  let e = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
    ),
    t = AppConfig.DAYS_OF_WEEK[e.getDay()],
    o = e.getHours();
  return { day: t, hour: o, date: e };
}
function calculateTotalCost(e, t, o, a) {
  if (!e.game && !e.hour) return { cost: 1 / 0 };
  let r = 0.5 * Math.ceil((t * o * a) / 30),
    s = e.hour ? r * e.hour * Math.ceil(t / 6) : 1 / 0,
    l = e.game ? t * o * e.game : 1 / 0;
  if (s < l)
    return {
      cost: s,
      details: `(${r} ${1 === r ? 'hour' : 'hours'} @ ${formatPrice(
        e.hour,
        'hr'
      )})`,
    };
  {
    let n = t * o;
    return {
      cost: l,
      details: `(${n} ${1 === n ? 'game' : 'games'} @ ${formatPrice(
        e.game,
        'gm'
      )})`,
    };
  }
}
function getRatesForAlley(e, t, o) {
  let a = null,
    r = null,
    s = ['Mon', 'Tue', 'Wed', 'Thu'].includes(t);
  switch (e) {
    case 'Tigard Bowl':
      a =
        'Sat' === t
          ? o < 18
            ? 6.5
            : 7
          : 'Fri' === t
          ? o < 17
            ? 6
            : 7
          : s && o < 17
          ? 6
          : 6.5;
      break;
    case 'Kingpins Beaverton':
    case 'Kingpins Portland':
      r = (s || 'Fri' === t) && o < 17 ? 30 : 45;
      break;
    case 'Milwaukie Bowl':
      'Sat' === t
        ? (r = o < 16 ? 35 : 40)
        : 'Sun' === t
        ? (r = 35)
        : s
        ? (r = 25)
        : 'Fri' === t && (r = o < 22 ? 25 : 40);
      break;
    case "Big Al's Vancouver":
    case "Big Al's Beaverton":
      a =
        'Tue' === t ? 2 : s ? (o < 17 ? 5 : 6) : 'Fri' === t && o < 17 ? 5 : 8;
      break;
    case 'Hazel Dell Lanes':
      ('Fri' === t && o >= 17) ||
        (['Sat', 'Sun'].includes(t) && o >= 12) ||
        (a = o < 17 ? 4.5 : 5.5),
        (r = 35);
      break;
    case 'SuperPlay':
      'Thu' === t
        ? (r = 15)
        : 'Tue' === t
        ? (r = 25)
        : 'Wed' === t
        ? (a = 2)
        : (r =
            ('Fri' === t && o >= 17) || ['Sat', 'Sun'].includes(t) ? 43 : 32);
      break;
    case "Langer's Entertainment":
      'Tue' === t
        ? (a = 2)
        : ['Mon', 'Wed', 'Thu', 'Fri'].includes(t) && o >= 15 && o < 18
        ? (r = 15)
        : ['Mon', 'Wed', 'Thu', 'Fri'].includes(t) && o < 15
        ? (a = 5)
        : (r = ['Fri', 'Sat', 'Sun'].includes(t) ? 40 : 30);
  }
  let l = bowlingAlleys[e].taxRate || 0;
  return a && (a *= 1 + l), r && (r *= 1 + l), { game: a, hour: r };
}
function formatHour(e) {
  return 12 === e ? '12 PM' : e > 12 ? `${e - 12} PM` : `${e} AM`;
}
function formatPrice(e, t) {
  if (null === e) return '';
  let o = e % 1 == 0 ? e : e.toFixed(2);
  return `$${o} /${t}`;
}
function getColorForPrice(e, t, o) {
  if (t === o || e === 1 / 0 || null === e) return '';
  let a = 'dark' === dom.html.getAttribute('data-theme');
  return `hsl(${120 - 120 * ((e - t) / (o - t))}, ${a ? 40 : 70}%, ${
    a ? 35 : 85
  }%)`;
}
function generateFullDayTable() {
  let e = dom.daySelect.value,
    t = parseInt(dom.numPlayers.value) || 1,
    o = parseInt(dom.numGames.value) || 1,
    a = dom.paceSelect.value,
    r = 'normal' === a ? 10 : 15,
    s = dom.timeFilter.value,
    l = dom.timeFilterExact.checked ? 'exact' : 'after',
    { date: n, day: i, hour: c } = getCurrentPacificTime(),
    d = e === i,
    u = Object.keys(bowlingAlleys),
    m = Object.values(state.contactInfo).some(
      (e) => '- mins' !== e.drive && 'N/A' !== e.drive
    );
  m
    ? u.sort((e, t) => {
        let o = (e) => parseInt(e) || 1 / 0,
          a = o(state.contactInfo[e].drive),
          r = o(state.contactInfo[t].drive);
        return a - r;
      })
    : u.sort(
        (e, t) => defaultSortOrder.indexOf(e) - defaultSortOrder.indexOf(t)
      );
  let p = [],
    h = [];
  AppConfig.DAYS_OF_WEEK.forEach((e) => {
    u.forEach((a) => {
      AppConfig.HOURS.forEach((s) => {
        let l = bowlingAlleys[a].hours[e];
        if (s < l.o || s >= l.c) return;
        let n =
          'Hazel Dell Lanes' === a &&
          (('Sun' === e && s >= 9 && s < 12) ||
            (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(e) &&
              s >= 17 &&
              s < 22));
        if (n) return;
        let i = getRatesForAlley(a, e, s),
          { cost: c } = calculateTotalCost(i, t, o, r);
        if (c === 1 / 0) return;
        let d = { cost: c, alley: a, hour: s, day: e };
        0 === p.length || c < p[0].cost
          ? (p = [d])
          : c === p[0].cost && p.push(d),
          0 === h.length || c > h[0].cost
            ? (h = [d])
            : c === h[0].cost && h.push(d);
      });
    });
  });
  let g = 1 / 0,
    _ = -1 / 0,
    f = { cost: 1 / 0 },
    y = u.map((a) => {
      let n = AppConfig.HOURS.map((n) => {
        let i = bowlingAlleys[a].hours[e],
          u =
            'Hazel Dell Lanes' === a &&
            (('Sun' === e && n >= 9 && n < 12) ||
              (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(e) &&
                n >= 17 &&
                n < 22)),
          m = d && n < (d ? c : -1),
          p = n >= i.o && n < i.c && !u,
          h =
            'any' !== s && ('exact' === l ? n != parseInt(s) : n < parseInt(s)),
          y = { hour: n, isOpen: p, isPast: m, isLeagueTime: u, isFiltered: h };
        if (p) {
          y.rates = getRatesForAlley(a, e, n);
          let $ = calculateTotalCost(y.rates, t, o, r);
          (y.cost = $.cost),
            !m &&
              !h &&
              y.cost < 1 / 0 &&
              (y.cost < g && (g = y.cost),
              y.cost > _ && (_ = y.cost),
              y.cost < f.cost && (f = { ...$, alley: a, hour: n }));
        }
        return y;
      });
      return { alleyName: a, hours: n };
    });
  if (f.cost !== 1 / 0) {
    let $ =
        'any' === s
          ? `is <b>${f.alley}</b> at <b>${formatHour(f.hour)}</b>,`
          : `at <b>${formatHour(parseInt(s))}</b> is <b>${f.alley}</b>,`,
      v = 'unknown';
    f.details.includes('/gm')
      ? (v = 'per-game')
      : f.details.includes('/hr') && (v = 'hourly');
    let b = (f.cost / t).toFixed(2);
    dom.calculatorResult.innerHTML = `Best deal for ${t} players, ${o} games each ${$} costing <b>$${f.cost.toFixed(
      0
    )}</b> total. ($${b}/person at the <b>${v}</b> rate.)`;
  } else
    dom.calculatorResult.innerHTML =
      'No available deals found for the selected time.';
  let T = `<th></th>${AppConfig.HOURS.map(
      (e) => `<th data-hour="${e}">${formatHour(e)}</th>`
    ).join('')}`,
    w = y
      .map(({ alleyName: t, hours: o }) => {
        let a = state.contactInfo[t],
          r = bowlingAlleys[t],
          s = t;
        r.taxRate > 0 && (s += ' *');
        let l = s;
        r.url &&
          (l = `<a href="${r.url}" target="_blank" rel="noopener noreferrer">${s}</a>`);
        let n = `<div class="alley-name">${l}</div><div class="alley-info"><a href="tel:${formatPhoneNumberForLink(
            a.phone
          )}">${a.phone}</a></div><div class="alley-info">${a.drive}</div>`,
          i = o
            .map((o) => {
              let a = 'price-cell';
              if (
                (o.isFiltered && (a += ' filtered-cell'),
                o.isPast && (a += ' past-time-cell'),
                o.isLeagueTime)
              )
                return `<td data-label="${formatHour(
                  o.hour
                )}" class="closed-cell">Unavailable<br>(League Play)</td>`;
              if (!o.isOpen)
                return `<td data-label="${formatHour(
                  o.hour
                )}" class="closed-cell">Closed</td>`;
              let s = '';
              o.isPast ||
                o.isFiltered ||
                o.cost === 1 / 0 ||
                (s = getColorForPrice(o.cost, g, _));
              let l = `<div class="hour-price">${formatPrice(
                  o.rates?.hour,
                  'hr'
                )}</div><div class="game-price">${formatPrice(
                  o.rates?.game,
                  'gm'
                )}</div>`,
                n =
                  r.hours[e].m && o.hour === r.hours[e].o
                    ? `<span class="half-hour-note">Opens at ${
                        r.hours[e].o > 12 ? r.hours[e].o - 12 : r.hours[e].o
                      }:${r.hours[e].m}</span>`
                    : '',
                i = '',
                c = p.some(
                  (a) => a.alley === t && a.hour === o.hour && a.day === e
                ),
                d = h.some(
                  (a) => a.alley === t && a.hour === o.hour && a.day === e
                ),
                u = !o.isFiltered && !o.isPast && o.cost === f.cost;
              c
                ? (i = `<div class="deal-indicator week">‼️<span class="tooltip-text">Best deal of the week!</span></div>`)
                : d
                ? (i = `<div class="deal-indicator week">🚫<span class="tooltip-text">Worst deal of the week.</span></div>`)
                : u &&
                  (i = `<div class="deal-indicator day">⭐<span class="tooltip-text">Best deal for this day!</span></div>`);
              let m = r.specials?.[e],
                y =
                  m && (m.allDay || (m.from && o.hour >= m.from))
                    ? `<div class="special-icon">💲<span class="tooltip-text">${m.text}</span></div>`
                    : '';
              return `<td data-label="${formatHour(
                o.hour
              )}" class="${a}" style="background-color: ${s};">${i}${y}${
                l || '&nbsp;'
              }${n}</td>`;
            })
            .join('');
        return `<tr><td>${n}</td>${i}</tr>`;
      })
      .join('');
  dom.results.innerHTML = `<table><thead><tr>${T}</tr></thead><tbody>${w}</tbody></table>`;
  let S = Object.values(bowlingAlleys)
      .map((t) => t.specials?.[e]?.description)
      .filter(Boolean),
    B = '<h2>Specials for Today</h2>';
  S.length > 0
    ? (B += `<ul>${S.map((e) => `<li>${e}</li>`).join('')}</ul>`)
    : (B += '<p>No specific specials are listed for this day.</p>'),
    Object.values(bowlingAlleys).some((e) => e.taxRate > 0) &&
      (B +=
        '<p class="tax-note">* Prices for WA locations include an estimated 8.8% sales tax.</p>'),
    (dom.specialsContainer.innerHTML = B);
  let M = dom.results.querySelector('table');
  M &&
    (M.querySelectorAll('th, td').forEach((e) => {
      e.addEventListener('mouseenter', () => {
        'TR' === e.parentElement.tagName &&
          e.parentElement.classList.add('row-hover'),
          e.classList.add('cell-hover');
        let t = e.cellIndex;
        M.querySelectorAll('tr').forEach((e) => {
          e.cells[t] && e.cells[t].classList.add('column-hover');
        });
      }),
        e.addEventListener('mouseleave', () => {
          'TR' === e.parentElement.tagName &&
            e.parentElement.classList.remove('row-hover'),
            e.classList.remove('cell-hover');
          let t = e.cellIndex;
          M.querySelectorAll('tr').forEach((e) => {
            e.cells[t] && e.cells[t].classList.remove('column-hover');
          });
        });
    }),
    setupTooltipEvents());
}
function init() {
  initializeContactInfo(), populateTimeFilter();
  let e = new URLSearchParams(window.location.search),
    t = e.get('day');
  if (t) dom.daySelect.value = t;
  else {
    let { day: o } = getCurrentPacificTime();
    dom.daySelect.value = o;
  }
  let a = e.get('time'),
    r = e.get('players'),
    s = e.get('games'),
    l = e.get('pace'),
    n = e.get('exact');
  r && (dom.numPlayers.value = r),
    a && (dom.timeFilter.value = a),
    s && (dom.numGames.value = s),
    l && (dom.paceSelect.value = l),
    'true' === n && (dom.timeFilterExact.checked = !0),
    dom.daySelect.addEventListener('change', generateFullDayTable),
    dom.timeFilter.addEventListener('change', generateFullDayTable),
    dom.timeFilterExact.addEventListener('change', generateFullDayTable),
    dom.numPlayers.addEventListener('change', generateFullDayTable),
    dom.numGames.addEventListener('change', generateFullDayTable),
    dom.paceSelect.addEventListener('change', generateFullDayTable),
    dom.driveTimeButton.addEventListener('click', getDriveTimes),
    dom.shareButton.addEventListener('click', shareSettings),
    dom.themeToggle.addEventListener('change', () =>
      applyTheme(dom.themeToggle.checked ? 'dark' : 'light')
    ),
    dom.closePromptBtn.addEventListener('click', () => {
      hideDriveTimePrompt(), sessionStorage.setItem('promptDismissed', 'true');
    });
  let i = document.createElement('div');
  (i.className = 'pac-container pac-logo'),
    dom.startAddress.parentNode.appendChild(i);
  let c;
  dom.startAddress.addEventListener('input', (e) => {
    clearTimeout(c);
    let t = e.target.value;
    if (t.length < 3) {
      (i.innerHTML = ''), (i.style.display = 'none');
      return;
    }
    c = setTimeout(async () => {
      try {
        let e = await fetch(AppConfig.AUTOCOMPLETE_FUNCTION_URL, {
            method: 'POST',
            body: JSON.stringify({ input: t }),
          }),
          o = await e.json();
        o.predictions && o.predictions.length > 0
          ? ((i.innerHTML = o.predictions
              .map(
                (e) =>
                  `<div class="pac-item"><span class="pac-item-query">${e.structured_formatting.main_text}</span> <span>${e.structured_formatting.secondary_text}</span></div>`
              )
              .join('')),
            (i.style.display = 'block'),
            document.querySelectorAll('.pac-item').forEach((e, t) => {
              e.addEventListener('click', () => {
                (dom.startAddress.value = o.predictions[t].description),
                  (i.innerHTML = ''),
                  (i.style.display = 'none');
              });
            }))
          : ((i.innerHTML = ''), (i.style.display = 'none'));
      } catch (a) {
        console.error('Autocomplete error:', a);
      }
    }, 300);
  }),
    document.addEventListener('click', (e) => {
      dom.startAddress.contains(e.target) || (i.style.display = 'none');
    }),
    initializeTheme(),
    showDriveTimePrompt();
}
init();
