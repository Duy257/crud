let store = {
    product: [
        { id: 0, first: 'Learn JavaScript', last: 'alooo', handle: '3455' },
        { id: 1, first: 'Learn Vue', last: 'alooo', handle: '345' },
        { id: 2, first: 'Build something awesome', last: 'alooo', handle: '35' }
    ]
}
localStorage.setItem('product', JSON.stringify(store.product))