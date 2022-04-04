const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day) {
      case 'monday':
        return 3;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 5;
        break
      case 'saturday':
        return 10;
        break
      case 'sunday':
        return 12;
        break;
      default:
        return 'You must write a day';
        break; 
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  }
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 8;
  }
  const calculateSleepDebt = () => {
    const actualSleepHours  = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const diffHours = getActualSleepHours() - getIdealSleepHours();
    if(actualSleepHours === idealSleepHours) {
      console.log('Perfect hours of sleep, good job!');
    }else if(actualSleepHours > idealSleepHours) {
      console.log('Too much sleep, you slept ' + (actualSleepHours - idealSleepHours) + ' more hours. Keep it real');
    } else if(actualSleepHours < idealSleepHours) {
      console.log('Mate, is mandatory to sleep more if you wanna live happy. You slept ' + (idealSleepHours - actualSleepHours) + ' less hours than optimal.');
    }
  }