 describe("TESTE DE MAIORIDADE", function(){
      it("Validação maior idade", function(){
expect(maioridade(20)).toBe("Maior Idade");
    });


    describe("TESTE DE MENOR IDADE", function(){
        it("Validação menor idade", function(){
  expect(maioridade(10)).toBe("Menor Idade");
      });
 });