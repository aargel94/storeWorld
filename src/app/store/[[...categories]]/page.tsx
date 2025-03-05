interface CategoryProps{
    params: Promise<{
        categories:string[]
    }>
    searchParams: Promise<{
        id: string
    }>
}

export default async function Category(props:CategoryProps){

    const { categories } = (await props.params)
    const { id } = (await props.searchParams)

    return(
        <h1>categoria dinamica: {categories}</h1>
    )
}