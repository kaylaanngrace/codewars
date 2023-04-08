function strCount(str, letter){  

    let numberOfTimes = 0;
  
    for (let i = 0; i < str.length; i++)
    {
        // checking letter in string
        if (str.charAt(i) == letter)
        numberOfTimes++;
    }
    return numberOfTimes