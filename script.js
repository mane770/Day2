function toggleText(event)
{
  var text = event.textContent || event.innerText;
  if(text == 'Hello')
  {
    event.innerHTML = 'Goodbye';
  }
  else
  {
    event.innerHTML = 'Hello';
  }
}
