//Ruim
class CartaoCredito {

  private Codigo: String;
  private Expiracao: Date;
  protected CustoMensal: number;

  constructor(codigo: String, expiracao: Date, custoMensal: number) {
      this.Codigo = codigo;
      this.Expiracao = expiracao;
      this.CustoMensal = custoMensal;
  }

  obterCodigo(): String {
      return this.Codigo;
  }

  obterExpiracao(): Date {
      return this.Expiracao;
  }

  descontoMensal(): number {
      return this.CustoMensal * 0.02;
  }

  descontoMensalSilver(): number {
      return this.CustoMensal * 0.03;
  }

  descontoMensalGold(): number {
      return this.CustoMensal * 0.05;
  }

}


//Bom
class CartaoCredito {

    private Codigo: String;
    private Expiracao: Date;
    protected CustoMensal: number;

    constructor(codigo: String, expiracao: Date, custoMensal: number) {
        this.Codigo = codigo;
        this.Expiracao = expiracao;
        this.CustoMensal = custoMensal;
    }

    obterCodigo(): String {
        return this.Codigo;
    }

    obterExpiracao(): Date {
        return this.Expiracao;
    }

    descontoMensal(): number {
        return this.CustoMensal * 0.02;
    }

  }

  class CartaoCreditoGold extends CartaoCredito {

    descontoMensal(): number {
      return this.CustoMensal * 0.05;
    }

  }


  class CartaoCreditoSilver extends CartaoCredito {

    descontoMensal(): number {
        return this.CustoMensal * 0.03;
    }

  }