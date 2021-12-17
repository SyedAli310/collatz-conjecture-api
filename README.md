# Collatz Conjecture API

An API to calculate collatz conjecture series for different numbers.

## Run Locally

Clone the project

```bash
  git clone https://github.com/SyedAli310/collatz-conjecture-api.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Deployed Links

#### API       - `https://collatz-visual.herokuapp.com`      [🔗](https://collatz-visual.herokuapp.com)
#### Front-end - `https://collatz-conjecture-js.netlify.app`        [🔗](https://collatz-conjecture-js.netlify.app)


## Security

- `helmet`
- `cors`
- `xss-clean`
- `express-rate-limit`

## API Reference/Endpoints

#### Calculate Collatz Conjecture for a number

```https
  POST /api/collatz
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `number` | `number` | <**Required**> Number to caclucate Collatz conjecture |

---
