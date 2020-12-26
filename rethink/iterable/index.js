const range = {
    from: 1, 
    to : 20,
    [Symbol.iterator]() {
        return {
            next() {
                return { done: true, value: undefined };
            }
        }
    }
}