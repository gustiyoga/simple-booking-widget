# Simple Booking Widget

## Documentation & Installation Guide
simple booking widget based on vuejs, you can try [here](https://gustiyoga.github.io/simple-booking-widget/dist).

### Installation
1. `make .env file based on .env.example and replace the API_KEY`
2. `npm install`
3. `npm run dev` to start developing + hot module replacement (HMR)
4. `npm run prod` to build
5. `npm run lint` to check lint
6. `npm run lint:fix` to fix lint error

### How To Embed
you can see an example of an embedded widget [here](https://gustiyoga.github.io/simple-booking-widget/example).
1. `run npm run prod`
2. `include JS and CSS files to HTML, make sure the JS script place on the bottom of the body`
3. `add div with id="simple-booking-widget" as the root of vuejs`