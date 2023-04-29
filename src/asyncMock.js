const products = [

    {
        id:'1',
        name: 'guia indonesia',
        price: 20,
        category: 'guia',
        img: 'https://m.media-amazon.com/images/I/A1TRwfnJQWL.jpg',
        stock: 20,
        description: 'Guia para viaje a indonesia',
    },
    {
        id:'2',
        name: 'guia tailandia',
        price: 20,
        category: 'guia',
        img: 'https://lonelyplanetes.cdnstatics2.com/sites/default/files/publications-image/portada_tailandia-8_andy-symington_201807310112.jpg',
        stock: 20,
        description: 'Guia para viaje a tailandia',
    },
    {
        id:'3',
        name: 'guia vietnam',
        price: 20,
        category: 'guia',
        img: 'https://m.media-amazon.com/images/I/A1Hu4qaW0BL.jpg',
        stock: 20,
        description: 'Guia para viaje a vietnam',
    },


    {
        id:'4',
        name: 'template social media',
        price: 10,
        category: 'template',
        img: 'https://graphicsfamily.com/wp-content/uploads/edd/2022/08/Digital-Company-Instagram-Post-and-Social-Media-Design-Template-999x999.png',
        stock: 20,
        description: 'Template para social media',
    },

    {
        id:'5',
        name: 'Print tipografico',
        price: 15,
        category: 'print',
        img: 'https://images.unsplash.com/photo-1543487945-139a97f387d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&q=80',
        stock: 20,
        description: 'Print tipográfico',
    }





    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
} 


export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = () => {
    return new Promise( resolve => {
        setTimeout(()=>{
            const productsCategory = products.filter(prod.category === categoryId);
            resolve(productsCategory);
        }, 100)
    })
}