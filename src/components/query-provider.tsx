"use client"

import type * as React from "react"
import { QueryClientProvider } from "@tanstack/react-query"

import { getQueryClient } from "@/lib/get-query-client"

interface QueryProviderProps {
  children: React.ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
