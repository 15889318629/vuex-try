const part1 = {
    state: {
        products: [{
                name: '鼠标1',
                price: 2000
            },
            {
                name: '键盘1',
                price: 4000
            },
            {
                name: '耳机1',
                price: 6000
            },
            {
                name: '显示屏1',
                price: 8000
            }
        ]
    },
    getters: {
        saleProducts(state) {
            let saleProducts = state.products.map(product => {
                return {
                    name: product.name,
                    price: product.price * 0.1
                }
            })
            return saleProducts;
        }
    },
    mutations: {
        minusPrice(state, payload) {
            state.products = state.products.map(item => {
                return {
                    ...item,
                    price: item.price - payload * 10
                }
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
    namespaced: true
}

export default part1;