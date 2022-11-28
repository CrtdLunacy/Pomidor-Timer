const days = [
  {
     fullweekday: "Понедельник",
     weekday: "Пн",
     time: 0,
     pauseTime: 0
  },  {
     fullweekday: "Вторник",
     weekday: "Вт",
     time: 0,
     pauseTime: 0
  },  {
     fullweekday: "Среда",
     weekday: "Ср",
     time: 0,
     pauseTime: 0
  },  {
     fullweekday: "Четверг",
     weekday: "Чт",
     time: 0,
     pauseTime: 0
  },  {
     fullweekday: "Пятница",
     weekday: "Пт",
     time: 0,
     pauseTime: 0
  },  {
     fullweekday: "Суббота",
     weekday: "Сб",
     time: 0,
     pauseTime: 0
  },  {
     fullweekday: "Воскресенье",
     weekday: "Вс",
     time: 0,
     pauseTime: 0
  }];

export const sortedDays = () => {
    const today = new Date();
    const goBackDays = 21;
    const daysSorted = [];

    for(let i = 0; i < goBackDays; i++){
        let newDate = new Date(today.setDate(today.getDate() - 1));
        daysSorted.push(days[newDate.getDay()]);
    }
    return daysSorted.reverse();
}

