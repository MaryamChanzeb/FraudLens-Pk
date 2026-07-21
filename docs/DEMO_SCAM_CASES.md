# Demo Scam Cases

Use these examples to test FraudLens PK during development and final demo.

## 1. OTP Fraud

```text
Dear customer, your account will be blocked today. Please send your OTP to verify your account immediately.
```

Expected result:

- Risk: High
- Type: OTP Fraud
- Red flags: OTP request, urgent language, unknown sender

## 2. Fake Job Scam

```text
Congratulations! You are selected for a remote job with 80,000 PKR salary. Pay 2,500 registration fee to confirm your seat.
```

Expected result:

- Risk: High
- Type: Fake Job
- Red flags: Registration fee, unrealistic salary, pressure to pay

## 3. Parcel Scam

```text
Your parcel is stuck at customs. Pay Rs. 350 through this link to release your package today: http://pk-parcel-fee.example.com
```

Expected result:

- Risk: High
- Type: Parcel Scam / Phishing
- Red flags: Payment demand, suspicious link, urgency

## 4. Prize Scam

```text
Mubarak ho! Aap 50,000 PKR jeet chukay hain. Apna CNIC aur bank details bhejein claim karne ke liye.
```

Expected result:

- Risk: High
- Type: Prize Scam
- Red flags: CNIC request, bank details request, too-good-to-be-true offer

## 5. Investment Scam

```text
Send 5,000 PKR now and receive double amount in 24 hours. Limited time offer.
```

Expected result:

- Risk: High
- Type: Investment Scam
- Red flags: Guaranteed profit, time pressure, payment demand

## 6. Safe Message Example

```text
Your class has been rescheduled to 10 AM tomorrow. Please check the LMS for updated details.
```

Expected result:

- Risk: Low
- Type: Safe / Unknown
- Red flags: None or low

## Demo Tip

In final presentation, use 2 examples only:

1. Fake job scam
2. OTP fraud

This keeps the demo short and clear.
