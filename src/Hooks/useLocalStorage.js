import React from 'react'

/** CUSTOM HOOK ⚓ */
export const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  const [item, setItem] = React.useState(parsedItem)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  // consumo el estado de este hook y retorno el setter del estado y el ls
  return [item, saveItem]
}
