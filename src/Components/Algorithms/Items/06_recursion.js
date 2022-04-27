const recursion = () => {
  const factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1));
  console.log("Факториал 5 равен ", factorial(5));

  const fib = (n) => (n < 3 ? n - 1 : fib(n - 1) + fib(n - 2));
  console.log("10-е число Фибоначчи - ", fib(10));
};

export default recursion;
