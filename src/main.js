import './style.css';

// =================================================================================
// DATA & CONFIGURATION
// =================================================================================

const AppConfig = {
  DAYS_OF_WEEK: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  HOURS: Array.from({ length: 15 }, (_, i) => i + 9), // 9 AM to 11 PM
  NETLIFY_FUNCTION_URL: '/.netlify/functions/getDriveTimes',
};

const hoursOfOperation = {
  'Tigard Bowl': {
    address: '11660 SW Pacific Hwy, Tigard, OR 97223',
    Sun: { o: 9, c: 24 },
    Mon: { o: 9, c: 24 },
    Tue: { o: 9, c: 24 },
    Wed: { o: 9, c: 24 },
    Thu: { o: 9, c: 24 },
    Fri: { o: 9, c: 25 },
    Sat: { o: 9, c: 25 },
  },
  'Kingpins Beaverton': {
    address: '2725 SW Cedar Hills Blvd, Beaverton, OR 97005',
    Sun: { o: 10, c: 23, m: 30 },
    Mon: { o: 11, c: 23, m: 30 },
    Tue: { o: 10, c: 23, m: 30 },
    Wed: { o: 11, c: 23, m: 30 },
    Thu: { o: 10, c: 24 },
    Fri: { o: 11, c: 25 },
    Sat: { o: 9, c: 25 },
  },
  'Kingpins Portland': {
    address: '3550 SE 92nd Ave, Portland, OR 97266',
    Sun: { o: 9, c: 23, m: 30 },
    Mon: { o: 11, c: 24 },
    Tue: { o: 11, c: 23, m: 30 },
    Wed: { o: 11, c: 23, m: 30 },
    Thu: { o: 12, c: 23, m: 30 },
    Fri: { o: 10, c: 24 },
    Sat: { o: 9, c: 24 },
  },
  'Milwaukie Bowl': {
    address: '3056 SE Harrison St, Milwaukie, OR 97222',
    Sun: { o: 9, c: 22 },
    Mon: { o: 9, c: 23 },
    Tue: { o: 9, c: 23 },
    Wed: { o: 9, c: 23 },
    Thu: { o: 9, c: 23 },
    Fri: { o: 9, c: 24 },
    Sat: { o: 9, c: 24 },
  },
  "Big Al's Vancouver": {
    address: '16615 SE 18th St, Vancouver, WA 98683',
    Sun: { o: 9, m: 30, c: 22 },
    Mon: { o: 15, c: 22 },
    Tue: { o: 15, c: 22 },
    Wed: { o: 15, c: 22 },
    Thu: { o: 15, c: 22 },
    Fri: { o: 15, c: 24 },
    Sat: { o: 12, c: 24 },
  },
  'Hazel Dell Lanes': {
    address: '6300 NE Hwy 99, Vancouver, WA 98665',
    Sun: { o: 9, c: 22 },
    Mon: { o: 11, m: 30, c: 23 },
    Tue: { o: 10, m: 30, c: 23 },
    Wed: { o: 9, c: 23 },
    Thu: { o: 9, m: 30, c: 23 },
    Fri: { o: 9, m: 30, c: 24 },
    Sat: { o: 9, c: 24 },
  },
  SuperPlay: {
    address: '9300 SW Beaverton Hillsdale Hwy, Beaverton, OR 97005',
    Sun: { o: 12, c: 22 },
    Mon: { o: 15, c: 23 },
    Tue: { o: 15, c: 23 },
    Wed: { o: 15, c: 23 },
    Thu: { o: 12, c: 24 },
    Fri: { o: 12, c: 24 },
    Sat: { o: 12, c: 24 },
  },
};
const links = {
  'Tigard Bowl': 'https://www.tigardbowl.com/open-bowl',
  'Milwaukie Bowl': 'https://www.milwaukiebowl.com/copy-of-legacy',
  'Kingpins Beaverton':
    'https://mykingpins.com/beaverton-bowling/#bowling-pricing',
  'Kingpins Portland':
    'https://mykingpins.com/portland-bowling/#bowling-pricing',
  "Big Al's Vancouver": 'https://www.ilovebigals.com/vancouver/lanes/',
  'Hazel Dell Lanes': 'https://www.hazeldelllanes.com/hours--rates.html',
  SuperPlay: 'https://www.superplayor.com/Play/Bowling',
};
const specials = {
  Sun: [
    '<b>Kingpins (Both):</b> Cosmic Quarter Mania from 8:30 PM - Close ($11 cover, $0.25 games/shoes).',
  ],
  Mon: [
    '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
    '<b>Hazel Dell Lanes:</b> All-you-can-bowl for $12 from 9 PM - Midnight.',
  ],
  Tue: [
    "<b>Big Al's Vancouver:</b> Two Buck Tuesdays ($2 games, shoes, sodas, beers & snacks).",
    '<b>SuperPlay:</b> $25 per hour, all day.',
  ],
  Wed: [
    '<b>SuperPlay:</b> $2 Wednesdays ($2 games, $2 shoes & drink specials).',
    '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
  ],
  Thu: [
    '<b>SuperPlay:</b> $15 per hour, all Day.',
    '<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).',
  ],
  Fri: [
    '<b>Kingpins Portland:</b> Cosmic All You Can Bowl from 10 PM - Midnight for $15 (shoes included).',
    '<b>Kingpins Beaverton:</b> Cosmic All You Can Bowl from 11 PM - 1 AM for $15 (shoes included).',
    '<b>SuperPlay:</b> Cosmic Bowling after 9 PM.',
  ],
  Sat: [
    '<b>Kingpins Portland:</b> Cosmic All You Can Bowl from 10 PM - Midnight for $15 (shoes included).',
    '<b>Kingpins Beaverton:</b> Cosmic All You Can Bowl from 11 PM - 1 AM for $15 (shoes included).',
    '<b>SuperPlay:</b> Cosmic Bowling after 9 PM.',
  ],
};
const structuredSpecials = {
  "Big Al's Vancouver": {
    Tue: { allDay: '$2 games, shoes, drinks & snacks!' },
  },
  SuperPlay: {
    Thu: { allDay: '$15/hr per lane special.' },
    Tue: { allDay: '$25/hr per lane special.' },
    Wed: { allDay: '$2/game & $2/shoes special.' },
  },
  'Hazel Dell Lanes': { Mon: { from: 21, text: 'All-You-Can-Bowl for $12.' } },
  'Kingpins Beaverton': {
    Sun: { from: 20, text: 'Quarter Mania! $11 cover + $0.25 games/shoes.' },
    Mon: { from: 21, text: 'Quarter Mania! $11 cover + $0.25 games/shoes.' },
    Tue: { from: 21, text: 'Quarter Mania! $11 cover + $0.25 games/shoes.' },
    Wed: { from: 21, text: 'Quarter Mania! $11 cover + $0.25 games/shoes.' },
    Thu: { from: 21, text: 'Quarter Mania! $11 cover + $0.25 games/shoes.' },
    Fri: { from: 23, text: 'All You Can Bowl for $15.' },
    Sat: { from: 23, text: 'All You Can Bowl for $15.' },
  },
};

// =================================================================================
// DOM ELEMENTS
// =================================================================================

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
};

// =================================================================================
// STATE
// =================================================================================

let state = {
  contactInfo: {},
};

// =================================================================================
// UI MANAGEMENT
// =================================================================================

function applyTheme(theme) {
  dom.html.setAttribute('data-theme', theme);
  dom.themeToggle.checked = theme === 'dark';
  localStorage.setItem('theme', theme);
  generateFullDayTable();
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme === 'light' ? 'light' : 'dark');
}

function showDriveTimePrompt() {
  if (sessionStorage.getItem('promptDismissed') !== 'true') {
    dom.drivePrompt.classList.add('show');
  }
}

function hideDriveTimePrompt() {
  dom.drivePrompt.classList.remove('show');
}

function shareSettings() {
  const params = new URLSearchParams({
    day: dom.daySelect.value,
    players: dom.numPlayers.value,
    games: dom.numGames.value,
    pace: dom.paceSelect.value,
  });

  // NEW: Add 'exact' param only if the box is checked
  if (dom.timeFilterExact.checked) {
    params.set('exact', 'true');
  }

  const shareUrl = `${window.location.origin}${
    window.location.pathname
  }?${params.toString()}`;

  navigator.clipboard.writeText(shareUrl).then(() => {
    const originalContent = dom.shareButton.innerHTML;
    dom.shareButton.innerHTML = '<span>Copied!</span>';
    setTimeout(() => {
      dom.shareButton.innerHTML = originalContent;
    }, 2000);
  });
}

function populateTimeFilter() {
  dom.timeFilter.innerHTML = '<option value="any">Any Time</option>';
  AppConfig.HOURS.forEach((hour) => {
    const option = document.createElement('option');
    option.value = hour;
    option.textContent = formatHour(hour);
    dom.timeFilter.appendChild(option);
  });
}

function setupTooltipEvents() {
  const tooltipAnchors = document.querySelectorAll(
    '.deal-indicator, .special-icon'
  );
  tooltipAnchors.forEach((anchor) => {
    const tooltipText = anchor.querySelector('.tooltip-text');
    if (!tooltipText) return;
    const showTooltip = () => {
      tooltipText.classList.add('show-tooltip');
      const tooltipRect = tooltipText.getBoundingClientRect();
      const viewportEdgeSafety = 15;
      let finalMarginLeft = -100;
      if (tooltipRect.right > window.innerWidth - viewportEdgeSafety) {
        const overflow =
          tooltipRect.right - (window.innerWidth - viewportEdgeSafety);
        finalMarginLeft -= overflow + 5;
      } else if (tooltipRect.left < viewportEdgeSafety) {
        const overflow = viewportEdgeSafety - tooltipRect.left;
        finalMarginLeft += overflow + 5;
      }
      tooltipText.style.marginLeft = `${finalMarginLeft}px`;
    };
    const hideTooltip = () => {
      tooltipText.classList.remove('show-tooltip');
      tooltipText.style.marginLeft = '-100px';
    };
    anchor.addEventListener('mouseenter', showTooltip);
    anchor.addEventListener('mouseleave', hideTooltip);
  });
}

// =================================================================================
// DATA & API
// =================================================================================

async function getDriveTimes() {
  const origin = dom.startAddress.value;
  if (!origin) {
    alert('Please enter a starting address.');
    return;
  }
  dom.driveTimeButton.disabled = true;
  dom.driveTimeButton.textContent = 'Calculating...';
  try {
    const destinations = Object.values(hoursOfOperation).map((v) => v.address);
    const response = await fetch(AppConfig.NETLIFY_FUNCTION_URL, {
      method: 'POST',
      body: JSON.stringify({ origin, destinations: destinations.join('|') }),
    });
    const data = await response.json();
    if (data.status !== 'OK') {
      throw new Error(
        `Google Maps API Error: ${data.error_message || data.status}`
      );
    }
    const alleyNames = Object.keys(hoursOfOperation);
    data.rows[0].elements.forEach((element, i) => {
      const alleyName = alleyNames[i];
      if (element.status === 'OK') {
        state.contactInfo[alleyName].drive = element.duration.text;
      } else {
        state.contactInfo[alleyName].drive = 'Not found';
      }
    });
    generateFullDayTable();
    hideDriveTimePrompt();
  } catch (error) {
    console.error('Error fetching drive times:', error);
    alert('Could not fetch drive times. Please try again later.');
  } finally {
    dom.driveTimeButton.disabled = false;
    dom.driveTimeButton.textContent = 'Get Drive Times';
  }
}

function initializeContactInfo() {
  state.contactInfo = {
    'Tigard Bowl': { phone: '(503) 639-2001', drive: '- mins' },
    'Kingpins Beaverton': { phone: '(503) 646-1116', drive: '- mins' },
    'Kingpins Portland': { phone: '(503) 788-7889', drive: '- mins' },
    'Milwaukie Bowl': { phone: '(503) 654-7719', drive: '- mins' },
    "Big Al's Vancouver": { phone: '(360) 944-6118', drive: '- mins' },
    'Hazel Dell Lanes': { phone: '(360) 694-8364', drive: '- mins' },
    SuperPlay: { phone: '(503) 292-3523', drive: '- mins' },
  };
}

// =================================================================================
// CALCULATION & FORMATTING
// =================================================================================

function getCurrentPacificTime() {
  const now = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
  );
  const day = AppConfig.DAYS_OF_WEEK[now.getDay()];
  const hour = now.getHours();
  return { day, hour, date: now };
}

function calculateTotalCost(rates, players, games, minutesPerGame) {
  if (!rates.game && !rates.hour) return { cost: Infinity };
  const timeInMinutes = players * games * minutesPerGame;
  const timeInHours = Math.ceil(timeInMinutes / 30) * 0.5;
  const lanesNeeded = Math.ceil(players / 6);
  const hourlyCost = rates.hour
    ? timeInHours * rates.hour * lanesNeeded
    : Infinity;
  const gameCost = rates.game ? players * games * rates.game : Infinity;
  if (hourlyCost < gameCost) {
    const hourString = timeInHours === 1 ? 'hour' : 'hours';
    return {
      cost: hourlyCost,
      details: `(${timeInHours} ${hourString} @ $${rates.hour.toFixed(2)}/hr)`,
    };
  } else {
    const totalGames = players * games;
    const gameString = totalGames === 1 ? 'game' : 'games';
    return {
      cost: gameCost,
      details: `(${totalGames} ${gameString} @ $${rates.game.toFixed(2)}/game)`,
    };
  }
}

function getRatesForAlley(alleyName, day, hour) {
  let gamePrice = null,
    hourPrice = null;
  const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu'].includes(day);
  switch (alleyName) {
    case 'Tigard Bowl':
      if (day === 'Sat') gamePrice = hour < 18 ? 6.5 : 7.0;
      else if (day === 'Fri') gamePrice = hour < 17 ? 6.0 : 7.0;
      else if (isWeekday) gamePrice = hour < 17 ? 6.0 : 6.5;
      else gamePrice = 6.5;
      break;
    case 'Kingpins Beaverton':
    case 'Kingpins Portland':
      hourPrice = (isWeekday || day === 'Fri') && hour < 17 ? 30.0 : 45.0;
      break;
    case 'Milwaukie Bowl':
      if (day === 'Sat') hourPrice = hour < 16 ? 35.0 : 40.0;
      else if (day === 'Sun') hourPrice = 35.0;
      else if (isWeekday) hourPrice = 25.0;
      else if (day === 'Fri') hourPrice = hour < 22 ? 25.0 : 40.0;
      break;
    case "Big Al's Vancouver":
      if (day === 'Tue') gamePrice = 2.0;
      else if (isWeekday) gamePrice = hour < 17 ? 5.0 : 6.0;
      else gamePrice = 8.0;
      break;
    case 'Hazel Dell Lanes':
      if (
        (day === 'Fri' && hour >= 17) ||
        (['Sat', 'Sun'].includes(day) && hour >= 12)
      ) {
        hourPrice = 35.0;
      } else {
        gamePrice = hour < 17 ? 4.5 : 5.5;
        hourPrice = 35.0;
      }
      break;
    case 'SuperPlay':
      if (day === 'Thu') hourPrice = 15.0;
      else if (day === 'Tue') hourPrice = 25.0;
      else if (day === 'Wed') gamePrice = 2.0;
      else if ((day === 'Fri' && hour >= 17) || ['Sat', 'Sun'].includes(day)) {
        hourPrice = 43.0;
      } else {
        hourPrice = 32.0;
      }
      break;
  }
  return { game: gamePrice, hour: hourPrice };
}

function formatHour(hour) {
  if (hour === 12) return '12 PM';
  if (hour > 12) return `${hour - 12} PM`;
  return `${hour} AM`;
}

function getColorForPrice(price, min, max) {
  if (min === max || price === Infinity || price === null) return '';
  const isDarkMode = dom.html.getAttribute('data-theme') === 'dark';
  const lightness = isDarkMode ? 35 : 85;
  const saturation = isDarkMode ? 40 : 70;
  const percentage = (price - min) / (max - min);
  const hue = 120 - percentage * 120;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// =================================================================================
// MAIN APPLICATION LOGIC
// =================================================================================

/**
 * The main function to generate and render the bowling options table.
 */
function generateFullDayTable() {
  // 1. Get user inputs from the DOM
  const day = dom.daySelect.value;
  const numPlayers = parseInt(dom.numPlayers.value) || 1;
  const numGames = parseInt(dom.numGames.value) || 1;
  const pace = dom.paceSelect.value;
  const minutesPerGame = pace === 'normal' ? 10 : 15;
  const selectedTime = dom.timeFilter.value;
  const timeFilterType = dom.timeFilterExact.checked ? 'exact' : 'after';

  // 2. Get current time for "past" calculations
  const {
    date: now,
    day: currentDay,
    hour: currentHour,
  } = getCurrentPacificTime();
  const isToday = day === currentDay;

  // 3. Process all data for the day
  let dayMinTotalCost = Infinity,
    dayMaxTotalCost = -Infinity;
  let dayBestTotalDeal = { cost: Infinity };
  let weekBestTotalDeals = [],
    weekWorstTotalDeals = [];

  // This loop calculates the best/worst deals for the entire week
  AppConfig.DAYS_OF_WEEK.forEach((dayOfWeek) => {
    Object.keys(hoursOfOperation).forEach((alleyName) => {
      AppConfig.HOURS.forEach((hour) => {
        const hoursInfo = hoursOfOperation[alleyName][dayOfWeek];
        if (hour < hoursInfo.o || hour >= hoursInfo.c) return;
        const rates = getRatesForAlley(alleyName, dayOfWeek, hour);
        const { cost } = calculateTotalCost(
          rates,
          numPlayers,
          numGames,
          minutesPerGame
        );
        if (cost === Infinity) return;
        const deal = { cost, alley: alleyName, hour, day: dayOfWeek };
        if (!weekBestTotalDeals[0] || cost < weekBestTotalDeals[0].cost)
          weekBestTotalDeals = [deal];
        else if (cost === weekBestTotalDeals[0].cost)
          weekBestTotalDeals.push(deal);
        if (!weekWorstTotalDeals[0] || cost > weekWorstTotalDeals[0].cost)
          weekWorstTotalDeals = [deal];
        else if (cost === weekWorstTotalDeals[0].cost)
          weekWorstTotalDeals.push(deal);
      });
    });
  });

  // This loop processes data for the selected day for rendering
  const dayData = Object.keys(hoursOfOperation).map((alleyName) => {
    const hours = AppConfig.HOURS.map((hour) => {
      const hoursInfo = hoursOfOperation[alleyName][day];
      const isLeagueTime =
        alleyName === 'Hazel Dell Lanes' &&
        ((day === 'Sun' && hour >= 9 && hour < 12) ||
          (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) &&
            hour >= 17 &&
            hour < 22));
      let effectiveHour = currentHour;
      let driveTimeMins = 0; // Initialize drive time
      const driveInfo = state.contactInfo[alleyName]?.drive;

      if (driveInfo?.includes('mins')) {
        driveTimeMins = parseInt(driveInfo) || 0;
      } // ⭐️ FIX: Only apply the drive time if the selected day is TODAY. // And most importantly, check if the day rolled over after adding drive time.

      if (isToday) {
        const futureTime = now.getTime() + driveTimeMins * 60000;
        const futureDate = new Date(futureTime);
        const futureDay = AppConfig.DAYS_OF_WEEK[futureDate.getDay()];
        if (futureDay === currentDay) {
          // The drive time did not push us into the next calendar day
          effectiveHour = futureDate.getHours();
        } else {
          // Drive time pushed us into the next calendar day (e.g., 11:50 PM + 10 mins = 12:00 AM Mon)
          // Since the selected day is still 'Sun', all remaining hours should be marked as past.
          // However, setting effectiveHour to 24 (or a high number) will mark everything as past.
          // A simpler solution is to just skip the isPast check for rollover hours,
          // but since we want to disable everything, effectiveHour should be very high.
          // Let's simplify: if the day rolled over, every hour in the current day must be past.
          effectiveHour = 24;
        }
      } // The isPast logic is now simpler and handles day rollover correctly:
      const isPast = isToday && hour < effectiveHour;
      const isOpen = hour >= hoursInfo.o && hour < hoursInfo.c && !isLeagueTime;
      let isFiltered = false;
      if (selectedTime !== 'any') {
        if (timeFilterType === 'after') {
          isFiltered = hour < parseInt(selectedTime);
        } else {
          isFiltered = hour != parseInt(selectedTime);
        }
      }
      const cellData = { hour, isOpen, isPast, isLeagueTime, isFiltered };
      if (isOpen) {
        cellData.rates = getRatesForAlley(alleyName, day, hour);
        const costResult = calculateTotalCost(
          cellData.rates,
          numPlayers,
          numGames,
          minutesPerGame
        );
        cellData.cost = costResult.cost;
        if (!isPast && !isFiltered) {
          if (cellData.cost < dayMinTotalCost) dayMinTotalCost = cellData.cost;
          if (cellData.cost > dayMaxTotalCost) dayMaxTotalCost = cellData.cost;
          if (cellData.cost < dayBestTotalDeal.cost) {
            dayBestTotalDeal = { ...costResult, alley: alleyName, hour };
          }
        }
      }
      return cellData;
    });
    return { alleyName, hours };
  });

  const bestWeeklyCost = weekBestTotalDeals[0]?.cost ?? Infinity;
  const worstWeeklyCost = weekWorstTotalDeals[0]?.cost ?? -Infinity;

  // 4. Render all UI components
  if (dayBestTotalDeal.cost !== Infinity) {
    const timeStringPrefix =
      timeFilterType === 'after'
        ? `from <b>${formatHour(parseInt(selectedTime))}</b> onwards`
        : `at <b>${formatHour(parseInt(selectedTime))}</b>`;
    const timeString =
      selectedTime === 'any'
        ? `is <b>${dayBestTotalDeal.alley}</b> at <b>${formatHour(
            dayBestTotalDeal.hour
          )}</b>,`
        : `${timeStringPrefix} is <b>${
            dayBestTotalDeal.alley
          }</b> at <b>${formatHour(dayBestTotalDeal.hour)}</b>,`;

    // NEW: Calculate the per-person cost
    const perPersonCost = (dayBestTotalDeal.cost / numPlayers).toFixed(2);

    // ⭐️ FIX: Determine the precise rate type based on the content of dayBestTotalDeal.details
    let rateType = 'unknown';
    if (dayBestTotalDeal.details.includes('/game')) {
      rateType = 'per-game';
    } else if (dayBestTotalDeal.details.includes('/hour')) {
      rateType = 'hourly';
    }

    // ⭐️ NEW: Construct the new, specific rate sentence
    const rateTypeSentence = `at the <b>${rateType}</b> rate.`;

    // UPDATED: Use the new rateTypeSentence
    // We exclude the old, messy 'dayBestTotalDeal.details' to keep the result clean.
    dom.calculatorResult.innerHTML = `Best deal for ${numPlayers} players, ${numGames} games each ${timeString} costing <b>$${dayBestTotalDeal.cost.toFixed(
      0
    )}</b> total. ($${perPersonCost}/person ${rateTypeSentence})`;
  } else {
    dom.calculatorResult.innerHTML =
      'No available deals found for the selected time.';
  }

  const tableHeaderHTML = `<th></th>${AppConfig.HOURS.map(
    (hour) => `<th>${formatHour(hour)}</th>`
  ).join('')}`;
  const tableBodyHTML = dayData
    .map(({ alleyName, hours }) => {
      const info = state.contactInfo[alleyName];
      const linkTag = links[alleyName]
        ? `<a href="${links[alleyName]}" target="_blank" rel="noopener noreferrer">${alleyName}</a>`
        : alleyName;
      const alleyInfoHTML = `<div class="alley-name">${linkTag}</div><div class="alley-info">${info.phone}</div><div class="alley-info">${info.drive}</div>`;
      const hourCellsHTML = hours
        .map((cell) => {
          if (cell.isFiltered) return `<td class="filtered-cell"></td>`;
          if (cell.isLeagueTime)
            return `<td class="closed-cell">Unavailable<br>(League Play)</td>`;
          if (!cell.isOpen) return `<td class="closed-cell">Closed</td>`;
          const cellClass = cell.isPast
            ? 'price-cell past-time-cell'
            : 'price-cell'; // ⭐️ REVISED FIX: Only calculate heatmap color for non-past, non-filtered cells.
          let backgroundColor = '';
          if (!cell.isPast && !cell.isFiltered && cell.cost !== Infinity) {
            backgroundColor = getColorForPrice(
              cell.cost,
              dayMinTotalCost,
              dayMaxTotalCost
            );
          }
          const priceHTML =
            (cell.rates?.hour
              ? `<div class="hour-price">$${cell.rates.hour.toFixed(
                  2
                )} /hr</div>`
              : '') +
            (cell.rates?.game
              ? `<div class="game-price">$${cell.rates.game.toFixed(
                  2
                )} /gm</div>`
              : '');
          const hoursInfo = hoursOfOperation[alleyName][day];
          const halfHourNote =
            hoursInfo.m && cell.hour === hoursInfo.o
              ? `<span class="half-hour-note">Opens at ${
                  hoursInfo.o > 12 ? hoursInfo.o - 12 : hoursInfo.o
                }:${hoursInfo.m}</span>`
              : '';
          let dealIndicatorHTML = '';
          if (cell.cost < Infinity) {
            if (cell.cost === bestWeeklyCost)
              dealIndicatorHTML = `<div class="deal-indicator week">‼️<span class="tooltip-text">Best deal of the week!!</span></div>`;
            else if (cell.cost === worstWeeklyCost)
              dealIndicatorHTML = `<div class="deal-indicator week">🚫<span class="tooltip-text">Worst deal of the week.</span></div>`;
            else if (cell.cost === dayBestTotalDeal.cost)
              dealIndicatorHTML = `<div class="deal-indicator day">⭐<span class="tooltip-text">Best rate of today!</span></div>`;
          }
          const specialInfo = structuredSpecials[alleyName]?.[day];
          const specialHTML =
            specialInfo &&
            (specialInfo.allDay ||
              (specialInfo.from && cell.hour >= specialInfo.from))
              ? `<div class="special-icon">💲<span class="tooltip-text">${
                  specialInfo.allDay || specialInfo.text
                }</span></div>`
              : '';
          return `<td class="${cellClass}" style="background-color: ${backgroundColor};">${dealIndicatorHTML}${specialHTML}${
            priceHTML || '&nbsp;'
          }${halfHourNote}</td>`;
        })
        .join('');
      return `<tr><td>${alleyInfoHTML}</td>${hourCellsHTML}</tr>`;
    })
    .join('');
  dom.results.innerHTML = `<table><thead><tr>${tableHeaderHTML}</tr></thead><tbody>${tableBodyHTML}</tbody></table>`;
  const daySpecials = specials[day];
  dom.specialsContainer.innerHTML =
    `<h2>Specials for Today</h2>` +
    (daySpecials?.length > 0
      ? `<ul>${daySpecials.map((s) => `<li>${s}</li>`).join('')}</ul>`
      : `<p>No specific specials are listed for this day.</p>`);
  setupTooltipEvents();
}

// =================================================================================
// INITIALIZATION
// =================================================================================
function init() {
  initializeContactInfo();
  populateTimeFilter();

  const urlParams = new URLSearchParams(window.location.search);
  const dayFromUrl = urlParams.get('day');

  if (dayFromUrl) {
    dom.daySelect.value = dayFromUrl;
  } else {
    const { day } = getCurrentPacificTime();
    dom.daySelect.value = day;
  }

  const playersFromUrl = urlParams.get('players');
  const gamesFromUrl = urlParams.get('games'); // This line was incorrect before
  const paceFromUrl = urlParams.get('pace');
  const exactFromUrl = urlParams.get('exact');

  if (playersFromUrl) dom.numPlayers.value = playersFromUrl;
  if (gamesFromUrl) dom.numGames.value = gamesFromUrl;
  if (paceFromUrl) dom.paceSelect.value = paceFromUrl;
  if (exactFromUrl === 'true') dom.timeFilterExact.checked = true;

  // Add all event listeners programmatically
  dom.daySelect.addEventListener('change', generateFullDayTable);
  dom.timeFilter.addEventListener('change', generateFullDayTable);
  dom.timeFilterExact.addEventListener('change', generateFullDayTable);
  dom.numPlayers.addEventListener('change', generateFullDayTable);
  dom.numGames.addEventListener('change', generateFullDayTable);
  dom.paceSelect.addEventListener('change', generateFullDayTable);
  dom.driveTimeButton.addEventListener('click', getDriveTimes);
  dom.shareButton.addEventListener('click', shareSettings);
  dom.themeToggle.addEventListener('change', () =>
    applyTheme(dom.themeToggle.checked ? 'dark' : 'light')
  );
  dom.closePromptBtn.addEventListener('click', () => {
    hideDriveTimePrompt();
    sessionStorage.setItem('promptDismissed', 'true');
  });

  initializeTheme();
  showDriveTimePrompt();
}

// Start the application
init();
