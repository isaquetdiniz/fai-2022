//Bom
abstract class Pessoa {
    Nome: string;
    Sobrenome: string;

    /*
    * @returns Retorna a Saudação da Pessoa
    */
    abstract DizerSaudacao(): string;
}

class Brasileiro extends Pessoa {
    DizerSaudacao(): string {
        return "Bom dia! Eu sou o " + this.Nome + " " + this.Sobrenome;
    }
}
class Americano extends Pessoa {
    DizerSaudacao(): string {
        return "Good Morning! I'm " + this.Nome + " " + this.Sobrenome;
    }
}
class Italiano extends Pessoa {
    DizerSaudacao(): string {
        return "Buongiorno! Sono " + this.Nome + " " + this.Sobrenome;
    }
}

class EscritaSaudacao {
    EscreverSaudacao(pessoa: Italiano): string {
        return pessoa.DizerSaudacao();
    }
}