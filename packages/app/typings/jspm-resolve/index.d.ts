declare module '@jspm/resolve' {
  type Env = {
    browser?: boolean
    node?: boolean
    production?: boolean
    dev?: boolean
    'react-native'?: boolean
    electron?: boolean
    deno?: boolean
    default?: boolean
  }
  type Options = {
    cache?: object
    env?: Env
    cjsResolve?: boolean
  }

  type Resolve = {
    resolved: string
    format: string
  }
  export default function(
    specifier: string,
    parentPath?: string,
    options?: Options,
  ): Promise<Resolve>
}
