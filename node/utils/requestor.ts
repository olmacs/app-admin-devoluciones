import { method } from '@vtex/api'

const requestMethod = (
    data: string[],
    methodFn: FunctionRequestorMethod,
    ctx: Context
) => {
    const req: Partial<FunctionRequestorMethod> = {}

    data.forEach(
        (key) =>
        (req[key as HttpMethods] = async function handler() {
            return methodFn[key as HttpMethods](ctx)
        })
    )

    return req
}

export const requestor = async (
    ctx: Context,
    methods: MethodsRequestor
): Promise<void | null> => {
    try {
        const {
            vtex: {
                route: {
                    params: { method: fn },
                },
            },
        } = ctx

        ctx.set('cache-control', 'no-cache')
        ctx.set('Content-Type', 'application/json')
        ctx.set('Accept', 'application/json')
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Cache-Control', 'private')
        ctx.set('Content-Type', 'multipart/form-data')
        const methodFn = methods[fn as string] as FunctionRequestorMethod
        const data = Object.keys(methodFn)

        return data.length > 0
            ? method(requestMethod(data, methodFn, ctx))(ctx, async () => { })
            : (methods[fn as string] as FunctionRequestor)(ctx)
    } catch (e) {
        console.error(e)
        return null
    }
}