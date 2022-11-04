const addEmployee = require("../src/addEmployee");
const {
  company: { employees },
} = require("../src/data");

describe("Testa a função addEmployee", () => {
  it('Testa se não passar nenhum parâmetro, retorna um erro com a messagem "This fuction need a param object type to define where will insert the employee"', () => {
    expect(() => addEmployee()).toThrow(
      /^This fuction need a param object type to define where will insert the employee/
    );
  });
  it('Testa se não passar um objeto como alvo, retorna um erro com a messagem "This fuction need a param object type to define where will insert the employee"', () => {
    expect(() => addEmployee("Não é um objeto")).toThrow(
      /^This fuction need a param object type to define where will insert the employee/
    );
  });
  it('Testa se não passar um first name ou last name, retorna um erro com a messagem "Missing params to continue - verify if first name and last name was add"', () => {
    expect(() => addEmployee(employees)).toThrow(
      /^Missing params to continue - verify if first name and last name was add/
    );
    expect(() => addEmployee(employees, "first name")).toThrow(
      /^Missing params to continue - verify if first name and last name was add/
    );
  });
  it('Testa se não passar first name ou last name como String, retorna um erro com a messagem "Missing params to continue - verify if first name and last name was filled with words"', () => {
    expect(() =>
      addEmployee(employees, { name: "Não é uma string" }, "Sobrenome")
    ).toThrow(
      /^Missing params to continue - verify if first name and last name was filled with words/
    );
    expect(() =>
      addEmployee(employees, "first name", { name: "Não é uma string" })
    ).toThrow(
      /^Missing params to continue - verify if first name and last name was filled with words/
    );
  });
  it('Testa se não passar first name ou last name com mais de duas letras, retorna um erro com a messagem "Missing params to continue - verify if first name and last name was filled correctly"', () => {
    expect(() => addEmployee(employees, "12", "Sobrenome")).toThrow(
      /^Missing params to continue - verify if first name and last name was filled correctly/
    );
    expect(() => addEmployee(employees, "first name", "12")).toThrow(
      /^Missing params to continue - verify if first name and last name was filled correctly/
    );
  });
  it('Testa se passado os parâmetros corretamente, retorna a mensagem que foi adicionado com sucesso.',()=>{
    expect(addEmployee(employees,'Gabriel','Silper')).toBe('Funcionário Gabriel Silper adicionado com sucesso!!!')
  })
});
