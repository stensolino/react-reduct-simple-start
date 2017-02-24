// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

export const addProduct = (text) => {
    return (
        {
            type: 'ADD_PRODUCT',
            payload: {
                id: uid(),
                active: true,
                name: text
            }
        }
    );
};