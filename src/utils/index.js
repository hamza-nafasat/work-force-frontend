const getColorByPercentage = (percentage) => {
    let color
  if(percentage <= 15){
    color = 'rgba(225, 52, 30, 1)'
  }else if (percentage > 15 && percentage <= 30) {
    color = 'rgba(241, 130, 38, 1)'
  } else {
    color = '#43ff64d9'
  }
  return color;
}

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)]
  }
  return color;
}


export {getColorByPercentage, getRandomColor}