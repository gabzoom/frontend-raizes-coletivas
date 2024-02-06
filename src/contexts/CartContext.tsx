import { createContext, ReactNode, useState } from "react";
import Produto from "../models/Produto";
import { toastAlerta } from "../util/toastAlerta";


interface CartContextProps {
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {

    
    const [items, setItems] = useState<Produto[]>([])

   
    const quantidadeItems = items.length

    
    function adicionarProduto(produto: Produto) {
        const indice = items.find(items => items.id === produto.id)
        if(indice !== undefined){
            toastAlerta('Este Produto já foi Adicionado!', "info")
        }else{
            setItems(state => [...state, produto])
            toastAlerta('Produto Adicionado!', "sucesso")
        }
    }

    
    function removerProduto(produtoId: number) {
        const indice = items.findIndex(items => items.id === produtoId)
        let novoCart = [...items]

        if(indice >= 0){
            novoCart.splice(indice, 1)
            setItems(novoCart)
        }

    }

   
    function limparCart() {
        toastAlerta('Compra Efetuada com Sucesso',"sucesso")
        setItems([])
    }

    return (
        <CartContext.Provider 
            value={{ adicionarProduto, removerProduto, limparCart, items, quantidadeItems }}
        >
            {children}
        </CartContext.Provider>
    )
}