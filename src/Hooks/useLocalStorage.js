import React from 'react'

/** MY CUSTOM HOOK ⚓ */
export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  /**
   * encapsulado con @useEffect
   * el code se ejecuta después sólo una vez
   * al inicio y cada vez q cambia totalTodos
   * * protege el código
   */
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)

        let parsedItem
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false)
      } catch (e) {
        setLoading(false)
        setError(true)
      }
    }, 2000)
  }, [itemName, initialValue])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  // consumo el estado de este hook y retorno el setter del estado y el ls
  return { item, saveItem, loading, error }
}
