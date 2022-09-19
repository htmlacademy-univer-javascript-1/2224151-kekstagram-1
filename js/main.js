function randomNumbers(min, max)
{
  if(min >=0 && min<=max)
  {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else
  console.log('В переданном диапазоне нет подходящих чисел')
}


function lenghtString(string , maxLenght)
{
  if( string.length > maxLenght)
  return false
  else
  return true
}

