function countHours(year, holidays) {
  let counter = 0;
  holidays.forEach((day) => {
    const date = new Date(`${day}/${year}`).getDay()

      if(date === 0 || date === 6) return
        counter += 2; 
   
  })
  return counter
}
