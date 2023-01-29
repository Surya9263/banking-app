# **Banking app**

## Run locally

### *Step-1*
```
npm install
```

### *Step-2*

### you can run following commands in the terminal -
**To create an account**
- ```node index.js CREATE `{your name}` `{unique bank account code}` ```

**To deposit amount into your account**
- ```node index.js DEPOSIT `{your bank account code}` `{amount to deposit}` ```

**To withdraw amount from your account**
- ```node index.js WITHDRAW `{your bank account code}` `{amount to withdraw}` ```

**To check your account balance**
- ```node index.js BALANCE `{your bank account code}` ```

## *Sample I/O*

- node index.js CREATE ACC001 KELP -> Account ACC001 created successfully

- node index.js DEPOSIT ACC001 10000 -> Deposited ₹10000 into ACC001's account

- node index.js WITHDRAW ACC001 1000 -> Withdrew ₹1000 from ACC001's account

- node index.js BALANCE ACC001 -> KELP's account balance: ₹12000