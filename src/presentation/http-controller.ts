import { Usecase } from "refactor/domain/interfaces/usecase"

type requestHttp = {
    body: any
}

type responseHttp = {
    status: number,
    message: string
}

export class HttpController {
    private readonly usecase: Usecase
    constructor(usecase: Usecase) {
        this.usecase = usecase
    }

    handle(request: requestHttp): responseHttp {
        const response = this.usecase.execute(request)

        return {
            status: 200,
            message: response
        }
    }
}