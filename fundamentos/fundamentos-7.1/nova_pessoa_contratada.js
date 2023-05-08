const newEmployees = () => {
  const employees = {
    id1: makeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: makeEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: makeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const makeEmail = (name) => {
  const emailName = name.toLowerCase().split(' ').join('_');
  email = emailName.concat('', '@trybe.com');
  return { nomeCompleto: name, email };
}

console.log(newEmployees());