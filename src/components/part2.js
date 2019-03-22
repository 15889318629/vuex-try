const part2 = {
    state: {
        products: [{
                name: '鼠标',
                price: 20
            },
            {
                name: '键盘',
                price: 40
            },
            {
                name: '耳机',
                price: 60
            },
            {
                name: '显示屏',
                price: 80
            }
        ]
    },
    // getters: {
    //     saleProducts: (state) => {
    //         let saleProducts = state.products.map(product => {
    //             return {
    //                 name: product.name,
    //                 price: product.price * 0.7
    //             }
    //         })
    //         return saleProducts;
    //     }
    // },
    mutations: {
        minusPrice(state, payload) {
            let newPrice = state.products.forEach(product => {
                product.price -= payload
            })
        }
    },
    actions: {
        minusPriceAsync(context, payload) {
            setTimeout(() => {
                context.commit('minusPrice', payload);
            }, 2000)
        }
    },
    namespaced:true
}

export default part2;