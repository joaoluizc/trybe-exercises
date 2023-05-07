const newEmployees = () => {
  const employees = {
    id1: makeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: makeEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: makeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const makeEmail = (name) => {
  const nameArr = name.toLowerCase().split(' ');
  let email = nameArr[0];
  nameArr.forEach((namePart, index) => {
    if (index == 0) return
    email = email.concat('_', namePart);
  })
  email = email.concat('', '@trybe.com');
  return email;
}

console.log(newEmployees());