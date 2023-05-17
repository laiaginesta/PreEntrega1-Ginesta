
const products = [    
    {
        id: '1',
        name: "Alexander Ant",
        price: 260,
        img: "/public/AlexanderAnt.jpg",
        category: "Decoracion",
        description: "Cuadro pintado a mano en acrílico sobre lienzo."
    },

    {id:'2', name: "Paul Blenkhorn",  price: 460, img:"/public/PaulBlenkhorn.jpg", category: "Modern Art", description: "Cuadro original pintado a mano sobre tela en tonos verdes, naranjas y blanco roto. " },
    {id:'3', name: "Pawel Czerwinski",  price: 390, img:"/public/PawelCzerwinski.jpg",category: "Decoracion", description: "Obra abstracta ligera de fondo gris claro y azul con tonos naranjas. Pintura lisa sin textura" },
    {id:'4', name: "Chaewon Lee",  price: 600, img:"/public/ChaewonLee.jpg",category: "Modern Art", description: "Cuadro pintado a mano en acrílico sobre lienzo." },
]



export const asyncMock = (id) =>{
    return new Promise((res, rej)=>{

        setTimeout(()=>{
            res(!id ? products : products.find(product=> product.id === id))
        }, 1000)
    }) 
}

