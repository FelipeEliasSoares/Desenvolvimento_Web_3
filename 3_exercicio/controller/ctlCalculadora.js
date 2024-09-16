const calculadora = (req, res) =>
  (async () => {
    const { numero1, numero2, operacao } = req.body;

    let resultado;

    if (numero1 != null && numero2 != null && operacao != null) {
      if (operacao == "+") resultado = numero1 + numero2;
      else if (operacao == "-") resultado = numero1 - numero2;
      else if (operacao == "*") resultado = numero1 * numero2;
      else if (operacao == "/") resultado = numero1 / numero2;
    } else resultado = "Esta faltando parametros";

    res.json({
      resultado: `O resultado foi da operacao ${operacao} ${resultado}`,
    });
  })();

module.exports = {
  calculadora,
};
