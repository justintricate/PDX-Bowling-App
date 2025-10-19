import './style.css';

const CONFIG = {
  DAYS_OF_WEEK: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  HOURS: Array.from({ length: 15 }, (_, index) => index + 9),
  NETLIFY_FUNCTION_URL: '/.netlify/functions/getDriveTimes',
  AUTOCOMPLETE_FUNCTION_URL: '/.netlify/functions/getAutocomplete',
  MINUTES_PER_GAME_NORMAL: 10,
  MINUTES_PER_GAME_LEISURELY: 15,
  PLAYERS_PER_LANE: 6,
  AUTOCOMPLETE_DEBOUNCE_MS: 300,
  TABLE_GENERATION_DEBOUNCE_MS: 150,
  MAX_API_RETRIES: 3,
  RETRY_DELAY_BASE_MS: 1000,
  MAX_RECENT_ADDRESSES: 5,
  PRICE_COLOR_HUE_MIN: 0,
  PRICE_COLOR_HUE_MAX: 120,
  PRICE_COLOR_SATURATION_LIGHT: 70,
  PRICE_COLOR_SATURATION_DARK: 40,
  PRICE_COLOR_LIGHTNESS_LIGHT: 85,
  PRICE_COLOR_LIGHTNESS_DARK: 35,
  MIN_PLAYERS: 1,
  MAX_PLAYERS: 50,
  MIN_GAMES: 1,
  MAX_GAMES: 20,
  DEFAULT_START_TIME: 'any',
  DEFAULT_END_TIME: 'any',
};

const bowlingAlleys = {
  'Milwaukie Bowl': {
    address: '3056 SE Harrison St, Milwaukie, OR 97222',
    url: 'https://www.milwaukiebowl.com/copy-of-legacy',
    phone: '(503) 654-7719',
    taxRate: 0,
    hours: {
      Sun: { open: 9, close: 22 },
      Mon: { open: 9, close: 23 },
      Tue: { open: 9, close: 23 },
      Wed: { open: 9, close: 23 },
      Thu: { open: 9, close: 23 },
      Fri: { open: 9, close: 24 },
      Sat: { open: 9, close: 24 },
    },
    specials: {},
  },
  'Tigard Bowl': {
    address: '11660 SW Pacific Hwy, Tigard, OR 97223',
    url: 'https://www.tigardbowl.com/open-bowl',
    phone: '(503) 639-2001',
    taxRate: 0,
    hours: {
      Sun: { open: 9, close: 24 },
      Mon: { open: 9, close: 24 },
      Tue: { open: 9, close: 24 },
      Wed: { open: 9, close: 24 },
      Thu: { open: 9, close: 24 },
      Fri: { open: 9, close: 25 },
      Sat: { open: 9, close: 25 },
    },
    specials: {},
  },
  'Kingpins Portland': {
    address: '3550 SE 92nd Ave, Portland, OR 97266',
    url: 'https://mykingpins.com/portland-bowling/#bowling-pricing',
    phone: '(503) 788-7889',
    taxRate: 0,
    hours: {
      Sun: { open: 9, close: 23, minutes: 30 },
      Mon: { open: 11, close: 24 },
      Tue: { open: 11, close: 23, minutes: 30 },
      Wed: { open: 11, close: 23, minutes: 30 },
      Thu: { open: 12, close: 23, minutes: 30 },
      Fri: { open: 10, close: 24 },
      Sat: { open: 9, close: 24 },
    },
    specials: {
      Sun: {
        from: 20,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes',
        description:
          '<b>Kingpins (Both):</b> Cosmic Quarter Mania from 8:30 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Mon: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes',
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Tue: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes',
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Wed: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes',
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Thu: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes',
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Fri: {
        from: 22,
        text: 'All You Can Bowl for $15',
        description:
          '<b>Kingpins Portland:</b> Cosmic All You Can Bowl from 10 PM - Midnight for $15 (shoes included).',
        type: 'ayce',
        aycePrice: 15,
      },
      Sat: {
        from: 22,
        text: 'All You Can Bowl for $15',
        description:
          '<b>Kingpins Portland:</b> Cosmic All You Can Bowl from 10 PM - Midnight for $15 (shoes included).',
        type: 'ayce',
        aycePrice: 15,
      },
    },
  },
  SuperPlay: {
    address: '9300 SW Beaverton Hillsdale Hwy, Beaverton, OR 97005',
    url: 'https://www.superplayor.com/Play/Bowling',
    phone: '(503) 292-3523',
    taxRate: 0,
    hours: {
      Sun: { open: 12, close: 22 },
      Mon: { open: 15, close: 23 },
      Tue: { open: 15, close: 23 },
      Wed: { open: 15, close: 23 },
      Thu: { open: 12, close: 24 },
      Fri: { open: 12, close: 24 },
      Sat: { open: 12, close: 24 },
    },
    specials: {
      Tue: {
        allDay: true,
        text: '$25/hr per lane special',
        description: '<b>SuperPlay:</b> $25 per hour, all day.',
        type: 'flat_rate_hourly',
        hourlyRate: 25,
      },
      Wed: {
        allDay: true,
        text: '$2/game & $2/shoes special',
        description:
          '<b>SuperPlay:</b> $2 Wednesdays ($2 games, $2 shoes & drink specials).',
        type: 'per_game',
        gameRate: 2,
      },
      Thu: {
        allDay: true,
        text: '$15/hr per lane special',
        description: '<b>SuperPlay:</b> $15 per hour, all Day.',
        type: 'flat_rate_hourly',
        hourlyRate: 15,
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
      Sun: { open: 9, close: 22 },
      Mon: { open: 11, minutes: 30, close: 23 },
      Tue: { open: 10, minutes: 30, close: 23 },
      Wed: { open: 9, close: 23 },
      Thu: { open: 9, minutes: 30, close: 23 },
      Fri: { open: 9, minutes: 30, close: 24 },
      Sat: { open: 9, close: 24 },
    },
    specials: {
      Mon: {
        from: 21,
        text: 'All-You-Can-Bowl for $12',
        description:
          '<b>Hazel Dell Lanes:</b> All-you-can-bowl for $12 from 9 PM - Midnight.',
        type: 'ayce',
        aycePrice: 12,
      },
    },
  },
  'Kingpins Beaverton': {
    address: '2725 SW Cedar Hills Blvd, Beaverton, OR 97005',
    url: 'https://mykingpins.com/beaverton-bowling/#bowling-pricing',
    phone: '(503) 646-1116',
    taxRate: 0,
    hours: {
      Sun: { open: 10, close: 23, minutes: 30 },
      Mon: { open: 11, close: 23, minutes: 30 },
      Tue: { open: 10, close: 23, minutes: 30 },
      Wed: { open: 11, close: 23, minutes: 30 },
      Thu: { open: 10, close: 24 },
      Fri: { open: 11, close: 25 },
      Sat: { open: 9, close: 25 },
    },
    specials: {
      Sun: {
        from: 20,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes',
        description:
          '<b>Kingpins (Both):</b> Cosmic Quarter Mania from 8:30 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Mon: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes',
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Tue: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes',
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Wed: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes',
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Thu: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes',
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Fri: {
        from: 23,
        text: 'All You Can Bowl for $15',
        description:
          '<b>Kingpins Beaverton:</b> Cosmic All You Can Bowl from 11 PM - 1 AM for $15 (shoes included).',
        type: 'ayce',
        aycePrice: 15,
      },
      Sat: {
        from: 23,
        text: 'All You Can Bowl for $15',
        description:
          '<b>Kingpins Beaverton:</b> Cosmic All You Can Bowl from 11 PM - 1 AM for $15 (shoes included).',
        type: 'ayce',
        aycePrice: 15,
      },
    },
  },
  "Big Al's Beaverton": {
    address: '14950 SW Barrows Rd, Beaverton, OR 97007',
    url: 'https://www.ilovebigals.com/beaverton/lanes/',
    phone: '(503) 748-6118',
    taxRate: 0,
    hours: {
      Sun: { open: 11, close: 22 },
      Mon: { open: 15, close: 22 },
      Tue: { open: 15, close: 22 },
      Wed: { open: 15, close: 22 },
      Thu: { open: 15, close: 22 },
      Fri: { open: 15, close: 24 },
      Sat: { open: 11, close: 24 },
    },
    specials: {
      Tue: {
        allDay: true,
        text: '$2 games all day!',
        description:
          "<b>Big Al's Beaverton:</b> Two Buck Tuesdays ($2 games, shoes, sodas, beers & snacks).",
        type: 'per_game',
        gameRate: 2,
      },
    },
  },
  "Langer's Entertainment": {
    address: '21650 SW Langer Farms Pkwy, Sherwood, OR 97140',
    url: 'https://langersfun.com/attractions/bowling/',
    phone: '(503) 625-1800',
    taxRate: 0,
    hours: {
      Sun: { open: 11, close: 22 },
      Mon: { open: 11, close: 22 },
      Tue: { open: 11, close: 22 },
      Wed: { open: 11, close: 22 },
      Thu: { open: 11, close: 22 },
      Fri: { open: 11, close: 23 },
      Sat: { open: 11, close: 23 },
    },
    specials: {
      Mon: {
        from: 15,
        to: 18,
        text: 'Happy Hour! $15/hr',
        description: "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        type: 'flat_rate_hourly',
        hourlyRate: 15,
      },
      Tue: {
        allDay: true,
        text: '$2 games all day!',
        description: "<b>Langer's:</b> Twosday! $2 per person per game.",
        type: 'per_game',
        gameRate: 2,
      },
      Wed: {
        from: 15,
        to: 18,
        text: 'Happy Hour! $15/hr',
        description: "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        type: 'flat_rate_hourly',
        hourlyRate: 15,
      },
      Thu: {
        from: 15,
        to: 18,
        text: 'Happy Hour! $15/hr',
        description: "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        type: 'flat_rate_hourly',
        hourlyRate: 15,
      },
      Fri: {
        from: 15,
        to: 18,
        text: 'Happy Hour! $15/hr',
        description: "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        type: 'flat_rate_hourly',
        hourlyRate: 15,
      },
    },
  },
  "Big Al's Vancouver": {
    address: '16615 SE 18th St, Vancouver, WA 98683',
    url: 'https://www.ilovebigals.com/vancouver/lanes/',
    phone: '(360) 944-6118',
    taxRate: 0.088,
    hours: {
      Sun: { open: 9, minutes: 30, close: 22 },
      Mon: { open: 15, close: 22 },
      Tue: { open: 15, close: 22 },
      Wed: { open: 15, close: 22 },
      Thu: { open: 15, close: 22 },
      Fri: { open: 15, close: 24 },
      Sat: { open: 12, close: 24 },
    },
    specials: {
      Tue: {
        allDay: true,
        text: '$2 games, shoes, drinks & snacks!',
        description:
          "<b>Big Al's Vancouver:</b> Two Buck Tuesdays ($2 games, shoes, sodas, beers & snacks).",
        type: 'per_game',
        gameRate: 2.18,
      },
    },
  },
};

const defaultSortOrder = [
  'Milwaukie Bowl',
  'Tigard Bowl',
  'Kingpins Beaverton',
  'Kingpins Portland',
  'SuperPlay',
  'Hazel Dell Lanes',
  "Big Al's Beaverton",
  "Langer's Entertainment",
  "Big Al's Vancouver",
];

let dom;

const state = {
  contactInfo: {},
  driveTimesActive: false,
  favorites: new Set(),
  avoided: new Set(),
};

const Toast = {
  show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    const icon =
      { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' }[type] || 'ℹ';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-message">${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },
};

function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}

window.addEventListener('error', (event) => {
  console.error(
    'Global error:',
    event.error,
    event.message,
    event.filename,
    event.lineno
  );
  Toast.show('Something went wrong. Please refresh the page.', 'error', 5000);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  Toast.show('An unexpected error occurred. Please try again.', 'error', 5000);
});

function validateInputs() {
  const players = parseInt(dom.numPlayers.value) || CONFIG.MIN_PLAYERS;
  const games = parseInt(dom.numGames.value) || CONFIG.MIN_GAMES;
  dom.numPlayers.value = Math.max(
    CONFIG.MIN_PLAYERS,
    Math.min(CONFIG.MAX_PLAYERS, players)
  );
  dom.numGames.value = Math.max(
    CONFIG.MIN_GAMES,
    Math.min(CONFIG.MAX_GAMES, games)
  );
  if (parseInt(dom.numPlayers.value) !== players) {
    Toast.show(
      `Players must be between ${CONFIG.MIN_PLAYERS} and ${CONFIG.MAX_PLAYERS}`,
      'warning'
    );
  }
  if (parseInt(dom.numGames.value) !== games) {
    Toast.show(
      `Games must be between ${CONFIG.MIN_GAMES} and ${CONFIG.MAX_GAMES}`,
      'warning'
    );
  }
}

const AlleyPreferences = {
  FAVORITES_KEY: 'favoriteAlleys',
  AVOIDED_KEY: 'avoidedAlleys',
  load() {
    try {
      state.favorites = new Set(
        JSON.parse(localStorage.getItem(this.FAVORITES_KEY) || '[]')
      );
      state.avoided = new Set(
        JSON.parse(localStorage.getItem(this.AVOIDED_KEY) || '[]')
      );
    } catch (e) {
      console.error('Failed to load prefs:', e);
    }
  },
  save() {
    try {
      localStorage.setItem(
        this.FAVORITES_KEY,
        JSON.stringify([...state.favorites])
      );
      localStorage.setItem(
        this.AVOIDED_KEY,
        JSON.stringify([...state.avoided])
      );
    } catch (e) {
      console.error('Failed to save prefs:', e);
    }
  },
  toggleFavorite(name) {
    if (state.favorites.has(name)) {
      state.favorites.delete(name);
      Toast.show(`Removed ${name} from favorites`, 'info');
    } else {
      state.favorites.add(name);
      state.avoided.delete(name);
      Toast.show(`Added ${name} to favorites`, 'success');
    }
    this.save();
    generateFullDayTable();
  },
  toggleAvoided(name) {
    if (state.avoided.has(name)) {
      state.avoided.delete(name);
      Toast.show(`No longer avoiding ${name}`, 'info');
    } else {
      state.avoided.add(name);
      state.favorites.delete(name);
      Toast.show(`Now avoiding ${name}`, 'info');
    }
    this.save();
    generateFullDayTable();
  },
};

const PricingModule = {
  calculateTotalCost(
    alleyName,
    day,
    hour,
    numPlayers,
    numGames,
    minutesPerGame
  ) {
    const alley = bowlingAlleys[alleyName];
    if (!alley) return { cost: Infinity, details: '', rateType: 'unknown' };
    const taxRate = alley.taxRate || 0;
    const totalMinutes = numPlayers * numGames * minutesPerGame;
    const hoursNeeded = Math.ceil(totalMinutes / 30) * 0.5;
    const lanesNeeded = Math.ceil(numPlayers / CONFIG.PLAYERS_PER_LANE);
    const totalGames = numPlayers * numGames;
    const deals = [];
    const standardRates = this.getRatesForAlley(alleyName, day, hour);
    if (standardRates.hour !== null) {
      const cost = standardRates.hour * hoursNeeded * lanesNeeded;
      deals.push({
        cost,
        details: `(${hoursNeeded} ${
          hoursNeeded === 1 ? 'hour' : 'hours'
        } @ ${this.formatPrice(standardRates.hour, 'hr')})`,
        rateType: 'hourly',
      });
    }
    if (standardRates.game !== null) {
      const cost = standardRates.game * totalGames;
      deals.push({
        cost,
        details: `(${totalGames} ${
          totalGames === 1 ? 'game' : 'games'
        } @ ${this.formatPrice(standardRates.game, 'gm')})`,
        rateType: 'per-game',
      });
    }
    const special = alley.specials?.[day];
    if (
      special &&
      special.type &&
      (special.allDay ||
        (special.from &&
          hour >= special.from &&
          (!special.to || hour < special.to)))
    ) {
      let specialCost = Infinity;
      switch (special.type) {
        case 'cover_plus_per_game':
          if (
            typeof special.coverCharge === 'number' &&
            typeof special.gameRate === 'number'
          ) {
            specialCost =
              numPlayers * special.coverCharge + totalGames * special.gameRate;
            deals.push({
              cost: specialCost,
              details: special.text,
              rateType: 'special',
            });
          }
          break;
        case 'ayce':
          if (typeof special.aycePrice === 'number') {
            specialCost = numPlayers * special.aycePrice;
            deals.push({
              cost: specialCost,
              details: special.text,
              rateType: 'special',
            });
          }
          break;
        case 'flat_rate_hourly':
          if (typeof special.hourlyRate === 'number') {
            specialCost = special.hourlyRate * hoursNeeded * lanesNeeded;
            deals.push({
              cost: specialCost,
              details: special.text,
              rateType: 'special',
            });
          }
          break;
        case 'per_game':
          if (typeof special.gameRate === 'number') {
            specialCost =
              alleyName === "Big Al's Vancouver" && day === 'Tue'
                ? (special.gameRate / (1 + taxRate)) * totalGames
                : special.gameRate * totalGames;
            deals.push({
              cost: specialCost,
              details: special.text,
              rateType: 'special',
            });
          }
          break;
      }
    }
    const validDeals = deals.filter(
      (deal) => typeof deal.cost === 'number' && isFinite(deal.cost)
    );
    if (validDeals.length === 0)
      return { cost: Infinity, details: '', rateType: 'unknown' };
    const bestDeal = validDeals.reduce((best, current) =>
      current.cost < best.cost ? current : best
    );
    const finalCost = bestDeal.cost * (1 + taxRate);
    if (isNaN(finalCost)) {
      console.error(
        `NaN cost for ${alleyName} @ ${hour} ${day}. PreTax:`,
        bestDeal
      );
      return {
        cost: Infinity,
        details: bestDeal.details,
        rateType: bestDeal.rateType,
      };
    }
    return {
      cost: finalCost,
      details: bestDeal.details,
      rateType: bestDeal.rateType,
    };
  },

  getRatesForAlley(alleyName, day, hour) {
    let gameRate = null;
    let hourlyRate = null;
    const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu'].includes(day);
    const alley = bowlingAlleys[alleyName];
    if (!alley) return { game: null, hour: null };
    const taxRate = alley.taxRate || 0;
    switch (alleyName) {
      case 'Tigard Bowl':
        if (day === 'Sat') {
          gameRate = hour < 18 ? 6.5 : 7;
        } else if (day === 'Fri') {
          gameRate = hour < 17 ? 6 : 7;
        } else if (isWeekday && hour < 17) {
          gameRate = 6;
        } else {
          gameRate = 6.5;
        }
        break;
      case 'Kingpins Beaverton':
      case 'Kingpins Portland':
        if ((isWeekday || day === 'Fri') && hour < 17) {
          hourlyRate = 30;
        } else {
          hourlyRate = 45;
        }
        break;
      case 'Milwaukie Bowl':
        if (day === 'Sat') {
          hourlyRate = hour < 16 ? 35 : 40;
        } else if (day === 'Sun') {
          hourlyRate = 35;
        } else if (isWeekday) {
          hourlyRate = 25;
        } else if (day === 'Fri') {
          hourlyRate = hour < 22 ? 25 : 40;
        }
        break;
      case "Big Al's Vancouver":
        const stdRate = 8 / (1 + taxRate);
        if (day !== 'Tue') {
          if (isWeekday) {
            gameRate = hour < 17 ? 5 : 6;
          } else if (day === 'Fri' && hour < 17) {
            gameRate = 5;
          } else {
            gameRate = stdRate;
          }
        } else {
          gameRate = hour < 17 ? 5 : 6;
        }
        break;
      case "Big Al's Beaverton":
        if (day !== 'Tue') {
          if (isWeekday) {
            gameRate = hour < 17 ? 5 : 6;
          } else if (day === 'Fri' && hour < 17) {
            gameRate = 5;
          } else {
            gameRate = 8;
          }
        } else {
          gameRate = hour < 17 ? 5 : 6;
        }
        break;
      case 'Hazel Dell Lanes':
        const isLeagueTimeHD =
          (day === 'Fri' && hour >= 17) ||
          (['Sat', 'Sun'].includes(day) && hour >= 12);
        if (!isLeagueTimeHD) {
          gameRate = (hour < 17 ? 4.5 : 5.5) / (1 + taxRate);
        }
        hourlyRate = 35 / (1 + taxRate);
        break;
      case 'SuperPlay':
        if (day !== 'Thu' && day !== 'Tue' && day !== 'Wed') {
          const isWeekendPrimeSP =
            (day === 'Fri' && hour >= 17) || ['Sat', 'Sun'].includes(day);
          hourlyRate = isWeekendPrimeSP ? 43 : 32;
        } else {
          const isWeekendPrimeSP =
            (day === 'Fri' && hour >= 17) || ['Sat', 'Sun'].includes(day);
          hourlyRate = isWeekendPrimeSP ? 43 : 32;
        }
        break;
      case "Langer's Entertainment":
        const isHappyHour =
          ['Mon', 'Wed', 'Thu', 'Fri'].includes(day) && hour >= 15 && hour < 18;
        if (day !== 'Tue' && !isHappyHour) {
          if (['Mon', 'Wed', 'Thu', 'Fri'].includes(day) && hour < 15) {
            gameRate = 5;
          } else {
            hourlyRate = ['Fri', 'Sat', 'Sun'].includes(day) ? 40 : 30;
          }
        } else {
          if (['Mon', 'Wed', 'Thu', 'Fri'].includes(day) && hour < 15) {
            gameRate = 5;
          } else {
            hourlyRate = ['Fri', 'Sat', 'Sun'].includes(day) ? 40 : 30;
          }
        }
        break;
    }
    return { game: gameRate, hour: hourlyRate };
  },

  formatPrice(price, unit) {
    if (price === null || price === undefined || isNaN(price)) return '';
    const formattedPrice =
      price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
    return `$${formattedPrice} /${unit}`;
  },
  getColorForPrice(price, minPrice, maxPrice) {
    if (
      minPrice === maxPrice ||
      price === Infinity ||
      price === null ||
      isNaN(price)
    ) {
      return '';
    }
    const isDarkTheme = dom.html.getAttribute('data-theme') === 'dark';
    const range = maxPrice - minPrice;
    if (range <= 0) return '';
    const normalizedPosition = Math.max(
      0,
      Math.min(1, (price - minPrice) / range)
    );
    const hue =
      CONFIG.PRICE_COLOR_HUE_MAX -
      CONFIG.PRICE_COLOR_HUE_MAX * normalizedPosition;
    const saturation = isDarkTheme
      ? CONFIG.PRICE_COLOR_SATURATION_DARK
      : CONFIG.PRICE_COLOR_SATURATION_LIGHT;
    const lightness = isDarkTheme
      ? CONFIG.PRICE_COLOR_LIGHTNESS_DARK
      : CONFIG.PRICE_COLOR_LIGHTNESS_LIGHT;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  },
};

function formatHour(hour) {
  const n = parseInt(hour);
  if (isNaN(n)) return '';
  if (n === 12) return '12 PM';
  if (n === 24 || n === 0) return '12 AM';
  if (n === 25) return '1 AM';
  if (n > 12 && n < 24) return `${n - 12} PM`;
  if (n < 12 && n > 0) return `${n} AM`;
  return '';
}
function formatPhoneNumberForLink(phoneNumber) {
  if (!phoneNumber || typeof phoneNumber !== 'string') return '';
  return phoneNumber.replace(/\D/g, '');
}
function getCurrentPacificTime() {
  try {
    const d = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
    );
    if (isNaN(d.getTime())) throw new Error('Invalid date');
    const i = d.getDay();
    if (i < 0 || i >= CONFIG.DAYS_OF_WEEK.length)
      throw new Error(`Invalid day index: ${i}`);
    return { day: CONFIG.DAYS_OF_WEEK[i], hour: d.getHours(), date: d };
  } catch (e) {
    console.error('Error getting Pacific time:', e);
    const f = new Date(),
      i = f.getDay(),
      d = CONFIG.DAYS_OF_WEEK[i] || CONFIG.DAYS_OF_WEEK[0],
      h = f.getHours();
    Toast.show('Could not get time zone, using system time.', 'warning', 4000);
    return { day: d, hour: h, date: f };
  }
}
function debounce(func, wait) {
  let t;
  return function (...a) {
    const l = () => {
      clearTimeout(t);
      func.apply(this, a);
    };
    clearTimeout(t);
    t = setTimeout(l, wait);
  };
}
function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const RecentAddresses = {
  STORAGE_KEY: 'recentAddresses',
  save(address) {
    if (!address || !address.trim()) return;
    let recent = this.getAll();
    recent = [address, ...recent.filter((addr) => addr !== address)].slice(
      0,
      CONFIG.MAX_RECENT_ADDRESSES
    );
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(recent));
    } catch (e) {
      console.error('Failed save recent:', e);
    }
  },
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    } catch (e) {
      console.error('Failed load recent:', e);
      return [];
    }
  },
  displayInAutocomplete(container, onSelect) {
    const recent = this.getAll();
    if (recent.length === 0) return;
    container.innerHTML =
      recent
        .map(
          (addr) =>
            `<div class="pac-item pac-item-recent"><span class="pac-item-query">📍 ${addr}</span></div>`
        )
        .join('') + (container.innerHTML || '');
    container
      .querySelectorAll('.pac-item-recent')
      .forEach((item, i) =>
        item.addEventListener('click', () => onSelect(recent[i]))
      );
  },
};
function applyTheme(theme) {
  dom.html.setAttribute('data-theme', theme);
  dom.themeToggle.checked = theme === 'dark';
  try {
    localStorage.setItem('theme', theme);
  } catch (e) {
    console.error('Failed save theme:', e);
  }
  generateFullDayTable();
}
function initializeTheme() {
  let savedTheme;
  try {
    savedTheme = localStorage.getItem('theme');
  } catch (e) {
    console.error('Failed load theme:', e);
  }
  applyTheme(savedTheme === 'light' ? 'light' : 'dark');
}
function generateWeekComparison() {
  const { date: currentDate } = getCurrentPacificTime();
  const numPlayers = parseInt(dom.numPlayers.value) || 1;
  const numGames = parseInt(dom.numGames.value) || 1;
  const pace = dom.paceSelect.value;
  const minutesPerGame =
    pace === 'normal'
      ? CONFIG.MINUTES_PER_GAME_NORMAL
      : CONFIG.MINUTES_PER_GAME_LEISURELY;
  const startTime = dom.timeFilterStart.value;
  const endTime = dom.timeFilterEnd.value;
  const startHour = startTime === 'any' ? -Infinity : parseInt(startTime);
  const endHour = endTime === 'any' ? Infinity : parseInt(endTime);
  const weekSummary = CONFIG.DAYS_OF_WEEK.map((day) => {
    const dayIndex = CONFIG.DAYS_OF_WEEK.indexOf(day);
    const currentDayIndex = currentDate.getDay();
    let dayDiff = dayIndex - currentDayIndex;
    if (dayDiff < 0) {
      dayDiff += 7;
    }
    const targetDate = new Date(currentDate);
    targetDate.setDate(currentDate.getDate() + dayDiff);
    const dateString = targetDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
    let bestDeal = { cost: Infinity, alley: null, hour: null };
    Object.keys(bowlingAlleys).forEach((alleyName) => {
      if (state.avoided.has(alleyName)) return;
      CONFIG.HOURS.forEach((hour) => {
        const alleyHours = bowlingAlleys[alleyName]?.hours?.[day];
        if (!alleyHours || hour < alleyHours.open || hour >= alleyHours.close)
          return;
        const isFilteredByTime = hour < startHour || hour >= endHour;
        if (isFilteredByTime) return;
        const isLeagueTime =
          alleyName === 'Hazel Dell Lanes' &&
          ((day === 'Sun' && hour >= 9 && hour < 12) ||
            (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) &&
              hour >= 17 &&
              hour < 22));
        if (isLeagueTime) return;
        try {
          const { cost } = PricingModule.calculateTotalCost(
            alleyName,
            day,
            hour,
            numPlayers,
            numGames,
            minutesPerGame
          );
          if (cost !== Infinity && isFinite(cost) && cost < bestDeal.cost) {
            bestDeal = { cost, alley: alleyName, hour };
          }
        } catch (e) {
          console.error(
            `Error in week comparison calc for ${alleyName} ${day} ${hour}:`,
            e
          );
        }
      });
    });
    return { day, dateString, ...bestDeal };
  });
  let timePhrase = '';
  if (startTime !== 'any' && endTime !== 'any') {
    if (startHour === endHour - 1) {
      timePhrase = `, at ${formatHour(startHour)}`;
    } else {
      timePhrase = `, between ${formatHour(startHour)} and ${formatHour(
        endTime
      )}`;
    }
  } else if (startTime !== 'any') {
    timePhrase = `, starting at or after ${formatHour(startHour)}`;
  } else if (endTime !== 'any') {
    timePhrase = `, ending before ${formatHour(endTime)}`;
  }
  const modalContent = dom.weekComparisonModal.querySelector(
    '.modal-content-inner'
  );
  const html = `<h2>Best Deals by Day</h2><p class="week-comparison-subtitle">For ${numPlayers} ${
    numPlayers === 1 ? 'player' : 'players'
  }, ${numGames} ${
    numGames === 1 ? 'game' : 'games'
  } each${timePhrase}</p><div class="week-comparison-grid">${weekSummary
    .map(({ day, dateString, cost, alley, hour }) => {
      const isBestOfWeek =
        cost !== Infinity &&
        cost ===
          Math.min(
            ...weekSummary.filter((d) => d.cost !== Infinity).map((d) => d.cost)
          );
      let costPerPerson = 'N/A';
      if (cost !== Infinity) {
        const pp = cost / numPlayers;
        costPerPerson = pp % 1 === 0 ? pp.toFixed(0) : pp.toFixed(2);
      }
      return `<div class="week-comparison-card ${
        isBestOfWeek ? 'best-of-week' : ''
      }" data-day="${day}" role="button" tabindex="0" aria-label="Select ${day}, best deal at ${
        alley || 'N/A'
      } for ${
        cost !== Infinity ? '$' + cost.toFixed(0) : 'N/A'
      }"><div class="week-card-day">${day}</div><div class="week-card-date">${dateString}</div>${
        isBestOfWeek ? '<div class="week-card-badge">Best of Week!</div>' : ''
      }<div class="week-card-alley">${
        alley || 'No deals'
      }</div><div class="week-card-time">${
        hour !== null ? formatHour(hour) : '-'
      }</div><div class="week-card-cost">${
        cost !== Infinity ? '$' + cost.toFixed(0) : 'N/A'
      }</div><div class="week-card-per-person">${
        cost !== Infinity ? `${costPerPerson}/person` : ''
      }</div></div>`;
    })
    .join('')}</div>`;
  modalContent.innerHTML = html;
  modalContent.querySelectorAll('.week-comparison-card').forEach((card) => {
    const selectDay = () => {
      dom.daySelect.value = card.dataset.day;
      closeWeekComparisonModal();
      generateFullDayTable();
      announceToScreenReader(`Selected ${card.dataset.day}`);
    };
    card.addEventListener('click', selectDay);
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectDay();
      }
    });
  });
  dom.weekComparisonModal.classList.add('show');
  dom.weekComparisonModal.setAttribute('aria-hidden', 'false');
  announceToScreenReader('Week comparison opened');
}
function closeWeekComparisonModal() {
  dom.weekComparisonModal.classList.remove('show');
  dom.weekComparisonModal.setAttribute('aria-hidden', 'true');
  announceToScreenReader('Week comparison closed');
}
function showDriveTimePrompt() {
  try {
    if (sessionStorage.getItem('promptDismissed') === 'true') return;
  } catch (e) {
    console.error('Failed check prompt:', e);
  }
  dom.drivePrompt.classList.add('show');
}
function hideDriveTimePrompt() {
  dom.drivePrompt.classList.remove('show');
}
function shareSettings() {
  const params = new URLSearchParams({
    day: dom.daySelect.value,
    startTime: dom.timeFilterStart.value,
    endTime: dom.timeFilterEnd.value,
    players: dom.numPlayers.value,
    games: dom.numGames.value,
    pace: dom.paceSelect.value,
  });
  const shareUrl = `${window.location.origin}${
    window.location.pathname
  }?${params.toString()}`;
  navigator.clipboard
    .writeText(shareUrl)
    .then(() => {
      Toast.show('Link copied!', 'success');
      announceToScreenReader('Link copied');
    })
    .catch((e) => {
      console.error('Failed copy:', e);
      Toast.show('Failed to copy link', 'error');
    });
}

function populateTimeWindowFilters() {
  dom.timeFilterStart.innerHTML = '';
  dom.timeFilterEnd.innerHTML = '';
  const anyStart = document.createElement('option');
  anyStart.value = 'any';
  anyStart.textContent = 'Any Start';
  dom.timeFilterStart.appendChild(anyStart);
  const anyEnd = document.createElement('option');
  anyEnd.value = 'any';
  anyEnd.textContent = 'Any End';
  dom.timeFilterEnd.appendChild(anyEnd);
  CONFIG.HOURS.forEach((hour) => {
    const startOpt = document.createElement('option');
    startOpt.value = hour;
    startOpt.textContent = formatHour(hour);
    dom.timeFilterStart.appendChild(startOpt);
  });
  const endHours = [...CONFIG.HOURS.map((h) => h + 1), 24, 25];
  endHours.forEach((hour) => {
    if (hour === 9) return;
    const endOpt = document.createElement('option');
    endOpt.value = hour;
    endOpt.textContent = formatHour(hour);
    dom.timeFilterEnd.appendChild(endOpt);
  });
  dom.timeFilterStart.value = CONFIG.DEFAULT_START_TIME;
  dom.timeFilterEnd.value = CONFIG.DEFAULT_END_TIME;
}

function setupTooltipEvents() {
  document.querySelectorAll('.deal-indicator, .special-icon').forEach((el) => {
    const tt = el.querySelector('.tooltip-text');
    if (!tt) return;
    el.addEventListener('mouseenter', () => tt.classList.add('show-tooltip'));
    el.addEventListener('mouseleave', () =>
      tt.classList.remove('show-tooltip')
    );
  });
}
async function getDriveTimes(retryCount = 0) {
  const startAddress = dom.startAddress.value;
  if (!startAddress) {
    Toast.show('Please enter address', 'warning');
    return;
  }
  dom.driveTimeButton.disabled = true;
  dom.driveTimeButton.textContent = 'Calculating...';
  try {
    const destinations = Object.values(bowlingAlleys).map(
      (alley) => alley.address
    );

    const response = await fetch(CONFIG.NETLIFY_FUNCTION_URL, {
      method: 'POST',
      body: JSON.stringify({
        origin: startAddress,
        destinations: destinations.join('|'),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(
        `Google Maps API Error: ${data.error_message || data.status}`
      );
    }

    const alleyNames = Object.keys(bowlingAlleys);
    data.rows[0].elements.forEach((element, index) => {
      const alleyName = alleyNames[index];
      if (state.contactInfo[alleyName]) {
        state.contactInfo[alleyName].drive =
          element.status === 'OK' ? element.duration.text : 'Not found';
      } else {
        console.warn(
          `Contact info for ${alleyName} not found during drive time update`
        );
      }
    });

    state.driveTimesActive = true;

    try {
      localStorage.setItem('lastStartAddress', startAddress);
    } catch (e) {
      console.error('Failed to save address to localStorage:', e);
    }

    RecentAddresses.save(startAddress);
    generateFullDayTable();
    hideDriveTimePrompt();
    Toast.show('Drive times calculated!<br>Sorted by drive time.', 'success');
    announceToScreenReader('Drive times calculated');
  } catch (error) {
    console.error('Drive time error:', error);
    if (retryCount < CONFIG.MAX_API_RETRIES) {
      const delayMs = CONFIG.RETRY_DELAY_BASE_MS * (retryCount + 1);
      console.log(`Retrying in ${delayMs}ms...`);
      await delay(delayMs);
      return getDriveTimes(retryCount + 1);
    }
    Toast.show('Could not get drive times.', 'error', 5000);
  } finally {
    dom.driveTimeButton.disabled = false;
    dom.driveTimeButton.textContent = 'Get Drive Times';
  }
}
async function handleAutocomplete(event, container) {
  const input = event.target.value;
  if (input.length < 3) {
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }
  try {
    const resp = await fetch(CONFIG.AUTOCOMPLETE_FUNCTION_URL, {
      method: 'POST',
      body: JSON.stringify({ input }),
    });
    if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
    const data = await resp.json();
    if (data.predictions && data.predictions.length > 0) {
      container.innerHTML = data.predictions
        .map(
          (p) =>
            `<div class="pac-item"><span class="pac-item-query">${p.structured_formatting.main_text}</span><span>${p.structured_formatting.secondary_text}</span></div>`
        )
        .join('');
      RecentAddresses.displayInAutocomplete(container, (addr) => {
        dom.startAddress.value = addr;
        container.innerHTML = '';
        container.style.display = 'none';
      });
      container.style.display = 'block';
      container
        .querySelectorAll('.pac-item:not(.pac-item-recent)')
        .forEach((item, i) => {
          item.addEventListener('click', () => {
            dom.startAddress.value = data.predictions[i].description;
            container.innerHTML = '';
            container.style.display = 'none';
          });
        });
    } else {
      container.innerHTML = '';
      container.style.display = 'none';
    }
  } catch (error) {
    console.error('Autocomplete error:', error);
    container.innerHTML = '';
    container.style.display = 'none';
  }
}
function initializeContactInfo() {
  for (const alleyName in bowlingAlleys) {
    state.contactInfo[alleyName] = {
      phone: bowlingAlleys[alleyName].phone,
      drive: '- mins',
    };
  }
}
function setupSwipeGestures() {
  let sx = 0,
    sy = 0;
  dom.results.addEventListener(
    'touchstart',
    (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    },
    { passive: true }
  );
  dom.results.addEventListener(
    'touchend',
    (e) => {
      const ex = e.changedTouches[0].clientX,
        ey = e.changedTouches[0].clientY,
        dx = sx - ex,
        dy = sy - ey;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx > 0) changeDay(1);
        else changeDay(-1);
      }
    },
    { passive: true }
  );
}
function changeDay(dir) {
  const i = CONFIG.DAYS_OF_WEEK.indexOf(dom.daySelect.value),
    ni = (i + dir + 7) % 7;
  dom.daySelect.value = CONFIG.DAYS_OF_WEEK[ni];
  generateFullDayTable();
  announceToScreenReader(`Changed to ${CONFIG.DAYS_OF_WEEK[ni]}`);
}

function generateFullDayTable() {
  const selectedDay = dom.daySelect.value;
  const numPlayers = parseInt(dom.numPlayers.value) || 1;
  const numGames = parseInt(dom.numGames.value) || 1;
  const pace = dom.paceSelect.value;
  const minutesPerGame =
    pace === 'normal'
      ? CONFIG.MINUTES_PER_GAME_NORMAL
      : CONFIG.MINUTES_PER_GAME_LEISURELY;
  const startTime = dom.timeFilterStart.value;
  const endTime = dom.timeFilterEnd.value;
  const startHour = startTime === 'any' ? -Infinity : parseInt(startTime);
  const endHour = endTime === 'any' ? Infinity : parseInt(endTime);
  const {
    date: currentDate,
    day: currentDay,
    hour: currentHour,
  } = getCurrentPacificTime();
  const isToday = selectedDay === currentDay;

  const allAlleyNames = Object.keys(bowlingAlleys);
  const regularAlleys = allAlleyNames.filter(
    (name) => !state.avoided.has(name)
  );
  const avoidedAlleys = allAlleyNames.filter((name) => state.avoided.has(name));
  regularAlleys.sort((alleyA, alleyB) => {
    const aIsFavorite = state.favorites.has(alleyA);
    const bIsFavorite = state.favorites.has(alleyB);
    if (aIsFavorite && !bIsFavorite) return -1;
    if (!aIsFavorite && bIsFavorite) return 1;
    if (state.driveTimesActive) {
      const parseMinutes = (driveStr = '') => {
        if (!driveStr || typeof driveStr !== 'string') return Infinity;
        try {
          const timeParts = driveStr.split(' ');
          let days = 0,
            hours = 0,
            mins = 0;
          const dayIndex = timeParts.findIndex((p) => p.includes('day'));
          if (dayIndex > 0) {
            days = parseInt(timeParts[dayIndex - 1]) || 0;
          }
          const hourIndex = timeParts.findIndex((p) => p.includes('hour'));
          if (hourIndex > 0) {
            hours = parseInt(timeParts[hourIndex - 1]) || 0;
          }
          const minIndex = timeParts.findIndex((p) => p.includes('min'));
          if (minIndex > 0) {
            mins = parseInt(timeParts[minIndex - 1]) || 0;
          }
          if (
            days === 0 &&
            hours === 0 &&
            mins === 0 &&
            timeParts.length >= 2 &&
            timeParts[1].includes('min')
          ) {
            mins = parseInt(timeParts[0]) || 0;
          }
          if (
            days === 0 &&
            hours === 0 &&
            mins === 0 &&
            timeParts.length >= 2 &&
            timeParts[1].includes('hour')
          ) {
            hours = parseInt(timeParts[0]) || 0;
          }
          const totalMins = days * 24 * 60 + hours * 60 + mins;
          return isNaN(totalMins) || totalMins < 0 ? Infinity : totalMins;
        } catch {
          return Infinity;
        }
      };
      const minsA = parseMinutes(state.contactInfo[alleyA]?.drive);
      const minsB = parseMinutes(state.contactInfo[alleyB]?.drive);
      if (minsA !== Infinity && minsB !== Infinity) return minsA - minsB;
      if (minsA === Infinity && minsB !== Infinity) return 1;
      if (minsA !== Infinity && minsB === Infinity) return -1;
    }
    return defaultSortOrder.indexOf(alleyA) - defaultSortOrder.indexOf(alleyB);
  });
  const alleyNames = [...regularAlleys, ...avoidedAlleys];

  let bestDealsOfWeek = [],
    worstDealsOfWeek = [];
  try {
    CONFIG.DAYS_OF_WEEK.forEach((day) => {
      alleyNames.forEach((alleyName) => {
        if (state.avoided.has(alleyName)) return;
        CONFIG.HOURS.forEach((hour) => {
          const alley = bowlingAlleys[alleyName];
          const alleyHours = alley?.hours?.[day];
          if (!alleyHours || hour < alleyHours.open || hour >= alleyHours.close)
            return;
          const isLeagueTime =
            alleyName === 'Hazel Dell Lanes' &&
            ((day === 'Sun' && hour >= 9 && hour < 12) ||
              (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) &&
                hour >= 17 &&
                hour < 22));
          if (isLeagueTime) return;
          const { cost } = PricingModule.calculateTotalCost(
            alleyName,
            day,
            hour,
            numPlayers,
            numGames,
            minutesPerGame
          );
          if (cost === Infinity || isNaN(cost)) return;
          const dealInfo = { cost, alley: alleyName, hour, day };
          if (bestDealsOfWeek.length === 0 || cost < bestDealsOfWeek[0].cost) {
            bestDealsOfWeek = [dealInfo];
          } else if (cost === bestDealsOfWeek[0].cost) {
            bestDealsOfWeek.push(dealInfo);
          }
          if (
            worstDealsOfWeek.length === 0 ||
            cost > worstDealsOfWeek[0].cost
          ) {
            worstDealsOfWeek = [dealInfo];
          } else if (cost === worstDealsOfWeek[0].cost) {
            worstDealsOfWeek.push(dealInfo);
          }
        });
      });
    });
  } catch (error) {
    console.error('Error calculating best/worst deals:', error);
    bestDealsOfWeek = [];
    worstDealsOfWeek = [];
  }

  let minPrice = Infinity,
    maxPrice = -Infinity;
  let bestDealToday = { cost: Infinity };

  const tableData = alleyNames.map((alleyName) => {
    const hourlyData = CONFIG.HOURS.map((hour) => {
      const alley = bowlingAlleys[alleyName];
      const alleyHours = alley?.hours?.[selectedDay];
      const isLeagueTime =
        alleyName === 'Hazel Dell Lanes' &&
        ((selectedDay === 'Sun' && hour >= 9 && hour < 12) ||
          (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(selectedDay) &&
            hour >= 17 &&
            hour < 22));
      const isPastTime = isToday && hour < currentHour;
      const isOpen =
        alleyHours &&
        hour >= alleyHours.open &&
        hour < alleyHours.close &&
        !isLeagueTime;
      const isFilteredByTime = hour < startHour || hour >= endHour;
      let cannotMakeItInTime = false;
      if (state.driveTimesActive && isToday && !isPastTime && isOpen) {
        const driveTimeStr = state.contactInfo[alleyName]?.drive;
        let driveMinutes = 0;
        if (
          driveTimeStr &&
          driveTimeStr !== '- mins' &&
          driveTimeStr !== 'Not found'
        ) {
          try {
            const timeParts = driveTimeStr.split(' ');
            let days = 0,
              hours = 0,
              mins = 0;
            const dayIndex = timeParts.findIndex((p) => p.includes('day'));
            if (dayIndex > 0) {
              days = parseInt(timeParts[dayIndex - 1]) || 0;
            }
            const hourIndex = timeParts.findIndex((p) => p.includes('hour'));
            if (hourIndex > 0) {
              hours = parseInt(timeParts[hourIndex - 1]) || 0;
            }
            const minIndex = timeParts.findIndex((p) => p.includes('min'));
            if (minIndex > 0) {
              mins = parseInt(timeParts[minIndex - 1]) || 0;
            }
            if (
              days === 0 &&
              hours === 0 &&
              mins === 0 &&
              timeParts.length >= 2 &&
              timeParts[1].includes('min')
            ) {
              mins = parseInt(timeParts[0]) || 0;
            }
            if (
              days === 0 &&
              hours === 0 &&
              mins === 0 &&
              timeParts.length >= 2 &&
              timeParts[1].includes('hour')
            ) {
              hours = parseInt(timeParts[0]) || 0;
            }
            driveMinutes = days * 24 * 60 + hours * 60 + mins;
            if (isNaN(driveMinutes) || driveMinutes < 0) {
              throw new Error('Parsed NaN or negative minutes');
            }
          } catch (e) {
            console.error('Error parsing drive time:', driveTimeStr, e);
            driveMinutes = Infinity;
          }
        } else {
          driveMinutes = 0;
        }
        if (driveMinutes > 0 && driveMinutes !== Infinity) {
          const currentMinutes = currentDate.getMinutes();
          const currentTotalMinutes = currentHour * 60 + currentMinutes;
          const arrivalTotalMinutes = currentTotalMinutes + driveMinutes;
          const targetHourEndMinutes = hour * 60 + 60;
          cannotMakeItInTime = arrivalTotalMinutes >= targetHourEndMinutes;
        } else if (driveMinutes === Infinity) {
          cannotMakeItInTime = true;
        }
      }
      const unavailableReason = !isOpen
        ? 'Closed'
        : isLeagueTime
        ? 'League Play'
        : cannotMakeItInTime
        ? `Can't arrive in time (${
            state.contactInfo[alleyName]?.drive || 'N/A'
          })`
        : isPastTime
        ? 'Time has passed'
        : null;
      const cellData = {
        hour,
        isOpen,
        isPastTime,
        isLeagueTime,
        isFilteredByTime,
        cannotMakeItInTime,
        unavailableReason,
        cost: Infinity,
        rateType: 'unknown',
        details: '',
      };
      if (isOpen && !unavailableReason) {
        try {
          const costResult = PricingModule.calculateTotalCost(
            alleyName,
            selectedDay,
            hour,
            numPlayers,
            numGames,
            minutesPerGame
          );
          if (
            costResult &&
            typeof costResult.cost === 'number' &&
            isFinite(costResult.cost)
          ) {
            cellData.cost = costResult.cost;
            cellData.rateType = costResult.rateType;
            cellData.details = costResult.details;
            if (!isPastTime && !isFilteredByTime && !cannotMakeItInTime) {
              if (cellData.cost < minPrice) minPrice = cellData.cost;
              if (cellData.cost > maxPrice && cellData.cost !== Infinity)
                maxPrice = cellData.cost;
              if (cellData.cost < bestDealToday.cost) {
                bestDealToday = { ...costResult, alley: alleyName, hour: hour };
              }
            }
          } else {
            cellData.cost = Infinity;
            cellData.unavailableReason = 'Pricing Error';
            console.warn(
              `Pricing error for ${alleyName} at ${hour} on ${selectedDay}:`,
              costResult
            );
          }
        } catch (e) {
          console.error(
            `Error calculating cost for ${alleyName} at ${hour} on ${selectedDay}:`,
            e
          );
          cellData.cost = Infinity;
          cellData.unavailableReason = 'Calc Error';
        }
      }
      return cellData;
    });
    return { alleyName, hours: hourlyData };
  });

  if (
    bestDealToday.cost !== Infinity &&
    bestDealToday.alley &&
    bestDealToday.hour !== undefined
  ) {
    let timeContextPhrase = '';
    if (startTime !== 'any' && endTime !== 'any') {
      if (startHour === endHour - 1) {
        timeContextPhrase = `at ${formatHour(startHour)}`;
      } else {
        timeContextPhrase = `between ${formatHour(startHour)} and ${formatHour(
          endTime
        )}`;
      }
    } else if (startTime !== 'any') {
      timeContextPhrase = `at or after ${formatHour(startHour)}`;
    } else if (endTime !== 'any') {
      timeContextPhrase = `before ${formatHour(endTime)}`;
    } else {
      timeContextPhrase = `for any time`;
    }
    const dealTimePhrase = `is <b>${bestDealToday.alley}</b> at <b>${formatHour(
      bestDealToday.hour
    )}</b>,`;
    const rateType = bestDealToday.rateType || 'unknown';
    let costPerPerson = 'N/A';
    const perPerson = bestDealToday.cost / numPlayers;
    if (isFinite(perPerson)) {
      costPerPerson =
        perPerson % 1 === 0 ? perPerson.toFixed(0) : perPerson.toFixed(2);
    }
    const playerLabel = numPlayers === 1 ? 'player' : 'players';
    const gameLabel = numGames === 1 ? 'game' : 'games';
    const eachSuffix = numPlayers > 1 || numGames > 1 ? ' each' : '';
    dom.calculatorResult.innerHTML = `Best deal ${timeContextPhrase} for ${numPlayers} ${playerLabel}, ${numGames} ${gameLabel}${eachSuffix} ${dealTimePhrase} costing $<b>${bestDealToday.cost.toFixed(
      0
    )}</b> total. (${costPerPerson}/person at the <b>${rateType}</b> rate.)`;
  } else {
    dom.calculatorResult.innerHTML =
      'No available deals found for the selected time window.';
  }

  const headerHTML = `<th id="sort-indicator-cell"></th>${CONFIG.HOURS.map(
    (hour) =>
      `<th data-hour="${hour}" ${
        isToday && hour === currentHour ? 'class="current-hour"' : ''
      }>${formatHour(hour)}</th>`
  ).join('')}`;

  const bodyHTML = tableData
    .map(({ alleyName, hours }) => {
      const contactInfo = state.contactInfo[alleyName] || {};
      const alley = bowlingAlleys[alleyName];
      if (!alley) return '';
      const isFavorite = state.favorites.has(alleyName);
      const isAvoided = state.avoided.has(alleyName);
      let displayName = alleyName;
      if (alley.taxRate > 0) displayName += ' *';
      let nameHTML = displayName;
      if (alley.url)
        nameHTML = `<a href="${alley.url}" target="_blank" rel="noopener noreferrer">${displayName}</a>`;
      const actionsHTML = `<div class="alley-actions"><button class="alley-action-btn ${
        isFavorite ? 'active' : ''
      }" data-alley="${alleyName}" data-action="favorite" aria-label="${
        isFavorite ? 'Remove from' : 'Add to'
      } favorites" title="${
        isFavorite ? 'Remove from favorites' : 'Add to favorites'
      }">${isFavorite ? '🌟' : '⭐'}</button><button class="alley-action-btn ${
        isAvoided ? 'active-avoid' : ''
      }" data-alley="${alleyName}" data-action="avoid" aria-label="${
        isAvoided ? 'Stop avoiding' : 'Avoid'
      } this alley" title="${
        isAvoided ? 'Stop avoiding this alley' : 'Avoid this alley'
      }">🚫</button></div>`;
      const alleyInfoHTML = `<div class="alley-header"><div class="alley-name">${nameHTML}</div></div><div class="alley-info"><a href="tel:${formatPhoneNumberForLink(
        contactInfo.phone || ''
      )}">${
        contactInfo.phone || ''
      }</a></div><div class="alley-sub-actions"><div class="alley-info drive-time">${
        contactInfo.drive || '- mins'
      }</div>${actionsHTML}</div>`;

      const cellsHTML = hours
        .map((cellData) => {
          let cellClass = 'price-cell';
          if (cellData.isFilteredByTime) cellClass += ' filtered-cell';
          if (cellData.isPastTime) cellClass += ' past-time-cell';
          if (cellData.unavailableReason) {
            const reasonClass = cellData.cannotMakeItInTime
              ? 'cannot-make-it-cell'
              : 'closed-cell';
            return `<td data-label="${formatHour(
              cellData.hour
            )}" class="${cellClass} ${reasonClass}" title="${
              cellData.unavailableReason
            }"> ${cellData.cannotMakeItInTime ? '⏰<br>' : ''}${
              cellData.unavailableReason
            } </td>`;
          }
          if (cellData.cost === Infinity || isNaN(cellData.cost)) {
            return `<td data-label="${formatHour(
              cellData.hour
            )}" class="${cellClass} closed-cell" title="Pricing Unavailable"> - </td>`;
          }

          let dealIndicator = '';
          const isBestOfWeek = bestDealsOfWeek.some(
            (deal) =>
              deal.alley === alleyName &&
              deal.hour === cellData.hour &&
              deal.day === selectedDay
          );
          const isWorstOfWeek = worstDealsOfWeek.some(
            (deal) =>
              deal.alley === alleyName &&
              deal.hour === cellData.hour &&
              deal.day === selectedDay
          );
          const isBestOfDay =
            !cellData.isFilteredByTime &&
            !cellData.isPastTime &&
            !cellData.cannotMakeItInTime &&
            cellData.cost === bestDealToday.cost &&
            bestDealToday.alley === alleyName &&
            bestDealToday.hour === cellData.hour;
          if (isBestOfWeek) {
            dealIndicator = `<div class="deal-indicator week">‼️<span class="tooltip-text">Best deal of the week!</span></div>`;
          } else if (isWorstOfWeek) {
            dealIndicator = `<div class="deal-indicator week">🚫<span class="tooltip-text">Worst deal of the week.</span></div>`;
          } else if (isBestOfDay) {
            dealIndicator = `<div class="deal-indicator day">⭐<span class="tooltip-text">Best deal for this day!</span></div>`;
          }
          let specialIndicator = '';
          const special = alley.specials?.[selectedDay];
          if (
            special &&
            (special.allDay ||
              (special.from && cellData.hour >= special.from)) &&
            special.text
          ) {
            specialIndicator = `<div class="special-icon">💲<span class="tooltip-text">${special.text}</span></div>`;
          }

          let backgroundColor = PricingModule.getColorForPrice(
            cellData.cost,
            minPrice,
            maxPrice
          );
          const taxRate = alley.taxRate || 0;
          let totalCostFormatted =
            cellData.cost % 1 === 0
              ? cellData.cost.toFixed(0)
              : cellData.cost.toFixed(2);
          let perPersonCostFormatted = 'N/A';
          const perPerson = cellData.cost / numPlayers;
          if (isFinite(perPerson)) {
            perPersonCostFormatted =
              perPerson % 1 === 0 ? perPerson.toFixed(0) : perPerson.toFixed(2);
          }
          const displayRates = PricingModule.getRatesForAlley(
            alleyName,
            selectedDay,
            cellData.hour
          );
          const taxedHourRate =
            displayRates.hour !== null
              ? displayRates.hour * (1 + taxRate)
              : null;
          const taxedGameRate =
            displayRates.game !== null
              ? displayRates.game * (1 + taxRate)
              : null;
          let rateLine = '';
          if (cellData.rateType === 'hourly') {
            const totalMinutes = numPlayers * numGames * minutesPerGame;
            const hoursNeeded = Math.ceil(totalMinutes / 30) * 0.5;
            rateLine = `${PricingModule.formatPrice(
              taxedHourRate,
              'hr'
            )} x ${hoursNeeded}h`;
          } else if (cellData.rateType === 'per-game') {
            const totalGames = numPlayers * numGames;
            const gameUnitDisplay = totalGames === 1 ? 'gm' : 'gms';
            rateLine = `${PricingModule.formatPrice(
              taxedGameRate,
              'gm'
            )} x ${totalGames} ${gameUnitDisplay}`;
          } else if (cellData.rateType === 'special') {
            rateLine = cellData.details || 'Special Rate';
          } else {
            rateLine =
              PricingModule.formatPrice(taxedHourRate, 'hr') ||
              PricingModule.formatPrice(taxedGameRate, 'gm') ||
              'Rate N/A';
          }
          const priceHTML = `<div class="rate-display primary"><span class="rate-text">${rateLine}</span></div><div class="calculated-cost">= $${totalCostFormatted}</div><div class="per-person-cost">${perPersonCostFormatted}/person</div>`;
          const alleyHours = alley?.hours?.[selectedDay];
          const halfHourNote =
            alleyHours?.minutes && cellData.hour === alleyHours.open
              ? `<span class="half-hour-note">Opens at ${
                  alleyHours.open === 12
                    ? 12
                    : alleyHours.open > 12
                    ? alleyHours.open - 12
                    : alleyHours.open
                }:${alleyHours.minutes} ${
                  alleyHours.open >= 12 ? 'PM' : 'AM'
                }</span>`
              : '';

          return `<td data-label="${formatHour(
            cellData.hour
          )}" class="${cellClass}" style="background-color: ${backgroundColor};">${dealIndicator}${specialIndicator}${priceHTML}${halfHourNote}</td>`;
        })
        .join('');
      return `<tr ${
        isAvoided ? 'class="avoided-row"' : ''
      }><td>${alleyInfoHTML}</td>${cellsHTML}</tr>`;
    })
    .join('');

  dom.results.innerHTML = `<table><thead><tr>${headerHTML}</tr></thead><tbody>${bodyHTML}</tbody></table>`;

  document.querySelectorAll('.alley-action-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const alleyName = btn.dataset.alley;
      const action = btn.dataset.action;
      if (action === 'favorite') AlleyPreferences.toggleFavorite(alleyName);
      else if (action === 'avoid') AlleyPreferences.toggleAvoided(alleyName);
    });
  });

  const specialDescriptions = alleyNames
    .filter((alleyName) => !state.avoided.has(alleyName))
    .map(
      (alleyName) =>
        bowlingAlleys[alleyName]?.specials?.[selectedDay]?.description
    )
    .filter(Boolean);
  let specialsHTML = '<h2>Specials for Today</h2>';
  if (specialDescriptions.length > 0) {
    specialsHTML += `<ul>${specialDescriptions
      .map((desc) => `<li>${desc}</li>`)
      .join('')}</ul>`;
  } else {
    specialsHTML += '<p>No specific specials are listed for this day.</p>';
  }
  if (Object.values(bowlingAlleys).some((alley) => alley.taxRate > 0)) {
    specialsHTML +=
      '<p class="tax-note">* Prices for WA locations include an estimated 8.8% sales tax.</p>';
  }
  dom.specialsContainer.innerHTML = specialsHTML;

  const table = dom.results.querySelector('table');
  if (table) {
    table.querySelectorAll('th, td').forEach((cell) => {
      cell.addEventListener('mouseenter', () => {
        if (cell.parentElement.tagName === 'TR')
          cell.parentElement.classList.add('row-hover');
        cell.classList.add('cell-hover');
        const columnIndex = cell.cellIndex;
        table.querySelectorAll('tr').forEach((row) => {
          if (row.cells[columnIndex])
            row.cells[columnIndex].classList.add('column-hover');
        });
      });
      cell.addEventListener('mouseleave', () => {
        if (cell.parentElement.tagName === 'TR')
          cell.parentElement.classList.remove('row-hover');
        cell.classList.remove('cell-hover');
        const columnIndex = cell.cellIndex;
        table.querySelectorAll('tr').forEach((row) => {
          if (row.cells[columnIndex])
            row.cells[columnIndex].classList.remove('column-hover');
        });
      });
    });
    setupTooltipEvents();
  }

  announceToScreenReader(`Table updated for ${selectedDay}`);
}

const debouncedGenerateTable = debounce(
  generateFullDayTable,
  CONFIG.TABLE_GENERATION_DEBOUNCE_MS
);

function init() {
  dom = {
    html: document.documentElement,
    daySelect: document.getElementById('day'),
    timeFilterStart: document.getElementById('timeFilterStart'),
    timeFilterEnd: document.getElementById('timeFilterEnd'),
    numPlayers: document.getElementById('numPlayers'),
    numGames: document.getElementById('numGames'),
    paceSelect: document.getElementById('paceSelect'),
    startAddress: document.getElementById('startAddress'),
    driveTimeButton: document.getElementById('driveTimeButton'),
    calculatorResult: document.getElementById('calculator-result'),
    sortStatusIndicator: document.getElementById('sort-status-indicator'),
    results: document.getElementById('results'),
    specialsContainer: document.getElementById('specials-container'),
    themeToggle: document.getElementById('theme-toggle-checkbox'),
    drivePrompt: document.getElementById('drive-time-prompt'),
    closePromptBtn: document.getElementById('close-prompt-btn'),
    shareButton: document.getElementById('share-button'),
    weekComparisonButton: document.getElementById('week-comparison-button'),
    weekComparisonModal: document.getElementById('week-comparison-modal'),
    closeModalBtn: document.getElementById('close-modal-btn'),
  };

  initializeContactInfo();
  AlleyPreferences.load();
  populateTimeWindowFilters();

  try {
    const lastAddress = localStorage.getItem('lastStartAddress');
    if (lastAddress) {
      dom.startAddress.value = lastAddress;
    }
  } catch (e) {
    console.error('Failed to load address from localStorage:', e);
  }

  const urlParams = new URLSearchParams(window.location.search);
  const dayParam = urlParams.get('day');
  if (dayParam && CONFIG.DAYS_OF_WEEK.includes(dayParam)) {
    dom.daySelect.value = dayParam;
  } else {
    const { day } = getCurrentPacificTime();
    dom.daySelect.value = day;
  }

  const startTimeParam = urlParams.get('startTime');
  const endTimeParam = urlParams.get('endTime');
  const playersParam = urlParams.get('players');
  const gamesParam = urlParams.get('games');
  const paceParam = urlParams.get('pace');

  dom.numPlayers.value = playersParam || '2';
  dom.timeFilterStart.value = startTimeParam || CONFIG.DEFAULT_START_TIME;
  dom.timeFilterEnd.value = endTimeParam || CONFIG.DEFAULT_END_TIME;
  dom.numGames.value = gamesParam || '4';
  dom.paceSelect.value = paceParam || 'normal';
  validateInputs();

  dom.daySelect.addEventListener('change', generateFullDayTable);
  dom.timeFilterStart.addEventListener('change', generateFullDayTable);
  dom.timeFilterEnd.addEventListener('change', generateFullDayTable);
  dom.numPlayers.addEventListener('change', () => {
    validateInputs();
    debouncedGenerateTable();
  });
  dom.numGames.addEventListener('change', () => {
    validateInputs();
    debouncedGenerateTable();
  });
  dom.paceSelect.addEventListener('change', generateFullDayTable);
  dom.driveTimeButton.addEventListener('click', () => getDriveTimes());
  dom.shareButton.addEventListener('click', shareSettings);
  dom.weekComparisonButton.addEventListener('click', generateWeekComparison);
  dom.closeModalBtn.addEventListener('click', closeWeekComparisonModal);
  dom.weekComparisonModal.addEventListener('click', (e) => {
    if (e.target === dom.weekComparisonModal) closeWeekComparisonModal();
  });
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'Escape' &&
      dom.weekComparisonModal.classList.contains('show')
    )
      closeWeekComparisonModal();
  });
  dom.themeToggle.addEventListener('change', () =>
    applyTheme(dom.themeToggle.checked ? 'dark' : 'light')
  );
  dom.closePromptBtn.addEventListener('click', () => {
    hideDriveTimePrompt();
    try {
      sessionStorage.setItem('promptDismissed', 'true');
    } catch (error) {
      console.error('Failed to save prompt dismissal:', error);
    }
  });

  const autocompleteContainer = document.createElement('div');
  autocompleteContainer.className = 'pac-container pac-logo';
  if (dom.startAddress.parentNode) {
    dom.startAddress.parentNode.appendChild(autocompleteContainer);
  }
  const debouncedAutocomplete = debounce(
    (event) => handleAutocomplete(event, autocompleteContainer),
    CONFIG.AUTOCOMPLETE_DEBOUNCE_MS
  );
  dom.startAddress.addEventListener('input', debouncedAutocomplete);
  document.addEventListener('click', (event) => {
    if (!dom.startAddress.contains(event.target))
      autocompleteContainer.style.display = 'none';
  });
  dom.startAddress.addEventListener('focus', () => {
    if (dom.startAddress.value.length < 3) {
      const recent = RecentAddresses.getAll();
      if (recent.length > 0) {
        autocompleteContainer.innerHTML = '';
        RecentAddresses.displayInAutocomplete(
          autocompleteContainer,
          (address) => {
            dom.startAddress.value = address;
            autocompleteContainer.innerHTML = '';
            autocompleteContainer.style.display = 'none';
          }
        );
        autocompleteContainer.style.display = 'block';
      } else {
        autocompleteContainer.style.display = 'none';
      }
    } else if (autocompleteContainer.innerHTML.trim() !== '') {
      autocompleteContainer.style.display = 'block';
    }
  });

  setupSwipeGestures();
  initializeTheme();
  showDriveTimePrompt();
  generateFullDayTable();
}

init();
