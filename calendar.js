//Made by Zeph Suderman 
//
//Made for the UMChess to promote the events that will be hosted (found at umchess.ca)

//Example Dates
const events = {
    '2025-01-13': { description: 'Kick-off Event 4:00 - 6:00pm', link: null },
    '2025-01-15': { description: 'Exec Meeting', link: null },
    '2025-01-20': { description: 'Meetup 4:00 - 6:00pm', link: null },
    '2025-02-21': { description: 'Reading Week', link: null }
};

function createCalendar(year, month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calendarsDiv = document.getElementById('calendars');
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    const calendarDiv = document.createElement('div');
    calendarDiv.classList.add('calendar');
    
    // Calendar header
    const header = document.createElement('div');
    header.classList.add('calendar-header');
    header.textContent = `${months[month]} ${year}`;
    calendarDiv.appendChild(header);
    
    // Days of week
    const daysDiv = document.createElement('div');
    daysDiv.classList.add('calendar-days');
    daysOfWeek.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        daysDiv.appendChild(dayDiv);
    });
    calendarDiv.appendChild(daysDiv);
    
    // Dates
    const datesDiv = document.createElement('div');
    datesDiv.classList.add('calendar-dates');
    
    // Empty divs for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('empty');
        datesDiv.appendChild(emptyDiv);
    }
    
    // Dates with events
    for (let day = 1; day <= daysInMonth; day++) {
        const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dateDiv = document.createElement('div');
    
        if (events[date]) {
            if (events[date].description.includes('Exec Meeting')) {
                dateDiv.classList.add('exec-meeting-date'); // Special class for Exec Meeting
            } else {
                dateDiv.classList.add('event-date');
            }

            const dateSpan = document.createElement('span');
            dateSpan.classList.add('date');
            dateSpan.textContent = day;

            const eventSpan = document.createElement('span');
            eventSpan.classList.add('event');
            eventSpan.textContent = events[date].description;

            if (events[date].link) {
                const link = document.createElement('a');
                link.href = events[date].link;
                link.target = '_blank'; // Opens the link in a new tab
                link.classList.add('event-link');
            
                link.appendChild(dateSpan);
                link.appendChild(eventSpan);
                dateDiv.appendChild(link);
            } else {
                // Append the date and event description without a link
                dateDiv.appendChild(dateSpan);
                dateDiv.appendChild(eventSpan);
            }
        } else {
            const dateSpan = document.createElement('span');
            dateSpan.classList.add('date');
            dateSpan.textContent = day;
            dateDiv.appendChild(dateSpan);
        }
        
        datesDiv.appendChild(dateDiv);
    }
    
    calendarDiv.appendChild(datesDiv);
    calendarsDiv.appendChild(calendarDiv);
}

function displayCurrentAndNextMonth() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    // Clear any existing calendars
    const calendarsDiv = document.getElementById('calendars');
    calendarsDiv.innerHTML = '';

    // Display the current month
    createCalendar(currentYear, currentMonth);

    // Display the next month
    const nextMonth = (currentMonth + 1) % 12;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    createCalendar(nextYear, nextMonth);
}

// Call the function to display the calendars
displayCurrentAndNextMonth();