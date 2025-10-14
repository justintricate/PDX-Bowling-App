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
  'Kingpins Portland': {
    Sun: { from: 20, text: 'Quarter Mania! $11 cover + $0.25 games/shoes.' },
    Mon: { from: 21, text: 'Quarter Mania! $11 cover + $0.25 games/shoes.' },
    Tue: { from: 21, text: 'Quarter Mania! $11 cover + $0.25 games/shoes.' },
    Wed: { from: 21, text: 'Quarter Mania! $11 cover + $0.25 games/shoes.' },
    Thu: { from: 21, text: 'Quarter Mania! $11 cover + $0.25 games/shoes.' },
    Fri: { from: 22, text: 'All You Can Bowl for $15.' },
    Sat: { from: 22, text: 'All You Can Bowl for $15.' },
  },
};

// =================================================================================
// DOM ELEMENTS & STATE
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

let state = {
  contactInfo: {},
};

// =================================================================================
// UI & EVENT LISTENERS
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
  document
    .querySelectorAll('.deal-indicator, .special-icon')
    .forEach((anchor) => {
      const tooltipText = anchor.querySelector('.tooltip-text');
      if (!tooltipText) return;
      anchor.addEventListener('mouseenter', () =>
        tooltipText.classList.add('show-tooltip')
      );
      anchor.addEventListener('mouseleave', () =>
        tooltipText.classList.remove('show-tooltip')
      );
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
      details: `(${timeInHours} ${hourString} @ ${formatPrice(
        rates.hour,
        'hr'
      )})`,
    };
  } else {
    const totalGames = players * games;
    const gameString = totalGames === 1 ? 'game' : 'games';
    return {
      cost: gameCost,
      details: `(${totalGames} ${gameString} @ ${formatPrice(
        rates.game,
        'gm'
      )})`,
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

function formatPrice(price, unit) {
  if (price === null) return '';
  const value = price % 1 === 0 ? price : price.toFixed(2);
  return `$${value} /${unit}`;
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

function generateFullDayTable() {
  const day = dom.daySelect.value;
  const numPlayers = parseInt(dom.numPlayers.value) || 1;
  const numGames = parseInt(dom.numGames.value) || 1;
  const pace = dom.paceSelect.value;
  const minutesPerGame = pace === 'normal' ? 10 : 15;
  const selectedTime = dom.timeFilter.value;
  const timeFilterType = dom.timeFilterExact.checked ? 'exact' : 'after';

  const {
    date: now,
    day: currentDay,
    hour: currentHour,
  } = getCurrentPacificTime();
  const isToday = day === currentDay;

  let weekBestTotalDeals = [];
  let weekWorstTotalDeals = [];

  AppConfig.DAYS_OF_WEEK.forEach((dayOfWeek) => {
    Object.keys(hoursOfOperation).forEach((alleyName) => {
      AppConfig.HOURS.forEach((hour) => {
        const hoursInfo = hoursOfOperation[alleyName][dayOfWeek];
        if (hour < hoursInfo.o || hour >= hoursInfo.c) return;
        const isLeagueTime =
          alleyName === 'Hazel Dell Lanes' &&
          ((dayOfWeek === 'Sun' && hour >= 9 && hour < 12) ||
            (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(dayOfWeek) &&
              hour >= 17 &&
              hour < 22));
        if (isLeagueTime) return;

        const rates = getRatesForAlley(alleyName, dayOfWeek, hour);
        const { cost } = calculateTotalCost(
          rates,
          numPlayers,
          numGames,
          minutesPerGame
        );
        if (cost === Infinity) return;

        const deal = { cost, alley: alleyName, hour, day: dayOfWeek };
        if (
          weekBestTotalDeals.length === 0 ||
          cost < weekBestTotalDeals[0].cost
        ) {
          weekBestTotalDeals = [deal];
        } else if (cost === weekBestTotalDeals[0].cost) {
          weekBestTotalDeals.push(deal);
        }
        if (
          weekWorstTotalDeals.length === 0 ||
          cost > weekWorstTotalDeals[0].cost
        ) {
          weekWorstTotalDeals = [deal];
        } else if (cost === weekWorstTotalDeals[0].cost) {
          weekWorstTotalDeals.push(deal);
        }
      });
    });
  });

  let dayMinTotalCost = Infinity;
  let dayMaxTotalCost = -Infinity;
  let dayBestTotalDeal = { cost: Infinity };

  const dayData = Object.keys(hoursOfOperation).map((alleyName) => {
    const hours = AppConfig.HOURS.map((hour) => {
      const hoursInfo = hoursOfOperation[alleyName][day];
      const isLeagueTime =
        alleyName === 'Hazel Dell Lanes' &&
        ((day === 'Sun' && hour >= 9 && hour < 12) ||
          (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) &&
            hour >= 17 &&
            hour < 22));
      let effectiveHour = isToday ? currentHour : -1;
      const isPast = isToday && hour < effectiveHour;
      const isOpen = hour >= hoursInfo.o && hour < hoursInfo.c && !isLeagueTime;
      const isFiltered =
        selectedTime !== 'any' &&
        (timeFilterType === 'exact'
          ? hour != parseInt(selectedTime)
          : hour < parseInt(selectedTime));
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
        if (!isPast && !isFiltered && cellData.cost < Infinity) {
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

  if (dayBestTotalDeal.cost !== Infinity) {
    const timeString =
      selectedTime === 'any'
        ? `is <b>${dayBestTotalDeal.alley}</b> at <b>${formatHour(
            dayBestTotalDeal.hour
          )}</b>,`
        : `at <b>${formatHour(parseInt(selectedTime))}</b> is <b>${
            dayBestTotalDeal.alley
          }</b>,`;
    let rateType = 'unknown';
    if (dayBestTotalDeal.details.includes('/gm')) {
      rateType = 'per-game';
    } else if (dayBestTotalDeal.details.includes('/hr')) {
      rateType = 'hourly';
    }
    const perPersonCost = (dayBestTotalDeal.cost / numPlayers).toFixed(2);
    dom.calculatorResult.innerHTML = `Best deal for ${numPlayers} players, ${numGames} games each ${timeString} costing <b>$${dayBestTotalDeal.cost.toFixed(
      0
    )}</b> total. ($${perPersonCost}/person at the <b>${rateType}</b> rate.)`;
  } else {
    dom.calculatorResult.innerHTML =
      'No available deals found for the selected time.';
  }

  const tableHeaderHTML = `<th></th>${AppConfig.HOURS.map(
    (hour) => `<th data-hour="${hour}">${formatHour(hour)}</th>`
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
          let cellClass = 'price-cell';
          if (cell.isFiltered) cellClass += ' filtered-cell';
          if (cell.isPast) cellClass += ' past-time-cell';

          if (cell.isLeagueTime)
            return `<td data-label="${formatHour(
              cell.hour
            )}" class="closed-cell">Unavailable<br>(League Play)</td>`;
          if (!cell.isOpen)
            return `<td data-label="${formatHour(
              cell.hour
            )}" class="closed-cell">Closed</td>`;

          let backgroundColor = '';
          if (!cell.isPast && !cell.isFiltered && cell.cost !== Infinity) {
            backgroundColor = getColorForPrice(
              cell.cost,
              dayMinTotalCost,
              dayMaxTotalCost
            );
          }

          const priceHTML = `<div class="hour-price">${formatPrice(
            cell.rates?.hour,
            'hr'
          )}</div><div class="game-price">${formatPrice(
            cell.rates?.game,
            'gm'
          )}</div>`;
          const hoursInfo = hoursOfOperation[alleyName][day];
          const halfHourNote =
            hoursInfo.m && cell.hour === hoursInfo.o
              ? `<span class="half-hour-note">Opens at ${
                  hoursInfo.o > 12 ? hoursInfo.o - 12 : hoursInfo.o
                }:${hoursInfo.m}</span>`
              : '';

          let dealIndicatorHTML = '';
          const isWeekBest = weekBestTotalDeals.some(
            (deal) =>
              deal.alley === alleyName &&
              deal.hour === cell.hour &&
              deal.day === day
          );
          const isWeekWorst = weekWorstTotalDeals.some(
            (deal) =>
              deal.alley === alleyName &&
              deal.hour === cell.hour &&
              deal.day === day
          );
          const isDayBest =
            !cell.isFiltered &&
            !cell.isPast &&
            cell.cost === dayBestTotalDeal.cost;

          if (isWeekBest) {
            dealIndicatorHTML = `<div class="deal-indicator week">‼️<span class="tooltip-text">Best deal of the week!</span></div>`;
          } else if (isWeekWorst) {
            dealIndicatorHTML = `<div class="deal-indicator week">🚫<span class="tooltip-text">Worst deal of the week.</span></div>`;
          } else if (isDayBest) {
            dealIndicatorHTML = `<div class="deal-indicator day">⭐<span class="tooltip-text">Best deal for this day!</span></div>`;
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

          return `<td data-label="${formatHour(
            cell.hour
          )}" class="${cellClass}" style="background-color: ${backgroundColor};">${dealIndicatorHTML}${specialHTML}${
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
  const gamesFromUrl = urlParams.get('games');
  const paceFromUrl = urlParams.get('pace');
  const exactFromUrl = urlParams.get('exact');

  if (playersFromUrl) dom.numPlayers.value = playersFromUrl;
  if (gamesFromUrl) dom.numGames.value = gamesFromUrl;
  if (paceFromUrl) dom.paceSelect.value = paceFromUrl;
  if (exactFromUrl === 'true') dom.timeFilterExact.checked = true;

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

init();
