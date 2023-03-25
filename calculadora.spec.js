describe('TESTE CALCULADORA', function(){


it("Somas validadas", function(){
    expect(soma(1,2)).toBe(3);
    expect(soma(9,9)).toBe(18);


});


it("Somas invalidas", function(){
    expect(soma(1,2)).not.toBe(5);
    expect(soma(9,9)).not.toBe(11);


});
it("Subtracao validadas", function(){
    expect(subtracao(1,2)).toBe(1);
    expect(subtracao(9,9)).toBe(0);


});


it("Subtracao invalidas", function(){
    expect(subtracao(1,2)).not.toBe(5);
    expect(subtracao(9,9)).not.toBe(11);


});

it("Multiplicacao validadas", function(){
    expect(soma(1,2)).toBe(2);
    expect(soma(9,9)).toBe(81);


});


it("Multiplicacao invalidas", function(){
    expect(multiplicacao(1,2)).not.toBe(5);
    expect(multiplicacao(9,9)).not.toBe(11);


});

it("Divisao validadas", function(){
    expect(soma(8,2)).toBe(4);
    expect(soma(10,5)).toBe(2);


});


it("Divisao invalidas", function(){
    expect(soma(1,2)).not.toBe(5);
    expect(soma(9,9)).not.toBe(11);


});
});
