import React, { createContext, useContext, useMemo } from "react"
import createIdGenerator from "./createIdGenerator"

const context = createContext(createIdGenerator("autoid"))
const { Provider } = context

export function useId(id) {
  const generator = useContext(context)

  return useMemo(() => {
    if (id) {
      return id
    }

    return generator()
  }, [id, generator])
}

export function IdProvider({ children, prefix = "autoid" }) {
  const value = useMemo(() => createIdGenerator(prefix), [prefix])

  return <Provider value={value}>{children}</Provider>
}
