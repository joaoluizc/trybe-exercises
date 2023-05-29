const pessoa = {
  firstName: 'Meu',
  lastName: 'querido'
}

function Header() {
  return (
    <h1>
      Olá, {`${pessoa.firstName} ${pessoa.lastName}`}!
    </h1>
  )
}

export default Header;