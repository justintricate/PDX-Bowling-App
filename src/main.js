import './style.css';

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

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
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes', //
        description:
          '<b>Kingpins (Both):</b> Cosmic Quarter Mania from 8:30 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Mon: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes', //
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Tue: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes', //
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Wed: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes', //
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Thu: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes', //
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Fri: {
        from: 22,
        text: 'All-You-Can-Bowl for $15', //
        description:
          '<b>Kingpins Portland:</b> Cosmic All-You-Can-Bowl from 10 PM - Midnight for $15 (shoes included).',
        type: 'ayce',
        aycePrice: 15,
      },
      Sat: {
        from: 22,
        text: 'All-You-Can-Bowl for $15', //
        description:
          '<b>Kingpins Portland:</b> Cosmic All-You-Can-Bowl from 10 PM - Midnight for $15 (shoes included).',
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
        text: '$25/hr per lane special', //
        description: '<b>SuperPlay:</b> $25 per hour, all day.',
        type: 'flat_rate_hourly',
        hourlyRate: 25,
      },
      Wed: {
        allDay: true,
        text: '$2/game & $2/shoes special', //
        description:
          '<b>SuperPlay:</b> $2 Wednesdays ($2 games, $2 shoes & drink specials).',
        type: 'per_game',
        gameRate: 2,
      },
      Thu: {
        allDay: true,
        text: '$15/hr per lane special', //
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
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes', //
        description:
          '<b>Kingpins (Both):</b> Cosmic Quarter Mania from 8:30 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Mon: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes', //
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Tue: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes', //
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Wed: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes', //
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Thu: {
        from: 21,
        text: 'Quarter Mania! $11 cover + $0.25 games/shoes', //
        description:
          '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
        type: 'cover_plus_per_game',
        coverCharge: 11,
        gameRate: 0.25,
      },
      Fri: {
        from: 23,
        text: 'All-You-Can-Bowl for $15', //
        description:
          '<b>Kingpins Beaverton:</b> Cosmic All-You-Can-Bowl from 11 PM - 1 AM for $15 (shoes included).',
        type: 'ayce',
        aycePrice: 15,
      },
      Sat: {
        from: 23,
        text: 'All-You-Can-Bowl for $15', //
        description:
          '<b>Kingpins Beaverton:</b> Cosmic All-You-Can-Bowl from 11 PM - 1 AM for $15 (shoes included).',
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
        text: '$2 games all day!', //
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
        text: 'Happy Hour! $15/hr', //
        description: "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        type: 'flat_rate_hourly',
        hourlyRate: 15,
      },
      Tue: {
        allDay: true,
        text: '$2 games all day!', //
        description: "<b>Langer's:</b> Twosday! $2 per person per game.",
        type: 'per_game',
        gameRate: 2,
      },
      Wed: {
        from: 15,
        to: 18,
        text: 'Happy Hour! $15/hr', //
        description: "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        type: 'flat_rate_hourly',
        hourlyRate: 15,
      },
      Thu: {
        from: 15,
        to: 18,
        text: 'Happy Hour! $15/hr', //
        description: "<b>Langer's:</b> Happy Hour bowling for $15/hr (3-6 PM).",
        type: 'flat_rate_hourly',
        hourlyRate: 15,
      },
      Fri: {
        from: 15,
        to: 18,
        text: 'Happy Hour! $15/hr', //
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
        text: '$2 games, shoes, drinks & snacks!', //
        description:
          "<b>Big Al's Vancouver:</b> Two Buck Tuesdays ($2 games, shoes, sodas, beers & snacks).",
        type: 'per_game',
        // Note: Keep gameRate with tax pre-calculated for display simplicity
        // The calculation logic uses the taxed value correctly.
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

// ============================================================================
// DOM REFERENCES
// ============================================================================

const dom = {
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
  weekComparisonButton: document.getElementById('week-comparison-button'),
  weekComparisonModal: document.getElementById('week-comparison-modal'),
  closeModalBtn: document.getElementById('close-modal-btn'),
};

// ============================================================================
// APPLICATION STATE
// ============================================================================

const state = {
  contactInfo: {},
  driveTimesActive: false,
  favorites: new Set(),
  avoided: new Set(),
};

// ============================================================================
// TOAST NOTIFICATION SYSTEM
// ============================================================================

const Toast = {
  /**
   * Shows a toast notification
   * @param {string} message - Message to display
   * @param {string} type - 'success', 'error', 'info', or 'warning'
   * @param {number} duration - Duration in milliseconds
   */
  show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');

    const icon =
      {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ',
      }[type] || 'ℹ';

    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-message">${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },
};

// ============================================================================
// SCREEN READER ANNOUNCEMENTS
// ============================================================================

/**
 * Announces a message to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}

// ============================================================================
// GLOBAL ERROR HANDLER
// ============================================================================

window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  Toast.show(
    'Something went wrong. Please refresh the page if the problem persists.',
    'error',
    5000
  );
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  Toast.show('An unexpected error occurred. Please try again.', 'error', 5000);
});

// ============================================================================
// INPUT VALIDATION
// ============================================================================

/**
 * Validates and constrains numeric inputs
 */
function validateInputs() {
  const players = parseInt(dom.numPlayers.value) || CONFIG.MIN_PLAYERS;
  const games = parseInt(dom.numGames.value) || CONFIG.MIN_GAMES;

  if (players < CONFIG.MIN_PLAYERS || players > CONFIG.MAX_PLAYERS) {
    dom.numPlayers.value = Math.max(
      CONFIG.MIN_PLAYERS,
      Math.min(CONFIG.MAX_PLAYERS, players)
    );
    Toast.show(
      `Players must be between ${CONFIG.MIN_PLAYERS} and ${CONFIG.MAX_PLAYERS}`,
      'warning'
    );
  }

  if (games < CONFIG.MIN_GAMES || games > CONFIG.MAX_GAMES) {
    dom.numGames.value = Math.max(
      CONFIG.MIN_GAMES,
      Math.min(CONFIG.MAX_GAMES, games)
    );
    Toast.show(
      `Games must be between ${CONFIG.MIN_GAMES} and ${CONFIG.MAX_GAMES}`,
      'warning'
    );
  }
}

// ============================================================================
// FAVORITES & AVOIDED ALLEYS
// ============================================================================

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
    } catch (error) {
      console.error('Failed to load alley preferences:', error);
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
    } catch (error) {
      console.error('Failed to save alley preferences:', error);
    }
  },

  toggleFavorite(alleyName) {
    if (state.favorites.has(alleyName)) {
      state.favorites.delete(alleyName);
      Toast.show(`Removed ${alleyName} from favorites`, 'info');
    } else {
      state.favorites.add(alleyName);
      state.avoided.delete(alleyName); // Can't be both
      Toast.show(`Added ${alleyName} to favorites`, 'success');
    }
    this.save();
    generateFullDayTable();
  },

  toggleAvoided(alleyName) {
    if (state.avoided.has(alleyName)) {
      state.avoided.delete(alleyName);
      Toast.show(`No longer avoiding ${alleyName}`, 'info');
    } else {
      state.avoided.add(alleyName);
      state.favorites.delete(alleyName); // Can't be both
      Toast.show(`Now avoiding ${alleyName}`, 'info');
    }
    this.save();
    generateFullDayTable();
  },
};

// ============================================================================
// PRICING MODULE
// ============================================================================

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
    const taxRate = alley.taxRate || 0;
    const totalMinutes = numPlayers * numGames * minutesPerGame;
    const hoursNeeded = Math.ceil(totalMinutes / 30) * 0.5;
    const lanesNeeded = Math.ceil(numPlayers / CONFIG.PLAYERS_PER_LANE);
    const totalGames = numPlayers * numGames;

    let deals = [];

    // --- 1. Calculate Standard Rates ---
    const standardRates = this.getRatesForAlley(alleyName, day, hour);

    if (standardRates.hour) {
      const hourlyCost = standardRates.hour * hoursNeeded * lanesNeeded;
      const hourLabel = hoursNeeded === 1 ? 'hour' : 'hours';
      deals.push({
        cost: hourlyCost,
        details: `(${hoursNeeded} ${hourLabel} @ ${this.formatPrice(
          standardRates.hour,
          'hr'
        )})`,
        rateType: 'hourly',
      });
    }

    if (standardRates.game) {
      const perGameCost = standardRates.game * totalGames;
      const gameLabel = totalGames === 1 ? 'game' : 'games';
      deals.push({
        cost: perGameCost,
        details: `(${totalGames} ${gameLabel} @ ${this.formatPrice(
          standardRates.game,
          'gm'
        )})`,
        rateType: 'per-game',
      });
    }

    // --- 2. Check for Specials ---
    const special = alley.specials?.[day];
    let specialCost = Infinity;

    if (
      special &&
      special.type &&
      (special.allDay ||
        (special.from &&
          hour >= special.from &&
          (!special.to || hour < special.to)))
    ) {
      switch (special.type) {
        case 'cover_plus_per_game':
          specialCost =
            numPlayers * special.coverCharge + totalGames * special.gameRate;
          deals.push({
            cost: specialCost,
            details: `${special.text}`,
            rateType: 'special',
          });
          break;
        case 'ayce':
          specialCost = numPlayers * special.aycePrice;
          deals.push({
            cost: specialCost,
            details: `${special.text}`,
            rateType: 'special',
          });
          break;
        case 'flat_rate_hourly':
          specialCost = special.hourlyRate * hoursNeeded * lanesNeeded;
          deals.push({
            cost: specialCost,
            details: `${special.text}`,
            rateType: 'special',
          });
          break;
        case 'per_game':
          specialCost = special.gameRate * totalGames;
          deals.push({
            cost: specialCost,
            details: `${special.text}`,
            rateType: 'special',
          });
          break;
      }
    }

    // --- 3. Find the Best Deal ---
    if (deals.length === 0) {
      return { cost: Infinity };
    }

    const bestDeal = deals.reduce((best, current) =>
      current.cost < best.cost ? current : best
    );

    // --- 4. Apply Tax to the final best deal ---
    bestDeal.cost *= 1 + taxRate;

    return bestDeal;
  },

  getRatesForAlley(alleyName, day, hour) {
    let gameRate = null;
    let hourlyRate = null;
    const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu'].includes(day);

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
      case "Big Al's Beaverton":
        if (day === 'Tue') {
          gameRate = 2;
        } else if (isWeekday) {
          gameRate = hour < 17 ? 5 : 6;
        } else if (day === 'Fri' && hour < 17) {
          gameRate = 5;
        } else {
          gameRate = 8;
        }
        break;

      case 'Hazel Dell Lanes':
        const isLeagueTime =
          (day === 'Fri' && hour >= 17) ||
          (['Sat', 'Sun'].includes(day) && hour >= 12);
        if (!isLeagueTime) {
          gameRate = hour < 17 ? 4.5 : 5.5;
        }
        hourlyRate = 35;
        break;

      case 'SuperPlay':
        if (day === 'Thu') {
          hourlyRate = 15;
        } else if (day === 'Tue') {
          hourlyRate = 25;
        } else if (day === 'Wed') {
          gameRate = 2;
        } else {
          const isWeekendPrime =
            (day === 'Fri' && hour >= 17) || ['Sat', 'Sun'].includes(day);
          hourlyRate = isWeekendPrime ? 43 : 32;
        }
        break;

      case "Langer's Entertainment":
        if (day === 'Tue') {
          gameRate = 2;
        } else if (
          ['Mon', 'Wed', 'Thu', 'Fri'].includes(day) &&
          hour >= 15 &&
          hour < 18
        ) {
          hourlyRate = 15;
        } else if (['Mon', 'Wed', 'Thu', 'Fri'].includes(day) && hour < 15) {
          gameRate = 5;
        } else {
          hourlyRate = ['Fri', 'Sat', 'Sun'].includes(day) ? 40 : 30;
        }
        break;
    }

    return { game: gameRate, hour: hourlyRate };
  },

  formatPrice(price, unit) {
    if (price === null) return '';
    const formattedPrice = price % 1 === 0 ? price : price.toFixed(2);
    return `$${formattedPrice} /${unit}`;
  },

  getColorForPrice(price, minPrice, maxPrice) {
    if (minPrice === maxPrice || price === Infinity || price === null) {
      return '';
    }

    const isDarkTheme = dom.html.getAttribute('data-theme') === 'dark';
    const normalizedPosition = (price - minPrice) / (maxPrice - minPrice);
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

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function formatHour(hour) {
  if (hour === 12) return '12 PM';
  if (hour > 12) return `${hour - 12} PM`;
  return `${hour} AM`;
}

function formatPhoneNumberForLink(phoneNumber) {
  return phoneNumber.replace(/\D/g, '');
}

function getCurrentPacificTime() {
  const pacificDate = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
  );
  const dayOfWeek = CONFIG.DAYS_OF_WEEK[pacificDate.getDay()];
  const currentHour = pacificDate.getHours();

  return { day: dayOfWeek, hour: currentHour, date: pacificDate };
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ============================================================================
// RECENT ADDRESSES MODULE
// ============================================================================

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
    } catch (error) {
      console.error('Failed to save recent address:', error);
    }
  },

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    } catch (error) {
      console.error('Failed to load recent addresses:', error);
      return [];
    }
  },

  displayInAutocomplete(container, onSelect) {
    const recent = this.getAll();
    if (recent.length === 0) return;

    const recentHTML = recent
      .map(
        (addr) =>
          `<div class="pac-item pac-item-recent">
            <span class="pac-item-query">📍 ${addr}</span>
          </div>`
      )
      .join('');

    container.innerHTML = recentHTML + (container.innerHTML || '');

    const recentItems = container.querySelectorAll('.pac-item-recent');
    recentItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        onSelect(recent[index]);
      });
    });
  },
};

// ============================================================================
// THEME FUNCTIONS
// ============================================================================

function applyTheme(theme) {
  dom.html.setAttribute('data-theme', theme);
  dom.themeToggle.checked = theme === 'dark';

  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    console.error('Failed to save theme preference:', error);
  }

  generateFullDayTable();
}

function initializeTheme() {
  let savedTheme;
  try {
    savedTheme = localStorage.getItem('theme');
  } catch (error) {
    console.error('Failed to load theme preference:', error);
  }

  applyTheme(savedTheme === 'light' ? 'light' : 'dark');
}

// ============================================================================
// WEEK COMPARISON VIEW
// ============================================================================

function generateWeekComparison() {
  const { date: currentDate } = getCurrentPacificTime();
  const numPlayers = parseInt(dom.numPlayers.value) || 1;
  const numGames = parseInt(dom.numGames.value) || 1;
  const pace = dom.paceSelect.value;
  const minutesPerGame =
    pace === 'normal'
      ? CONFIG.MINUTES_PER_GAME_NORMAL
      : CONFIG.MINUTES_PER_GAME_LEISURELY;
  const earliestTime = dom.timeFilter.value;
  const timeFilterMode = dom.timeFilterExact.checked ? 'exact' : 'after';
  const weekSummary = CONFIG.DAYS_OF_WEEK.map((day) => {
    const dayIndex = CONFIG.DAYS_OF_WEEK.indexOf(day);
    const currentDayIndex = currentDate.getDay();
    let dayDiff = dayIndex - currentDayIndex;

    if (dayDiff < 0) {
      dayDiff += 7; // Get next week's date if it's a past day
    }

    const targetDate = new Date(currentDate);
    targetDate.setDate(currentDate.getDate() + dayDiff);

    const dateString = targetDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
    let bestDeal = { cost: Infinity, alley: null, hour: null };

    Object.keys(bowlingAlleys).forEach((alleyName) => {
      // Skip avoided alleys
      if (state.avoided.has(alleyName)) return;

      CONFIG.HOURS.forEach((hour) => {
        const alleyHours = bowlingAlleys[alleyName].hours[day];
        if (hour < alleyHours.open || hour >= alleyHours.close) return;
        const isFilteredByTime =
          earliestTime !== 'any' &&
          (timeFilterMode === 'exact'
            ? hour != parseInt(earliestTime)
            : hour < parseInt(earliestTime));

        if (isFilteredByTime) return;
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

        if (cost < bestDeal.cost) {
          bestDeal = { cost, alley: alleyName, hour };
        }
      });
    });

    return { day, dateString, ...bestDeal };
  });

  // --- Create the dynamic time phrase for the subtitle ---
  let timePhrase = '';
  if (earliestTime !== 'any') {
    const formattedTime = formatHour(parseInt(earliestTime));
    if (timeFilterMode === 'exact') {
      timePhrase = `, at exactly ${formattedTime}`;
    } else {
      timePhrase = `, starting after ${formattedTime}`;
    }
  }

  const modalContent = dom.weekComparisonModal.querySelector(
    '.modal-content-inner'
  );

  const html = `
    <h2>Best Deals by Day</h2>
<p class="week-comparison-subtitle">For ${numPlayers} player${
    numPlayers !== 1 ? 's' : ''
  }, ${numGames} game${numGames !== 1 ? 's' : ''} each${timePhrase}</p>
    <div class="week-comparison-grid">
      ${weekSummary
        .map(({ day, dateString, cost, alley, hour }) => {
          const isBestOfWeek =
            cost === Math.min(...weekSummary.map((d) => d.cost));
          let costPerPerson = 'N/A';
          if (cost !== Infinity) {
            const perPerson = cost / numPlayers;
            // Check if the number has non-zero cents
            if (perPerson % 1 === 0) {
              costPerPerson = perPerson.toFixed(0); // e.g., "10"
            } else {
              costPerPerson = perPerson.toFixed(2); // e.g., "23.33"
            }
          }

          return `
          <div class="week-comparison-card ${
            isBestOfWeek ? 'best-of-week' : ''
          }" 
               data-day="${day}"
               role="button"
               tabindex="0"
               aria-label="Select ${day}, best deal at ${alley} for ${
            cost !== Infinity ? cost.toFixed(0) : 'N/A'
          }">
            <div class="week-card-day">${day}</div>
            <div class="week-card-date">${dateString}</div>
            ${
              isBestOfWeek
                ? '<div class="week-card-badge">Best of Week!</div>'
                : ''
            }
            <div class="week-card-alley">${alley || 'No deals'}</div>
            <div class="week-card-time">${
              hour !== null ? formatHour(hour) : '-'
            }</div>
            <div class="week-card-cost">
              ${cost !== Infinity ? `$${cost.toFixed(0)}` : 'N/A'}
            </div>
            <div class="week-card-per-person">
              ${cost !== Infinity ? `${costPerPerson}/person` : ''}
            </div>
          </div>
        `;
        })
        .join('')}
    </div>
  `;

  modalContent.innerHTML = html;

  // Add click handlers to select day
  modalContent.querySelectorAll('.week-comparison-card').forEach((card) => {
    const selectDay = () => {
      const day = card.dataset.day;
      dom.daySelect.value = day;
      closeWeekComparisonModal();
      generateFullDayTable();
      announceToScreenReader(`Selected ${day}`);
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

// ============================================================================
// DRIVE TIME PROMPT FUNCTIONS
// ============================================================================

function showDriveTimePrompt() {
  try {
    if (sessionStorage.getItem('promptDismissed') === 'true') return;
  } catch (error) {
    console.error('Failed to check prompt status:', error);
  }

  dom.drivePrompt.classList.add('show');
}

function hideDriveTimePrompt() {
  dom.drivePrompt.classList.remove('show');
}

// ============================================================================
// SHARING FUNCTIONS
// ============================================================================

function shareSettings() {
  const params = new URLSearchParams({
    day: dom.daySelect.value,
    time: dom.timeFilter.value,
    players: dom.numPlayers.value,
    games: dom.numGames.value,
    pace: dom.paceSelect.value,
  });

  if (dom.timeFilterExact.checked) {
    params.set('exact', 'true');
  }

  const shareUrl = `${window.location.origin}${
    window.location.pathname
  }?${params.toString()}`;

  navigator.clipboard
    .writeText(shareUrl)
    .then(() => {
      Toast.show('Link copied to clipboard!', 'success');
      announceToScreenReader('Link copied to clipboard');
    })
    .catch((error) => {
      console.error('Failed to copy to clipboard:', error);
      Toast.show('Failed to copy link. Please try again.', 'error');
    });
}

// ============================================================================
// TIME FILTER FUNCTIONS
// ============================================================================

function populateTimeFilter() {
  dom.timeFilter.innerHTML = '<option value="any">Any Time</option>';

  CONFIG.HOURS.forEach((hour) => {
    const option = document.createElement('option');
    option.value = hour;
    option.textContent = formatHour(hour);
    dom.timeFilter.appendChild(option);
  });
}

// ============================================================================
// TOOLTIP FUNCTIONS
// ============================================================================

function setupTooltipEvents() {
  document
    .querySelectorAll('.deal-indicator, .special-icon')
    .forEach((element) => {
      const tooltipText = element.querySelector('.tooltip-text');
      if (!tooltipText) return;

      element.addEventListener('mouseenter', () => {
        tooltipText.classList.add('show-tooltip');
      });

      element.addEventListener('mouseleave', () => {
        tooltipText.classList.remove('show-tooltip');
      });
    });
}

// ============================================================================
// DRIVE TIME API FUNCTIONS
// ============================================================================

async function getDriveTimes(retryCount = 0) {
  const startAddress = dom.startAddress.value;

  if (!startAddress) {
    Toast.show('Please enter a starting address.', 'warning');
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

      if (element.status === 'OK') {
        state.contactInfo[alleyName].drive = element.duration.text;
      } else {
        state.contactInfo[alleyName].drive = 'Not found';
      }
    });

    state.driveTimesActive = true;
    RecentAddresses.save(startAddress);
    generateFullDayTable();
    hideDriveTimePrompt();
    Toast.show(
      'Drive times calculated successfully!<br>Sorted by drive time.',
      'success'
    );
    announceToScreenReader('Drive times calculated');
  } catch (error) {
    console.error('Error fetching drive times:', error);

    if (retryCount < CONFIG.MAX_API_RETRIES) {
      const delayMs = CONFIG.RETRY_DELAY_BASE_MS * (retryCount + 1);
      console.log(
        `Retrying in ${delayMs}ms... (Attempt ${retryCount + 1}/${
          CONFIG.MAX_API_RETRIES
        })`
      );

      await delay(delayMs);
      return getDriveTimes(retryCount + 1);
    }

    Toast.show(
      'Could not fetch drive times. Please check your address and try again.',
      'error',
      5000
    );
  } finally {
    dom.driveTimeButton.disabled = false;
    dom.driveTimeButton.textContent = 'Get Drive Times';
  }
}

// ============================================================================
// AUTOCOMPLETE FUNCTIONS
// ============================================================================

async function handleAutocomplete(event, container) {
  const input = event.target.value;

  if (input.length < 3) {
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }

  try {
    const response = await fetch(CONFIG.AUTOCOMPLETE_FUNCTION_URL, {
      method: 'POST',
      body: JSON.stringify({ input }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.predictions && data.predictions.length > 0) {
      container.innerHTML = data.predictions
        .map(
          (prediction) =>
            `<div class="pac-item">
              <span class="pac-item-query">${prediction.structured_formatting.main_text}</span>
              <span>${prediction.structured_formatting.secondary_text}</span>
            </div>`
        )
        .join('');

      RecentAddresses.displayInAutocomplete(container, (address) => {
        dom.startAddress.value = address;
        container.innerHTML = '';
        container.style.display = 'none';
      });

      container.style.display = 'block';

      document
        .querySelectorAll('.pac-item:not(.pac-item-recent)')
        .forEach((item, index) => {
          item.addEventListener('click', () => {
            dom.startAddress.value = data.predictions[index].description;
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

// ============================================================================
// CONTACT INFO INITIALIZATION
// ============================================================================

function initializeContactInfo() {
  for (const alleyName in bowlingAlleys) {
    state.contactInfo[alleyName] = {
      phone: bowlingAlleys[alleyName].phone,
      drive: '- mins',
    };
  }
}

// ============================================================================
// MOBILE SWIPE GESTURES
// ============================================================================

function setupSwipeGestures() {
  let touchStartX = 0;
  let touchStartY = 0;

  dom.results.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    },
    { passive: true }
  );

  dom.results.addEventListener(
    'touchend',
    (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // Only trigger if horizontal swipe is dominant
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          changeDay(1); // Swipe left = next day
        } else {
          changeDay(-1); // Swipe right = previous day
        }
      }
    },
    { passive: true }
  );
}

function changeDay(direction) {
  const currentIndex = CONFIG.DAYS_OF_WEEK.indexOf(dom.daySelect.value);
  const newIndex = (currentIndex + direction + 7) % 7;
  dom.daySelect.value = CONFIG.DAYS_OF_WEEK[newIndex];
  generateFullDayTable();
  announceToScreenReader(`Changed to ${CONFIG.DAYS_OF_WEEK[newIndex]}`);
}

// ============================================================================
// TABLE GENERATION - MAIN FUNCTION
// ============================================================================

function generateFullDayTable() {
  const selectedDay = dom.daySelect.value;
  const numPlayers = parseInt(dom.numPlayers.value) || 1;
  const numGames = parseInt(dom.numGames.value) || 1;
  const pace = dom.paceSelect.value;
  const minutesPerGame =
    pace === 'normal'
      ? CONFIG.MINUTES_PER_GAME_NORMAL
      : CONFIG.MINUTES_PER_GAME_LEISURELY;

  const earliestTime = dom.timeFilter.value;
  const timeFilterMode = dom.timeFilterExact.checked ? 'exact' : 'after';

  const {
    date: currentDate,
    day: currentDay,
    hour: currentHour,
  } = getCurrentPacificTime();
  const isToday = selectedDay === currentDay;

  // Get sorted alley names
  const allAlleyNames = Object.keys(bowlingAlleys); // Separate avoided alleys from regular ones

  const regularAlleys = allAlleyNames.filter(
    (name) => !state.avoided.has(name)
  );
  const avoidedAlleys = allAlleyNames.filter((name) => state.avoided.has(name)); // Sort: favorites first, then by drive time or default order (ONLY FOR REGULAR ALLEYS)

  regularAlleys.sort((alleyA, alleyB) => {
    const aIsFavorite = state.favorites.has(alleyA);
    const bIsFavorite = state.favorites.has(alleyB);

    if (aIsFavorite && !bIsFavorite) return -1;
    if (!aIsFavorite && bIsFavorite) return 1;

    const hasDriveTimes = Object.values(state.contactInfo).some(
      (info) => info.drive !== '- mins' && info.drive !== 'N/A'
    );

    if (hasDriveTimes) {
      const parseMinutes = (driveStr) => parseInt(driveStr) || Infinity;
      const minsA = parseMinutes(state.contactInfo[alleyA].drive);
      const minsB = parseMinutes(state.contactInfo[alleyB].drive);
      return minsA - minsB;
    }

    return defaultSortOrder.indexOf(alleyA) - defaultSortOrder.indexOf(alleyB);
  }); // Recombine the list, with avoided alleys at the bottom

  const alleyNames = [...regularAlleys, ...avoidedAlleys];

  // Find best and worst deals of the week
  let bestDealsOfWeek = [];
  let worstDealsOfWeek = [];

  CONFIG.DAYS_OF_WEEK.forEach((day) => {
    alleyNames.forEach((alleyName) => {
      CONFIG.HOURS.forEach((hour) => {
        const alleyHours = bowlingAlleys[alleyName].hours[day];
        if (hour < alleyHours.open || hour >= alleyHours.close) return;

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

        if (cost === Infinity) return;

        const dealInfo = { cost, alley: alleyName, hour, day };

        if (bestDealsOfWeek.length === 0 || cost < bestDealsOfWeek[0].cost) {
          bestDealsOfWeek = [dealInfo];
        } else if (cost === bestDealsOfWeek[0].cost) {
          bestDealsOfWeek.push(dealInfo);
        }

        if (worstDealsOfWeek.length === 0 || cost > worstDealsOfWeek[0].cost) {
          worstDealsOfWeek = [dealInfo];
        } else if (cost === worstDealsOfWeek[0].cost) {
          worstDealsOfWeek.push(dealInfo);
        }
      });
    });
  });

  // Calculate min/max prices and best deal for selected day
  let minPrice = Infinity;
  let maxPrice = -Infinity;
  let bestDealToday = { cost: Infinity };

  const tableData = alleyNames.map((alleyName) => {
    const hourlyData = CONFIG.HOURS.map((hour) => {
      const alleyHours = bowlingAlleys[alleyName].hours[selectedDay];
      const isLeagueTime =
        alleyName === 'Hazel Dell Lanes' &&
        ((selectedDay === 'Sun' && hour >= 9 && hour < 12) ||
          (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(selectedDay) &&
            hour >= 17 &&
            hour < 22));

      const isPastTime = isToday && hour < currentHour;
      const isOpen =
        hour >= alleyHours.open && hour < alleyHours.close && !isLeagueTime;

      const isFilteredByTime =
        earliestTime !== 'any' &&
        (timeFilterMode === 'exact'
          ? hour != parseInt(earliestTime)
          : hour < parseInt(earliestTime));

      let cannotMakeItInTime = false;
      if (state.driveTimesActive && isToday && !isPastTime) {
        const driveTimeStr = state.contactInfo[alleyName].drive; // e.g., "15 mins", "1 hour 5 mins", "1 day 2 hours"

        // --- Robust parsing of driveTimeStr into minutes ---
        let driveMinutes = 0;
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
          // Handle cases like just "50 mins" where there's no preceding index for days/hours
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
          driveMinutes = Infinity; // Treat unparseable times as unreachable
        }
        // --- End of parsing ---

        if (driveMinutes > 0 && driveMinutes !== Infinity) {
          const currentMinutes = currentDate.getMinutes();
          const currentTotalMinutes = currentHour * 60 + currentMinutes; // e.g., 901 at 3:01 PM

          const arrivalTotalMinutes = currentTotalMinutes + driveMinutes; // Estimated arrival time in minutes past midnight

          const targetHourStartMinutes = hour * 60; // e.g., 900 for 3 PM start
          const targetHourEndMinutes = targetHourStartMinutes + 60; // e.g., 960 for 3 PM end (exclusive)

          // --- Check if arrival time is AFTER or AT the target hour slot ENDS ---
          cannotMakeItInTime = arrivalTotalMinutes >= targetHourEndMinutes;
        } else if (driveMinutes === Infinity || driveMinutes < 0) {
          cannotMakeItInTime = true; // Mark as unreachable if parsing failed or was negative
        }
      }

      const cellData = {
        hour,
        isOpen,
        isPastTime,
        isLeagueTime,
        isFilteredByTime,
        cannotMakeItInTime,
        unavailableReason: !isOpen // Check if closed FIRST
          ? 'Closed'
          : isLeagueTime
          ? 'League Play'
          : cannotMakeItInTime
          ? `Can't arrive in time (${state.contactInfo[alleyName].drive} drive)`
          : isPastTime // Now only checked if it WAS open but is past
          ? 'Time has passed'
          : null,
      };

      if (isOpen) {
        const costResult = PricingModule.calculateTotalCost(
          alleyName,
          selectedDay,
          hour,
          numPlayers,
          numGames,
          minutesPerGame
        );
        cellData.cost = costResult.cost;
        cellData.rateType = costResult.rateType;
        cellData.details = costResult.details;

        if (
          !isPastTime &&
          !isFilteredByTime &&
          !cannotMakeItInTime &&
          cellData.cost < Infinity
        ) {
          if (cellData.cost < minPrice) minPrice = cellData.cost;
          if (cellData.cost > maxPrice) maxPrice = cellData.cost;

          if (cellData.cost < bestDealToday.cost) {
            bestDealToday = {
              ...costResult,
              alley: alleyName,
              hour,
              rateType: cellData.rateType,
            };
          }
        }
      }

      return cellData;
    });

    return {
      alleyName,
      hours: hourlyData,
    };
  });

  // Display best deal message
  if (bestDealToday.cost !== Infinity) {
    const timePhrase = `is <b>${bestDealToday.alley}</b> at <b>${formatHour(
      bestDealToday.hour
    )}</b>,`;

    const rateType = bestDealToday.rateType || 'unknown';

    let costPerPerson = 'N/A';
    const perPerson = bestDealToday.cost / numPlayers;
    if (perPerson % 1 === 0) {
      costPerPerson = perPerson.toFixed(0);
    } else {
      costPerPerson = perPerson.toFixed(2);
    }

    const playerLabel = numPlayers === 1 ? 'player' : 'players';
    const gameLabel = numGames === 1 ? 'game' : 'games';

    // --- Conditionally add " each" ---
    const eachSuffix = numPlayers > 1 || numGames > 1 ? ' each' : '';
    // --- End of new block ---

    dom.calculatorResult.innerHTML = `Best deal for ${numPlayers} ${playerLabel}, ${numGames} ${gameLabel}${eachSuffix} ${timePhrase} costing $<b>${bestDealToday.cost.toFixed(
      0
    )}</b> total. (${costPerPerson}/person at the <b>${rateType}</b> rate.)`;
  } else {
    dom.calculatorResult.innerHTML =
      'No available deals found for the selected time.';
  }

  // Generate table HTML
  const headerHTML = `<th></th>${CONFIG.HOURS.map(
    (hour) =>
      `<th data-hour="${hour}" ${
        isToday && hour === currentHour ? 'class="current-hour"' : ''
      }>${formatHour(hour)}</th>`
  ).join('')}`;

  const bodyHTML = tableData
    .map(({ alleyName, hours }) => {
      const contactInfo = state.contactInfo[alleyName];
      const alley = bowlingAlleys[alleyName];
      const isFavorite = state.favorites.has(alleyName);
      const isAvoided = state.avoided.has(alleyName);

      let displayName = alleyName;
      if (alley.taxRate > 0) {
        displayName += ' *';
      }

      let nameHTML = displayName;
      if (alley.url) {
        nameHTML = `<a href="${alley.url}" target="_blank" rel="noopener noreferrer">${displayName}</a>`;
      }

      // --- Store the actions HTML in a variable ---
      const actionsHTML = `
  <div class="alley-actions">
    <button class="alley-action-btn ${isFavorite ? 'active' : ''}" 
            data-alley="${alleyName}" 
            data-action="favorite"
            aria-label="${isFavorite ? 'Remove from' : 'Add to'} favorites"
            title="${
              isFavorite ? 'Remove from favorites' : 'Add to favorites'
            }">
      ${isFavorite ? '🌟' : '⭐'}
    </button>
    <button class="alley-action-btn ${isAvoided ? 'active-avoid' : ''}" 
            data-alley="${alleyName}" 
            data-action="avoid"
            aria-label="${isAvoided ? 'Stop avoiding' : 'Avoid'} this alley"
            title="${
              isAvoided ? 'Stop avoiding this alley' : 'Avoid this alley'
            }">
      🚫
    </button>
  </div>
`;

      // --- Rebuild the main HTML block ---
      const alleyInfoHTML = `
  <div class="alley-header">
    <div class="alley-name">${nameHTML}</div>
  </div>
  <div class="alley-info">
    <a href="tel:${formatPhoneNumberForLink(contactInfo.phone)}">${
        contactInfo.phone
      }</a>
  </div>
  <div class="alley-sub-actions">
    <div class="alley-info drive-time">${contactInfo.drive}</div>
    ${actionsHTML}
  </div>
`;

      const cellsHTML = hours
        .map((cellData) => {
          let cellClass = 'price-cell';

          if (cellData.isFilteredByTime) cellClass += ' filtered-cell';
          if (cellData.isPastTime) cellClass += ' past-time-cell';

          if (
            cellData.isLeagueTime ||
            !cellData.isOpen ||
            cellData.cannotMakeItInTime
          ) {
            const reason = cellData.unavailableReason || 'Closed';
            const reasonClass = cellData.cannotMakeItInTime
              ? 'cannot-make-it-cell'
              : 'closed-cell';

            return `<td data-label="${formatHour(
              cellData.hour
            )}" class="${reasonClass}" title="${reason}">
              ${cellData.cannotMakeItInTime ? '⏰<br>' : ''}${reason}
            </td>`;
          }

          let backgroundColor = '';
          if (
            !cellData.isPastTime &&
            !cellData.isFilteredByTime &&
            cellData.cost !== Infinity
          ) {
            backgroundColor = PricingModule.getColorForPrice(
              cellData.cost,
              minPrice,
              maxPrice
            );
          }
          const displayRates = PricingModule.getRatesForAlley(
            alleyName,
            selectedDay,
            cellData.hour
          );

          let priceHTML = '';
          if (cellData.cost !== Infinity) {
            // --- Get Tax Rate ---
            const alley = bowlingAlleys[alleyName];
            const taxRate = alley.taxRate || 0;

            // --- Format Total Cost ---
            let totalCostFormatted;
            if (cellData.cost % 1 === 0) {
              totalCostFormatted = cellData.cost.toFixed(0);
            } else {
              totalCostFormatted = cellData.cost.toFixed(2);
            }

            // --- Format Per-Person Cost ---
            let perPersonCostFormatted = 'N/A';
            const perPerson = cellData.cost / numPlayers;
            if (perPerson % 1 === 0) {
              perPersonCostFormatted = perPerson.toFixed(0);
            } else {
              perPersonCostFormatted = perPerson.toFixed(2);
            }

            // --- Get Pre-Tax Base Rates ---
            const displayRates = PricingModule.getRatesForAlley(
              alleyName,
              selectedDay,
              cellData.hour
            );

            // --- Calculate Taxed Base Rates for Display ---
            const taxedHourRate = displayRates.hour
              ? displayRates.hour * (1 + taxRate)
              : null;
            const taxedGameRate = displayRates.game
              ? displayRates.game * (1 + taxRate)
              : null;

            // --- Determine Context and Format Rate Line ---
            let rateLine = '';
            if (cellData.rateType === 'hourly') {
              const totalMinutes = numPlayers * numGames * minutesPerGame;
              const hoursNeeded = Math.ceil(totalMinutes / 30) * 0.5;
              rateLine = `${PricingModule.formatPrice(
                taxedHourRate,
                'hr'
              )} x ${hoursNeeded}h`;
            } else if (cellData.rateType === 'per-game') {
              // --- Calculate Total Games and use 'gm'/'gms' ---
              const totalGames = numPlayers * numGames; // Calculate total games
              const gameUnitDisplay = totalGames === 1 ? 'gm' : 'gms'; // Use gm/gms
              rateLine = `${PricingModule.formatPrice(
                taxedGameRate,
                'gm'
              )} x ${totalGames} ${gameUnitDisplay}`; // Updated format
              // --- End of change ---
            } else if (cellData.rateType === 'special') {
              rateLine = cellData.details || 'Special Rate';
            } else {
              rateLine =
                PricingModule.formatPrice(taxedHourRate, 'hr') ||
                PricingModule.formatPrice(taxedGameRate, 'gm');
            }

            // --- Build the HTML ---
            priceHTML = `
    <div class="rate-display primary">
      ${rateLine}
    </div>
    <div class="calculated-cost"> 
     = $${totalCostFormatted}
    </div>
    <div class="per-person-cost">
      ${perPersonCostFormatted}/person
    </div>
  `;
          } else {
            // Fallback for cells with no valid cost
            priceHTML = `
    <div class="rate-display primary">-</div>
  `;
          }

          const halfHourNote =
            alley.hours[selectedDay].minutes &&
            cellData.hour === alley.hours[selectedDay].open
              ? `<span class="half-hour-note">Opens at ${
                  alley.hours[selectedDay].open > 12
                    ? alley.hours[selectedDay].open - 12
                    : alley.hours[selectedDay].open
                }:${alley.hours[selectedDay].minutes}</span>`
              : '';

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
            cellData.cost === bestDealToday.cost;

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
            (special.allDay || (special.from && cellData.hour >= special.from))
          ) {
            specialIndicator = `<div class="special-icon">💲<span class="tooltip-text">${special.text}</span></div>`;
          }

          return `<td data-label="${formatHour(
            cellData.hour
          )}" class="${cellClass}" style="background-color: ${backgroundColor};">
            ${dealIndicator}${specialIndicator}${
            priceHTML || '&nbsp;'
          }${halfHourNote}
          </td>`;
        })
        .join('');

      return `<tr ${
        isAvoided ? 'class="avoided-row"' : ''
      }><td>${alleyInfoHTML}</td>${cellsHTML}</tr>`;
    })
    .join('');

  dom.results.innerHTML = `<table><thead><tr>${headerHTML}</tr></thead><tbody>${bodyHTML}</tbody></table>`;

  // Add click handlers for favorite/avoid buttons
  document.querySelectorAll('.alley-action-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const alleyName = btn.dataset.alley;
      const action = btn.dataset.action;

      if (action === 'favorite') {
        AlleyPreferences.toggleFavorite(alleyName);
      } else if (action === 'avoid') {
        AlleyPreferences.toggleAvoided(alleyName);
      }
    });
  });

  // Generate specials section

  const specialDescriptions = alleyNames // Use the sorted list from the table generation
    .filter((alleyName) => !state.avoided.has(alleyName)) // Directly filter avoided using the name
    .map((alleyName) => {
      const alley = bowlingAlleys[alleyName]; // Get the alley data using the sorted name
      return alley.specials?.[selectedDay]?.description; // Get the description
    })
    .filter(Boolean); // Remove any alleys without a special description for the day

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

  // Add hover effects and tooltips
  const table = dom.results.querySelector('table');
  if (table) {
    table.querySelectorAll('th, td').forEach((cell) => {
      cell.addEventListener('mouseenter', () => {
        if (cell.parentElement.tagName === 'TR') {
          cell.parentElement.classList.add('row-hover');
        }
        cell.classList.add('cell-hover');

        const columnIndex = cell.cellIndex;
        table.querySelectorAll('tr').forEach((row) => {
          if (row.cells[columnIndex]) {
            row.cells[columnIndex].classList.add('column-hover');
          }
        });
      });

      cell.addEventListener('mouseleave', () => {
        if (cell.parentElement.tagName === 'TR') {
          cell.parentElement.classList.remove('row-hover');
        }
        cell.classList.remove('cell-hover');

        const columnIndex = cell.cellIndex;
        table.querySelectorAll('tr').forEach((row) => {
          if (row.cells[columnIndex]) {
            row.cells[columnIndex].classList.remove('column-hover');
          }
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

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
  initializeContactInfo();
  AlleyPreferences.load();
  populateTimeFilter();

  const urlParams = new URLSearchParams(window.location.search);
  const dayParam = urlParams.get('day');

  if (dayParam) {
    dom.daySelect.value = dayParam;
  } else {
    const { day } = getCurrentPacificTime();
    dom.daySelect.value = day;
  }

  const timeParam = urlParams.get('time');
  const playersParam = urlParams.get('players');
  const gamesParam = urlParams.get('games');
  const paceParam = urlParams.get('pace');
  const exactParam = urlParams.get('exact');

  if (playersParam) dom.numPlayers.value = playersParam;
  if (timeParam) dom.timeFilter.value = timeParam;
  if (gamesParam) dom.numGames.value = gamesParam;
  if (paceParam) dom.paceSelect.value = paceParam;
  if (exactParam === 'true') dom.timeFilterExact.checked = true;

  // Event listeners
  dom.daySelect.addEventListener('change', generateFullDayTable);
  dom.timeFilter.addEventListener('change', generateFullDayTable);
  dom.timeFilterExact.addEventListener('change', generateFullDayTable);

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

  // Close modal on background click
  dom.weekComparisonModal.addEventListener('click', (e) => {
    if (e.target === dom.weekComparisonModal) {
      closeWeekComparisonModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'Escape' &&
      dom.weekComparisonModal.classList.contains('show')
    ) {
      closeWeekComparisonModal();
    }
  });

  dom.themeToggle.addEventListener('change', () => {
    applyTheme(dom.themeToggle.checked ? 'dark' : 'light');
  });

  dom.closePromptBtn.addEventListener('click', () => {
    hideDriveTimePrompt();
    try {
      sessionStorage.setItem('promptDismissed', 'true');
    } catch (error) {
      console.error('Failed to save prompt dismissal:', error);
    }
  });

  // Setup autocomplete
  const autocompleteContainer = document.createElement('div');
  autocompleteContainer.className = 'pac-container pac-logo';
  dom.startAddress.parentNode.appendChild(autocompleteContainer);

  const debouncedAutocomplete = debounce((event) => {
    handleAutocomplete(event, autocompleteContainer);
  }, CONFIG.AUTOCOMPLETE_DEBOUNCE_MS);

  dom.startAddress.addEventListener('input', debouncedAutocomplete);

  document.addEventListener('click', (event) => {
    if (!dom.startAddress.contains(event.target)) {
      autocompleteContainer.style.display = 'none';
    }
  });

  dom.startAddress.addEventListener('focus', () => {
    if (dom.startAddress.value.length < 3) {
      const recent = RecentAddresses.getAll();
      if (recent.length > 0) {
        RecentAddresses.displayInAutocomplete(
          autocompleteContainer,
          (address) => {
            dom.startAddress.value = address;
            autocompleteContainer.innerHTML = '';
            autocompleteContainer.style.display = 'none';
          }
        );
        autocompleteContainer.style.display = 'block';
      }
    }
  });

  // Setup mobile swipe gestures
  setupSwipeGestures();

  initializeTheme();
  showDriveTimePrompt();

  // Generate initial table
  generateFullDayTable();
}

init();
