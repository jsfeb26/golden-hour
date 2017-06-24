# Golden Hour

### Host with Now
[View](https://reactriot2017-goldenhour-rgbbfiqsju.now.sh)

### Tech Used
* [next.js](https://github.com/zeit/next.js/)
* [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
* [react](https://github.com/facebook/react)
* [500px API](https://500px.com/)

### To Run in development
```
git clone https://github.com/Hackbit/reactriot2017-goldenhour.git
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
