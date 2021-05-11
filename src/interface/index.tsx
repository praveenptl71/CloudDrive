export interface IDirectory{
    readonly id:number,
    title: string,
    description?: string,
    color: string,
    createAt: string
}

export interface IDrawerMenu{
    readonly id:number,
    title: string,
    route: string,
    icon: string
}

export interface IFile{
    readonly id:number,
    title: string,
    description?: string,
    createAt: string
}