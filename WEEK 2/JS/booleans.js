function verifyPassword(inputPassword,  storedHashedPassword) {
    if (bcrypt.compare(inputPassword,storedHashedPassword)==true) {
      return true;
    } else {
      return false;
    }
  }
  function checkBalance(balance, withdrawalAmount) {
    if (balance >= withdrawalAmount) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkDailyLimit(withdrawalAmount, dailyLimit) {
    if (withdrawalAmount <= dailyLimit) {
      return true;
    } else {
      
      
        return false;
    }
  }
  function processWithdrawal(user, inputPassword, inputMfaCode, withdrawalAmount) {
if (verifyPassword(inputPassword, user.hashedPassword) == false) {
      return "Transaction Failed: Incorrect password.";
    }
      if (verifyMFA(inputMfaCode, user.correctMfaCode) == false) {
      return "Transaction Failed: MFA failed.";
    }
    if(checkBalance(user.balance, withdrawalAmount) == false) {
      return "Transaction Failed: Insufficient balance.";
    }    
           if(checkDailyLimit(withdrawalAmount, user.dailyLimit) == false) {
      return "Transaction Failed: Amount exceeds daily limit.";
    }
    user.balance -= withdrawalAmount;
    return "Transaction Successful! New Balance: " + user.balance;
  }
  /* 
  1: Why is it important to store passwords in a hashed format? 

Password hashing significantly enhances the security of stored passwords. 
Even if an attacker gains access to the hashed passwords, 
it is extremely difficult to reverse-engineer the original passwords, 
especially if strong, modern hashing algorithms like the bcrypt algorithm 

2: What security advantage does this provide over plain text passwords?

Hashing allows passwords to be stored in a 
format that can't be reversed at any reasonable 
amount of time or cost for a hacker.

3:Why is it necessary to check the account balance before allowing a withdrawal?

To compare the money in the bank vs the money being withdrawn
4:What risks are involved if this step is skipped?
Ovewithdrawing

5:What purpose does the daily transaction limit serve? 

Limits the amount of money a fraudster can withdraw, also prevents major mistakes and controls financial institution distress

6: How does it help in preventing fraudulent or excessive withdrawals?

Limits the amount a fraudster can withdraw hence minimizing the damages

7:If you were to add extra features, such as fraud detection (e.g., detecting
abnormal withdrawal patterns), how would you go about doing this? What
additional data would you track to detect fraud?

To detect fraud, I would create a system that can can track transaction amounts, frequency, 
time, location, device information, and account status, using machine 
learning models or anomaly detection algorithms to identify unusual patterns,
 while real-time monitoring and alerts, enhanced user authentication such as 2 step verification, 
and a feedback loop for continuous model improvement help prevent fraudulent 
activities and reduce false positives.
  */ 
