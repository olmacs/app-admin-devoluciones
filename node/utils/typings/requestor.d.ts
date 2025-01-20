type HttpMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

type FunctionRequestor = (ctx: Context) => void

type FunctionRequestorMethod = {
    [key in HttpMethods]: FunctionRequestor
}

type MethodsRequestor = {
    [key: string]: Partial<FunctionRequestorMethod> | FunctionRequestor
}
