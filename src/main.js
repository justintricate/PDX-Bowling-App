import './style.css';

// --- DATA SECTION ---

const hoursOfOperation = {
    "Tigard Bowl":       { address: "11660 SW Pacific Hwy, Tigard, OR 97223", Sun: {o:9,c:24}, Mon: {o:9,c:24}, Tue: {o:9,c:24}, Wed: {o:9,c:24}, Thu: {o:9,c:24}, Fri: {o:9,c:25}, Sat: {o:9,c:25} },
    "Kingpins Beaverton": { address: "2725 SW Cedar Hills Blvd, Beaverton, OR 97005", Sun: {o:10,c:23,m:30}, Mon: {o:11,c:23,m:30}, Tue: {o:10,c:23,m:30}, Wed: {o:11,c:23,m:30}, Thu: {o:10,c:24}, Fri: {o:11,c:25}, Sat: {o:9,c:25} },
    "Kingpins Portland":  { address: "3550 SE 92nd Ave, Portland, OR 97266", Sun: {o:9,c:23,m:30}, Mon: {o:11,c:24}, Tue: {o:11,c:23,m:30}, Wed: {o:11,c:23,m:30}, Thu: {o:12,c:23,m:30}, Fri: {o:10,c:24}, Sat: {o:9,c:24} },
    "Milwaukie Bowl":     { address: "3056 SE Harrison St, Milwaukie, OR 97222", Sun: {o:9,c:22}, Mon: {o:9,c:23}, Tue: {o:9,c:23}, Wed: {o:9,c:23}, Thu: {o:9,c:23}, Fri: {o:9,c:24}, Sat: {o:9,c:24} },
    "Big Al's Vancouver": { address: "16615 SE 18th St, Vancouver, WA 98683", Sun: {o:9,m:30,c:22}, Mon: {o:15,c:22}, Tue: {o:15,c:22}, Wed: {o:15,c:22}, Thu: {o:15,c:22}, Fri: {o:15,c:24}, Sat: {o:12,c:24} },
    "Hazel Dell Lanes":   { address: "6300 NE Hwy 99, Vancouver, WA 98665", Sun: {o:9,c:22}, Mon: {o:11,m:30,c:23}, Tue: {o:10,m:30,c:23}, Wed: {o:9,c:23}, Thu: {o:9,m:30,c:23}, Fri: {o:9,m:30,c:24}, Sat: {o:9,c:24} },
    "SuperPlay":          { address: "9300 SW Beaverton Hillsdale Hwy, Beaverton, OR 97005", Sun: {o:12,c:22}, Mon: {o:15,c:23}, Tue: {o:15,c:23}, Wed: {o:15,c:23}, Thu: {o:12,c:24}, Fri: {o:12,c:24}, Sat: {o:12,c:24} }
};

const links = {
    "Tigard Bowl": "https://www.tigardbowl.com/open-bowl",
    "Milwaukie Bowl": "https://www.milwaukiebowl.com/copy-of-legacy",
    "Kingpins Beaverton": "https://mykingpins.com/beaverton-bowling/#bowling-pricing",
    "Kingpins Portland": "https://mykingpins.com/portland-bowling/#bowling-pricing",
    "Big Al's Vancouver": "https://www.ilovebigals.com/vancouver/lanes/",
    "Hazel Dell Lanes": "https://www.hazeldelllanes.com/hours--rates.html",
    "SuperPlay": "https://www.superplayor.com/Play/Bowling"
};

let contactInfo = {};

const specials = {
    Sun: ["<b>Kingpins (Both):</b> Cosmic Quarter Mania from 8:30 PM - Close ($11 cover, $0.25 games/shoes)."],
    Mon: ["<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes).", "<b>Hazel Dell Lanes:</b> All-you-can-bowl for $12 from 9 PM - Midnight."],
    Tue: ["<b>Big Al's Vancouver:</b> Two Buck Tuesdays ($2 games, shoes, sodas, beers & snacks).", "<b>SuperPlay:</b> $25 per hour, all day."],
    Wed: ["<b>SuperPlay:</b> $2 Wednesdays ($2 games, $2 shoes & drink specials).", "<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes)."],
    Thu: ["<b>SuperPlay:</b> $15 per hour, all Day.", "<b>Kingpins (Both):</b> Quarter Mania from 9 PM - Close ($11 cover, $0.25 games/shoes)."],
    Fri: ["<b>Kingpins Portland:</b> Cosmic All You Can Bowl from 10 PM - Midnight for $15 (shoes included).", "<b>Kingpins Beaverton:</b> Cosmic All You Can Bowl from 11 PM - 1 AM for $15 (shoes included).", "<b>SuperPlay:</b> Cosmic Bowling after 9 PM."],
    Sat: ["<b>Kingpins Portland:</b> Cosmic All You Can Bowl from 10 PM - Midnight for $15 (shoes included).", "<b>Kingpins Beaverton:</b> Cosmic All You Can Bowl from 11 PM - 1 AM for $15 (shoes included).", "<b>SuperPlay:</b> Cosmic Bowling after 9 PM."],
};

const structuredSpecials = {
    "Big Al's Vancouver": { Tue: { allDay: "$2 games, shoes, drinks & snacks!" } },
    "SuperPlay": { Thu: { allDay: "$15/hr per lane special." }, Tue: { allDay: "$25/hr per lane special." }, Wed: { allDay: "$2/game & $2/shoes special." } },
    "Hazel Dell Lanes": { Mon: { from: 21, text: "All-You-Can-Bowl for $12." } },
    "Kingpins Beaverton": { Sun: { from: 20, text: "Quarter Mania! $11 cover + $0.25 games/shoes." }, Mon: { from: 21, text: "Quarter Mania! $11 cover + $0.25 games/shoes." }, Tue: { from: 21, text: "Quarter Mania! $11 cover + $0.25 games/shoes." }, Wed: { from: 21, text: "Quarter Mania! $11 cover + $0.25 games/shoes." }, Thu: { from: 21, text: "Quarter Mania! $11 cover + $0.25 games/shoes." }, Fri: { from: 23, text: "All You Can Bowl for $15." }, Sat: { from: 23, text: "All You Can Bowl for $15." } }
};


// --- HELPER FUNCTIONS ---

function getCurrentPacificTime() {
    // Gets the current date/time localized to Pacific Time (America/Los_Angeles)
    const now = new Date(
        new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
    );

    const currentDayIndex = now.getDay(); 
    const currentDayShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][currentDayIndex];
    
    const currentHour = now.getHours();

    return { 
        day: currentDayShort, 
        hour: currentHour 
    };
}

async function getDriveTimes() {
    const button = document.getElementById('driveTimeButton');
    const origin = document.getElementById('startAddress').value;
    if (!origin) {
        alert("Please enter a starting address.");
        return;
    }

    button.disabled = true;
    button.textContent = "Calculating...";

    const destinations = Object.values(hoursOfOperation).map(v => v.address);

    const functionUrl = '/.netlify/functions/getDriveTimes';

    try {
        const response = await fetch(functionUrl, {
            method: 'POST',
            body: JSON.stringify({
                origin: origin,
                destinations: destinations.join('|')
            })
        });
        const data = await response.json();

        if (data.status !== 'OK') {
            throw new Error(`Google Maps API Error: ${data.error_message || data.status}`);
        }

        const alleyNames = Object.keys(hoursOfOperation);
        data.rows[0].elements.forEach((element, index) => {
            const alleyName = alleyNames[index];
            if (element.status === "OK") {
                contactInfo[alleyName] = {
                    ...contactInfo[alleyName],
                    drive: element.duration.text
                };
            } else {
                contactInfo[alleyName] = { ...contactInfo[alleyName], drive: "Not found" };
            }
        });
        generateFullDayTable();

    } catch (error) {
        console.error("Error fetching drive times:", error);
        alert("Could not fetch drive times. Please try again later.");
    } finally {
        button.disabled = false;
        button.textContent = "Get Drive Times";
    }
}

function initializeContactInfo() {
    contactInfo = {
        "Tigard Bowl":       { phone: "(503) 639-2001", drive: "- mins" },
        "Kingpins Beaverton": { phone: "(503) 646-1116", drive: "- mins" },
        "Kingpins Portland":  { phone: "(503) 788-7889", drive: "- mins" },
        "Milwaukie Bowl":     { phone: "(503) 654-7719", drive: "- mins" },
        "Big Al's Vancouver": { phone: "(360) 944-6118", drive: "- mins" },
        "Hazel Dell Lanes":   { phone: "(360) 694-8364", drive: "- mins" },
        "SuperPlay":          { phone: "(503) 292-3523", drive: "- mins" }
    };
}

function getRatesForAlley(alleyName, day, hour) {
    let gamePrice = null, hourPrice = null;
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    switch (alleyName) {
        case "Tigard Bowl":
            if (weekDays.includes(day) && day !== 'Fri') { gamePrice = (hour < 17) ? 6.00 : 6.50; }
            else if (day === 'Fri') { gamePrice = (hour < 17) ? 6.00 : 7.00; }
            else if (day === 'Sat') { gamePrice = (hour < 18) ? 6.50 : 7.00; }
            else { gamePrice = 6.50; }
            break;
        case "Kingpins Beaverton": case "Kingpins Portland":
            hourPrice = (weekDays.includes(day) && hour < 17) ? 30.00 : 45.00;
            break;
        case "Milwaukie Bowl":
            if (day === 'Sat') { hourPrice = (hour < 16) ? 35.00 : 40.00; } 
            else if (day === 'Sun') { hourPrice = 35.00; } 
            else if (['Mon', 'Tue', 'Wed', 'Thu'].includes(day)) { hourPrice = 25.00; } 
            else if (day === 'Fri') { hourPrice = (hour < 22) ? 25.00 : 40.00; }
            break;
        case "Big Al's Vancouver":
            if (day === 'Tue') { gamePrice = 2.00; }
            else if (['Sat', 'Sun'].includes(day) || (day === 'Fri' && hour >= 17)) { gamePrice = 8.00; }
            else if (weekDays.includes(day)) { gamePrice = (hour < 17) ? 5.00 : 6.00; }
            break;
        case "Hazel Dell Lanes":
            if ((day === 'Fri' && hour >= 17) || (day === 'Sat' && hour >= 12) || (day === 'Sun' && hour >= 12)) { hourPrice = 35.00; }
            else { gamePrice = (hour < 17) ? 4.50 : 5.50; hourPrice = 35.00; }
            break;
        case "SuperPlay":
            if (day === 'Thu') { hourPrice = 15.00; }
            else if (day === 'Tue') { hourPrice = 25.00; }
            else if (day === 'Wed') { gamePrice = 2.00; }
            else if ((day === 'Fri' && hour >= 17) || ['Sat', 'Sun'].includes(day)) { hourPrice = 43.00; }
            else { hourPrice = 32.00; }
            break;
    }
    return { game: gamePrice, hour: hourPrice };
}

function calculateTotalCost(rates, players, games, minutesPerGame) {
    if (!rates.game && !rates.hour) return { cost: Infinity };
    const timeInMinutes = players * games * minutesPerGame;
    const timeInHours = Math.ceil(timeInMinutes / 30) * 0.5;
    const lanesNeeded = Math.ceil(players / 6);
    const hourlyCost = rates.hour ? timeInHours * rates.hour * lanesNeeded : Infinity;
    const gameCost = rates.game ? players * games * rates.game : Infinity;

    if (hourlyCost < gameCost) {
        const hourString = timeInHours === 1 ? 'hour' : 'hours';
        return { cost: hourlyCost, details: `(${timeInHours} ${hourString} @ $${rates.hour.toFixed(2)}/hr)` };
    } else {
        const totalGames = players * games;
        const gameString = totalGames === 1 ? 'game' : 'games';
        return { cost: gameCost, details: `(${totalGames} ${gameString} @ $${rates.game.toFixed(2)}/game)` };
    }
}

function formatHour(hour) {
    if (hour === 12) return '12 PM';
    if (hour > 12) return (hour - 12) + ' PM';
    return hour + ' AM';
}

function getColorForPrice(price, min, max) {
    if (min === max || price === null) return '';
    const percentage = (price - min) / (max - min);
    const hue = 120 - (percentage * 120);
    return `hsl(${hue}, 70%, 85%)`;
}

function populateTimeFilter() {
    const timeFilter = document.getElementById('timeFilter');
    timeFilter.innerHTML = '<option value="any">Any Time</option>';
    const hours = Array.from({length: 15}, (_, i) => i + 9);
    hours.forEach(hour => {
        const option = document.createElement('option');
        option.value = hour;
        option.textContent = formatHour(hour);
        timeFilter.appendChild(option);
    });
}

function generateFullDayTable() {
    const day = document.getElementById('day').value;
    const heatmapView = document.querySelector('input[name="heatmapView"]:checked').value;
    const numPlayers = parseInt(document.getElementById('numPlayers').value) || 1;
    const numGames = parseInt(document.getElementById('numGames').value) || 1;
    const pace = document.querySelector('input[name="paceOfPlay"]:checked').value;
    const minutesPerGame = (pace === 'normal') ? 10 : 15;
    const selectedTime = document.getElementById('timeFilter').value;

    const resultsDiv = document.getElementById('results');
    const specialsDiv = document.getElementById('specials-container');
    const calculatorResultDiv = document.getElementById('calculator-result');
    const hours = Array.from({length: 15}, (_, i) => i + 9);

    // --- NEW TIME CHECK SETUP ---
    const currentTime = getCurrentPacificTime();
    const currentDay = currentTime.day;
    const currentHour = currentTime.hour;
    const isToday = (day === currentDay);
    // ----------------------------

    let dayBestRate = { price: Infinity, alley: null, hour: null };
    let dayMaxRate = -Infinity;
    let dayBestTotalDeal = { cost: Infinity, alley: null, hour: null, details: '' };
    let dealFound = false;
    
    let weekBestTotalDeal = { cost: Infinity, alley: null, hour: null, day: null };
    let weekWorstTotalDeal = { cost: -Infinity, alley: null, hour: null, day: null };
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (const dayOfWeek of daysOfWeek) {
        for (const alleyName in hoursOfOperation) {
            for (const hour of hours) {
                const hoursInfo = hoursOfOperation[alleyName][dayOfWeek];
                const isLeagueTime = (
                    alleyName === 'Hazel Dell Lanes' &&
                    ((dayOfWeek === 'Sun' && hour >= 9 && hour < 12) || (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(dayOfWeek) && hour >= 17 && hour < 22))
                );
                if (hour >= hoursInfo.o && hour < hoursInfo.c && !isLeagueTime) {
                    const rates = getRatesForAlley(alleyName, dayOfWeek, hour);
                    const costResult = calculateTotalCost(rates, numPlayers, numGames, minutesPerGame);
                    if(costResult.cost !== Infinity) {
                        if (costResult.cost < weekBestTotalDeal.cost) {
                            weekBestTotalDeal = { cost: costResult.cost, alley: alleyName, hour: hour, day: dayOfWeek };
                        }
                        if (costResult.cost > weekWorstTotalDeal.cost) {
                            weekWorstTotalDeal = { cost: costResult.cost, alley: alleyName, hour: hour, day: dayOfWeek };
                        }
                    }
                }
            }
        }
    }

    for (const alleyName in hoursOfOperation) {
        for (const hour of hours) {
            if (selectedTime !== 'any' && hour != selectedTime) continue;
            const hoursInfo = hoursOfOperation[alleyName][day];
            const isLeagueTime = (
                alleyName === 'Hazel Dell Lanes' &&
                ((day === 'Sun' && hour >= 9 && hour < 12) || (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) && hour >= 17 && hour < 22))
            );

            if (hour >= hoursInfo.o && hour < hoursInfo.c && !isLeagueTime) {
                const rates = getRatesForAlley(alleyName, day, hour);
                const currentRate = rates[heatmapView];
                if (currentRate !== null) {
                    if (currentRate < dayBestRate.price) dayBestRate = { price: currentRate, alley: alleyName, hour: hour };
                    if (currentRate > dayMaxRate) dayMaxRate = currentRate;
                }

                const costResult = calculateTotalCost(rates, numPlayers, numGames, minutesPerGame);
                if (costResult.cost < dayBestTotalDeal.cost) {
                    dayBestTotalDeal = { cost: costResult.cost, alley: alleyName, hour: hour, details: costResult.details };
                    dealFound = true;
                }
            }
        }
    }
    
    if (dealFound) {
        const timeString = selectedTime === 'any' ? `is <b>${dayBestTotalDeal.alley}</b> at <b>${formatHour(dayBestTotalDeal.hour)}</b>,` : `at <b>${formatHour(parseInt(selectedTime))}</b> is <b>${dayBestTotalDeal.alley}</b>,`;
        calculatorResultDiv.innerHTML = `Best deal for ${numPlayers} players, ${numGames} games each ${timeString} costing <b>$${dayBestTotalDeal.cost.toFixed(0)}</b> ${dayBestTotalDeal.details}`;
    } else {
        calculatorResultDiv.innerHTML = `No available deals found for the selected time.`;
    }

    let tableHTML = `<table><thead><tr><th></th>`;
    hours.forEach(hour => tableHTML += `<th>${formatHour(hour)}</th>`);
    tableHTML += `</tr></thead><tbody>`;

    for (const alleyName in hoursOfOperation) {
        const link = links[alleyName];
        const info = contactInfo[alleyName];
        const linkTag = link ? `<a href="${link}" target="_blank" rel="noopener noreferrer">${alleyName}</a>` : alleyName;
        
        let alleyCellContent = `<div class="alley-name">${linkTag}</div>`;
        if (info) {
            alleyCellContent += `<div class="alley-info">${info.phone}</div>`;
            alleyCellContent += `<div class="alley-info">${info.drive}</div>`;
        }
        tableHTML += `<tr><td>${alleyCellContent}</td>`;
        
        const hoursInfo = hoursOfOperation[alleyName][day];
        for (const hour of hours) {
            const isLeagueTime = (
                alleyName === 'Hazel Dell Lanes' &&
                ((day === 'Sun' && hour >= 9 && hour < 12) || (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) && hour >= 17 && hour < 22))
            );

            if (isLeagueTime) {
                tableHTML += `<td class="closed-cell">Unavailable<br>(League Play)</td>`;
            } else if (hour >= hoursInfo.o && hour < hoursInfo.c) {
                
                // --- APPLY PAST-TIME CHECK ---
                let cellClass = 'price-cell';
                
                // Check if the time block has passed
                if (isToday && hour < currentHour) {
                    cellClass += ' past-time-cell';
                }
                // -----------------------------
                
                const currentRates = getRatesForAlley(alleyName, day, hour);
                const priceForColoring = currentRates[heatmapView];
                const backgroundColor = getColorForPrice(priceForColoring, dayBestRate.price, dayMaxRate);
                
                let halfHourNote = '';
                if (hoursInfo.m && hour === hoursInfo.o) {
                    halfHourNote = `<span class="half-hour-note">Opens at ${hoursInfo.o > 12 ? hoursInfo.o-12 : hoursInfo.o}:${hoursInfo.m}</span>`;
                }
                
                let priceContent = '';
                if (currentRates.hour) { priceContent += `<div class="hour-price">$${currentRates.hour.toFixed(2)} /hr</div>`; }
                if (currentRates.game) { priceContent += `<div class="game-price">$${currentRates.game.toFixed(2)} /gm</div>`; }

                let specialContent = '';
                const specialInfo = structuredSpecials[alleyName]?.[day];
                if (specialInfo) {
                    if (specialInfo.allDay || (specialInfo.from && hour >= specialInfo.from)) {
                        specialContent = `<div class="special-icon">💲<span class="tooltip-text">${specialInfo.allDay || specialInfo.text}</span></div>`;
                    }
                }
                
                let dealIndicatorContent = '';
                if (alleyName === weekBestTotalDeal.alley && hour === weekBestTotalDeal.hour && day === weekBestTotalDeal.day) {
                    dealIndicatorContent = `<div class="deal-indicator week">‼️<span class="tooltip-text">Best deal of the week!</span></div>`;
                } else if (alleyName === weekWorstTotalDeal.alley && hour === weekWorstTotalDeal.hour && day === weekWorstTotalDeal.day) {
                    dealIndicatorContent = `<div class="deal-indicator week">🚫<span class="tooltip-text">Worst deal of the week</span></div>`;
                } else if (alleyName === dayBestRate.alley && hour === dayBestRate.hour) {
                    dealIndicatorContent = `<div class="deal-indicator day">⭐<span class="tooltip-text">Best deal of the day</span></div>`;
                }


                tableHTML += `<td class="${cellClass}" style="background-color: ${backgroundColor};">
                                    ${dealIndicatorContent}
                                    ${specialContent}
                                    ${priceContent || '&nbsp;'}
                                    ${halfHourNote}
                                </td>`;
            } else {
                tableHTML += `<td class="closed-cell">Closed</td>`;
            }
        }
        tableHTML += `</tr>`;
    }
    tableHTML += `</tbody></table>`;
    resultsDiv.innerHTML = tableHTML;

    const daySpecials = specials[day];
    let specialsHTML = `<h2>Specials for Today</h2>`;
    if (daySpecials && daySpecials.length > 0) {
        specialsHTML += `<ul>`;
        daySpecials.forEach(special => specialsHTML += `<li>${special}</li>`);
        specialsHTML += `</ul>`;
    } else {
        specialsHTML += `<p>No specific specials are listed for this day.</p>`;
    }
    specialsDiv.innerHTML = specialsHTML;
}


// --- FINAL INITIALIZATION BLOCK (Optimized and Correct) ---

// 1. Run mandatory setup functions
initializeContactInfo();
populateTimeFilter(); 

// 2. Get the current day from the helper function
const currentTime = getCurrentPacificTime();
const currentDayShort = currentTime.day;

// 3. Set the Day dropdown to the current Pacific Day
const daySelect = document.getElementById('day');
if (daySelect) {
    daySelect.value = currentDayShort;
}

// 4. Run the main table generation immediately
generateFullDayTable();


// 5. Expose Functions to Global Scope
window.generateFullDayTable = generateFullDayTable;
window.getDriveTimes = getDriveTimes;