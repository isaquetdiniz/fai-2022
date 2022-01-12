//Ruim
class InserirUsuarioController1 extends BaseController {

    private emailService: SendGridService; // <- classe concreta
    constructor (emailService: SendGridService) { // <- classe concreta
      this.emailService = emailService;
    }

    protected enviarEmail (): void {

      // envia mail
      const email = new Email(...)
      this.emailService.sendMail(email);
    }
  }

//Bom

interface IEmailService {
    enviarEmail() : void;
  }

  class InserirUsuarioController extends BaseController {

    private emailService: IEmailService; // <- abstração
    constructor (emailService: IEmailService) { // <- abstração
      this.emailService = emailService;
    }

    protected enviarEmail (): void {
      // envia mail
      const email = new Email(...)
      this.emailService.sendMail(email);
    }
  }

  class TwilioEmailService implements IEmailService {
    enviarEmail(): void {
        console.log('Enviei o email')
    }
  }

  class SendGridEmailService implements IEmailService {
    enviarEmail(): void {
        console.log('Enviei o email - SendGrid')
    }
  }

const usuarioController = new InserirUsuarioController(new TwilioEmailService())
const usuarioController2 = new InserirUsuarioController(new SendGridEmailService())