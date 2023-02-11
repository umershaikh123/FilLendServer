# FilLendServer

Deployed url : https://fil-lend-server-9bd92va2h-umershaikh123.vercel.app/



## Post request 
Should update add the incoming data from the front end to the data array

```
app.post("/", (req, res) => {
   dataArray.push(req.body);
});

```

## Get request 
Should get all the data stored in the data array back to the front end

```
app.get("/", (req, res) => {
  res.json(dataArray);
});

```

## Get data on the front end (Next.js)

```
export async function getServerSideProps(context) {
  const res = await fetch("https://fil-lend-server-9bd92va2h-umershaikh123.vercel.app", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

```

## Data

```
 const data = {
    Address: 0xBCfE6E676230714f4DeaC58D4ad8fb1A3d4cD6B7,
    poolType: "Junior Pool",
    Amount: 100 ,             /*   "FIL tokens"
    LoanDuration: 12,              "months"
    TotalReturn:  150,             "FIL token"
    InterestRate: 30,              "percent"
    RepaymentDate: date,           "08/2/2024"
    LendingDate: currentdate,      "08/2/2023"   
    Tx: txn1.hash,                 transaction hash    */
  };

```


## store data on the front end

```
  axios
    .post("https://fil-lend-server-9bd92va2h-umershaikh123.vercel.app", data)
    .then((response) => {
      console.log(response.body);
    })
    .catch((error) => {
      console.log(error);
    });

```
