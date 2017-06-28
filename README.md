# Golden Hour

### Host with Now
[Demo](http://goldenhour.2017.reactriot.com)

### Tech Used
* [next.js](https://github.com/zeit/next.js/)
* [styled-components](https://github.com/styled-components/styled-components)
* [react](https://github.com/facebook/react)
* [google-map-react](https://github.com/istarkov/google-map-react)
* [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
* [dotenv](https://github.com/motdotla/dotenv)
* [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components)
* [500px API](https://500px.com/)
* [Google Maps API](https://developers.google.com/maps/)

### To Run in development
```
git clone https://github.com/jsfeb26/golden-hour.git
cd reactriot2017-goldenhour
yarn install
```

Add a `.env` file based on of `sample.env`

`yarn run dev`
Visit [http://localhost:3000](http://localhost:3000)


### To deploy using Now
Deploy is using [now secrets](https://zeit.co/docs/features/env-and-secrets#secrets). You'll need to add a secret variables using `now secret`

```
now add consumer_key_500px your_api_key_here
```

Once you add all of your now secrets then you can begin the deploy process

```
yarn run build
yarn run deploy
```
