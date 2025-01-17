# Responsive Dynamic Javascript Calendar

This project implements a responsive calendar that dynamically displays the current month and the next month. It allows event management with clickable links and special styling for specific event types, such as "Exec Meetings."

## Features

- Dynamically displays the current and next month.
- Supports adding events with descriptions and clickable links.
- Highlights specific types of events (e.g., "Exec Meetings") with distinct colors.
- Fully responsive and scales to different screen sizes.

---

## Setup and Usage

### Prerequisites

1. A basic understanding of HTML, CSS, and JavaScript.
2. A static hosting platform, such as GitHub Pages.

### Steps to Set Up

1. **Clone the Repository**

   Clone or download the repository to your local machine.

2. **HTML File**

   Ensure you have an HTML structure that includes:

   ```html
   <div id="calendars"></div>
   <script src="calendar.js"></script>
   ```

3. **JavaScript**

   Include the `calendar.js` script that contains the logic to:
   - Generate the calendar dynamically.
   - Style events based on their type.
   - Add clickable links for events with associated URLs.

4. **CSS File**

   Include the `calendar.css` file for styling. Ensure it includes rules for:
   - `.calendar` and `.event-date` for basic calendar styling.
   - `.exec-meeting-date` for special styling of "Exec Meetings."

5. **Event Data**

   Update the `events` object in the JavaScript file with your desired events. Example:

   ```javascript
   const events = {
     '2025-01-13': { description: 'Kick-off Event', link: 'https://example.com/signup' },
     '2025-01-15': { description: 'Exec Meeting' },
     '2025-01-20': { description: 'Meetup', link: 'https://example.com/meetup' },
     // Add more events as needed
   };
   ```

---

## Customization

### Styling

To modify colors or fonts, edit the `calendar.css` file. For example:

- Change the background color of special events:
  ```css
  .exec-meeting-date {
    background-color: #ffdd99;
    border: 1px solid #ffa500;
  }
  ```

### Adding Events

1. Open the `calendar.js` file.
2. Add new events to the `events` object, following the format:
   ```javascript
   'YYYY-MM-DD': { description: 'Event Name', link: 'Optional URL' },
   ```

---

## Deployment

### Using GitHub Pages

1. Push the repository to GitHub.
2. Go to the repository settings.
3. Enable GitHub Pages and set the branch to `main` or `docs`.
4. The calendar will be accessible via the GitHub Pages URL.

---

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Demo

[Live Demo](#) (Replace `#` with your hosted URL once deployed).

