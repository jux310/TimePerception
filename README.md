# Time Perception Calculator

An interactive web application that explores how our perception of time changes as we age, using two different mathematical models to visualize this phenomenon.

![Time Perception Calculator](https://i.imgur.com/YourScreenshot.png)

## Features

- 📊 Interactive graph showing time perception changes with age
- 🔄 Two different mathematical models:
  - Proportional to Real Time (logarithmic model)
  - Proportional to Subjective Time (square root model)
- 🌐 Bilingual support (English/Spanish)
- 📱 Fully responsive design
- 🎨 Beautiful UI with smooth animations and transitions

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Recharts for data visualization
- Lucide React for icons
- Vite for build tooling

## Mathematical Models

### Proportional to Real Time
This model suggests that our perception of time is logarithmic, meaning each subsequent year feels shorter than the last. The formula used is:

```
S1 = K1 * ln(age)
where K1 = 80 / ln(80)
```

### Proportional to Subjective Time
This model proposes that our perception of time is related to the ratio of a time period to our total age. The formula used is:

```
S2 = sqrt(2 * K2 * age)
where K2 = 80 * 80 / (2 * 80)
```

## Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/jux310/TimePerception.git

# Navigate to project directory
cd TimePerception

# Install dependencies
npm install

# Start development server
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Time perception research: [Wikipedia - Time Perception: Changes with Age](https://en.wikipedia.org/wiki/Time_perception#Changes_with_age)
- Icons: [Lucide React](https://lucide.dev)