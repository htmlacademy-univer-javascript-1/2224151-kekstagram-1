function randomNumbers(min, max)
{
  if(min >=0 && min<=max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else
  {
    return 'range!!!';
  }
}


function lenghtString(string , maxLenght)
{
  return string.lenght <=maxLenght;
}

randomNumbers(5,12);
lenghtString('TestWord',10);
